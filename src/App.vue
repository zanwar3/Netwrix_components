<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css";
body {
  margin: 0px;
}
#app {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #354556;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
}
.flex-item-left {
  flex: 50%;
}

.flex-item-right {
  flex: 50%;
}
</style>
