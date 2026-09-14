# Package Manifest — Distribute via npm or git

Source: <https://pi.dev/docs/latest/packages>

## Manifest

```json
{
  "name": "my-package",
  "keywords": ["pi-package"],
  "pi": {
    "extensions": ["./extensions"],
    "skills": ["./skills"],
    "prompts": ["./prompts"],
    "themes": ["./themes"]
  }
}
```

- Paths are relative to package root. Arrays support globs plus `!exclusions`. Positive globs load visible paths in lexical order. List dot-prefixed paths explicitly.
- `keywords: ["pi-package"]` makes the package appear in the gallery. Optional `video` (mp4) or `image` (png/jpg/gif/webp) shows a preview.
- No manifest: fallback to convention dirs `extensions/` (`.ts`/`.js`), `skills/` (`SKILL.md` recursive), `prompts/` (`.md` non-recursive), `themes/` (`.json`).

Full template in `assets/templates/package.json`.

## Dependencies

- Runtime deps: `dependencies`. Pi installs with `npm install --omit=dev`, so `devDependencies` are absent at runtime.
- Core Pi packages: list in `peerDependencies` with `"*"` and do not bundle: `@earendil-works/pi-ai`, `@earendil-works/pi-agent-core`, `@earendil-works/pi-coding-agent`, `@earendil-works/pi-tui`, `typebox`.
- Bundling another pi package: add to `dependencies` plus `bundledDependencies`, reference via `node_modules/<pkg>/extensions` in the `pi` manifest.

## Install and settings

```json
{
  "packages": ["npm:@foo/bar@1.0.0", "git:github.com/user/repo@v1"],
  "extensions": ["/abs/path/to/ext.ts", "/abs/path/to/dir"]
}
```

Commands:

- `pi install npm:@foo/bar`, `pi install git:github.com/user/repo@v1`, `pi install ./local/path`, `pi install /abs/path`
- `pi -e npm:@foo/bar` tries without installing (ephemeral)
- `pi list`, `pi remove npm:@foo/bar`, `pi update`, `pi update --all`, `pi update --extensions`
- `-l` writes to project `.pi/settings.json` instead of global `~/.pi/agent/settings.json`
- Version-pinned npm specs and git refs are skipped by updater; move ref with `pi install git:host/user/repo@new-ref`

## Filtering (settings object form)

```json
{
  "packages": [
    {
      "source": "npm:my-package",
      "extensions": ["extensions/*.ts", "!extensions/legacy.ts"],
      "skills": [],
      "prompts": ["prompts/review.md"],
      "themes": ["+themes/legacy.json"]
    }
  ]
}
```

Omit a key to load all of that type, `[]` loads none, `!pattern` excludes, `+path` force-includes, `-path` force-excludes. Filters narrow the manifest, they never widen it.

## Scope

Same package in global and project settings: project entry wins unless it has `autoload: false`, then it acts as a delta. Identity by npm name, git URL without ref, or resolved absolute path.
