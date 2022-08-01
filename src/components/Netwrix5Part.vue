<script>
export default {
  name: 'Netwrix5Part',
  props: {
    
  },
  data () {
    return {
      
    }
  }
}
</script> 

<template>
  <div class="tabs_section">
    <div class="tabs_heading">
      <span class="active">FAVORITES</span>
      <span>TAGS</span>
    </div>
    <div class="tabs_content">
      <div class="tab_details">
        <div class="logo_section">
          <img src="https://penmadsidrap.com/uploads/blog_image/default.jpg">
        </div>
        <div class="content_details_section">
          <h5>AD Security Assessment</h5>
          <span>Active Directory</span>
          <p>Generated at 08/26/2021 9:40 PM</p>
        </div>
      </div>
    </div>

    <div class="tabs_content">
      <div class="tab_details">
        <div class="logo_section">
          <img src="https://penmadsidrap.com/uploads/blog_image/default.jpg">
        </div>
        <div class="content_details_section">
          <h5>Domain Shadow Access</h5>
          <span>Active Directory Permissions Analyzer</span>
          <p>Generated at 01/20/2022 4:09 AM</p>
        </div>
      </div>
    </div>

    <div class="tabs_content">
      <div class="tab_details">
        <div class="logo_section">
          <img src="https://penmadsidrap.com/uploads/blog_image/default.jpg">
        </div>
        <div class="content_details_section">
          <h5>Reset Password</h5>
          <span>Active Directory Permissions Analyzer</span>
          <p>Generated at 01/20/2022 4:07 AM</p>
        </div>
      </div>
    </div>

    <div class="tabs_content">
      <div class="tab_details">
        <div class="logo_section">
          <img src="https://penmadsidrap.com/uploads/blog_image/default.jpg">
        </div>
        <div class="content_details_section">
          <h5>Share Details</h5>
          <span>FileSystem</span>
          <p>Generated at 12/17/2021 1:21 PM</p>
        </div>
      </div>
    </div>

    <div class="tabs_content">
      <div class="tab_details">
        <div class="logo_section">
          <img src="https://penmadsidrap.com/uploads/blog_image/default.jpg">
        </div>
        <div class="content_details_section">
          <h5>Weak Password Checks</h5>
          <span>Active Directory</span>
          <p>Generated at 08/26/2021 9:02 PM</p>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabs_section {
  margin: 10px 0px 0px 0px;
  background: #fff;
  border: 1px solid #DCDEE0;
}
.tabs_heading {
  border-bottom: 1px solid #E0E5EB;
}
.tabs_heading span {
  background: #EEEEEE;
  padding: 5px 15px;
  font-size: 14px;
}
.tabs_heading span.active {
  background: #C4C4C4;
}
.tabs_content {
  padding: 10px 10px;
  border-bottom: 1px solid #E0E5EB;
}
.tab_details {
  display: flex;
}
.logo_section img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.content_details_section {
  width: 100%;
  padding: 0px 15px;
}
.content_details_section h5 {
  color: #0068DA;
  padding: 0px;
  border: none;
  font-size: 14px;
  margin: 0;
}
.content_details_section span {
  color: #0068DA;
  font-size: 14px;
}
.content_details_section p {
  color: #707070;
  font-size: 14px;
  margin: 0px;
}
</style>
