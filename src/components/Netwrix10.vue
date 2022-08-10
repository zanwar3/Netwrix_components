
<script>
import AppHeader from "./AppHeader.vue";
import ChartView from "./ChartView.vue";
import SectionHeader from "./SectionHeader.vue";
import PanelTable from "./PanelTable.vue";
import PanelTabsTable from "./PanelTabsTable.vue";
export default {
  name: "Netwrix8",
  components: {
    AppHeader,
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
      tabsData: ["High", "Low", "Medium"],
      details: [
        [
          ["Categaory", "Check", "Findings"],
          ["Open Access", "% of All shares", 60],
          ["Sensitive Data", "% of files exposed Through Open Access", 73],
        ],
        [
          ["Categaory", "Check", "Findings"],
          ["Open Access", "% of All shares", 60],
          ["Sensitive Data ", "% of files exposed Through Open Access", 73],
          ["Stale Data", "Folders with Stale Data ", 1744],
          ["Stale Data", "Stale Files", 57085],
          ["Direct Permissions", "Direct User Permissions", 94],
          ["Activity", "Active Users", 5],
          ["Open Access", "% of Users with High Risk Activity", 0],
          ["Broken Inheritance", "Folders with Permission Changes", 140],
          ["Direct Permissions", "Folders with Local Account Permissions", 16],
          ["Direct Permissions", "Nested Shares", 1],
        ],
        [
          ["Categaory", "Check", "Findings"],
          ["Open Access 2", "% of All shares", 60],
          ["Sensitive Data 2", "% of files exposed Through Open Access", 73],
          ["Stale Data 2", "Folders with Stale Data ", 1744],
          ["Stale Data 2", "Stale Files", 57085],
          ["Direct Permissions", "Direct User Permissions", 94],
          ["Activity", "Active Users", 5],
          ["Open Access", "% of Users with High Risk Activity", 0],
          ["Broken Inheritance", "Folders with Permission Changes", 140],
          ["Direct Permissions", "Folders with Local Account Permissions", 16],
          ["Direct Permissions", "Nested Shares", 1],
        ],
      ]
    };
  },
};
</script>
<template>
  <div>
    <div class="main_section">
      <AppHeader :items="['Home', 'File System', 'Security Assesment']" />
      <SectionHeader
        heading="Security Assessment"
        content="DESCRIPTION This report identifies common issues and vulnerabilities across your file systems."
      />
      <div class="container">
        <div class="row">
          <div class="col-md-24">
            <PanelTable heading="Scope" :tableData="scopeData" :filters="[]" />
          </div>
        </div>
        <div class="flex_container">
          <div class="two_col">
            <chartView heading=" " :chartData="sesitiveFilesChart" />
          </div>
          <div class="two_col">
            <PanelTable
              heading="Findings by category"
              :tableData="findingsData"
              :filters="['filter']"
            />
          </div>
        </div>
        <PanelTabsTable
          heading=" "
          :tabsContent="details"
          :tabsData="tabsData"
          :filters="['filter']"
          :tabsHeading="'Risk'"
          :activeTab="0"
        />
      </div>
    </div>
  </div>
</template>