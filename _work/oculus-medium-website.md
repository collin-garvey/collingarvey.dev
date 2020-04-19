---
title: 'Oculus Medium Website'
date: '2020-04-15'
mainImage: 'work/oculus-medium/oc-medium-landing.jpg'
featuredBlurb: 'I helped Oculus Medium modernize their website\'s front-end and added some cool new features to help visualize VR sculptures on the web.'
liveURL: 'https://oculus.com/medium'
images:
  - 'work/oculus-medium/oc-medium-landing.jpg'
  - 'work/oculus-medium/oc-medium-landing.jpg'
  - 'work/oculus-medium/oc-medium-landing.jpg'
  - 'work/oculus-medium/oc-medium-landing.jpg'
tags:
  - React
  - Hack
  - GraphQL
  - XHP
type: 'Website'
---

## Overview

Oculus Medium is a VR sculpting application for the Oculus Rift VR system. I worked with their team of graphics programmers, server engineers, quality assurance specialists, and producers to modernize thier web presence.

## Execution

Oculus Medium's website lives on Facebook's web infrastrucutre, so this means there is generally more effort required than normal to get things into production. Safety and scalability are always big concerns, so it's worth the extra time. The FB stack mandates the use of Hack, which is a statically type-checked superset of PHP. There was also, naturally, a lot of React involved with their UI work.

This was a longer term engagement as I was serving as an embedded member of their engineering team over the course of close to two years. Along the way, I noticed that at the time, their site didn't have any way to display user-generated sculptures besides using rendered images. Being a progressively-minded person, I thought it would create a lot of value for their user to have sulptures shown in 3D. They were already generating .obj files so it wasn't a big leap to get those exposed to the web. After talking it over with some of the fantisitc members of the Medium team, I wrote the spec and it was taken to the powers that be. It got approved and I built a 3D model viewer using ThreeJS for their users to enjoy!

As it turns out, while we were building the model viewer for Medium, Facebook engineers were working on 3D posts the Facebook timeline we caught wind of each other's efforts and the server engineers got to work on doing the necessary plumbing for Oculus Medium users to share 3D posts directly to their Facebook timelines. Pretty cool stuff!

## Outcome

I greatly enjoyed my time working with the Oculus Medium team, and I think the feeling was mutual as they added me to the credits in one of their major releases! This was really great experience working with a team that was on the bleeding-edge of VR technology trying to pave the way for a whole new type of experience. Eventually the Oculus Medium product was acquired by Adobe and much of the internally-facing infrastrucute I assume is being transitioned. Kind of a bummer, but that's tech sometimes! I'm excited to see what it turns into under Adobe's ownership.
