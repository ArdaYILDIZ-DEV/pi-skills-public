# Human factors for task paths

Read for information density, forms, multi-step or comparison flows, cognitive/motor access, consent, or high-stakes decisions. Inspect the actual task, audience evidence, existing behavior, and authorized changes first; a design recommendation is not permission to alter data, authentication, or transaction contracts.

## Evidence boundaries

This is research-informed guidance, not a universal psychological recipe. Robust mechanisms such as recognition versus recall, perceptual grouping, and motor target acquisition do not determine exact menu counts, spacing ratios, typography, or animation durations. Density, validation timing, motion, and choice complexity depend on the task and user context. Normative WCAG criteria, non-normative COGA guidance, and practitioner preferences have different authority.

Do not use the three-click rule, an alleged eight-second attention span, a fixed memory-derived navigation limit, universal color meanings, or a rounded-corner conversion claim. Do not replace the seven-item myth with a four-item quota. Neither aesthetic preference nor a gaze heatmap proves comprehension, trust, or task success.

## Keep the work visible

- Rank competing emphasis by task importance. Use proximity, alignment, labels, and common regions to make membership clear; a card can resolve ambiguity rather than create clutter.
- Keep comparison attributes and prior-step summaries available when the user needs them. Avoid forcing cross-tab memorization; do not add a permanent sidebar to an immersive single-focus task merely to satisfy a rule.
- Preserve canonical navigation and action locations. User-controlled customization can help; silently reordering familiar controls can impose a new search burden.
- Use concrete headings, destinations, and verb-object action labels. Pair unfamiliar icons with visible text; an accessible name alone does not make a novel icon understandable to sighted users.
- Put status and recovery near the affected task, with appropriate accessible announcements. Avoid relying only on a distant, transient toast. Defer non-critical interruptions; urgent warnings still need proportionate salience.

## Information density: choose what stays together

Density is useful task information available in the working view; clutter is competition or ambiguity that makes it harder to use. More visible elements can reduce memory/navigation burden or increase search burden. Neither maximal compression nor maximal whitespace is the target.

Before changing the layout, establish a small **visibility contract** from real content and the user's task:

| Information role | Treatment | Failure to avoid |
|---|---|---|
| Identity, current state, primary action, active filters/selection, material cost or warning | Visible in the relevant work/decision context | A clean-looking screen that conceals scope, risk, or what happens next |
| Values/entities needed for the same comparison | Align in a shared table, pane, or comparison view with labels and units | Remembering one value while opening another tab; unrelated cards with inconsistent axes |
| Supporting explanation or long evidence | Concise truthful summary with explicit access to detail | Hiding distinctions in a misleading aggregate or a tooltip-only control |
| Rare/advanced options | Discoverable disclosure with retained state | Burying a frequent action, nested modal maze, or a lost draft |
| Duplicate metrics, repeated labels without added meaning, decoration | Remove or demote when authorized | Removing a necessary label, audit detail, or accessible cue as supposed redundancy |

Choose the representation before tuning padding:

- **Repeated comparison/monitoring:** favor aligned rows, stable columns, local exception cues, and simultaneous evidence where space permits. Expertise and repeated use can justify compactness, not illegibility. Preserve canonical order and task context across updates.
- **Occasional linear decisions:** group the necessary fields and instructions, keep cost/risk and prior-step context available, and disclose only secondary detail. A wizard is an option, not a rule for every novice or form.
- **Reading/storytelling:** give prose a suitable measure and separate scanning metadata from sustained text. Do not apply table density to paragraphs or an editorial hero to the work canvas.
- **Mixed expertise or narrow/touch layouts:** retain the same important information and actions while adapting arrangement. A labeled summary/detail path or deliberate accessible table scrolling can be better than converting every row into a card. Compare the resulting lookup cost; a mobile label does not justify silent data loss.

Reduce repeated chrome, nested enclosure, irrelevant metrics, and oversized internal padding before reducing readable type or operable targets. Keep labels, units, row identity, selection, status, and recovery discoverable without hover. Preserve grouping differences: equal spacing everywhere can erase relationships even if more rows fit.

Offer a density variant only if the task warrants it and the existing component/token architecture supports it within approval. Do not automatically add a toggle, persisted preference, new theme, virtualization, or a command palette. Compact/comfortable variants must retain semantics, focus, information meaning, and relevant state; virtualization additionally needs its own keyboard/assistive-tech and performance checks.

