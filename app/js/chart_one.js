$(document).ready(function(){
    // First charts
    var dat = [['t', 'f(t)'],];
    for (var i = 0; i < 22; i++) {
      dat.push([i,normalRasp(i, 16, 2)]);
    }
    drawChart(dat, 'Первый компонент системы', 'first_charts')


    $('#f_chart').on('click', 'button', function () {
      console.log('Вжух');
      var a = Number($('#num11').val());
      console.log(a);
      var b = Number($('#num12').val());
      console.log(b);
      var dat = [
        ['t', 'f(t)'],
      ];
      for (var i = a; i<b; i++) {
        dat.push([i,normalRasp(i, 16, 2)]);
      }
      drawChart(dat, 'Первый компонент системы', 'first_charts')
    })

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

function normalRasp(t, m, q) {
  // Нормальное распределение

  var k = 1/(q*Math.sqrt(2*Math.PI));
  var s = -(Math.pow((t-m),2))/(2*q*q);
  var end = k * Math.pow(Math.E, s);
  end = Math.fround(end);
  return end;
}
