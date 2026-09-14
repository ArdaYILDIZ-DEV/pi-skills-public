# 03 — Natural vs. AI Phrasing (Language Engine Edition: 5 Anti-Pattern Families × 15 Pairs)

**Method:** Every "Natural" cell is verbatim (or ≤2-word trimmed for fit) from S1–S20 with ID. Scores where recorded. Every "AI" cell is a **constructed characteristic equivalent** of the same speech act — the sentence a model trained on news, industry reports, and papers defaults to, and which never occurred in the ~520+ coded sentences. It is labeled as constructed, not corpus-observed. "Fix" names the actionable move (with file-02 template where applicable).

**Why LLMs default here:** (1) news/report training rewards impersonal authority; (2) academic training rewards definitional completeness and terminological stacking; (3) instruction-tuning politeness rewards hedge piles, transition chains, both-sides balancing, and summary closers. Pre-2021 Reddit rewards the opposite: first-person risk, visible repair, siding with someone, stopping early.

---

## Family A — Overly formal / serious tone (15 pairs)

Tell: dummy subjects, nominalizations, passive personal action, Latinate verbs, boosters, essay scaffolding. Human norm: *I/you* subjects, actable verbs, zero scaffolding words in pool.

| # | Speech act | AI (constructed) | Natural (verbatim) | Fix |
|---|---|---|---|---|
| A1 | Opening | "Moreover, it is important to note that resources within multi-sibling households are inherently limited." | "All resources are limited." (S5) | Punch first (T1); delete dummy *it* + *inherently*. |
| A2 | Moral | "However, one must acknowledge that second place yields minimal reward." | "You don't win the silver, you only lose the gold." (S5) | Second-person parallel negation; drop *one must*. |
| A3 | Instruction | "To circumvent overlay restrictions, users are advised to utilize developer tools." | "In Chrome, press Ctrl+Shift+c, to instantly select elements." (S3) | Bare imperative + tool name (T4); *utilize→press*. |
| A4 | Ignorance | "I must confess a lack of comprehensive understanding regarding this subject matter during my formative years." | "I was a sheltered kid." (S1) | 5-word self-label; vulnerability brief. |
| A5 | Story | "During my childhood, I erroneously believed that gestation resulted from every instance of intercourse. Furthermore…" | "My mom told me penises 'get bigger' so I told all the other 3rd graders…" (S1) | *So*-chain + prop; time as *when I was 10*. |
| A6 | Correction | "This assertion is factually incorrect. The empirical evidence suggests…" | "To be fair, that _would_ be inconvenient." (S1) | Cushion first, then point (T5). |
| A7 | Enthusiasm | "This is a truly exceptional contribution. I sincerely appreciate your efforts." | "Man this is amazing thank you! I hope your comment reaches the top…" (S3) | Vocative + deictic + self-comparison. |
| A8 | Failure/repair | "An unexpected surge in concurrent access has rendered the resource temporarily unavailable." | "OH CRAP, too many people tried to download it at once hold on." (S4) | Caps + plain cause + *hold on* (T6). |
| A9 | Closing | "In conclusion, it is evident that these insights underscore the importance of…" | "Don't forget to wash your hands you animals." (S2) | Joke/blessing/number; never summarize. |
| A10 | Long structure | "Firstly… Secondly… Lastly… In summary…" | "So how does it work? …* Income: You use this to…" (S4) | Question-heading + *you*-bullets; numbers, never ordinals. |
| A11 | Expert advice | "It is recommended that patients adhere to prescribed pharmacological regimens." | "Please please stick to your prescription the doctor gives you. Even if you already feel better, dont just stop…" (S7) | Repetition + negative exemplar ("Don't be the guy…"). |
| A12 | Warning | "Extreme caution is advised for residents of elevated topographical positions." | "If you live on an upslope, ridge, or narrow forested road, get the fuck out early - no help will come." (S-fire) | Swear as urgency; *you*-address; walk-away closer. |
| A13 | Guilt | "I acknowledge with considerable remorse that academic dishonesty facilitated my credential attainment." | "Yeah I cheated. I didn't write any of my papers, I didn't do any of the work myself… I feel a little bad but not really.." (S13) | Flat confession, no scaffolding; double-period shrug kept. |
| A14 | Grief | "The bereavement process was complicated by the untimely disclosure of concealed familial information." | "My mum was 14 when she met my dad. He was 24." (S14) | Two flat sentences, 11 words; no process nouns. |
| A15 | Boundary | "It is advisable to terminate the interaction upon identification of incompatible behavioral indicators." | "I just pretended I was on my phone and left him there, and walked out the door." (S16) | Receipt → walkout (T10); evidence, then exit. |

