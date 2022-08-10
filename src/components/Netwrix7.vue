
<script>
  import AppHeader from './AppHeader.vue'
  import Netwrix7Part from './Netwrix7Part.vue'
  export default {
    name: 'Netwrix7',
    components: {
      AppHeader,
      Netwrix7Part
    },
    data() {
      return {
        
      }
    }
  }
</script>
<template>
  <div class="main_section">
    <AppHeader :items="['Home','File System']"/>
    <div class="container">
      <div class="col-12">
        <div class="solutionsets_section">
          <h5>Sensitive Data</h5>
          <p>This job group is designed to report on resources that have been identified to contain sensitive data from targeted file servers.</p>
          <div class="content_section">
            <div class="flex_container">
              <Netwrix7Part heading="Enterprise Summary" content="This report identifies the type and amount of sensitive content found on scanned machines." iconName="image" />
              <Netwrix7Part heading="File Ownership" content="This report identifies the top 3 potential owners of files which have been found to contain sensitive content." iconName="image" />
              <Netwrix7Part heading="Sensitive Data Access" content="This report shows who is accessing sensitive data. Emphasis is placed on activity within the last 30 days." iconName="image" />
              <Netwrix7Part heading="Sensitive Security Groups" content="This report identifies groups which are used to provide access to sensitive data. Changes to membership should be closely monitored." iconName="image" />
              <Netwrix7Part heading="Share Details" content="This report identifies the location of sensitive data, and flags whether or not this data is accessible through open access." iconName="image" />
              <div class="two_col"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.reports_section {
    padding: 10px 10px;
    h5 {
    margin: 0px;
    padding: 5px 10px;
    border-bottom: 1px solid #E0E5EB;
    font-size: 14px;
  }
}
</style>
