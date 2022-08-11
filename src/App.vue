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
.table_button {
  background: #229CFB;
  color: #fff;
  border: none;
  margin: 0px 10px 0px 0px;
  padding: 5px 15px;
  font-size: 13px;
}
.bg_gray {
  background: #C9CCCF;
  color: #354556;
}
.bg_green {
  background: #34BF46;
  color: #fff;
}
.w-100 {
  width: 100%;
}
.tabs {
  display: flex;
  background: #FFF;
  span {
    margin: auto;
    margin-right: 10px;
    font-size: 45px;
    color: #727D89;
  }
  h5 {
    margin: 0px;
    font-size: 16px;
    color: #727D89;
  }
  p {
    margin: 5px 0px 0px 0px;
    font-size: 14px;
    color: #727D89;
  }
  .active {
    background: #229CFB;
    span {
      color: #fff;
    }
    h5 {
      color: #fff;
    }
    p {
      color: #fff;
    }
  }
}
.table_tabs {
  display: flex;
  svg {
    margin: auto;
    margin-left: 40px;
  }
  p {
    margin: 0px 10px;
  }
}
</style>
