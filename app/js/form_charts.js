$(document).ready(function(){

    // First charts
    var dat = [['t', 'f(t)'],];
    for (var i = 0; i < 22; i++) {
      dat.push([i,normalRasp(i)]);
    }

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable(dat);

      var options = {
        title: 'Первый компонент системы',
        curveType: 'function',
        width: 990,
        height: 500
      };

      var chart = new google.visualization.LineChart(document.getElementById('first_charts'));

      chart.draw(data, options);
    }

    $('.f_charts').on('click', 'button', function () {
      console.log('Вжух');
      var a = Number($('#num11').val());
      console.log(a);
      var b = Number($('#num12').val());
      console.log(b);
      var dat = [
        ['t', 'f(t)'],
      ];
      for (var i = a; i<b; i++) {
        dat.push([i,normalRasp(i)]);
      }
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable(dat);
        var options = {
          title: 'Первый компонент системы',
          curveType: 'function',
          width: 990,
          height: 500
        };
        var chart = new google.visualization.LineChart(document.getElementById('first_charts'));
        chart.draw(data, options);
      }
    })

    // Two chart

    dat = [['t', 'f(t)'],]
    for (var i = 0; i < 22; i++) {
      dat.push([i,ravnomerRaspred(i, 2, 14)]);
    }

    function drawChart() {
      var data = google.visualization.arrayToDataTable(dat);

      var options = {
        title: 'Второй компонент системы',
        curveType: 'function',
        width: 990,
        height: 500
      };

      var chart = new google.visualization.LineChart(document.getElementById('two_charts'));

      chart.draw(data, options);
    }

// Захреначить кнопку

});


function normalRasp(t) {
  // Нормальное распределение

  var k = 1/(2*Math.sqrt(2*Math.PI));
  var s = -(Math.pow((t-12),2))/(2*4);
  var end = k * Math.pow(Math.E, s);
  end = Math.fround(end);
  return end;
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
