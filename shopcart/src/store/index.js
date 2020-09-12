import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import goods from './modules/goods'
import shopcart from './modules/shopcart'
export default new Vuex.Store({
  modules: [
    goods,
    shopcart
  ]
})
