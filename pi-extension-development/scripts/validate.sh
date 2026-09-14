#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
fail=0

check() {
  if eval "$2"; then
    echo "ok: $1"
  else
    echo "FAIL: $1"
    fail=1
  fi
}

check "SKILL.md exists" "[ -f '$ROOT/SKILL.md' ]"
check "frontmatter name matches dir" "grep -q '^name: pi-extension-development' '$ROOT/SKILL.md'"
check "description has Use when" "grep -qi 'Use when' '$ROOT/SKILL.md'"
check "references present" "[ -f '$ROOT/references/extension-api.md' ] && [ -f '$ROOT/references/lifecycle-events.md' ] && [ -f '$ROOT/references/package-manifest.md' ]"
check "templates present" "[ -f '$ROOT/assets/templates/extension-single.ts' ] && [ -f '$ROOT/assets/templates/package.json' ]"
check "single template imports ExtensionAPI" "grep -q 'ExtensionAPI' '$ROOT/assets/templates/extension-single.ts'"
check "single template uses TypeBox" "grep -q 'Type.Object' '$ROOT/assets/templates/extension-single.ts'"
check "package template has pi-package keyword" "grep -q 'pi-package' '$ROOT/assets/templates/package.json'"
check "no ALWAYS/NEVER shouting in SKILL" "! grep -q '^ALWAYS\|^NEVER' '$ROOT/SKILL.md'"

if [ "$fail" -ne 0 ]; then
  echo "validate: FAILED"
  exit 1
fi
echo "validate: PASS"
