/**
 * headsliderd3
 * - Andrew Nolan
 * This file handles the d3 code for generating the chernoff faces for setosa iris
 */

// The svg and it's border
const setosaContainer = d3.select("#setosa")
    .append("svg")
    .attr("width", 600)
    .attr("height", 600)
    .style("background-color", "lightblue");

const setosaContainerBorder = setosaContainer.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("height", 600)
    .attr("width", 600)
    .attr("stroke", "black")
    .style("fill", "none")
    .style("stroke-width", 2);

const setosaText = setosaContainer.append("text")
    .attr("dx", 10)
    .attr("dy", 30)
    .text("Iris Setosa");

// The head, an ellipse
let setosaHeadRadiusX = 100;
let setosaHeadRadiusY = 100;
let setosaHeadCenterX = 150;
let setosaHeadCenterY = 150;
let setosaHeadColor = "yellow";
let setosaHeadStrokeColor = "black";

const setosaHead1 = setosaContainer.append("ellipse")
    .attr("cx", setosaHeadCenterX)
    .attr("cy", setosaHeadCenterY)
    .attr("rx", setosaHeadRadiusX)
    .attr("ry", setosaHeadRadiusY)
    .attr("fill", setosaHeadColor)
    .attr("stroke", setosaHeadStrokeColor);

const setosaHead2 = setosaContainer.append("ellipse")
    .attr("cx", setosaHeadCenterX+300)
    .attr("cy", setosaHeadCenterY)
    .attr("rx", setosaHeadRadiusX)
    .attr("ry", setosaHeadRadiusY)
    .attr("fill", setosaHeadColor)
    .attr("stroke", setosaHeadStrokeColor);

const setosaHead3 = setosaContainer.append("ellipse")
    .attr("cx", setosaHeadCenterX)
    .attr("cy", setosaHeadCenterY+300)
    .attr("rx", setosaHeadRadiusX)
    .attr("ry", setosaHeadRadiusY)
    .attr("fill", setosaHeadColor)
    .attr("stroke", setosaHeadStrokeColor);

const setosaHead4 = setosaContainer.append("ellipse")
    .attr("cx", setosaHeadCenterX+300)
    .attr("cy", setosaHeadCenterY+300)
    .attr("rx", setosaHeadRadiusX)
    .attr("ry", setosaHeadRadiusY)
    .attr("fill", setosaHeadColor)
    .attr("stroke", setosaHeadStrokeColor);

// The eyes, circles
let setosaEyeGroupTranslationX = 150;
let setosaEyeGroupTranslationY = 100;

const setosaEyeGroup1 = setosaContainer.append('g')
    .attr('transform', 'translate(' + setosaEyeGroupTranslationX + ',' + setosaEyeGroupTranslationY + ')');

const setosaLeftEye1 = setosaEyeGroup1.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", -eyeSeparation)
    .attr("fill", eyeFillColor);

const setosaRightEye1 = setosaEyeGroup1.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", eyeSeparation)
    .attr("fill", eyeFillColor);

const setosaEyeGroup2 = setosaContainer.append('g')
    .attr('transform', 'translate(' + (setosaEyeGroupTranslationX + 300) + ',' + setosaEyeGroupTranslationY + ')');

const setosaLeftEye2 = setosaEyeGroup2.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", -eyeSeparation)
    .attr("fill", eyeFillColor);

const setosaRightEye2 = setosaEyeGroup2.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", eyeSeparation)
    .attr("fill", eyeFillColor);

const setosaEyeGroup3 = setosaContainer.append('g')
    .attr('transform', 'translate(' + setosaEyeGroupTranslationX + ',' + (setosaEyeGroupTranslationY+300) + ')');

const setosaLeftEye3 = setosaEyeGroup3.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", -eyeSeparation)
    .attr("fill", eyeFillColor);

const setosaRightEye3 = setosaEyeGroup3.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", eyeSeparation)
    .attr("fill", eyeFillColor);

const setosaEyeGroup4 = setosaContainer.append('g')
    .attr('transform', 'translate(' + (setosaEyeGroupTranslationX+300) + ',' + (setosaEyeGroupTranslationY+300) + ')');

const setosaLeftEye4 = setosaEyeGroup4.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", -eyeSeparation)
    .attr("fill", eyeFillColor);

