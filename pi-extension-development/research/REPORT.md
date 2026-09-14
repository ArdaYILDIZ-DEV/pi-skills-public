# REPORT — Pi Extension Mimarisi (skill için veri)

En iyi yapı: çekirdek minimal, her yetenek izole paket. Yeni LLM yeteneği/event gate/UI gerekiyorsa TypeScript Extension, tekrarlanan workflow ise Skill/Template, paylaşım ise Pi Package yap [S1,S2,S3,S4].

Önerilen yeniden kullanılabilir iskelet: `extensions/` (single -> dir -> package evrimi), `skills/*/SKILL.md` (name/description zorunlu), `prompts/*.md` ($1/$@/default), `themes/*.json`, kökte `package.json` içinde `pi` manifest + `pi-package` keyword [S1,S2,S3,S5,S6].

Lifecycle kritik: `project_trust` -> `session_start` -> `resources_discover` -> `input/before_agent_start/agent_start/turn/tool_*` -> `session_shutdown`; factoryde background iş başlatma, `session_start`a ertele ve shutdownda kapat; async factory startupı bloklar [S1].

Dağıtım/güven: auto-discovery `~/.pi/agent/extensions/` global ve `.pi/extensions/` proje (trust sonrası, `/reload` hot), test `pi -e`, paylaşım `pi install npm:/git:/local`, runtime deps `dependencies`, core `peerDependencies *`; extension full yetkiyle çalışır, permission sistemi yok, gerekirse containerize et [S1,S2,S7].

Kanıtlar: S1 extensions, S2 packages, S3 skills, S4 index, S5 templates, S6 themes, S7 repo. Hepsi fetched yes.

Bilinmeyenler: ExtensionAPI tam method listesi (shortcut/flag/rendering) truncated kaldı, skill yazılmadan önce `extensions.md` ham dosya okunmalı. Settings şema detayları ve `resources_discover` örnekleri için de ham docs taranmalı.
