# NOTES — Pi Extension Mimarisi (SQ bazlı)

## SQ1: Pi / Harness / Extension nereye oturuyor?

- Pi minimal terminal coding harness, çekirdek küçük tutulur, genişleme 5 mekanizma ile olur: Extensions (TS), Skills (MD), Prompt Templates (MD), Themes (JSON), Pi Packages (bundle) [S4].
- Monorepo: `@earendil-works/pi-coding-agent` (CLI), `pi-agent-core` (runtime/tool calling/state), `pi-ai` (multi-provider), `pi-tui` (terminal UI) [S7].
- Felsefe: sub-agents/plan mode gibi şeyler çekirdekte yok, extension/paket ile eklenir [S4 özet].

## SQ2: Extension türleri, ne zaman hangisi?

- Extension (TypeScript/JavaScript): full customization. Custom tools (`pi.registerTool`), event interception (tool_call block/modify, context inject, compaction customize), user interaction (`ctx.ui` select/confirm/input/notify), custom UI (`ctx.ui.custom`), custom commands (`pi.registerCommand`), session persistence (`pi.appendEntry`), custom rendering [S1].
- Skill (Markdown): on-demand capability paketi. Workflow, setup, helper scripts, reference docs. System prompta sadece name+description girer, tam SKILL.md `read` ile lazy yüklenir (progressive disclosure). `/skill:name` ile zorlanır [S3].
- Prompt Template (Markdown): `/name` ile genişleyen snippet. Filename = komut adı. `$1/$@/$ARGUMENTS/${1:-default}/${@:N:L}` destekler, non-recursive discovery [S5].
- Theme (JSON): TUI renkleri, ayrı mekanizma, extension değil [S6].
- Pi Package: yukarıdakilerin npm/git ile dağıtım bundleı [S2].
- Kural: tekrarlanan prompt/workflow -> template/skill, LLMin çağırabileceği yeni yetenek/event gate/UI -> extension, paylaşım -> package [S1,S2,S3,S4].

## SQ3: Dizin yapısı + manifest şeması

- Auto-discovery (hot-reload `/reload` ile):
  - Global: `~/.pi/agent/extensions/*.ts`, `~/.pi/agent/extensions/*/index.ts`
  - Proje: `.pi/extensions/*.ts`, `.pi/extensions/*/index.ts` (trust sonrası yüklenir)
  - Hızlı test: `pi -e ./path.ts` (reload yok, geçici) [S1].
- Skills pathleri: global `~/.pi/agent/skills/`, `~/.agents/skills/`, proje `.pi/skills/`, `.agents/skills/` (trust sonrası, cwd+ancestors), packages `skills/`, settings `skills`, CLI `--skill` [S3].
- Prompts: `~/.pi/agent/prompts/*.md`, `.pi/prompts/*.md`, packages, settings, `--prompt-template` [S5].
- 3 extension formu [S1]:
  1. Single file `my-extension.ts`
  2. Directory `my-extension/index.ts` + `tools.ts` + `utils.ts`
  3. Package `my-extension/package.json` + `src/index.ts` + `node_modules`
- Minimal extension iskeleti [S1]:
  `export default function(pi: ExtensionAPI) { pi.on(...); pi.registerTool(... Type.Object ...); pi.registerCommand(...) }`, jiti ile derlemesiz TS, async factory startupı bloklar (`session_start` öncesi tamamlanır).
- Pi package manifest [S2]:

  ```json
  {
    "name": "my-package",
    "keywords": ["pi-package"],
    "pi": { "extensions": ["./extensions"], "skills": ["./skills"], "prompts": ["./prompts"], "themes": ["./themes"] }
  }
  ```

  Paths package roota göre relative, glob + `!exclusion` destekler, dot-pathler explicit listelenir. Manifest yoksa convention dirs: `extensions/` (.ts/.js), `skills/` (SKILL.md recursive), `prompts/` (.md), `themes/` (.json).
- Skill yapısı [S3]:

  ```
  my-skill/SKILL.md (+ scripts/, references/, assets/)
  ---
  name: my-skill
  description: ne yapar + ne zaman kullanılır, spesifik yaz
  ---
  ```

  name: max 64, lowercase a-z0-90-9 hyphen, Pi parent-dir match zorunluluğunu gevşetir. description max 1024 zorunlu. license/compatibility/metadata/allowed-tools/disable-model-invocation opsiyonel.

## SQ4: Lifecycle, settings, auth, permissions

