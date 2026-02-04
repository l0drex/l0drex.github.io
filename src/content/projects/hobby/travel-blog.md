---
title: Travel blog
type: hobby
description: Travel blog featuring interactive maps
date: 2024-08-01
languages: [ "Astro", "Vue", "GLSL" ]
url: "https://l0drex.github.io/travel"
sourceCode: "https://github.com/l0drex/travel"
color: "#FFEDD4"
colorDark: "#0B0908"
small: false
image: "@assets/projects/travel-map.png"
---

I am often travelling around the world with my bicycle or on foot.
Lots of memories are created, and I always wanted to share them. Some blog, with a map and some pictures.
In August 2024, I finally started building it.

![Screenshot of the the map, elevation profile and statistics](@assets/projects/travel-map.png)

Since it's just a simple blog, I decided to make use Astro for most of it, plus some Vue components for the map.
This was fairly simple, as I could just load my GPX files into a leaflet layer and be done.
What was more interesting was my idea for a Trackmania-inspired rotating globe, serving as an overview over the places
I visited.

The first idea was to make this interactive. Red dots on the sphere would present a journey, and clicking on them would
open up the blog entry.
This didn't turn out that well, since it's not really accessible, labels are hard, and it didn't look good.

Half a year later I revisited the project and decided to but this in the background of a simpler list.
This worked pretty well! To make it pretty, I wrote a custom shader for ThreeJS.
This shader maps a black and white texture to a foreground color and transparency. Additionally, a directional light
shines on the globe and casts shadows. This black and white image is again mapped to transparency.
The result is a 3D globe with matching colors fading out from and back into transparency.

The rotation is heavily inspired by the green [_"Trackmania - Nations
Forever"_](https://www.youtube.com/watch?v=4_MD9DbssIw) menu screen. It simulates the rotation
of earth around the sun, with a tilted axis.

![Screenshot of the home page with the globe](@assets/projects/travel-home.png)
