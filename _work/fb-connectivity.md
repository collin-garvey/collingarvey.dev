---
title: 'Facebook Connectivity Conference App'
date: '2020-04-15'
slug: 'fb-connectivity'
mainImage: 'work/fbc-conference/fbc-conference.jpg'
featuredBlurb: 'I created an in-person video exploration experience for the Facebook Connectivity team to use at the Telecom Infra Project Summit in 2019. Check it out!'
liveUrl: 'https://share.getcloudapp.com/9ZuEAlvO'
images:
  - 'work/fbc-conference/fbc-conference.jpg'
  - 'work/fbc-conference/fbc-conference-2.jpg'
tags:
  - React
  - TypeScript
  - XState
  - ThreeJS
  - Electron
type: 'Interactive Touch Application'
---

## Overview

The [Connectivity team at Facebook](https://connectivity.fb.com/) needed an interactive application to showcase
their suite of products, video content, and testimonials at the [Telecom Infra Project Summit](https://telecominfraproject.com/events/tip-summit-2019/). They needed a highly
engaging experience which would capture attention and retain it while users navigated and watched video content.

## Execution

Once I saw the initial designs proposed by my team, I knew immediately which technologies
I wanted to use to build this experience. ThreeJS was an obvious choice for the 3D globe, which would serve as the central attractor for attendants and anchor the experience by giving it depth and a sense of exploration.

This conference was taking place acros the world from our team so we had to pick technology that enhanced predictability and reduced edge-cases and failure points. To enable this, I chose TypeScript (as is usual, nowadays) to reduce the chance javascript bugs sneak in and [XState](https://xstate.js.org/docs/) to leverage state machines for a predictable and well structured linear navigation experience between screens.

XState in particular was extremely useful in preventing unexpected navigation experiences. You never know what a user will do with your app at a conference. XState allowed me to make easy work of features such as a timeout counter that would return the experience to its default state after a period of inactivity. By it's nature, state machines protect against users rapidly tapping a screen in strange places, because it's deterministic and will only transition to defined states in the machine.

The whole experience was to be driven by a large touchscreen display and a simple Lenovo laptop. Because of this, I spent a lot of time with my designers tweaking the rendering of the globe model to ensure we were hitting and mainining 60 frames per second throughout the experience. The app was packaged up in to an Electron app which would load content and video locally, meaning it would work perfectly offline.

## Outcome

Our team received a lot of praise during and after the project once the event concluded. The on-site Facebook team received a lot of positive feedback and the team liked it so much they let us know that they plan to create a permanent installation of the experience in their offices in the Facebook campus. Awesome!
