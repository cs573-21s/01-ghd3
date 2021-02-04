/**
 * Virginica_d3
 * - Andrew Nolan
 * This file handles the d3 code for generating the  chernoff faces for viriginca iris
 */

// The svg and it's border
const virginicaContainer = d3.select("#virginica")
    .append("svg")
    .attr("width", 600)
    .attr("height", 600)
    .style("background-color", "lightblue");

const virginicaContainerBorder = virginicaContainer.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("height", 600)
    .attr("width", 600)
    .attr("stroke", "black")
    .style("fill", "none")
    .style("stroke-width", 2);

const virginicaText = virginicaContainer.append("text")
    .attr("dx", 10)
    .attr("dy", 30)
    .text("Iris Verginica");


// The head, an ellipse
let virginicaHeadRadiusX = 100;
let virginicaHeadRadiusY = 100;
let virginicaHeadCenterX = 150;
let virginicaHeadCenterY = 150;
let virginicaHeadColor = "yellow";
let virginicaHeadStrokeColor = "black";

const virginicaHead1 = virginicaContainer.append("ellipse")
    .attr("cx", virginicaHeadCenterX)
    .attr("cy", virginicaHeadCenterY)
    .attr("rx", virginicaHeadRadiusX)
    .attr("ry", virginicaHeadRadiusY)
    .attr("fill", virginicaHeadColor)
    .attr("stroke", virginicaHeadStrokeColor);

const virginicaHead2 = virginicaContainer.append("ellipse")
    .attr("cx", virginicaHeadCenterX+300)
    .attr("cy", virginicaHeadCenterY)
    .attr("rx", virginicaHeadRadiusX)
    .attr("ry", virginicaHeadRadiusY)
    .attr("fill", virginicaHeadColor)
    .attr("stroke", virginicaHeadStrokeColor);

const virginicaHead3 = virginicaContainer.append("ellipse")
    .attr("cx", virginicaHeadCenterX)
    .attr("cy", virginicaHeadCenterY+300)
    .attr("rx", virginicaHeadRadiusX)
    .attr("ry", virginicaHeadRadiusY)
    .attr("fill", virginicaHeadColor)
    .attr("stroke", virginicaHeadStrokeColor);

const virginicaHead4 = virginicaContainer.append("ellipse")
    .attr("cx", virginicaHeadCenterX+300)
    .attr("cy", virginicaHeadCenterY+300)
    .attr("rx", virginicaHeadRadiusX)
    .attr("ry", virginicaHeadRadiusY)
    .attr("fill", virginicaHeadColor)
    .attr("stroke", virginicaHeadStrokeColor);

// The eyes, circles
let virginicaEyeGroupTranslationX = 150;
let virginicaEyeGroupTranslationY = 100;

const virginicaEyeGroup1 = virginicaContainer.append('g')
    .attr('transform', 'translate(' + virginicaEyeGroupTranslationX + ',' + virginicaEyeGroupTranslationY + ')');

const virginicaLeftEye1 = virginicaEyeGroup1.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", -eyeSeparation)
    .attr("fill", eyeFillColor);

const virginicaRightEye1 = virginicaEyeGroup1.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", eyeSeparation)
    .attr("fill", eyeFillColor);

const virginicaEyeGroup2 = virginicaContainer.append('g')
    .attr('transform', 'translate(' + (virginicaEyeGroupTranslationX + 300) + ',' + virginicaEyeGroupTranslationY + ')');

const virginicaLeftEye2 = virginicaEyeGroup2.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", -eyeSeparation)
    .attr("fill", eyeFillColor);

const virginicaRightEye2 = virginicaEyeGroup2.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", eyeSeparation)
    .attr("fill", eyeFillColor);

const virginicaEyeGroup3 = virginicaContainer.append('g')
    .attr('transform', 'translate(' + virginicaEyeGroupTranslationX + ',' + (virginicaEyeGroupTranslationY+300) + ')');

const virginicaLeftEye3 = virginicaEyeGroup3.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", -eyeSeparation)
    .attr("fill", eyeFillColor);

const virginicaRightEye3 = virginicaEyeGroup3.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", eyeSeparation)
    .attr("fill", eyeFillColor);

const virginicaEyeGroup4 = virginicaContainer.append('g')
    .attr('transform', 'translate(' + (virginicaEyeGroupTranslationX+300) + ',' + (virginicaEyeGroupTranslationY+300) + ')');

