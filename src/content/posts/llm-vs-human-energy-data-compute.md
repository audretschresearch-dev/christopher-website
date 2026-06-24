---
title: "LLMs vs humans: energy, data, and compute"
posted: 2026-06-04T22:57:53.943Z
tags: ["ai"]
source: LessWrong
draft: false
---

*Originally posted as a [LessWrong shortform comment](https://www.lesswrong.com/posts/FnKqJH9LkwdLYy9oW/eye-you-s-shortform?commentId=goEDJSWhnYdLsctzD).*

How do LLMs and humans compare with regards to the amount of energy, data, and compute that's used to train/run them? I was inspired by [Samuel Knoche's post](https://www.lesswrong.com/posts/tmWxDGnuNdaHFDyjf/dissolving-the-deep-learning-sample-efficiency-gap-1) on sample efficiency to come up with some numbers. This table was made by Opus 4.8. after some iteration:

![image.png](https://res.cloudinary.com/lesswrong-2-0/image/upload/v1780613163/lexical_client_uploads/cjpexkftbahgaaqqnnxk.png)

"Task" = "produce one thoughtful ~1,000-token answer"; unclear if this is a useful number, obliviously it doesn't generalize. I do think it's interested to compare the energy/computer ratio for inference between human and AI.  
  
Training data for humans is a big "???". There's ~4x10^8 waking hours. Opus 4.8 cited [this 2024 paper](https://www.cell.com/neuron/fulltext/S0896-6273\(24\)00808-0) which says "our sensory systems gather data at ~1⁢0^9 bits/s". That gives ~4x10^17 as an upper bound. But human sensory data is *extremely* redundant. If someone wants to spend time figuring out a good way to estimate entropy adjusted information here, that would be cool.  
  
(FWIW, I spent a little over an hour on this -- I did a fair amount of iteration with GPT5.5, looked a bit myself into a few numbers, and got new instances to do estimates from scratch to see if things lined up.)
