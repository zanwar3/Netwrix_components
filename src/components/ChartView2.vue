<script>
import Chart2 from './Chart2.vue'
export default {
  name: 'chartView2',
  props: {
    heading: String,
    chartData: Object,
    align: String,
  },
  components: {
    Chart2
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
            <div :class="{'left-chart': align == 'left'}">
              <Chart2 :chartData="chartData" ></Chart2>
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
