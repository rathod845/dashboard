google.charts.load("current", { packages: ["bar"] });
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    ["countryname", "Export"],
    ["U S A", 81106.34],
    ["U ARAB EMTS", 29868.38],
    ["CHINA P RP", 22490.21],
    ["BANGLADESH PR", 18180.15],
    ["NETHERLAND", 13288.05],
  ]);

  var options = {
    title: "export country",
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
    document.getElementById("export-country-bar")
  );
  chart.draw(data, options);
}
