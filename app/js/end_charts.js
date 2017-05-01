$(document).ready(function(){

    // Four chart

    dat = [['t', 'f(t)'],]
    for (var i = 0; i < 40; i++) {
      dat.push([i, 1]);
    }

    drawChart(dat, 'Итоговый график отказов системы', 'end_charts')

});

function drawChart(dat, title, idElem){
  // Отрисовка графика
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawOneCharts);

  function drawOneCharts() {
    var data = google.visualization.arrayToDataTable(dat);

    var options = {
      title: title,
      curveType: 'function',
      width: 990,
      height: 500
    };

    var chart = new google.visualization.LineChart(document.getElementById(idElem));

    chart.draw(data, options);
  }
}
