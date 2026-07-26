# PRIVACY — Olá Brasil

_Educational app. This document explains how data is handled; it is not legal
advice. Aligned with the spirit of Brazil's **LGPD** (Lei Geral de Proteção de
Dados)._

## What we collect

**By default: nothing leaves your device.** All learning data — profiles,
progress, flashcards, mistakes, interview sessions, document checklist entries —
is stored locally in your browser (IndexedDB) and device settings
(localStorage).

There is no analytics, no tracking, and no account required in the default
build.

## Sensitive data (citizenship)

The document checklist and interview practice may involve personal information.
This data:

- is **stored only on your device** by default,
- is **never uploaded** unless you explicitly enable a (future, opt-in) sync
  provider and configure it yourself,
- can be **exported** (Settings → Export data) or **permanently deleted**
  (Settings → Delete all data) at any time.

For form-practice, use placeholder/fictional data — the app never requires your
real document numbers.

## Your rights (LGPD-aligned)

- **Access / portability:** export all your data as JSON at any time.
- **Erasure:** delete all local data with one action; it is irreversible and
  immediate.
- **Data minimisation:** the app asks only for what a feature needs.

## Third-party services

- **AI assistant:** off by default (offline Mock). If *you* connect a provider
  (e.g. OpenAI) with your own key, the messages you send are processed by that
  provider under their terms. The app makes this explicit in Settings.
- **Speech:** the default uses your browser's built-in speech engine; audio for
  synthesis is handled by the browser/OS, not sent to us.

## Logs

The app does not ship server logs. Client-side error handling avoids writing
sensitive data to the console.

## Changes

Material changes to this policy will be reflected in-app and in this file's
Git history.
