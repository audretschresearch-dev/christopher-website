---
title: "Jaming with Information Spaces"
created: 2025-03-19T14:41:06.968Z
modified: 2025-12-31T01:36:42.862Z
source: Google Docs
draft: false
---

First, I’ll briefly define what I mean by “information spaces”. Then, I’ll define a new type of generative-AI-enabled activity, which I tentatively dub “jamming”, and explain why existing information spaces are not very well-suited to this activity. Finally, I will give a feature list for a jamming-capable information environment, organized from most important to least important.
# Information Spaces

By “information space” I mean a “place” where you keep and organize information. Information spaces often nest inside each other: your email inbox is an information space, but an individual thread is also an information space. A paper notebook is an information space, as is an individual page in that notebook. When an information space is more like your email inbox or note-taking application (an overarching information space organized as a piece of software), I’ll call it an “information workspace” to be clear. In contrast, when an information space is about a single coherent topic (EG a google doc, email thread, tag) I’ll call it an “information workbench”.

Some information spaces are private to one individual, while others are shared. Sophisticated information spaces will often have fine-grained privacy settings to control who gets to see what. 

A borderline case of an information space is an information source, such as a search engine, a TV channel, etc. I think technically I need to include this as an information space for completeness, but it doesn’t have the central properties I’ll mainly be discussing. I’m mostly interested in information spaces which you keep coming back to, re-reading, adding to, reorganizing, over a long period of time. We can call these “persistent information spaces”. 

A person’s “information environment” constitutes all of the information spaces they use. The current essay comes from a sense that our information environments are very fragmented and patchwork; I find myself forced to use lots of different information spaces. Diversity is not a bad thing in itself, but I’ll get into some detailed negative impacts of this.

More specifically, I want to describe a style of activity which involves handling information in a flow state -- producing, consuming, sifting, organizing information, all seamlessly intertwined -- and explain why existing information spaces do not facilitate this type of activity very well.
# Jamming

“Jamming” isn’t a perfect name (at least for the purpose of getting anyone to take this subject seriously), but, I haven’t come up with a better one yet. The term invokes improvisational, collaborative, creative activity which weaves information consumption and information production together seamlessly.

This activity involves:
Working on a focused, coherent intellectual activity, such as researching a topic you’re interested in, writing an essay, writing a novel, planning a vacation, etc.
Gathering and curating information on the subject at hand -- performing web searches, saving links, saving information from web pages, importing information from notes you’ve kept elsewhere, etc.
Organizing the gathered information, so as to be able to browse it more conveniently in the future, or so that others can easily browse it. Creating lists, sorting by subtopics, tagging, making folders, writing overviews, etc.
Producing new information related to the topic (eg writing notes, making outlines, writing passages of text, etc).
Editing information (revising a draft, fixing AI-generated text that’s not quite what you want, etc).
Using generative AI to aid in all of these tasks.

All of these activities flow into each other and become difficult to cleanly distinguish. For example, when you search for information, you are implicitly organizing it somewhere (if only in your search history). A hyperlinked summary of a set of files serves as a way to organize the files, but can easily include new information. 

These tasks are also highly synergistic, and being able to do them within a single information workbench enables more synergies. Searching for information naturally flows into organizing the information which naturally flows into writing something new. If you’re editing a document in a heavily AI-enabled information space, all of the related context you’ve added to the information-space will influence the suggestions you get, which allows information to find its way to where it is needed more organically, rather than you needing to keep everything in mind. This makes generating even more relevant content even easier, so you get a snowball effect, allowing you to more quickly hone in on whatever you’re trying to do.
(You’re probably imagining someone manically producing a big pile of AI slop and trying to feed it back into itself to refine it, but just getting growing piles of slop out. This is a failure mode of the working process I’m describing. It’s critical to do slop-pruning as well, checking the quality of AI generated stuff, editing it, or even hand-rewriting it.)

Generative AI has gotten good enough that I can happily throw a mountain of disorganized notes at it and ask it to sift through. This is often faster and/or better than me trying to (re-)read the notes myself; I might double-check some of the notes by hand to make sure it didn’t miss something or hallucinate a critical detail, but since it can read all the notes quickly, often it’ll find relevant things that I would have missed. Yes, it “rounds down” my ideas slightly to a more statistically probable form, but it’s usually good enough that I remember what it’s referring to. Plus, it can add useful contributions from its world-knowledge, quickly perform some relatively complex transformations of the text, and provide first-draft elaborations of ideas which might not be usable but at least give me something to correct (which helps me get past writer’s block).

