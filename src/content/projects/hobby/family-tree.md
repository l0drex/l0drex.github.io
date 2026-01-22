---
title: family tree
type: hobby
description: Draw your own family tree 🌳  in your web browser
date: 2021-11-14
color: '#D1E8D1'
colorDark: '#172017'
languages: ["TypeScript", "Python"]
tools: ["react", "d3js", "webcola", "GedcomX"]
sourceCode: "https://github.com/l0drex/family-tree"
url: "https://l0drex.github.io/family-tree/"
small: false
---

I built this website because I wanted a privacy-focused way of sharing a family tree.
The result is static website that loads a GedcomX file from your disk, parses it and shows you the family tree. 
There is no logic on the server side other than providing the JavaScript, HTML and CSS files.

![](@assets/projects/family-tree.png)

However, the website is currently unable to create and edit the family tree. For this, I have a simple spreadsheet
that is converted to the GedcomX-JSON format through a Python script.

The graph is rendered using [d3](https://d3js.org/) together with [WebCola](https://marvl.infotech.monash.edu/webcola/)
to position the nodes.