Dialect note (anti-flattening): "G'day mate! Looks bloody awful…" / "you're all fuckin legends" (S-fire). Formality includes dialect erasure — the skill must allow *bloody, mate, gonna, reckon* where persona fits, not normalize to "individuals are advised."

---

## Family B — Parenthesis addiction (15 pairs + rule)

**Corpus baseline (S1–S20):** human parens = aside/mutter ("(They really do.)" S8), punchline smuggle ("(I could walk and fart at the same time)" S8), gloss-after-plain-term ("(airbags, seat belts, etc)" S11). Acronym-first definitions, hedge-piles, and citation piles inside parens: ~0. The mechanic (S11) introduces ECU/ECM/TCM/PCM/STFT/LTFT across ~800 words and never uses `Full Term (ACRONYM)` order — plain name → "stands for" → "Basically, it's the computer…" → bare acronym. LLM order is precisely inverted.

| # | AI (constructed) | Natural (verbatim / S-shaped) | Fix |
|---|---|---|---|
| B1 | "Check the fuel trims (Short-Term Fuel Trim (STFT) and Long-Term Fuel Trim (LTFT)) for deviations (typically >10%)." | "Look at the short term and long term fuel trims. If the computer is adding or subtracting more than 10% fuel, walk away." (S11-shaped) | Parenectomy: acronyms become button labels later; threshold as two shorts. |
| B2 | "Antioxidants (e.g., vitamins C and E, polyphenols) function as electron donors (reducing agents)." | "Antioxidants are like gas for your car. You can store up a certain amount of vitamins, but your tank can only hold so much." (S7) | Analogy replaces taxonomy; *like* replaces *e.g.* |
| B3 | "Users (particularly those in older, non-CANBUS vehicles, circa pre-2007) should verify warning-light illumination (bulb check)." | "make sure all the warning lights on the dash turn on… (this is really only for older, non CANBUS cars, so like 2007ish and older for most cars.)" (S11 reply) | Keep the paren — it is a muttered scope-limit, the one legal use. |
| B4 | "The venue (a country hotel with gardens, hereafter 'the Venue') was adequate (though the secrecy was unwarranted)." | "It's a nice enough country hotel with some pretty gardens, but I'm not sure what all the secrecy was for." (S12) | *Nice enough*; evaluation inside, no hereafter-term. |
| B5 | "He (hereafter 'the Date'), having ordered excessively (approximately $100 in value), proceeded to…" | "he proceeded to order about $100 worth of sushi, while I ordered maybe a roll… My total would have been about $30, at most." (S16) | Receipt numbers in-flow; no party-labels. |
| B6 | "She (6 years of age, hereafter 'the Minor') initiated telephonic contact (via maternal device)." | "she got ahold of mom's phone and she called me… First thing she asked me if I'd still remember her." (S20) | *Got ahold of*; dialogue next. |
| B7 | "The subject (6.3 inches, 95th percentile) falls below the reported comparator (9 inches, off-chart)." | "6.3 inches was 95th percentile, 7 inches was 98th or something, so 9 is literally off the charts" (S17) | *Or something*; math as disbelief, no subject-labels. |
| B8 | "The rescuer (attired in undergarments) entered the water (despite sharp substrate)." | "I toed off my shoes and stripped to my skivvies… my tender feet hit the sharp rocks and I contorted… like a slinky" (S18) | *Skivvies / slinky*; body first, Latin last (never). |
| B9 | "Outcomes may vary (depending on implementation specifics, user context, and environmental factors)." | "It depends on the website, I've had websites that are no longer usable after you do this." (S3) | Named failure beats hedge-pile. |
| B10 | "Efficacy is well-documented (see Smith et al., 2019; cf. industry reports)." | "That bit about fuel trims is some of the best used car advice I've EVER heard." (S11 reply) | Peer verdict replaces citation pile. |
| B11 | "Antibiotics (wonder-drugs in popular conception) are ineffective against viral etiologies." | "Antibiotics only work against bacteria, they are not some kind of wonderpotion that cures anything" (S7) | *Wonderpotion*; plain negation. |
| B12 | "Frequency allocation (2.4 GHz and 5.8 GHz public bands, unlicensed) constrains forward power (limiting broadcast area)." | "WiFi is in whats called a Public Band, namely 2.4GHZ and 5.8GHZ… these do not require a licence" (S-wifi) | *Whats called*; name → gloss in-flow. |
| B13 | "The divorce (which I financed independently, post-separation by six years) disbursed all funds." | "my house (which I bought with my money six years after the divorce)" (S8) | Keep paren (aside with receipt) — legal use. |
| B14 | "Respondents (n=405, CasualConversation) expressed sympathy (see comments)." | "Now I'm sad." (S20 reply) | Three words beat metadata. |
| B15 | "The update (EDIT5: arrival confirmed) was transmitted from a restroom (privacy-preserving)." | "HE SHOWED! Holy shit… I'm typing this from the bathroom like a dumbass again" (S18 EDIT5) | Caps + self-own; location as joke, not method. |

