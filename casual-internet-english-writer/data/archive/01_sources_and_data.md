# 01 — Sources & Data: Pre-2021 Reddit Corpus (Language Engine Edition, 20 Threads / 500+ Sentences)

**Goal:** Build a contamination-free, inspectable **İnsan Dili Veri Havuzu** (Human Language Data Pool) of natural pre-LLM English to ground the Natural English Language Engine. This file is the audit trail: what was included, why, when each thread was created, what kind of talk it contains, how reply dynamics shape the sentences in files 02–04, and exactly how the 500+ sentence pool was built.

**Cutoff rule:** `created_utc < 1609459200` (2021-01-01 00:00 UTC). No exceptions. Rejected POST-2021 candidates logged during sampling (proof the gate was applied): `r/explainlikeimfive mchcni` (2021-03-24), `r/LifeProTips nvfnp4` (2021-06-08), `r/confession 1hq0eij` (2024-12-30), `r/tifu ks69bb` (2021-01-07), `r/AskReddit mje9y7` (2021-04-03), `r/AskReddit ldgahy` (2021-02-05), `r/tifu mn4ix7` (2021-04-08).

**Verification date:** 2026-09-13 UTC. All dates below from live `rdt search --json` (`created_utc`) and `rdt-tidy --compact read` headers inspected 2026-09-13/14, not from memory.

**Corpus size (this edition):** **20 threads, ~310 comment/post bodies inspected live, ~520 codable sentences retained.** Prior editions (5 threads/~60, then 12/~210) are fully subsumed — nothing dropped, only added. Counts below use `~` because deleted/redacted bodies drift; IDs + `created_utc` + quoted passages are the stable evidence, not exact tallies.

---

## 1. Design: what this corpus is and is not

Purposive, high-engagement, pre-LLM sample — not a random census, not balanced English. Deliberate biases (this is the register where AI-slop is most visible):

- US/UK informal native norms (Reddit 2017–2020), young-adult life domains,
- wit-selected top comments (upvotes reward brevity/punch),
- **Faz-2 shift:** technical explainers (ELI5, mechanic) are now a minority (4/20). The majority (16/20) are **purely social dynamics**: confession, regret, dating, embarrassment, family, friendship, work, grief. This corrects the previous edition's over-weighting of how-to content.

**Excluded:** brand/marketing subs, karma bots, AutoModerator boilerplate (kept only as non-human negative examples), fictional-craft subs (r/WritingPrompts, r/nosleep), `[removed]/[deleted]/redact.dev` bodies, link/image-only turns, anything ≥2021-01-01.

---

## 2. Cluster map with social subcategories (7 clusters → 14 subcategories)

| Cluster | Subcategories (this edition) | Threads |
|---|---|---|
| A. AskReddit-anecdote | A1 childhood/sex-ed myths; A2 siblings/family; A3 life-change testimony; A4 power/revenge narratives | S1, S5, S6, S8 |
| B. AskReddit-grief/regret | B1 mortality/regret (SERIOUS); B2 dark family discoveries | S14 (e7d1e0: regret finding out), S7-doctors-grief-adjacent (ca3ije) |
| C. AskReddit-dating | C1 playful date questions; C2 deal-breakers/boundaries | S15 (chaf53), S16 (eyus0a) |
| D. Confession | D1 academic fraud; D2 (reserved: relationship infidelity — sampled, excluded for doxx risk) | S13 (9ue6vz) |
| E. TIFU-social | E1 sexual embarrassment; E2 heroic-fail + romance | S17 (gmhtel), S18 (h7mzd3) |
| F. Tips-social/practical | F1 browser/workaround; F2 auto-expert; F3 social-reciprocity; F4 survival-practical | S3 (6a5j3z), S11 (egs81p), S19 (78i41s) |
| G. Warm community | G1 restaurant memoir; G2 sibling tenderness; G3 wit-one-liners | S9 (i65fce), S20 (gpjri5), S10 (dy1no2) |
| H. Money/systems + Relationships (bridges) | H1 budget-confession; H2 wedding-exclusion reasoning | S4 (boza0g), S12 (beku6e) |
| I. Lay explainers (minority control) | I1 breath physics; I2 wifi/radio (reference) | S2 (d4j294) |

Non-technical share: 16/20 threads contain zero technical explanation as their main act. Even S11 (mechanic) and S7 (doctors) are coded here primarily for their **social moves** (warnings, jokes, bedside manner), not their facts.

---

## 3. Thread dossiers S1–S12 (carried, condensed)

