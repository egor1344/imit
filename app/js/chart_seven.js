$(document).ready(function(){

    // Two chart

    dat = [['t', 'f(t)'],]
    for (var i = 0; i < 22; i++) {
      dat.push([i,ravnomerRaspred(i, 1, 19)]);
    }

    drawChart(dat, 'Седьмой компонент системы', 'seven_charts')


    $('#se_chart').on('click', 'button', function () {
      console.log('Вжух');
      var a = Number($('#num71').val());
      console.log(a);
      var b = Number($('#num72').val());
      console.log(b);
      var dat = [
        ['t', 'f(t)'],
      ];
      for (var i = a; i<b; i++) {
        dat.push([i,ravnomerRaspred(i, 1, 19)]);
      }
      drawChart(dat, 'Седьмой компонент системы', 'seven_charts')
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