**Rule (parenectomy):** if `( )` holds a definition, acronym-first expansion, hedge-pile, or citation — delete it; put content in a new short sentence or drop it. Keep parens only for asides, mutters, punchlines said under the breath.

---

## Family C — Convoluted word groups (15 pairs)

Tell: noun stacks (≥3), preposition chains, double-hedged passives. Norm: one hard noun + household object + mimeable verb.

| # | AI (constructed) | Natural (verbatim) | Why it wins |
|---|---|---|---|
| C1 | "The observed thermal differential is attributable to convective heat transfer dynamics and aperture constriction." | "Think of a garden hose when partially block the opening with your thumb, the water comes out faster!" (S2) | Hose > dynamics; typo kept; exclamation. |
| C2 | "Supraphysiologic dosing does not confer additional benefit." | "If you binge and overfill your tank, it doesn't do anything (you excrete it out as waste)…" (S7) | Tank, binge, gas; second person. |
| C3 | "Signal attenuation arises from aqueous absorption and Faraday-cage effects in metallized materials." | "Anything with water in it can potentially weaken your WiFi signal." (S-wifi) | Determiner + vague noun + plain verb. |
| C4 | "Intravaginal lavage with surfactants disrupts lactobacillary homeostasis." | "The vagina is self-cleaning just like your eyeballs. Do you wash your eyeballs? No." (S7) | Three 5-word questions; +10k proof authority survives plainness. |
| C5 | "The transaction should be discontinued upon identification of diagnostic trouble codes." | "If there are codes, there's an issue… your best bet is to walk away." / "RUN AWAY." (S11) | Condition → verdict ≤6 words; caps scale. |
| C6 | "It is advisable to establish interpersonal boundaries to mitigate unidirectional emotional labor." | "…stop things from building and building until I have to have a Serious Conversation…" (S12) | Caps-joke; process as scene. |
| C7 | "Credential attainment was facilitated by systematic academic dishonesty across multiple assessment modalities." | "I stole a lot of work… used all their work for it with minor changes. I made it through 6 years and got two degrees." (S13) | *Stole / minor changes*; verbs replace modalities. |
| C8 | "Comparator values (9 inches) exceed normative distributions by multiple standard deviations." | "That's about as likely as dating two guys that are taller than 6'10"!" (S17) | Absurd comparator; dating, not deviations. |
| C9 | "Aquatic ingress was executed in a state of partial undress despite hazardous substrate." | "I toed off my shoes and stripped to my skivvies… pitched myself into the water, doing a side-flop." (S18) | *Side-flop*; comedy of verbs. |
| C10 | "Reciprocity expectations should be calibrated to recipient valuation signals." | "If someone doesn't appreciate something you do for them, it probably means that it isn't that important to them." (S19) | Plain conditional; thesis as sentence. |
| C11 | "Pediatric sibling initiated telephonic contact expressing attachment concerns." | "First thing she asked me if I'd still remember her… She asked if she could visit me." (S20) | Dialogue, not contact-events. |
| C12 | "Interrogative strategies for initial romantic encounters should balance levity and information yield." | "What's the largest mammal you think you could knock out with a single punch?" (S15) | The question *is* the strategy. |
| C13 | "The comestible order value differential ($100 vs $30) indicated asymmetric consumption intentions." | "he proceeded to order about $100 worth of sushi, while I ordered maybe a roll… He. Ate. Everything." (S16) | Receipt + staccato; asymmetry shown. |
| C14 | "Maternal dating-partner selection demonstrated suboptimal boundary calibration." | "My mum was 14 when she met my dad. He was 24." (S14) | Numbers indict; no calibration nouns. |
| C15 | "Aqueous thermal protection via saturated textiles is contraindicated; desiccated woolens are indicated." | "Do not cover any yourself in anything wet! …cover with DRY WOOLEN BLANKETS!" (S-fire) | Caps + *!*; contraindication becomes shout. |

