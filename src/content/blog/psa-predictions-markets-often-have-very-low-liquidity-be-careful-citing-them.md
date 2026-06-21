---
title: "PSA: Predictions markets often have very low liquidity; be careful citing them."
posted: 2026-03-16T21:07:17.499Z
source: LessWrong
tags: ["HQ"]
draft: false
---

*Originally posted on [LessWrong](https://www.lesswrong.com/posts/SrtoF6PcbHpzcT82T/psa-predictions-markets-often-have-very-low-liquidity-be).*

I see people repeatedly make the mistake of referencing a very low liquidity prediction market and using it to make a nontrivial point. Usually the implication when a market is cited is that its number should be taken somewhat seriously, that it's giving us a highly informed probability. Sometimes a market is used to analyze some event that recently occurred; reasoning here looks like "the market on outcome O was trading at X%, then event E happened and the market quickly moved to Y%, thus event E made O less/more likely."

Who do I see make this mistake? Rationalists, both casually and *gasp* in blog posts. Scott Alexander and Zvi (and I really appreciate their work, seriously!) are guilty of this. I'll give a recent example from each of them. 

From Scott's [Mantic Monday post](https://www.astralcodexten.com/p/mantic-monday-groundhog-day) on March 2:

> ### Having Your Own Government Try To Destroy You Is (At Least Temporarily) Good For Business
> 
> On Friday, the Pentagon declared AI company Anthropic a “supply chain risk”, a designation never before given to an American firm. This unprecedented move was seen as an attempt to punish, maybe destroy the company. How effective was it?
> 
> Anthropic isn’t publicly traded, so we turn to the prediction markets. [Ventuals.com](https://app.ventuals.com/markets) has a “perpetual future” on Anthropic stock, a complicated instrument attempting to track the company’s valuation, to be resolved at the IPO. Here’s what they’ve got:
> 
> [![](https://substackcdn.com/image/fetch/$s_!ddUx!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1acb3560-eb11-4071-b690-6936c374c9a8_1264x604.png)](https://app.ventuals.com/trade/anthropic)
> 
> Upon the “supply chain risk” designation, predicted value at IPO fell from about $550 billion to $475 billion - then, after a day or two, went back up to $550 billion. No effect!
> 
> A coarser yes-no [Polymarket](https://polymarket.com/event/anthropic-500b-valuation-in-2026) tells the same story:
> 
> [![](https://substackcdn.com/image/fetch/$s_!Oi-s!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff4bb68c8-292d-49c8-858e-dad7ea070871_959x487.png)](https://polymarket.com/event/anthropic-500b-valuation-in-2026)
> 
> The chance of Anthropic getting a $500 billion+ valuation in 2026 fell from 90% to 76%, before rebounding to 83%.
> 
> Why have the markets shrugged off this seemingly important event?
> 
> Partly it’s because Anthropic seems likely to win on appeal. Hegseth has said the government will keep using Anthropic for the next six months (undermining his case that they’re a national security risk) and has signed a substantially similar contract with OpenAI (undermining his case that their contract terms were unworkable). The prediction markets think the courts will be sympathetic:
> 
> ![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/f0cd5d249a8d61726356f48c68ec3a7f6bd903428867d1fb.png)
> 
> \[link to [this Manifold Market](https://manifold.markets/ScottAlexander/will-anthropic-escape-the-supply-ch)\]
> 
> But even in the 28% of timelines where the designation sticks, things don’t seem so bad...

(The first market that Scott quoted, the Ventuals future, is not a typical market that people reference -- I had never seen it before -- and is kind of complicated to analyze. I did an analysis of it but have decided not to include it in the main post as it brings the focus away from the specific point I want to make. I'll attach the analysis as a comment to this post.)

Let's take a look at the Polymarket market that Scott cites. Here's what its order book looks like when I'm writing this: 

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/807681c24e920f4880c5cfb510e74f93afbcea8e1d4f368e.png)

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/99f3ca2e2386deb303158187452722596b49f3ac4371c8f2.png)

So, if I wanted to change the chance of Anthropic getting a $500B+ valuation from 90% to 75%, I'd have to spend *checks clipboard* **$59**. Okay, maybe we should add in the liquidity from the Yes side as well. In which case... **$370\.** Someone could manipulate Scott Alexander and his tens of thousands of readers (some of whom are very powerful people who will be making important decisions based on their beliefs about Anthropic!) for a few hundred bucks. 

What about the Manifold market Scott cites? Well, first of all, Manifold is a play money market, which means we have little a priori reason to expect it to be accurate or efficient. The utility (or lack thereof) of play money markets is not what I want to talk about in this post, though. What I want to focus on here is the (lack of) activity in the market that Scott references. Let's look again at a chart of it.

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/f0cd5d249a8d61726356f48c68ec3a7f6bd903428867d1fb.png)

This is not what an active or efficient market looks like. There has been ~0 activity from March 9 to March 15. 

Let's look at an example from Zvi now. From his Feb 26 AI [newsletter](https://thezvi.wordpress.com/2026/02/26/ai-157-burn-the-boats/):

> The prediction markets on this situation are highly inefficient. [Kalshi as of this writing](https://kalshi.com/markets/kxanthropicrisk/will-the-pentagon-designate-anthropic-a-supply-chain-risk/kxanthropicrisk) has bounced around to 37% chance of declaration of Supply Chain Risk, [versus Polymarket at 22% for](https://polymarket.com/event/will-pete-hegseth-ban-claude-by-march-31) very close to the same question.
> 
> Another way to measure how likely things are to go very wrong is that Kalshi has a market on ‘[Will Anthropic release Claude 5 this year](https://kalshi.com/markets/kxclaude5/claude-5-released/kxclaude5-27)?’ which is basically a proxy for ‘does the American government destroy Anthropic?’ and Polymarket has whether it will be released by April 30. The Kalshi market is down from 95% (which you should read as ~100%) to 90%. Polymarket’s with a shorter timeline is at 38%.

I looked at these markets on Feb 26 and found that they were not very liquid. From my notes: "$1k trade is gonna move the market 20% on Polymarket. Kalshi market is a joke, each side is like 40 cents wide." Zvi was also live tweeting about these markets.

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/9223bab8c2f25ee9d24739bb62e417d25120c375c5f3f4dd.png)

When Zvi tweets "The @Polymarket for Hegseth 'ban Claude by March 31' has crashed to 15%", the implication is that this market is worth taking seriously, etc. 

![](https://39669.cdn.cke-cs.com/rQvD3VnunXZu34m86e5f/images/54a631dc37921e38a79520e3c6b750cc22b5e3a90d4ab4a0.png)

Zvi is correct that these markets aren't efficient, but is wrong that there is Alpha. There isn't money to be made in these markets because they're tiny. In fact, due to how large the bid/ask spreads was on the Kalshi market, its odds would fluctuate 20%+ just based on whether the last trade was at the bid or the offer.

So, PSA: Please check the liquidity/activity/volume/spread of a prediction market before you reference it! 

There's a corollary to be made about how prediction markets are causing people to make predictable epistemic errors. (Do people want me to make a post on this?)
