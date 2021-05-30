<template>
  <div>
    <canvas id="dash-board"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import planetData from "./planet-data.js";

export default {
  name: "DashBoard",
  data() {
    return {
      planetChartData: planetData
    };
  },
  mounted() {
    const ctx = document.getElementById("dash-board");
    new Chart(ctx, this.planetChartData);
  },
};
</script>