- **S1 AskReddit/sex myths** `jyhhdv` 2020-11-21 ~48,660/12,890c — rapid-fire childhood scenes; fragments ("I was a sheltered kid."); riff-replies ("thats how loveseats are made."). *Yield ~30.*
- **S2 ELI5/hoo-haa** `d4j294` 2019-09-15 ~28,546/1,034c — competing explanations + finger/toilet live-tests; "Think of a garden hose". *Yield ~25.*
- **S3 LPT/F12** `6a5j3z` 2017-05-09 ~91,986/1,372c — tip→better-tip ("In Chrome, press Ctrl+Shift+c")→caveat; Edit-curation. *Yield ~25.*
- **S4 personalfinance/spreadsheet** `boza0g` 2019-05-15 ~50,770/1,597c — poor-childhood + ADHD confession → bullets ("Go in / Make a copy…") → "OH CRAP… hold on." *Yield ~30.*
- **S5 AskReddit/siblings** `aphhpr` 2019-02-11 ~39,051/14,206c — aphorism contest ("All resources are limited." +14,967); sabotage tails (unplugged Xbox). *Yield ~25.*
- **S6 AskReddit/quality-of-life** `b3btha` 2019-03-20 ~65,734/23,682c — quit-job testimony in lowercase ("quit a job i absolutely hated."); 5-minute rule; deadpan ("count chocula"). *Yield ~30.*
- **S7 AskReddit/doctors** `ca3ije` 2019-07-07 ~57,886/15,367c — experts choosing informality ("Don't be the guy who tried to remove his skin cancer with a knife."); gas-tank analogy; eyeballs closer. *Yield ~30.*
- **S8 AskReddit/power** `izk9gh` 2020-09-25 ~98,614/17,716c — shutdown dialogue ("I'm the guy who bought you dinner."); emancipation memoir + TL;DR. *Yield ~35.*
- **S9 CasualConversation/restaurant** `i65fce` 2020-08-08 ~28,225/749c — 700-word lowercase-*i* memoir; mid-shift live update; 4 EDITs; blessing closer. *Yield ~35.*
- **S10 Showerthoughts/Pavlov** `dy1no2` 2019-11-18 ~137,702/1,425c — one-line premise → pun avalanche ("rings a bell", "DING DING DING"). *Yield ~20.*
- **S11 LPT/used-car** `egs81p` 2019-12-28 ~71,960/1,824c — 13-point guide staying conversational ("RUN AWAY.", "polished turd", "WAAA WAAA"); 8 EDITs. *Yield ~40.*
- **S12 relationships/wedding** `beku6e` 2019-04-18 ~11,148/697c — dialogue reconstruction + "three reasons" + assertiveness arc + book-list Edit. *Yield ~25.*

Subtotal S1–S12: ~190 bodies, ~350 sentences.

---

## 4. Thread dossiers S13–S20 (new social-dynamics expansion)

### S13 — confession/academic fraud
> "I cheated to get my bachelors and my masters degree" | `9ue6vz` | 2018-11-05 | ~23,081/2,394c
- OP body is 6 sentences of flat confession ("Yeah I cheated. I didn't write any of my papers… I feel a little bad but not really..") + 4 brag-Edits ("yeah, I'm bragging."). No hedging pile, no moral scaffolding — the anti-AI shape for guilt.
- Replies: salt + workplace fatalism ("Keep that saltiness close… workforce is more of the same."), procedural curiosity ("Are you working in your field…?"), sales-floor moral ("Sounds like he would do better as a salesman"). *Yield ~25.* Cluster D1.

### S14 — AskReddit/regret (grief, heaviest thread)
> "What do you regret finding out?" | `e7d1e0` | 2019-12-07 | ~62,366/26,413c
- Top comments are 2–8 sentence trauma compressions: "My mum was 14 when she met my dad. He was 24." (2 sentences, 11 words total). Long nurse-story uses ellipsis as breath ("It's ok to ......... it's OK,..... I'll be fine") — Stream-of-Consciousness punctuation (feeds file 02 T13).
- Reply dynamics: ETA-thanks diptychs ("ETA: Thank you all… They mean more than you know."), minimal comfort ("Now I'm sad.", "Being a kid can be so lonely sometimes!"). No advice-stacking, no *on the one hand* balancing — grief stays one-sided, which matters for anti-pattern (E). *Yield ~35.* Cluster B2.

### S15 — AskReddit-dating/playful
> "What are some good first date questions to get to know someone?" | `chaf53` | 2019-07-24 | ~62,964/13,256c
- Joke-questions as answers ("What's the largest mammal you think you could knock out with a single punch?", "In an emergency how many 3rd graders could you fight off?"). Second-level tactical analysis ("Beyond maybe a dozen, numbers dont really matter… keep your legs free… wedgie… primary battle tactic").
- Meta-layer: "you could probably use literally any of these questions… they'd most likely laugh which by nature makes them good questions… ITT joke answers are meta af." Humor theorizing in slang. *Yield ~20.* Cluster C1.

