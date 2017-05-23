$(document).ready(function(){

    // Five chart

    dat = [['t', 'f(t)'],]
    for (var i = 0; i < 40; i++) {
      var m = treyg(i, 2, 18);
      dat.push([i,(m > 0 ) ? m : 0]);
    }

    drawChart(dat, 'Пятый компонент системы', 'five_charts')


    $('#fi_chart').on('click', 'button', function () {
      console.log('Вжух');
      var a = Number($('#num51').val());
      console.log(a);
      var b = Number($('#num52').val());
      var dat = [
        ['t', 'Вероятность отказа'],
      ];
      var rez = 0.0;
      var rand = 0.0;
      var fail = 0;
      var total_fail = 0;
      for (var i = a; i <= b; i++) {
        rez = treyg(i, 2, 18);
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
      $('#summary_five').text(Math.fround(total_fail));
      drawChart(dat, 'Графие отказов для пятого компонента системы', 'five_charts')
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
  var end = (2/(b-a)) - tempA*Math.abs(a+b-2*x);
  return end;
};
