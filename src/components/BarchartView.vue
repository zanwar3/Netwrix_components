<script>
import BarChart from './BarChart.vue'
export default {
  name: 'BarchartView',
  props: {
    heading: String,
  },
  components: {
    BarChart
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
        <div class="panel-body">
            <BarChart></BarChart>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
