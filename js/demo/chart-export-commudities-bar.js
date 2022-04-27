google.charts.load("current", { packages: ["bar"] });
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    ["PC Group Description", "Export0"],
    ["S6 - PETROLEUM PRODUCTS", 69136],
    ["G5 - PEARL, PRECS, SEMIPRECS STONES", 29659],
    ["L3 - IRON AND STEEL", 24387],
    ["H8 - DRUG FORMULATIONS, BIOLOGICALS", 20254],
    ["G9 - GOLD AND OTH  METL JWLERY", 10048],
    ["L5 - ALUMINIUM, ", 1974],
  ]);

  var options = {
    title: "export-commudities",
    width: 400,
    height: 300,
    legend: { position: "none" },
    chart: {},
    bars: "horizontal", // Required for Material Bar Charts.
    axes: {
      x: {
        0: { side: "top", label: "USD dollar" }, // Top x-axis.
      },
    },
    bar: { groupWidth: "90%" },
  };

  var chart = new google.charts.Bar(
    document.getElementById("export-Commodities-bar")
  );
  chart.draw(data, options);
}
