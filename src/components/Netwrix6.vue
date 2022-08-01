
<script>
  import Netwrix6Part from './Netwrix6Part.vue'
  import Netwrix6Part2 from './Netwrix6Part2.vue'
  export default {
    name: 'Netwrix6',
    components: {
      Netwrix6Part, Netwrix6Part2
    },
    data() {
      return {
        
      }
    }
  }
</script>
<template>
  <div class="">
    <div class="container">
      <Netwrix6Part />
      <div class="statistics_section_main">
        <div class="statistics_section">
          <Netwrix6Part2 heading="File Servers" content="2"/>
          <Netwrix6Part2 heading="File Size (tb)" content="0"/>
          <Netwrix6Part2 heading="Open Folders" content="60"/>
          <Netwrix6Part2 heading="File Size (tb)" content="0"/>
          <Netwrix6Part2 heading="Open Folders" content="60"/>
        </div>
      </div>
    </div>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.statistics_section_main {
  display: flex;
  margin: 30px 0px;
}
.statistics_section {
  display: flex;
  text-align: center;
  margin: 0 auto;
}
</style>
