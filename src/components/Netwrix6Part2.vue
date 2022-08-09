<script>
export default {
  name: "Netwrix6Part",
  props: {
    heading: String,
    content: String,
  },
  data() {
    return {};
  },
};
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
  background: #229cfb;
  border: 1px solid #229cfb;
  height: 120px;
  display: flex;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}
.heading_text {
  background: #cfddff;
  border: 1px solid #229cfb;
  display: flex;
  height: 40px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
}
.number p,
.heading_text p {
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
