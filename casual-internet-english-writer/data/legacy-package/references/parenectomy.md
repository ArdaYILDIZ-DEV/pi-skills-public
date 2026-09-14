# Parenektomi / Parenectomy

Read when parentheses interrupt, nest explanations, or hide scope. Classify content before restructuring; do not ban punctuation.

## Detection

Inspect nested/repeated asides and those outweighing their host clause. These are cues, not errors or authorship evidence: one qualifier may need restructuring; many mathematical parentheses may be correct.

## Classify before editing

| Parenthetical content | Decision | Preservation check |
|---|---|---|
| Condition, exception, date, quantity, threshold, uncertainty | Integrate into the claim or make a nearby complete sentence | The same statement remains limited by the same condition |
| Required acronym expansion, UI label, identifier, notation, unit | Keep it if precise and compact; otherwise define clearly once | No loss of identity or distinction; do not expand an unknown acronym by guessing |
| Required citation, source attribution, quotation locator | Keep the required style; relocate only when allowed and still unambiguous | The claim retains its source and requested citation format |
| Optional explanation needed by this audience | Integrate or split into a sentence | Explanation remains correct and attached to the right term |
| Redundant restatement | Remove after checking it adds no scope | Nothing factual or tonal is lost |
| Short voice-bearing aside, mutter, or punchline | Keep if it fits user samples and does not bury a condition | Do not invent humor or borrow another person's story |
| Code, formula, command, literal quoted text | Preserve literal content | Editing prose must not silently change executable or quoted meaning |

## Procedure

1. Read the sentence without each aside to find its main proposition.
2. Record what the aside contributes. If its function is unclear, do not delete it by default.
3. Choose keep, integrate, split, or remove using the table. Process the innermost explanation first when nesting obstructs reading.
4. Use plain sentence boundaries or clauses, not a replacement stack of commas, colons, or dashes. Newly authored drafts do not use em dashes.
5. Re-read the complete paragraph and compare all dates, quantities, modality, conditions, and attributions with the input. Moving a condition does not justify changing its main verb: retain `can`, `might`, `must`, or `will` at the source's strength unless the requested edit changes that strength.

## Constructed examples

Input: "I can send it Friday (if the legal review is complete)."

Output: "I can send it Friday if the legal review is complete."

Invariant: Friday is conditional, not a promise regardless of legal review. Keep `can`: replacing it with `may be able to` adds uncertainty beyond the supplied condition. This check also applies to constructed exercise answers.

Input: "The test took 42 seconds (on my laptop, not the server)."

Output: "The test took 42 seconds on my laptop, not the server."

Invariant: measured time and tested environment both survive.

Counterexample: "The result was inconclusive (Lee, 2020)." If the requested citation format is author-date, keep the citation. Do not replace it with a peer's enthusiastic verdict.

Counterexample: "Set `retry(count=3)` before the next run." The parentheses belong to a literal identifier/expression, not a stylistic aside. Do not edit or execute it as part of this writing task.

For additional faithful pairs and the inherited family-B mapping, read [Parenthesis Stacking](transformations/parenthesis-stacking.md).
