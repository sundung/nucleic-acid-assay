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
    path: '/orderForm',
    name: 'orderForm',
    component: () => import(/* webpackChunkName: "orderForm" */ '../views/orderForm.vue')
  },
  {
    path: '/orderCode',
    name: 'orderCode',
    component: () => import(/* webpackChunkName: "orderCode" */ '../views/orderCode.vue')
  },
  {
    path: '/orderCodeResult',
    name: 'orderCodeResult',
    component: () => import(/* webpackChunkName: "orderCode" */ '../views/orderCodeResult.vue')
  },
  {
    path: '/nucleicResult',
    name: 'nucleicResult',
    component: () => import(/* webpackChunkName: "orderCode" */ '../views/nucleicResult.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
