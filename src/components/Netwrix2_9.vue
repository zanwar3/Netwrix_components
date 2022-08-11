
<script>
import PanelTable from "./PanelTable.vue";
import AppHeader from "./AppHeader.vue";
export default {
  name: "Netwrix2_9",
  components: {
    PanelTable,
    AppHeader,
},
  data() {
    return {
      breadList: [
        "Home",
        "Resourse Ownership",
        "Pending Reviews"
      ],
      findingsData: [
        ["Created", "Review Type", "Resource Name", "In Progress", "Last Reviewed"],
        ["2 minutes ago", "Access", "\\FS02\accounting", "", "3/27/2022 1:41 PM"],
        ["6/11/2022 12:14 PM", "Sensitive data", "\\FS02\finance", "", "No previous review"],
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
        <div class="py-40">
          <PanelTable
            heading="A list of reviews that are waiting for you to complete."
            :tableData="findingsData"
            :filters="[]"
          />
          <button class="table_button">BEGIN REVIEW</button>
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
.py-40 {
  padding: 40px 0px;
}
</style>
