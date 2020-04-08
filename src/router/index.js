import Vue from 'vue'
import VueRouter from 'vue-router'

import { Home } from '@/modules/today';
import { Tomorrow } from '@/modules/tomorrow';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/tmrrw',
    name: 'tomorrow',
    component: Tomorrow
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
