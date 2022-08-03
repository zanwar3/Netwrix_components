<script>
export default {
  name: "PanelTable",
  props: {
    heading: String,
    tableData: Array,
    filters: Array,
  },
  components: {},
  data() {
    return {
      selected: "",
    };
  },
};
</script> 

<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">{{ heading }}</h3>
    </div>
    <div class="">
      <table class="table">
        <thead>
          <tr class="grey-bg" v-if="filters.length">
            <th>
              <span v-if="filters.includes('filter')"
                ><i class="fa fa-solid fa-filter"></i
              ></span>
              
            </th>
            <th colspan="100%">
              <span
                v-if="filters.includes('dropdown')"
                style="margin-right: 10px"
              >
                Group by:
                <div class="btn-group">
                  <select v-model="selected" style="border: none;background: none;">
                    <option disabled value="">None</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                </div>
              </span>
              <span v-if="filters.includes('arrows')">
                <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
                <i class="fa fa-chevron-circle-up" aria-hidden="true"></i>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(tableRow, index) in tableData"
            :class="{ 'light-black': index == 0 }"
          >
            <td v-for="tableData in tableRow" scope="row">{{ tableData }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
