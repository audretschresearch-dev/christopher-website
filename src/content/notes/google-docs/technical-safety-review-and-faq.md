---
title: "Technical Safety Review and FAQ"
created: 2022-12-04T03:53:53.332Z
modified: 2025-02-01T00:01:30.207Z
source: Google Docs
draft: false
---

# Technical Safety Review FAQ

For an engineered, non-lactic-acid-secreting variant *S. Mutans *strain

 
### 


### 

### What’s this all about? 

It is possible to genetically engineer *Streptococcus Mutans*, the dominant human mouth bacterium, to produce ethanol instead of lactic acid. A further change causes it to secrete mutacin 1140, a naturally occurring bacteriocin, with which it outcompetes harmful native mouth bacteria. A third tweak reduces horizontal gene transmission, to make it more difficult for the bacteria to mutate into anything harmful.This organism was first created in __1985__, and volunteers deliberately inoculated themselves with a modified strain. They have reported no ill effects since.
#### Might a one-time brushing of this strain onto the teeth reduce, or permanently prevent, dental cavities?

You are invited to do your own research; relevant terms are “BCS3-L1” and “SMaRT”; “*streptococcus mutans associated replacement therapy.” *All the science is out there; you should read it and reach your own conclusions. 
### 

### How do I apply this to my teeth? How long does it last? 

#### Application

The application process is: you brush and floss, and then paint your teeth with the strain. For extra efficacy, you can then eat a lot of sugar-containing candy, to activate the bacteria. 
The strain has been shown to endure indefinitely—25 years and counting— after a single brushing (__Hillman et al., 2000__).  This cleaning doesn’t especially need to be done in a dentist’s office. It will then persist on your teeth indefinitely. 
#### Maturation, and Boosters

The newly applied bacteria needs a year or two in order to fully outcompete the native *S mutans*. You can speed this process up significantly by reapplying the product. 
### 

### How much ethanol is the strain producing? Will I get drunk? 

Wild-type *S. mutans *is one of the lactic acid bacteria— the typical end-product of its metabolism (i.e. glycolysis) is lactate, not ethanol. If *S. mutans *is deficient in L-(+)-lactate dehydrogenase (LDH) it may be able to shift some of its metabolism to ethanol and acetoin endproducts, but will not be able to survive under high glucose concentrations. __This 1996 study__ by Hillman, Chen and Snoep speculated that this might be because of NAD-NADH imbalance or the accumulation of glycolytic intermediates. Regardless, the addition of an alcohol dehydrogenase II (ADH) from *Zymomonas mobilis *allows *S. mutans *to survive even when lacking LDH; it shifts production of lactic acid to production of ethanol. 

(diagram from __this paper__) 
Will this create problems? Are we going to get drunk from having more alcohol in our mouths, and have __VICE articles__ written about this triggering auto-brewery syndrome?
The endogenous alcohol concentration in the blood of sober people is 0.39 ± 0.45 μg/mL or 0.039 mg/dL (__Antoschechkin, 2001__). A __2015 study__ of Saudi Arabia residents found the 95th percentile of the study to have an ethanol level of 1.20 mg/dL. Impairment begins at a Blood Alcohol Content (BAC) of 0.03, which corresponds to 0.03 g / 100 mL of blood (in other convenient units: 300 μg / mL, 30 mg/dL). 
Let’s do some very rough estimates of how much alcohol we should expect: 
__This 2010 thesis__ measured the lactic acid production of a bunch of different microbes under a bunch of different pH conditions. They weren’t *really *measuring a time series- they let all the cultures ferment for 24 hours and then left them alone until their spectrophotometer readings stabilized. The most lactic acid production they saw from an *S. mutans *strain was 1.077 pg/cell. We will, for safety, assume that it produced all of that in the last 24 hours.
Okay, well, how many cells are in our mouths? For this we turn to the first relevant google result, __this 2013 study__ from India, which found that many people had >106 CFU/mL saliva. Given that their middle range was 105-106, let’s be conservative for our safety estimates, and say that a reasonably high CFU/mL would be 107. 
At this point, we can do math: 
1.077 * 10-12 g/cell * 107 CFU/mL = 1.077 * 10-5 g/mL (lactic acid/saliva) 
And stoichiometry: 
1.077 * 10-5 g/mL lactic acid * 1/90.08 mol/g lactic acid * 46.07 g/mol ethanol = 5.5 * 10-6 g/mL = 5.5 μg / mL (ethanol / saliva) 
At the long tail, people produce about __2 L saliva /day__. What this means: 
1. SMaRT secretes ~5.5μg of ethanol for every mL of saliva, 
2. So, even assuming the maximally inconvenient case of Sloppy Sam, who salivates 2L daily
3. You’ll end up with a daily dose of 11 mg of ethanol, which is about 1/4000th’s of a single shot of standard liquor. 
4. Assuming that the entirety of this dose hits the bloodstream at once (again, the maximally inconvenient case, this is a safety review) 
5. Then you’ll end up with 11mg/5L of blood. This is, in more familiar units, 0.22 mg per dL
6. Your body already produces 4 g of ethanol/day endogenously, 100x this amount. 
The ethanol is very unlikely to hurt you.



### 

### Will it disrupt the microbiome?

#### In the Mouth: 

Well, the explicit goal of this treatment is to displace the *S. mutans *colonies on your teeth and replace them with a variant that doesn’t secrete lactic acid. So, yes; that’s the point. 
But note, it doesn’t seem to spread anywhere *other* than the teeth. The “killer app” of *S mutans* is that it spins a dextran biofilm to adhere to the tooth surface, which is something it’s uniquely good at among mouth bacteria. 

