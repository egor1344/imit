$(document).ready(function() {

  // end chart

  dat = [
    ['t', 'f(t)'],
  ]
  for (var i = 0; i < 50; i++) {
    dat.push([i, Math.random() - 0.5]);
  }

  drawChart(dat, 'Итоговый график отказов системы', 'end_charts')

  $('#end_chart').on('click', '#calc_end', function() {
    var a = Number($('#end_num').val());
    console.log(a);
    var dat = [
      ['t', 'Вероятность отказа'],
    ];
    var rez = [0, 0, 0, 0, 0, 0, 0];
    var rand = 0.0;
    var fail = 0;
    var f_l = [0, 0, 0, 0, 0, 0, 0];
    var total_fail = 0;
    for (var i = 0; i <= a; i++) {
      rez[0] = normalRasp(i, 16, 2); // one
      rez[1] = ravnomerRaspred(i, 2, 14); // two
      rez[2] = normalRasp(i, 14, 2); // three
      rez[3] = exps(i, 0.1); // four
      rez[4] = treyg(i, 2, 18); // five
      rez[5] = exps(i, 0.05); // six
      rez[6] = ravnomerRaspred(i, 1, 19); // seven
      fail = 0;
      for (var j = 0; j < 20000; j++) {
        for (var k = 0; k < rez.length; k++) {
          rand = Math.random()
          if (rez[k] >= rand) {
            f_l[k] = false;
          }
          else {
            f_l[k] = true;
          }
        if (f_l[0] && f_l[1] && f_l[2] && (f_l[3] || f_l[4]) && (f_l[5] && f_l[6])) {
          total_fail = total_fail + 1;
          fail = fail + 1;
          }
        }
      }
      console.log(fail, total_fail);
      fail = 1 - (fail / (20000*7));
      dat.push([i, fail]);
    }
    total_fail = 1 - (total_fail / (20000 * (a + 1) * 7));
    $('#summary_end').text(Math.fround(total_fail*100));
    drawChart(dat, 'Итоговый график отказов системы', 'end_charts')
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

function treyg(x, a, b) {
  // Симметричное треугольное распределение

  var tempA = (2 / ((b - a) * (b - a)));
  var end = (2 / (b - a)) - tempA * Math.abs(a + b - 2 * x);
  end = Math.fround(end);
  return end;
}

function ravnomerRaspred(i, a, b) {
  // Равномерное распеределение
  if ((i >= a) && (b > i)) {
    return Number((i - a) / (b - a));
  } else if (i < a) {
    return 0;
  } else {
    return 1;
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

function exps(t, l) {
  // Экспоточиональное распределение

  var end = l * Math.pow(Math.E, (-(l) * t));
  end = Math.fround(end);
  return end;
}