const setosaRightEye4 = setosaEyeGroup4.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", eyeSeparation)
    .attr("fill", eyeFillColor);

// The eyebrows, rectangles
const setosaLeftEyebrow1 = setosaEyeGroup1.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', -browX - browWidth)
    .attr('y', browY);

const setosaRightEyebrow1 = setosaEyeGroup1.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', browX)
    .attr('y', browY);

const setosaLeftEyebrow2 = setosaEyeGroup2.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', -browX - browWidth)
    .attr('y', browY);

const setosaRightEyebrow2 = setosaEyeGroup2.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', browX)
    .attr('y', browY);

const setosaLeftEyebrow3 = setosaEyeGroup3.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', -browX - browWidth)
    .attr('y', browY);

const setosaRightEyebrow3 = setosaEyeGroup3.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', browX)
    .attr('y', browY);

const setosaLeftEyebrow4 = setosaEyeGroup4.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', -browX - browWidth)
    .attr('y', browY);

const setosaRightEyebrow4 = setosaEyeGroup4.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', browX)
    .attr('y', browY);

// The smile, a path
let setosaSmileTranslateX = 150;
let setosaSmileTranslateY = 150;

const setosaSmileGroup1 = setosaContainer.append('g')
    .attr('transform', 'translate(' + setosaSmileTranslateX + ', ' + setosaSmileTranslateY + ')');

const setosaMouth1 = setosaSmileGroup1.append("path")
    .attr("d", d3.arc()({
        innerRadius: smileInnerRadius,
        outerRadius: smileOuterRadius,
        startAngle: smileStartAngle,
        endAngle: smileEndAngle
    }));

const setosaSmileGroup2 = setosaContainer.append('g')
    .attr('transform', 'translate(' + (setosaSmileTranslateX+300) + ', ' + setosaSmileTranslateY + ')');

const setosaMouth2 = setosaSmileGroup2.append("path")
    .attr("d", d3.arc()({
        innerRadius: smileInnerRadius,
        outerRadius: smileOuterRadius,
        startAngle: smileStartAngle,
        endAngle: smileEndAngle
    }));

const setosaSmileGroup3 = setosaContainer.append('g')
    .attr('transform', 'translate(' + setosaSmileTranslateX + ', ' + (setosaSmileTranslateY+300) + ')');

const setosaMouth3 = setosaSmileGroup3.append("path")
    .attr("d", d3.arc()({
        innerRadius: smileInnerRadius,
        outerRadius: smileOuterRadius,
        startAngle: smileStartAngle,
        endAngle: smileEndAngle
    }));

const setosaSmileGroup4 = setosaContainer.append('g')
    .attr('transform', 'translate(' + (setosaSmileTranslateX+300) + ', ' + (setosaSmileTranslateY+300) + ')');

const setosaMouth4 = setosaSmileGroup4.append("path")
    .attr("d", d3.arc()({
        innerRadius: smileInnerRadius,
        outerRadius: smileOuterRadius,
        startAngle: smileStartAngle,
        endAngle: smileEndAngle
    }));

// The nose, a polygon
let setosaNosePoint1_1 = "150,105";
let setosaNosePoint2_1 = "175,125";
let setosaNosePoint3_1 = "125,125";

let setosaNosePoint1_2 = "450,105";
let setosaNosePoint2_2 = "475,125";
let setosaNosePoint3_2 = "425,125";

let setosaNosePoint1_3 = "150,405";
let setosaNosePoint2_3 = "175,425";
let setosaNosePoint3_3 = "125,425";

let setosaNosePoint1_4 = "450,405";
let setosaNosePoint2_4 = "475,425";
let setosaNosePoint3_4 = "425,425";


const setosaNose1 = setosaContainer.append("polygon")
    .attr("points", setosaNosePoint1_1 + " " + setosaNosePoint2_1 + " " + setosaNosePoint3_1)
    .attr("stroke", noseStrokeColor)
    .attr("fill", noseFillColor)
    .attr("stroke-width", noseStrokeWidth);

const setosaNose2 = setosaContainer.append("polygon")
    .attr("points", setosaNosePoint1_2 + " " + setosaNosePoint2_2 + " " + setosaNosePoint3_2)
    .attr("stroke", noseStrokeColor)
    .attr("fill", noseFillColor)
    .attr("stroke-width", noseStrokeWidth);

