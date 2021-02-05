Last login: Thu Feb  4 13:44:52 on ttys000
steph@Stephanies-MBP CS573 % touch index.html
steph@Stephanies-MBP CS573 % ls
index.html
steph@Stephanies-MBP CS573 % vim index.html



















<script src="https://d3js.org/d3.v6.min.js"></script>

<svg id="vis"></svg>

<script>

  console.log(d3);

  var c_data = [15, 18, 23, 35, 46, 67, 90]
  var s_data = [5, 7.5, 10, 12.5, 15, 17.5, 20, 22.5, 25, 27.5, 30, 32.5, 35, 37.5, 40, 42.5, 45, 47.5, 50, 52.5, 55, 57.5, 60, 62.5, 65, 67.5, 70, 72.5, 75, 77.5, 80, 82.5, 85, 87.5, 90, 92.5, 95]

  var line_points = [
    [0, 250],
    [100, 175],
    [200, 250],
    [300, 175],
    [400, 250]
  ];

  var svg = d3.select("#vis")
    .attr('width', 400)
    .attr('height', 400);

  var xscale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 400]);

  var yscale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 400]);

  svg.selectAll('circle')
    .data(c_data)
    .enter().append('circle')
    .attr('cx', d=> xscale(d))
    .attr('cy', 100)
    .attr('r', 20)
    .attr('fill', 'brown')
    .style('opacity', .5)
    .on('mouseover', function(e, d) {
      d3.select(this).attr('r', '40').style('stroke', 'black');
    }).on('mouseout', function() {
      d3.select(this)
        .attr('r', '20').style('stroke', 'none');
    })

  svg.selectAll('rect')
    .data(s_data)
    .enter().append('rect')
    .attr('x', d=> xscale(d))
    .attr('y', 150)
    .attr('width', 10)
    .attr('height', 10)
    .attr('stroke', 'black')
    .attr('fill', 'white')
    .on('mouseover', function(e, d) {
      d3.select(this).attr('fill', 'black').attr('stroke', 'white');
    });

  var lineGenerator = d3.line()
    .curve(d3.curveCardinal);
     svg.append('path')
    .attr('d', lineGenerator(line_points))
    .attr('stroke', 'cadetblue')
    .attr('stroke-width', 5)
    .attr('fill', 'none');

  svg.append('line')
    .attr('x1', 150)
    .attr('y1', 315)
    .attr('x2', 250)
    .attr('y2', 315)
    .attr('stroke', 'cadetblue')
    .attr('stroke-width', 10)
    .attr('fill', 'none');

  svg.append('polygon')
    .attr('points', '85, 215, 145, 250, 85, 285, 25, 250, 85, 215')
    .style('stroke', 'black')
    .style('stroke-width', 2)
    .style('fill', 'lightyellow')
    .transition().style('fill', 'cadetblue').duration(10000);

svg.append('polygon')
    .attr('points', '315, 215, 375, 250, 315, 285, 255, 250, 315, 215')
    .style('stroke', 'black')
    .style('stroke-width', 2)
    .style('fill', 'lightyellow')
    .transition().style('fill', 'cadetblue').duration(10000);

</script>
