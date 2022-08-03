<template>
<div>
<nav class="navbar ">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"><img src="" alt="logo" /></a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Reports</a></li>
      <li><a href="#">Access</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <!-- <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li> -->
      <li><a href="#"><font-awesome-icon :icon="['fa', 'fa-circle-user']" /> Administrator</a></li>
      <li><a href="#"><font-awesome-icon :icon="['fa-solid', 'fa-right-from-bracket']" /> Sign Out</a></li>
    </ul>
  </div>
</nav>
<hr/>
<BreadCrumbs />
</div>
</template>

<script>
import BreadCrumbs from "./BreadCrumbs.vue";
  export default {
    name: "AppHeader",
    components: { BreadCrumbs }
};
</script>

<style  scoped>
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
a {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #171A1D;
}
</style>