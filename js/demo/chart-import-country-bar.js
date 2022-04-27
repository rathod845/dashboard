google.charts.load("current", { packages: ["bar"] });
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    ["countryname", "Import"],
    ["CHINA P RP", 102646],
    ["U ARAB EMTS", 47999],
    ["U S A", 46365],
    ["SAUDI ARAB", 37078],
    ["IRAQ", 33854],
  ]);

  var options = {
    title: "import country",
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
    document.getElementById("import-country-bar")
  );
  chart.draw(data, options);
}
