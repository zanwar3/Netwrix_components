
<script>
import AppHeader from "./AppHeader.vue";
import ChartView from "./ChartView.vue";
import SectionHeader from "./SectionHeader.vue";
import PanelTable from "./PanelTable.vue";
import PanelTabsTable from "./PanelTabsTable.vue";
export default {
  name: "Netwrix17",
  components: {
    AppHeader,
    ChartView,
    SectionHeader,
    PanelTable,
    PanelTabsTable,
  },
  data() {
    return {
      sesitiveFilesChart: {
        type: "horizontalBar",
        data: {
          labels: [
            "Credentials",
            "Credit cards",
            "ePHI",
            "GDPR",
            "Health Data",
          ],
          datasets: [
            {
              axis: "y",
              label: "Sensitive Files",
              data: [37, 19, 19, 19, 19, 0],
              fill: false,
              backgroundColor: "rgba(52, 191, 70, 0.5)",
              borderColor: "1px solid #29CC6A",
              borderWidth: 1,
            },
            {
              axis: "y",
              label: "Sensitive Files",
              data: [37, 12, 12, 12, 12, 0],
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
        [
          "Sensitive Data",
          "Users with Shadow Access",
          "Users with Access",
          "Average steps",
        ],
        ["Credentials", 13, 27, 2],
        ["Credit cards", 12, 19, 2],
        ["ePHI", 12, 19, 2],
        ["GDPR", 12, 19, 2],
        ["Health Data", 12, 19, 2],
        ["PII", 10, 44, 2],
      ],
      exploitedPermission: [
        ["Entitlement", "Occurances"],
        ["Share Access", 71],
        ["Modify Group Membership", 66],
        ["Hash Session ON", 5],
        ["Local Admin", 5],
        ["Reset Password", 5],
        ["Member of", 5],
      ],
      vulnerabilities: [
        ["Edge", "Occurances"],
        ["Modify Group Membership > SBCLOUDLABDomain Admins", 47],
        ["Share Access > Credentials", 13],
        ["Share Access > Health Data", 12],
        ["Modify Group Membership > SBCLOUDLABInformation Technology", 12],
        ["Share Access > GDPR", 12],
        ["Share Access > Credit Cards", 12],
      ],
      tabsData: [
        "Credentials",
        "Credit cards",
        "ePHI",
        "GDPR",
        "Health Data",
        "PII",
      ],
      userAttackPaths: [["User", "Attack Path"]],
    };
  },
};
</script>
<template>
  <div>
    <div class="main_section">
      <AppHeader :items="['Home', 'Sensitve Data Shadow Access']" />
      <SectionHeader
        heading="Shares with Sensitive Content"
        content="This report identifies the location of sensitive data, and flags whether or not this data is accessible through open access."
        tag="Sensitive Data"
      />
      <div class="container">
        <div class="flex_container">
          <div class="two_col">
            <ChartView
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
        <div class="flex_container">
          <div class="two_col">
            <PanelTable
              heading="Exploited Permission"
              :tableData="exploitedPermission"
              :filters="['filter']"
            />
          </div>
          <div class="two_col">
            <PanelTable
              heading="Vulnerabilities"
              :tableData="vulnerabilities"
              :filters="['filter']"
            />
          </div>
        </div>
        <div class="">
          <div class="">
            <div class="panel panel-primary">
              <div class="panel-heading">
                <h3 class="panel-title"></h3>
              </div>
              <div class="">
                <div class="flex_container">
                  <div class="one_sixth bg-white">
                    <table class="table">
                      <thead>
                        <tr class="grey-bg">
                          <th>
                            <span style="margin-right: 20px">
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
                            <span> Target </span>
                            <span style="float: right">
                              <i
                                class="fa fa-chevron-left"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="active-tab">Credentials</td>
                        </tr>
                        <tr>
                          <td>Credit cards</td>
                        </tr>
                        <tr>
                          <td>ePHI</td>
                        </tr>
                        <tr>
                          <td>GDPR</td>
                        </tr>
                        <tr>
                          <td>Health Data</td>
                        </tr>
                        <tr>
                          <td>PII</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="five_sixth">
                    <table class="table">
                      <thead>
                        <tr class="grey-bg">
                          <th>
                            <span>
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
                          <th colspan="100%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="light-black">
                          <td>User</td>
                          <td>Attack Path</td>
                        </tr>
                        <tr>
                          <td>ENT\\MiguelSeverino</td>
                          <td>
                            <svg class="svg-margin"
                              width="14"
                              height="14"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.5 8.5C0.5 4.09375 4.0625 0.5 8.5 0.5C12.9062 0.5 16.5 4.09375 16.5 8.5C16.5 12.9375 12.9062 16.5 8.5 16.5C4.0625 16.5 0.5 12.9375 0.5 8.5ZM8.5 12C8.90625 12 9.25 11.6875 9.25 11.25V9.25H11.25C11.6562 9.25 12 8.9375 12 8.5C12 8.09375 11.6562 7.75 11.25 7.75H9.25V5.75C9.25 5.34375 8.90625 5 8.5 5C8.0625 5 7.75 5.34375 7.75 5.75V7.75H5.75C5.3125 7.75 5 8.09375 5 8.5C5 8.9375 5.3125 9.25 5.75 9.25H7.75V11.25C7.75 11.6875 8.0625 12 8.5 12Z"
                                fill="#29CC6A"
                              />
                            </svg>

                            ENT\\MiguelSeverino
                            <svg
                              width="17"
                              height="9"
                              viewBox="0 0 17 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.668 5.0625L13.168 8.3125C12.9492 8.53125 12.6367 8.5625 12.3555 8.46875C12.0742 8.34375 11.8867 8.0625 11.8867 7.78125V5.5H1.91797C1.35547 5.5 0.917969 5.0625 0.917969 4.5C0.917969 3.90625 1.35547 3.5 1.91797 3.5H11.8867V1.25C11.8867 0.96875 12.0742 0.6875 12.3555 0.5625C12.6367 0.46875 12.9492 0.5 13.168 0.71875L16.668 3.96875C16.9805 4.25 16.9805 4.78125 16.668 5.0625Z"
                                fill="#354556"
                              />
                            </svg>

                            <a href="#">Modify Group Membership</a>: ENT\\Domain
                            Admins
                            <svg
                              width="17"
                              height="9"
                              viewBox="0 0 17 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.668 5.0625L13.168 8.3125C12.9492 8.53125 12.6367 8.5625 12.3555 8.46875C12.0742 8.34375 11.8867 8.0625 11.8867 7.78125V5.5H1.91797C1.35547 5.5 0.917969 5.0625 0.917969 4.5C0.917969 3.90625 1.35547 3.5 1.91797 3.5H11.8867V1.25C11.8867 0.96875 12.0742 0.6875 12.3555 0.5625C12.6367 0.46875 12.9492 0.5 13.168 0.71875L16.668 3.96875C16.9805 4.25 16.9805 4.78125 16.668 5.0625Z"
                                fill="#354556"
                              />
                            </svg>

                            <a href="#">Share Access</a>: Credentials
                          </td>
                        </tr>
                        <tr>
                          <td>ENT\\AndreasSchou</td>
                          <td>
                            <svg class="svg-margin"
                              width="14"
                              height="14"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.5 8.5C0.5 4.09375 4.0625 0.5 8.5 0.5C12.9062 0.5 16.5 4.09375 16.5 8.5C16.5 12.9375 12.9062 16.5 8.5 16.5C4.0625 16.5 0.5 12.9375 0.5 8.5ZM8.5 12C8.90625 12 9.25 11.6875 9.25 11.25V9.25H11.25C11.6562 9.25 12 8.9375 12 8.5C12 8.09375 11.6562 7.75 11.25 7.75H9.25V5.75C9.25 5.34375 8.90625 5 8.5 5C8.0625 5 7.75 5.34375 7.75 5.75V7.75H5.75C5.3125 7.75 5 8.09375 5 8.5C5 8.9375 5.3125 9.25 5.75 9.25H7.75V11.25C7.75 11.6875 8.0625 12 8.5 12Z"
                                fill="#29CC6A"
                              />
                            </svg>

                            ENT\\AndreasSchou
                            <svg
                              width="17"
                              height="9"
                              viewBox="0 0 17 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.668 5.0625L13.168 8.3125C12.9492 8.53125 12.6367 8.5625 12.3555 8.46875C12.0742 8.34375 11.8867 8.0625 11.8867 7.78125V5.5H1.91797C1.35547 5.5 0.917969 5.0625 0.917969 4.5C0.917969 3.90625 1.35547 3.5 1.91797 3.5H11.8867V1.25C11.8867 0.96875 12.0742 0.6875 12.3555 0.5625C12.6367 0.46875 12.9492 0.5 13.168 0.71875L16.668 3.96875C16.9805 4.25 16.9805 4.78125 16.668 5.0625Z"
                                fill="#354556"
                              />
                            </svg>

                            <a href="#">Modify Group Membership</a>: ENT\\Domain
                            Admins
                            <svg
                              width="17"
                              height="9"
                              viewBox="0 0 17 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.668 5.0625L13.168 8.3125C12.9492 8.53125 12.6367 8.5625 12.3555 8.46875C12.0742 8.34375 11.8867 8.0625 11.8867 7.78125V5.5H1.91797C1.35547 5.5 0.917969 5.0625 0.917969 4.5C0.917969 3.90625 1.35547 3.5 1.91797 3.5H11.8867V1.25C11.8867 0.96875 12.0742 0.6875 12.3555 0.5625C12.6367 0.46875 12.9492 0.5 13.168 0.71875L16.668 3.96875C16.9805 4.25 16.9805 4.78125 16.668 5.0625Z"
                                fill="#354556"
                              />
                            </svg>

                            <a href="#">Share Access</a>: Credentials
                          </td>
                        </tr>
                        <tr>
                          <td>ENT\\AxelDelgado</td>
                          <td>
                            <svg class="svg-margin"
                              width="14"
                              height="14"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.5 8.5C0.5 4.09375 4.0625 0.5 8.5 0.5C12.9062 0.5 16.5 4.09375 16.5 8.5C16.5 12.9375 12.9062 16.5 8.5 16.5C4.0625 16.5 0.5 12.9375 0.5 8.5ZM8.5 12C8.90625 12 9.25 11.6875 9.25 11.25V9.25H11.25C11.6562 9.25 12 8.9375 12 8.5C12 8.09375 11.6562 7.75 11.25 7.75H9.25V5.75C9.25 5.34375 8.90625 5 8.5 5C8.0625 5 7.75 5.34375 7.75 5.75V7.75H5.75C5.3125 7.75 5 8.09375 5 8.5C5 8.9375 5.3125 9.25 5.75 9.25H7.75V11.25C7.75 11.6875 8.0625 12 8.5 12Z"
                                fill="#29CC6A"
                              />
                            </svg>

                            ENT\\AxelDelgado

                            <svg
                              width="17"
                              height="9"
                              viewBox="0 0 17 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.668 5.0625L13.168 8.3125C12.9492 8.53125 12.6367 8.5625 12.3555 8.46875C12.0742 8.34375 11.8867 8.0625 11.8867 7.78125V5.5H1.91797C1.35547 5.5 0.917969 5.0625 0.917969 4.5C0.917969 3.90625 1.35547 3.5 1.91797 3.5H11.8867V1.25C11.8867 0.96875 12.0742 0.6875 12.3555 0.5625C12.6367 0.46875 12.9492 0.5 13.168 0.71875L16.668 3.96875C16.9805 4.25 16.9805 4.78125 16.668 5.0625Z"
                                fill="#354556"
                              />
                            </svg>
                            <a href="#">Local Admin</a>: ENT\\FS02

                            <svg
                              width="17"
                              height="9"
                              viewBox="0 0 17 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.668 5.0625L13.168 8.3125C12.9492 8.53125 12.6367 8.5625 12.3555 8.46875C12.0742 8.34375 11.8867 8.0625 11.8867 7.78125V5.5H1.91797C1.35547 5.5 0.917969 5.0625 0.917969 4.5C0.917969 3.90625 1.35547 3.5 1.91797 3.5H11.8867V1.25C11.8867 0.96875 12.0742 0.6875 12.3555 0.5625C12.6367 0.46875 12.9492 0.5 13.168 0.71875L16.668 3.96875C16.9805 4.25 16.9805 4.78125 16.668 5.0625Z"
                                fill="#354556"
                              />
                            </svg>
                            +2 steps
                            <svg
                              width="17"
                              height="9"
                              viewBox="0 0 17 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.25 3.9375L4.75 0.687501C4.96875 0.468751 5.28125 0.437501 5.5625 0.531251C5.84375 0.656251 6.03125 0.937501 6.03125 1.21875L6.03125 3.5L16 3.5C16.5625 3.5 17 3.9375 17 4.5C17 5.09375 16.5625 5.5 16 5.5L6.03125 5.5L6.03125 7.75C6.03125 8.03125 5.84375 8.3125 5.5625 8.4375C5.28125 8.53125 4.96875 8.5 4.75 8.28125L1.25 5.03125C0.937499 4.75 0.937499 4.21875 1.25 3.9375Z"
                                fill="#354556"
                              />
                            </svg>

                            <a href="#">Share Access</a>: Credentials
                          </td>
                        </tr>
                        <tr>
                          <td>ENT\\BorisScholl</td>
                          <td>
                            <svg class="svg-margin"
                              width="14"
                              height="14"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.5 8.5C0.5 4.09375 4.0625 0.5 8.5 0.5C12.9062 0.5 16.5 4.09375 16.5 8.5C16.5 12.9375 12.9062 16.5 8.5 16.5C4.0625 16.5 0.5 12.9375 0.5 8.5ZM8.5 12C8.90625 12 9.25 11.6875 9.25 11.25V9.25H11.25C11.6562 9.25 12 8.9375 12 8.5C12 8.09375 11.6562 7.75 11.25 7.75H9.25V5.75C9.25 5.34375 8.90625 5 8.5 5C8.0625 5 7.75 5.34375 7.75 5.75V7.75H5.75C5.3125 7.75 5 8.09375 5 8.5C5 8.9375 5.3125 9.25 5.75 9.25H7.75V11.25C7.75 11.6875 8.0625 12 8.5 12Z"
                                fill="#29CC6A"
                              />
                            </svg>

                            ENT\\BorisScholl
                            <svg
                              width="17"
                              height="9"
                              viewBox="0 0 17 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.668 5.0625L13.168 8.3125C12.9492 8.53125 12.6367 8.5625 12.3555 8.46875C12.0742 8.34375 11.8867 8.0625 11.8867 7.78125V5.5H1.91797C1.35547 5.5 0.917969 5.0625 0.917969 4.5C0.917969 3.90625 1.35547 3.5 1.91797 3.5H11.8867V1.25C11.8867 0.96875 12.0742 0.6875 12.3555 0.5625C12.6367 0.46875 12.9492 0.5 13.168 0.71875L16.668 3.96875C16.9805 4.25 16.9805 4.78125 16.668 5.0625Z"
                                fill="#354556"
                              />
                            </svg>

                            <a href="#">Modify Group Membership</a>:
                            ENT\\Finance
                            <svg
                              width="17"
                              height="9"
                              viewBox="0 0 17 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.668 5.0625L13.168 8.3125C12.9492 8.53125 12.6367 8.5625 12.3555 8.46875C12.0742 8.34375 11.8867 8.0625 11.8867 7.78125V5.5H1.91797C1.35547 5.5 0.917969 5.0625 0.917969 4.5C0.917969 3.90625 1.35547 3.5 1.91797 3.5H11.8867V1.25C11.8867 0.96875 12.0742 0.6875 12.3555 0.5625C12.6367 0.46875 12.9492 0.5 13.168 0.71875L16.668 3.96875C16.9805 4.25 16.9805 4.78125 16.668 5.0625Z"
                                fill="#354556"
                              />
                            </svg>
                            +2 steps
                            <svg
                              width="17"
                              height="9"
                              viewBox="0 0 17 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.668 5.0625L13.168 8.3125C12.9492 8.53125 12.6367 8.5625 12.3555 8.46875C12.0742 8.34375 11.8867 8.0625 11.8867 7.78125V5.5H1.91797C1.35547 5.5 0.917969 5.0625 0.917969 4.5C0.917969 3.90625 1.35547 3.5 1.91797 3.5H11.8867V1.25C11.8867 0.96875 12.0742 0.6875 12.3555 0.5625C12.6367 0.46875 12.9492 0.5 13.168 0.71875L16.668 3.96875C16.9805 4.25 16.9805 4.78125 16.668 5.0625Z"
                                fill="#354556"
                              />
                            </svg>

                            <a href="#">Share Access</a>: Credentials
                          </td>
                        </tr>
                        <tr>
                          <td>ENT\\ChrisBryant</td>
                          <td>
                            <svg class="svg-margin"
                              width="14"
                              height="14"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.5 8.5C0.5 4.09375 4.0625 0.5 8.5 0.5C12.9062 0.5 16.5 4.09375 16.5 8.5C16.5 12.9375 12.9062 16.5 8.5 16.5C4.0625 16.5 0.5 12.9375 0.5 8.5ZM8.5 12C8.90625 12 9.25 11.6875 9.25 11.25V9.25H11.25C11.6562 9.25 12 8.9375 12 8.5C12 8.09375 11.6562 7.75 11.25 7.75H9.25V5.75C9.25 5.34375 8.90625 5 8.5 5C8.0625 5 7.75 5.34375 7.75 5.75V7.75H5.75C5.3125 7.75 5 8.09375 5 8.5C5 8.9375 5.3125 9.25 5.75 9.25H7.75V11.25C7.75 11.6875 8.0625 12 8.5 12Z"
                                fill="#29CC6A"
                              />
                            </svg>

                            ENT\\ChrisBryant
                            <svg
                              width="17"
                              height="9"
                              viewBox="0 0 17 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.668 5.0625L13.168 8.3125C12.9492 8.53125 12.6367 8.5625 12.3555 8.46875C12.0742 8.34375 11.8867 8.0625 11.8867 7.78125V5.5H1.91797C1.35547 5.5 0.917969 5.0625 0.917969 4.5C0.917969 3.90625 1.35547 3.5 1.91797 3.5H11.8867V1.25C11.8867 0.96875 12.0742 0.6875 12.3555 0.5625C12.6367 0.46875 12.9492 0.5 13.168 0.71875L16.668 3.96875C16.9805 4.25 16.9805 4.78125 16.668 5.0625Z"
                                fill="#354556"
                              />
                            </svg>

                            <a href="#">Reset Password</a>: ENT\\Domain Admins
                            <svg
                              width="17"
                              height="9"
                              viewBox="0 0 17 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.668 5.0625L13.168 8.3125C12.9492 8.53125 12.6367 8.5625 12.3555 8.46875C12.0742 8.34375 11.8867 8.0625 11.8867 7.78125V5.5H1.91797C1.35547 5.5 0.917969 5.0625 0.917969 4.5C0.917969 3.90625 1.35547 3.5 1.91797 3.5H11.8867V1.25C11.8867 0.96875 12.0742 0.6875 12.3555 0.5625C12.6367 0.46875 12.9492 0.5 13.168 0.71875L16.668 3.96875C16.9805 4.25 16.9805 4.78125 16.668 5.0625Z"
                                fill="#354556"
                              />
                            </svg>

                            <a href="#">Share Access</a>: Credentials
                          </td>
                        </tr>
                        <tr>
                          <td>ENT\\DenisDehenne</td>
                          <td>
                            <svg class="svg-margin"
                              width="14"
                              height="14"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.5 8.5C0.5 4.09375 4.0625 0.5 8.5 0.5C12.9062 0.5 16.5 4.09375 16.5 8.5C16.5 12.9375 12.9062 16.5 8.5 16.5C4.0625 16.5 0.5 12.9375 0.5 8.5ZM8.5 12C8.90625 12 9.25 11.6875 9.25 11.25V9.25H11.25C11.6562 9.25 12 8.9375 12 8.5C12 8.09375 11.6562 7.75 11.25 7.75H9.25V5.75C9.25 5.34375 8.90625 5 8.5 5C8.0625 5 7.75 5.34375 7.75 5.75V7.75H5.75C5.3125 7.75 5 8.09375 5 8.5C5 8.9375 5.3125 9.25 5.75 9.25H7.75V11.25C7.75 11.6875 8.0625 12 8.5 12Z"
                                fill="#29CC6A"
                              />
                            </svg>

                            ENT\\DenisDehenne
                            <svg
                              width="17"
                              height="9"
                              viewBox="0 0 17 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.668 5.0625L13.168 8.3125C12.9492 8.53125 12.6367 8.5625 12.3555 8.46875C12.0742 8.34375 11.8867 8.0625 11.8867 7.78125V5.5H1.91797C1.35547 5.5 0.917969 5.0625 0.917969 4.5C0.917969 3.90625 1.35547 3.5 1.91797 3.5H11.8867V1.25C11.8867 0.96875 12.0742 0.6875 12.3555 0.5625C12.6367 0.46875 12.9492 0.5 13.168 0.71875L16.668 3.96875C16.9805 4.25 16.9805 4.78125 16.668 5.0625Z"
                                fill="#354556"
                              />
                            </svg>

                            <a href="#">Modify Group Membership</a>: ENT\\Domain
                            Admins
                            <svg
                              width="17"
                              height="9"
                              viewBox="0 0 17 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.668 5.0625L13.168 8.3125C12.9492 8.53125 12.6367 8.5625 12.3555 8.46875C12.0742 8.34375 11.8867 8.0625 11.8867 7.78125V5.5H1.91797C1.35547 5.5 0.917969 5.0625 0.917969 4.5C0.917969 3.90625 1.35547 3.5 1.91797 3.5H11.8867V1.25C11.8867 0.96875 12.0742 0.6875 12.3555 0.5625C12.6367 0.46875 12.9492 0.5 13.168 0.71875L16.668 3.96875C16.9805 4.25 16.9805 4.78125 16.668 5.0625Z"
                                fill="#354556"
                              />
                            </svg>

                            <a href="#">Share Access</a>: Credentials
                          </td>
                        </tr>
                        <tr>
                          <td>ENT\\LucaDellamore</td>

                          <td>
                            <svg class="svg-margin"
                              width="14"
                              height="14"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.5 8.5C0.5 4.09375 4.0625 0.5 8.5 0.5C12.9062 0.5 16.5 4.09375 16.5 8.5C16.5 12.9375 12.9062 16.5 8.5 16.5C4.0625 16.5 0.5 12.9375 0.5 8.5ZM8.5 12C8.90625 12 9.25 11.6875 9.25 11.25V9.25H11.25C11.6562 9.25 12 8.9375 12 8.5C12 8.09375 11.6562 7.75 11.25 7.75H9.25V5.75C9.25 5.34375 8.90625 5 8.5 5C8.0625 5 7.75 5.34375 7.75 5.75V7.75H5.75C5.3125 7.75 5 8.09375 5 8.5C5 8.9375 5.3125 9.25 5.75 9.25H7.75V11.25C7.75 11.6875 8.0625 12 8.5 12Z"
                                fill="#29CC6A"
                              />
                            </svg>
                            ENT\\LucaDellamore
                            <svg
                              width="17"
                              height="9"
                              viewBox="0 0 17 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.668 5.0625L13.168 8.3125C12.9492 8.53125 12.6367 8.5625 12.3555 8.46875C12.0742 8.34375 11.8867 8.0625 11.8867 7.78125V5.5H1.91797C1.35547 5.5 0.917969 5.0625 0.917969 4.5C0.917969 3.90625 1.35547 3.5 1.91797 3.5H11.8867V1.25C11.8867 0.96875 12.0742 0.6875 12.3555 0.5625C12.6367 0.46875 12.9492 0.5 13.168 0.71875L16.668 3.96875C16.9805 4.25 16.9805 4.78125 16.668 5.0625Z"
                                fill="#354556"
                              />
                            </svg>

                            <a href="#">Modify Group Membership</a>: ENT\\Domain
                            Admins
                            <svg
                              width="17"
                              height="9"
                              viewBox="0 0 17 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.668 5.0625L13.168 8.3125C12.9492 8.53125 12.6367 8.5625 12.3555 8.46875C12.0742 8.34375 11.8867 8.0625 11.8867 7.78125V5.5H1.91797C1.35547 5.5 0.917969 5.0625 0.917969 4.5C0.917969 3.90625 1.35547 3.5 1.91797 3.5H11.8867V1.25C11.8867 0.96875 12.0742 0.6875 12.3555 0.5625C12.6367 0.46875 12.9492 0.5 13.168 0.71875L16.668 3.96875C16.9805 4.25 16.9805 4.78125 16.668 5.0625Z"
                                fill="#354556"
                              />
                            </svg>

                            <a href="#">Share Access</a>: Credentials
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.svg-margin{
  margin:-2px;
}
</style>
