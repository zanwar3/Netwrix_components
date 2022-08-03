
<script>
import ChartView from "./ChartView.vue";
import SectionHeader from "./SectionHeader.vue";
import PanelContent from "./PanelContent.vue";
import PanelTable from "./PanelTable.vue";
export default {
  name: "Netwrix17",
  components: {
    ChartView,
    SectionHeader,
    PanelContent,
    PanelTable,
  },
  data() {
    return {
      sesitiveFilesChart: {
        type: "horizontalBar",
        data: {
          labels: [
            "Credentials",
            "Credit cards",
            "ePHI",
            "GDPR",
            "Health Data",
          ],
          datasets: [
            {
              axis: "y",
              label: "Sensitive Files",
              data: [37, 19, 19, 19, 19,0],
              fill: false,
              backgroundColor: "rgba(52, 191, 70, 0.5)",
              borderColor: "1px solid #29CC6A",
              borderWidth: 1,
            },
            {
              axis: "y",
              label: "Sensitive Files",
              data: [37, 12, 12, 12, 12,0],
              fill: false,
              backgroundColor: "rgba(255, 71, 81, 0.5)",
              borderColor: "1px solid #FC5555",
              borderWidth: 1,
            }
          ],
        },
        options: {
          indexAxis: "y",
        },
      },
      sesitiveFiles: [
        [
          "Sensitive Data",
          "Users with Shadow Access",
          "Users with Access",
          "Average steps",
        ],
        ["Credentials", 13, 27, 2],
        ["Credit cards", 12, 19, 2],
        ["ePHI", 12, 19, 2],
        ["GDPR", 12, 19, 2],
        ["Health Data", 12, 19, 2],
        ["PII", 10, 44, 2],
      ],
      exploitedPermission: [
        ["Entitlement", "Occurances"],
        ["Share Access", 71],
        ["Modify Group Membership", 66],
        ["Hash Session ON", 5],
        ["Local Admin", 5],
        ["Reset Password", 5],
        ["Member of", 5],
      ],
      vulnerabilities: [
        ["Edge", "Occurances"],
        ["Modify Group Membership > SBCLOUDLABDomain Admins", 47],
        ["Share Access > Credentials", 13],
        ["Share Access > Health Data", 12],
        ["Modify Group Membership > SBCLOUDLABInformation Technology", 12],
        ["Share Access > GDPR", 12],
        ["Share Access > Credit Cards", 12],
      ],
      filters: ["filter", "dropdown", "arrows"],
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
          <div class="col-xl-6 col-md-12">
            <ChartView heading="Top Shares By Sensitive File Count" :chartData="sesitiveFilesChart"/>
          </div>
          <div class="col-xl-6 col-md-12">
            <PanelTable
              heading="Top Shares by Sensitive File Count"
              :tableData="sesitiveFiles"
              :filters="['filter']"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6 col-md-12">
            <PanelTable
              heading="Exploited Permission"
              :tableData="exploitedPermission"
              :filters="['filter']"
            />
          </div>
          <div class="col-xl-6 col-md-12">
            <PanelTable
              heading="Vulnerabilities"
              :tableData="vulnerabilities"
              :filters="['filter']"
            />
          </div>
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