If I can get back into my big pile of notes on a project in approximately constant time rather than approximately linear time, then revisiting and continuing to work on such a project becomes something I can do much more frequently (in small amounts of spare time), and getting much more done. Even if the final output for a project ends up entirely hand-written, the AI-driven intermediary can help me get there faster and with a higher-quality result.

Moreover, if it’s possible to get up to speed on a pile of notes in approximately constant time, then this might facilitate the productivity of collaborators to scale approximately linearly as a function of the number of collaborators, rather than scaling sublinearly due to communication overhead. However, I’m not aware of any existing information workspaces with the feature-set to enable this way of working. There are too many points of friction.
## Inadequacy of Some Existing Options

To begin to explain why existing options are inadequate, I think the best thing to do is to discuss some specific examples. I’ll discuss the inadequacy and annoyances of Perplexity, Claude, and Google Docs.
### Perplexity

I should start with a complaint that will apply to all three of the options I’ll discuss: using recency-sorted lists as the (only!) organization option at the top level. Recency-ordering is a very useful organization scheme if you can only choose one and need to keep it simple, but it gets really inadequate really fast if you’re using an information space heavily. I use Perplexity approximately once a day, so it’s just a big pile. Fortunately, there’s a way to search through it, but it would be nice to have the option to organize things more intentionally. This flaw is surprisingly common and quite critical for me. Note-taking tools such as Notion, Logseq, and Roam do much better here.

My main complaint with Perplexity lies not in the global organization of all the information I keep there, but in the organization of individual conversations. Like ChatGPT, Claude, Poe, and many other chatbot-style AI services, the primary information granularity in Perplexity is the chat: a back-and-forth between you and the AI. The default behavior is to go to Perplexity and start a new chat by asking a question (again, like so many other AI services). 

Most of the time, I get one answer, and that’s it, I’m finished with that chat. I might come back to look at it once in the next 48 hours or not at all. Such chats don’t become a persistent information space. However, sometimes, the chat becomes a persistent information space for the topic. I return there to ask follow-up questions because I know the AI will already have some of the important context, and perhaps more importantly, so that all the information will be in one place so that I can find it again relatively easily.

The problem is, such a chat will quickly get long and unwieldy. I’ll have to scroll a lot to find what I need (or else ask the AI to pick it out, which exacerbates the problem by extending the chat even further). 

Perplexity does have a Spaces feature, which is similar to Claude Projects, allowing you to bundle together several chats on one topic as well as references which are relevant for all such chats. However, Spaces still don’t provide enough ability for me to organize my information into an easily readable reference that’s pleasant to return to later. There’s no way to turn my notes into a curated document (like a nice google doc) that I would be happy to use later or share with others.

(There’s a Page feature, which is oriented towards making nicely organized things which are pleasant to read, but you can’t hand-edit Pages -- it’s just like an AI-generated website -- and it’s also pretty detached from the Spaces functionality, so there’s no easy way to turn information you’ve already dug up on a topic into a Page.)
### Claude

Like Perplexity, Claude uses recency-based organization. Worse, it doesn’t even work right. The recency ordering of chats works fine as far as I can tell, but when I look at Projects, it isn’t right. Maybe they’re being organized by creation date instead of recency of the most recent activity, but it doesn’t look like they’re supposed to be -- they are labeled with “Updated X days ago” (or X moths ago etc), and appear to be sorted by that metric. The problem is that the labels are wrong; when I click on projects I can see that the most recent chat activity and the most recent update to the Project Knowledge are both more recent than the “Updated” label on the project. It would obviously be better to sort the Projects by one of those metrics.

My main complaint with Claude, however, is that you can’t edit the AI responses. This was true of Perplexity as well, of course, and is part of why it doesn’t make good persistent information spaces. However, Claude has a feature called “Artifacts” where Claude will organize information into special documents displayed to one side of the chat. It really feels like users should be able to edit those documents. Instead, the only option users have is to ask the AI to revise the document. This AI-first approach is demeaning in its philosophy, and crippling in its application. Yes, it’s great that you can often make low-effort decent-quality edits by saying what you want instead of doing it yourself. The problem is that many edits are faster, easier, less error-prone, and/or higher-quality when done manually.

