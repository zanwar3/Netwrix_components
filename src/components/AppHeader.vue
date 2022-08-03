<template>
<div>
<nav class="navbar ">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"><img src="../assets/temp_net.png" alt="logo" width="150%" height="150%" /></a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a  class="left-nav" href="#">Reports</a></li>
      <li><a href="#" class="left-nav">Access</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a class="right-nav" href="#"><font-awesome-icon class="icon-custom" :icon="['fa', 'fa-circle-user']" /> Administrator</a></li>
      <li><a class="right-nav" href="#"><font-awesome-icon class="icon-custom" :icon="['fa-solid', 'fa-right-from-bracket']" /> Sign Out</a></li>
    </ul>
  </div>
</nav>
<hr/>
<BreadCrumbs :items="items"/>
</div>
</template>

<script>
import BreadCrumbs from "./BreadCrumbs.vue";
  export default {
    name: "AppHeader",
    components: { BreadCrumbs },
    props:{
      items:Array
    }
};
</script>

<style  scoped>
.navbar-header{
    margin-right: 5%;
    margin-left: 2%;
}
.active {
   border-bottom: 2px solid red;
}
.nav-bar {
  position: absolute;
  /* width: 1920px;
  height: 81px; */
}
.navbar{
  margin-bottom: 0px;
}
hr{
  margin-bottom: 0px;
  margin-top:0px;
}
.left-nav {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #171A1D;
}
.right-nav{
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: #171A1D;
}

.icon-custom{
background: #F6F7F9;
color: #ABB2BA
} 
</style>