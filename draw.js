import {Circle, Ellipse, Polygon, Polyline, Rectangle} from "./shapes.js";

const normOpacity = "75%", // Opacity when not selected or hovered
      hoverOpacity = "90%", // Opacity when hovered but not selected
      selectOpacity = "100%"; // Opacity when selected

let svg, scales, // General information
    circles, ellipses, polys, rects, lines, // Shapes to draw
    selectedElement, editorType; // The currently selected element

window.onload = () => { // Loads the default data onto the screen

    // Draws a simple house
    circles = [
       new Circle(0, 500, 0, 50, "#e8e82e", "#e8e82e"),
       new Circle(1, 267, 350, 5, "#1a1307", "#1a1307")
    ];
    ellipses = [
        new Ellipse(0, 125, 250, 30, 40, "#4f3e1c", "#dbfffb"),
        new Ellipse(1, 375, 250, 30, 40, "#4f3e1c", "#dbfffb")
    ];
    rects = [
        new Rectangle(0, 0, 0, 500, 400, 0, 0, "#50abd9", "#50abd9"),
        new Rectangle(1, 0, 400, 500, 100, 0, 0, "#1b8c20", "#1b8c20"),
        new Rectangle(2, 50, 150, 400, 250, 0, 0, "#e63930", "#e63930"),
        new Rectangle(3, 225, 300, 50, 100, 4, 4, "#000000", "#4f3e1c")
    ];
    lines = [
        new Polyline(0, [[95,250], [155,250]], "#4f3e1c", "none"),
        new Polyline(1, [[345,250], [405,250]], "#4f3e1c", "none"),
        new Polyline(2, [[125,210], [125,290]], "#4f3e1c", "none"),
        new Polyline(3, [[375,210], [375,290]], "#4f3e1c", "none")
    ];
    polys = [
       new Polygon(0, 50, 400, 50, 6, 0, "#1b8c20", "#1b8c20"),
       new Polygon(1, 150, 400, 50, 6, 0, "#1b8c20", "#1b8c20"),
       new Polygon(2, 250, 400, 50, 6, 0, "#1b8c20", "#1b8c20"),
       new Polygon(3, 350, 400, 50, 6, 0, "#1b8c20", "#1b8c20"),
       new Polygon(4, 450, 400, 50, 6, 0, "#1b8c20", "#1b8c20"),
       new Polygon(5, 250, 30, 300, 3, 30, "#592f2d", "#592f2d")
    ];

    // Initialize the default elements
    svg = d3.select("#draw");
    editorType = "c";
    resize();
}

// Resizes all currently drawn elements to match the screen size
let resize = () => {
    /**
     * Used to store information about the currently selected element
     * as the original selected element is removed. This allows us to
     * grab the newly selected element and select it on the screen when
     * redrawing.
     */
    var tagName, index;
    if(selectedExists()) {
        tagName = selectedElement.tagName;
        index = selectedElement.dataset.index;
    }

    // Update scales
    updateScales();

    // Remove original elements and redraw to correctly scale
    svg.selectAll("*").remove();
    drawRectangles();
    drawCircles();
    drawEllipses();
    drawLines();
    drawPolygons();

    // Sets the new selected element to the newly scaled one
    if(tagName && index) {
        selectedElement = document.querySelector(tagName + "[data-index='" + index + "']");
        d3.select(selectedElement).attr("opacity", selectOpacity);
    }
}

/* Add listeners */

// Executes the resize function when the window is resized
window.addEventListener("resize", resize);

// Executes the following when the svg area is clicked
document.getElementById("draw").addEventListener("click", e => {
    // Checks if the selected element exists and is not being clicked
    if(selectedExists() && e.target != selectedElement) {
        // If so, unselect the current element
        d3.select(selectedElement).attr("opacity", normOpacity);
        // Clear editor data holding the element data
        clearEditorValues(selectedElement.dataset.type);
        selectedElement = undefined;
        // Update the editor window with the correct buttons and type selector
        document.getElementById("element-selector").style.display = "block";
        document.getElementById("existing-element").style.display = "none";
        document.getElementById("new-element").style.display = "block";
    }
});

// Executes whenever the dropdown that selects the element type changes
document.getElementById("element-type").addEventListener("change", e => updateEditor(e.target.value));

