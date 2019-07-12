import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 'カウントが反映される数値'の初期値
    commonCount: 10
  },
  mutations: {
    multiply(state) {
      state.commonCount = state.commonCount * 2
    },
    divide(state) {
      state.commonCount = state.commonCount / 2
    }
  }
})
