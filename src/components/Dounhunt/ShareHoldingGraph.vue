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
  data() {
    return {
      dounhuntId: "sharehoding-graph",
      labels: ["2330", "2303", "2409", "2609", "2603"],
      datasets: [
        {
          data: [2000, 1000, 3000, 500, 250],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)",
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