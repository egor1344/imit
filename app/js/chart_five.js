$(document).ready(function(){

    // Four chart

    dat = [['t', 'f(t)'],]
    for (var i = 0; i < 40; i++) {
      dat.push([i, treyg(i, 2, 18)]);
    }

    drawChart(dat, 'Пятый компонент системы', 'five_charts')


    $('#fi_chart').on('click', 'button', function () {
      console.log('Вжух');
      var a = Number($('#num51').val());
      console.log(a);
      var b = Number($('#num52').val());
      console.log(b);
      var dat = [
        ['t', 'f(t)'],
      ];
      for (var i = a; i<b; i++) {
        dat.push([i, treyg(i, 2, 18)]);
      }
      drawChart(dat, 'Пятый компонент системы', 'five_charts')
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

function treyg(x, a, b) {
  // Симметричное треугольное распределение

  var tempA = (2/((b-a)*(b-a)));
  var end =(2/(b-a)) - tempA*Math.abs(a+b-2*x);
  end = Math.fround(end);
  return end;
}