Claude has a feature to make Artifact edits easier where you can highlight what you want to edit in an Artifact, hit “improve”, and type in what you want to change. However, Claude often misunderstands what you want when using this feature. It seems to me like Anthropic just gives Claude the text highlighted, with no context (not even a special prompt) to let Claude know what it’s supposed to make of that text; when I highlight very small parts such as a single word, Claude can’t easily guess that I’m highlighting something I want edited, so I have to remember to spell that out in my edit prompt, which defeats the user-convenience of the highlighting-based interface.

Anyway, even if that feature worked exactly as intended, think about the sheer inconvenience and lack of flow induced by trying to use this for simple edits. In a word processor, I can just highlight a word and then type what I want. In Claude, I would at best highlight the word, then click “improve”, then type what I want, then hit enter, then wait for the edited version to generate. Imagine doing this 20 times in a row for a few simple edits to a document!

In practice, this means that I need to copy/paste content from Claude out to some other information space in order to work on it, and then copy/paste back into Claude later. This is bad for several reasons:
I often encounter formatting annoyances when copy-pasting between information workspaces. 
Switching between information workspaces frequently breaks flow, like going to the kitchen and forgetting what you went there for. It’s easy to get distracted by something in the other information space.
Most importantly, copy/pasting and switching between information workspaces wouldn’t be so bad, except that it forces you to mentally keep track of which information workspace contains the most up-to-date or “canonical” version of the information. If I’m working on a project in Claude then I also need to create an information workbench for it in a more editing-oriented information workspace, such as Logseq or Notion. I need to manually sync the Claude Project with the other information workbench, which gives me another thing to think about and manage. 
(Relatedly, copy/pasting between information workspaces has a tendency to break/lose versioning information and other helpful metadata around a piece of information.)

Other complaints about Claude:
Project Knowledge is obviously intended to be write-only, to be read by AI rather than humans. I can create a well-formatted Artifact which is pleasant to read, but if I decide that it’s important to keep as a canonical part of the Claude project (to serve as background knowledge for every chat in the project), then when I look at it I just see plaintext markup with terrible formatting (not even word-wrapped!). This undermines an important function of persistent information-spaces: human readability!
If my Project Knowledge gets full, I have to delete things. It would be much nicer to have a checkbox to allow items to be temporarily excluded. This would make it easy to quickly try a few combinations of files to see what I have to leave out to go below the max. Being able to quickly check and uncheck files would also make it easy to experiment with different subsets of project knowledge to find out what’s most useful for what you’re trying to do. This problem is another factor which forces me to use an external information workbench for the task, rather than letting the Claude project be my canonical data-store on the topic.
You can’t move chats into Projects when you realize that you’ll need a more organizable persistent information space for the topic. Perplexity does this better, allowing you to move chats around as if they’re files and projects are folders -- Perplexity understands that chats are valuable persistent information spaces better than Anthropic does, which is ironic considering that probably far more Perplexity chats are one-time throwaway searches.
You can’t rename Projects once you’ve created them.
### Google Docs

My main complaint with Google Docs is that I find everything becomes extremely disorganized. When I open up Google Docs, I just get a recency feed of all my documents, a new document button, and a set of templates for new documents. There’s no way to organize my stuff into folders, or tag my stuff based on topics. This is basic stuff! As I’ve already stated, recency is a great first heuristic, but it gets extremely unwieldy over time if you’re using a workspace regularly for many different projects. I’ve got a huge amount of stuff in Google Docs, but I avoid it now when I can, because I’ve realized that all that stuff just gets lost in the pile over time.

Some people have heavily interlinked Google Docs; you can create yet another doc to serve as an organizing hub, rather than a file-folder. For me, this option involves enough friction that I don’t end up doing it. Rather than simply organizing things into a file hierarchy visually by dragging things around, creating a hub document involves opening the doc, creating a link, thinking about sharing permissions. (OK, I see there’s actually an easier way to do it, but I didn’t know that until just now when I checked.)

If you chat with Gemini, it will automatically try to find other google docs in your pile which might be relevant to what you’re currently working on, which might work well for some people. However, for me, this creates an ephemeral confluence, not a persistent information space where I can organize my information in a usable way.