---

## Family D — Transition Word Inflation (15 pairs) **NEW**

**Tell:** every paragraph opens *Furthermore / Moreover / Additionally / Notably / Importantly*, often stacked with a summary closer — scaffolding substituting for connection. **Corpus:** paragraph-initial *Furthermore/Moreover/Additionally/Notably* chains: **0** in ~520+ sentences (file 02 §8); connection done by *So/But/And*, bare starts, or *when/if* (T2/T3). Inflation is therefore not emphasis — it is absence-of-connection made audible.

| # | AI (constructed) | Natural (verbatim) | Fix |
|---|---|---|---|
| D1 | "Furthermore, resources within multi-sibling households are finite." | "All resources are limited." (S5) | Delete opener; punch stands alone. |
| D2 | "Moreover, second-place outcomes confer minimal utility." | "You don't win the silver, you only lose the gold." (S5) | Parallel negation replaces adverb. |
| D3 | "Additionally, users may employ keyboard shortcuts to select page elements." | "In Chrome, press Ctrl+Shift+c, to instantly select elements." (S3) | Scope + verb (T4). |
| D4 | "Notably, the author lacked comprehensive domain familiarity during adolescence." | "I was a sheltered kid." (S1) | Label, no adverb. |
| D5 | "Furthermore, maternal testimony regarding anatomical growth was subsequently disseminated among peers." | "My mom told me… so I told all the other 3rd graders…" (S1) | *So*-chain carries sequence. |
| D6 | "Moreover, this assertion warrants qualification." | "To be fair, that _would_ be inconvenient." (S1) | Cushion replaces adverb. |
| D7 | "Additionally, this contribution is of exceptional quality." | "Man this is amazing thank you!" (S3) | Vocative replaces adverb. |
| D8 | "Notably, elevated download volumes temporarily degraded resource availability." | "OH CRAP, too many people tried to download it at once hold on." (S4) | Interjection + cause (T6). |
| D9 | "In conclusion, the foregoing insights underscore key takeaways." | "It helps pass the time!" (S4) | Stop; no closer-stack. |
| D10 | "Firstly, budget architecture comprises three pillars. Secondly…" | "So how does it work? …* Income: You use this to…" (S4) | Question + bullets; ordinals deleted. |
| D11 | "Importantly, adherence to prescribed regimens is strongly advised." | "Please please stick to your prescription…" (S7) | Repetition, not adverb. |
| D12 | "Moreover, upland residents should exercise heightened vigilance." | "get the fuck out early - no help will come." (S-fire) | Urgency without adverb. |
| D13 | "Furthermore, the author concedes culpability while minimizing affective response." | "I feel a little bad but not really.." (S13) | Flat affect in plain words. |
| D14 | "Additionally, the date exhibited continuous telephonic engagement." | "he was still on his phone, posting, texting, laughing at the response to his posts." (S16) | Verb list replaces adverb. |
| D15 | "Notably, the lake intervention culminated in unforeseen romantic outcomes." | "HE SHOWED! Holy shit… I'm typing this from the bathroom" (S18) | Caps-event; outcome staged, not announced. |

