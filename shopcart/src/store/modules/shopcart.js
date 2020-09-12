import shop from "../../api/shop";

const state = {
  items: []
};

const actions = {
  // 加入购物车的逻辑
  add(context, item) {
    context.commit("add", item);
  },
  // 删除购物车逻辑
  del(context, id) {
    context.commit("del", id);
  }
};

const mutations = {
  add(state, goods) {
    const result = state.items.find(item => item.id === goods.id);
    if (result) {
      ++result.num;
    } else {
      state.items.push({
        id: goods.id,
        title: goods.title,
        price: goods.price,
        src: goods.src,
        num: 1
      });
    }
  },
  del(state, id) {
    state.items.forEach((item, index, arr) => {
      if (item.id === id) {
        arr.splice(index, 1);
      }
    });
  }
};

const getters = {
  totalPrice: state => {
    return state.items.reduce((total, item) => {
      return total + item.price * item.num;
    },0).toFixed(2);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
