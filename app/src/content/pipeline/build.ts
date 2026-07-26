/**
 * Content build step (CLI: `npm run seed:build`).
 *
 * Validates the seed bundle and writes a single validated JSON snapshot to
 * `src/content/generated/bundle.json` — useful as a backup, for inspection, or
 * for feeding an external review/translation workflow. The app itself seeds from
 * the typed modules, not this file.
 *
 * Uses relative imports (no '@' alias) so it runs under plain tsx.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { getContentBundle, contentCounts } from '../seed';
import { validate } from './validate';

const { ok, problems } = validate();
if (!ok) {
  console.error(`❌ Refusing to build: ${problems.length} content problem(s).`);
  for (const p of problems.slice(0, 20))
    console.error(`  [${p.where}] ${p.message}`);
  process.exit(1);
}

const bundle = getContentBundle();
const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'generated');
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, 'bundle.json');
writeFileSync(outFile, JSON.stringify(bundle, null, 2), 'utf8');

console.log('Content counts:', JSON.stringify(contentCounts));
console.log(`✅ Wrote validated bundle → ${outFile}`);
