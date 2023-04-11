google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours Per Day'],
    ['School Work', 3],
    ['Free Time', 3.5],
    ['Sleep',       8],
    ['Gym',         2],
    ['Working',     4],
    ['Eating',    1.5],
    ['Animals',     2]
  ]);

  var options = {
    title: 'Working Hours',
    is3D: true
/*     pieSliceText: 'value',
    legend: { position: 'bottom' } */
  };

  var chart = new google.visualization.PieChart(document.getElementById('chartDiv'));

  chart.draw(data, options);
}
