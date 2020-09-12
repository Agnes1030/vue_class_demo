<template>
  <div id="app">
    <div class="content">
      <router-view />
    </div>
    <div class="bottom">
      <router-link to='/' tag="div">商品列表</router-link>
      <router-link to='/shopcart' tag="div">购物车</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  height: 100%;
}
body {
  margin: 0;
  font-size: 12px;
  box-sizing: border-box;
}
</style>

<style scoped>
#app {
  height: 100%;
  display: flex;
  float: column;
}
.content{
  flex: 1;
  overflow-y: scroll;
}
.bottom{
  height: 40px;
  display: flex;
}
</style>
