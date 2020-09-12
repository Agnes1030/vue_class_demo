// 管理商品数据

import shop from "../../api/shop";

const state = {
  list: []
};
const getters = {};

// 获取商品列表数据
const actions = {
  getList(context) {
    shop.getGoodsList(
      data => {
      context.commit("setList", data);
    });
  }
};

// 将商品列表保存到state的list中
const mutations = {
  setList(state, data) {
    state.list = data;
  }
};

export default {
  namespaced:true,
  state,
  getters,
  actions,
  mutations
}