const virginicaLeftEye4 = virginicaEyeGroup4.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", -eyeSeparation)
    .attr("fill", eyeFillColor);

const virginicaRightEye4 = virginicaEyeGroup4.append('circle')
    .attr("r", eyeRadius)
    .attr("cx", eyeSeparation)
    .attr("fill", eyeFillColor);

// The eyebrows, rectangles
const virginicaLeftEyebrow1 = virginicaEyeGroup1.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', -browX - browWidth)
    .attr('y', browY);

const virginicaRightEyebrow1 = virginicaEyeGroup1.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', browX)
    .attr('y', browY);

const virginicaLeftEyebrow2 = virginicaEyeGroup2.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', -browX - browWidth)
    .attr('y', browY);

const virginicaRightEyebrow2 = virginicaEyeGroup2.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', browX)
    .attr('y', browY);

const virginicaLeftEyebrow3 = virginicaEyeGroup3.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', -browX - browWidth)
    .attr('y', browY);

const virginicaRightEyebrow3 = virginicaEyeGroup3.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', browX)
    .attr('y', browY);

const virginicaLeftEyebrow4 = virginicaEyeGroup4.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', -browX - browWidth)
    .attr('y', browY);

const virginicaRightEyebrow4 = virginicaEyeGroup4.append('rect')
    .attr('width', browWidth)
    .attr('height', browHeight)
    .attr('x', browX)
    .attr('y', browY);

// The smile, a path
let virginicaSmileTranslateX = 150;
let virginicaSmileTranslateY = 150;

const virginicaSmileGroup1 = virginicaContainer.append('g')
    .attr('transform', 'translate(' + virginicaSmileTranslateX + ', ' + virginicaSmileTranslateY + ')');

const virginicaMouth1 = virginicaSmileGroup1.append("path")
    .attr("d", d3.arc()({
        innerRadius: smileInnerRadius,
        outerRadius: smileOuterRadius,
        startAngle: smileStartAngle,
        endAngle: smileEndAngle
    }));

const virginicaSmileGroup2 = virginicaContainer.append('g')
    .attr('transform', 'translate(' + (virginicaSmileTranslateX+300) + ', ' + virginicaSmileTranslateY + ')');

const virginicaMouth2 = virginicaSmileGroup2.append("path")
    .attr("d", d3.arc()({
        innerRadius: smileInnerRadius,
        outerRadius: smileOuterRadius,
        startAngle: smileStartAngle,
        endAngle: smileEndAngle
    }));

const virginicaSmileGroup3 = virginicaContainer.append('g')
    .attr('transform', 'translate(' + virginicaSmileTranslateX + ', ' + (virginicaSmileTranslateY+300) + ')');

const virginicaMouth3 = virginicaSmileGroup3.append("path")
    .attr("d", d3.arc()({
        innerRadius: smileInnerRadius,
        outerRadius: smileOuterRadius,
        startAngle: smileStartAngle,
        endAngle: smileEndAngle
    }));

const virginicaSmileGroup4 = virginicaContainer.append('g')
    .attr('transform', 'translate(' + (virginicaSmileTranslateX+300) + ', ' + (virginicaSmileTranslateY+300) + ')');

const virginicaMouth4 = virginicaSmileGroup4.append("path")
    .attr("d", d3.arc()({
        innerRadius: smileInnerRadius,
        outerRadius: smileOuterRadius,
        startAngle: smileStartAngle,
        endAngle: smileEndAngle
    }));

// The nose, a polygon
let virginicaNosePoint1_1 = "150,105";
let virginicaNosePoint2_1 = "175,125";
let virginicaNosePoint3_1 = "125,125";

let virginicaNosePoint1_2 = "450,105";
let virginicaNosePoint2_2 = "475,125";
let virginicaNosePoint3_2 = "425,125";

let virginicaNosePoint1_3 = "150,405";
let virginicaNosePoint2_3 = "175,425";
let virginicaNosePoint3_3 = "125,425";

let virginicaNosePoint1_4 = "450,405";
let virginicaNosePoint2_4 = "475,425";
let virginicaNosePoint3_4 = "425,425";


