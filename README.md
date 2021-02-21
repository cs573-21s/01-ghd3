Assignment 1

Design achievements:
The project generates graphics primitives (circle, rectangle, polygon and ellipse) at different locations on the screen with different colors. Each of them is reduced in size using transition function. 
These four shapes appear and decrease in size. Before transition circle, rectangle, polygon and ellipse are in blue, yellow, green and red respectively and after transition they are in red, green, yellow and blue respectively. 
An overview of how the project works

Before transition
 ![image](https://user-images.githubusercontent.com/54874663/108635467-86ee4c80-744d-11eb-9114-295a2d647fc2.png)
After transition
 ![image](https://user-images.githubusercontent.com/54874663/108635503-af764680-744d-11eb-96eb-3f46c1362c2c.png)

Technical achievements:
The code generates graphics using D2 library. Following are some of the methods are used in this project.
d3.transition([name]):
Returns a new transition on the root element, document.documentElement, with the specified name. If a name is not specified, null is used. The new transition is only exclusive with other transitions of the same name. The name may also be a transition instance.

transition.delay([value]):
For each selected element, sets the transition delay to the specified value in milliseconds. The value may be specified either as a constant or a function. If a function, it is immediately evaluated for each selected element, in order, being passed the current datum (d), the current index (i), and the current group (nodes), with this as the current DOM element. The function’s return value is then used to set each element’s transition delay. If a delay is not specified, it defaults to zero.
transition.duration([value]):
For each selected element, sets the transition duration to the specified value in milliseconds. The value may be specified either as a constant or a function. If a function, it is immediately evaluated for each selected element, in order, being passed the current datum (d), the current index (i), and the current group (nodes), with this as the current DOM element. The function’s return value is then used to set each element’s transition duration. If a duration is not specified, it defaults to 250ms.
If a value is not specified, returns the current value of the duration for the first (non-null) element in the transition. This is generally useful only if we know that the transition contains exactly one element.
 svg.append("rect"):
It appends a rectangle element
svg.attr():
.attr() is used to change an element's attributes. Attributes that are used to initially define an element can be passed through .attr() This lets us modify existing elements and set new attribute values. Attributes such as an SVG element's size or position can be changed with .attr()
.attr() requires it be given two values: The attribute to be changed, and the new value for the specified attribute. In order to use .attr() is must called on a selection.
Source:
https://www.dashingd3js.com/d3-tutorial/adding-an-svg-element-using-d3-js
