import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 利用本地存储
    carts: localStorage["carts"] ? JSON.parse(localStorage["carts"]) : []
  },
  mutations: {
    // 用来改变state数据的方法
    setCartsDatas(state, data) {
      if (data) {
        state.carts.push(data)
      }
      localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    // 加号
    addCarts(state, index) {
      state.carts[index].value++
      localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    // 减号
    jianCarts(state, index) {
      if (state.carts[index].value < 1) {
        state.carts[index].value = 0
        alert("商品个品数不能小于0")
      } else {
        state.carts[index].value--
        localStorage.setItem("carts", JSON.stringify(state.carts))
      }
    },
    // 点击删除
    deleteCarts(state, index) {
      state.carts.splice(index, 1)
      localStorage.setItem("carts", JSON.stringify(state.carts))
    }
  },
  actions: {
  },
  modules: {
  }
})
