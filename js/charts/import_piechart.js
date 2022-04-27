google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["countryname", "Import"],
    ["CHINA P RP", 102646],
    ["U ARAB EMTS", 47999],
    ["U S A", 46365],
    ["SAUDI ARAB", 37078],
    ["IRAQ", 33854],
  ]);

  var options = {
    title: "top import country",
    is3D: true,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("Import_pie")
  );
  chart.draw(data, options);
}
