export const planetChartData = {
  type: "bar",
  data: {
    labels: ['Italy', 'UK', 'USA', 'Germany', 'France', 'Japan'],
    datasets: [
      {
          label: '2010 customers #',
          fillColor: '#382765',
          data: [2500, 1902, 1041, 610, 1245, 952]
      },
      {
          label: '2014 customers #',
          fillColor: '#7BC225',
          data: [3104, 1689, 1318, 589, 1199, 1436]
      }
  ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25
          }
        }
      ]
    }
  }
};

export default planetChartData;