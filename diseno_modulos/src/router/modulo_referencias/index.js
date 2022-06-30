import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path: '/referencias',
    name: 'Referencias',
    component: () => import('../../views/modulo_referencias/ReferenciasView.vue')

  },
  {
    path: '/referencias/agregarRef',
    name: 'agregar',
    component: () =>  import('../../views/modulo_referencias/Agregar.vue')
  
  },
  
  {
    path: '/referencias/agregarRef/estiloLibroAPA',
    name: 'estiloLibroApa',
    component: () => import('../../views/modulo_referencias/EstiloLibroAPA.vue')
  },
  {
    path: '/referencias/agregarRef/estiloLibroISO',
    name: 'estiloLibroIso',
    component: () => import('../../views/modulo_referencias/EstiloLibroISO.vue')
  },
  {
    path: '/referencias/agregarRef/estiloArtAPA',
    name: 'estiloArtApa',
    component: () => import('../../views/modulo_referencias/EstiloArtAPA.vue')
  },
  {
    path: '/referencias/agregarRef/estiloArtISO',
    name: 'estiloArtIso',
    component: () => import('../../views/modulo_referencias/EstiloArtISO.vue')
  },
  {
    path: '/InicioAPA/',
    name: 'InicioL',
    component: () => import('../../views/modulo_referencias/libro/InicioLAPA.vue')
  },
  {
    path: '/InicioISO/',
    name: 'InicioLISO',
    component: () => import('../../views/modulo_referencias/libro/InicioLISO.vue')
  },
  {
    path: '/InicioArtAPA/',
    name: 'InicioArt',
    component: () => import('../../views/modulo_referencias/articulo/InicioArtAPA.vue')
  },
  {
    path: '/InicioArtISO/',
    name: 'InicioArtIso',
    component: () => import('../../views/modulo_referencias/articulo/InicioArtISO.vue')
  },
  {
    path: '/referencias/agregarRef/estiloLibroAPA/AgregarRefLibroAPA/',
    name: 'libroApa',
    
    component: () => import('../../views/modulo_referencias/libro/LibroAPA.vue')
  },
  {
    path: '/referencias/agregarRef/estiloLibroISO/AgregarRefLibroISO/',
    name: 'libroIso',
    
    component: () => import('../../views/modulo_referencias/libro/LibroISO.vue')
  },
  {
    path: '/referencias/agregarRef/estiloLibroAPA/EjemploLibroAPA/',
    name: 'EjemplolibroApa',
    
    component: () => import('../../views/modulo_referencias/libro/EjemploLibroAPA.vue')
  },
  {
    path: '/referencias/agregarRef/estiloLibroISO/EjemploLibroISO/',
    name: 'EjemplolibroIso',
    
    component: () => import('../../views/modulo_referencias/libro/EjemploLibroISO.vue')
  },
  
  {
    path: '/referencias/agregarRef/estiloArtAPA/AgregaRefArticuloAPA/',
    name: 'articuloApa',
    
    component: () => import('../../views/modulo_referencias/articulo/ArticuloAPA.vue')
  },
  {
    path: '/referencias/agregarRef/estiloArtAPA/AgregaRefArticuloISO/',
    name: 'articuloIso',
    
    component: () => import('../../views/modulo_referencias/articulo/ArticuloISO.vue')
  },
  {
    path: '/referencias/agregarRef/estiloArtAPA/EjemploArtAPA/',
    name: 'EjemploArtApa',
    
    component: () => import('../../views/modulo_referencias/articulo/EjemploArtAPA.vue')
  },
  {
    path: '/referencias/agregarRef/estiloArtAPA/EjemploArtISO/',
    name: 'EjemploArtIso',
    
    component: () => import('../../views/modulo_referencias/articulo/EjemploArtISO.vue')
  },
  {
    path: '/referencias/agregarRef/estiloLibroAPA/libroAPA/visualizacionLibroAPA',
    name: 'VisualizacionLibroAPA',
    
    component: () => import('../../views/modulo_referencias/VisualizacionLibroAPA.vue')
  },
  {
    path: '/referencias/agregarRef/estiloLibroISO/libroISO/visualizacionLibroISO',
    name: 'VisualizacionLibroISO',
    
    component: () => import('../../views/modulo_referencias/VisualizacionLibroISO.vue')
  },
  
  {
    path: '/referencias/agregarRef/estiloArtAPA/ArticuloAPA/visualizacionArtAPA',
    name: 'VisualizacionAPA',
    
    component: () => import('../../views/modulo_referencias/VisualizacionArtAPA.vue')
  },
  {
    path: '/referencias/agregarRef/estiloArtAPA/ArticuloAPA/visualizacionArtISO',
    name: 'VisualizacionISO',
    
    component: () => import('../../views/modulo_referencias/VisualizacionArtISO.vue')
  }
  
  
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