// Executes whenever the 'Remove All' button is clicked
document.getElementById("remove-all").addEventListener("click", e => {
    // Empty all lists and svg
    circles = [];
    ellipses = [];
    polys = [];
    rects = [];
    lines = [];
    svg.selectAll("*").remove();
});

// Executes whenever the 'Create' button is clicked
document.getElementById("create").addEventListener("click", e => createElement());

// Executes whenever the 'Remove' button is clicked
document.getElementById("remove").addEventListener("click", e => {
    var type = selectedElement.dataset.type;
    // Remove element from list and clear editor
    removeElement(type);
    clearEditorValues(type);
    // Enable the type selector again
    document.getElementById("element-selector").style.display = "block";
});

// Executes whenever the 'Update' button is clicked
document.getElementById("update").addEventListener("click", e => {
    var type = selectedElement.dataset.type;
    // Remove element from list and clear editor
    removeElement(type);
    // Creates new element before clearing editor
    createElement();
    clearEditorValues(type);
    document.getElementById("element-selector").style.display = "block";
});

// Executes whenever the 'Back' button is clicked
document.getElementById("back").addEventListener("click", e => {
    // Unselect current element and clear editor
    d3.select(selectedElement).attr("opacity", normOpacity);
    clearEditorValues(selectedElement.dataset.type);
    selectedElement = undefined;
    document.getElementById("element-selector").style.display = "block";
    document.getElementById("existing-element").style.display = "none";
    document.getElementById("new-element").style.display = "block";
});

// Updates the editor to the required element creator
let updateEditor = (newValue) => {
    document.getElementById("element-" + editorType).style.display = "none";
    updateInputRequired(i => i.removeAttribute("required"));
    document.getElementById("element-" + (editorType = newValue)).style.display = "block";
    updateInputRequired(i => i.setAttribute("required", ""));
}

// Removes an element from the list based on the stored type
let removeElement = type => {
    /**
     * For the type, remove the list element based on the index,
     * remove all drawn shapes, then redraw.
     * 
     * This is done since d3 doesn't seem to like removing data elements
     * that happen to overlap data-wise with one another. It also better
     * supports functional programming standards.
     */
    switch(type) {
        case "circles":
            circles = removeListElement(circles, selectedElement.dataset.index);
            svg.selectAll("circle").remove();
            drawCircles();
            break;
        case "ellipses":
            ellipses = removeListElement(ellipses, selectedElement.dataset.index);
            svg.selectAll("ellipse").remove();
            drawEllipses();
            break;
        case "rects":
            rects = removeListElement(rects, selectedElement.dataset.index);
            svg.selectAll("rect").remove();
            drawRectangles();
            break;
        case "polys":
            polys = removeListElement(polys, selectedElement.dataset.index);
            svg.selectAll("polygon").remove();
            drawPolygons();
            break;
        case "lines":
            lines = removeListElement(lines, selectedElement.dataset.index);
            svg.selectAll("polyline").remove();
            drawLines();
            break;
        default:
            throw new Error("Everything's broken even more now!");
    }
    // Unselect the element
    selectedElement = undefined;
    document.getElementById("existing-element").style.display = "none";
    document.getElementById("new-element").style.display = "block";
}

// Removes the list element at the specified index
let removeListElement = (list, index) => {
    var newList = [];
    // Deep copy the data to a new list with an updated index
    for(var i = 0; i < list.length; i++) {
        var val = i;
        if(val == index) continue;
        else if(val > index) val -= 1;
        newList.push(list[i].copy(val));
    }
    return newList;
}

// Clears the editor based on the input ids
let clearEditorValues = type => {
    switch(type) {
        case "circles":
            clearValues(["ccx", "ccy", "cr"], ["cs", "cf"]);
            break;
        case "ellipses":
            clearValues(["ecx", "ecy", "erx", "ery"], ["es", "ef"]);
            break;
        case "rects":
            clearValues(["rx", "ry", "rw", "rh", "rrx", "rry"], ["rs", "rf"]);
            break;
        case "polys":
            clearValues(["pcx", "pcy", "pr", "psi", "pa"], ["ps", "pf"]);
            break;
        case "lines":
            clearValues(["lp"], ["ls"]);
            break;
        default:
            throw new Error("You just like breaking things don't ya?");
    }
}

