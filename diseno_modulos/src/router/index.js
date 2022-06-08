import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/referencias',
    name: 'referenciass',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ReferenciasView.vue')
    }
  },
  {
    path: '/referencias/agregar',
    name: 'agregar',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AgregarView.vue')
    }
  },
  {
    path: '/referencias/agregarIso',
    name: 'agregarIso',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AgregarIso.vue')
    }
  },
  {
    path: '/referencias/agregarVancouver',
    name: 'agregarVancouver',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AgregarVancouver.vue')
    }
  },
  
 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router