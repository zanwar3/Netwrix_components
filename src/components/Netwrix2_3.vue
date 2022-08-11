
<script>
import PanelTable from "./PanelTable.vue";
import AppHeader from "./AppHeader.vue";
import MenuBox from "./MenuBox.vue";
export default {
  name: "Netwrix2_3",
  components: {
    PanelTable,
    AppHeader,
    MenuBox
},
  data() {
    return {
      breadList: [
        
      ],
      findingsData: [
        ["ENT\JeffChia [JeffChia]", "6/22/2022 12:40 PM"],
        ["ENT\markr [Mark Richmond]", "6/22/2022 12:38 PM"],
        ["ENT\CristinaPotra [CristinaPotra]", "6/22/2022 12:00 PM"],
        ["ENT\Ryun [Rum Yun]", "6/22/2022 11:45 PM"],
        ["ENT\KevinCook [KevinCook]", "6/22/2022 10:02 PM"],
        ["ENT\jdow [John Dow]", "6/22/2022 10:00 PM"],
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
        <div class="menu_boxes">
          <div class="mx-auto my-60">
            <MenuBox heading="Resource Audit" 
              className="box_red" 
              svgPath="M26.4375 4.5625C27.75 4.09375 29.1562 4.09375 30.4688 4.5625L48.4688 11.0312C50.8125 11.875 52.5 14.125 52.5 16.6562V39.4375C52.5 41.9688 50.8125 44.2188 48.4688 45.0625L30.4688 51.5312C29.1562 52 27.75 52 26.4375 51.5312L8.4375 45.0625C6.09375 44.2188 4.5 41.9688 4.5 39.4375V16.6562C4.5 14.125 6.09375 11.875 8.4375 11.0312L26.4375 4.5625ZM28.5 10.1875L12.1875 16L28.5 21.8125L44.7188 16L28.5 10.1875ZM31.5 44.7812L46.5 39.4375V21.8125L31.5 27.1562V44.7812Z"
            />

            <MenuBox heading="Resource Owners" 
              className="box_blue" 
              svgPath="M30.4062 34C35.8438 34 40.1562 29.6875 40.1562 24.25C40.1562 18.9062 35.75 14.5 30.4062 14.5C25.0625 14.5 20.75 18.9062 20.75 24.25C20.6562 29.6875 25.0625 34 30.4062 34ZM35.0938 37H25.8125C18.4062 37 12.5 42.625 12.5 49.5625C12.5 50.9688 13.625 52 15.125 52H45.7812C47.2812 52 48.5 50.9688 48.5 49.5625C48.5 42.625 42.5 37 35.0938 37ZM48.5 19C52.625 19 56 15.7188 56 11.5C56 7.375 52.625 4 48.5 4C44.2812 4 41 7.375 41 11.5C41 15.7188 44.2812 19 48.5 19ZM17.6562 24.25C17.6562 23.7812 17.75 23.3125 17.8438 22.8438C16.8125 22.2812 15.6875 22 14.4688 22H8.75C4.15625 22 0.5 25.9375 0.5 30.8125C0.5 31.75 1.15625 32.5 2.09375 32.5H20.8438C18.875 30.3438 17.6562 27.4375 17.6562 24.25ZM12.5 19C16.625 19 20 15.7188 20 11.5C20 7.375 16.625 4 12.5 4C8.28125 4 5 7.375 5 11.5C5 15.7188 8.28125 19 12.5 19ZM52.1562 22H46.4375C45.2188 22 44.0938 22.375 43.0625 22.8438C43.0625 23.3125 43.1562 23.7812 43.1562 24.25C43.1562 27.4375 42.0312 30.3438 40.0625 32.5H58.8125C59.75 32.5 60.5 31.75 60.5 30.8125C60.5 25.9375 56.75 22 52.1562 22Z"
            />

            <MenuBox heading="Resource Reviews" 
              className="box_green" 
              svgPath="M49.5 7H7.5C4.125 7 1.5 9.71875 1.5 13V43C1.5 46.375 4.125 49 7.5 49H49.5C52.7812 49 55.5 46.375 55.5 43V13C55.5 9.71875 52.7812 7 49.5 7ZM18 16C21.2812 16 24 18.7188 24 22C24 25.375 21.2812 28 18 28C14.625 28 12 25.375 12 22C12 18.7188 14.625 16 18 16ZM27 40H9C8.15625 40 7.5 39.3438 7.5 38.5C7.5 34.375 10.7812 31 15 31H21C25.125 31 28.5 34.375 28.5 38.5C28.5 39.3438 27.75 40 27 40ZM48 34H36C35.1562 34 34.5 33.3438 34.5 32.5C34.5 31.75 35.1562 31 36 31H48C48.75 31 49.5 31.75 49.5 32.5C49.5 33.3438 48.75 34 48 34ZM48 28H36C35.1562 28 34.5 27.3438 34.5 26.5C34.5 25.75 35.1562 25 36 25H48C48.75 25 49.5 25.75 49.5 26.5C49.5 27.3438 48.75 28 48 28ZM48 22H36C35.1562 22 34.5 21.3438 34.5 20.5C34.5 19.75 35.1562 19 36 19H48C48.75 19 49.5 19.75 49.5 20.5C49.5 21.3438 48.75 22 48 22Z"
            />

            <MenuBox heading="Access Request" 
              className="box_purple" 
              svgPath="M13.5 19H43.5V37H13.5V19ZM49.5 10C52.7812 10 55.5 12.7188 55.5 16V23.5C52.9688 23.5 51 25.5625 51 28C51 30.5312 52.9688 32.5 55.5 32.5V40C55.5 43.375 52.7812 46 49.5 46H7.5C4.125 46 1.5 43.375 1.5 40V32.5C3.9375 32.5 6 30.5312 6 28C6 25.5625 3.9375 23.5 1.5 23.5V16C1.5 12.7188 4.125 10 7.5 10H49.5ZM10.5 37C10.5 38.6875 11.8125 40 13.5 40H43.5C45.0938 40 46.5 38.6875 46.5 37V19C46.5 17.4062 45.0938 16 43.5 16H13.5C11.8125 16 10.5 17.4062 10.5 19V37Z"
            />
          </div>
        </div>

        <div class="flex_container">
          <div class="two_col">
            <PanelTable
              heading="Recent Research"
              :tableData="findingsData"
              :filters="[]"
            />
          </div>
          <div class="two_col">
            <PanelTable
              heading=""
              :tableData="sharedFolders"
              :filters="[]"
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
