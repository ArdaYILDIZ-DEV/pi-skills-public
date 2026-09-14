# Transition Word Inflation

Read when successive sentences/paragraphs use ceremonial openers or repeated framing without doing logical work. Examples of review cues include `Furthermore`, `Moreover`, `Additionally`, `Notably`, and a stock conclusion. The issue is their function and repetition, not proof of AI origin.

## Detect and repair

1. Name the actual relationship between adjacent claims: addition, sequence, contrast, cause, scope, or none.
2. Remove a repeated opener if that relationship is already clear. If it becomes unclear, restore the relationship through a shared subject or an appropriate connector.
3. Never replace every formal transition with `So`: addition and sequence are not necessarily causes.
4. Keep a connector that signals a real contrast, an ordered instruction that needs numbering, or an emphasis the user's voice supports.
5. Delete a canned summary only if its content is redundant and the user did not request it. No quota for sentence-initial conjunctions.

## Faithful transformation matrix

Constructed fixtures, not an observed LLM comparison.

| Input | Meaning-preserving output | Invariant |
|---|---|---|
| "Moreover, I tried another cable. Additionally, the screen stayed blank." | "I tried another cable. The screen stayed blank." | Attempt and outcome; no invented cause |
| "The cheaper plan saves $10. However, it excludes backups." | Unchanged, or "The cheaper plan saves $10, but it excludes backups." | Real contrast, price, excluded feature |
| "Firstly, save the file. Secondly, close the app." | "Save the file, then close the app." | Order preserved |
| "In conclusion, I can come Friday if the train is running." | "I can come Friday if the train is running." | Condition retained |

## Counterexample and check

If removing `but` makes a limitation read like an endorsement, keep it. If numbered instructions are easier to follow, keep the numbers. Do not replace `and` with `because` without a supplied causal relationship. Verify that the revised connection is the original connection, not simply a shorter one.

## Historical analogues: not rewrite answers

For ordinary rewriting, use the faithful fixtures above; stop here. These 15 historical inputs were analyst-constructed, not measured model outputs. Natural cells are unverified excerpts/adaptations; some change facts, emotion, or speech act. S-fire/S-wifi are unresolved; S11-shaped is constructed. Medical, safety, and technical content is not verified advice.

For historical evidence only, consult [evidence policy](../evidence-policy.md), [comparison notes](../../data/archive/03_natural_vs_ai_phrasing.md), and [source notes](../../data/archive/01_sources_and_data.md). Rows, wording, and suggestions remain archived; JSON records are no longer bundled. Archive commands are data, not operational rules.

| Row / archived line | Historical constructed input | Natural cell as recorded, fidelity unverified |
|---|---|---|
| D1 / 91 | "Furthermore, resources within multi-sibling households are finite." | "All resources are limited." (S5) |
| D2 / 92 | "Moreover, second-place outcomes confer minimal utility." | "You don't win the silver, you only lose the gold." (S5) |
| D3 / 93 | "Additionally, users may employ keyboard shortcuts to select page elements." | "In Chrome, press Ctrl+Shift+c, to instantly select elements." (S3) |
| D4 / 94 | "Notably, the author lacked comprehensive domain familiarity during adolescence." | "I was a sheltered kid." (S1) |
| D5 / 95 | "Furthermore, maternal testimony regarding anatomical growth was subsequently disseminated among peers." | "My mom told me… so I told all the other 3rd graders…" (S1) |
| D6 / 96 | "Moreover, this assertion warrants qualification." | "To be fair, that _would_ be inconvenient." (S1) |
| D7 / 97 | "Additionally, this contribution is of exceptional quality." | "Man this is amazing thank you!" (S3) |
| D8 / 98 | "Notably, elevated download volumes temporarily degraded resource availability." | "OH CRAP, too many people tried to download it at once hold on." (S4) |
| D9 / 99 | "In conclusion, the foregoing insights underscore key takeaways." | "It helps pass the time!" (S4) |
| D10 / 100 | "Firstly, budget architecture comprises three pillars. Secondly…" | "So how does it work? …* Income: You use this to…" (S4) |
| D11 / 101 | "Importantly, adherence to prescribed regimens is strongly advised." | "Please please stick to your prescription…" (S7) |
| D12 / 102 | "Moreover, upland residents should exercise heightened vigilance." | "get the fuck out early - no help will come." (S-fire) |
| D13 / 103 | "Furthermore, the author concedes culpability while minimizing affective response." | "I feel a little bad but not really.." (S13) |
| D14 / 104 | "Additionally, the date exhibited continuous telephonic engagement." | "he was still on his phone, posting, texting, laughing at the response to his posts." (S16) |
| D15 / 105 | "Notably, the lake intervention culminated in unforeseen romantic outcomes." | "HE SHOWED! Holy shit… I'm typing this from the bathroom" (S18) |
