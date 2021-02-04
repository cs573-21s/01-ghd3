/**
 * headsliderd3
 * - Andrew Nolan
 * This file handles the d3 code for generating the head sliders
 */

// The svg and it's border
const svgContainer = d3.select("#svgZone")
    .append("svg")
    .attr("width", 640)
    .attr("height", 300)
    .style("background-color", "lightblue");

const svgContainerBorder = svgContainer.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("height", 300)
    .attr("width", 640)
    .attr("stroke", "black")
    .style("fill", "none")
    .style("stroke-width", 2);

/* Make a face */
// The head, an ellipse
let headRadiusX = 100;
let headRadiusY = 100;
let headCenterX = 475;
let headCenterY = 150;
let headColor = "yellow";
let headStrokeColor = "black";

const head = svgContainer.append("ellipse")
    .attr("cx", headCenterX)
    .attr("cy", headCenterY)
    .attr("rx", headRadiusX)
    .attr("ry", headRadiusY)
    .attr("fill", headColor)
    .attr("stroke", headStrokeColor);

// The eyes, circles
let eyeGroupTranslationX = 475;
let eyeGroupTranslationY = 100;
let eyeRadius = 10;
let eyeSeparation = 50;
let eyeFillColor = "black";

const eyeGroup = svgContainer.append('g')
    .attr('transform', 'translate(' + eyeGroupTranslationX + ',' + eyeGroupTranslationY + ')');

const leftEye = eyeGroup.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", -eyeSeparation)
    .attr("fill", eyeFillColor);

const rightEye = eyeGroup.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", eyeSeparation)
    .attr("fill", eyeFillColor);

// The eyebrows, rectangles
let browWidth = 30;
let browHeight = 10;
let browX = 30;
let browY = -25;

const leftEyebrow = eyeGroup.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', -browX - browWidth)
    .attr('y', browY);

const rightEyebrow = eyeGroup.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', browX)
    .attr('y', browY);

// The smile, a path
let smileTranslateX = 475;
let smileTranslateY = 150;
let smileInnerRadius = 35;
let smileOuterRadius = 60;
let smileStartAngle = Math.PI / 2;
let smileEndAngle = Math.PI * 3 / 2;

const smileGroup = svgContainer.append('g')
    .attr('transform', 'translate(' + smileTranslateX + ', ' + smileTranslateY + ')');

const mouth = smileGroup.append("path")
    .attr("d", d3.arc()({
        innerRadius: smileInnerRadius,
        outerRadius: smileOuterRadius,
        startAngle: smileStartAngle,
        endAngle: smileEndAngle
    }));

// The nose, a polygon
let nosePoint1 = "475,105";
let nosePoint2 = "450,125";
let nosePoint3 = "500,125";
let noseStrokeColor = "black";
let noseFillColor = "none";
let noseStrokeWidth = 5;

const nose = svgContainer.append("polygon")
    .attr("points", nosePoint1 + " " + nosePoint2 + " " + nosePoint3)
    .attr("stroke", noseStrokeColor)
    .attr("fill", noseFillColor)
    .attr("stroke-width", noseStrokeWidth);


/* Make the sliders */
// Based off: https://stackoverflow.com/questions/42878866/using-d3-slider-to-change-attribute

// Global slider variables
let offset = document.getElementById('svgZone').offsetLeft + document.getElementById('svgZoneHolder').offsetLeft + 10;

// Face shape slider
let faceWidthScale = d3.scaleLinear()
    .domain([50, 150]) // The range of head widths
    .range([0, 100]) // slider range is 100 pixels
    .clamp(true); // prevents the slider from sliding too far

let faceWidthSlider = svgContainer.append("g")
    .attr("class", "slider") // css class
    .attr("transform", "translate(15,50)");

faceWidthSlider.append("line")
    .attr("class", "track")
    .attr("x1", faceWidthScale.range()[0])
    .attr("x2", faceWidthScale.range()[1])
    .select(function () {
        return this.parentNode;
    });

faceWidthSlider.append("line")
    .attr("x1", faceWidthScale.range()[0])
    .attr("x2", faceWidthScale.range()[1])
    .attr("class", "track-inset")
    .select(function () {
        return this.parentNode;
    });

faceWidthSlider.append("line")
    .attr("x1", faceWidthScale.range()[0])
    .attr("x2", faceWidthScale.range()[1])
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function () {
            faceWidthSlider.interrupt();
        })
        .on("start drag", function () {
            changeHeadWidth(faceWidthScale.invert(event.x - offset));
        }));

let faceWidthHandle = faceWidthSlider.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 10)
    .attr("cx", 50);

faceWidthSlider.append("text")
    .attr("dx", 115)
    .attr("dy", ".35em")
    .text("Face Width");

function changeHeadWidth(h) {
    faceWidthHandle.attr("cx", faceWidthScale(h));
    headRadiusX = h;
    head.attr("rx", headRadiusX);
}

