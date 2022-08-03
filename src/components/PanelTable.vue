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
          <tr class="grey-bg">
            <th v-if="filters.includes('filter')"><i class="fa fa-solid fa-filter"></i></th>
            <th v-if="filters.includes('dropdown')">
              Group by:
              <div class="btn-group">
                <select v-model="selected">
                  <option disabled value="">Please select one</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
              <i v-if="filters.includes('arrows')" class="fa fa-chevron-circle-down" aria-hidden="true"></i>
              <i v-if="filters.includes('arrows')" class="fa fa-chevron-circle-up" aria-hidden="true"></i>
            <th>
              
            </th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tableRow, index) in tableData" :class="{'light-black' : index == 0 }">
            <td scope="row">{{tableRow[0]}}</td>
            <td>{{tableRow[1]}}</td>
            <td>{{tableRow[2]}}</td>
            <td>{{tableRow[3]}}</td>
            <td>{{tableRow[4]}}</td>
            <td>{{tableRow[5]}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
