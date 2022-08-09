<script>
export default {
  name: "Netwrix3Part",
  props: {
    heading: String,
    content: String,
    iconName: {
      type: String,
      default: "address-book",
    },
    iconType: String,
  },
  data() {
    return {};
  },
};
</script> 

<template>
  <div class="two_col">
    <div class="d-flex my-2">
      <div class="image_section">
        <font-awesome-icon :icon="[iconType, iconName]" />
      </div>
      <div class="data_section">
        <span>{{ heading }}</span>
        <p>{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.image_section {
  background: #5f7d8b;
  min-width: 85px;
  min-height: 70px;
  color: #fff;
  font-size: 26px;
  display: flex;
  svg {
    margin: auto;
  }
}
.data_section {
  padding: 10px 10px;
  span {
    color: #0068da;
    font-size: 16px;
    line-height: 18px;
  }
  p {
    color: #707070;
    font-size: 13px;
    line-height: 18px;
    margin: 0px;
  }
}
</style>
