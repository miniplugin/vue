/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from './plugins/firebase'
/* import './plugins/axios'
import './plugins/vue_toasted' */
// 위 3개 import 를 1개로 처리(아래)
import './plugins'
import './error'
import VueMoment from 'vue-moment' // npm install --save vue-moment
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import testPromise from './plugins/test_promise' // 동기와 비동기 사용 예

Vue.config.productionTip = false

// 전역변수 사용 테스트
const global = 'not login'
Vue.prototype.$global = global

// testPromise.foo() // 동기와 비동기 사용 예
Vue.use(VueMoment) // 사용예, https://codesandbox.io/s/k9v3qjvq73

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