Other points of friction with Google Docs, of varying importance:
No ability to switch between AI models -- I don’t think Gemini is very good, so I’m mostly not going to use the built-in AI tools in Google Docs. I would probably make more use of them if I could switch the model to one I like better.
AI conversations in the sidebar don’t seem to be persistent; maybe I’m missing something, but it seems like they just disappear forever if you leave and come back. This disrespects and discounts the value of the information-processing going on there.
No web search in Gemini, unlike Claude, Perplexity or ChatGPT. This isn’t terribly important for me, really, but it is an inconvenience.

However, it’s worth explicitly noting that despite its other problems, I end up making Google Docs about 95% of the time when I want to share information with a few other people or collaborate on something (this document being a case in point). I primarily attribute this to the excellent sharing, commenting, group editing, and suggestion features of Google Docs. This implies that those features are critical for multiplayer jamming.

Ok, so now that we’ve seen some examples of what I’m frustrated by, how do I propose to solve the problems?
# Jamming-Capable Information Spaces

## Document Editing

A good information-space obviously needs an excellent text editor. I won’t try to list features a good text-editor should have; that’s a big topic in itself. Adequate text editors include Google Docs and Notion. I’m particularly fond of the LessWrong editor.

AI outputs should be editable, to enable full collaboration with the AI, rather than nudging users into toxic AI-first working patterns where humans can only write prompts and only AI-generated outputs are “final outputs”.

Claude’s Artifacts would be a good way to relate chat-style information spaces to document-style information spaces if humans could also choose to create and edit documents. Possibly, chats should have documents associated with them which can open to the side as you’re chatting (like Claude Artifacts), but documents should also have chats associated with them which can open to the side (more like Gemini in Docs). 
## Document Organization

In order to be long-term viable, an information workspace needs to have *most or all* of these information-organizing tools:
A recency-sorted list of everything. Much as I hate this being the *only* option, it *is* a very strong default; it should be one of the first things you see when you open up an information workspace, since you’ll very often want to click on one of the top three items of such a list, and failing that, scroll down the list just a little.
File/folder type organization. I suggest that folders act like Claude “Projects” or Perplexity “Spaces” -- if you start a new chat in a folder, then it’ll automatically have the other (non-chat) files in the folder loaded into its context. 
There should be easy ways to see and control exactly what’s loaded into context when you’re in a chat, so that you can quickly check/uncheck things to manage memory. 
It also seems good to have a RAG option, for when your project grows too large to fit into context and you don’t want to manually manage which items get selected in a specific case. This can also enable a chat to intelligently pull in context from the whole information workspace, rather than only the current project, if the user so desires.
Folders can also be nested, so that projects can have sub-projects. The context management interface should facilitate easy management of what/whether you pull from sub- and super- projects. Sub-projects offer a good way to manage information in a more fine-grained way, adding extra context which further refines an existing project in some experimental direction, but without contaminating the super-project with the questionable direction.
Chats and documents should be easy to move around in this organizational structure, like a file system or like Perplexity, and unlike Claude.
Tagging for non-hierarchical but still topic-based organization. 
In addition to automatically pulling files in from whatever folder you’re in, there could be an option to automatically pull in tags (and links) to get more useful context. This could even be done recursively (with a bounded depth that’s clearly stated and editable for the user, and a bound on the total quantity of data to pull in).
Links to documents, chats, folders, etc for easy sharing and to enable the use of hypertext documents to further organize everything with clear explanations rather than merely a hierarchical/tagged structure.
Backlinks.
Dumb and smart search: the information space should of course be keyword-searchable, as well as LLM-powered smart-search-able.
A date-organized “journal” (such as what many note-taking systems such as Roam and Logseq have), so that if you write something new, you’re by default filing it under the day you’re writing on. I don’t think this is critical, but I do think some people find it to be a critical feature of an information workspace, so I thought I’d mention it.
## LLM Features

The information workspace should also have “chats” with the sorts of interface elements which have become basic in the post-chatGPT world. I’m mostly not trying to reinvent the wheel, here; I’m just proposing a collection of existing features which seem important to bring together in one space.

