/**
 * versicolor_d3
 * - Andrew Nolan
 * This file handles the d3 code for generating the  chernoff faces for viriginca iris
 */

// The svg and it's border
const versicolorContainer = d3.select("#versicolor")
    .append("svg")
    .attr("width", 600)
    .attr("height", 600)
    .style("background-color", "lightblue");

const versicolorContainerBorder = versicolorContainer.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("height", 600)
    .attr("width", 600)
    .attr("stroke", "black")
    .style("fill", "none")
    .style("stroke-width", 2);

const versicolorText = versicolorContainer.append("text")
    .attr("dx", 10)
    .attr("dy", 30)
    .text("Iris Versicolor");


// The head, an ellipse
let versicolorHeadRadiusX = 100;
let versicolorHeadRadiusY = 100;
let versicolorHeadCenterX = 150;
let versicolorHeadCenterY = 150;
let versicolorHeadColor = "yellow";
let versicolorHeadStrokeColor = "black";

const versicolorHead1 = versicolorContainer.append("ellipse")
    .attr("cx", versicolorHeadCenterX)
    .attr("cy", versicolorHeadCenterY)
    .attr("rx", versicolorHeadRadiusX)
    .attr("ry", versicolorHeadRadiusY)
    .attr("fill", versicolorHeadColor)
    .attr("stroke", versicolorHeadStrokeColor);

const versicolorHead2 = versicolorContainer.append("ellipse")
    .attr("cx", versicolorHeadCenterX+300)
    .attr("cy", versicolorHeadCenterY)
    .attr("rx", versicolorHeadRadiusX)
    .attr("ry", versicolorHeadRadiusY)
    .attr("fill", versicolorHeadColor)
    .attr("stroke", versicolorHeadStrokeColor);

const versicolorHead3 = versicolorContainer.append("ellipse")
    .attr("cx", versicolorHeadCenterX)
    .attr("cy", versicolorHeadCenterY+300)
    .attr("rx", versicolorHeadRadiusX)
    .attr("ry", versicolorHeadRadiusY)
    .attr("fill", versicolorHeadColor)
    .attr("stroke", versicolorHeadStrokeColor);

const versicolorHead4 = versicolorContainer.append("ellipse")
    .attr("cx", versicolorHeadCenterX+300)
    .attr("cy", versicolorHeadCenterY+300)
    .attr("rx", versicolorHeadRadiusX)
    .attr("ry", versicolorHeadRadiusY)
    .attr("fill", versicolorHeadColor)
    .attr("stroke", versicolorHeadStrokeColor);

// The eyes, circles
let versicolorEyeGroupTranslationX = 150;
let versicolorEyeGroupTranslationY = 100;

const versicolorEyeGroup1 = versicolorContainer.append('g')
    .attr('transform', 'translate(' + versicolorEyeGroupTranslationX + ',' + versicolorEyeGroupTranslationY + ')');

const versicolorLeftEye1 = versicolorEyeGroup1.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", -eyeSeparation)
    .attr("fill", eyeFillColor);

const versicolorRightEye1 = versicolorEyeGroup1.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", eyeSeparation)
    .attr("fill", eyeFillColor);

const versicolorEyeGroup2 = versicolorContainer.append('g')
    .attr('transform', 'translate(' + (versicolorEyeGroupTranslationX + 300) + ',' + versicolorEyeGroupTranslationY + ')');

const versicolorLeftEye2 = versicolorEyeGroup2.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", -eyeSeparation)
    .attr("fill", eyeFillColor);

const versicolorRightEye2 = versicolorEyeGroup2.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", eyeSeparation)
    .attr("fill", eyeFillColor);

const versicolorEyeGroup3 = versicolorContainer.append('g')
    .attr('transform', 'translate(' + versicolorEyeGroupTranslationX + ',' + (versicolorEyeGroupTranslationY+300) + ')');

const versicolorLeftEye3 = versicolorEyeGroup3.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", -eyeSeparation)
    .attr("fill", eyeFillColor);

const versicolorRightEye3 = versicolorEyeGroup3.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", eyeSeparation)
    .attr("fill", eyeFillColor);

const versicolorEyeGroup4 = versicolorContainer.append('g')
    .attr('transform', 'translate(' + (versicolorEyeGroupTranslationX+300) + ',' + (versicolorEyeGroupTranslationY+300) + ')');