// Creates an element for the list
let createElement = () => {
    /**
     * For the required element:
     * 1. Check if the element is valid
     * 2. For any invalid elements, tell the user its invalid
     * 3. If all elements are valid, at it to the list and redraw
     * 4. Remove all editor values
     */
    switch(editorType) {
        case "c":
            var cx = parseFloat(validateElement("ccx", checkPositionRegex)),
                cy = parseFloat(validateElement("ccy", checkPositionRegex)),
                r = parseFloat(validateElement("cr", checkRadiusRegex)),
                s = document.getElementById("cs").value,
                f = document.getElementById("cf").value;
            if(typeof cx != "undefined" &&
                typeof cy != "undefined" &&
                typeof r != "undefined") {
                circles.push(new Circle(circles.length, cx, cy, r, s, f));
                clearEditorValues("circles");
                drawCircles();
            }
            break;
        case "e":
            var cx = parseFloat(validateElement("ecx", checkPositionRegex)),
                cy = parseFloat(validateElement("ecy", checkPositionRegex)),
                rx = parseFloat(validateElement("erx", checkRadiusRegex)),
                ry = parseFloat(validateElement("ery", checkRadiusRegex)),
                s = document.getElementById("es").value,
                f = document.getElementById("ef").value;
            if(typeof cx != "undefined" &&
                typeof cy != "undefined" &&
                typeof rx != "undefined" &&
                typeof ry != "undefined") {
                ellipses.push(new Ellipse(ellipses.length, cx, cy, rx, ry, s, f));
                clearEditorValues("ellipses");
                drawEllipses();
            }
            break;
        case "r":
            var x = parseFloat(validateElement("rx", checkPositionRegex)),
                y = parseFloat(validateElement("ry", checkPositionRegex)),
                w = parseFloat(validateElement("rw", checkRadiusRegex)),
                h = parseFloat(validateElement("rh", checkRadiusRegex)),
                rx = parseFloat(validateElement("rrx", checkPositionRegex)),
                ry = parseFloat(validateElement("rry", checkPositionRegex)),
                s = document.getElementById("rs").value,
                f = document.getElementById("rf").value;
            
            if(typeof x != "undefined" &&
                typeof y != "undefined" &&
                typeof w != "undefined" &&
                typeof h != "undefined" &&
                typeof rx != "undefined" &&
                typeof ry != "undefined") {
                rects.push(new Rectangle(rects.length, x, y, w, h, rx, ry, s, f));
                clearEditorValues("rects");
                drawRectangles();
            }
            break;
        case "p":
            var cx = parseFloat(validateElement("pcx", checkPositionRegex)),
                cy = parseFloat(validateElement("pcy", checkPositionRegex)),
                r = parseFloat(validateElement("pr", checkRadiusRegex)),
                si = parseInt(validateElement("psi", checkSideRegex)),
                a = parseFloat(validateElement("pa", checkAngleRegex)),
                s = document.getElementById("ps").value,
                f = document.getElementById("pf").value;

            if(typeof cx != "undefined" &&
                typeof cy != "undefined" &&
                typeof r != "undefined" &&
                typeof si != "undefined" &&
                typeof a != "undefined") {
                polys.push(new Polygon(polys.length, cx, cy, r, si, a, s, f));
                clearEditorValues("polys");
                drawPolygons();
            }
            break;
        case "l":
            var p = pointParser(validateElement("lp", checkPointsRegex)),
                s = document.getElementById("ls").value;
            
            if(typeof p != "undefined") {
                lines.push(new Polyline(lines.length, p, s, "none"));
                clearEditorValues("lines");
                drawLines();
            }
            break;
        default:
            throw new Error("Can't believe you got here again.");
    }
}

// Clears the associated values from the editor
let clearValues = (elements, colors) => {
    // Two functions are used as color inputs throw warnings when nonvalid entries are set
    elements.forEach(e => document.getElementById(e).value = "");
    colors.forEach(e => document.getElementById(e).value = "#000000");
}

// Validates the element using the supplied regex function
let validateElement = (id, regexChecker) => {
    var e = document.getElementById(id).value;
    if(regexChecker(e)) {
        document.getElementById(id + "-c").style.display = "none";
        return e;
    } else {
        // If invalid, display the invalid data element and return undefined
        document.getElementById(id + "-c").style.display = "block";
        return undefined;
    }
}

// Parses point data to a valid list to use
let pointParser = str => {
    if(typeof str == "undefined") return undefined;
    var points = [], partial = str.split(" ");
    partial.forEach(e => {
        // For each pair of points, parse as a float into an array
        var point = [], strPoint = e.split(",");
        strPoint.forEach(e => point.push(parseFloat(e)));
        points.push(point);
    });
    return points;
}

