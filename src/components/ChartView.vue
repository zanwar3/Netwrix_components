<script>
import Chart from './Chart.vue'
export default {
  name: 'chartView',
  props: {
    heading: String,
    chartData: Object
  },
  components: {
    Chart
  },
  data () {
    return {
      
    }
  }
}
</script> 

<template>
    <div class="panel panel-primary">
        <div class="panel-heading">
            <h3 class="panel-title">{{ heading }}</h3>
        </div>
        <div class="panel-body" style="background-color:#fff">
            <Chart :chartData="chartData"></Chart>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
