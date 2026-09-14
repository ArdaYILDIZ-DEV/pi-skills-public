# Packaging and structural checks

Read this when creating, moving, or diagnosing a skill package. Inspect the installed harness's documentation before assuming another platform behaves like Pi.

## Layout and identity

This skill uses the directory layout:

```text
writing-great-skills/
├── SKILL.md
├── references/
├── assets/
└── scripts/
```

Pi also supports flat Markdown skills directly inside its configured Pi skill roots. For example, a hypothetical `example-skill.md` may use sibling resources in `example-skill/references/`. Do not assume every harness or discovery directory supports flat files.

Preserve an existing layout unless migration is requested. Choose a directory skill for a new portable package. Create resource directories only when there is something useful to put in them.

- Keep the skill's `name` stable during a move; it is its invocation identity.
- A portable directory skill's name matches its directory. Pi permits a mismatch, but this package's validator deliberately rejects it to catch accidental renames.
- For flat files, the validator similarly requires the name to match the file stem.
- Do not leave both the old flat file and the new directory entry point discoverable: they can collide.
- Search for the old file path before moving; update actual path references, not unchanged references to the skill name.

## Frontmatter

```yaml
---
name: example-skill
description: Extract example data. Use when the user asks for that specific task.
---
```

| Field | Authoring rule |
|---|---|
| `name` | Explicit, 1-64 characters; lowercase letters, digits, single hyphens; no leading/trailing hyphen. Gerund form is optional. |
| `description` | Nonempty, at most 1024 characters; capability and concrete selection conditions. |
| `disable-model-invocation` | Pi option: boolean `true` hides the skill from automatic model selection; explicit `/skill:name` invocation remains available. Preserve existing visibility unless a change is approved. |
| Other fields | Check the target harness. Optional compatibility or metadata fields are not portable guarantees of selection or permission. |

Every discoverable skill needs a description. Reference documents and templates are resources, not additional skill entry points; do not add skill metadata to them merely for consistency.

## Paths and resource routing

Tool paths in the entry point resolve from the directory containing the skill file, not from the shell's working directory. After moving to `example-skill/SKILL.md`, a resource previously addressed as `example-skill/references/guide.md` becomes `references/guide.md`.

Use direct Markdown links for actual dependencies so readers and the validator can find them. Markdown links inside a reference document resolve from that document's directory; a reference can link back with `../SKILL.md`. Resolve tool arguments to absolute paths rather than carrying an assumed working directory between calls.

Use the [skill template](../assets/skill-template.md) for a new entry point. Replace its marked fields and remove inapplicable sections before saving the finished skill. Keep essential decisions in the entry point; link optional detail with the condition that requires reading it.

## Validator usage

Requires Node.js compatible with the installed Pi package. No additional dependency installation is required. Run these commands from this skill directory, or substitute absolute script and target paths:

```sh
node scripts/validate.mjs
node scripts/validate.mjs /absolute/path/to/another-skill
node scripts/validate.mjs /absolute/path/to/one.md /absolute/path/to/another-skill
node scripts/validate.mjs --help
node --test scripts/validate.test.mjs
```

No target means this package, regardless of the current working directory. A target is a Markdown skill file or a directory containing `SKILL.md`, not a registry directory. Pass multiple targets to check collisions among them.

The script finds Pi's package root through the `pi` executable on `PATH`. If a wrapper or standalone installation prevents discovery, explicitly supply a trusted installed package directory:

```sh
node scripts/validate.mjs --pi-root /absolute/path/to/pi-coding-agent /absolute/path/to/skill
```

The paths above are placeholders. The script imports Pi's installed `dist/core/skills.js` and `dist/utils/frontmatter.js`; it never imports code from a skill being checked. These internal interfaces were checked with Pi 0.85.1. If a later installation changes them, report the setup error rather than substituting a guessed parser. Use only a trusted Pi installation: importing its modules executes installed application code.

| Exit | Meaning |
|---|---|
| `0` | The implemented structural checks passed. |
| `1` | Invalid skill metadata, loading, or checked resource structure. |
| `2` | Usage, installation, or unexpected filesystem/runtime error. |

## What the validator does and does not prove

Checks Pi loader diagnostics, explicit matching names, boolean invocation metadata, and uniqueness among supplied targets. Follows simple inline Markdown links and reference definitions within the package; checks existence, prevents traversal outside the package, checks linked Markdown fences and JSON syntax. Linked scripts are not executed. External URLs are not fetched.

This is not a full CommonMark parser: manually review HTML links, complex or multiline link syntax, fragment anchors, code-span paths, and fenced examples. Angle-bracket destinations support filenames containing spaces. Unlinked files, the evaluation JSON's semantic schema, other configured skill locations, and behavior under a model are not checked. A successful result is not proof of correct triggering, useful output, security, or cross-harness compatibility.
