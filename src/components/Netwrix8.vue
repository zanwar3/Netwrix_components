
<script>
import AppHeader from "./AppHeader.vue";
import ChartView from "./ChartView.vue";
import SectionHeader from "./SectionHeader.vue";
import PanelTable from "./PanelTable.vue";
export default {
  name: "Netwrix8",
  components: {
    AppHeader,
    ChartView,
    SectionHeader,
    PanelTable,
  },
  data() {
    return {
      sesitiveFilesChart: {
        type: "horizontalBar",
        data: {
          labels: [
            "\\\\FS02\\Public",
            "\\\\FS02\\HR Department",
            "\\\\FS02\\Finance",
            "\\\\FS02\\accounting",
            "\\\\FS02\\documentation",
          ],
          datasets: [
            {
              axis: "y",
              label: "Sensitive Files",
              data: [143, 78, 70, 68, 60, 0],
              fill: false,
              backgroundColor: "rgba(255, 71, 81, 0.5)",
              borderColor: "1px solid #FC5555",
              borderWidth: 1,
            },
          ],
        },
        options: {
          indexAxis: "y",
        },
      },
      sesitiveFiles: [
        ["Public", "Sensitive Files", "Total Matches"],
        ["\\\\FS02\\Public", 143, 613],
        ["\\\\FS02\\HR Department", 78, 97],
        ["\\\\FS02\\Finance", 70, 257],
        ["\\\\FS02\\accounting", 68, 254],
        ["\\\\FS02\\documentation", 60, 5],
      ],
      fileDetails: [
        ["Host", "Share", "Criteria", "File", "Matches", "Open Access"],
        [
          "FS02",
          "Accounting",
          "US SSN",
          "\\FS02accountingFinancialsDepartme",
          "94",
          "False",
        ],
        [
          "FS02",
          "Public",
          "US SSN",
          "\\FS02accountingFinancialsDepartme",
          "94",
          "False",
        ],
        [
          "FS02",
          "Accounting",
          "US SSN",
          "\\FS02accountingFinancialsDepartme",
          "109",
          "False",
        ],
        [
          "FS02",
          "Public",
          "US SSN",
          "\\FS02accountingFinancialsDepartme",
          "109",
          "False",
        ],
        [
          "FS02",
          "documentation",
          "US SSN",
          "\\FS02accountingFinancialsDepartme",
          "2",
          "False",
        ],
      ],
      filters: ["filter", "dropdown", "arrows"],
    };
  },
};
</script>
<template>
  <div>
    <div class="main_section">
      <AppHeader :items="['Home','File System','Sensitive Data', 'Share Details']"/>
      <SectionHeader
        heading="Shares with Sensitive Content"
        content="This report identifies the location of sensitive data, and flags whether or not this data is accessible through open access."
      />
      <div class="container">
        <div class="flex_container">
          <div class="two_col">
            <chartView
              heading="Top Shares By Sensitive File Count"
              :chartData="sesitiveFilesChart"
            />
          </div>
          <div class="two_col">
            <PanelTable
              heading="Top Shares by Sensitive File Count"
              :tableData="sesitiveFiles"
              :filters="['filter']"
            />
          </div>
        </div>
        <div>
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
