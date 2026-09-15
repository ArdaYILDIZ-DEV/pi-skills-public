# Professional calibration examples

Constructed fixtures test register and fidelity. They are not quotations, model trials, or evidence of universal workplace norms.

## Routine email

Input: `I was wondering whether you might possibly be able to send the revised invoice by Friday.`

Output: `Could you send the revised invoice by Friday?`

Preserve the request, revised invoice, and Friday. Do not add urgency or make it a demand.

## Workplace chat

Brief: `Tell the team the deploy is paused because the database migration failed. We do not know the cause yet.`

Output: `The deploy is paused because the database migration failed. We don't know the cause yet.`

Do not invent an owner, fix, timeline, or impact.

## Pull request description

Notes: `cache key now includes locale; prevents English result being reused for French request; tests added for en/fr`

Output:

> Include the locale in the cache key
>
> The cache could reuse an English result for a French request because the locale wasn't part of the key. This change adds it and covers the English/French case in the cache tests.

Do not claim broader language coverage or test execution beyond the supplied notes.

## Code review

Stiff: `It may be beneficial to consider whether the cleanup operation could potentially be bypassed in this branch.`

Natural: `Could this branch return before the cleanup runs?`

The question remains uncertain. Do not rewrite it as an established bug.

## Technical precision

Input: `It is advisable to select Retry (Lee, 2020).`

Output: `Try selecting Retry (Lee, 2020).`

Preserve advisory force, the exact UI label, and the citation.

## Already fitting

Input: `I haven't tested this on Windows yet, so I'd rather not merge it today.`

Output: unchanged.

The testing gap and preference are already clear. A visible edit is not required.

## Replace significance with supplied mechanism

Input: `We updated the cache key to include locale, underscoring our commitment to a seamless experience. This prevents an English result from being reused for a French request.`

Output: `We added locale to the cache key so an English result won't be reused for a French request.`

The source supplies the mechanism and effect. No latency measurement or additional language coverage is added.

## Missing metrics stay missing

Input: `We redesigned the onboarding checklist, highlighting our commitment to user retention.`

Output: `We redesigned the onboarding checklist.`

Do not turn an assertion of commitment into a retention improvement, completion-time metric, or measured result.

## Added, run, and passed are different

Notes: `Retry testi eklendi. Henüz çalıştırmadım. Staging'de doğrulanması gerekiyor.`

Output: `A retry test has been added, but I haven't run it yet. This still needs to be verified in staging.`

No passing test, production success, owner, or deadline is implied.

## Local observation is not a root cause

Notes: `Timeout'u sadece staging'de gördük. Cache kaynaklı olabilir ama kesin değil.`

Output: `We've only seen the timeout in staging. It may be related to the cache, but we're not sure yet.`

The environment, uncertainty, and lack of diagnosis survive. Do not remove distinct qualifiers to meet a one-hedge limit.

## Preference is not a requirement

Input: `I'd prefer a separate helper here because we use this check in two places.`

Output: unchanged.

Do not rewrite as `Extract a helper before merging`; no merge gate was supplied.

## Preserve domain meaning and actual contrast

Input: `The issue is CPU utilization, not memory usage. Terminate the worker only if it stops responding.`

Output: unchanged.

`Utilization`, `terminate`, the contrast, and `only if` are load-bearing, not bureaucratic filler.

## Courtesy can carry the relationship

Input: `Thanks for sending the revised quote. Could you also confirm whether shipping is included? Best, Deniz`

Output: unchanged.

An external request can keep genuine thanks and a sign-off. Do not force it into a chat fragment or a courtesy quota.

## Evidence does not authorize a stronger promise

Notes: `İadeyi talep edebilirim ama onaylanacağını söyleyemem.`

Output: `I can request a refund, but I can't guarantee it will be approved.`

Ability is not a promise to act, and a request is not approval.

## Remove ceremony without removing courtesy

Input: `Thanks for sending the revised quote. I am writing to ask whether you could provide an explanation of the support fee. Could you also confirm whether shipping is included? Best, Deniz`

Output: `Thanks for sending the revised quote. Could you explain the support fee? Could you also confirm whether shipping is included? Best, Deniz`

`bluf/buried-lede` removes the announcement of the request, not the substantive thanks. `plain-language/bureaucratic-phrasing` simplifies the verb without turning the question into a demand.

## A PR decision is not proof of implementation

Input: `We made a decision to include the locale in the cache key in order to prevent an English result from being reused for a French request. Tests were added for en/fr. I haven't run them yet. The cache key is shared by the API and the worker.`

Output: `We decided to include the locale in the cache key to prevent an English result from being reused for a French request. Tests were added for en/fr. I haven't run them yet. The cache key is shared by the API and the worker.`

`plain-language/preferred-term` and `plain-language/bureaucratic-phrasing` shorten the phrasing, not the timeline. A decision is not necessarily completed implementation. `active-voice` does not authorize inventing who added the tests. Shared `API` terminology needs no expansion for this engineering audience.

## Correction and degree can coexist

Context: a colleague described the staging issue as widespread.

Input: `Actually, very few clients are affected. We have only checked staging so far.`

Output: unchanged.

For `plain-language/redundant-qualifier`, `Actually` corrects the earlier claim and `very few` describes degree. `Only` and `so far` limit the evidence; none is disposable filler.

## Put a prerequisite first without weakening it

Input: `Terminate the worker only if it stops responding.`

Output: `Only if the worker stops responding, terminate it.`

This is an optional instructional reordering under `technical-writing/condition-before-action`; the original is also clear, as in the technical-precision example above. Retain `only if` and the exact operation. Do not replace it with a general recommendation to restart the worker, or claim the worker has already stopped responding.

## Stable names require an established mapping

Context: the author confirms that `runner` and `worker` both name the component officially called the worker.

Input: `The runner accepts the job. The worker writes the result.`

Output: `The worker accepts the job. The worker writes the result.`

`terminology/inconsistent-naming` uses the supplied mapping, not a guessed synonym. Without that mapping, do not merge the terms. `The repository contains the history. The working tree contains my uncommitted edits` describes distinct concepts and should stay unchanged.

## Resolve references, not behavior you have to invent

Input: `The API calls the worker. It retries twice.`

Clarification: `Which component retries twice: the API or the worker?`

For `ambiguity/vague-reference`, the missing referent changes technical behavior. Ask rather than infer. By contrast, `The worker timed out. It retries twice` has a clear local antecedent and needs no mechanical noun repetition.

## Match acronym explanations to the reader

Context: the author says TTFB means time to first byte; the recipient is a nontechnical customer and the term appears only once.

Input: `We measured TTFB, but we haven't compared the results yet.`

Output: `We measured the time until the first byte of the response arrived, but we haven't compared the results yet.`

`plain-language/unexplained-acronym` supplies usable meaning without adding a glossary entry or implying an improvement. For engineers who share the term, the original can stay unchanged. If the expansion is unknown, ask rather than guess.

## Split independent jobs without inventing their relationship

Input: `The migration is ready and the dashboard has a layout bug and we need a reviewer.`

Output: `The migration is ready. The dashboard has a layout bug. We need a reviewer.`

`structure/overloaded-sentence` separates unrelated status items. It does not establish whether the reviewer is needed for the migration or dashboard, nor whether either causes or blocks the other. Ask about that association if the requested handoff needs it.
