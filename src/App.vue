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

<style lang="less">
*,
*:before,
*:after {
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
.container {
  width: 1100px;
  margin: auto;
}
a {
  text-decoration: none;
}
.main_section {
  background: #f5f5f5;
  mix-blend-mode: normal;
  opacity: 0.88;
  min-height: 100vh;
}
.flex_container {
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;

  .two_col {
    width: 100%;
    flex: calc(50% - 15px);
  }
  .two_third {
    flex: calc(66.66% - 15px);
  }
  .one_third {
    flex: calc(33.33% - 15px);
  }
  .one_sixth {
    flex: calc(16.66% - 15px);
  }
  .five_sixth {
    flex: calc(83.34% - 15px);
  }
}
.solutionsets_section {
  background: #f1f1f1;
  h5 {
    background: #4cd7ce;
    margin: 0px;
    padding: 10px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #ffffff;
  }
}

table {
  border: 1px solid #dcdee0;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 0px;
  background-color: #fff;
  th,
  td {
    padding: 10px;
  }
}
th,
tr {
  border-bottom: 1px solid #dcdee0;
  text-align: left;
}
.panel {
  margin-bottom: 15px;
  background-color: transparent;
}
.panel-primary {
  border-color: #dcdee0;
  .panel-heading {
    color: #fff;
    background-color: #337ab7;
    border-color: #337ab7;
    background: #229cfb;
    border: 1px solid #dcdee0;
    border-radius: 3px 3px 0px 0px;
    padding-left: 31px;
    .panel-title {
      font-size: 14px;
      display: flex;
      align-items: center;
      color: #ffffff;
      height: 15.4px;
    }
  }
}

.light-black {
  color: #7f8893;
}
.d-flex {
  display: flex;
}
.my-2 {
  margin: 8px 0px;
}
.pad-top-15 {
  padding-top: 15px;
}
.pad-10 {
  padding: 10px;
}
.grey-bg {
  background: #f3f4fa;
}
.bg-white {
  background: #fff;
}
.green {
  color: green;
}
.active-tab {
  background: #ececec;
  border-left: 2px solid #229cfb;
}
.p-3 {
  padding: 15px;
}
.tag {
  color: #0068da;
  font-size: 12px;
  margin: 15px 0px 0px 0px;
  svg {
    color: #229cfb;
    margin: 0px 7px 0px 0px;
  }
}
.active-content{
  border: 2px solid red;
}
</style>