const versicolorLeftEye4 = versicolorEyeGroup4.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", -eyeSeparation)
    .attr("fill", eyeFillColor);

const versicolorRightEye4 = versicolorEyeGroup4.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", eyeSeparation)
    .attr("fill", eyeFillColor);

// The eyebrows, rectangles
const versicolorLeftEyebrow1 = versicolorEyeGroup1.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', -browX - browWidth)
    .attr('y', browY);

const versicolorRightEyebrow1 = versicolorEyeGroup1.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', browX)
    .attr('y', browY);

const versicolorLeftEyebrow2 = versicolorEyeGroup2.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', -browX - browWidth)
    .attr('y', browY);

const versicolorRightEyebrow2 = versicolorEyeGroup2.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', browX)
    .attr('y', browY);

const versicolorLeftEyebrow3 = versicolorEyeGroup3.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', -browX - browWidth)
    .attr('y', browY);

const versicolorRightEyebrow3 = versicolorEyeGroup3.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', browX)
    .attr('y', browY);

const versicolorLeftEyebrow4 = versicolorEyeGroup4.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', -browX - browWidth)
    .attr('y', browY);

const versicolorRightEyebrow4 = versicolorEyeGroup4.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', browX)
    .attr('y', browY);

// The smile, a path
let versicolorSmileTranslateX = 150;
let versicolorSmileTranslateY = 150;

const versicolorSmileGroup1 = versicolorContainer.append('g')
    .attr('transform', 'translate(' + versicolorSmileTranslateX + ', ' + versicolorSmileTranslateY + ')');

const versicolorMouth1 = versicolorSmileGroup1.append("path")
    .attr("d", d3.arc()({
        innerRadius: smileInnerRadius,
        outerRadius: smileOuterRadius,
        startAngle: smileStartAngle,
        endAngle: smileEndAngle
    }));

const versicolorSmileGroup2 = versicolorContainer.append('g')
    .attr('transform', 'translate(' + (versicolorSmileTranslateX+300) + ', ' + versicolorSmileTranslateY + ')');

const versicolorMouth2 = versicolorSmileGroup2.append("path")
    .attr("d", d3.arc()({
        innerRadius: smileInnerRadius,
        outerRadius: smileOuterRadius,
        startAngle: smileStartAngle,
        endAngle: smileEndAngle
    }));

const versicolorSmileGroup3 = versicolorContainer.append('g')
    .attr('transform', 'translate(' + versicolorSmileTranslateX + ', ' + (versicolorSmileTranslateY+300) + ')');

const versicolorMouth3 = versicolorSmileGroup3.append("path")
    .attr("d", d3.arc()({
        innerRadius: smileInnerRadius,
        outerRadius: smileOuterRadius,
        startAngle: smileStartAngle,
        endAngle: smileEndAngle
    }));

const versicolorSmileGroup4 = versicolorContainer.append('g')
    .attr('transform', 'translate(' + (versicolorSmileTranslateX+300) + ', ' + (versicolorSmileTranslateY+300) + ')');

const versicolorMouth4 = versicolorSmileGroup4.append("path")
    .attr("d", d3.arc()({
        innerRadius: smileInnerRadius,
        outerRadius: smileOuterRadius,
        startAngle: smileStartAngle,
        endAngle: smileEndAngle
    }));

// The nose, a polygon
let versicolorNosePoint1_1 = "150,105";
let versicolorNosePoint2_1 = "175,125";
let versicolorNosePoint3_1 = "125,125";

let versicolorNosePoint1_2 = "450,105";
let versicolorNosePoint2_2 = "475,125";
let versicolorNosePoint3_2 = "425,125";

let versicolorNosePoint1_3 = "150,405";
let versicolorNosePoint2_3 = "175,425";
let versicolorNosePoint3_3 = "125,425";

let versicolorNosePoint1_4 = "450,405";
let versicolorNosePoint2_4 = "475,425";
let versicolorNosePoint3_4 = "425,425";


const versicolorNose1 = versicolorContainer.append("polygon")
    .attr("points", versicolorNosePoint1_1 + " " + versicolorNosePoint2_1 + " " + versicolorNosePoint3_1)
    .attr("stroke", noseStrokeColor)
    .attr("fill", noseFillColor)
    .attr("stroke-width", noseStrokeWidth);