// Smile shape slider
let smileShapeScale = d3.scaleLinear()
    .domain([0, 50]) // The range of smile inner radii
    .range([0, 100]) // slider range is 100 pixels
    .clamp(true); 

let smileShapeSlider = svgContainer.append("g")
    .attr("class", "slider") 
    .attr("transform", "translate(15,100)");

smileShapeSlider.append("line")
    .attr("class", "track")
    .attr("x1", smileShapeScale.range()[0])
    .attr("x2", smileShapeScale.range()[1])
    .select(function () {
        return this.parentNode;
    });

smileShapeSlider.append("line")
    .attr("x1", smileShapeScale.range()[0])
    .attr("x2", smileShapeScale.range()[1])
    .attr("class", "track-inset")
    .select(function () {
        return this.parentNode;
    });

smileShapeSlider.append("line")
    .attr("x1", smileShapeScale.range()[0])
    .attr("x2", smileShapeScale.range()[1])
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function () {
            smileShapeSlider.interrupt();
        })
        .on("start drag", function () {
            changeSmileShape(smileShapeScale.invert(event.x - offset));
        }));

let smileShapeHandle = smileShapeSlider.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 10)
    .attr("cx", 70);

smileShapeSlider.append("text")
    .attr("dx", 115)
    .attr("dy", ".35em")
    .text("Smile Shape");

function changeSmileShape(h) {
    smileShapeHandle.attr("cx", smileShapeScale(h));
    smileInnerRadius = h;
    mouth.attr("d", d3.arc()({
        innerRadius: smileInnerRadius,
        outerRadius: smileOuterRadius,
        startAngle: smileStartAngle,
        endAngle: smileEndAngle
    }));
}

// Nose height slider
let noseHeightScale = d3.scaleLinear()
    .domain([75, 175]) // The range of nose heights
    .range([0, 100]) // slider range is 100 pixels
    .clamp(true); 

let noseHeightSlider = svgContainer.append("g")
    .attr("class", "slider") 
    .attr("transform", "translate(15,150)");

noseHeightSlider.append("line")
    .attr("class", "track")
    .attr("x1", noseHeightScale.range()[0])
    .attr("x2", noseHeightScale.range()[1])
    .select(function () {
        return this.parentNode;
    });

noseHeightSlider.append("line")
    .attr("x1", noseHeightScale.range()[0])
    .attr("x2", noseHeightScale.range()[1])
    .attr("class", "track-inset")
    .select(function () {
        return this.parentNode;
    });

noseHeightSlider.append("line")
    .attr("x1", noseHeightScale.range()[0])
    .attr("x2", noseHeightScale.range()[1])
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function () {
            noseHeightSlider.interrupt();
        })
        .on("start drag", function () {
            changeNoseHeight(noseHeightScale.invert(event.x - offset));
        }));

let noseHeightHandle = noseHeightSlider.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 10)
    .attr("cx", 30);

noseHeightSlider.append("text")
    .attr("dx", 115)
    .attr("dy", ".35em")
    .text("Nose Height");

function changeNoseHeight(h) {
    noseHeightHandle.attr("cx", noseHeightScale(h));
    nosePoint1 = "475," + h;
    nose.attr("points", nosePoint1 + " " + nosePoint2 + " " + nosePoint3);
}

// Brow Angle
let browAngleScale = d3.scaleLinear()
    .domain([-38.1, 38.1]) // The range of brow angles
    .range([0, 100]) // slider range is 100 pixels
    .clamp(true); 

let browAngleSlider = svgContainer.append("g")
    .attr("class", "slider") 
    .attr("transform", "translate(15,200)");

browAngleSlider.append("line")
    .attr("class", "track")
    .attr("x1", browAngleScale.range()[0])
    .attr("x2", browAngleScale.range()[1])
    .select(function () {
        return this.parentNode;
    });

browAngleSlider.append("line")
    .attr("x1", browAngleScale.range()[0])
    .attr("x2", browAngleScale.range()[1])
    .attr("class", "track-inset")
    .select(function () {
        return this.parentNode;
    });

browAngleSlider.append("line")
    .attr("x1", browAngleScale.range()[0])
    .attr("x2", browAngleScale.range()[1])
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function () {
            browAngleSlider.interrupt();
        })
        .on("start drag", function () {
            changeBrowAngle(browAngleScale.invert(event.x - offset));
        }));

let browAngleHandle = browAngleSlider.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 10)
    .attr("cx", 50);

browAngleSlider.append("text")
    .attr("dx", 115)
    .attr("dy", ".35em")
    .text("Eyebrow Angle");

function changeBrowAngle(h) {
    browAngleHandle.attr("cx", browAngleScale(h));
    leftEyebrow.attr("transform", "rotate(" + h + "," + (-browX - browWidth) + "," + browY + ")");
    rightEyebrow.attr("transform", "rotate(" + -h + "," + (browX + browWidth) + "," + browY + ")");
}