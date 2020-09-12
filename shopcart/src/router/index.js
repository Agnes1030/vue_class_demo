import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/components/GoodsList'
import ShopCart from '@/components/ShopCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/shopcart',
      name: 'ShopCart',
      component: ShopCart
    }
  ]
})
