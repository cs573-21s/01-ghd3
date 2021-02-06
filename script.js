console.log(d3); // test if d3 is loaded
// Add an SVG
// Add Rectangles
// Add Circles
// Add Lines
// Add Polygons

let width = 600;
let height = 600;
let margin = {
  top: 20, 
  right: 20, 
  bottom: 30, 
  left: 30
}
let selectedDay = 0;

let svg = d3.select('#wind-chart')
  .attr('width', width)
  .attr('height', height);

let slider = d3.select("#slider");
// let slider = document.getElementById("slider");

let chartInterval = null;

function nextDay() {
  LOAD_DATA.then(data => {
    selectedDay++;
    if (selectedDay >= data[0].length) {
      selectedDay = 0
    }
    displayForDay(selectedDay);
  })
}

function setSlider(range) {
  slider
    // .attr("disabled", null) // Thanks https://stackoverflow.com/questions/15322556/how-to-remove-an-attribute-in-d3-js
    .attr("max", range - 1)
    .attr("value", 0);
  // slider.setAttribute("max", range);
  // slider.setAttribute("value", 0);
  // slider.removeAttribute("disabled");
}

function placeSlider() {
  selectedDay = slider.attr("value") // Thanks https://stackoverflow.com/questions/43646573/d3-get-attributes-from-element
  displayForDay(selectedDay);
  chartInterval.stop();
  debugger;
}

const LOAD_DATA = new Promise((resolve, reject) => {
  Promise.all([
    d3.csv("50Hertz.csv"),
    d3.csv("Amprion.csv"),
    d3.csv("TenneTTSO.csv"),
    d3.csv("TransnetBW.csv"),
  ]).then(values => {
    // displayForDay(selectedDay);
    chartInterval = d3.interval(nextDay, 500);
    console.log('All data loaded!');
    setSlider(values[0].length)
    resolve(values);
  }).catch(err => {
    console.error(`Error loading the csv data: ${err}`);
    reject(err);
  })
});

function parseDay(dayObject){
  let timesArray = [];
  let date = dayObject["Date"]
  let parseDate = d3.utcParse("%d/%m/%Y %H:%M:%S")
  for (let time in dayObject ){
    if (time === "Date"){
      continue; // Don't include the date in the new array of values
    }
    timesArray.push({
      date: parseDate(`${date} ${time}`), 
      value: parseInt(dayObject[time])
    });
  }
  return timesArray;
}

function displayForDay(day) {
  svg.selectAll("g").remove()
  svg.selectAll("path").remove()

  LOAD_DATA
    .then(data => {
      buildVis([
        {
          name: "50Hertz",
          points: parseDay(data[0][day]),
          color: "steelblue"
        },
        {
          name: "Ampiron",
          points: parseDay(data[1][day]),
          color: "#ff00ff" // magenta
        },
        {
          name: "TenneTTSO",
          points: parseDay(data[2][day]),
          color: "green"
        },
        {
          name: "TransnetBW",
          points: parseDay(data[3][day]),
          color: "#9966ff" // purple
        },
      ]);
      document.getElementById('data-date').innerHTML = `Showing data for ${data[0][day]["Date"]}`
      slider.attr('value', selectedDay);
      // slider.setAttribute("value", selectedDay)
  });
}

function buildVis(dataArray){
  // Set a common scale and axes using the first dataset
  let x = d3.scaleUtc()
    .domain(d3.extent(dataArray[0].points, d => d.date))
    .range([margin.left, width - margin.right])

  let y = d3.scaleLinear()
    .domain([0, 750]).nice()  // observed max for 50 Hertz
    // .domain([0, d3.max(dataArray[0].points, d => d.value)]).nice()
    .range([height - margin.bottom, margin.top])

  xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))

  yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
    .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(dataArray[0].points.y))

  function addLine(name, companyData, color) {
    let line = d3.line()
      .defined(d => !isNaN(d.value))
      .x(d => x(d.date))
      .y(d => y(d.value));

    svg.append("path")
      .datum(companyData)
      .attr("fill", "none")
      .attr("stroke", color)
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("company-name", name)
      .attr("d", line);
  }

  function addCircles(name, companyData, color) {
    svg.append("g")
      .selectAll("dot")
      .data(companyData)
      .enter()
      .append("circle")
        .attr("cx", d => x(d.date))
        .attr("cy", d => y(d.value))
        .attr("r", 2)
        .attr("fill", color)
        .attr("company-name", name)
  }

  function addSymbols(name, companyData, color){
    svg.append("g").selectAll('path')
    .data(companyData)
    .enter()
    .append("path")
      .attr("class", "symbol-point")
      // .attr("d", d3.symbol().type(d3.symbolTriangle)())
      .attr("d", d3.symbol().type(getRandomSymbol())())
      .attr("transform", d => `translate(${x(d.date)},${y(d.value)})`) 
      .style("fill", color)
      .style("opacity", 0.4)
      .attr("company-name", name)
  }

  function addFill(name, companyData, color){
    svg.append("g").selectAll("path")
    .data(companyData)
    .enter()
    .append("path")
      .attr("d", d3.area()
        .x(d => x(d.date))
        .y0(d => height - margin.bottom)
        .y1(d => y(d.value))(companyData)
      )
      // .attr("points", d => d.map( d=> [x(d.time), y(d.value)].join(",")).join(" "))
      // .attr("stroke", "black")
      .attr("fill", color)
      // .attr("stroke-width", 2)
      .attr("fill-opacity", 0.01)
      .attr("company-name", name)
      // .attr("stroke-opacity", 0.5)
  }

  svg.append("g")
    .call(xAxis);

  svg.append("g")
    .call(yAxis);

  for (let dataset of dataArray) {
    let displayState = Math.floor(Math.random() * 4);
    switch (displayState) {
      case 0:
        addLine(dataset.name, dataset.points, dataset.color);
        break;
      case 1:
        addCircles(dataset.name, dataset.points, dataset.color);
        break;
      case 2:
        addSymbols(dataset.name, dataset.points, dataset.color);
        break;
      case 3:
        addFill(dataset.name, dataset.points, dataset.color);
        break;
    }
  }

  // svg.append("g").selectAll("path")
  //   .data(dataArray[0].points)
  //   .enter()
  //   .append("path")
  //     .attr("d", d3.area()
  //       .x(d => x(d.date))
  //       .y0(d => 0)
  //       .y1(d => y(d.value))(dataArray[0].points)
  //     )
  //     // .attr("points", d => d.map( d=> [x(d.time), y(d.value)].join(",")).join(" "))
  //     // .attr("stroke", "black")
  //     .attr("fill", "green")
  //     // .attr("stroke-width", 2)
  //     .attr("fill-opacity", 0.005)
  //     // .attr("stroke-opacity", 0.5)

  console.log('Line should be drawn now.');
}

function getRandomSymbol() {
  let symbols = [
    d3.symbolCircle, 
    d3.symbolCross, 
    d3.symbolDiamond, 
    d3.symbolSquare, 
    d3.symbolStar, 
    d3.symbolTriangle, 
    d3.symbolWye
  ];

  return symbols[Math.floor(Math.random() * symbols.length)];

}