const versicolorNose2 = versicolorContainer.append("polygon")
    .attr("points", versicolorNosePoint1_2 + " " + versicolorNosePoint2_2 + " " + versicolorNosePoint3_2)
    .attr("stroke", noseStrokeColor)
    .attr("fill", noseFillColor)
    .attr("stroke-width", noseStrokeWidth);

const versicolorNose3 = versicolorContainer.append("polygon")
    .attr("points", versicolorNosePoint1_3 + " " + versicolorNosePoint2_3 + " " + versicolorNosePoint3_3)
    .attr("stroke", noseStrokeColor)
    .attr("fill", noseFillColor)
    .attr("stroke-width", noseStrokeWidth);

const versicolorNose4 = versicolorContainer.append("polygon")
    .attr("points", versicolorNosePoint1_4 + " " + versicolorNosePoint2_4 + " " + versicolorNosePoint3_4)
    .attr("stroke", noseStrokeColor)
    .attr("fill", noseFillColor)
    .attr("stroke-width", noseStrokeWidth);


/** Change the faces to match the data **/
// A subset of the data from the spreadsheet for Iris-versicolor represented as a 2d array
// Each row has 4 values: sepalLength, sepalWidth, petalLength, and petalWidth
/* The max and min values of each feature are:
 * sepalLength: 4.3 - 7.9
 * sepalWidth:  2.0 - 4.4
 * petalLength: 1.0 - 6.9
 * petalWidth:  0.1 - 2.5
 */ 