- Lifecycle sırası [S1]: `project_trust` (sadece user/global + CLI `-e`, proje ext yüklenmeden önce) -> `session_start(reason:startup/new/resume/fork)` -> `resources_discover(reason:startup/reload)` -> per-prompt: extension commands -> `input` -> skill/template expand -> `before_agent_start` -> `agent_start` -> `message_*/turn_*/context/before_provider_*/tool_*` -> `agent_end/agent_settled`. `/new|/resume|/fork|/clone` -> `session_before_*` -> `session_shutdown` -> `session_start` + `resources_discover`. `/compact` -> `session_before_compact/session_compact`. Exit -> `session_shutdown`.
- `resources_discover` ek `skillPaths/promptPaths/themePaths` döndürebilir [S1].
- Background resource kuralı [S1]: factoryde process/socket/watcher/timer başlatma, `session_start` veya ihtiyaç anına ertele, `session_shutdown` idempotent kapat.
- Settings ile ek path: `settings.json` içinde `packages: [npm:/git:/local]`, `extensions: [...]` [S1,S2]. `pi install/remove/list/update`, `-l` proje settings, `--omit=dev` production install, runtime deps `dependencies` olmalı, core paketler `peerDependencies *` olmalı [S1,S2]. Filter object form `extensions/skills/prompts/themes` + `+path/-path/!pattern` [S2].
- Trust/security: Extension full system yetkisiyle çalışır, sadece güvenilen kaynak [S1]. Proje `.pi` trust prompt/`trust.json`/`defaultProjectTrust` sonrası yüklenir. Skill executable içerebilir, review şart [S3]. Pi built-in permission sistemi yok, sınır gerekiyorsa Gondolin/Docker/OpenShell ile containerize et [S7].
- Available imports [S1]: `@earendil-works/pi-coding-agent` (tipler), `typebox` (şema), `pi-ai` (StringEnum), `pi-tui` (render), npm deps (yanında package.json + npm install), `node:` builtins.

## SQ5: En iyi pratikler (yeniden kullanılabilirlik için)

- Resmi dokümandan çıkan desen: single-file ile başla, büyüyünce directory form, npm deps gerekince package form + `pi.extensions` manifest [S1].
- Async init gerekiyorsa async factory kullan (örn remote model fetch + `registerProvider`), ama long-lived işi session_starta bırak [S1].
- Eventleri minimal tut: block/modify sadece gerektiğinde (`tool_call` gate, `tool_result` düzeltme, `context` inject, `session_before_compact` custom summary) [S1].
- State kalıcı olacaksa `pi.appendEntry`, geçici ise in-memory + shutdown cleanup [S1].
- Dağıtım için: `pi-package` keyword, `pi.{extensions,skills,prompts,themes}` explicit, runtime deps `dependencies`, core `peerDependencies *`, diğer pi paketlerini `bundledDependencies` + `node_modules/` path ile referansla [S2].
- Skill description spesifik yaz (poor: Helps with PDFs, good: Extracts text/tables... Use when...) [S3]. Relative path kullan, setup `npm install` tarif et [S3].
- Test: `pi -e` hızlı, `npm link` + `pi install link:` gerçek paket testi, sonra npm/git publish [arama özeti, S2 ile tutarlı].

## SQ6: Örnek / template / skill kalıbı

- Resmi örnekler: `packages/coding-agent/examples/extensions` içinde `summarize.ts`, `snake.ts` dahil implementasyonlar [S1]. Kendi repo `.pi/extensions/*.ts`, `.pi/prompts/*.md`, `.pi/skills/*.md` canlı örnekler [S7].
- Skill repo örnekleri: `anthropics/skills`, `badlogic/pi-skills` (web search, browser, Google APIs) [S3]. Galeri: `pi.dev/packages` [S2].
- Skill olarak paketlenecek yapı önerisi (bu araştırmadan türetildi, resmi şablon değil):

  ```
  pi-extension-skill/
    SKILL.md (name, description, compatibility, ne zaman extension/skill/template)
    references/
      extension-lifecycle.md
      extension-api.md (registerTool/Command/on/ctx.ui)
      package-manifest.md
      skill-frontmatter.md
      trust-security.md
    assets/
      templates/extension-single.ts
      templates/extension-dir-index.ts
      templates/package.json
      templates/skill-SKILL.md
      templates/prompt-template.md
    scripts/ (opsiyonel validate.sh)
  ```

  Gerekçe: Pi zaten extensions/skills/prompts/themes ayrımını dayatıyor [S4], dağıtım manifest+convention ile oluyor [S2], skill progressive disclosure istiyor [S3].

## Çelişki / boşluk

- Çelişki yok. `pi-map.org` community guide detayları resmi docs ile aynı yönde, cite edilmedi (fetched unofficial, S kayıt dışı).
- Boşluk: ExtensionAPI tam method listesi (registerShortcut/registerFlag/setSessionName vb) bu fetch diliminde truncated kaldı, skill yazarken `extensions.md` tam dosya okunmalı.