const virginicaNose1 = virginicaContainer.append("polygon")
    .attr("points", virginicaNosePoint1_1 + " " + virginicaNosePoint2_1 + " " + virginicaNosePoint3_1)
    .attr("stroke", noseStrokeColor)
    .attr("fill", noseFillColor)
    .attr("stroke-width", noseStrokeWidth);

const virginicaNose2 = virginicaContainer.append("polygon")
    .attr("points", virginicaNosePoint1_2 + " " + virginicaNosePoint2_2 + " " + virginicaNosePoint3_2)
    .attr("stroke", noseStrokeColor)
    .attr("fill", noseFillColor)
    .attr("stroke-width", noseStrokeWidth);

const virginicaNose3 = virginicaContainer.append("polygon")
    .attr("points", virginicaNosePoint1_3 + " " + virginicaNosePoint2_3 + " " + virginicaNosePoint3_3)
    .attr("stroke", noseStrokeColor)
    .attr("fill", noseFillColor)
    .attr("stroke-width", noseStrokeWidth);

const virginicaNose4 = virginicaContainer.append("polygon")
    .attr("points", virginicaNosePoint1_4 + " " + virginicaNosePoint2_4 + " " + virginicaNosePoint3_4)
    .attr("stroke", noseStrokeColor)
    .attr("fill", noseFillColor)
    .attr("stroke-width", noseStrokeWidth);


/** Change the faces to match the data **/
// A subset of the data from the spreadsheet for Iris-virginica represented as a 2d array
// Each row has 4 values: sepalLength, sepalWidth, petalLength, and petalWidth
/* The max and min values of each feature are:
 * sepalLength: 4.3 - 7.9
 * sepalWidth:  2.0 - 4.4
 * petalLength: 1.0 - 6.9
 * petalWidth:  0.1 - 2.5
 */ 
