google.charts.load("current", { packages: ["bar"] });
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    ["PC Group Description", "Import"],
    ["S5 - PETROLEUM: CRUDE", 128930],
    ["G6 - GOLD", 52290],
    ["S6 - PETROLEUM PRODUCTS", 42524],
    ["G5 - PEARL, PRECS, SEMIPRECS STONES", 33096],
    ["F1 - COAL,COKE AND BRIQUITTES ETC", 32587],
  ]);

  var options = {
    title: "import commudities",
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
    document.getElementById("import-Commodities-bar")
  );
  chart.draw(data, options);
}
