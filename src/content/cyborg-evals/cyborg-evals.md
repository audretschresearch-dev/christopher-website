---
title: "Cyborg evals"
posted: 2026-04-30T17:31:19.030Z
source: LessWrong
draft: false
---

*Originally posted on [LessWrong](https://www.lesswrong.com/posts/zctBgvzxamFThgc3T/cyborg-evals).*

The low-background steel problem
================================

[Modern steel](https://en.wikipedia.org/wiki/Low-background_steel) is slightly radioactive. We did a lot of atomic testing in the 40s and 50s, and now our atmosphere has some amount of radioactive particles, which make their way into steel during production. This is mostly fine, but some scientific instruments require steel that is not radioactive. In order to get such steel, people typically scavenge for pre-1950s steel (such as the [sunken Imperial German Navy](https://en.wikipedia.org/wiki/Scuttling_of_the_German_fleet_at_Scapa_Flow)). Here's a photo of the SMS Hindenburg being salvaged.

![image.png](https://res.cloudinary.com/lesswrong-2-0/image/upload/v1777498883/lexical_client_uploads/rb1buvdqxom39bqdbh4p.png)

You might see an analogy here between pre-war steel and pre-LLM data. Indeed, this idea has been discussed in various places last year: in a [LinkedIn post](https://www.linkedin.com/posts/tingeber_what-is-low-background-steel-and-why-does-activity-7252241578662969344-87zh), an [Ars Technica article](https://arstechnica.com/ai/2025/06/why-one-man-is-archiving-human-made-content-from-before-the-ai-explosion/), a [Business Insider article](https://www.businessinsider.com/chatgpt-ai-pure-internet-gone-low-background-steel-cloudflare-2025-6), a [Harvard JOLT article](https://jolt.law.harvard.edu/digest/model-collapse-and-the-right-to-uncontaminated-human-generated-data?). It's a good analogy, but not the one we wish to make. Instead of talking about data, let's talk about humans.

Modern software engineers are radioactive.

Historically, if you wanted to estimate how long a software task would take, you would ask a software engineer to "raw dog it"[^3g6nv0g9czg] and time how long it takes them. This is mostly impossible now, because almost all software engineers are highly dependent on LLMs. An engineer today who tries to do a given task without AI assistance would be significantly slower than a "pre-LLM" engineer on the same task. If you tried to use post-LLM engineer data to estimate LLM time horizons, you'd get biased results.[^khegs8jxhw]

Let's say we wanted to extend the METR benchmark by adding more tasks in the 8-30 hour range. But when we give humans a METR task they were able to do in 8 hours in 2024, it now takes them 20 hours. Thus, [we can’t just extend the METR benchmark](https://www.lesswrong.com/posts/3SywPAjGQWCtQFafb/you-re-gonna-need-a-bigger-boat-benchmark-metr) in a naive way. Incidentally, METR has recently written about their experience with contaminated developers. In their [Feb 2026 'uplift update'](https://metr.org/blog/2026-02-24-uplift-update/), they say: "When surveyed, 30% to 50% of developers told us that they were choosing not to submit some tasks because they did not want to do them without AI."[^efyvo1m0pw]

![image.png](https://res.cloudinary.com/lesswrong-2-0/image/upload/v1777499036/lexical_client_uploads/g4drt04jmtjprircwwl0.png)

We're facing a new and fundamental problem with getting human data on long-horizon software/agentic tasks. Humans have gotten used to engineering with AI. We can’t compare a human’s performance on software tasks in 2026 to 2024.

Cyborg evals
============

How do we address this problem? We propose 'cyborg evals': studies which compare eval performance between current gen AI-assisted humans and next gen AI-assisted humans. That is, we are comparing $Eval(Human+AI_{n}) \space vs \space Eval(Human+AI_{n+1})$. Cyborg evals are thus a kind of uplift study. These studies help us understand the practical improvements that new models offer, even as AI advances and human capabilities change. They are also relatively easy and cheap to do.

We can imagine some variations on this kind of study. For example, we could compare$Eval(Human+AI_{n}) \space vs \space Eval(AI_{n})$. Consider that if model N is able to do 100% of N+human, then humans are cooked.[^3lkhy4x2uw3]. If you plot this over time, you're on your way to forecasting full automation in the eval's domain.

![image.png](https://res.cloudinary.com/lesswrong-2-0/image/upload/v1777499862/lexical_client_uploads/ovpjngagzayxtrda1c4j.png)

This is what a forecast informed by cyborg evals might look like. (Domain is software engineering.)

Cyborg evals can also tell us about the relationship between AI labor and human labor. From an employer's perspective, AI labor and human labor are both economic substitutes (AI can be used as a replacement for web devs) and complements (AI increases the productivity of and demand for senior engineers). What is the "exchange rate"?

Suppose you want to estimate the cost of completing a software task in 2026. You might want to look at the cost to complete the task with different configurations of human labor and AI labor. While researching this article, we found a few recent data points for the difficult task of making a (good) compiler. [Anthropic](https://anthropic.com/engineering/building-c-compiler) "tasked Opus 4.6 using agent teams to build a C Compiler, and then (mostly) walked away". [Paul Biggar,](https://blog.paulbiggar.com/full-optimizing-compiler-with-ai/) who has a PhD in compiler design, built a Darklang compiler in 1-2 weeks using Claude Code, a task that he says "it would have taken \[\] at least 2 years to do" unassisted.[^gj78mt6bl28] Here's a graph of the costs of these projects; note the synergy effects.

![image.png](https://res.cloudinary.com/lesswrong-2-0/image/upload/v1777508273/lexical_client_uploads/oeqvoenttohfgzfixhvd.png)

The tradeoff between AI labor and engineer labor depends on both AI capabilities and on tasks. Cyborg evals will give us a quantitative view of this tradeoff.

### What kind of tasks would be good for cyborg evals?

What do we want out of tasks for cyborg evals? One important property is something like difficulty+discernment. We want evals that are hard in the sense that they don't get easily saturated. A standard approach here is to have an eval contain tasks of varying difficulty level. This is basically what you have to do if your tasks are pass/fail. Alternatively, you can choose tasks with a wide range of ordinal outcomes. For example, [Vending-Bench](https://andonlabs.com/evals/vending-bench) tests how much money models make in a simulated business scenario. Ideally, tasks can distinguish performance even into the far future.

Another desired property is something like economic usefulness. We want the results on our evals to correspond to work that is actually done; economic usefulness corresponds very well to practical usefulness and value. It gives us a good way to think about capabilities. Accordingly, tasks should be similar to what professional human (or human+AI) teams are paid to do in the real world. We think good tasks here will be those for which is easy and fun for a human+AI to solve together but hard for AI to solve by itself. These tasks form the frontier of software engineering today; this is the kind of thing people get paid to do!

Here are some specific ideas for kinds of tasks that would work well for cyborg evals. All our suggestions do well on the difficulty+discernment axis, though they vary in terms of economic usefulness.

1.  **Software replication:** given some existing piece of software, replicate it. This works best for software with good existing tests and specs, so that we can verify automatically. This approach has been proposed and [described in more detail by mechanize.work](https://www.mechanize.work/blog/the-upcoming-gpt-3-moment-for-rl/). Individual tasks aren't good for difficulty+discernment, but this can be made up for with enough tasks in the eval.
2.  **Open source replications:** use open source projects to get these tasks. Take a recent change from an open source project, ideally one with unit tests, and task an agent with it. Without unit tests, you may be able to use an LLM-judge approach because of ground truth. An example of this is [SWE-smith](https://swesmith.com/).
3.  **Optimization:** maximize or minimize something. Examples of this are Anthropic's [interview problem](https://www.anthropic.com/engineering/AI-resistant-technical-evaluations), Karpathy's [autoresearch](https://github.com/karpathy/autoresearch), and [Vending-Bench](https://andonlabs.com/evals/vending-bench).
4.  **Games:** games! Examples are [Antim Lab's evals](https://www.antimlabs.com/) and [AI plays Pokemon](https://www.lesswrong.com/posts/u6Lacc7wx4yYkBQ3r/insights-into-claude-opus-4-5-from-pokemon).
5.  **Adversarial:** compete with another model or human within the task itself. We like to think of this as the ["battlebots"](https://edgerton.mit.edu/for-MIT-students/clubs-teams/combat-robotics-club) approach. An example of this is [CodeClash's eval](https://codeclash.ai/). Another idea for tasks here is adversarial coding: one agent codes something, then another agent reads it and makes changes to the spec that would be maximally difficult for the first agent to deal with.
6.  **Forecasting**: make predictions that can be evaluated. Some different approaches to this can be found in [Metaculus's FutureEval](https://www.metaculus.com/futureeval/), [ForecastBench,](https://www.forecastbench.org/) and [Prophet Arena](https://prophetarena.co/leaderboard/forecast). You might also call this "modeling" or "data analysis".

Notably, none of the evals linked to above have published scores for cyborgs.

### The Cyborg Gap

Chess serves as a nice historical illustration of a cyborg gap. In 1997, the best AI and the best humans were close to parity in chess skill. In 2005, AI was better than the best humans. From [2005](https://en.chessbase.com/post/hydra-mies-the-quarter-finals-of-freestyle-tournament) to [2007](https://en.chessbase.com/post/rajlich-wins-sixth-pal-c-freestyle-tournament), cyborgs (or "centaurs") were better than AI. From 2010 to 2017, it's disputed whether cyborgs had an advantage. From 2017 (AlphaZero) onwards, cyborgs had no advantage over AI.

![image.png](https://res.cloudinary.com/lesswrong-2-0/image/upload/v1777522155/lexical_client_uploads/hmqy9npi6uktepeg8xuf.png)

These days, humans are no longer pure, un-AI-assisted humans when they do work in the real world. We work as cyborgs. This is especially true in the domain of software engineering. How much more capable are human engineers (cyborgs) than Claude Code at the present moment? Is that capability gap shrinking or increasing? When will that gap disappear? These are questions we can answer with cyborg evals.

[^3g6nv0g9czg]: I swear this is a thing I heard an actual software engineer say. 

[^khegs8jxhw]: One approach to addressing this problem would be to find developers who are “untouched by AI”. This is already really hard, especially if you're looking for ~professional level software engineers, and will only get harder and harder. Also, an "untouched developer” is not very representative of what the average economically productive developer looks like. 

[^efyvo1m0pw]: Another difficulty with extending the METR benchmark is that the duration we need for tasks is much longer now than it was even a year ago. In METR terms we need 8hr-30hr tasks. Even putting aside worries about engineer contamination, it’s simply hard and expensive to find people to take these tasks. This is discussed in METR's Feb post. 

[^3lkhy4x2uw3]: Assuming the eval isn't saturated and incorporates every domain we care about. This second assumption is big, so we might want to remove it and instead just think about this in a domain-specific way. On the other hand, you could argue that full automation in the software domain quickly becomes full automation of everything, due to recursive self-improvement. 

[^gj78mt6bl28]: What it means for a task to be "AI only" is fuzzy. Somebody has to prompt the AI, build its harness, (in some cases) iterate on its harness, and so on. The engineer in the Anthropic project built a custom harness for it.
