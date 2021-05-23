export const planetChartData = {
  type: "doughnut",
  data: {
    labels: ["2330", "2303", "2409", "2609", "2603"],
    datasets: [
      {
        data: [2000, 1000, 3000, 500, 250],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
      }
    ],
  },
  options: {
    cutoutPercentage: 30
  },
};

export default planetChartData;