$(document).ready(function(){
    console.log('hop hey');
    var dat = [
      ['t', 'nums'],
    ];
    for (var i = 0; i < 22; i++) {
      dat.push([i,normalRasp(i)]);
    }
    console.log(dat);
    normalRasp(1);
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

    $('.modal-content').on('click', 'button', function () {
      console.log('Вжух');
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: 'Vzyh',
          curveType: 'function',
          width: 990,
          height: 500
        };

        var chart = new google.visualization.LineChart(document.getElementById('first_charts'));

        chart.draw(data, options);
      }
    })

});


function normalRasp(t) {
  var k = 1/(2*Math.sqrt(2*Math.PI));
  // console.log(k);
  var s = -(Math.pow((t-12),2))/(2*4);
  // console.log(s);
  var end = k * Math.pow(Math.E, s);
  end = Math.fround(end);
  // console.log(end);
  return end;
}
