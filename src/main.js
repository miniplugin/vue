import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import testPromise from './plugins/test_promise'

Vue.config.productionTip = false

testPromise.foo()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
