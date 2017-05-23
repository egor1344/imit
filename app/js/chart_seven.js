$(document).ready(function(){

    // Two chart

    dat = [['t', 'f(t)'],]
    for (var i = 0; i < 22; i++) {
      dat.push([i, ravnomerRaspred(i, 1, 29)]);
    }

    drawChart(dat, 'Седьмой компонент системы', 'seven_charts')


    $('#se_chart').on('click', 'button', function () {
      console.log('Вжух');
      var a = Number($('#num71').val());
      console.log(a);
      var b = Number($('#num72').val());
      var dat = [
        ['t', 'Вероятность отказа'],
      ];
      var rez = 0.0;
      var rand = 0.0;
      var fail = 0;
      var total_fail = 0;
      for (var i = a; i <= b; i++) {
        rez = ravnomerRaspred(i, 1, 29);
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
      $('#summary_seven').text(Math.fround(total_fail));
      drawChart(dat, 'Графие отказов для пятого компонента системы', 'seven_charts')
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

function ravnomerRaspred(i, a, b) {
  // Равномерное распеределение
  if ((i>=a) && (b>i)) {
    return Number((i-a)/(b-a));
  }
  else if (i<a){
    return 0;
  }
  else {
    return 1;
  }

}
