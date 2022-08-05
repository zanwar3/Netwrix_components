<script>
export default {
  name: "PanelTable",
  props: {
    heading: String,
    tabsData: Array,
    tabsHeading: String,
    tableData: Array,
    filters: Array,
    activeTab: Number,
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
                  >
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 15 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.693359 1.25391C0.884766 0.871094 1.26758 0.625 1.70508 0.625H13.5176C13.9277 0.625 14.3105 0.871094 14.502 1.25391C14.666 1.63672 14.6113 2.10156 14.3379 2.42969L9.36133 8.52734V12C9.36133 12.3555 9.16992 12.6562 8.86914 12.793C8.56836 12.9297 8.21289 12.9023 7.93945 12.7109L6.18945 11.3984C5.9707 11.2344 5.86133 10.9883 5.86133 10.6875V8.52734L0.857422 2.42969C0.583984 2.10156 0.529297 1.63672 0.693359 1.25391Z"
                        fill="#B7BCC1"
                      />
                    </svg>
                  </span>
                  <span>
                    {{ tabsHeading }}
                  </span>
                  <span style="float: right">
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(dataRow, index) in tabsData">
                <td scope="row" :class="{ 'active-tab': index == activeTab }">
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
                  <span v-if="filters.includes('filter')">
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 15 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.693359 1.25391C0.884766 0.871094 1.26758 0.625 1.70508 0.625H13.5176C13.9277 0.625 14.3105 0.871094 14.502 1.25391C14.666 1.63672 14.6113 2.10156 14.3379 2.42969L9.36133 8.52734V12C9.36133 12.3555 9.16992 12.6562 8.86914 12.793C8.56836 12.9297 8.21289 12.9023 7.93945 12.7109L6.18945 11.3984C5.9707 11.2344 5.86133 10.9883 5.86133 10.6875V8.52734L0.857422 2.42969C0.583984 2.10156 0.529297 1.63672 0.693359 1.25391Z"
                        fill="#B7BCC1"
                      />
                    </svg>
                  </span>
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
/* icon-name */
  



</style>