let virginicaData = [
    [6.3,3.3,6,2.5],
    [5.8,2.7,5.1,1.9],
    [7.1,3,5.9,2.1],
    [6.3,2.9,5.6,1.8]
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
let virginicaSepalLengthPercent1 = (virginicaData[0][0] - 4.3)/sepalLengthRange;
let virginicaHeadWidth1 = (virginicaSepalLengthPercent1 * 100) + 50;
virginicaHead1.attr("rx", virginicaHeadWidth1);

let virginicaSepalLengthPercent2 = (virginicaData[1][0] - 4.3)/sepalLengthRange;
let virginicaHeadWidth2 = (virginicaSepalLengthPercent2 * 100) + 50;
virginicaHead2.attr("rx", virginicaHeadWidth2);

let virginicaSepalLengthPercent3 = (virginicaData[2][0] - 4.3)/sepalLengthRange;
let virginicaHeadWidth3 = (virginicaSepalLengthPercent3 * 100) + 50;
virginicaHead3.attr("rx", virginicaHeadWidth3);

let virginicaSepalLengthPercent4 = (virginicaData[3][0] - 4.3)/sepalLengthRange;
let virginicaHeadWidth4 = (virginicaSepalLengthPercent4 * 100) + 50;
virginicaHead4.attr("rx", virginicaHeadWidth4);

// Adjust the smile shape
let virginicaSepalWidthPercent1 = (virginicaData[0][1] - 2)/sepalWidthRange;
let virginicaSmileShape1 = (virginicaSepalWidthPercent1 * 50);
virginicaMouth1.attr("d", d3.arc()({
    innerRadius: virginicaSmileShape1,
    outerRadius: smileOuterRadius,
    startAngle: smileStartAngle,
    endAngle: smileEndAngle
}));

let virginicaSepalWidthPercent2 = (virginicaData[1][1] - 2)/sepalWidthRange;
let virginicaSmileShape2 = (virginicaSepalWidthPercent2 * 50);
virginicaMouth1.attr("d", d3.arc()({
    innerRadius: virginicaSmileShape2,
    outerRadius: smileOuterRadius,
    startAngle: smileStartAngle,
    endAngle: smileEndAngle
}));

let virginicaSepalWidthPercent3 = (virginicaData[2][1] - 2)/sepalWidthRange;
let virginicaSmileShape3 = (virginicaSepalWidthPercent3 * 50);
virginicaMouth1.attr("d", d3.arc()({
    innerRadius: virginicaSmileShape3,
    outerRadius: smileOuterRadius,
    startAngle: smileStartAngle,
    endAngle: smileEndAngle
}));

let virginicaSepalWidthPercent4 = (virginicaData[3][1] - 2)/sepalWidthRange;
let virginicaSmileShape4 = (virginicaSepalWidthPercent4 * 50);
virginicaMouth1.attr("d", d3.arc()({
    innerRadius: virginicaSmileShape4,
    outerRadius: smileOuterRadius,
    startAngle: smileStartAngle,
    endAngle: smileEndAngle
}));

// Adjust the nose height
let virginicaPetalLengthPercent1 = (virginicaData[0][2] - 1)/petalLengthRange;
let virginicaNoseHeight1 = (virginicaPetalLengthPercent1 * 100) + 75;
virginicaNosePoint1_1 = "150,"+virginicaNoseHeight1;
virginicaNose1.attr("points", virginicaNosePoint1_1 + " " + virginicaNosePoint2_1 + " " + virginicaNosePoint3_1);

let virginicaPetalLengthPercent2 = (virginicaData[1][2] - 1)/petalLengthRange;
let virginicaNoseHeight2 = (virginicaPetalLengthPercent2 * 100) + 75;
virginicaNosePoint1_2 = "450,"+virginicaNoseHeight2;
virginicaNose2.attr("points", virginicaNosePoint1_2 + " " + virginicaNosePoint2_2 + " " + virginicaNosePoint3_2);

let virginicaPetalLengthPercent3 = (virginicaData[2][2] - 1)/petalLengthRange;
let virginicaNoseHeight3 = (virginicaPetalLengthPercent3 * 100) + 75;
virginicaNosePoint1_3 = "150,"+(virginicaNoseHeight2+300);
virginicaNose3.attr("points", virginicaNosePoint1_3 + " " + virginicaNosePoint2_3 + " " + virginicaNosePoint3_3);

let virginicaPetalLengthPercent4 = (virginicaData[3][2] - 1)/petalLengthRange;
let virginicaNoseHeight4 = (virginicaPetalLengthPercent4 * 100) + 75;
virginicaNosePoint1_4 = "450,"+(virginicaNoseHeight4+300);
virginicaNose4.attr("points", virginicaNosePoint1_4 + " " + virginicaNosePoint2_4 + " " + virginicaNosePoint3_4);

// Adjust the brow angles
// -38.1, 38.1
let virginicaPetalWidthPercent1 = (virginicaData[0][3] - 0.1)/petalWidthRange;
let virginicaBrowAngle1 = (virginicaPetalWidthPercent1 * 76.2) -38.1;
virginicaLeftEyebrow1.attr("transform", "rotate(" + virginicaBrowAngle1 + "," + (-browX - browWidth) + "," + browY + ")");
virginicaRightEyebrow1.attr("transform", "rotate(" + -virginicaBrowAngle1 + "," + (browX + browWidth) + "," + browY + ")");

let virginicaPetalWidthPercent2 = (virginicaData[1][3] - 0.1)/petalWidthRange;
let virginicaBrowAngle2 = (virginicaPetalWidthPercent2 * 76.2) -38.1;
virginicaLeftEyebrow2.attr("transform", "rotate(" + virginicaBrowAngle2 + "," + (-browX - browWidth) + "," + browY + ")");
virginicaRightEyebrow2.attr("transform", "rotate(" + -virginicaBrowAngle2 + "," + (browX + browWidth) + "," + browY + ")");

let virginicaPetalWidthPercent3 = (virginicaData[2][3] - 0.1)/petalWidthRange;
let virginicaBrowAngle3 = (virginicaPetalWidthPercent3 * 76.2) -38.1;
virginicaLeftEyebrow3.attr("transform", "rotate(" + virginicaBrowAngle3 + "," + (-browX - browWidth) + "," + browY + ")");
virginicaRightEyebrow3.attr("transform", "rotate(" + -virginicaBrowAngle3 + "," + (browX + browWidth) + "," + browY + ")");

let virginicaPetalWidthPercent4 = (virginicaData[3][3] - 0.1)/petalWidthRange;
let virginicaBrowAngle4 = (virginicaPetalWidthPercent4 * 76.2) -38.1;
virginicaLeftEyebrow4.attr("transform", "rotate(" + virginicaBrowAngle4 + "," + (-browX - browWidth) + "," + browY + ")");
virginicaRightEyebrow4.attr("transform", "rotate(" + -virginicaBrowAngle4 + "," + (browX + browWidth) + "," + browY + ")");