*Oragenics memo to Takeda Pharmaceuticals. Alternatively, see *__*Colonization of the Human Oral Cavity by a Streptococcus Mutans Mutant Producing Increased Bacteriocin*__*. **
*Might it disrupt anywhere else, though? When Oragenics ran their 6-month pathology studies, the bacteria were only detectable on tooth enamel and nowhere else. Outside of very unusual circumstances, *S mutans* are only really known to colonize the tooth surface and nowhere else. 
Mutacin 1140 is an effective bacteriocin against Gram-positive bacteria. Bacteria *can *develop resistance to it, but not easily—it interferes with a highly-conserved part of peptidoglycan synthesis (as shown in __the 2008 paper__ *Pharmacodynamic activity of the lantibiotic MU1140*). But this is a really small amount of mutacin. 
#### In the Gut: 

This is a really quite tiny amount of mutacin, and __bacteria are waging unending chemical warfare against one another in our mouths already__, and there are already __a ton of bacteriocins__ being produced by various microbial colonies in the mouth.
Could mutacin 1140 affect the gut? It seems unlikely. *Efficacious Analogs of the Lantibiotic Mutacin 1140 against a Systemic Methicillin-Resistant Staphylococcus aureus Infection* found __poor ____pharmacokinetics__—the reason Oragenics *didn’t* commercialize Mutacin 1140 is because it’s really hard to get the bacteria to secrete much of it. 
The way mutacin 1140 works to disrupt bacteria is that its tiny molecular threads oligomerize together and open pores in cell membranes. *This makes mutacin 1140 especially vulnerable to dilution.* Without a critical concentration of the mutacin, it’s ineffective—it only affects organisms present in very close proximity. 

### Is colonization reversible? How difficult is this? 


*Tl;dr This strain is designed to be enduring in the mouth. However, a dental rinse of chlorhexidine may reduce it to undetectable levels, and one of our alpha testers did so.
*To __quote__ __Hillman____,__ “at least two of the three subjects treated by brushing and flossing approximately 1011 cells onto their cleaned tooth surfaces for 3 min remain colonized almost 15 years later”. 
If you are the mother of a child under three years of age, there is a __strong chance__ that you will pass on *S. mutans* to your child. The uterine environment is sterile and the oral microbiome is acquired after birth. For *S. mutans* specifically, it lives in biofilm on teeth, so cannot be acquired until baby teeth emerge from the gums.
This has been said elsewhere, but in case you’re scanning this document: **unless you deliberately try to get rid of it,** **this**** ****strain is**** ****likely**** to stick around for years even after a single brushing**​ (see __Hillman et al., 2000__). That’s largely the point. 


### Will it spread to other people, possibly without their consent? 

*Tl;dr: **Kissing between adults is very unlikely to transfer it. Children under three who are exposed to this strain via sharing food or drinks with them may be colonized. Adults and older children have more stable microbiomes and are less likely to be unintentionally colonized, but prolonged oral or household contact may transfer it to them transiently. (Estimate between a 0%-10% annual transmission rate between a romantic couple who routinely kiss with tongue. The rate is usually near 0%, and it seems like most transmission is coming from either of elevated bacteria loads due to active cavities, or ‘toothstrike”, when teeth click together during kissing. But, be aware of the potential.) *The mutacin-secreting precursor strain was originally found in a grad student’s mouth, so this isn’t some supercolonizing lab-frankenstein prepared to dominate all natural strains. This is already in the wild, and so far hasn’t outcompeted all other mouth fauna. But, in the name of safety, let’s assume the grad student in question was an abstinent monk who never kissed anyone, and do the math anyway. 
Recall that for colonization, one needs to scrub a very high concentration of SMaRT onto their teeth— 1011—and the __usual concentration of ____*S mutans*____ in human saliva is about 10____5__ , a million times less concentrated. 
However, oral microbiome transmission data is ambiguous. For couples living together, sharing silverware, and kissing constantly, __**the transmission of oral microbiota strains could be about as high as 10% per couple per year**__; in this study, one of the couples had their strains become concordant despite initially having distinct strains, and one other couple drifted out of *mutans *symmetry, for unclear reasons. 
### 

### Is this genetically stable? Will it revert to a lactic-acid-secreting strain? And are the changes (mutacin 1140, EDH) likely to spread via horizontal gene transfer to any other microbes? 


#### Genetic stability and horizontal gene transfer

BCS3-L1 actually contains some custom gene knockouts to enhance its stability; it’s more genetically stable than the wild-type *mutans* living in your mouth right now.
*S. mutans*, under certain stresses, __is known to take in and incorporate exogenous DNA__. If the strain did this, and lost the EDH-pathway substitution that causes it to metabolize sugar to ethanol instead of lactic acid, that would render it no different than regular lactic acid secreting *mutans*. However, SMaRT has two deletions in the competence stimulating pathway, *comE,* to disrupt this process. 

#### Can it jump to non-human animals? How would it affect them? 

Wild-type *S. mutans *are present in the microbiome of other mammals; mice and rats were used as test subjects in many of the studies linked above. It seems plausible that our modified *mutans* would be able to colonize animals. 
Even if mice became colonized off of half-eaten human food waste (which is unlikely—it's doubtful that a half-sandwich that had touched one’s teeth would contain a meaningful amount) it still doesn't seem like a major environmental risk. Contrast with, for example, the antibiotics entering the water system from unmetabolized urine and dubious medical waste disposal. 
And again, remember that the first mutacin-secreting strain was originally found in a grad student’s mouth.
