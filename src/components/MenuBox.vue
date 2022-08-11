<script>
export default {
  name: "MenuBox",
  props: {
    className: String,
    svgPath: String,
    heading: String
  },
  components: {},
  data() {
    return {
      // path: svg,
    };
  },
};
</script> 

<template>
  <div class="box" :class="className">
    <div class="image_section">
      <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path :d="svgPath" fill="white"/>
      </svg>
    </div>
    <div class="text_section">
      <h5>{{ heading }}</h5>
    </div>
  </div>
</template>

<style lang="less" scoped>
.box {
  text-align: center;
  margin: 0px 10px 0px 0px;
  padding: 15px 50px 0px 50px;
  .text_section h5 {
    color: #fff;
    font-size: 14px;
  }
}
.box_red {
  background: #FF4751;
}
.box_blue {
  background: #229CFB;
}
.box_green {
  background: #29CC6A;
}
.box_purple {
  background: #7B61FF;
}
</style>