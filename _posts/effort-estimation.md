---
title: 'Effort Estimation'
date: '2020-03-30'
---

Let's talk about an issue that I consider to be pretty prevalent in our industry—estimation of development effort.

I've been in the web development industry for over ten years now and a decent chunk of that time has been spent in agency-type companies where the types of projects and clients vary; sometimes wildly. The upside to companies like these are that you tend to get experience across a broad set of technologies and tools. With that, however, comes the inevitable period of work estimation; and when you're dealing with many different types of technologies it often adds some extra uncertainty around your estimates.

I'm going to talk about my mental model for effort estimation which addresses the most common issues developers have when estimating work, which in my experience are:

- I've never done X before, how can I estimate it?
- It's problem solving, I can't tell you how long it's going to take.
- I'm scared to give a high number because I'll look slow and bad.

These issues are solved by using following tactics:

- _Actually_ spend time with your estimate and do research
- Identify risks and record your assumptions
- Use historical data or use the _shrink-wrap_ method (more on this later)

### "I've never done X before, how can I estimate it?"

Of the common issues, this is the hardest one to solve because it requires real effort. The solution is to _spend time with the estimate_ and _do research_. The more time you spend, the better your results will be.

If you think about any other problem you've solved as a developer, you're probably familiar with the anxiety that's felt before truly diving in. More often than not, this anxiety disappears once you've outlined an approach (at least in your head) and better understand the effort involved to solve the problem, right? That's when things get fun and this is the moment you should seek when estimating work.

Following the sage advice of G.I. Joe, "knowing is half the battle". So tell whoever is waiting on the estimate that you need a few hours to do research, then _actually do it_. Go read documentation, search Stack Overflow, search YouTube, ask colleagues to have a whiteboard session. All these things will give you the ammo to form an estimate.

### "It's problem solving, I can't tell you how long it's going to take."

When you say this to your team, you erode their trust in your ability. It's dismissive language that developers need to avoid. A more helpful response is, "I need some time to think about how to approach this problem, let me get back to you".

With any chaotic system, there's usually a way to draw a square around it and say, "inside this box, things get weird". This is the fundamental thought behind what I call the _shrink-wrap_ method of estimation.

With real life shrink-wrap you loosely wrap an object in plastic and apply heat to form the plastic around the object. Similarly, with estimation you can take these steps:

- Break the issue down and identify the parts that are _actually_ unknown.
  - There's likely just a portion of the work that you truly can't estimate immediately. Don't throw the baby out with the bath water.
- Start with silly numbers for the unknown parts.
- Think through the unknowns, apply reason and reduce the silly numbers.
- When the numbers begin to get not-silly, stop.

The dialog in your head should go something like this: "Will this take me a year? No. Six months? No. One month? Nah. Two weeks? Maybe.." STOP! Put a pin in that estimate and move on. If you think about it more later on and are able to refine, great. The point isn't to solve all the problems up front, it's just to draw a box around the chaos. Now, instead of giving your team zero information, you've given them something to work with and plan for.

### "I'm scared to give a high number because I'll look slow and bad."

No developer I've worked with has ever said these words to me. However, some have communicated this message by presenting estimates in such a confident and casual manner that _I know_ they haven't genuinely thought through the issue. In my experience developers are very over-confident in their initial estimates—they're always low. As a professional, it's critical that you spend time thinking through _risks_ and _assumptions_ even if you've done the task a hundred times.

_Risks_: Anything that concerns you or things you've identified as potentially chaotic.

- Examples:
  - Client has asked to use a bleeding-edge technology which may have bugs
  - Client has not provided API documentation for endpoints we need to integrate with
  - External party is handling design, quality may be a concern

_Assumptions_: The context in which you're estimating.

- Examples:
  - Assuming we'll use NextJS version x.x.x
  - A style guide or component design reference will be provided by design team
  - Project will be hosted on AWS

Risks and assumptions are tools you can use to protect yourself and feel more comfortable about your numbers. It also shows that quality time has been put into your estimates, which builds trust with your team.

### Other Tips

There's a lot to talk about on this subject, but I'll leave you with a few other things that help the estimation process:

- Always put estimates in a Google Sheet or Airtable document. This allows you to deliver your numbers alongside your risks and assumptions. You can also start to build a historical reference for yourself and your team. This can be a huge help and time-saver moving forward.
- Always use _uninterrupted dev hours_ as your base unit for tasks. You can roll this up into points or t-shirt sizes later if needed. Don't use days or weeks because you don't have 8 uninterrupted dev hours in a day or 40 in a week. You likely have way less than that and it's impossible to estimate/predict interruptions. You don't want to tie yourself to specific calendar dates, when possible.
- Don't buffer your estimates. Leave that to the manager requesting the estimate, they're likely already going to do it. You can however, pass along a confidence sentiment like "I feel good about these" or "there are lots of risks, maybe buffer a little more than normal". It's critical though that you have _your_ numbers unbuffered, so you can have a more pure historical reference later.

✌️
