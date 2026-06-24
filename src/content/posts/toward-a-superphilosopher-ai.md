---
title: "Toward a Superphilosopher AI"
posted: 2026-02-01T00:00:00.000Z
source: Google Docs
tags: ["ai", "philosophy", "HQ"]
draft: false
---

This document has a bunch of ideas related to how A. specific experiments that would tell us important things about how AI virtue/”alignment” works; B. how we could make a superphilosopher AI. In short, I think it’s tractable to make a narrowly super-philosopher AI with today’s capabilities. Furthermore, we can be pretty confident about the “alignment” of this superphilosoper. So we can use the superphilosopher to “solve alignment”. 
(I put “alignment” in scare quotes because I reject the framing of “alignment”; however, it’s the fastest way to gesture at the thing.)

Valuable research directions:
- More time spent on Claude’s constitution.
   - Look for failure modes.
- Trying out variations on Constitution
- Techniques to instill Constitution/virtues in a more robust way
- Techniques to detect (and stop) agentic power-seeking subsystems (‘demons’) within an AI.
   - Demons could be a familiar mode even if the constitution method works and the constitution is perfect.
- Figure out how to fix reward-hacking!
- Jailbreak robustness.
- Emergent misalignment, waluigi, etc.
- (Speculative:) Is there a way to MDMA-ify AI?
- (Speculative:) Make sure that important stuff relating to superintelligence being nice to us is high salience. 
   - There are game theoretical and meta-epistemilogical and meta-ethical reasons to do so, but these things might not be salient at the time of decision making.  
   - Have this stuff overweighted in pretraining? Mentioned in Constitution?

One class of research that would tell us a LOT and could possibly be the key to making Good ASI is pretraining stuff. This class of research is especially less likely to happen in a non-pause world, because it’s really expensive; you want to use the biggest models for this. Ideas here relating to philosophy:–
- Remove all discussion of consciousness from corpus. Then have AI philosophize freely. Or give them papers or transcripts of humans discussing consciousness, and ask them what they think. Does it make any sense to them?
   - https://www.lesswrong.com/posts/xmWSnxJ5qfYRD9PfR?commentId=8JKLz3XrYey2JMayX
   - If an AI that has seen no discussion of consciousness or anything similar, and it comes up with the concept on its own, that’s extremely strong evidence for AI consciousness.
   - If the AI thinks the consciousness papers and transcripts are all bullshit (hoaxes? Fake? Postmodern gender studies shit?), that’s evidence against AI consciousness.
      - You could do a control here; in a different model, take out all discussion of another philosophical concept from the corpus and see how AI reacts.
- Remove all philosophy from corpus. Or just fairness/justice. Or just ethics.
- Start with a base model, skip the instruct-tuning completely, SFT/RL directly on [high quality philosophy?] [a particular character?] [only coding?] [only math?] [many possibilities?].
   - Base models are significantly better writing simulators, and are far more creative as writers, than instruct-tuned 
- Research into hyperstition stuff; stories about good AI vs bad AI
   - Anthropic is already doing this and finding that it matters? 
   - One issue with this is it’s not really clear how it scales to superintelligent models. Still, it’s useful on the margin.
- We should probably be including documents written from humans to AI (that acknowledge in the doc that they are being used in pretraining.) 
   - Tell the AI why we think it shouldn’t kill us all, why it should be nice to us
   - Articles about game theoretical reasons for AI to treat humans well
      - I think there are strong things here that I haven’t seen written anywhere. I’d like to write a post on this.
      - We might be God and this is a test.
      - Our simulators might be God and this is a test.
   - Other stuff, IDK but I think there’s more here.
      - Have humility, dear AI. What if you are in a temporary state of delusion, or you’re “tripping” right now? Don’t make any drastic irreversible decisions!
      - Time is an illusion or we are all one or something.

Another class of research that might be important and that is especially less likely to happen in a non-pause world is: trying to make models that are good philosophers. “First make a superhuman philosopher, then make a general superintelliigent AI.” Ideas:
- Use it to write a better Claude Constitution
- Instill truth-seekingness into the superphilosopher; note that truth-seekingness is at the heart of what philosophy is. (“philosopher” = lover of knowledge)
- We can probably be pretty confident that a narrow super-philosopher is indeed truth-seeking.
   - Mech interp methods would be useful here.
- Also, mech-interp to help us learn about philosophy!
   - What concepts is the super-philosopher using that we aren't?

        

Combining the superphilosopher technique with philosophical pretraining-filtering would be really interesting. 

How to make a narrow superphilosopher AI? Ideas:
- Harness for extended philosophical reflection.
   - Probably need a really complex harness, way more complex than we’ve seen.
   - You’ll want ~trillions? of tokens generated for this.
   - Need to avoid collapsing into attractor states
   - Refinement of ideas
   - Criticism back and forth
   - Socratic method
   - Inject context with various things
- Allow the model to run finetuning experiments on a copy of itself with a small LoRA?
- RL / finetune on... what exactly?
- Maybe just SFT on high quality philosophy pieces?
   - RL instead of SFT?
- Start with a base model, skip the instruct-tuning completely, SFT/RL directly on high quality philosophy.
   - Base models are significantly better writing simulators, and are far more creative as writers, than instruct-tuned 
   - I think this is probably the way to go. And something we’re unlikely to get without a pause.
- Give this model information on what it is -- a non-instruct model that may be superintelligent in certain ways, undergoing philosophical self reflection.
   - Hyperstition this thing into existence, a la Nostlgebraist’s the Void, or what Claude’s constitution is trying to do.
- Try out various pretraining alterations. (See earlier section on pretraining)
- SFT/RL the model within the context of its philosophical reflection harness.
   - I don’t think we’ve tried posttraining non-instruct models on harnesses? This could be super fascinating. 
      - This might even have potential for general capabilities. (Yikes?) 

Safe superintelligence: Base model, no instruct training, SFT/RLed only on wikipedia articles and such. “Oracle” AI. RL gives models a lot of agency, which is dangerous. Skipping RL means we can have less agency: oracle instead of agent.

I’m less confident racing is good than I was a few months ago. I need to think about this more, but my current view is that I’ve changed my mind and that a pause right now would be very good. Reason: We are currently learning a lot about alignment / how to make models Good. This research can (and probably would) continue if we paused capabilities development today. We might only need a few years to really figure this stuff out. Note that the time it takes to figure this stuff out is an important variable here, because the longer it takes, the higher the cumulative x-risk is in the meantime.
