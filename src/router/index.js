import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    /* beforeEnter: (to, from, next) => { // 인증 받지 않는 사용자 라우팅 원천 봉쇄 (비공개 사이트 처리 시 사용)
      console.log('bf enter')
      next()
    } */
  },
  {
    path: '/sign',
    name: 'Sign',
    component: () =>
      import (/* webpackChunkName: "sign" */ '../views/Sign.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import (/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/lectures/card',
    name: 'Card',
    component: () =>
      import (/* webpackChunkName: "card" */ '../views/lectures/Card.vue')
  },
  {
    path: '/lectures/layout',
    name: 'Layout',
    component: () =>
      import (/* webpackChunkName: "card" */ '../views/lectures/Layout.vue')
  },
  {
    path: '/lectures/notes',
    name: 'Notes',
    component: () =>
      import (/* webpackChunkName: "notes" */ '../views/lectures/Notes.vue')
  },
  {
    path: '/lectures/axios',
    name: 'Axios',
    component: () =>
      import (/* webpackChunkName: "axios" */ '../views/lectures/Axios.vue')
  },
  {
    path: '/lectures/mother',
    name: 'Mother',
    component: () =>
      import (/* webpackChunkName: "mother" */ '../views/lectures/Mother.vue')
  },
  {
    path: '*',
    name: 'E404',
    component: () => import (/* E404 File Not Found */ '../views/E404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router/index.js 의 $isFirebaseAuth 전역변수가 true 일 때 beforeEach 매서드로 라우터 진행 처리
// 인증 받지 않는 사용자 라우팅 원천 봉쇄 (비공개 사이트 처리 시 사용)
/* router.beforeEach((to, form, next) => {
  console.log('bf each')
  if (Vue.prototype.$isFirebaseAuth) next()
}) */
router.beforeEach((to, form, next) => {
  Vue.prototype.$isFirebaseAuth = true
  console.log('bf each', Vue.prototype.$isFirebaseAuth)
  Vue.prototype.$Progress.start()
  next()
  /* setTimeout(() => { // 일부러 시간 지연시켜서 로딩 상황 확인
    next()
  }, 2000) */
})
router.afterEach((to, form) => {
  Vue.prototype.$isFirebaseAuth = false
  console.log('af each', Vue.prototype.$isFirebaseAuth)
  Vue.prototype.$Progress.finish()
})

export default router
