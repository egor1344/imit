$(document).ready(function(){

    // Four chart

    dat = [['t', 'f(t)'],]
    for (var i = 0; i < 40; i++) {
      dat.push([i, exps(i, 0.05)]);
    }

    drawChart(dat, 'Шестой компонент системы', 'six_charts')


    $('#si_chart').on('click', 'button', function () {
      console.log('Вжух');
      var a = Number($('#num61').val());
      console.log(a);
      var b = Number($('#num62').val());
      console.log(b);
      var dat = [
        ['t', 'f(t)'],
      ];
      for (var i = a; i<b; i++) {
        dat.push([i,exps(i, 0.05)]);
      }
      drawChart(dat, 'Шестой компонент системы', 'six_charts')
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

function exps(t, l) {
  // Экспоточиональное распределение

  var end = l * Math.pow(Math.E, (-(l) * t));
  end = Math.fround(end);
  return end;
}
