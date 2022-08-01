<script>
export default {
  name: 'SectionHeader',
  props: {
    heading: String,
    content: String,
  },
  components: {
    
  },
  data () {
    return {
      
    }
  }
}
</script> 

<template>
  <div class="section_header">
    <div class="container">
      <div class="d-flex">
        <h5>{{ heading }}</h5>
        <span class="tag"><font-awesome-icon icon="fa-solid fa-tag" />Sensitive Data</span>
      </div>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section_header {
  margin: 0px 0px 15px 0px;
  border-bottom: 1px solid #DCDEE0;
}
.section_header h5 {
    margin: 13px 20px 0px 0px;
    font-size: 20px;
    color: #354556;
}
.section_header p {
    margin: 8px 0px 10px 0px;
    font-size: 12px;
    color: #354556;
}
</style>
