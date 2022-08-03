
<script>
import AppHeader from "./AppHeader.vue";
import Netwrix6Part from "./Netwrix6Part.vue";
import Netwrix6Part2 from "./Netwrix6Part2.vue";
import ChartView from "./ChartView.vue";
import PanelTable from "./PanelTable.vue";
export default {
  name: "Netwrix6",
  components: {
    AppHeader,
    Netwrix6Part,
    Netwrix6Part2,
    ChartView,
    PanelTable
  },
  data() {
    return {
      foldersData: {
        type: "pie",
        data: {
          labels: ["Open Access", "Private"],
          datasets: [
            {
              data: [10, 177],
              fill: false,
              backgroundColor: ["rgb(205, 149, 249)", "rgb(255, 99, 107)"],
              borderColor: "1px solid #FC5555",
              borderWidth: 1,
            },
          ],
        },
      },
      sharedFolders: [
        ["Host", "Shares", "Folders", "Files"],
        ["FS02", 10, 1777, 65140],
      ],
    };
  },
};
</script>
<template>
  <div class="">
    <AppHeader :items="['Home','File System']"/>
    <div class="container">
      <Netwrix6Part />
      <div class="statistics_section_main">
        <div class="statistics_section">
          <Netwrix6Part2 heading="File Servers" content="2" />
          <Netwrix6Part2 heading="File Size (tb)" content="0" />
          <Netwrix6Part2 heading="Open Folders" content="60" />
          <Netwrix6Part2 heading="File Size (tb)" content="0" />
          <Netwrix6Part2 heading="Open Folders" content="60" />
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6 col-md-12">
          <ChartView
            heading="Folders by Open Access"
            :chartData="foldersData"
          />
        </div>
        <div class="col-xl-6 col-md-12">
          <PanelTable
            heading=""
            :tableData="sharedFolders"
            :filters="[]"
          />
        </div>
      </div>
    </div>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.statistics_section_main {
  display: flex;
  margin: 30px 0px;
}
.statistics_section {
  display: flex;
  text-align: center;
  margin: 0 auto;
}
</style>
