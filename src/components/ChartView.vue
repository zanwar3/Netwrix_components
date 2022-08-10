<script>
import Chart from './Chart.vue'
export default {
  name: 'chartView',
  props: {
    heading: String,
    chartData: Object,
    align: String,
    activate:Boolean
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
    <div class="panel panel-primary" :class="{'active-content':activate}">
        <div class="panel-heading">
            <h3 class="panel-title">{{ heading }}</h3>
        </div>
        <div class="panel-body" style="background-color:#fff">
            <div :class="{'left-chart': align == 'left'}">
              <Chart :chartData="chartData" ></Chart>
            </div>
            
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .left-chart{
    width: 50%;
  }
  .panel-body{
    padding-bottom: 30px;
  }
  
</style>
