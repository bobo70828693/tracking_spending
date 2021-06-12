<template>
  <div id="shareHoldBox">
    <dounhnut-example
      :dounhuntId="dounhuntId"
      :labels="labels"
      :dataSets="datasets"
      :options="options"
    ></dounhnut-example>
  </div>
</template>

<script>
import DounhnutExample from "../GraphExample/DounhnutExample.vue";

export default {
  name: "ShareHoldingGraph",
  components: {
    DounhnutExample,
  },
  props: ['tradeData'],
  updated() {
    this.tradeData.forEach((stockInfo) => {
      this.labels.push(stockInfo.stockID);
      this.datasets[0].data.push(stockInfo.num);
    })
  },
  data() {
    return {
      dounhuntId: "sharehoding-graph",
      test: [],
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
          ],
        },
      ],
      options: {
        cutoutPercentage: 30,
      },
    };
  },
};
</script>