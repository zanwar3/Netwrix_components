<template>
<div class="bread-sec">
   <ol class="breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">File System</a></li>
    <li><a href="#">Sensitive Data</a></li>
    <li class="active">Share Details</li>        
  </ol>
</div>
</template>

<script>
  export default {
    name: 'BreadCrumbs',
  };
</script>

<style  scoped>
.bread-sec{
    padding-left: 4%;
}
.breadcrumb {
margin-bottom: 0px;

background: #FFFFFF;
}
li {
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
}
a{
    color: #7F8893;
}
.active{
    color: #354556;
}
ol.breadcrumb li+li:before {
  padding: 8px;
  color: black;
  content: ">\00a0";
}
</style>