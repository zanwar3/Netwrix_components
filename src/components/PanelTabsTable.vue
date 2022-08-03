<script>
export default {
  name: "PanelTable",
  props: {
    heading: String,
    tabsData: Array,
    tabsHeading: String,
    tableData: Array,
    filters: Array,
  },
  components: {},
  data() {
    return {
      selected: "",
    };
  },
};
</script> 

<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">{{ heading }}</h3>
    </div>
    <div class="">
      <div class="row">
        <div class="col-md-4">
          <table class="table">
            <thead>
              <tr class="grey-bg">
                <th>
                  <span
                    v-if="filters.includes('filter')"
                    style="margin-right: 20px"
                    ><i class="fa fa-solid fa-filter"></i
                  ></span>
                  <span>
                    {{ tabsHeading }}
                  </span>
                  <span style="float: right;">
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="dataRow in tabsData">
                <td scope="row">
                  {{ dataRow }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-20">
          <table class="table">
            <thead>
              <tr class="grey-bg">
                <th>
                  <span v-if="filters.includes('filter')"
                    ><i class="fa fa-solid fa-filter"></i
                  ></span>
                </th>
                <th colspan="100%"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(tableRow, index) in tableData"
                :class="{ 'light-black': index == 0 }"
              >
                <td v-for="tableData in tableRow" scope="row">
                  <span v-html="tableData"></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
