<template>
<div class="bread-sec">
   <ol  class="breadcrumb">
    <li v-for="(item, index) in items" v-if="index != Object.keys(items).length - 1">
    <a  href="#">{{item}}</a>
    </li>
    <li class="active">{{items[Object.keys(items).length - 1]}}</li>
  </ol>
</div>
</template>

<script>
  export default {
    name: 'BreadCrumbs',
    props :{
        items:Array
    }
  };
</script>

<style  scoped>
.bread-sec{
    padding-left: 15%;
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