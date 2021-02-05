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

let svg = d3.select('#wind-chart')
  .attr('width', width)
  .attr('height', height);

let selectedDay = 0;
// displayForDay(selectedDay);

function nextDay() {
  selectedDay++;
  displayForDay(selectedDay);
}

const LOAD_DATA = new Promise((resolve, reject) => {
  Promise.all([
    d3.csv("50Hertz.csv"),
    d3.csv("Amprion.csv"),
    d3.csv("TenneTTSO.csv"),
    d3.csv("TransnetBW.csv"),
  ]).then(values => {
    displayForDay(selectedDay);
    console.log('All data loaded!');
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
          color: "red"
        },
        {
          name: "TenneTTSO",
          points: parseDay(data[2][day]),
          color: "green"
        },
        {
          name: "TransnetBW",
          points: parseDay(data[3][day]),
          color: "purple"
        },
      ]);
  });
}

function buildVis(dataArray){
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
    // let x = d3.scaleUtc()
    //   .domain(d3.extent(companyData, d => d.date))
    //   .range([margin.left, width - margin.right])

    // let y = d3.scaleLinear()
    //   .domain([0, 750]).nice()  // observed max for 50 Hertz
    //   // .domain([0, d3.max(companyData, d => d.value)]).nice()
    //   .range([height - margin.bottom, margin.top])

    let line = d3.line()
      .defined(d => !isNaN(d.value))
      .x(d => x(d.date))
      .y(d => y(d.value))

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
  // let line = d3.line()
  //   .defined(d => !isNaN(d.value))
  //   .x(d => x(d.date))
  //   .y(d => y(d.value))

  svg.append("g")
    .call(xAxis);

  svg.append("g")
    .call(yAxis);

  // svg.append("path")
  //   .datum(dataPoints)
  //   .attr("fill", "none")
  //   .attr("stroke", "steelblue")
  //   .attr("stroke-width", 1.5)
  //   .attr("stroke-linejoin", "round")
  //   .attr("stroke-linecap", "round")
  //   .attr("d", line);

  for (let dataset of dataArray) {
    addLine(dataset.name, dataset.points, dataset.color);
  }
  console.log('Line should be drawn now.');
}

// d3.interval(nextDay, 500)