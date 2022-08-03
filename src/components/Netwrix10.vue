
<script>
import ChartView from "./ChartView.vue";
import SectionHeader from "./SectionHeader.vue";
import PanelTable from "./PanelTable.vue";
import PanelTabsTable from "./PanelTabsTable.vue";
export default {
  name: "Netwrix8",
  components: {
    ChartView,
    SectionHeader,
    PanelTable,
    PanelTabsTable,
  },
  data() {
    return {
      scopeData: [
        ["Host", "Share", "Folders", "Files", "Permissions"],
        [3, 9, 1744, 2000, 496],
      ],
      sesitiveFilesChart: {
        type: "pie",
        data: {
          labels: ["High", "Medium", "Low"],
          datasets: [
            {
              axis: "y",
              label: "Sensitive Files",
              data: [13, 13, 72],
              fill: false,
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
              borderColor: "1px solid #FC5555",
              borderWidth: 1,
            },
          ],
        },
      },
      findingsData: [
        ["Category", "High", "Medium", "Low", "No findings"],
        ["Open Access", 1, 0, 2, 0],
        ["Sensitive Data", 1, 0, 2, 0],
        ["Stable Data", 1, 0, 2, 0],
        ["Activity", 1, 0, 2, 0],
        ["Broken Inheritance", 1, 0, 2, 0],
        ["Direct Permission", 1, 0, 2, 0],
        ["Effective Access", 1, 0, 2, 0],
        ["Least Privileges", 1, 0, 2, 0],
      ],
      tabsData:[
        "Hight",
        "Low",
        "Medium",
      ],
      details: [
        ["Categaory","Check","Findings"],
        ["Open Access","% of All shares",60],
        ["Sensitive Data","% of files exposed Through Open Access",73],
      ]
    };
  },
};
</script>
<template>
  <div>
    <div class="main_section">
      <SectionHeader
        heading="Shares with Sensitive Content"
        content="This report identifies the location of sensitive data, and flags whether or not this data is accessible through open access."
      />
      <div class="container">
        <div class="row">
          <div class="col-md-24">
            <PanelTable heading="Scope" :tableData="scopeData" :filters="[]" />
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6 col-md-12">
            <chartView heading=" " :chartData="sesitiveFilesChart" />
          </div>
          <div class="col-xl-6 col-md-12">
            <PanelTable
              heading="Findings by category"
              :tableData="findingsData"
              :filters="['filter']"
            />
          </div>
        </div>
        <div class="col-xl-12">
          <PanelTabsTable
              heading=" "
              :tableData="details"
              :tabsData="tabsData"
              :filters="['filter']"
              :tabsHeading="'Risk'"
            />
        </div>
      </div>
    </div>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_section {
  background: #f5f5f5;
  mix-blend-mode: normal;
  opacity: 0.88;
  min-height: 100vh;
}
</style>
