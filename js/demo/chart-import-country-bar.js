var margin = { top: 20, right: 30, bottom: 40, left: 90 },
  width = 360 - margin.left - margin.right,
  height = 300 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3
  .select("#Import-country-bar")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
var tooltip = d3.select("body").append("div").attr("class", "toolTip");

// Parse the Data
d3.csv("Imports Top 5 Countries.csv", function (data) {
  // Add X axis
  var x = d3.scaleLinear().domain([0, 110000]).range([0, width]);
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

  // Y axis
  var y = d3
    .scaleBand()
    .range([0, height])
    .domain(
      data.map(function (d) {
        return d.countryname;
      })
    )
    .padding(0.1);
  svg.append("g").call(d3.axisLeft(y));

  //Bars
  svg
    .selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", x(0))
    .attr("y", function (d) {
      return y(d.countryname);
    })
    .attr("width", function (d) {
      return x(d.Import);
    })
    .attr("height", y.bandwidth())
    .attr("fill", "#69b3a2")
    .on("mousemove", function (d) {
      tooltip
        .style("left", d3.event.pageX - 50 + "px")
        .style("top", d3.event.pageY - 70 + "px")
        .style("display", "inline-block")
        .html(d.countryname + "<br>" + "$" + d.Import + "M");
    })
    .on("mouseout", function (d) {
      tooltip.style("display", "none");
    });
});
