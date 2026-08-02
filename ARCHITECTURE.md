# ARCHITECTURE — Olá Brasil

هدف این سند: ثبت تصمیم‌های فنی، دلایل، و مرزهای معماری به‌گونه‌ای که پروژه بلندمدت قابل‌نگهداری و قابل‌توسعه بماند.

## ۱. انتخاب پلتفرم و توجیه آن

خواستهٔ اولیه React Native + Expo بود. پس از بررسی محیط اجرا، این تصمیم گرفته و مستند شد:

- **محدودیت محیط:** این یک sandbox ابری headless است؛ شبیه‌ساز iOS/Android و ابزار Expo به‌صورت قابل‌اتکا در دسترس نیست، اما Node/Vite/Playwright واقعاً اجرا می‌شوند. تحویلِ چیزی که _واقعاً اجرا و تست شود_ بر تحویلِ پروژهٔ Expoی نیمه‌پیکربندی و اثبات‌نشده اولویت دارد.
- **تصمیم:** ساخت یک **PWA موبایل‌محور** با **Vite + React 18 + TypeScript**. این هدف «موبایل عالی + وب» را واقعاً برآورده می‌کند (نصب‌شدنی، آفلاین، تمام‌صفحه) و در همین محیط قابل‌اثبات است.
- **مسیر Native (مستند برای آینده):** منطق دامنه (SRS، محتوا، لایه‌های AI/TTS، مدل داده، i18n) در ماژول‌های مستقل از DOM قرار می‌گیرد. مهاجرت به React Native فقط لایهٔ presentational را تغییر می‌دهد؛ منطق دست‌نخورده منتقل می‌شود. Dexie با WatermelonDB/SQLite و Web Speech با expo-speech جایگزین می‌شوند.

## ۲. لایه‌بندی

```
UI (React components, screens)         ← فقط presentation، وابسته به i18n/theme
  │
Application (hooks, stores/Zustand)    ← use-cases: startLesson, reviewCard, runInterview
  │
Domain (pure TS)                       ← SRS(FSRS)، placement، scoring، content schema (Zod)
  │
Infrastructure (adapters)              ← db(Dexie)، ai(providers)، tts(providers)، storage
```

قاعده: وابستگی همیشه رو به داخل است. Domain به هیچ فریم‌ورک یا مرورگری وابسته نیست و کاملاً unit-testable است.

## ۳. لایهٔ Provider-Agnostic برای AI

`src/infra/ai/` شامل یک اینترفیس `AIProvider` است:

```ts
interface AIProvider {
  id: string;
  chat(messages: ChatMessage[], opts: ChatOptions): Promise<ChatResult>;
}
```

- پیاده‌سازی پیش‌فرض: `MockAIProvider` — بدون کلید، مبتنی بر قواعد/اسکریپت برای مکالمه و شبیه‌ساز مصاحبه. اپ بدون هیچ کلیدی کار می‌کند.
- پیاده‌سازی‌های واقعی: `OpenAIProvider`, `AnthropicProvider`, `GeminiProvider` که فقط وقتی کلید در `.env` باشد فعال می‌شوند.
- انتخاب Provider در `aiRegistry` و از طریق تنظیمات/متغیر محیطی. راهنمای افزودن Provider در `docs/adding-ai-provider.md`.
- **ضد‌توهم (anti-hallucination):** پاسخ‌های مربوط به شهروندی از منابع تأییدشدهٔ محلی (`content/sources`) بازیابی می‌شوند و منبع + تاریخ بررسی نمایش داده می‌شود؛ در نبود منبع، عدم‌قطعیت اعلام می‌شود.

## ۴. لایهٔ TTS/STT

`src/infra/tts/` با اینترفیس `TTSProvider`:

- پیش‌فرض: `WebSpeechTTS` (رایگان، `pt-BR`, کنترل سرعت).
- قابل‌تعویض: `CloudTTSProvider` (مثلاً Google/Azure/ElevenLabs) پشت همان اینترفیس، با Cache.
- STT: اینترفیس `STTProvider` + `WebSpeechSTT` (در مرورگرهای پشتیبان). ضبط خام با `MediaRecorder` همیشه کار می‌کند.
- **صداقت:** ارزیابی دقیق فونمی در نسخهٔ اولیه ادعا نمی‌شود؛ معماری برای افزودن آن آماده است (`PronunciationAssessor` interface).

## ۵. داده و ذخیره‌سازی

- **محلی‌محور (local-first):** IndexedDB از طریق Dexie. اپ به‌صورت پیش‌فرض کاملاً آفلاین کار می‌کند.
- **همگام‌سازی اختیاری:** اینترفیس `SyncProvider` با پیاده‌سازی `NoopSync` (پیش‌فرض) و طرح `SupabaseSync` (مستند، غیرفعال تا زمان تنظیم کلید). حل تعارض: last-write-wins بر مبنای `updatedAt` + نگهداری نسخهٔ محتوا.
- مدل داده کامل در `DATABASE.md`.

## ۶. i18n و RTL

- `i18next` با سه namespace زبان: `fa` (پیش‌فرض)، `pt`، `en`.
- جهت صفحه با ویژگی `dir` روی `<html>` و توکن‌های منطقی CSS (`margin-inline`, `padding-inline`) کنترل می‌شود تا سوییچ RTL/LTR بدون به‌هم‌ریختگی باشد.
- متن پرتغالیِ داخل محتوا همیشه LTR است حتی در رابط RTL (با `dir="ltr"` محلی).

## ۷. امنیت و حریم خصوصی (خلاصه؛ کامل در SECURITY.md/PRIVACY.md)

- بدون ذخیرهٔ رمز خام؛ پروفایل‌های محلی بدون رمز و روی دستگاه‌اند. احراز هویت ابری اختیاری و مبتنی بر Provider امن (مثل Supabase Auth) مستند شده.
- داده‌های حساس شهروندی به‌صورت پیش‌فرض آپلود نمی‌شوند.
- Secretها فقط در `.env` (نمونه: `.env.example`). هیچ کلیدی commit نمی‌شود.
- LGPD: حق حذف داده و Export داده پیاده‌سازی می‌شود.

## ۸. تست

- Domain: Vitest (خالص، پوشش بالا).
- UI/Integration: Testing Library + jsdom.
- E2E: Playwright روی نسخهٔ build‌شده (سفر کامل کاربر).

## ۹. ساختار پوشه‌ها (app/)

```
app/
  src/
    domain/       srs/, placement/, scoring/, content/(schema)
    infra/        db/, ai/, tts/, sync/, storage/
    app/          store (zustand), i18n, router, theme
    ui/           components/, screens/
    content/      seed/(typed data), pipeline/(generation+validation)
  test/           unit + integration
  e2e/            playwright specs
```
