import type { CourseLesson } from '@/domain/content/schema';

export const aula11: CourseLesson = {
  id: 'course-aula-11',
  order: 11,
  aula: 'Aula 11',
  titleFa: 'درک و تفسیر متن',
  titlePt: 'Compreensão e Interpretação de Texto',
  cefr: 'A2',
  summaryFa:
    'در این درس یاد می‌گیرید چطور یک متن پرتغالی برزیلی را بخوانید و بفهمید. تفاوت بین «درک متن» (compreensão) یعنی آنچه متن دقیقاً می‌گوید، و «تفسیر متن» (interpretação) یعنی نتیجه‌ای که خواننده از متن می‌گیرد را می‌آموزید؛ همچنین پیدا کردن ایدهٔ اصلی، تشخیص اطلاعات صریح از اطلاعات ضمنی، استنتاج (خواندن بین خطوط)، و روش پاسخ به سؤال‌های آزمونی درباره‌ی متن.',
  objectivesFa: [
    'تفاوت میان درک متن (compreensão) و تفسیر متن (interpretação) را بشناسید.',
    'ایدهٔ اصلی (ideia principal) یک متن را پیدا کنید.',
    'اطلاعات صریح (روشن در متن) را از اطلاعات ضمنی (پنهان در متن) جدا کنید.',
    'با استنتاج «بین خطوط» متن را بخوانید (ler nas entrelinhas).',
    'به سؤال‌های آزمونی درباره‌ی متن دقیق و متکی بر خودِ متن پاسخ دهید.',
  ],
  sections: [
    {
      headingFa: 'راهبردهای خواندن (Estratégias de leitura)',
      bodyFa:
        'خواندن یک مهارت است و با چند تکنیک ساده بهتر می‌شود. مهم‌ترین‌ها: با دقت و آرام هر بند را بخوانید؛ اگر نفهمیدید برگردید و دوباره بخوانید؛ اگر واژه‌ای را نمی‌دانید در فرهنگ لغت نگاه کنید و به متن برگردید؛ ایده‌های اصلی را خلاصه کنید و واژه‌های کلیدی (palavras-chave) را علامت بزنید. هدف ما از خواندن فرق می‌کند: گاهی برای یادگیری، گاهی برای گرفتن یک اطلاعات.',
      examples: [
        {
          pt: 'Leia com atenção cada parágrafo.',
          fa: 'هر بند را با دقت بخوان.',
          pron: 'لِیا کُم آتِنسّاو کادا پاراگرافُ',
        },
        {
          pt: 'Vá assinalando as palavras-chave do texto.',
          fa: 'واژه‌های کلیدی متن را کم‌کم علامت بزن.',
          note: 'palavras-chave یعنی «واژه‌های کلیدی» که ایدهٔ اصلی را نشان می‌دهند.',
        },
      ],
    },
    {
      headingFa: 'درک متن در برابر تفسیر متن',
      bodyFa:
        'compreensão (درک متن) یعنی تحلیل و رمزگشایی همان چیزی که واقعاً در متن نوشته شده است؛ کار با آنچه عینی و صریح است. اما interpretação (تفسیر متن) یعنی نتیجه‌هایی که با پیوند دادن ایده‌های متن به واقعیت می‌گیریم؛ برداشت ذهنی و شخصیِ خواننده. یک قاعدهٔ مهم: می‌توان متنی را فهمید بدون آنکه آن را تفسیر کرد، اما نمی‌توان متنی را تفسیر کرد بدون آنکه اول آن را فهمید.',
      examples: [
        {
          pt: 'A informação está presente no texto. (compreensão)',
          fa: 'اطلاعات در خودِ متن هست. (درک متن)',
        },
        {
          pt: 'A informação está fora do texto, mas tem conexão com ele. (interpretação)',
          fa: 'اطلاعات بیرون از متن است، اما با آن ارتباط دارد. (تفسیر متن)',
          note: 'درک = عینی (objetividade)؛ تفسیر = ذهنی (subjetividade).',
        },
      ],
    },
    {
      headingFa: 'اطلاعات صریح و اطلاعات ضمنی',
      bodyFa:
        'اطلاعات صریح (explícita) آن است که با کلمات روشن در متن نوشته شده؛ برای یافتنش کافی است در متن دنبال جمله‌ی مربوط بگردید. اطلاعات ضمنی (implícita) با کلمه نوشته نشده اما از بافت متن (contexto) فهمیده می‌شود. برای سؤال‌های صریح، پاسخ همیشه در خودِ متن است؛ حدس نزنید و از دانش بیرونی خود استفاده نکنید.',
      examples: [
        {
          pt: 'A Sofia e o Eduardo jogam vôlei num clube. (explícito)',
          fa: 'سوفیا و ادواردو در یک باشگاه والیبال بازی می‌کنند. (صریح)',
        },
        {
          pt: 'A Maya e a Adriana não praticam nenhum esporte. → A Adriana não pratica esporte. (explícito)',
          fa: 'مایا و آدریانا هیچ ورزشی نمی‌کنند. ← پس آدریانا ورزش نمی‌کند. (صریح)',
          note: 'پاسخ مستقیم در جملهٔ متن آمده است؛ فقط باید همان جمله را پیدا کنید.',
        },
      ],
    },
    {
      headingFa: 'خواندن بین خطوط (استنتاج)',
      bodyFa:
        'ler nas entrelinhas یعنی «خواندن بین خطوط»: نتیجه‌ای که با حدس و استنتاج (dedução) می‌گیریم، در حالی که با همان کلمات در متن نوشته نشده اما در بافت متن پنهان است. برای این کار از دانش و تجربهٔ خودمان کمک می‌گیریم؛ اما استنتاج باید همیشه بر پایهٔ نشانه‌های موجود در متن باشد، نه تصور آزاد.',
      examples: [
        {
          pt: 'O coelho pegou no sono e o jabuti passou. → O coelho perdeu por excesso de confiança. (implícito)',
          fa: 'خرگوش خوابش برد و لاک‌پشت رد شد. ← خرگوش به‌خاطر اعتماد‌به‌نفس زیاد باخت. (ضمنی)',
          note: 'متن نمی‌گوید «مغرور بود»، اما از رفتار او این را استنتاج می‌کنیم.',
        },
        {
          pt: '"Acho que posso dormir um pouco. Ele vai demorar."',
          fa: '«فکر کنم می‌توانم کمی بخوابم. او دیر می‌رسد.»',
          pron: 'آشُ کِ پُسُ دُرمیر اوم پوکو',
          note: 'این جمله نشانهٔ همان غرور است که آن را در متن نوشته نشده استنتاج می‌کنیم.',
        },
      ],
    },
    {
      headingFa: 'پیدا کردن ایدهٔ اصلی — یک مثال کامل',
      bodyFa:
        'ایدهٔ اصلی (ideia principal) موضوع محوری متن است؛ چیزی که بیشتر جمله‌ها دربارهٔ آن حرف می‌زنند. برای یافتنش بپرسید: «این متن در کل دربارهٔ چیست؟». متن کوتاه زیر را بخوانید: «Os brasileiros dão nomes diversos aos seus filhos. Os nomes João e Maria são os mais comuns. Alguns pais preferem nomes de parentes, como homenagem. Outros gostam de nomes de pessoas famosas.» ایدهٔ اصلی: «نام‌گذاری کودکان در برزیل و رایج‌ترین نام‌ها». یک استنتاج (بین خطوط): چون گفته می‌شود نام بستگان «به‌عنوان ادای احترام» انتخاب می‌شود، می‌فهمیم که خانواده و احترام به بزرگ‌ترها در فرهنگ برزیل ارزشمند است — این جمله مستقیم در متن نیست.',
      examples: [
        {
          pt: 'Os nomes João e Maria são os mais comuns no Brasil.',
          fa: 'نام‌های ژُائو و ماریا رایج‌ترین نام‌ها در برزیل هستند.',
          note: 'این جملهٔ صریح، بخشی از ایدهٔ اصلی متن را می‌سازد.',
        },
        {
          pt: '"Zé" é um apelido para "José".',
          fa: '«زه» لقبی برای «ژُزه» است.',
          note: 'apelido یعنی «لقب»؛ جزئیاتِ متن، نه ایدهٔ اصلی.',
        },
      ],
    },
    {
      headingFa: 'پاسخ به سؤال‌های آزمونی متن',
      bodyFa:
        'در آزمون‌ها معمولاً اول یک متن می‌آید و بعد چند سؤال. روش درست: اول کل متن را بخوانید، بعد سؤال را بخوانید و کلمهٔ پرسشی را بشناسید — Quem (چه کسی)، O que (چه چیزی)، Onde (کجا)، Por que (چرا). سپس در متن دنبال جملهٔ مربوط بگردید. برای سؤال‌های درکی، پاسخ در متن است؛ برای سؤال‌های تفسیری، پاسخ را از بافت استنتاج کنید اما همیشه با تکیه بر متن.',
      examples: [
        {
          pt: 'Pergunta: "Quem é Luiza?" → Resposta: "É a professora de português."',
          fa: 'سؤال: «لوئیزا کیست؟» ← پاسخ: «او معلم پرتغالیِ [راوی] است.»',
          note: 'Quem سؤال از «چه کسی» است؛ پاسخ صریح در متن آمده.',
        },
        {
          pt: 'Pergunta: "Ele conseguiu o emprego?" → Resposta: "Sim." (Andreia diz: "pode começar semana que vem")',
          fa: 'سؤال: «او کار را گرفت؟» ← پاسخ: «بله.» (آندریا می‌گوید: «هفتهٔ بعد می‌توانی شروع کنی»)',
          note: 'در متن «بله، گرفت» نوشته نشده؛ از دعوت به کار آن را استنتاج می‌کنیم (تفسیر).',
        },
      ],
    },
  ],
  keyPointsFa: [
    'compreensão = آنچه متن دقیقاً می‌گوید (عینی، داخل متن)؛ interpretação = نتیجه‌ای که خواننده می‌گیرد (ذهنی، بیرون متن اما مرتبط).',
    'بدون درک متن، تفسیر ممکن نیست؛ اول بفهم، بعد تفسیر کن.',
    'اطلاعات صریح (explícita) در کلمات متن است؛ اطلاعات ضمنی (implícita) از بافت فهمیده می‌شود.',
    'ایدهٔ اصلی (ideia principal) موضوعی است که بیشتر متن دربارهٔ آن حرف می‌زند.',
    'در آزمون: اول متن، بعد سؤال؛ پاسخ درکی را در متن پیدا کن و پاسخ تفسیری را با تکیه بر متن استنتاج کن.',
  ],
  quiz: [
    {
      id: 'aula-11-q1',
      type: 'mcq',
      prompt:
        'Texto: "Sou Flávio, moro em Campinas. A Sofia e o Eduardo jogam vôlei num clube. A Maya e a Adriana preferem ler e escutar músicas." — Quem joga vôlei?',
      promptFa: 'بر پایهٔ متن، چه کسانی والیبال بازی می‌کنند؟',
      options: [
        'A Sofia e o Eduardo',
        'A Maya e a Adriana',
        'O Flávio',
        'Ninguém',
      ],
      answer: 'A Sofia e o Eduardo',
      explanationFa:
        'این یک سؤال درکی با اطلاعات صریح است؛ جملهٔ «A Sofia e o Eduardo jogam vôlei» مستقیماً در متن آمده است.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'aula-11-q2',
      type: 'mcq',
      prompt:
        'No mesmo texto: "A Maya e a Adriana não praticam nenhum esporte." — A Adriana pratica algum esporte?',
      promptFa: 'آیا آدریانا ورزشی انجام می‌دهد؟',
      options: [
        'Não, ela não pratica esporte',
        'Sim, ela joga vôlei',
        'Sim, ela nada',
        'O texto não diz',
      ],
      answer: 'Não, ela não pratica esporte',
      explanationFa:
        'اطلاعات صریح است: متن می‌گوید «não praticam nenhum esporte» (هیچ ورزشی نمی‌کنند)، پس آدریانا هم ورزش نمی‌کند.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'aula-11-q3',
      type: 'mcq',
      prompt:
        'Fábula: "O coelho saiu na frente, pensou que podia dormir. Pegou no sono e o jabuti venceu." — O que podemos concluir (interpretação)?',
      promptFa:
        'از این متن چه چیزی را می‌توان استنتاج کرد (تفسیر / خواندن بین خطوط)؟',
      options: [
        'O coelho perdeu por excesso de confiança',
        'O jabuti é mais rápido que o coelho',
        'O coelho estava doente',
        'A corrida foi cancelada',
      ],
      answer: 'O coelho perdeu por excesso de confiança',
      explanationFa:
        'این استنتاج است: متن نمی‌گوید «مغرور بود»، اما از تصمیم به خوابیدن حین مسابقه، اعتماد‌به‌نفسِ بیش از حد را استنتاج می‌کنیم. خرگوش سریع‌تر است، پس گزینهٔ «لاک‌پشت سریع‌تر است» نادرست است.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'aula-11-q4',
      type: 'mcq',
      prompt:
        'Texto sobre nomes: "Os brasileiros dão nomes diversos aos filhos; João e Maria são os mais comuns; alguns usam nomes de parentes ou de famosos." — Qual é a ideia principal?',
      promptFa: 'ایدهٔ اصلی این متن چیست؟',
      options: [
        'Como os brasileiros escolhem os nomes dos filhos',
        'A vida de João e Maria',
        'A história do Brasil',
        'Os esportes preferidos das crianças',
      ],
      answer: 'Como os brasileiros escolhem os nomes dos filhos',
      explanationFa:
        'ایدهٔ اصلی موضوعی است که بیشتر جمله‌ها دربارهٔ آن‌اند: نحوهٔ نام‌گذاری کودکان در برزیل. گزینه‌های دیگر یا جزئی‌اند یا در متن نیستند.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'aula-11-q5',
      type: 'mcq',
      prompt: 'Qual é a diferença entre compreensão e interpretação de texto?',
      promptFa: 'تفاوت درک متن و تفسیر متن چیست؟',
      options: [
        'Compreensão é o que está escrito; interpretação é a conclusão do leitor',
        'Compreensão é a opinião do leitor; interpretação é o que está escrito',
        'São exatamente a mesma coisa',
        'Interpretação vem antes da compreensão',
      ],
      answer:
        'Compreensão é o que está escrito; interpretação é a conclusão do leitor',
      explanationFa:
        'درک متن (compreensão) کار با آنچه صریح در متن نوشته شده است؛ تفسیر (interpretação) نتیجه‌گیریِ ذهنی خواننده است. ضمناً اول درک می‌آید و بعد تفسیر، نه برعکس.',
      cefr: 'A2',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 15,
  sourceNoteFa: 'برگرفته و ساده‌سازی‌شده از جزوهٔ آماده‌سازی فدرال — Aula 11.',
};
