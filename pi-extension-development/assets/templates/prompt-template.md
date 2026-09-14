---
description: What this prompt does
argument-hint: "<required-arg> [optional-arg]"
---
Do the task for $1 with context $@.

Defaults example: summarize in ${1:-7} bullet points.
Slice example: from third arg onward: ${@:3}.
