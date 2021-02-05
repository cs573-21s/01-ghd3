Assignment 1 - Hello World: GitHub and d3
===
By Jyalu Wu

GitHub Site
---
https://jwu2018.github.io/Pigasso/index.html


Description
---
For this project, I drew a pig that can change colors. Depending on which button you press, the pig will turn pink, red/yellow/blue, gray, or loop through the colors of the rainbow.

![Pink Pig](images/pink-pig.png)
![RYB Pig](images/ryb-pig.png)


Technical Achievements
---
### Rainbow Loop
When you click the "RBW" button, the pig changes colors on its own! This was done using the `setInterval` and `clearInterval` functions.

### Dynamic Resizing
When you change the size of your window, the pig rescales so that it fits the screen. This was done by using a `viewBox` and telling the svg to redraw itself whenever the window was resized.


Design Achievements
---
### Colors
There are four coloring options to choose from:
- Pink
- Red/yellow/blue
- Gray
- Rainbow
The colors of the text and background also change when the pig changes color, which makes everything more cohesive and pleasant to look at.


Sources
---
1. [Stack Overflow - Proper format for drawing polygon data in D3] (https://stackoverflow.com/questions/13204562/proper-format-for-drawing-polygon-data-in-d3)
2. [Vegibit - Drawing Scalable Vector Graphics With D3 JavaScript] (https://vegibit.com/drawing-scalable-vector-graphics-with-d3-javascript/)
3. [Chartio - How to Resize an SVG When the Window is Resized in d3.js] (https://chartio.com/resources/tutorials/how-to-resize-an-svg-when-the-window-is-resized-in-d3-js/)
4. [CSS-Tricks - How to Scale SVG] (https://css-tricks.com/scale-svg/)
