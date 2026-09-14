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