Some specific comments:
Chats with all the typical chat features.
The ability to switch between LLM modes/features, such as turning reasoning on/off (any model can be turned into a reasoning model with the right prompt, regardless of whether they’ve been trained for it), turning web access on/off, etc.
The ability to switch between a wide variety of LLMs seems important. I’d be happy to stick with Claude, myself, but forcing the user to use one specific LLM is against the spirit of the thing, since that’s the kind of limitation which could deter me from using an information workspace.
Ideally, all of these settings should be changeable right in the model-picker control right near the “go” button (reply/send/whatever), and should be something you can switch mid-conversation with no problem. (I realize there are probably significant barriers to getting the second part to work, since LLMs might have trouble with the correct output format switching mid-conversation & get stuck on the old output format -- EG still trying to make web searches when it is turned off.)
## Collaboration & Sharing

The ability to create multiple share links for a chat, document, or folder with different permissions (see, edit, comment, and perhaps suggest) rather than just managing the permissions for one link. 
Also, possibly, the ability to manage permissions based on accounts (ie, add coauthors etc by account name or email).
Good commenting functionality which integrates well with everything else. Comments should serve as yet more grist for the mill (IE, they count as documents which can be in context for the LLM; probably they should also be linkable, taggable, and generally organizable like other sorts of information).
Good support for multiple people participating live.
Possibly, a good private-messaging feature which integrates well with everything else (IE you can easily add messages/conversations into a folder, although the other person should see how you’ve shared things).
A good notification system so that you can keep up-to-date with what’s going on in the shared information space.
## Searching & Web-Access LLMs

Searching & web access are quite important for jamming on the “input” side, but I’ve ranked features related to this somewhat late in the importance-ordered list because the input-focused nature of these information spaces reduces the cost of switching information spaces for this purpose. I’m OK with being forced to copy/paste out of Perplexity or out of resources I find through a Google search, because those “information spaces” are so impoverished to begin with that I don’t take them too seriously as a space for that information to live long-term.

That being said, if Perplexity were a fully-featured jamming-capable information space, my search history would be a lot of grist for the mill on topics that interest me. Having all of those things in one place would facilitate more spontaneous creation. 

Web access would also allow LLMs to follow links in my notes in order to pull in extra information, much like I can when I’m reviewing my own notes. This would be critical in some cases: if notes include a lot of important links, then gathering information for a project would involve manually following many of those links and copy-pasting the result. In other cases, it is a strong convenience: with web-access Claude, I can just rely on Claude to decide when it needs to pull info in from elsewhere. It doesn’t do it as well as I would do it, but it’s quick and easy & sometimes that’s more important.

Still, sometimes you don’t want web access. The AI can get distracted or anchored by extraneous information it pulls in. That’s why it should be an easy thing to turn off as well (IE, in the model picker right there next to the compose box, not buried in your account settings).
## Version History & Attribution

Obviously, a good versioning system is a nice feature for an editing environment to have. It’s occasionally critical to be able to go back and look at previous versions, compare changes by calculating diffs, restore previous versions, etc. This is especially helpful in a group-editing situation. It would be similarly helpful for collaboratively editing with AI.

In addition, it would be helpful to have an attribution system that helps track what the AI has done vs what you’ve done vs what other people have done, tracks what source documents were used to generate something, etc. The prompt used to generate something is part of the history of that thing. 
## AI Editing Tools

Claude’s “Improve” feature would be a convenient way to make specific sorts of edits if it worked well (IE if it only edited the highlighted text, rather than regenerating the whole document (which is slower and more mistake-prone), and if Claude reliable understood what was going on when the feature is invoked). However, I think context-menu-based edits like that can be done a lot better.

We’re all used to context menus for spelling and grammar suggestions in word processors. AI could quickly generate a list of possible edits of a highlighted passage of text. Of course, when those are inadequate, a box to explain what you want is also a good idea.

I’m sure there are many AI writing tools out there which have other good ideas. Sudowrite comes to mind, as well as Writefull, although I haven’t personally gotten much use out of those tools yet.

I put these features lower down in priority because they don’t seem critical. On the other hand, such features do seem very natural, and in a way central, to the sort of software I’m describing -- central because they focus on the core question of how to facilitate smooth human-AI collaboration.
## Multimedia

It’s not a core critical feature, but, it will be critical for specific users and applications of the tool: integration of multimedia AI and editing such as image generation, sound generation (such as the podcast-like AI summaries NotebookLM has become famous for).
