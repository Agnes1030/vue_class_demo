<template>
  <div class="list">
    <div class="item" v-for="goods in goodsList" :key="goods.id">
      <div class="item-l">
        <img class="item-img" :src="goods.src" />
      </div>
      <div class="item-r">
        <div class="item-title">{{ goods.title }}</div>
        <!-- 通过过滤器给商品价格添加'¥' -->
        <div class="item-price">{{ goods.price | currency }}</div>
        <div class="item-opt">
          <button @click="add(goods)">加入购物车</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  //一般情况下获取数据都在created钩子函数中
  created() {
    // 如果是分模块处理的数据，就需要加上模块名/actions名字
    this.$store.dispatch("goods/getList");
  },
  computed: mapState({
    // 分模块的数据需要加上模块名
    goodsList: state => state.goods.list
  }),
  methods: mapActions("shopcart", ["add"]),
  filters: {
    currency(value) {
      return "¥ " + value;
    }
  }
};
</script>

<style>
.item {
  border-bottom: 1px dashed #ccc;
  padding: 10px;
}
.item::after {
  content: "";
  display: block;
  clear: both;
}
.item-l {
  float: left;
  font-size: 0;
}
.item-r {
  float: left;
  padding-left: 20px;
}
</style>
