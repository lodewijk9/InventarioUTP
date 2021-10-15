import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../views/Form.vue'
import Alquiler from '../views/Alquiler.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/eventos',
    name: 'Eventos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Eventos.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/alquiler',
    name: 'Alquiler',
    component: Alquiler
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
