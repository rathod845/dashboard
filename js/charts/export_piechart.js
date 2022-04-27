google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["countryname", "Export"],
    ["U S A", 81106.34],
    ["U ARAB EMTS", 29868.38],
    ["CHINA P RP", 22490.21],
    ["BANGLADESH PR", 18180.15],
    ["NETHERLAND", 13288.05],
  ]);

  var options = {
    title: "top export country",
    is3D: true,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("Export_pie")
  );
  chart.draw(data, options);
}
