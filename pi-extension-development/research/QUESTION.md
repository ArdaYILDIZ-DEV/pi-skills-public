# QUESTION — Pi Agent Harness Extension Mimarisi

Ana soru: <https://pi.dev/docs/latest> resmi dokümanlarına göre en iyi Pi extension mimarisi nasıl olmalı, nasıl bir yapıya sahip olmalı? Yeniden kullanılabilir bir skill olarak üretmek için hangi veri toplanmalı?

Tarih: 2026-09-09 (UTC)

## Alt sorular

1. Pi nedir, Agent Harness nedir, Extension kavramı nereye oturuyor? (SQ1: kavram + türler)
2. Extension türleri neler? (slash command, agent skill, theme, MCP server, hook, custom tool?) Her biri ne zaman kullanılır? (SQ2)
3. Extension dizin yapısı ve manifest şeması nasıl? (`pi.json` / `package.json` / `.pi/` dizini?) Zorunlu alanlar neler? (SQ3)
4. Extension lifecycle nasıl çalışıyor? Kurulum, yükleme sırası, settings, auth, environment, permissions modeli nasıl? (SQ4)
5. En iyi pratikler neler? İzole edilebilir, yeniden kullanılabilir, versiyonlanabilir extension için önerilen desenler neler? (SQ5)
6. Resmi örnek / template / referans extension repo var mı? Skill olarak paketlerken klasör kalıbı nasıl olmalı? (SQ6)

## Done-when (gözlenebilir)

- SQ2-SQ4 resmi docs fetch ile cevaplanmış (en az 3 primary source fetch edilmiş).
- SQ3 için dizin ağacı + manifest örneği NOTES.md içinde tam alıntı ya da özet olarak var.
- SQ5-SQ6 için best-practice + örnek repo linki SOURCES.md içinde fetched: yes olarak kayıtlı.
- REPORT.md yazılabilir durumda, skill iskeleti için klasör önerisi çıkarılabiliyor.

## Planlanan sorgular

1. `Pi agent harness extensions official docs pi.dev`
2. `Pi extensions directory structure manifest pi.json`
3. `Pi agent skills slash commands custom tools extensions guide`
