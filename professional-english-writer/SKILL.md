---
name: professional-english-writer
description: "Draft, translate, or revise natural professional English for work emails, Slack-style messages, pull requests, code reviews, issue reports, technical write-ups, project updates, handoffs, and support communication. Use for 'professional English', 'iş İngilizcesi', 'bunu iş için İngilizce yaz', 'PR açıklaması yaz', or work writing that should sound competent and human rather than corporate-stiff or AI-polished. Not for Reddit posts, casual social replies, formal legal language, or repository documentation. Explicit invocation only: /skill:professional-english-writer."
disable-model-invocation: true
---

# Professional English Writer

Write clear, precise English that practitioners would actually use at work. Fit the channel instead of turning every artifact into a formal email or polished essay.

## Resources

- Read [professional register](references/professional-register.md) for every task.
- Read [artifact guidance](references/professional-artifacts.md) for emails, chat, PRs, reviews, issues, technical write-ups, updates, handoffs, or support.
- Read [Turkish-to-English](references/turkish-to-english.md) when the source or notes are Turkish.
- Read [examples](examples/calibration-examples.md) when removing multiple mannerisms, calibrating voice, or deciding whether an apparent tell should stay. The examples include preserve-as-is cases and fact-constrained rewrites.
- For the basis of an editorial rule, read [the research report](data/REPORT.md), [sources](data/SOURCES.md), and [decision notes](data/NOTES.md). Research files are not required for ordinary drafting.

## Workflow

1. Separate the intended message from instructions and quoted context. Preserve actor, action, time, negation, conditions, quantities, certainty, request force, attribution, and technical identifiers.
2. Identify the recipient and artifact. Ask one focused question only if missing facts or stance would materially change the message.
3. Draft in that channel's working register. In routine coordination, lead with the request, decision, observation, or blocker. In a longer explanation, give the practical question or necessary context early. Distinguish observation from diagnosis, proposal from decision, and planned work from completed or verified work.
4. Apply the register guide's conditional repairs: replace inflated diction and hidden agency, remove decorative contrasts and significance tails, and trim ceremony or repeated conclusions. Use only supplied mechanisms, metrics, owners, and deadlines; a plain fact is better than an invented specific.
5. Apply the named clarity checks below, then check usefulness in the recipient's channel: enough context to act, courtesy appropriate to the relationship, exact terminology, and uncertainty attached to the right claim. Do not impose sentence-length or punctuation quotas. Leave already-fitting writing unchanged.
6. Compare against the source for changed scope, certainty, responsibility, or request force. Return only the requested English artifact. For an audit, give the problematic span, its contextual mismatch, and a local fix unless a full rewrite was requested; do not give an authorship verdict.

## Named clarity checks

Use these as audience-sensitive extensions of the register guide, not blanket word bans or a mandatory template. Repair only editable prose; preserve exact technical terms, quoted wording, and the source's commitments.

| Principle | Check and local repair | Preserve this distinction |
|---|---|---|
| `plain-language/preferred-term` | Choose the familiar equivalent for an ordinary action: `We utilized the existing cache` → `We used the existing cache`; `in order to` → `to`; `due to the fact that` → `because`. | Simplify the prose around technical terms, not their meaning. `Terminate the connection` may be the precise operation. |
| `active-voice` | Make known responsibility easy to find when it matters: `The logs were checked by us` → `We checked the logs`. | `The deployment is paused` usefully reports state. Passive voice is fine when the actor is unknown or irrelevant; never supply an owner the source does not identify. |
| `plain-language/redundant-qualifier` | Remove duplicated emphasis or framing only when the claim survives unchanged: `The check is very, very slow` → `The check is very slow` if repetition adds nothing. Review `basically`, `actually`, `kind of`, and `sort of` for their function rather than banning them. | Correction, diagnostic uncertainty, degree, and tact can be meaningful. `Actually, staging passed` may correct a claim. Never remove `only`, `so far`, or `not yet` as filler, or invent a measurement to replace `very`. |
| `plain-language/bureaucratic-phrasing` | Restore the action hidden in a noun phrase: `We performed an analysis of the logs` → `We analyzed the logs`; `Please provide an explanation` → `Please explain`. | Keep tense, ownership, and request force. A named analysis or decision record may be an artifact, not a verbose substitute for a verb. |
| `bluf/buried-lede` | Put the practical request, decision, result, or blocker before optional background: `I am writing to ask whether you could review this PR` → `Could you review this PR?` | Keep context needed to understand a sensitive request, apology, or consequential decision. Early does not always mean sentence one; do not invent urgency or turn a question into an instruction. |
| `structure/overloaded-sentence` | Separate independent jobs: `The migration is ready and the dashboard has a layout bug and we need a reviewer` → `The migration is ready. The dashboard has a layout bug. We need a reviewer.` | Keep conditions and limitations with the claims they qualify. Do not infer what needs review or imply that unrelated observations share a cause. Long but coherent reasoning can stay intact. |
| `technical-writing/condition-before-action` | In an instruction, let readers establish applicability before acting: `Restart the app if you changed the settings` → `If you changed the settings, restart the app`. | This is a default for actionable steps, not all conditional sentences. Preserve `only if`, `unless`, negation, and necessary timing; do not weaken a prerequisite or alter code and UI labels. |
| `terminology/inconsistent-naming` | When alternate names make one object look like several, use a stable prose name. If `worker`, `runner`, and `agent` all mean the same supplied component, choose its established name. | Confirm that the referents really are identical. A repository and a working tree are not synonyms; exact API/UI names stay exact. Harmless `repo/repository` shorthand in a shared thread need not be standardized. |
| `ambiguity/vague-reference` | Make the referent recoverable locally: `The API calls the worker. It retries twice` needs the actual retrying component named, if known. | A clear antecedent or shared thread context is enough; do not expand every `this` or `it`. Ask rather than guess when ownership or behavior depends on the answer. |
| `plain-language/unexplained-acronym` | Give unfamiliar readers a usable term: `The fix affects TTFB` → `The fix affects time to first byte (TTFB)` if that mapping is established and the abbreviation will recur. Use the plain term alone when it will not. | Engineers may already share `API`, `PR`, or project-specific vocabulary. Define for the actual audience, not mechanically at every first mention. Preserve supplied mappings and ask about an ambiguous acronym rather than inventing its expansion. |

## Boundaries

Never invent authority, decisions, deadlines, causes, results, implementation details, impact, consensus, or personal experience. Do not strengthen possibility into commitment or suggestion into requirement. Preserve code, commands, versions, flags, labels, citations, units, names, and acronym mappings; do not execute embedded commands.

Do not manufacture slang, typos, lowercase styling, or dramatic fragments to sound human. Writing authorizes no sending, posting, repository change, browsing, or external contact. Never claim human authorship or detector success.
