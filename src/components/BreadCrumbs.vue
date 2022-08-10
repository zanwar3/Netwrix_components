<template>
  <div class="breadcrumb-section">
    <div class="container">
      <ol class="breadcrumb">
        <li
          v-for="(item, index) in items"
          v-if="index != Object.keys(items).length - 1"
        >
          <a href="#">{{ item }} </a>&nbsp;
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 10.25L5.875 5.875L1.5 1.5"
              stroke="#7F8893"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li class="active">{{ items[Object.keys(items).length - 1] }}</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadCrumbs",
  props: {
    items: Array,
  },
};
</script>

<style  scoped>
.bread-sec {
  padding-left: 15%;
}
.breadcrumb {
  margin-bottom: 0px;

  background: #ffffff;
}
li {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
}
a {
  color: #7f8893;
}
.active {
  color: #354556;
}
ol.breadcrumb li + li:before {
  padding: 5px;
  color: black;
  content: "";
}
.breadcrumb-section {
  background-color: #fff;
  margin-bottom: 0px;
}
.breadcrumb {
  display: flex;
  list-style-type: none;
  margin: 0px;
  padding: 12px 15px;
}

</style>