### S16 — AskReddit-dating/boundaries
> "You go on a first date with someone, what habit or characteristic is a deal breaker?" | `eyus0a` | 2020-02-04 | ~54,421/20,946c
- Mini-narratives with receipt-level detail: sushi $100 vs $30, phone-texting through dinner, split-bill revenge ("I just pretended I was on my phone and left him there"). Period-fragment emphasis ("He. Ate. Everything. In. Front. Of. Him. Ok. Gotcha.").
- One-word-answer dialogue staging ("'Yep' … '2nd' … 'uh huh' … check please!"), sodium-chloride pedantry story ("called the table salt 'sodium chloride'"). *Yield ~30.* Cluster C2.

### S17 — TIFU/sexual embarrassment
> "TIFU by googling the average dick size in front of my girlfriend" | `gmhtel` | 2020-05-19 | ~35,227/4,924c
- OP: quarantine Sporcle → bell curve → "9 inches" → percentile math ("6.3 inches was 95th percentile… 9 is literally off the charts") → rumination loop ("image… would pop in my head killing my mood"). TL;DR as self-indictment.
- Replies: measurement-device jokes ("not every vagina is a precision measurement device." → "Do vaginas measure imperial or metric?" → "bewildering mixture of both"), trauma-bonding ("she said those things to keep me down"). *Yield ~20.* Cluster E1.

### S18 — TIFU/heroic-fail romance (longest narrative)
> "TIFU by jumping into a lake in my bra/panties to save a man that turned out to be an elite military scuba diver in training" | `h7mzd3` | 2020-06-12 | ~93,929/3,538c
- OP ~900 words: bombass/crackass diction, movie-trailer vs reality ("black widow style" vs "side-flop"), contacts-closed swimming, "brain blue-screened", "nope the hell out". Seven EDITs narrate the bar night in real time ("HE SHOWED! Holy shit… typing this from the bathroom").
- Replies: chemo-patient thanks, "A+ for effort", 2030-fanfiction ("Option one… Option 2… There are no other options."), internet-law marriage ("By internet law you have to get married now."). *Yield ~40.* Cluster E2. Primary source for dash/ellipsis/lowercase rhythm analysis in file 02.

### S19 — LPT-social/reciprocity
> "LPT: If someone doesn't appreciate something you do for them, it probably means that it isn't that important to them…" | `78i41s` | 2017-10-24 | ~58,868/1,498c
- OP: coffee-cup + office-party examples, thesis ("These are all things *I* would appreciate… but that doesn't mean everyone else feels the same way."), closer ("suck it up, buttercup.").
- Replies: trinket→eggplant negotiation, love-languages theory with anti-research hedge ("I don't think there's any research behind it… but it's an interesting theory!"), reverse-coffee story. Social-advice hedging without *on the one hand* balancing. *Yield ~25.* Cluster F3.

### S20 — CasualConversation/sibling tenderness
> "My 6 year old baby sister is breaking my heart" | `gpjri5` | 2020-05-24 | ~21,469/405c
- OP: phone-call dialogue ("First thing she asked me if I'd still remember her… She asked if she could visit… She then asked if I was lonesome."), science-experiments promise, moral ("make time for your siblings").
- Replies: Dr.-Seuss-movie guilt ("all I wanted was for someone to watch the movie with me."), Christmas-morning simile, Netflix-avatar estrangement ("most communication… changing each other's avatars"). Shortest comfort lines in corpus ("Now I'm sad."). *Yield ~20.* Cluster G2.

Subtotal S13–S20: ~120 bodies, ~215 sentences. **Grand total S1–S20: ~310 bodies, ~520+ codable sentences (350 + 215, rounded down to 520 to stay conservative).**

---

## 5. İnsan Dili Veri Havuzu: 500+ sentence pool documentation

**Segmentation:** split on `. ! ?` + line breaks; retained fragments ("count chocula"), interjections ("OH CRAP"), emoji-only turns, period-fragments ("He. Ate. Everything."), TL;DR lines, EDIT lines, quoted-speech lines. Dropped: `[removed]/[deleted]`, bot boilerplate, link-only.

**Coding per sentence:** (a) word count, (b) opener (bare / And-But-So / subordinator / discourse-marker / vocative / interjection / imperative), (c) shape (S-V-O / imperative / fragment / quoted speech / list-item), (d) tail (because-when-if / prepositional / parenthetical-aside / Edit-appendage), (e) interaction role (§6), (f) punctuation deviation (dash `--`/em-dash, ellipsis `...`, lowercase start, period-fragment, caps) — feeds file 02 T13–T15.

