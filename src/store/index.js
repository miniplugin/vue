import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'not login', // 전역변수
    user: null,
    token: '',
    claims: null, // firebase 권한관련 토큰정보 저장객체
    firebaseLoaded: false // src/plugins/firebase.js -> Vue.prototype.$isFirebaseAuth = false // 전역변수 대신 사용
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
    },
    setClaims (state, claims) {
      state.claims = claims
    },
    setFirebaseLoaded (state) {
      state.firebaseLoaded = true
    }
  },
  actions: {
    async getUser ({ commit }, user) {
      commit('setFirebaseLoaded') // 구글 파이어베이스 인증 내장 매서드 사용 먼저 실행
      // 로그인 인증 및 권한(level) 토큰으로 저장
      commit('setUser', user)
      if (!user) return false
      const token = await user.getIdToken()
      commit('setToken', token)
      const { claims } = await user.getIdTokenResult()
      commit('setClaims', claims)
      /* return user
        .getIdToken()
        .then(token => {
          commit('setToken', token)
          // console.log('token-store.js : ', token) // jwt.io 에서 토큰 내용 확인 가능.
          return user.getIdTokenResult()
        })
        .then(r => {
          // console.log('claims-store.js : ', r.claims) // jwt.io 에서 토큰 내용 확인 가능.
          commit('setClaims', r.claims)
        }) */
    }
  },
  modules: {}
})
