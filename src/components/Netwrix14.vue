
<script>
import ChartView from "./ChartView.vue";
import SectionHeader from "./SectionHeader.vue";
import PanelTable from "./PanelTable.vue";
import AppHeader from "./AppHeader.vue";
export default {
  name: "Netwrix14",
  components: {
    ChartView,
    SectionHeader,
    PanelTable,
    AppHeader,
  },
  data() {
    return {
      sesitiveFilesChart: {
        type: "pie",
        data: {
          labels: ["High Risk Shares", "Medium Risk Shares", "Low Risk Shares"],
          datasets: [
            {
              label: "Share Risk Dataset",
              data: [75, 0, 25],
              backgroundColor: [
                "rgba(255, 71, 81, 1)",
                "rgba(252, 128, 39, 1)",
                "rgba(52, 191, 70, 1)",
              ],
              hoverOffset: 4,
            },
          ],
        },
      },
      fileDetails: [
        [
          "Share",
          "Users with Access",
          "% using All Rights",
          "% Using Some Rights",
          "% Unused",
          "Overprovisioning Risk",
        ],
        ["Accounting", "24", "4", "0", "95", "High"],
        ["Public", "13", "0", "15", "84", "High"],
        ["Public", "13", "0", "15", "84", "High"],
        ["Accounting", "1", "0", "0", "100", "Low"],
      ],
      filters: ["filter", "dropdown", "arrows"],
      breadList: [
        "Home",
        "File System",
        "Activity",
        "Least Privileged Access",
        "Overprovisioning Risk by Share",
      ],
    };
  },
};
</script>

<template>
  <div>
    <AppHeader :items="breadList" />
    <div class="main_section">
      <SectionHeader
        heading="Overprovisioning Risk by Share"
        content="This report identifies shares with the largest amount of unutilized entitlements and assigns a risk rating to each one."
      />
      <div class="container">
        <div class="row">
          <div class="col-md-24">
            <chartView
              heading="Shares by Overprovisioning Risk"
              :chartData="sesitiveFilesChart"
              :align="'left'"
            />
          </div>
        </div>
        <div class="col-lg-12">
          <PanelTable
            heading="File Details"
            :tableData="fileDetails"
            :filters="filters"
          />
        </div>
      </div>
    </div>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.main_section {
  background: #f5f5f5;
  mix-blend-mode: normal;
  opacity: 0.88;
  min-height: 100vh;
  .main-back {
    background: #f5f5f5;
    mix-blend-mode: normal;
    opacity: 0.88;
  }
}
</style>
