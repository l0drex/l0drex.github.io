---
title: Slavisti
type: hobby
description: Simple match-stick game with hidden complexity
date: 2024-06-01
color: "#ffbea2"
languages: ["Rust", "gdscript"]
tools: ["Godot"]
small: false
---

During a hike with a group of the university, I learned about a game with match sticks that someone designed.
The rules are simple:
- Create a figure of triangles and squares
- Write down the number of cycles in the figure as a roman number

The game is played with 2 players. Players are allowed to place matches in the number or figure of the opponent.
Once all matches are placed, they are moved. Once cycle count and number match, the player wins.

There was an existing implementation of the game in Visual Basic, but it looked quite outdated.
My goal was to get a better looking interface somehow.
First, I compiled the C++ code base to WASM and built a web interface using vue.js.
This worked, but I didn't like the interaction (you had to scroll through a list of possible moves to play).

I didn't like the code structure and decided to rewrite it.
I always wanted to learn Rust, so I took the opportunity.
Rust provides a very nice way to test things, so I used a test-driven development approach.
This saved me from a lot of headaches, as bugs were caught much earlier and were simpler to track down.

Once the main logic was in place, I took the next opportunity to learn how to use Godot.
I knew Unity already, and learning Godot was a breeze.
