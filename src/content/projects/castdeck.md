---
title: CastDeck
kind: Esports broadcast system
summary: An operator panel and OBS browser sources that run an esports broadcast from the draft to the trophy, with live stats read off the game feed.
client: Local esports tournaments
role: Solo developer
year: 2026
order: 4
stack: [JavaScript, PHP, HTML, CSS, JSON, PowerShell, Node.js, Puppeteer, OBS Studio, Scrcpy]
areas: [frontend, backend, design]
screenshots:
  - src: ./images/castdeck/draft.jpg
    alt: Draft overlay with both teams' picks and bans, the ban timer and a large hero artwork behind them
  - src: ./images/castdeck/operator.jpg
    alt: CastDeck operator panel with the ban and pick order, a searchable hero grid and switches for what is on stream
  - src: ./images/castdeck/starting-soon.jpg
    alt: Starting Soon screen with a countdown, the next match-up and a player from each team
---

Small tournaments usually stream with a webcam and a static logo. CastDeck gives them the graphics of a pro broadcast, run by one person on one laptop.

## What it does

- **Draft engine:** ban and pick phases with a timer, admin override and undo, shown live on the draft overlay, with a draft predictor based on past matches.
- **Broadcast graphics:** lower and upper thirds, sponsors, the in-game HUD with player panels, the result frame and a highlights reel.
- **Standby scenes:** Starting Soon, match-ups, bracket, casters, line-ups, MVP, champion, replay, technical pause and ending.
- **Tournament data:** a team and player database, single and double elimination or round-robin brackets, match history and statistics.
- **HUD reader:** reads each player's kills, deaths, assists and gold off the game feed with a character recogniser I wrote, which learns from corrections.
- **Stinger Studio:** designs and renders the OBS transitions in each broadcast look, as transparent video.

## How it works

The operator panel keeps the whole broadcast in one state object. Pages in the same browser get it at once over a `BroadcastChannel`; OBS polls a PHP endpoint that answers `304 Not Modified` when nothing has changed. Writes are locked, validated and accepted only from the same computer, and uploads are checked before they are saved. Frames for the HUD reader come from OBS WebSocket or from the phone over ADB. Stinger Studio renders with Node.js and Puppeteer, and a PowerShell script adds global hotkeys. The bracket logic and PHP endpoints have their own tests.