const setosaNose3 = setosaContainer.append("polygon")
    .attr("points", setosaNosePoint1_3 + " " + setosaNosePoint2_3 + " " + setosaNosePoint3_3)
    .attr("stroke", noseStrokeColor)
    .attr("fill", noseFillColor)
    .attr("stroke-width", noseStrokeWidth);

const setosaNose4 = setosaContainer.append("polygon")
    .attr("points", setosaNosePoint1_4 + " " + setosaNosePoint2_4 + " " + setosaNosePoint3_4)
    .attr("stroke", noseStrokeColor)
    .attr("fill", noseFillColor)
    .attr("stroke-width", noseStrokeWidth);


/** Change the faces to match the data **/
// A subset of the data from the spreadsheet for Iris-setosa represented as a 2d array
// Each row has 4 values: sepalLength, sepalWidth, petalLength, and petalWidth
/* The max and min values of each feature are:
 * sepalLength: 4.3 - 7.9
 * sepalWidth:  2.0 - 4.4
 * petalLength: 1.0 - 6.9
 * petalWidth:  0.1 - 2.5
 */ 
let setosaData = [
    [5.1,3.5,1.4,0.2],
    [4.9,3,1.4,0.2],
    [4.7,3.2,1.3,0.2],
    [3.6,3.1,1.5,0.2]
];

// We are going to map this data from Iris features to facial features
/* The mapping will be the following:
 * sepalLength: face width
 * sepalWidth:  smile shape
 * petalLength: nose height
 * petalWidth:  eyebrow angle
 */ 

// Adjust the face widths
// face width: 50-150
let sepalLengthRange = 7.9-4.3;

let setosaSepalLengthPercent1 = (setosaData[0][0] - 4.3)/sepalLengthRange;
let setosaHeadWidth1 = (setosaSepalLengthPercent1 * 100) + 50;
setosaHead1.attr("rx", setosaHeadWidth1);

let setosaSepalLengthPercent2 = (setosaData[1][0] - 4.3)/sepalLengthRange;
let setosaHeadWidth2 = (setosaSepalLengthPercent2 * 100) + 50;
setosaHead2.attr("rx", setosaHeadWidth2);

let setosaSepalLengthPercent3 = (setosaData[2][0] - 4.3)/sepalLengthRange;
let setosaHeadWidth3 = (setosaSepalLengthPercent3 * 100) + 50;
setosaHead3.attr("rx", setosaHeadWidth3);

let setosaSepalLengthPercent4 = (setosaData[3][0] - 4.3)/sepalLengthRange;
let setosaHeadWidth4 = (setosaSepalLengthPercent4 * 100) + 50;
setosaHead4.attr("rx", setosaHeadWidth4);

// Adjust the smile shape
let sepalWidthRange = 4.4-2;

let setosaSepalWidthPercent1 = (setosaData[0][1] - 2)/sepalWidthRange;
let setosaSmileShape1 = (setosaSepalWidthPercent1 * 50);
setosaMouth1.attr("d", d3.arc()({
    innerRadius: setosaSmileShape1,
    outerRadius: smileOuterRadius,
    startAngle: smileStartAngle,
    endAngle: smileEndAngle
}));

let setosaSepalWidthPercent2 = (setosaData[1][1] - 2)/sepalWidthRange;
let setosaSmileShape2 = (setosaSepalWidthPercent2 * 50);
setosaMouth1.attr("d", d3.arc()({
    innerRadius: setosaSmileShape2,
    outerRadius: smileOuterRadius,
    startAngle: smileStartAngle,
    endAngle: smileEndAngle
}));

let setosaSepalWidthPercent3 = (setosaData[2][1] - 2)/sepalWidthRange;
let setosaSmileShape3 = (setosaSepalWidthPercent3 * 50);
setosaMouth1.attr("d", d3.arc()({
    innerRadius: setosaSmileShape3,
    outerRadius: smileOuterRadius,
    startAngle: smileStartAngle,
    endAngle: smileEndAngle
}));