// Updates the required inputs using the supplied attribute function
let updateInputRequired = attr => {
    switch(editorType) {
        case "c":
            attr(document.getElementById("ccx"));
            attr(document.getElementById("ccy"));
            attr(document.getElementById("cr"));
            attr(document.getElementById("cs"));
            attr(document.getElementById("cf"));
            break;
        case "e":
            attr(document.getElementById("ecx"));
            attr(document.getElementById("ecy"));
            attr(document.getElementById("erx"));
            attr(document.getElementById("ery"));
            attr(document.getElementById("es"));
            attr(document.getElementById("ef"));
            break;
        case "r":
            attr(document.getElementById("rx"));
            attr(document.getElementById("ry"));
            attr(document.getElementById("rw"));
            attr(document.getElementById("rh"));
            attr(document.getElementById("rrx"));
            attr(document.getElementById("rry"));
            attr(document.getElementById("rs"));
            attr(document.getElementById("rf"));
            break;
        case "p":
            attr(document.getElementById("pcx"));
            attr(document.getElementById("pcy"));
            attr(document.getElementById("pr"));
            attr(document.getElementById("psi"));
            attr(document.getElementById("pa"));
            attr(document.getElementById("ps"));
            attr(document.getElementById("pf"));
            break;
        case "l":
            attr(document.getElementById("lp"));
            attr(document.getElementById("ls"));
            break;
        default:
            throw new Error("How'd you get here?");
    }
}

/* Regex checks */

// Checks if each point is between [0, 500] float and that there are at least two in the form 'n,n n,n'
let pointsRegex = /^(?:500|(?:[0-4]?[0-9]?[0-9])(?:\.[0-9]+)?),(?:500|(?:[0-4]?[0-9]?[0-9])(?:\.[0-9]+)?)(?:\s(?=(?:(?:500|(?:[0-4]?[0-9]?[0-9])(?:\.[0-9]+)?),(?:500|(?:[0-4]?[0-9]?[0-9])(?:\.[0-9]+)?)))(?:(?:500|(?:[0-4]?[0-9]?[0-9])(?:\.[0-9]+)?),(?:500|(?:[0-4]?[0-9]?[0-9])(?:\.[0-9]+)?)))+$/;
let checkPointsRegex = value => pointsRegex.test(value);

// Checks if point is between [0, 500] float
let positionRegex = /^(?:500|(?:[0-4]?[0-9]?[0-9])(?:\.[0-9]+)?)$/;
let checkPositionRegex = value => positionRegex.test(value);

// Checks if radius is between [1, 500] float
let radiusRegex = /^(?:500|(?:[0-4]?[0-9]?[1-9]|[0-4]?[1-9]0|[1-4]00)(?:\.[0-9]+)?)$/;
let checkRadiusRegex = value => radiusRegex.test(value);

// Checks if side is between [3, 20] integer
let sideRegex = /^[0-1]?[3-9]|1[0-2]|20$/;
let checkSideRegex = value => sideRegex.test(value);

// Checks if angle is between [0, 360) float
let angleRegex = /^(?:[0-2]?[0-9]?[0-9]|3[0-5][0-9])(?:\.[0-9]+)?$/;
let checkAngleRegex = value => angleRegex.test(value);

// Checks if the selected element exists
let selectedExists = () => typeof selectedElement != "undefined" && selectedElement != null;

// Updates the scales object to the svg width and height
let updateScales = () => {
    scales = {
        x: d3.scaleLinear().domain([0, 500]).range([0, document.getElementById("draw").clientWidth]),
        y: d3.scaleLinear().domain([0, 500]).range([0, document.getElementById("draw").clientHeight])
    }
}

