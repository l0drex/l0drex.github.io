---
title: Auto dark mode
type: hobby
description: Syncs the theme of Jetbrain IDE's with the desktop environment. 
date: 2022-04-14
languages: ["Kotlin"]
sourceCode: "https://github.com/weisJ/auto-dark-mode"
url: "https://plugins.jetbrains.com/plugin/14076-auto-dark-mode"
---

This is not a project that I started, instead I only implemented support for a freedesktop API.
I made a pull request with a new implementation that added support for many Linux desktop environments 
such as KDE and Gnome. It makes a DBus call to get the theme preferences and reports that to the existing plugin structure.
