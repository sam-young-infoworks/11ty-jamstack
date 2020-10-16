---
pagination:
  data: games
  alias: game
  size: 1
layout: layout.liquid
permalink: '/games/{{ game.gameId | slug }}/'
title: NBA Games
---

### {{ game.visitingTeam.triCode }} @ {{ game.homeTeam.triCode }}

<!-- ![{{game.name}}]({{game.image}}) -->