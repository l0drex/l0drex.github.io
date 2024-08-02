---
title: Retro Reboot
type: university
description: Exhibit that decodes punch stripes it in various ways
date: 2024-06-06
color: 'lime'
languages: ["Python"]
---

_Retro Reboot_ is an exhibit for the exhibition _Data Spaces_ in our university.
It allows visitors to create their own punch stripes. The punch stripes are scanned
and interpreted to perform a calculation, to generate an image or to play some music.

![](@assets/projects/retro-reboot.jpg)

The image generation simply puts the holes on to a grid and runs 
[Conways Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) on them. 
The music is created by interpreting the punch stripe as a drum machine and 
playing a sample file whenever a hole is present.
