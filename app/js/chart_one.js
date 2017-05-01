$(document).ready(function() {
  // First charts
  var dat = [
    ['t', 'f(t)'],
  ];
  for (var i = 0; i < 30; i++) {
    dat.push([i, normalRasp(i, 16, 2)]);
  }
  drawChart(dat, 'Первый компонент системы', 'first_charts')


  $('#f_chart').on('click', '#calc_one', function() {
    // Построение графика отказов первого компонента системы
    // console.log('Вжух');
    var a = Number($('#num11').val());
    // console.log(a);
    var b = Number($('#num12').val());
    // console.log(b);
    var dat = [
      ['t', 'Вероятность отказа'],
    ];
    var rez = 0.0;
    var rand = 0.0;
    var fail = 0;
    var total_fail = 0;
    for (var i = a; i <= b; i++) {
      rez = normalRasp(i, 16, 2);
      fail = 0;
      for (var j = 0; j < 20000; j++) {
        rand = Math.random()
        if (rez >= rand) {
          fail = fail + 1;
          total_fail = total_fail + 1;
        }
      }
    console.log(fail, total_fail);
    fail = 1 - (fail / 20000);
    dat.push([i, fail]);
    }
    console.log(b-a);
    total_fail = 1 - (total_fail / (20000 * (b - a + 1)));
    $('#summary_one').text(Math.fround(total_fail));
    drawChart(dat, 'График отказов для первого компонента системы', 'first_charts')
  })

});

function drawChart(dat, title, idElem) {
  // Отрисовка графика
  google.charts.load('current', {
    'packages': ['corechart']
  });
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

  var k = 1 / (q * Math.sqrt(2 * Math.PI));
  var s = -(Math.pow((t - m), 2)) / (2 * q * q);
  var end = k * Math.pow(Math.E, s);
  end = Math.fround(end);
  return end;
}
