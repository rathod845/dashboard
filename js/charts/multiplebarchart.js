google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart3);

function drawChart3() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "import Billions of US $", "export Billions of US $"],
    ["2020", 482, 474],
    ["2019", 601, 529],
    ["2018", 639, 538],
    ["2017", 582, 498],
    ["2016", 480, 439],
    ["2015", 465, 416],
    ["2014", 529, 468],
    ["2013", 527, 472],
    ["2012", 571, 448],
    ["2011", 566, 447],
    ["2010", 449, 375],
    ["2009", 347, 273],
    ["2008", 350, 288],
    ["2007", 302, 253],
    ["2006", 229, 199],
    ["2005", 183, 160],
    ["2004", 139, 126],
    ["2003", 95, 90],
    ["2002", 78, 73],
    ["2001", 65, 60],
    ["2000", 65, 60],
    ["1999", 61, 52],
    ["1998", 53, 46],
    ["1997", 49, 44],
    ["1996", 45, 40],
    ["1995", 43, 39],
    ["1994", 33, 32],
    ["1993", 27, 27],
    ["1992", 27, 25],
    ["1991", 22, 22],
    ["1990", 27, 22],
    ["1989", 24, 20],
    ["1988", 22, 17],
    ["1987", 19, 15],
    ["1986", 17, 12],
    ["1985", 17, 12],
    ["1984", 16, 13],
    ["1983", 17, 12],
    ["1982", 16, 12],
    ["1981", 16, 11],
    ["1980", 17, 11],
    ["1979", 12, 10],
    ["1978", 9, 8],
    ["1977", 7, 7],
    ["1976", 6, 6],
    ["1975", 6, 5],
    ["1974", 5, 4],
    ["1973", 4, 3],
    ["1972", 2, 2],
    ["1971", 2, 2],
    ["1970", 2, 2],
    ["1969", 2, 2],
    ["1968", 2, 2],
    ["1967", 2, 2],
    ["1966", 3, 1],
    ["1965", 3, 1],
    ["1964", 3, 2],
    ["1963", 2, 2],
    ["1962", 2, 1],
    ["1961", 2, 1],
    ["1960", 2, 1],
  ]);

  var options = {
    title: "Export & import comparison",
    curveType: "function",
    legend: { position: "bottom" },
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart.draw(data, options);
}