import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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

export default router
