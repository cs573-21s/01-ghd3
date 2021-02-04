Assignment 1 - Hello World: GitHub and d3  
===
CS 573: Data Visualization
Imogen Cleaver-Stigum
February 2021

Technical and Design Elements
===

The sheep is made of circles (the body and wool, as well as the open eyes), an ellipse (the head), rectangles (the legs), polygons (the hat and hooves), paths (the sleepy eyes).

The grass and sky are made of rectangles and lines.

The texture of the grass is also a design element. Textures can be an essential part of data visuzlizations (as we discussed in class) because they can distinguish between elements. In this picture, the texture of the grass makes it clear that it is grass, as well as adding to the visual interest.

Another design element of this picure is the gradients. The gradients add to the visual inerest of the picture, as well as making it clearer what the elements are. For example, it is appropriate and more realistic for the sky to have a gradient because the real sky has variation in the light. The sky's gradient is a linear gradient from white to light blue. The hat's gradient is a radial gradient from light green to light blue, which makes it more stylish.

The different colors are also a design element because they add to the clarity of the image. In real data visualization, having distinct colors to represent different elements will be important so they are distinguishable. As we discussed in class, too many colors, like the rainbow gradients, can be overwhelming and confusing to the viewer. This is why I chose a simple color scheme with only black, white, green, and blue. This is enough colors to make the picture interesting and pleasant to look at, and to establish the differences between elements like the sky and the ground; but it is not so many colors that the colors detract from the more important parts of the picture. 

There are several technical aspects in this project that go beyond just drawing shapes: the wool rotating around the sheep's body, the grass waving in the wind, the dynamic resizing of the SVG rectangle, and the sheep blinking when clicked. 

The sheep opens and closes its eyes when you click on any part of the sheep or its hat. This is done by removing the previous eyes and drawing the new set of eyes. There is a variable which keeps track of which eyes are the current ones so that it can alternate between the two sets of eyes. In real data visualizations, interactivity can be an essential aspect. One reason for this is that you can show more information overall when you only show the information that the user is currently asking for at a given time. For example, you could show more details or specifications of an element of a visualization when the mouse hovers over it. This is better than simply not having that information, or having all the information cluttering the sreen at once. In this picture, the interactivity allowed me to show the sheep both sleepy and awake rather than having it static and having to choose between the two states, or clutter the page with two sheep. The same principles apply to real data visualization. 

It is also important that the eyes open when you click anywhere on the sheep, rather than anywhere on the canvas, or a particular place on the sheep. This makes it more user friendly because clicking on a particular place on the sheep would be more tedious for the user, and clicking anywhere on the canvas would be counterintuitive when the click only affects the sheep. 

The grass is waving in the wind when the mouse is over the grass. It is updating and re-drawing the grass 5 times every second, which makes the illusion of blowing in the wind. Each time it does this, it also has to move the sheep back on top of the grass to maintain the perspective. It starts waving when the mouse is over the grass, and becomes still again when the mouse leaves the grass. It is important that the grass is only waving when the mouse is on the grass for several reasons: 
(1) As a technical consideration, the grass moving slows down the overall performance because it has to update and re-draw so many elements each second. It would get bogged down if it had to do this continuously while the page was open. 
(2) As a design consideration, movement should be used sparingly. As we discussed in class, movement draws the attention of the viewer very effectively. It could be overwhelming if the grass was moving the whole time, so it gives a visual break when the grass stops flowing. 
(3) The grass responds to the users, so the user has mroe control over what is happening in the picture (and how overwhelming the picture is at any given moment). 

The wool around the sheep is also a technical element. The wool is created by drawing smaller circles around the larger circle that is the body. This is done by looping through the angles around the sheep and drawing wooly circles at each interval rotating around the sheep's center.

When the user changes the window size, the width of the picture also changes width. It can get both larger and smaller. The sheep stays in the same x position as before - with its center at the x position of width/3. This feature is an important technical feature because it can be awkward on web pages to have to scroll left and right if it is not necessary. This is especially true when the text in the HTML part is adjusting ot fit the new window size - if the picture did not resize, it would be awkward looking. It is also important for consistency: because the size of the picture depends on the window width when it renders originally, it makes sense that it should depend on the window resizing later so it remains consistent. 

Another technical element is that the sheep's hat changes both colors of the radial gradient each time it is clicked, alternating between 3 hat styles. The eyes still open and close when the hat is clicked, but no other polygons or shapes change their colors on this mouse event. 




Project Description/Requirements
===

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

