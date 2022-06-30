import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
 
  {
    path: '/evaluacion',
    name: 'evaluacionn',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/EvaluacionView.vue')
    }
  },
  {
    path: '/evaluacion/tipodeevaluacion',
    name: 'tipodeevaluacion',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/TipoDeEvaluacionView.vue')
    }
  },
  {
    path: '/evaluacion/tipodeevaluacion/opcionmultiple',
    name: 'opcionmultiple',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/OpcionMultipleView.vue')
    }
  },
  {
    path: '/evaluacion/tipodeevaluacion/falsoyverdadero',
    name: 'falsoyverdadero',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/FalsoYVerdaderoView.vue')
    }
  },
  {
    path: '/evaluacion/tipodeevaluacion/completarenunciado',
    name: 'completarenunciado',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/CompletarEnunciadoView.vue')
    }
  },
  {
    path: '/evaluacion/tipodeevaluacion/unirconlineas',
    name: 'unirconlineas',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/UnirConLineasView.vue')
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
