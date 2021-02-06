# Assignment 1 - Hello World: GitHub and d3 - Matthew St. Louis

The following link is my submission: [mastlouis.github.io/01-ghd3](https://mastlouis.github.io/01-ghd3)

## Description

## Resources Used
I copied and adapted code from the following sources to complete this assignment.

- [Glitch - Hello Webpage](https://glitch.com/~hello-webpage): HTML Head tags
- [Glitch - Hello Express](https://glitch.com/edit/#!/hello-express?path=server.js:35:0): Simple Express server
- [toptal.com](https://www.toptal.com/developers/gitignore/api/macos,windows,node,vscode,eclipse,webstorm,linux): .gitignore
- [__Kaggle - Wind Power Generation Data__](https://www.kaggle.com/jorgesandoval/wind-power-generation?select=TransnetBW.csv): This is the source of the wind data that I display on the graph.
- [Observable - Learn D3 Data](https://observablehq.com/@d3/learn-d3-data?collection=@d3/learn-d3): I used this to learn how to parse dates in D3 so that the wind data could have a meaningful X coordinate.
- [GitHub - D3 Time Format](https://github.com/d3/d3-time-format): I used this as a reference for the different parsing characters for datetimes.
- [__Observable - Line Chart__](https://observablehq.com/@d3/line-chart): This example of a line chart is where most of my visualization code comes from. It's the core of what I used, and everything else is added on top of it.
- [w3 - Slider](https://www.w3schools.com/howto/howto_js_rangeslider.asp): Used to make a slider
- [D3 Graph Gallery Scatterplot](https://www.d3-graph-gallery.com/graph/scatter_basic.html): Used as an example to get circle working
- [Geeks for Geeks - D3 JS Area Method](https://www.geeksforgeeks.org/d3-js-area-method/): Used as an example to get area working
- [Stack Overflow - Modifying SVG Path Opacity](https://stackoverflow.com/questions/15790948/modifying-svg-path-opacity-and-its-marker): Used as an example to get different opacities to work
- [D3.js Version 5 Scatterplots with Shapes](https://chewett.co.uk/blog/1483/d3-js-version-5-scatterplot-with-shapes/): Used to get symbols to work
- [D3 in Depth - Shapes](https://www.d3indepth.com/shapes/): Used as a reference for different symbol types

# Prompt
This is a starting project to make sure you can write and host a webpage that generates graphics using d3. 

The primary goal is to be able to generate graphics primitives (circles, rectangles, lines, polygons) at different locations on the screen with different colors. 

The secondary goal is to introduce you to coding on GitHub, including creating a gh-pages branch to host your visualizations.

You may write everything from scratch, or start with demo programs from books or the web. 
If you do start with code that you found, you **must identify** the source of the code in your README and, most importantly, make non-trivial changes to the code to make it your own so you really learn what you're doing. 

For example, you could download one of the d3.js examples, read it through so you understand what it's doing, and then change the appearance of the graphical output to use different color schemes, different primitive shapes, different layouts of the primitives, and so on.

Resources
---

If you need a JavaScript/HTML/CSS refresher, see [JavaScript Codeacademy](https://www.codecademy.com/en/tracks/javascript) or find one of your choosing on the web.

If you need a Git/GitHub refreseher, some possible resources include [Getting Started with GitHub](https://help.github.com/categories/bootcamp/), the [GitHub Guides](https://guides.github.com/) (especially the ones on Hello World, and Understanding the GitHub Flow, and Forking Projects), and [CodeSchool's Try Git Course](https://www.codeschool.com/courses/try-git).

Requirements
---

1. Your project should contain at least four kinds of graphics primitives (circles, rectangles, lines, polygons) in different colors. 
2. Your document should identify the source of the code if you start with code that you found. 
3. Your code should be forked from the GitHub repo and linked using GitHub pages. See the "GitHub Details" section below for detailed instructions on how to do this.

GitHub Details
---

- Fork the GitHub Repository for Assignment 1. You now have a copy associated with your username.
- Make changes to index.html to fulfill the project requirements. 
- Make sure your "main" branch matches your "gh-pages" branch. See the GitHub Guides referenced above if you need help.
- Edit the README.md with a link to your gh-pages site "http://YourUsernameGoesHere.github.io/01-ghd3/index.html".

Submission Details
---
- To submit, make a [Pull Request](https://help.github.com/articles/using-pull-requests/) on the original repository.
- Note: name your pull request using the following scheme: 
```
a1-your Gh username-your first name-your lastname

```

Vis Details
---

For this project you should use d3.js. 
You can learn from examples on the [d3.js](http://d3js.org) site or start from scratch.

See the [Using d3js](https://github.com/mbostock/d3/wiki#using) documentation for how to run your own local server.

Creative solutions are welcome! In the past I've seen recreations of paintings, interactives, and more.

Go beyond the minimum requirements of this project.
Experiment with other aspects of the [d3 API](https://github.com/mbostock/d3/wiki/API-Reference) and [d3 Tutorials](https://github.com/mbostock/d3/wiki/Tutorials). 
Try making the elements interactive, for example, or animate them.

Grading
---

Grades are on a 120 point scale. 
96 points will be graded for functionality: the program does what the assignment requests with an informative README. 

We will use Google Chrome to view submissions. 
Be sure to test your code there.

Below are some, but not necessarily all, of the key points we will consider during grading:

- Circles and Rectangles  
- Lines  
- Polygons  
- Different colors  
- README Quality
    - A description of what you have created. 1-2 screenshots are recommended for the README.  
    - A working link to the hosted files (usually the gh-pages 'live' url)  
    - Section for Technical and Design Achievements

Technical Achievement Desription -- 12  
Design Achievement Description -- 12

Remember, it is up to *you* to define what constitutes a technical and design achievements.
Be ambitious as these are designed to allow you to shape your learning.
These are the only way to move from B to A territory.

