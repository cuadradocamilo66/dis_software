import Vue from 'vue'
import VueRouter from 'vue-router'




Vue.use(VueRouter)

const routes = [
 

  {
    path: '/evaluacion',
    name: 'evaluacionn',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../../views/modulo_evaluacion/EvaluacionView.vue')
    }
  },
  {
    path: '/evaluacion/tipodeevaluacion',
    name: 'tipodeevaluacion',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../../views/modulo_evaluacion/TipoDeEvaluacionView.vue')
    }
  },
  {
    path: '/evaluacion/tipodeevaluacion/opcionmultiple',
    name: 'opcionmultiple',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../../views/modulo_evaluacion/OpcionMultipleView.vue')
    }
  },
  {
    path: '/evaluacion/tipodeevaluacion/falsoyverdadero',
    name: 'falsoyverdadero',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../../views/modulo_evaluacion/FalsoYVerdaderoView.vue')
    }
  },
  {
    path: '/evaluacion/tipodeevaluacion/completarenunciado',
    name: 'completarenunciado',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../../views/modulo_evaluacion/CompletarEnunciadoView.vue')
    }
  },
  {
    path: '/evaluacion/tipodeevaluacion/unirconlineas',
    name: 'unirconlineas',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../../views/modulo_evaluacion/UnirConLineasView.vue')
    }
  },

]


export default routes
