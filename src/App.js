import React from "react";
import Highcharts from "highcharts";
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsReact from "highcharts-react-official";
HighchartsMore(Highcharts); // init module

function App() {
  const options = {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: 'Weekly Taking Medicine'
    },
    xAxis: [{
      categories: ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']
    }],

    tooltip: {
      shared: true
    },

    series: [{
      name: '평균',
      showInLegend: false,
      type: 'column',
      data: [2.8, 2.5, 3.5, 3.2, 2.8, 3.3, 2.9],
      tooltip: {
        pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f} mm</b> '
      }
    }, {
      name: '표준편차',
      type: 'errorbar',
      data: [[0.6, 5.0], [0.7, 4.3], [1.5, 5.5], [1.2, 5.2], [0.5, 5.1], [1.2, 5.4], [1.1, 4.7]],
      tooltip: {
        pointFormat: '({series.name}: {point.low}-{point.high} mm)<br/>'
      }
    }]
  }

  const options2 = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Weekly Taking Medicine Each Person'
    },
    xAxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'],
      crosshair: true
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{ name: '0', data: [2, 2, 0, 1, 3, 1, 1] },
    { name: '1', data: [1, 2, 3, 1, 0, 1, 2] },
    { name: '2', data: [2, 0, 0, 2, 2, 2, 1] },
    { name: '3', data: [1, 1, 2, 2, 0, 1, 1] },
    { name: '4', data: [2, 5, 1, 0, 2, 2, 3] },
    { name: '5', data: [0, 0, 2, 3, 2, 1, 2] },
    { name: '6', data: [2, 0, 2, 1, 1, 2, 0] },
    { name: '7', data: [0, 0, 0, 0, 0, 0, 0] }]
  };

  const options3 = {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: 'Weekly Walking Count'
    },
    xAxis: [{
      categories: ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']
    }],
    tooltip: {
      shared: true
    },

    series: [{
      name: '평균',
      showInLegend: false,
      type: 'column',
      data: [4659, 3618, 5811, 6464, 3648, 4006, 4523],
      tooltip: {
        pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f} mm</b> '
      },
    }, {
      name: '표준편차',
      type: 'errorbar',
      data: [[2402, 6916], [607, 6629], [4389, 7233], [3934, 8994], [494, 6082], [930, 7082], [1102, 7944]],
      tooltip: {
        pointFormat: '({series.name}: {point.low}-{point.high})<br/>'
      }
    }]
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "50%" }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
        <br />
        <HighchartsReact highcharts={Highcharts} options={options2} />
        <br />
        <HighchartsReact highcharts={Highcharts} options={options3} />
      </div>
    </div>

  );
}

export default App;
