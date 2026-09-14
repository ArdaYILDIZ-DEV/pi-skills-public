#!/usr/bin/env bash
#
# Fails if the working-tree diff of the given files touches anything other
# than comment lines. Heuristic: strips lines that are entirely a comment
# (by extension) and blank lines, then checks whether any +/- lines remain.
# Requires git. Exit 0 = comments only, 1 = code changed, 2 = usage error.

set -u

if [ "$#" -eq 0 ]; then
  echo "usage: comments-only.sh <file>..." >&2
  exit 2
fi

status=0
for f in "$@"; do
  case "$f" in
    *.py|*.pyi|*.sh|*.bash) re='^[+-][[:space:]]*(#|"""|'"'''"'|$)' ;;
    *.go)                                                  re='^[+-][[:space:]]*(//|$)' ;;
    *.c|*.h|*.js|*.jsx|*.mjs|*.cjs|*.ts|*.tsx|*.mts|*.cts) re='^[+-][[:space:]]*(//|/\*|\*|\*/|$)' ;;
    *)                      echo "skip (unknown type): $f" >&2; continue ;;
  esac

  # Lines beginning with +/- but not the +++/--- file headers.
  leftover=$(git diff -U0 -- "$f" \
    | grep -E '^[+-]' \
    | grep -Ev '^(\+\+\+|---)' \
    | grep -Ev "$re" || true)

  if [ -n "$leftover" ]; then
    echo "CODE CHANGED: $f" >&2
    printf '%s\n' "$leftover" >&2
    status=1
  fi
done

exit "$status"
