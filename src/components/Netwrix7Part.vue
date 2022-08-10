<script>
export default {
  name: "Netwrix7Part",
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
    <div class="d-flex my-2 bg-white p-3">
      <div class="image_section">
        <font-awesome-icon :icon="[iconType, iconName]" />
      </div>
      <div class="data_section">
        <span>{{ heading }}</span>
        <p>{{ content }}</p>
        <p class="tag">
          <font-awesome-icon icon="fa-solid fa-tag" />Sensitive Data
        </p>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.image_section {
  background: #229cfb;
  width: 55px;
  height: 50px;
  color: #fff;
  font-size: 22px;
  display: flex;
  border-radius: 50%;
  svg {
    margin: auto;
  }
}
.data_section {
  padding: 0px 10px;
  width: 100%;
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
    margin-bottom: 10px;
  }
}
</style>
