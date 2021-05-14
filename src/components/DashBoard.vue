<template>
  <div>
    <canvas id="dash-board"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import planetData from './planet-data.js'

export default {
  name: 'DashBoard',
  data() {
    return {
      planetChartData: {
        type: 'bar',
        labels: ['Italy', 'UK', 'USA', 'Germany', 'France', 'Japan'],
        datasets: [
          {
            label: '2010 customers #',
            fillColor: '#382765',
            data: [2500, 1902, 1041, 610, 1245, 952],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
          },
          {
            label: '2014 customers #',
            fillColor: '#7BC225',
            data: [3104, 1689, 1318, 589, 1199, 1436],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    }
  },
  mounted() {
    const ctx = document.getElementById('dash-board')
    new Chart(ctx, this.planetChartData)
  },
}
</script>