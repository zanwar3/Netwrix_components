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
              <span v-if="filters.includes('filter')">
                <svg
                  width="15"
                  height="13"
                  viewBox="0 0 15 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.693359 1.25391C0.884766 0.871094 1.26758 0.625 1.70508 0.625H13.5176C13.9277 0.625 14.3105 0.871094 14.502 1.25391C14.666 1.63672 14.6113 2.10156 14.3379 2.42969L9.36133 8.52734V12C9.36133 12.3555 9.16992 12.6562 8.86914 12.793C8.56836 12.9297 8.21289 12.9023 7.93945 12.7109L6.18945 11.3984C5.9707 11.2344 5.86133 10.9883 5.86133 10.6875V8.52734L0.857422 2.42969C0.583984 2.10156 0.529297 1.63672 0.693359 1.25391Z"
                    fill="#B7BCC1"
                  />
                </svg>
              </span>
            </th>
            <th colspan="100%">
              <div class="flex_container">
                <span
                  v-if="filters.includes('dropdown')"
                  style="margin-right: 10px"
                >
                  Group by:
                  <span class="btn-group">
                    <select
                      v-model="selected"
                      style="border: none; background: none"
                    >
                      <option disabled value="">None</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                    </select>
                  </span>
                </span>
                <span v-if="filters.includes('arrows')">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0C3.5625 0 0 3.59375 0 8C0 12.4375 3.5625 16 8 16C12.4062 16 16 12.4375 16 8C16 3.59375 12.4062 0 8 0ZM12.1875 7.71875L8.6875 11.2188C8.5 11.4062 8.25 11.5 8 11.5C7.71875 11.5 7.46875 11.4062 7.28125 11.2188L3.78125 7.71875C3.375 7.34375 3.375 6.6875 3.78125 6.3125C4.15625 5.90625 4.8125 5.90625 5.1875 6.3125L8 9.09375L10.7812 6.3125C11.1562 5.90625 11.8125 5.90625 12.1875 6.3125C12.5938 6.6875 12.5938 7.34375 12.1875 7.71875Z"
                      fill="#B7BCC1"
                    />
                  </svg>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 0C4.0625 0 0.5 3.59375 0.5 8C0.5 12.4375 4.0625 16 8.5 16C12.9062 16 16.5 12.4375 16.5 8C16.5 3.59375 12.9062 0 8.5 0ZM12.6875 9.71875C12.3125 10.125 11.6562 10.125 11.2812 9.71875L8.5 6.9375L5.6875 9.71875C5.3125 10.125 4.65625 10.125 4.28125 9.71875C3.875 9.34375 3.875 8.6875 4.28125 8.3125L7.78125 4.8125C7.96875 4.625 8.21875 4.5 8.5 4.5C8.75 4.5 9 4.625 9.1875 4.8125L12.6875 8.3125C13.0938 8.6875 13.0938 9.34375 12.6875 9.71875Z"
                      fill="#B7BCC1"
                    />
                  </svg>
                </span>
              </div>
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