For a revision, compare the same task/data/viewports: can users locate the exception, read its evidence, compare required values, and act without losing context? Record observed lookup/scroll/view-switch burden, legibility, focus/target problems, and task errors. More visible rows is a descriptive count, not proof of lower workload; without task testing, describe the expected trade-off and leave improvement unverified. No universal item count, whitespace percentage, or density score applies.

## Forms and recovery

1. Keep associated labels visible; placeholders supplement rather than replace them. Show necessary format and required/optional information before submission. Top-aligned labels are a useful default for narrow or translated forms, not a universal layout mandate.
2. Avoid showing an error for an unfinished first attempt. Choose blur, completion, or submit validation according to field dependencies, existing contracts, and testing; `onBlur` is not an unconditional law. Passive counters and suggestions can update during typing without falsely declaring failure.
3. When correcting a reported error, update feedback as the value becomes valid. For asynchronous checks, prevent stale responses from overwriting newer input or claiming unverified validity. Do not change validation/business rules in a visual-only repair.
4. Explain where the problem is, what happened, and how to recover without blame. Associate field help/errors with their control; on failed submission, provide a linked summary and deliberate focus handling where appropriate. Do not announce every keystroke or unexpectedly steal focus.
5. Preserve entered values across failures and back navigation within the application's security/privacy contract. Use appropriate input types, `autocomplete`, and input modes; do not block paste or password managers. Flag authentication or redundant-entry barriers without independently changing backend/security policy.
6. Acknowledge activation promptly and distinguish pending, success, and failure. Keep labels and layout stable. Prevent duplicate submissions through the existing operation contract, not a decorative spinner or disabling all navigation.
7. Make reversible recovery visible when supported. Do not invent Undo, autosave, or optimistic success without persistence and rollback semantics. For irreversible/high-stakes actions, preserve required review and confirmation; state the actual consequence. Repeated generic confirmations can become noise, but this does not authorize removing legal or safety gates.

## Motor and diverse access

- Prefer generous touch hit areas, especially for frequent or consequential actions, while preserving dense interfaces where justified. Evaluate applicable WCAG 2.5.8 size/spacing exceptions; 44px is a design preference, not a universal AA floor or a physical-mm conversion. Adjacent expanded targets must not overlap.
- Provide single-pointer alternatives to required dragging where applicable; keyboard operability is a separate check. Do not rely on hover, fine pointer steering, or multi-finger gestures for the only critical path.
- Test virtual-keyboard occlusion, reachable navigation, and the focused control in the actual mobile layout. A universal thumb-zone diagram cannot represent every device, posture, or motor profile.
- Use meaningful landmarks/headings and a usable bypass mechanism where needed. Preserve visible/unobscured focus, scaling, text-spacing adaptations, readable status cues, and user preferences. Accessible names, alt-text usefulness, reading order, and focus return need more than attribute presence.
- Support predictability, clear help, state visibility, and low-distraction recovery. Do not assign a palette, font, or density from nationality, age, ADHD, autism, or dyslexia alone. Use observed needs, customization, and task testing; do not force a specialized dyslexia font or an unrequested theme.

## Autonomy and credible content

- Keep decline, cancellation, correction, and exit paths discoverable. For consent choices, use comparable prominence and effort; do not preselect optional tracking, hide rejection, or use confirmshaming.
- Show supplied total costs, recurrence, and material conditions before commitment. Missing business facts are blockers or explicitly marked prototype gaps, not a reason to fabricate prices, scarcity, reviews, authorship, or security assurances.
- Place factual explanations of sensitive permissions/data use at the relevant decision. Verify institutional claims and provenance when supplied; visual polish does not certify safety or accuracy. An AI disclosure label is not a guaranteed trust remedy.
- Legitimate protective friction explains an irreversible consequence; obstruction serves the business by frustrating exit. Distinguish them by the user's interests and the actual operation.

## Check the complete task

Use approved fixtures to exercise entry → decision → action → failure/recovery → completion/exit, including keyboard, mobile, and assistive-technology checks when available. Review cancellation/decline and pending/error states as carefully as the happy path. Record task accuracy, lost state, comprehension problems, and observed barriers separately from visual preference; do not infer welfare from raw conversion.

Examples: a daily operations dashboard may keep compact rows and a persistent exception panel rather than add a spacious wizard. A checkout may need readable cost disclosure and recoverable field errors rather than more hero decoration. Neither example prescribes changing business behavior without approval.

Provenance and unresolved source issues are recorded in the maintenance-only [evidence map](evidence-map.md). Runtime work does not require access to the research archives.
