import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'not login', // 전역변수
    user: null,
    token: ''
  },
  mutations: {
    setTitle (state, payload) {
      // payload = parameter
      state.title = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    setToken (state, token) {
      state.token = token
    }
  },
  actions: {
    getUser ({ commit }, user) {
      commit('setUser', user)
      if (!user) return
      user.getIdToken().then(token => {
        commit('setToken', token)
      })
    }
  },
  modules: {}
})
