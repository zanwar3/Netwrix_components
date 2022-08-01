
<script>
import BarchartView from "./BarchartView.vue";
import SectionHeader from "./SectionHeader.vue";
import PanelContent from "./PanelContent.vue";
import TableContent from "./TableContent.vue";
export default {
  name: "Netwrix8",
  components: {
    BarchartView,
    SectionHeader,
    PanelContent,
    TableContent
  },
  data() {
    return {};
  },
};
</script>
<template>
  <div>
    <div class="main_section">
      <SectionHeader heading="Shares with Sensitive Content" content="This report identifies the location of sensitive data, and flags whether or not this data is accessible through open access." />
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-md-12">
            <BarchartView heading="Top Shares By Sensitive File Count" />
          </div>
          <div class="col-xl-6 col-md-12">
            <PanelContent heading="Top Shares by Sensitive File Count" />
          </div>
        </div>
        <div class="col-xl-12">
          <TableContent heading="File Details" />
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
