
<script>
  import AppHeader from './AppHeader.vue'
  import Netwrix3Part from './Netwrix3Part.vue'
  import Netwrix5Part from './Netwrix5Part.vue'
  export default {
    name: 'Netwrix5',
    components: {
      Netwrix3Part, 
      Netwrix5Part,
      AppHeader
    },
    data() {
      return {
        
      }
    }
  }
</script>
<template>
  <div class="main_section">
    <AppHeader :items="[]"/>
    <div class="container">
      <div class="col-12">
        <div class="row">
          <div class="col-xl-16 col-md-16">
            <div class="solutionsets_section">
              <h5>Solution Sets</h5>
              <div class="content_section">
                <div class="row">
                  <Netwrix3Part heading="Active Directory Inventory" content="Inventory Active Directory users, groups and computers." iconName="address-book" />
                  <Netwrix3Part heading="Azure Active Directory Inventory" content="Inventory Active Directory users, groups and computers." iconName="user-plus" />
                  <Netwrix3Part heading="Active Directory" content="Inventory Active Directory users, groups and computers." iconName="users" />
                  <Netwrix3Part heading="Active Directory Permissions Analyzer" content="Inventory Active Directory users, groups and computers." iconName="user-plus" />
                  <Netwrix3Part heading="AnyID Connectors" content="Builds the index of identities used for Sensitive Data Scanning across all solutions" iconName="users" />
                  <Netwrix3Part heading="AWS" content="Audit AWS IAM and S3 configurations throughout your environment. Understand toxic conditions that can leave you vulnerable to attackers." iconName="aws" iconType="fab" />
                  <Netwrix3Part heading="Azure Active Directory" content="Comprehensive Azure Active Directory auditing and reporting for security, compliance, and operations." iconName="users" />
                  <Netwrix3Part heading="Box" content="Comprehensive Box Enterprise auditing providing visibility into access rights, policies, configurations, and user activity." iconName="box-archive" />
                  <Netwrix3Part heading="Databases" content="StealthAUDIT Databases Solution Set is a comprehensive set of pre-configured audit jobs and reports that provide visibility into various aspects of supported databases: AzureSQL, Db2LUW, MongoDB, MySQL, Oracle, PostgreSQL, Redshift and SQL Server." iconName="database" />
                  <Netwrix3Part heading="Dropbox" content="Audit Dropbox for visibility into sensitive data, access rights, and configuration." iconName="dropbox" iconType="fab" />
                  <Netwrix3Part heading="Exchange" content="Track mailflow, mailbox access events, and discover sensitive data inside Microsoft Exchange and Exchange Online." iconName="envelope" />
                  <Netwrix3Part heading="FileSystem" content="Discover who can access data across file systems, and monitor who does. Reduce risk by achieving a least privilege model." iconName="copy" />
                  <Netwrix3Part heading="SharePoint" content="Audit SharePoint and Office 365 for effective access, sensitive data, and common security controls." iconName="square-share-nodes" />
                  <Netwrix3Part heading="Unix" content="Scan Unix and Linux servers for local access rights and NFS/Samba configuration." iconName="biohazard" />
                  <Netwrix3Part heading="Windows" content="Identify configurations that could leave your desktop and server infrastructure vulnerable. Understand administrative privileges throughout your organization." iconName="windows" iconType="fab" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8 col-md-8">
            <div class="reports_section">
              <h5>Search for reports</h5>
              <Netwrix5Part />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_section {
  background: #F5F5F5;
  mix-blend-mode: normal;
  opacity: 0.88;
  min-height: 100vh;
}

.solutionsets_section {
  background: #F1F1F1;
  padding: 10px 10px;
}

.solutionsets_section h5 {
  background: #4CD7CE;
  margin: 0px;
  padding: 5px 10px;
  color: #fff;
}
.reports_section {
    padding: 10px 10px;
}
.reports_section h5 {
  margin: 0px;
  padding: 5px 10px;
  border-bottom: 1px solid #E0E5EB;
  font-size: 14px;
}
</style>
