import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'not login' // 전역변수
  },
  mutations: {
    setTitle (state, payload) {
      // payload = parameter
      state.title = payload
    }
  },
  actions: {},
  modules: {}
})
