$(document).ready(function() {
  console.log(d3); // test if d3 is loaded
  // Add an SVG
  // Add Rectangles
  // Add Circles
  // Add Lines
  // Add Polygons

  console.log(d3);

  var data = [10, 78, 15, 67, 100];

  var svg = d3.select('#us-map #g5');

  svg.append('circle')
    .attr('cx', '75%')
    .attr('cy', '50%')
    .attr('r', 8)
    .attr('fill', '#FFFFFF')
    .attr('stroke', '#FFFFFF')
    .attr('data-info', "Circle<br/> Custom element");

  svg.append('circle')
    .attr('cx', '75%')
    .attr('cy', '50%')
    .attr('r', 4)
    .attr('fill', '#000000')
    .attr('stroke', '#aaaaaa')
    .attr('data-info', "Circle<br/> Custom element");

  svg.append('rect')
    .attr('x', '71%')
    .attr('y', '66%')
    .attr('height', '5%')
    .attr('width', '6.5%')
    .attr('fill', '#ff000077')
    .attr('stroke', '#aaaaaa')
    .attr('data-info', "Rectangle<br/> Custom element");
  svg.append('text')
    .attr('x', '73%')
    .attr('y', '69.5%')
    .attr('font-weight', 'bold')
    .attr('fill', '#ffffff')
    .text("KFC");

  // svg.append('line')
  //   .attr('x1', 0)
  //   .attr('y1', 590)
  //   .attr('x2', 959)
  //   .attr('y2', 590)
  //   .attr('stroke', '#333333');


  var points = [
    [
      [840, 400],
      [845, 370],
      [836, 350],
      [843, 320],
      [840, 300]
    ],
    [
      [850, 400],
      [855, 370],
      [846, 350],
      [853, 320],
      [850, 300]
    ],
    [
      [830, 400],
      [835, 370],
      [826, 350],
      [833, 320],
      [830, 300]
    ]
  ];

  var lineGenerator = d3.line().curve(d3.curveCardinal);

  var pathData;

  for (var i = 0; i < points.length; i++) {
    pathData = lineGenerator(points[i]);

    svg.append('path')
      .attr('class', 'steam-icon')
      .attr('d', pathData)
      .attr('height', 200)
      .attr('width', 700)
      .attr('x', '85%')
      .attr('y', '50%')
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 3)
      .attr('fill', 'transparent')
      .attr('data-info', "Curved line! <br/> Custom element");
  }

  // svg.selectAll('circle')
  //   .data(data)
  //   .enter().append('circle')
  //   .attr('cy', 100)
  //   .attr('cx', function(d) {
  //     console.log(d);
  //     return xscale(d);
  //   })
  //   .attr('r', 10)
  //   .attr('fill', 'steelblue')
  //   .on('mouseover', function(e, d) {
  //     d3.select(this).attr('fill', 'brown');
  //
  //     d3.select('#value').text(d);
  //   }).on('mouseout', function() {
  //     d3.select(this)
  //       .attr('fill', 'steelblue');
  //   });
  //
  //
  // var svg = d3.select('#vis')
  //   .attr('width', 1000)
  //   .attr('height', 800);

  var stateInfo = d3.select("#state-info");

  d3.selectAll('#g5 path, #g5 circle, #g5 rect')
    .on('mouseover', function(e, d) {
      stateInfo.html(d3.select(this).node().dataset.info);
    }).on('mouseout', function() {
      stateInfo.html("Hover over a state.<br/> (Mouse Over)");
    });
});
