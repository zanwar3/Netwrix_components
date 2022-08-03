<template>
  <div>
    <canvas id="chart-div"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js";
//import barChartData from '../bar-data.js'
export default {
  name: "Chart",
  props: {
    chartData: Object,
  },
  data() {
    return {
    };
  },
  mounted() {
    const ctx = document.getElementById("chart-div");
    new Chart(ctx, this.chartData);
  },
};
</script>