// Sets the default data of each object
let defaultColorableData = (s, type) =>
    s.attr("stroke", e => e.stroke)
        .attr("fill", e => e.fill)
        .attr("data-type", type)
        .attr("data-index", e => e.index)
        .attr("opacity", normOpacity)
        .on("mouseover", e => {
            // Mouse hover increases opaqueness
            if(!selectedExists() || e.target != selectedElement)
                d3.select(e.target).attr("opacity", hoverOpacity);
        })
        .on("mouseout", e => {
            // Mouse out returns opacity to default
            if(!selectedExists() || e.target != selectedElement)
                d3.select(e.target).attr("opacity", normOpacity);
        })
        .on("click", e => {
            // Clicked elements are made fully opaque and the existing selected set back to normal
            if(selectedExists()) d3.select(selectedElement).attr("opacity", normOpacity);
            d3.select(selectedElement = e.target).attr("opacity", selectOpacity);
            document.getElementById("element-selector").style.display = "none";
            
            // Updates editor data to the specified element information
            var type = selectedElement.dataset.type.charAt(0),
                index = selectedElement.dataset.index;
            updateEditor(type);
            switch(type) {
                case "c":
                    var circle = circles[index];
                    document.getElementById("ccx").value = circle.cx;
                    document.getElementById("ccy").value = circle.cy;
                    document.getElementById("cr").value = circle.r;
                    document.getElementById("cs").value = circle.stroke;
                    document.getElementById("cf").value = circle.fill;
                    break;
                case "e":
                    var ellipse = ellipses[index];
                    document.getElementById("ecx").value = ellipse.cx;
                    document.getElementById("ecy").value = ellipse.cy;
                    document.getElementById("erx").value = ellipse.r;
                    document.getElementById("ery").value = ellipse.ry;
                    document.getElementById("es").value = ellipse.stroke;
                    document.getElementById("ef").value = ellipse.fill;
                    break;
                case "r":
                    var rect = rects[index];
                    document.getElementById("rx").value = rect.x;
                    document.getElementById("ry").value = rect.y;
                    document.getElementById("rw").value = rect.width;
                    document.getElementById("rh").value = rect.height;
                    document.getElementById("rrx").value = rect.rx;
                    document.getElementById("rry").value = rect.ry;
                    document.getElementById("rs").value = rect.stroke;
                    document.getElementById("rf").value = rect.fill;
                    break;
                case "p":
                    var poly = polys[index];
                    document.getElementById("pcx").value = poly.cx;
                    document.getElementById("pcy").value = poly.cy;
                    document.getElementById("pr").value = poly.r;
                    document.getElementById("psi").value = poly.sides;
                    document.getElementById("pa").value = poly.angle;
                    document.getElementById("ps").value = poly.stroke;
                    document.getElementById("pf").value = poly.fill;
                    break;
                case "l":
                    var line = lines[index];
                    document.getElementById("lp").value = line.getNormalizedPoints();
                    document.getElementById("ls").value = line.stroke;
                    break;
                default:
                    throw new Error("There's something wrong with this program, it broke.");
            }
            document.getElementById("element-type").value = type;
            document.getElementById("new-element").style.display = "none";
            document.getElementById("existing-element").style.display = "block";
        });

// Draws circles to the svg
let drawCircles = () =>
    defaultColorableData(svg.selectAll("circle")
        .data(circles)
        .enter()
        .append("circle")
        .attr("cx", c => scales.x(c.cx))
        .attr("cy", c => scales.y(c.cy))
        .attr("r", c => scales.y(c.r)), "circles"); // Radius is scaled by y-axis (problems with being not ellipses)

// Draws ellipses to the svg
let drawEllipses = () =>
    defaultColorableData(svg.selectAll("ellipse") // More powerful 'circle'
        .data(ellipses)
        .enter()
        .append("ellipse")
        .attr("cx", c => scales.x(c.cx))
        .attr("cy", c => scales.y(c.cy))
        .attr("rx", c => scales.x(c.r))
        .attr("ry", c => scales.y(c.ry)), "ellipses");

// Draws rectangles to the svg
let drawRectangles = () =>
    defaultColorableData(svg.selectAll("rect")
        .data(rects)
        .enter()
        .append("rect")
        .attr("x", r => scales.x(r.x))
        .attr("y", r => scales.y(r.y))
        .attr("width", r => scales.x(r.width))
        .attr("height", r => scales.y(r.height))
        .attr("rx", r => scales.x(r.rx))
        .attr("ry", r => scales.y(r.ry)), "rects");

// Draws lines to the svg
let drawLines = () =>
    defaultColorableData(svg.selectAll("polyline") // More powerful 'line'
        .data(lines)
        .enter()
        .append("polyline")
        .attr("points", l => l.getPoints(scales.x, scales.y)), "lines");

// Draws polygons to the svg
let drawPolygons = () =>
    defaultColorableData(svg.selectAll("polygon")
        .data(polys)
        .enter()
        .append("polygon")
        .attr("points", l => l.getPoints(scales.x, scales.y)), "polys");