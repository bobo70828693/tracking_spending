<template>
  <canvas :id=dounhuntId></canvas>
</template>
<script>
export default {
  name: "Dounhunt",
  props: {
    dounhuntId: {
      type: String,
    },
    labels: {
      type: Array,
      default() {
        return [];
      },
    },
    dataSets: {
      type: Array,
      default() {
        /*
          example sets: 
          {
            label: 'Data one',
            backgroundColor: '#f87979',
            data: [12, 40, 20, 10]
          }
        */
        return [];
      },
    },
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      dounhuntId: this.dounhuntId,
      dounhnutData: {
        type: "doughnut",
        data: {
          labels: this.labels,
          datasets: this.dataSets,
        },
        options: this.options,
      },
    };
  },
  mounted() {
    const ctx = document.getElementById("sharehoding-graph");
    new Chart(ctx, this.dounhnutData);
  },
};
</script>