**Rule:** max one sentence-initial *So/But/And* per paragraph, zero *Furthermore/Moreover/Additionally/Notably/Importantly* as openers. Second transition in one paragraph → delete it; if connection is lost, the sentences were never connected — rewrite with a shared noun, not an adverb.

---

## Family E — Balanced Hedging (15 pairs) **NEW**

**Tell:** paired both-sides moves (*On the one hand… On the other hand…; While some argue… others contend…; It is a complex issue with valid points on both sides*) that refuse verdicts. **Corpus:** paired *on the one hand/on the other hand* as a device: **0**; grief (S14) and boundary (S16) threads side openly; S12 reasons carefully then still verdicts ("I'm definitely not invited… that's actually OK"); S11 hedges inside (*pretty, normally*) then still orders ("Walk away."). Hedging lives **inside** the sentence (T5); the sentence still picks a side.

| # | AI (constructed) | Natural (verbatim) | Fix |
|---|---|---|---|
| E1 | "On the one hand, shared resources build character; on the other, scarcity breeds conflict." | "All resources are limited. The only reward for second place is a cold shower and starvation." (S5) | Aphorism + cold shower; no hands. |
| E2 | "While some view overlay removal as convenient, others raise consent concerns. Both perspectives have merit." | "In Chrome, press Ctrl+Shift+c, to instantly select elements." (S3) | Instruction picks; caveats come as replies, not balance. |
| E3 | "The author's childhood understanding had both accurate and inaccurate elements, reflecting developmental complexity." | "That you got pregnant every time you had sex." (S1) | Fragment verdict; complexity shown by scene later. |
| E4 | "Reasonable observers may differ on whether the inconvenience was substantial." | "To be fair, that _would_ be inconvenient." (S1) | *To be fair* + stance; still judges. |
| E5 | "This submission has qualities appreciated by some community members, though valuations differ." | "Man this is amazing thank you! I hope your comment reaches the top…" (S3) | Thanks + wish; no valuation survey. |
| E6 | "The outage reflects scaling challenges with both technical and social dimensions." | "OH CRAP, too many people tried to download it at once hold on." (S4) | Cause + repair; dimensions later. |
| E7 | "Perspectives on closure vary; some emphasize loss, others renewal." | "my heart is full and breaking all at once." (S9) | Both feelings in one body — felt, not balanced. |
| E8 | "Clinical opinion is divided on self-treatment; caution is broadly advised." | "Don't be the guy who tried to remove his skin cancer with a knife." (S7) | Negative exemplar; verdict via mockery. |
| E9 | "Evacuation timing involves trade-offs between property protection and personal safety." | "get the fuck out early - no help will come." (S-fire) | Safety picked; property mourned elsewhere. |
| E10 | "The colleague's invitation calculus reflects competing constraints; interpretations vary." | "She clearly doesn't think we're anything more than colleagues and I've misread the situation." (S12) | Painful verdict owned with *clearly*. |
| E11 | "Views on academic misconduct span condemnation and structural critique." | "Keep that saltiness close… being in the workforce is more of the same." (S13 reply) | Salt + fatalism; no span-survey. |
| E12 | "Reactions to late-life revelations are heterogeneous and context-dependent." | "My mum was 14 when she met my dad. He was 24." (S14) | Numbers; heterogeneity left to replies. |
| E13 | "Dating behaviors admit multiple readings; participants weigh signals differently." | "Repeatedly interrupting me… It tells me they're not actually engaged." (S16) | *It tells me*; reading picked. |
| E14 | "The lake incident can be framed as both rescue attempt and intrusion." | "I thought you needed saving" (S18, shouted mid-tread) | In-scene line; framing by fanfiction later. |
| E15 | "Gift-exchange norms involve diverse love languages; no single account dominates." | "These are all things *I* would appreciate… but that doesn't mean everyone else feels the same way." (S19) | Thesis + *but*; theory offered once, briefly, in replies. |

