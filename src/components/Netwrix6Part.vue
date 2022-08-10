<script>
export default {
  name: "Netwrix6Part",
  props: {},
  data() {
    return {};
  },
};
</script> 

<template>
  <div>
    <div class="filesystem_section">
      <div class="filesystem_icon">
        <font-awesome-icon icon="fa-solid fa-copy" />
      </div>
      <div class="filesystem_content">
        <h5>FileSystem</h5>
        <p>
          The File Systems job group is designed to provide essential
          information about targeted file servers. Key information includes
          discovered sensitive data, activity reporting, and access reporting.
        </p>
      </div>
    </div>
    <div class="filesystem_links">
      <div class="filesystem_links_content">
        <font-awesome-icon icon="fa-solid fa-folder" />
        <p>ACTIVITY</p>
      </div>

      <div class="filesystem_links_content">
        <font-awesome-icon icon="fa-solid fa-folder" />
        <p>AD HOC</p>
      </div>

      <div class="filesystem_links_content">
        <font-awesome-icon icon="fa-solid fa-folder" />
        <p>AUDITS</p>
      </div>

      <div class="filesystem_links_content">
        <font-awesome-icon icon="fa-solid fa-folder" />
        <p>BROKEN INHERITANCE CLEANUP CONTENT</p>
      </div>

      <div class="filesystem_links_content ">
        <font-awesome-icon icon="fa-solid fa-folder" />
        <p>DIRECT PERMISSIONS</p>
      </div>

      <div class="filesystem_links_content ">
        <font-awesome-icon icon="fa-solid fa-folder" />
        <p>OPEN ACCESS</p>
      </div>

      <div class="filesystem_links_content ">
        <font-awesome-icon icon="fa-solid fa-folder" />
        <p>PROBABLE OWNER</p>
      </div>

      <div class="filesystem_links_content ">
        <font-awesome-icon icon="fa-solid fa-folder" />
        <p>RESOURCE BASED GROUPS</p>
      </div>

      <div class="filesystem_links_content ">
        <font-awesome-icon icon="fa-solid fa-folder" />
        <p>SENSITIVE DATA</p>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.filesystem_section {
  display: flex;
}
.filesystem_icon {
  background: #5f7d8b;
  min-width: 85px;
  min-height: 70px;
  color: #fff;
  font-size: 26px;
  display: flex;
  svg {
    margin: auto;
  }
}
.filesystem_content {
  background: #e9e9e9;
  padding: 10px 10px;
  h5 {
    font-size: 20px;
    color: #354556;
  }
  p {
    font-size: 14px;
    color: #354556;
  }
}
.filesystem_links {
  background: #dfe1e2;
  padding: 10px 10px;
  display: table;
}
.filesystem_links_content {
  display: flex;
  margin: 5px 15px 5px 0px;
  float: left;
  svg {
    color: #229cfb;
    margin: 1px 10px 0px 0px;
  }
  p {
    color: #354556;
    font-size: 14px;
    margin: 0px;
  }
}
</style>