let versicolorData = [
    [7,3.2,4.7,1.4],
    [6.4,3.2,4.5,1.5],
    [6.9,3.1,4.9,1.5],
    [5.5,2.3,4,1.3]
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
let versicolorSepalLengthPercent1 = (versicolorData[0][0] - 4.3)/sepalLengthRange;
let versicolorHeadWidth1 = (versicolorSepalLengthPercent1 * 100) + 50;
versicolorHead1.attr("rx", versicolorHeadWidth1);

let versicolorSepalLengthPercent2 = (versicolorData[1][0] - 4.3)/sepalLengthRange;
let versicolorHeadWidth2 = (versicolorSepalLengthPercent2 * 100) + 50;
versicolorHead2.attr("rx", versicolorHeadWidth2);

let versicolorSepalLengthPercent3 = (versicolorData[2][0] - 4.3)/sepalLengthRange;
let versicolorHeadWidth3 = (versicolorSepalLengthPercent3 * 100) + 50;
versicolorHead3.attr("rx", versicolorHeadWidth3);

let versicolorSepalLengthPercent4 = (versicolorData[3][0] - 4.3)/sepalLengthRange;
let versicolorHeadWidth4 = (versicolorSepalLengthPercent4 * 100) + 50;
versicolorHead4.attr("rx", versicolorHeadWidth4);

// Adjust the smile shape
let versicolorSepalWidthPercent1 = (versicolorData[0][1] - 2)/sepalWidthRange;
let versicolorSmileShape1 = (versicolorSepalWidthPercent1 * 50);
versicolorMouth1.attr("d", d3.arc()({
    innerRadius: versicolorSmileShape1,
    outerRadius: smileOuterRadius,
    startAngle: smileStartAngle,
    endAngle: smileEndAngle
}));

let versicolorSepalWidthPercent2 = (versicolorData[1][1] - 2)/sepalWidthRange;
let versicolorSmileShape2 = (versicolorSepalWidthPercent2 * 50);
versicolorMouth1.attr("d", d3.arc()({
    innerRadius: versicolorSmileShape2,
    outerRadius: smileOuterRadius,
    startAngle: smileStartAngle,
    endAngle: smileEndAngle
}));

let versicolorSepalWidthPercent3 = (versicolorData[2][1] - 2)/sepalWidthRange;
let versicolorSmileShape3 = (versicolorSepalWidthPercent3 * 50);
versicolorMouth1.attr("d", d3.arc()({
    innerRadius: versicolorSmileShape3,
    outerRadius: smileOuterRadius,
    startAngle: smileStartAngle,
    endAngle: smileEndAngle
}));

let versicolorSepalWidthPercent4 = (versicolorData[3][1] - 2)/sepalWidthRange;
let versicolorSmileShape4 = (versicolorSepalWidthPercent4 * 50);
versicolorMouth1.attr("d", d3.arc()({
    innerRadius: versicolorSmileShape4,
    outerRadius: smileOuterRadius,
    startAngle: smileStartAngle,
    endAngle: smileEndAngle
}));

// Adjust the nose height
let versicolorPetalLengthPercent1 = (versicolorData[0][2] - 1)/petalLengthRange;
let versicolorNoseHeight1 = (versicolorPetalLengthPercent1 * 100) + 75;
versicolorNosePoint1_1 = "150,"+versicolorNoseHeight1;
versicolorNose1.attr("points", versicolorNosePoint1_1 + " " + versicolorNosePoint2_1 + " " + versicolorNosePoint3_1);

let versicolorPetalLengthPercent2 = (versicolorData[1][2] - 1)/petalLengthRange;
let versicolorNoseHeight2 = (versicolorPetalLengthPercent2 * 100) + 75;
versicolorNosePoint1_2 = "450,"+versicolorNoseHeight2;
versicolorNose2.attr("points", versicolorNosePoint1_2 + " " + versicolorNosePoint2_2 + " " + versicolorNosePoint3_2);

let versicolorPetalLengthPercent3 = (versicolorData[2][2] - 1)/petalLengthRange;
let versicolorNoseHeight3 = (versicolorPetalLengthPercent3 * 100) + 75;
versicolorNosePoint1_3 = "150,"+(versicolorNoseHeight2+300);
versicolorNose3.attr("points", versicolorNosePoint1_3 + " " + versicolorNosePoint2_3 + " " + versicolorNosePoint3_3);

let versicolorPetalLengthPercent4 = (versicolorData[3][2] - 1)/petalLengthRange;
let versicolorNoseHeight4 = (versicolorPetalLengthPercent4 * 100) + 75;
versicolorNosePoint1_4 = "450,"+(versicolorNoseHeight4+300);
versicolorNose4.attr("points", versicolorNosePoint1_4 + " " + versicolorNosePoint2_4 + " " + versicolorNosePoint3_4);

// Adjust the brow angles
// -38.1, 38.1
let versicolorPetalWidthPercent1 = (versicolorData[0][3] - 0.1)/petalWidthRange;
let versicolorBrowAngle1 = (versicolorPetalWidthPercent1 * 76.2) -38.1;
versicolorLeftEyebrow1.attr("transform", "rotate(" + versicolorBrowAngle1 + "," + (-browX - browWidth) + "," + browY + ")");
versicolorRightEyebrow1.attr("transform", "rotate(" + -versicolorBrowAngle1 + "," + (browX + browWidth) + "," + browY + ")");

let versicolorPetalWidthPercent2 = (versicolorData[1][3] - 0.1)/petalWidthRange;
let versicolorBrowAngle2 = (versicolorPetalWidthPercent2 * 76.2) -38.1;
versicolorLeftEyebrow2.attr("transform", "rotate(" + versicolorBrowAngle2 + "," + (-browX - browWidth) + "," + browY + ")");
versicolorRightEyebrow2.attr("transform", "rotate(" + -versicolorBrowAngle2 + "," + (browX + browWidth) + "," + browY + ")");

let versicolorPetalWidthPercent3 = (versicolorData[2][3] - 0.1)/petalWidthRange;
let versicolorBrowAngle3 = (versicolorPetalWidthPercent3 * 76.2) -38.1;
versicolorLeftEyebrow3.attr("transform", "rotate(" + versicolorBrowAngle3 + "," + (-browX - browWidth) + "," + browY + ")");
versicolorRightEyebrow3.attr("transform", "rotate(" + -versicolorBrowAngle3 + "," + (browX + browWidth) + "," + browY + ")");

let versicolorPetalWidthPercent4 = (versicolorData[3][3] - 0.1)/petalWidthRange;
let versicolorBrowAngle4 = (versicolorPetalWidthPercent4 * 76.2) -38.1;
versicolorLeftEyebrow4.attr("transform", "rotate(" + versicolorBrowAngle4 + "," + (-browX - browWidth) + "," + browY + ")");
versicolorRightEyebrow4.attr("transform", "rotate(" + -versicolorBrowAngle4 + "," + (browX + browWidth) + "," + browY + ")");

