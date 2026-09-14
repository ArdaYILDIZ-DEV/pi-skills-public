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
