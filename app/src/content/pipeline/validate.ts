/**
 * Content validation pipeline (CLI: `npm run seed:validate`).
 *
 * Validates the entire seed bundle against the Zod schema and runs extra
 * integrity checks that the schema alone can't express:
 *  - unique ids within each collection
 *  - every referenced sourceId actually exists
 *  - every lesson dialogueId resolves
 *  - reports how much content is human-verified vs AI-generated
 *
 * Exits non-zero on any problem so it can gate CI.
 *
 * Uses relative imports (no '@' alias) so it runs under plain tsx.
 */
import { contentBundleSchema } from '../../domain/content/schema';
import { rawBundle, contentCounts } from '../seed';

type Problem = { where: string; message: string };

function checkUniqueIds(problems: Problem[]) {
  for (const [key, items] of Object.entries(rawBundle)) {
    const seen = new Set<string>();
    for (const item of items as Array<{ id: string }>) {
      if (seen.has(item.id)) {
        problems.push({ where: key, message: `duplicate id: ${item.id}` });
      }
      seen.add(item.id);
    }
  }
}

function checkSourceRefs(problems: Problem[]) {
  const sourceIds = new Set(rawBundle.sources.map((s) => s.id));
  const withSource: Array<{ id: string; sourceId?: string }> = [
    ...rawBundle.citizenshipTopics,
    ...rawBundle.documentTemplates,
    ...rawBundle.interviewQuestions,
    ...rawBundle.phrases,
  ];
  for (const item of withSource) {
    if (item.sourceId && !sourceIds.has(item.sourceId)) {
      problems.push({
        where: 'sourceId',
        message: `${item.id} references missing source ${item.sourceId}`,
      });
    }
  }
}

function checkDialogueRefs(problems: Problem[]) {
  const dialogueIds = new Set(rawBundle.dialogues.map((d) => d.id));
  for (const lesson of rawBundle.lessons) {
    for (const dId of lesson.dialogueIds) {
      if (!dialogueIds.has(dId)) {
        problems.push({
          where: 'lesson.dialogueIds',
          message: `${lesson.id} references missing dialogue ${dId}`,
        });
      }
    }
  }
}

export function validate(): { ok: boolean; problems: Problem[] } {
  const problems: Problem[] = [];

  const parsed = contentBundleSchema.safeParse(rawBundle);
  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      problems.push({ where: issue.path.join('.'), message: issue.message });
    }
  }

  checkUniqueIds(problems);
  checkSourceRefs(problems);
  checkDialogueRefs(problems);

  return { ok: problems.length === 0, problems };
}

// Run when invoked directly.
const isMain =
  typeof process !== 'undefined' &&
  process.argv[1] &&
  process.argv[1].endsWith('validate.ts');

if (isMain) {
  const { ok, problems } = validate();
  const verified = [...rawBundle.vocab, ...rawBundle.phrases].filter(
    (i) => i.verification === 'human-verified',
  ).length;
  const total = rawBundle.vocab.length + rawBundle.phrases.length;

  console.log('Content counts:', JSON.stringify(contentCounts, null, 2));
  console.log(`Human-verified vocab/phrases: ${verified}/${total}`);

  if (!ok) {
    console.error(`\n❌ ${problems.length} content problem(s):`);
    for (const p of problems.slice(0, 50)) {
      console.error(`  [${p.where}] ${p.message}`);
    }
    process.exit(1);
  }
  console.log('\n✅ Content is valid.');
}
