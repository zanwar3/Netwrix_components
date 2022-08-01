<template>
  <div>
    <canvas id="bar-chart"></canvas>
  </div>
</template>
<script>
import Chart from 'chart.js'
import barChartData from '../bar-data.js'

export default {
  name: 'BarChart',
  data() {
    return {
      barChartData: barChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('bar-chart');
    new Chart(ctx, this.barChartData);
  }
}
</script>