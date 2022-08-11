
<script>
import ChartView from "./ChartView.vue";
import ChartView2 from "./ChartView2.vue";
import SectionHeader from "./SectionHeader.vue";
import PanelTable from "./PanelTable.vue";
import AppHeader from "./AppHeader.vue";
import MenuBox from "./MenuBox.vue";
export default {
  name: "Netwrix2_4",
  components: {
    ChartView,
    ChartView2,
    SectionHeader,
    PanelTable,
    AppHeader,
    MenuBox
},
  data() {
    return {
      sesitiveFilesChart: {
        type: "pie",
        data: {
          labels: ["Waiting", "Complete"],
          datasets: [
            {
              label: "Daily Review Responses Staus",
              data: [85, 15],
              backgroundColor: [
                "rgba(252, 128, 39, 1)",
                "rgba(52, 191, 70, 1)",
              ],
              hoverOffset: 4,
            },
          ],
        },
      },
      dailyReviewResponseChart: {
        type: "line",
        data: {
          labels: ["6/20/2022", "6/28/2022", "7/6/2022", "7/14/2022"],
          datasets: [
            {
              label: "Daily Review Responses",
              data: [0, 40, 20, 60],
              backgroundColor: [
                "rgba(76, 215, 206, 0)",
              ],
            },
          ],
          chartId: "line_chart"
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
        "Manage Reviews"
      ],
      findingsData: [
        ["Name", "Type", "Status", "Created By", "Created On", "Finished On"],
        ["Accounting Access Review", "Access", "Completed", "ENT\Administrator", "7/27/2022 9:55 AM", "7/31/2022 1:17 PM"],
        ["Finance Access Review", "Access", "Completed", "ENT\Administrator", "6/11/2022 7:55 PM", "7/01/2022 3:27 PM"],
        ["HR sensitive data review", "Sensitive Data", "", "ENT\Administrator", "4/16/2021 3:35 PM", ""],
        ["Local Admin Membership review", "Membership", "", "ENT\Administrator", "3/1/2022 1:50 PM", ""],
        ["Quarterly Access Review Q1", "Access", "", "ENT\Administrator", "3/21/2022 8:57 AM", ""],
        ["SharePoint Sensitive Data", "Sensitive Data", "", "ENT\Administrator", "3/30/2022 7:13 AM", ""],
        ["Q1SharePoint Permissions review Q2", "Permissions", "", "ENT\Administrator", "5/12/2021 5:59 PM", ""],
      ],
      sharedFolders: [
        ["Host", "Shares", "Folders", "Files"],
        ["FS02", 10, 1777, 65140],
      ],
    };
  },
};
</script>

<template>
  <div>
    <AppHeader :items="breadList" />
    <div class="main_section">
      <div class="container">
        <div class="flex_container">
          <div class="one_third">
            <PanelTable
              heading="Below is list of entitlement reviews and their status. Select a review to view the list of resources and received responses from reviewers.  "
              :tableData="findingsData"
              :filters="filters"
            />
          </div>
          <div>
            <ChartView2 
              heading="Daily Review Responses"
              :chartData="dailyReviewResponseChart"
              :align="''"
            />
            <ChartView
              heading="Daily Review Responses Staus"
              :chartData="sesitiveFilesChart"
              :align="''"
            />
          </div>
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
  .flex_container {
    padding: 60px 0px;
  }
}
.menu_boxes {
  display: flex;
  .mx-auto {
    display: flex;
    margin: 0 auto;
  }
  .my-60 {
    margin-top: 60px;
    margin-bottom: 60px;
  }
}
</style>
