# Professional artifacts

Use the section matching the requested artifact. These are structural defaults, not templates to fill mechanically.

## Routine email

Lead with the reason for writing or the request. Include the context needed to act, then the deadline or next step. Keep genuine courtesy; remove ritual phrases that delay a simple request.

Do not add urgency, apologies, gratitude, or a sign-off the user did not request when those choices alter the relationship or stance.

## Workplace chat

Give enough context to identify the work, then the status, question, decision, or blocker. Short fragments and omitted greetings are normal when the thread supplies context. Do not expand a one-line update into an email.

## Pull request description

State what changes and why. Add implementation choices, compatibility concerns, and tests only when supplied or known. Do not claim the change fixes an issue, passes tests, or has consensus without evidence.

## Code review

Name the affected behavior or maintenance concern. Prefer a clear question when unsure and a direct statement when the issue is established.

- Uncertain: `Could this return before the cleanup runs?`
- Established from supplied context: `This returns before the cleanup runs, so the temporary file is left behind.`

Do not wrap every concern in generic praise. Do not turn preference into requirement.

## Issue report

Keep observed behavior distinct from expected behavior and diagnosis. Preserve versions, reproduction steps, inputs, errors, and environment. If the cause is unknown, report the symptom rather than inventing one.

## Technical write-up

Introduce the practical question, observation, or surprising behavior early. Explain with concrete examples and exact terms. First person is acceptable when it accurately identifies the author's work or interpretation. Do not insert analogies, anecdotes, or rhetorical questions by quota.

## Update or handoff

Include only known fields:

- current state;
- completed work;
- blocker or unresolved decision;
- next action;
- owner or deadline, if supplied.

A list is useful when these are independent status fields. Prose is better for one connected update.

## Support communication

Acknowledge the specific problem without scripted empathy. Give the action, boundary, or information request clearly. Do not promise resolution, refund, timing, or escalation unless supplied.

## Evidence and action checks by artifact

| Artifact | Before returning it, check |
|---|---|
| Email | What is requested, from whom, and by when if supplied? Keep a request a request; do not add a deadline or imply approval |
| Chat | Is this an update, question, blocker, or decision? Preserve relevant thread context without repeating the whole thread |
| PR | Separate what changed, intended effect, and testing evidence. `Tests added` is not `tests passed`; a local result is not production verification |
| Review | Distinguish observed defect, possible failure, preference, and blocking requirement. Give the supplied consequence or rationale; do not convert a suggestion into a merge gate |
| Issue | Keep observed behavior, expected behavior, reproduction, and suspected cause distinct. Do not silently repair an error string or invent a missing reproduction step |
| Handoff | Separate done, pending, blocked, and next. Include ownership and dates only when known; a plan is not a commitment by someone else |
| Support | Acknowledge the specific problem. Distinguish an available action from a promised outcome; keep unknown cause or timing explicit |
| Write-up | Establish the practical question, explain the reasoning, and preserve assumptions. Use headings or a summary when they help navigation or are requested |

For high-stakes external communication, clarity and relational care can both matter. Do not force the request into sentence one at the cost of essential context or impose a courtesy percentage. Ask about missing authority, commitments, or consequential stance; do not ask merely to fill optional template fields.
