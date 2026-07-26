import type { CourseLesson } from '@/domain/content/schema';

export const aula10: CourseLesson = {
  id: 'course-aula-10',
  order: 10,
  aula: 'Aula 10',
  titleFa: 'آزمون جامع (Simulado) — مرور و خودارزیابی',
  titlePt: 'Simulado — Prova Comentada',
  cefr: 'A2',
  summaryFa:
    'این درس یک آزمون تمرینی (Simulado) بر پایهٔ نمونه‌سؤال‌های آماده‌سازی فدرال است. هدف آن خودارزیابی و مرور آموخته‌ها است، نه پیش‌بینی قبولی یا ردی در آزمون واقعی. با پاسخ دادن به سؤال‌ها می‌فهمید کدام بخش‌ها (صرف فعل در زمان حال و گذشته، تبدیل به آینده، درک متن) را باید بیشتر تمرین کنید. پاسخ‌ها را جدی بگیرید، اما نتیجه را فقط برای برنامه‌ریزی مطالعهٔ خودتان به کار ببرید.',
  objectivesFa: [
    'با ساختار آزمون proficiência و بخش‌های اصلی آن آشنا شوید.',
    'صرف فعل در زمان حال (presente) و گذشتهٔ کامل (pretérito perfeito) را تمرین کنید.',
    'جمله‌ها را به زمان آینده (futuro) تبدیل کنید.',
    'مهارت درک متن (interpretação de texto) را بسنجید.',
    'مدیریت زمان در آزمون حضوری را تمرین کنید.',
  ],
  sections: [
    {
      headingFa: '۱. ساختار آزمون proficiência و نکته‌های آزمون',
      bodyFa:
        'آزمونِ سنجش تسلط بر زبان پرتغالی (Avaliação de Proficiência) معمولاً چند بخش دارد: (۱) تکمیل متن با صرف درست فعل‌ها در زمان حال و گذشته؛ (۲) تبدیل جمله‌ها میان زمان‌ها (مثلاً به آینده)؛ (۳) هماهنگی فعل و فاعل (concordância)؛ (۴) درک متن با پاسخ به پرسش‌ها؛ و (۵) یک redação (انشا) با حداقل ۲۰ خط دربارهٔ یک موضوع مشخص. طبق دستورالعمل‌های آزمون: به همهٔ سؤال‌ها پاسخ دهید، با خودکار آبی یا مشکی بنویسید، انشا باید دست‌کم ۲۰ خط و مطابق موضوع باشد، و از زمان تعیین‌شده فراتر نروید.',
      examples: [
        {
          pt: 'A redação deve conter no mínimo 20 linhas.',
          fa: 'انشا باید حداقل ۲۰ خط داشته باشد.',
          pron: 'آ رِداسائو دِوی کُنتِر نو مینیمو وینتی لینیاس',
          note: 'شمردن خط‌ها را فراموش نکنید؛ انشای کوتاه‌تر از ۲۰ خط نمرهٔ کامل نمی‌گیرد.',
        },
        {
          pt: 'Escrever com caneta azul ou preta.',
          fa: 'با خودکار آبی یا مشکی بنویسید.',
          pron: 'اِسکرِوِر کُن کانِتا آزول اُ پرِتا',
          note: 'مداد یا خودکار رنگی پذیرفته نمی‌شود.',
        },
      ],
    },
    {
      headingFa: '۲. مدیریت زمان',
      bodyFa:
        'در آزمون حضوری از زمان تعیین‌شده فراتر نروید. یک نکتهٔ ساده: اول همهٔ سؤال‌های آسانِ صرف فعل و جای‌خالی را سریع پاسخ دهید تا امتیاز مطمئن را از دست ندهید، سپس زمان کافی (حدود یک‌سوم وقت) را برای redação نگه دارید، چون طولانی‌ترین و پرامتیازترین بخش است. اگر به سؤالی گیر کردید، از آن رد شوید و در پایان برگردید.',
      examples: [
        {
          pt: 'Não ultrapassar o tempo determinado.',
          fa: 'از زمان تعیین‌شده فراتر نروید.',
          pron: 'نائو اولتراپاسار او تِمپو دِتِرمینادو',
          note: 'قبل از شروع، وقت را بین بخش‌ها تقسیم کنید.',
        },
      ],
    },
  ],
  keyPointsFa: [
    'زمان حال منظم (‑ar): eu ‑o، você/ele/ela ‑a، nós ‑amos، eles/elas ‑am.',
    'گذشتهٔ کامل منظم (‑ar): eu ‑ei، você/ele/ela ‑ou، nós ‑amos، eles/elas ‑aram.',
    'برای تبدیل به آینده معمولاً پایانهٔ futuro (‑rá/‑rei/‑remos) یا ساختار «ir + مصدر» را به کار ببرید.',
    'در درک متن، پاسخ را مستقیم از خودِ متن پیدا کنید و بازنویسی نکنید.',
    'برای redação: حداقل ۲۰ خط، مطابق موضوع، با خودکار آبی یا مشکی.',
  ],
  quiz: [
    {
      id: 'course-aula-10-q1',
      type: 'fill-blank',
      prompt:
        'Complete no PRESENTE: Após o trabalho, João ___ (voltar) para casa.',
      promptFa:
        'فعل داخل پرانتز را در زمان حال (presente) برای سوم‌شخص مفرد (João) صرف کنید.',
      options: [],
      answer: 'volta',
      explanationFa:
        'فعل «voltar» منظم و از گروه ‑ar است. برای سوم‌شخص مفرد (ele/ela/João) پایانه «‑a» می‌شود: «João volta».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-10-q2',
      type: 'fill-blank',
      prompt: 'Complete no PRESENTE: Ele ___ (dar) um beijo em sua esposa.',
      promptFa: 'فعل بی‌قاعدهٔ «dar» را در زمان حال برای «ele» صرف کنید.',
      options: [],
      answer: 'dá',
      explanationFa:
        '«dar» فعل بی‌قاعده است؛ سوم‌شخص مفرد در زمان حال «dá» می‌شود (با accent): «Ele dá um beijo».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-10-q3',
      type: 'mcq',
      prompt: 'Complete no PRESENTE: Enquanto eles ___ (jantar), conversam.',
      promptFa: 'کدام صرفِ «jantar» در زمان حال برای «eles» درست است؟',
      options: ['janta', 'jantam', 'jantaram', 'jantavam'],
      answer: 'jantam',
      explanationFa:
        'برای سوم‌شخص جمع (eles/elas) در زمان حالِ افعال ‑ar پایانه «‑am» است: «eles jantam».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-10-q4',
      type: 'fill-blank',
      prompt:
        'Complete no PRETÉRITO PERFEITO: No ano passado, Rafaella ___ (viajar) para a Europa.',
      promptFa:
        'فعل «viajar» را در گذشتهٔ کامل (pretérito perfeito) برای سوم‌شخص مفرد صرف کنید.',
      options: [],
      answer: 'viajou',
      explanationFa:
        'در گذشتهٔ کاملِ افعال ‑ar، سوم‌شخص مفرد پایانه «‑ou» می‌گیرد: «Rafaella viajou».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-10-q5',
      type: 'mcq',
      prompt:
        'Complete no PRETÉRITO PERFEITO: Ela ___ (conhecer) a torre Eiffel.',
      promptFa: 'کدام شکلِ گذشتهٔ کاملِ «conhecer» برای «ela» درست است؟',
      options: ['conhece', 'conheceu', 'conheci', 'conhecerá'],
      answer: 'conheceu',
      explanationFa:
        'در گذشتهٔ کاملِ افعال ‑er، سوم‌شخص مفرد پایانه «‑eu» می‌گیرد: «Ela conheceu».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-10-q6',
      type: 'fill-blank',
      prompt:
        'Complete no PRETÉRITO PERFEITO: À noite, as duas ___ (sair) para jantar.',
      promptFa:
        'فعل بی‌قاعدهٔ «sair» را در گذشتهٔ کامل برای سوم‌شخص جمع (as duas) صرف کنید.',
      options: [],
      answer: 'saíram',
      explanationFa:
        '«sair» در گذشتهٔ کامل برای سوم‌شخص جمع «saíram» می‌شود (با accent روی í): «as duas saíram».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-10-q7',
      type: 'mcq',
      prompt: 'Passe para o FUTURO: "Mamãe comprou um carro novo."',
      promptFa: 'کدام گزینه جملهٔ گذشته را درست به زمان آینده تبدیل می‌کند؟',
      options: [
        'Mamãe compra um carro novo.',
        'Mamãe comprará um carro novo.',
        'Mamãe comprava um carro novo.',
        'Mamãe tinha comprado um carro novo.',
      ],
      answer: 'Mamãe comprará um carro novo.',
      explanationFa:
        'برای آیندهٔ سادهٔ سوم‌شخص مفرد، به مصدر پایانه «‑á» اضافه می‌شود: comprar → «comprará».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-10-q8',
      type: 'fill-blank',
      prompt:
        'Passe para o FUTURO: "Busquei meu irmão no aeroporto." → Eu ___ meu irmão no aeroporto.',
      promptFa:
        'فعل «buscar» را از گذشته به آیندهٔ سادهٔ اول‌شخص مفرد تبدیل کنید (Eu …).',
      options: [],
      answer: 'buscarei',
      explanationFa:
        'آیندهٔ سادهٔ اول‌شخص مفرد با پایانه «‑rei» ساخته می‌شود: buscar → «buscarei».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-10-q9',
      type: 'fill-blank',
      prompt:
        'Complete com o verbo correto: Semana passada eu ___ nesse restaurante (jantar).',
      promptFa:
        'با توجه به «semana passada» (هفتهٔ گذشته)، فعل «jantar» را در گذشتهٔ کامل اول‌شخص صرف کنید.',
      options: [],
      answer: 'jantei',
      explanationFa:
        'قید زمانِ «semana passada» گذشته است، پس گذشتهٔ کامل اول‌شخص: «eu jantei».',
      cefr: 'A2',
      skill: 'grammar',
    },
    {
      id: 'course-aula-10-q10',
      type: 'mcq',
      prompt:
        'Interpretação de texto: "Cristina é uma catadora de material reciclável…" — Quem é Cristina?',
      promptFa: 'بر اساس متن، شغل کریستینا چیست؟',
      options: [
        'É professora.',
        'É catadora de material reciclável.',
        'É motorista de ônibus.',
        'É cabeleireira formada.',
      ],
      answer: 'É catadora de material reciclável.',
      explanationFa:
        'متن می‌گوید کریستینا «catadora de material reciclável» (جمع‌آورندهٔ مواد بازیافتی) است. او در حال گذراندن دورهٔ آرایشگری است اما هنوز آرایشگرِ فارغ‌التحصیل نیست.',
      cefr: 'A2',
      skill: 'reading',
    },
    {
      id: 'course-aula-10-q11',
      type: 'mcq',
      prompt:
        'Interpretação de texto: Para onde o casal pretende viajar e qual é o sonho deles?',
      promptFa: 'بر اساس متن، این زوج قصد سفر به کجا را دارند و آرزویشان چیست؟',
      options: [
        'Para a Europa; comprar uma casa.',
        'Para o nordeste do Brasil; ter o primeiro filho.',
        'Para São Paulo; abrir um salão.',
        'Para Londres; conhecer a torre Eiffel.',
      ],
      answer: 'Para o nordeste do Brasil; ter o primeiro filho.',
      explanationFa:
        'متن می‌گوید آن‌ها می‌خواهند به «nordeste do Brasil» (شمال‌شرق برزیل) سفر کنند و آرزویشان داشتنِ «primeiro filho» (اولین فرزند) در حدود دو سال آینده است.',
      cefr: 'A2',
      skill: 'reading',
    },
  ],
  estimatedMinutes: 20,
  sourceNoteFa:
    'برگرفته و ساده‌سازی‌شده از جزوهٔ آماده‌سازی فدرال — Aula 10 (Simulado).',
};
