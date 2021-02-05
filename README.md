# [Simple Element Editor](https://cs573.ashwork.net/01-ghd3/)

## Abstract

This is an editor which allows the user to draw, update, and remove elements on or from the screen. It comes preloaded with a simple house built using predefined elements when the window first loads in. The svg elements scale to the current size of the screen to show off the dynamism of element structure when stored in raw form.

## Technical

This webpage is the first assignment for CS 573: Data Visualization. The requirements were to draw simple svg elements onto the screen. These could include circles, ellipses, and other objects. Due to a lack of front-end design skill, an editor is used to allow users to design their own information.

### Objects

Classes are built upon inheritance from `IndexedElement`, a class that holds an index of the element's current location within a list. This is favored above `Array#indexOf` as that will return the first index a given element is found in the array which cannot be necessarily assumed with an editor. From there, it is expanded upon with `Colorable` to all the user to specify a stroke and fill for each drawn element. Finally, the exported shapes are constructed: `Circle`, `Ellipse`, `Rectangle`, `Polyline`, and `Polygon`. Polyline is favored over line since it is an easy way to chain multiple points together using a single element.

### Data Verification

Each entry passed into the editor is verified using a regex function to verify its validity. This must be used at a bare minimum to verify the data is being written in the specified format. Each `input` has a placeholder tag which specifies the valid range and format accepted. Each value is then checked and then parsed as a float except for one specific case.

### Indexed Information

Data is broken up into five arrays, each holding their own element data. Every element holds an index which can be used to uniquely identify it when querying directly from html. The arrays are updated in a semi-functional programming standard. Elements are created and removed as intended; however, updated elements are removed and appended to the end of the list.

This supports a scoped editor used to specify elements to create by their designated geometry properties. Any element can be created, updated, or removed by the user.

### Resize

All elements are mapped to a coordinate range of [0, 500] on the x-axis and [0, 500] on the y-axis. The elements drawn to screen are transformed based on the corresponding space available not including that taken up by the editor. For example, if the available svg size is 1920x1080, then the x-axis would map to [0, 1920] and [0, 1080] for the y-axis. The page can then be resized as wanted to which all the elements will be redrawn to the screen to accompany the increased size.

## Design

### Geometry Properties

Each element is created by their designated geometry properties except for polygons. Polygons are created using a central x and y, radius, number of sides, and initial angle offset. This allows for regular polyhedra to be created much more easily with better readability.

### Selected Element

The selected element will always update the editor to the specified type with the element information. The element will also be fully opaque to signal that it is the one selected. Furthermore, the type editor will be hidden as updating elements should not change the type; otherwise, arbitrary data might emerge. An element can be deselected by clicking off the element within the svg or by selecting the 'Back' button within the editor. The ability to create a new element or remove all elements is hidden while an element is selected as they have no standing on what a selected element should do.

### Cleanup

To prevent the user from having to remove editor data when written, the editor is cleared every time create, update, or remove is called for the corresponding type.

### Color

Each element can be specified with a stroke and fill to determine how the element should look on screen.

### Invalidity

Any element that does not match the regex will notify the user with an 'Invalid' message underneath the specified parameter.

## Limitations and Further Work

D3 might be a powerful API for arbitrary data points; however, its usability in this case is quite limited for a reason. There are also some shortcomings for this project itself that will be addressed here.

### Data Ordering

Data is not technically ordered within d3. Therefore, using a select to match all possible elements will force all elements to be drawn on top of each other. This means that a list of certain element type will draw first, then the next, and the next. This prevents what's known as stack ordering: elements drawn on screen in order of creation. You also cannot force an element to update without it having been drawn on top of all the rest.

**Future Solution**: Force each class object to hold a creator which is called to draw each element on the screen reducing the amount of lists to one and allowing elements to be drawn in a consistent order. This would also give way for future elements to have their drawn order manipulated. Note that every element above the current element would need to be redrawn.

### Client-Side Storage

User element data is not cached to allow a user to pick up where they left off once they finish. This would mean that each time, the user would need to redo everything from scratch each time the page was loaded.

**Future Solution**: Implement the [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) to store object data and check if present before drawing the default solution.

### Complex Polyhedra

Currently, the only way to implement a valid polyhedra is by creating a regular one. The issue with this is that there is no way to design irregular shapes.

**Future Solution**: Create a new class/editor that allows `polygon`s to take in point data similar to that of `polyline`s.

## References

* [Mozilla Developer Network Documentation - Basic Shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)
* [HTML 5.2 Language Specification](https://www.w3.org/TR/2021/SPSD-html52-20210128/)
* [CSS Snapshot 2020 Language Specification](https://www.w3.org/TR/CSS/)
* [ECMAScript 2015 Language Specification](https://262.ecma-international.org/ecma-262/6.0/ECMA-262.pdf)
* [D3 Documentation](https://github.com/d3/d3/wiki)