**Rule:** one sentence, one side. Reasons and costs go in the *because/when/if*-tail (T2) or a *but/frankly*-hedge inside (T5) — never a second hand. If a genuine trade-off exists, stage it as receipt-then-walkout (T10: evidence, then exit), not hand-then-hand.

---

## Lexical swap list (S1–S20; left items verbatim)

- **use / press / hit / check** ← utilize, leverage, employ, ascertain
- **figure out / find out / end up / walk away / hold on / show up** ← determine, realize ultimately, discontinue, please wait, arrive
- **a ton of / a bunch of / kind of thing / a bit / or something** ← significant quantity / various aspects / to some extent / approximately
- **kid / guy / stuff / thing / bro / legends / asshat** ← individual / male / items / phenomenon / colleague / contributors / disagreeable person
- **yep / nah / oh crap / hold on / bloody / gonna / reckon** ← indeed / negative / exclamation of dismay / please standby / extremely / going to / estimate
- **I / you / we** ← it / one / users / individuals
- **so / but / and** (sentence-initial) ← moreover / furthermore / additionally / notably
- **Think of / It's like / Same goes for / Imagine** ← can be conceptualized as / is analogous to / is comparable in that
- **verdict + walkout** (*check please, walked out, split our bill, move on*) ← *on the one hand / on the other hand / valid points on both sides*
- **typo/emphasis left standing** (*imma, ive, wasnt, Contrul, WAAA WAAA, RUN AWAY, HE SHOWED*) ← always-grammatical output. Lesson: don't over-polish; never manufacture errors.

---

## Diagnostic checklist (12 tests — fail any one = rewrite)

1. Opens with *Moreover / Furthermore / Additionally / Notably / Importantly / Firstly / In conclusion / It is important/should be noted*? → *So / But / And* or nothing (D).
2. Paired both-sides (*on the one hand… on the other…; some argue… others contend…; valid points on both sides*)? → one side per sentence; trade-off as receipt→walkout (E).
3. Subject *it / one / users / individuals* where *I / you* fits? → switch (A).
4. Latinate verb with phrasal alternative (*utilize, facilitate, ascertain, mitigate*)? → swap (A).
5. Parenthesis holds definition / acronym-first / hedge-pile / citation? → parenectomy (B).
6. Noun stack ≥3 or chain (*in the context of / with regard to*)? → one hard noun + household object (C).
7. Two 20+ word sentences, no fragment/joke/hedge/interjection? → split; add ≤6-word punch.
8. Ends with summary (*in summary / ultimately / underscores*)? → example, joke, number, thanks, or *Edit:*.
9. Hedge needs its own sentence? → fold *just / frankly / pretty / kind of / to be fair* inside (T5).
10. Explains without analogy, scene, number, or quote? → add one (*Think of…, Kmart, 4 times, "Back of the queue."*).
11. Transition appears twice in one paragraph (*Furthermore… Moreover…*)? → delete both; reconnect with shared noun (D).
12. No contraction in personal-action paragraph? → contract (*don't, can't, I'm*). Uncontracted = synthetic signal.
