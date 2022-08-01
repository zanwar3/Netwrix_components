<script>
export default {
  name: 'Netwrix6Part',
  props: {
    heading: String,
    content: String,
  },
  data () {
    return {
      
    }
  }
}
</script> 

<template>
  <div class="statistics">
    <div class="number">
      <p>{{ content }}</p>
    </div>
    <div class="heading_text">
      <p>{{ heading }}</p>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.statistics {
    width: 155px;
    margin: 0 5px;
}
.number {
  background: #229CFB;
  border: 1px solid #229CFB;
  height: 120px;
  display: flex;
}
.heading_text {
  background: #CFDDFF;;
  border: 1px solid #229CFB;
  display: flex;
  height: 40px;
}
.number p, .heading_text p {
  margin: auto;
}
.number p {
  color: #fff;
  font-size: 48px;
}
.heading_text p {
  color: #354556;
}
</style>
