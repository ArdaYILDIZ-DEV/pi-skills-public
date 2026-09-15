# Casual internet calibration examples

Constructed fixtures test fidelity and register. Historical excerpts remain in `data/archive/`; these examples do not borrow their biography or claim empirical status.

## Reddit post from Turkish notes

Brief: `Bir aydır akşam yürüyüşüne çıkıyorum. Uykum değişmedi ama işten sonra kafamı toparlamama yardımcı oluyor. Sadece paylaşmak istiyorum.`

Output:

> Evening walks have been helping me unwind after work
>
> I've been going for evening walks for about a month. My sleep hasn't changed, but they do help me clear my head after work.

No invented sleep benefit, advice request, or `Anyone else?` ending.

## Direct reply

Quoted comment: `Just buy the cheaper one.`

Notes: `Ucuz olan burada satılmıyor. Kargo ve vergi eklenince aynı fiyata geliyor.`

Output: `The cheaper one isn't sold here. Once you add shipping and tax, it costs the same anyway.`

No greeting, invented country, or purchase history.

## Preserve harmless looseness

Input: `Yeah, I tried that already. Same error.`

Output: unchanged.

`Same error.` is a useful conversational fragment. Do not expand it to `However, I continue to encounter the same error.`

## Rejoin artificial drama

Input: `I restarted it. Still. The same. Error.`

Output: `I restarted it, but I'm still getting the same error.`

The source does not establish dramatic emphasis, so the staged fragments are rejoined.

## Firm disagreement

Notes: `Katılmıyorum. Sorun fiyat değil, burada hiç satılmaması.`

Output: `I don't agree. The price isn't the issue. It isn't sold here at all.`

Do not add `I see where you're coming from`, profanity, or a joke.

## No manufactured Reddit voice

Bad: `tbh bro this is lowkey wild lol, idk why nobody talks about it`

Better when no matching sample exists: `This is weird. I'm surprised more people aren't talking about it.`

The better version is still casual without wearing a slang costume.

## Repair a cluster without adding facts

Input: `In today's fast-paced world, this app is a game-changer. It's not just convenient; it's transformative. It lets me download maps before a trip. In conclusion, it's a testament to innovation.`

Output: `I can download maps in the app before a trip.`

The concrete capability survives; the framing does not. Do not add a destination, offline performance, saved money, or a personal travel story.

## Grounding must come from the source

Notes: `Dün güncelledim. Sadece eski telefonumda çöküyor. Nedenini bilmiyorum.`

Output: `I updated it yesterday. It only crashes on my old phone. I don't know why.`

`Yesterday` and the device limit are supplied. Do not name a phone model or diagnose the update as the cause.

## Meaningful contrast and scope stay

Input: `It's not the price; it's the shipping time. I think it only happens with international orders.`

Output: unchanged.

The contrast corrects a real distinction. `I think` and `only` carry different information. A ban on contrast frames or a hedge quota would damage the message.

## Agreement is not automatically scaffolding

Context: the user agrees with `Keeping the old version would make rollback easier.`

Input: `Absolutely. I'd keep it until the migration is done.`

Output: unchanged.

The agreement and migration condition do real work. Do not remove `Absolutely` merely because it appears on a tell list.

## A story need not become an explainer

Notes: `Otobüsü kaçırdım, yürüdüm. Yolda aylardır aradığım kitabı bir sahafta buldum. Geç kaldım ama pişman değilim.`

Output: `I missed the bus, so I walked. On the way, I found a book I'd been looking for for months in a secondhand bookshop. I was late, but I don't regret it.`

No lesson about slowing down, invented conversation, or engagement question.

## Technical inventory is still a real list

Input: `I tried three things: restarting the app, clearing the cache, and reinstalling it. Same error.`

Output: unchanged.

Three actual troubleshooting steps are not a filler triplet. Do not remove one to create asymmetry.

## Do not borrow the other speaker's history

Quoted comment: `Deleting the lockfile fixed it for me last week.`

User's notes: `Bunu henüz denemedim. Bağımlılık sürümlerini değiştirir mi diye sor.`

Output: `I haven't tried that yet. Would it change the dependency versions?`

The reply does not claim the quoted fix worked for the user.

## Sparse input stays sparse

Input: `Thanks, that worked.`

Output: unchanged.

Do not add a tool, date, explanation, or extra sentences to meet a specificity or length target.

## Correct someone without deleting uncertainty

Context: another commenter says the free version cannot export files.

Input: `Actually, the free version does let you export. I utilized it yesterday in order to save a copy. I'm kind of worried they'll remove it, though.`

Output: `Actually, the free version does let you export. I used it yesterday to save a copy. I'm kind of worried they'll remove it, though.`

`plain-language/preferred-term` simplifies the action; `plain-language/redundant-qualifier` preserves the correction and degree of worry. `Actually` and `kind of` do different jobs. Do not turn a concern into a prediction that export will be removed.

## Keep passive voice and the story's order

Input: `My bike was stolen last month, so I started taking the bus. Yesterday I missed it and walked instead. On the way I found the secondhand bookshop I'd been looking for. I was late, but honestly, I wasn't that upset.`

Output: unchanged.

For `active-voice`, the thief is unknown and irrelevant. For `bluf/buried-lede`, this is a story, not a delayed help answer. Do not invent an actor, lead with the bookshop, or replace the ending with a lesson.

## A clear DM reference needs no expansion

Context: a friend suggested restarting the app.

Input: `Thanks, that worked. Basically, I made a decision to leave the settings alone for now. I'm still kind of nervous about losing the photos.`

Output: `Thanks, that worked. I decided to leave the settings alone for now. I'm still kind of nervous about losing the photos.`

`ambiguity/vague-reference` accepts the clear reply context. `plain-language/bureaucratic-phrasing` restores the ordinary verb. The empty `Basically` can go, but `for now` and the degree of nervousness stay.

## Long reasoning is not unrelated sentence overload

Input: `I restarted the app, but it still crashes when I open the same file, so I can't tell whether the file or the app is the problem.`

Output: unchanged.

`structure/overloaded-sentence` concerns unrelated jobs, not a word limit. The attempted fix, remaining symptom, condition, and uncertainty form one coherent explanation. Do not diagnose either the file or the app.

## Shared jargon is not a glossary request

Context: a technical forum thread about an API response.

Input: `The API returns JSON. The CPU is idle.`

Output: unchanged.

For `plain-language/unexplained-acronym`, these terms fit the supplied specialist audience. A general-audience rewrite may need explanation, but the acronym's presence alone does not require one.

## An ambiguous reference can need a question

Input: `I tried the app and the browser version. It crashed.`

Clarification: `Which one crashed: the app or the browser version?`

For `ambiguity/vague-reference`, neither candidate is established as the referent. If the source supplies no answer and the distinction matters, ask rather than silently choosing one. This differs from the clear DM reference above.

## A decision tree is an object, not a wordy verb

Input: `I made a decision tree for choosing a phone.`

Output: unchanged.

For `plain-language/bureaucratic-phrasing`, the speaker made an actual artifact. Replacing `made a decision` with `decided` would destroy the meaning. Similarly, `It's actually very useful` can combine correction and degree without redundant qualification.
