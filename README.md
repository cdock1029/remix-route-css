- load index route
- open dev tools. change Network speed to "Slow 3G"
- click link to "About"
- observe page renders without about.css loaded at first, then re-paints when css has loaded.

It might take a few navigations back and forth to see the glitch

It can also be seen sometimes without slowdown applied.. a falsh of unstyled content right before the css has been injected.
