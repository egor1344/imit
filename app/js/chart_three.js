$(document).ready(function(){

    // Three chart

    dat = [['t', 'f(t)'],]
    for (var i = 0; i < 22; i++) {
      dat.push([i,normalRasp(i, 14, 2)]);
    }

    drawChart(dat, 'Третий компонент системы', 'three_charts')


    $('#t_charts').on('click', 'button', function () {
      console.log('Вжух');
      var a = Number($('#num31').val());
      console.log(a);
      var b = Number($('#num32').val());
      console.log(b);
      var dat = [
        ['t', 'f(t)'],
      ];
      for (var i = a; i<b; i++) {
        dat.push([i,normalRasp(i, 14, 2)]);
      }
      drawChart(dat, 'Третий компонент системы', 'three_charts')
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
