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
*, *:before, *:after {
  box-sizing: border-box;
}
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
.container{
  width:1100px;
  margin:auto;
}
a{
      text-decoration:none;
}

</style>