**Yield table (conservative, auditable):**

| Thread | Bodies read | Sentences kept | Primary syntactic contribution |
|---|---|---|---|
| S1 jyhhdv | ~18 | ~30 | punch + *so*-chain |
| S2 d4j294 | ~16 | ~25 | *when*-front + analogy |
| S3 6a5j3z | ~16 | ~25 | verb-first + Edit-curation |
| S4 boza0g | ~16 | ~30 | confession→bullets→repair |
| S5 aphhpr | ~16 | ~25 | aphorism + *And*-warning |
| S6 b3btha | ~20 | ~30 | lowercase testimony + rule |
| S7 ca3ije | ~20 | ~30 | expert-informal + analogy |
| S8 izk9gh | ~20 | ~35 | quoted climax + TL;DR |
| S9 i65fce | ~14 | ~35 | memoir parataxis + Edit-diary |
| S10 dy1no2 | ~20 | ~20 | pun-minimalism |
| S11 egs81p | ~12* | ~40 | procedure + walk-away (*long OP) |
| S12 beku6e | ~10* | ~25 | numbered reasoning (*long OP) |
| S13 9ue6vz | ~14 | ~25 | flat confession + salt |
| S14 e7d1e0 | ~14 | ~35 | trauma compression + ellipsis |
| S15 chaf53 | ~14 | ~20 | joke-question + meta |
| S16 eyus0a | ~14 | ~30 | receipt narrative + period-fragments |
| S17 gmhtel | ~12 | ~20 | rumination + percentile |
| S18 h7mzd3 | ~14* | ~40 | heroic-fail epic + 7 EDITs (*long OP) |
| S19 78i41s | ~12 | ~25 | reciprocity thesis + story |
| S20 gpjri5 | ~12 | ~20 | dialogue + comfort-minimalism |
| **Total** | **~308** | **~565 → reported as 520+** | deliberately under-claimed for drift |

*Long-OP threads: body count lower but sentence count higher per body.

**Coverage check for downstream files:** every template T1–T15 (file 02) is attested in ≥3 threads; every anti-pattern family A–E (file 03) has ≥15 natural counter-examples; every rule in file 04 cites ≥2 threads.

---

## 6. Comment dynamics (7 shapes — S13–S20 additions in bold)

1. Punch → riff (S5/S10; **S15 joke-questions → tactical wedgie analysis**).
2. Tip → better-tip → caveat (S3/S11; **S19 coffee → love-languages → reverse-coffee**).
3. Confession → peer echo (**S13 flat brag → salt; S14 trauma → ETA-thanks; S20 call → movie-guilt**).
4. Expert → domestic analogy → live test (S2/S7; S11 magnet/tater-tots).
5. Story → quoted climax → TL;DR (S8/S12; **S16 bill-revenge; S17 percentile-rumination; S18 merman saga + fanfiction options**).
6. Post → Edit-diary (S3/S4/S9/S11; **S18 seven EDITs as real-time serial**).
7. **Boundary → receipt → walkout (new):** dating threads stage evidence ($100 bill, one-word answers, sodium chloride) then exit ("check please!", "walked out the door", "split our bill"). Produces period-fragments and *And...*-stalls — core data for file 02 T14.

---

## 7. Sampling methodology (reproducible)

1. Query: `rdt search "<q>" -r <sub> -s top -t all -n 3 --json` (Faz-2 queries: "I cheated", "I lied", "tifu wedding/work", "what do you regret", "first date fail", "how to make friends", "lonely").
2. Gate `created_utc < 1609459200`; log rejects (§0) to prove application.
3. Read `rdt-tidy --compact read <id> -n 10/12/20` (top-sort default); two-space indent = reply level.
4. Segment + code per §5; long OPs (S9/S11/S12/S18) coded paragraph-by-paragraph.
5. No external dumps; live API is source of record. Scores/sort drift; IDs + timestamps + quotes are stable.

---

## 8. Limitations (Faz-2 honest)

- Engagement bias persists (top-sort rewards wit); mitigated by S9/S12/S20 low-score comfort replies and S14 ETA-thanks.
- Demographic skew (young US/UK informal; male-leaning outside S12/S20/S18); AAVE/ESL/Global-South marginal.
- Window 2017–2020 (+2011/2015 stubs); no 2021+ claims.
- n≈520 supports pattern discovery + rank-order claims, not population point-estimates. File 02 uses ranges/formulas with마다 explicit scope.
- Drift: deletions grow; re-run `read <id>` may show fewer bodies — the quoted passages, not counts, are the evidence.
