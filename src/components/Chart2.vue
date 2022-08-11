<template>
  <div>
    <canvas id="chart-div2"></canvas>
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
    const ctx = document.getElementById("chart-div2");
    new Chart(ctx, this.chartData);
  },
};
</script>