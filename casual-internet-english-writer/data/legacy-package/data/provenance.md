# Provenance, migration, and corrections

## Package layout change

With user approval, `data/sources.json`, `data/excerpts.json`, `evaluation/cases.json`, and `evaluation/model-trials.json` were removed after all 25 files were backed up and SHA-256 matched at `/tmp/natural-english-writer-12-ex3_pdzl/original/natural-english-writer`. This temporary backup is neither a portable dependency nor guaranteed permanent storage.

Below is the earlier migration record; JSON counts, schemas, and locators concern externalized records. Archives and hashes are unchanged. Guides link historical notes instead of JSON. Removal itself establishes no model or primary-source verification.

## Scope and temporal context

Migration started on 2026-09-14 local time (`+03:00`; 2026-09-13 UTC). The date was obtained from the local clock, not inferred from the source documents. Only local files were inspected for this migration. No Reddit page or comment was newly fetched or verified.

Inputs were the four numbered notes in `/home/arda/reddit-arastirma/natural-english-writer-skill-upgrade/` and the installed `natural-english-writer/SKILL.md`. The source notes claim prior live checks on 2026-09-13/14; this package records that as inherited provenance, not a check performed during migration.

The user approved updating the installed package, preserving its name and manual-only invocation policy, copying the inputs into an archive, and creating the linked modular file set. The four working-directory inputs were not edited. No deletion, move, posting, configuration change, commit, or push was part of the migration.

## Byte-preserved originals

| Archived file | SHA-256 of input |
|---|---|
| [Source notes](archive/01_sources_and_data.md) | `ef65ff88db4050c1c5abaa38ef39c9250fd221efade6943634f5059263a9d754` |
| [Syntax notes](archive/02_sentence_syntax_patterns.md) | `7359156f3b608d5ac7ac84e4598ee63e56313e9fb5a9f6f12209e286996b9f29` |
| [Comparison notes](archive/03_natural_vs_ai_phrasing.md) | `fc1a00626c63b754296e8c9f25a6a5c4c648ef71e2cab54033a06ae63d94c34b` |
| [Rules notes](archive/04_natural_writing_rules.md) | `4b54c8ba8a1ee415697bea3ab47591aa674288a938aebdde190e3e7a8bd66eb3` |
| [Original skill text](archive/original-skill.txt) | `71fb5ae9b4f31b1b1a6df78f6e27b23748582fb66fd4c04e7d45770baf70f10d` |

The original entry point is stored as `.txt`, not another discoverable `SKILL.md`. Archives are historical data, not active instructions. They intentionally retain inconsistent or unsupported claims so the record is not silently rewritten.

## What was extracted

- `sources.json` (externalized): 20 named thread entries, S1 through S20, plus unresolved labels S-fire and S-wifi. Dates/IDs are inherited. Unknown URLs, exact timestamps, edit history, and item-level metadata remain null/empty rather than fabricated.
- `excerpts.json` (externalized): exactly 75 comparison rows, A1-E15, and 15 syntax-pattern spans, T1-T15. Original strings and 1-based archive line ranges are preserved. These are **analysis records**, not 90 independent sentences or a newly reconstructed 520+ sentence corpus.
- The five transformation guides each hold the corresponding 15 historical comparison rows with a prominent non-equivalence warning, alongside separately labeled faithful constructed fixtures.
- The Human-Rhythm guide maps all 15 historical patterns to optional editorial decisions. It does not operationalize the old numeric formulas.
- The legacy five voice samples live in `examples/voice-samples.md`; their provenance was not documented, so they are not called empirical user or Reddit samples.

In the externalized JSON records, `local_evidence.path` resolves from their original `data/` directory; line endpoints are inclusive. Syntax `operational_route` resolves from the package root. Comparison IDs are stable within this import, not Reddit comment IDs. `source_ids` are local register keys. `historical_fix_as_recorded` and `historical_span_as_recorded` preserve the analyst's text as data; they are not engine commands.

## Corrections and quarantined claims

| Issue in supplied notes | Locally inspectable finding | Operational treatment |
|---|---|---|
| Complete 500+/520+ sentence pool claimed | No row-level raw corpus or coding ledger is bundled | Do not claim a reconstructed raw dataset or independently audited sample size |
| Yield totals | The 20 listed sentence yields sum to 565 (350 + 215); listed body yields sum to 304, not the table's 308 | These are sums of approximate input figures, not verified sample counts |
| Grief quote described as 11 words | "My mum was 14 when she met my dad. He was 24." has 12 whitespace-delimited words (9 + 3) | Do not reuse the erroneous count or its derived 5.5 ratio |
| Pre-2021, contamination-free, human/native corpus | Only thread dates are reported; item timestamps, edit histories, and author status are absent | No guarantee of pre-cutoff wording, human authorship, native status, or contamination freedom |
| S-fire and S-wifi referenced in comparisons | No resolved dossier for either label in the 20-thread register | Flag A12, B12, C3, C15, D12, E9 as unresolved; do not cite them as verified |
| A legacy `3dd5s4` reference appears in rule notes | It is not enough to establish a dated S-wifi dossier or the specific quoted comment | Do not manufacture a source mapping or URL |
| All Natural cells described as verbatim or minimally trimmed | B1 explicitly says S11-shaped; many cells contain ellipses, trimming, or composite snippets | Preserve local wording; mark fidelity unverified, with explicit adaptation/shortening flags |
| AI/Natural pairs treated as characteristic equivalents | Several pairs change emotion, facts, or speech act; B10 replaces a citation with praise | Historical analogues only; faithful new pairs retain conditions, facts, and attribution |
| Opener frequencies, zero occurrences, demographic norms | Raw coding, denominators, sampling labels, and independent verification are not available | No population inference, frequency mandate, or zero-occurrence proof |
| Every T pattern claimed in at least three threads | Several displayed witness lists do not establish three independent examples | Retain pattern hypotheses; do not assert the coverage claim |
| BPR/STALL/case/serial-decay coefficients | Hand-assigned weights and qualitative fits, with no validated measurement or fit statistics | Archive only; no numerical engine thresholds |
| File 04 says T10-T15 and families D-E are pending | They already appear in supplied files 02 and 03 | Route the existing modules; do not repeat the stale pending status |
| Old hard bans on parentheses, hedges, summaries, and length | They can erase citations, safety scope, uncertainty, or requested formats | Replace with functional detection and meaning-preserving exceptions |
| Clinical/safety/technical quotes used as naturalness examples | Their factual correctness was not checked in this migration | Rhetorical specimens only, not advice |

Other presentation inconsistencies, such as the cluster heading's count versus its A-I rows and conflicting used-car post lengths, further limit quantitative reuse. Preserving the archive does not endorse its conclusions or explanations of LLM training behavior.

## Design decisions

The entry point contains essential decisions and guards; resources add task-specific detail. No speculative executable helper, automatic web fetcher, background service, or second discoverable skill was added. Existing `disable-model-invocation: true`, identity, and authored-output restrictions on emoji/em dashes remain. The default without voice samples is now plain, polite English with standard capitalization rather than assumed lowercase slang; actual samples still govern supported register choices.

The authoritative writing workflow is in [SKILL.md](../SKILL.md). The [evidence policy](../references/evidence-policy.md) defines any later verification. The [evaluation record](../evaluation/review.md) distinguishes actual structural checks, manual scenario review, and unrun model trials.
