<template>
  <div class="list">
    <div class="item" v-for="item in items" :key="item.id">
      <div class="item-l">
        <img class="item-img" :src="item.src" />
      </div>
      <div class="item-r">
        <div class="item-title">
          {{item.title}}
          <small>x {{item.num}}</small>
        </div>
        <div class="item-price">{{itme.price | currency}}</div>
        <div class="item-opt">
          <button @click="del(item.id)">删除</button>
        </div>
      </div>
    </div>
    <div class="item-total" v-if='items.length'>商品总价：{{total | currency}}</div>
    <div class="item-empty">购物车中暂时无商品</div>
  </div>
</template>


<script>
import {mapState,mapGetters,mapActions} from 'vuex'
  export default{
    computed: {
      ...mapState(
        {items:state=>state.shopcart.items}
      ),
      ...mapGetters('shopcart',{total:'totalPrice'}),
      methods: mapActions('shopcart',['del']),
      filters: {
      currency(value){
        return '¥ ' + value;

      }
    }
    }
  }
</script>

<style>
.item{
  border-bottom:1px dashed #ccc;
  padding:10px;
}
.item::after{
  content: '';
  display: block;
  clear: both;
}
.item-l{
  float: left;
  font-size: 0;
}
.item-r{
  float: left;
  padding-left: 20px;
}
</style>
