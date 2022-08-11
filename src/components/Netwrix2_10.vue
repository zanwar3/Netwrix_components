
<script>
import PanelTable from "./PanelTable.vue";
import AppHeader from "./AppHeader.vue";
export default {
  name: "Netwrix2_10",
  components: {
    PanelTable,
    AppHeader,
},
  data() {
    return {
      breadList: [
        "Home",
        "Resourse Ownership",
        "Pending Reviews",
        "Resource Review"
      ],
      findingsData: [
        ["Trustee Name", "User Title", "User Department", "Full Control", "Modify", "Read", "Recommendation"],
        ["Sarah Lee", "Internal auditor", "Legal", "", "", "", "No domain login for 60 days"],
        ["Alexandre Silva", "CFO", "Finance", "", "", "", "No domain login for 60 days"],
        ["Alex Simmons", "Accountant", "Accounting", "", "", "", "No domain login for 60 days"],
        ["Joseph Sanders", "Sales representative", "Sales", "", "", "", "User has no activity"],
        ["April Regan", "HR manager", "Accounting", "", "", "", "No domain login for 60 days"],
        ["Andrew Rogan", "Accounting Team Lead", "Accounting", "", "", "", "User has no activity"],
        ["Stan Smith", "Accountant", "Accounting", "", "", "", "User has no activity"],
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
        <div class="tabs">
          <div class="d-flex pad-10 w-100 active">
            <div class="d-flex">
              <span>1</span>
            </div>
            <div>
              <h5>Make changes</h5>
              <p>Change any items that are not in their desired state</p>
            </div>
          </div>
          <div class="d-flex pad-10 w-100">
            <div class="d-flex">
              <span>2</span>
            </div>
            <div>
              <h5>Review changes</h5>
              <p>After reviewing your changes click the Submit button to complete your review</p>
            </div>
          </div>
        </div>
        <div class="table_tabs py-40">
          <div class="d-flex">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 0.75H2.625C1.64062 0.75 0.875 1.54297 0.875 2.5V13C0.875 13.9844 1.64062 14.75 2.625 14.75H10.5C11.457 14.75 12.25 13.9844 12.25 13V2.5C12.25 1.54297 11.457 0.75 10.5 0.75ZM6.5625 4.25C7.51953 4.25 8.3125 5.04297 8.3125 6C8.3125 6.98438 7.51953 7.75 6.5625 7.75C5.57812 7.75 4.8125 6.98438 4.8125 6C4.8125 5.04297 5.57812 4.25 6.5625 4.25ZM9.1875 11.25H3.9375C3.69141 11.25 3.5 11.0586 3.5 10.8125C3.5 9.60938 4.45703 8.625 5.6875 8.625H7.4375C8.64062 8.625 9.625 9.60938 9.625 10.8125C9.625 11.0586 9.40625 11.25 9.1875 11.25ZM13.5625 2.5H13.125V5.125H13.5625C13.7812 5.125 14 4.93359 14 4.6875V2.9375C14 2.71875 13.7812 2.5 13.5625 2.5ZM13.5625 6H13.125V8.625H13.5625C13.7812 8.625 14 8.43359 14 8.1875V6.4375C14 6.21875 13.7812 6 13.5625 6ZM13.5625 9.5H13.125V12.125H13.5625C13.7812 12.125 14 11.9336 14 11.6875V9.9375C14 9.71875 13.7812 9.5 13.5625 9.5Z" fill="#229CFB"/>
            </svg>
            <p>You are reviewing: Access</p>
          </div>
          <div class="d-flex">
            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.7031 3.6875V11.5625C14.7031 12.3008 14.1016 12.875 13.3906 12.875H2.01562C1.27734 12.875 0.703125 12.3008 0.703125 11.5625V1.9375C0.703125 1.22656 1.27734 0.625 2.01562 0.625H6.39062L8.14062 2.375H13.3906C14.1016 2.375 14.7031 2.97656 14.7031 3.6875Z" fill="#229CFB"/>
            </svg>
            <p>\\FS02\accounting</p>
          </div>
          <div class="d-flex">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.51562 0.75C11.3711 0.75 14.5156 3.89453 14.5156 7.75C14.5156 11.6328 11.3711 14.75 7.51562 14.75C6.01172 14.75 4.64453 14.2852 3.49609 13.5195C3.11328 13.2188 3.00391 12.6719 3.27734 12.2891C3.55078 11.8789 4.09766 11.7969 4.50781 12.0703C5.35547 12.6719 6.39453 13 7.51562 13C10.4141 13 12.7656 10.6484 12.7656 7.75C12.7656 4.85156 10.4141 2.5 7.51562 2.5C6.03906 2.5 4.75391 3.10156 3.79688 4.05859L4.64453 4.87891C5.05469 5.31641 4.75391 6 4.17969 6H1.17188C0.789062 6 0.515625 5.72656 0.515625 5.34375V2.33594C0.515625 1.76172 1.19922 1.46094 1.60938 1.87109L2.53906 2.80078C3.82422 1.54297 5.57422 0.75 7.48828 0.75H7.51562ZM7.51562 4.25C7.87109 4.25 8.17188 4.55078 8.17188 4.90625V7.50391L9.92188 9.25391C10.1953 9.52734 10.1953 9.9375 9.92188 10.1836C9.67578 10.457 9.26562 10.457 9.01953 10.1836L7.05078 8.21484C6.91406 8.10547 6.85938 7.94141 6.85938 7.75V4.90625C6.85938 4.55078 7.13281 4.25 7.51562 4.25Z" fill="#229CFB"/>
            </svg>
            <p>3/27/2022 1:41 PM</p>
          </div>
        </div>
        <div>
          <PanelTable
            heading=""
            :tableData="findingsData"
            :filters="[]"
          />
          <button class="table_button bg_gray">PREVIOUS</button>
          <button class="table_button bg_green">NEXT</button>
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