let setosaSepalWidthPercent4 = (setosaData[3][1] - 2)/sepalWidthRange;
let setosaSmileShape4 = (setosaSepalWidthPercent4 * 50);
setosaMouth1.attr("d", d3.arc()({
    innerRadius: setosaSmileShape4,
    outerRadius: smileOuterRadius,
    startAngle: smileStartAngle,
    endAngle: smileEndAngle
}));

// Adjust the nose height
let petalLengthRange = 6.9-1;

let setosaPetalLengthPercent1 = (setosaData[0][2] - 1)/petalLengthRange;
let setosaNoseHeight1 = (setosaPetalLengthPercent1 * 100) + 75;
setosaNosePoint1_1 = "150,"+setosaNoseHeight1;
setosaNose1.attr("points", setosaNosePoint1_1 + " " + setosaNosePoint2_1 + " " + setosaNosePoint3_1);

let setosaPetalLengthPercent2 = (setosaData[1][2] - 1)/petalLengthRange;
let setosaNoseHeight2 = (setosaPetalLengthPercent2 * 100) + 75;
setosaNosePoint1_2 = "450,"+setosaNoseHeight2;
setosaNose2.attr("points", setosaNosePoint1_2 + " " + setosaNosePoint2_2 + " " + setosaNosePoint3_2);

let setosaPetalLengthPercent3 = (setosaData[2][2] - 1)/petalLengthRange;
let setosaNoseHeight3 = (setosaPetalLengthPercent3 * 100) + 75;
setosaNosePoint1_3 = "150,"+(setosaNoseHeight2+300);
setosaNose3.attr("points", setosaNosePoint1_3 + " " + setosaNosePoint2_3 + " " + setosaNosePoint3_3);

let setosaPetalLengthPercent4 = (setosaData[3][2] - 1)/petalLengthRange;
let setosaNoseHeight4 = (setosaPetalLengthPercent4 * 100) + 75;
setosaNosePoint1_4 = "450,"+(setosaNoseHeight4+300);
setosaNose4.attr("points", setosaNosePoint1_4 + " " + setosaNosePoint2_4 + " " + setosaNosePoint3_4);

// Adjust the brow angles
// -38.1, 38.1
let petalWidthRange = 2.5-0.1;

let setosaPetalWidthPercent1 = (setosaData[0][3] - 0.1)/petalWidthRange;
let setosaBrowAngle1 = (setosaPetalWidthPercent1 * 76.2) -38.1;
setosaLeftEyebrow1.attr("transform", "rotate(" + setosaBrowAngle1 + "," + (-browX - browWidth) + "," + browY + ")");
setosaRightEyebrow1.attr("transform", "rotate(" + -setosaBrowAngle1 + "," + (browX + browWidth) + "," + browY + ")");

let setosaPetalWidthPercent2 = (setosaData[1][3] - 0.1)/petalWidthRange;
let setosaBrowAngle2 = (setosaPetalWidthPercent2 * 76.2) -38.1;
setosaLeftEyebrow2.attr("transform", "rotate(" + setosaBrowAngle2 + "," + (-browX - browWidth) + "," + browY + ")");
setosaRightEyebrow2.attr("transform", "rotate(" + -setosaBrowAngle2 + "," + (browX + browWidth) + "," + browY + ")");

let setosaPetalWidthPercent3 = (setosaData[2][3] - 0.1)/petalWidthRange;
let setosaBrowAngle3 = (setosaPetalWidthPercent3 * 76.2) -38.1;
setosaLeftEyebrow3.attr("transform", "rotate(" + setosaBrowAngle3 + "," + (-browX - browWidth) + "," + browY + ")");
setosaRightEyebrow3.attr("transform", "rotate(" + -setosaBrowAngle3 + "," + (browX + browWidth) + "," + browY + ")");

let setosaPetalWidthPercent4 = (setosaData[3][3] - 0.1)/petalWidthRange;
let setosaBrowAngle4 = (setosaPetalWidthPercent4 * 76.2) -38.1;
setosaLeftEyebrow4.attr("transform", "rotate(" + setosaBrowAngle4 + "," + (-browX - browWidth) + "," + browY + ")");
setosaRightEyebrow4.attr("transform", "rotate(" + -setosaBrowAngle4 + "," + (browX + browWidth) + "," + browY + ")");

