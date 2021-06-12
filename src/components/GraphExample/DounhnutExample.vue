<template>
  <canvas :id="dounhuntId"></canvas>
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
    this.$nextTick(() => {
      const ctx = document.getElementById("sharehoding-graph");
      new Chart(ctx, this.dounhnutData);
    });
  }
};
</script>