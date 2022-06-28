import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/referencias',
    name: 'Referencias',
    component: () => import('../views/ReferenciasView.vue')

  },
  {
    path: '/referencias/agregarRef',
    name: 'agregar',
    component: () =>  import('../views/Agregar.vue')
  
  },
  
  {
    path: '/referencias/agregarRef/estiloLibroAPA',
    name: 'estiloLibroApa',
    component: () => import('../views/EstiloLibroAPA.vue')
  },
  {
    path: '/referencias/agregarRef/estiloLibroISO',
    name: 'estiloLibroIso',
    component: () => import('../views/EstiloLibroISO.vue')
  },
  {
    path: '/referencias/agregarRef/estiloArtAPA',
    name: 'estiloArtApa',
    component: () => import('../views/EstiloArtAPA.vue')
  },
  {
    path: '/referencias/agregarRef/estiloArtISO',
    name: 'estiloArtIso',
    component: () => import('../views/EstiloArtISO.vue')
  },
  {
    path: '/InicioAPA/',
    name: 'InicioL',
    component: () => import('../views/libro/InicioLAPA.vue')
  },
  {
    path: '/InicioISO/',
    name: 'InicioLISO',
    component: () => import('../views/libro/InicioLISO.vue')
  },
  {
    path: '/InicioArtAPA/',
    name: 'InicioArt',
    component: () => import('../views/articulo/InicioArtAPA.vue')
  },
  {
    path: '/InicioArtISO/',
    name: 'InicioArtIso',
    component: () => import('../views/articulo/InicioArtISO.vue')
  },
  {
    path: '/referencias/agregarRef/estiloLibroAPA/AgregarRefLibroAPA/',
    name: 'libroApa',
    
    component: () => import('../views/libro/LibroAPA.vue')
  },
  {
    path: '/referencias/agregarRef/estiloLibroISO/AgregarRefLibroISO/',
    name: 'libroIso',
    
    component: () => import('../views/libro/LibroISO.vue')
  },
  {
    path: '/referencias/agregarRef/estiloLibroAPA/EjemploLibroAPA/',
    name: 'EjemplolibroApa',
    
    component: () => import('../views/libro/EjemploLibroAPA.vue')
  },
  {
    path: '/referencias/agregarRef/estiloLibroISO/EjemploLibroISO/',
    name: 'EjemplolibroIso',
    
    component: () => import('../views/libro/EjemploLibroISO.vue')
  },
  
  {
    path: '/referencias/agregarRef/estiloArtAPA/AgregaRefArticuloAPA/',
    name: 'articuloApa',
    
    component: () => import('../views/articulo/ArticuloAPA.vue')
  },
  {
    path: '/referencias/agregarRef/estiloArtAPA/AgregaRefArticuloISO/',
    name: 'articuloIso',
    
    component: () => import('../views/articulo/ArticuloISO.vue')
  },
  {
    path: '/referencias/agregarRef/estiloArtAPA/EjemploArtAPA/',
    name: 'EjemploArtApa',
    
    component: () => import('../views/articulo/EjemploArtAPA.vue')
  },
  {
    path: '/referencias/agregarRef/estiloArtAPA/EjemploArtISO/',
    name: 'EjemploArtIso',
    
    component: () => import('../views/articulo/EjemploArtISO.vue')
  },
  {
    path: '/referencias/agregarRef/estiloLibroAPA/libroAPA/visualizacionLibroAPA',
    name: 'VisualizacionLibroAPA',
    
    component: () => import('../views/VisualizacionLibroAPA.vue')
  },
  {
    path: '/referencias/agregarRef/estiloLibroISO/libroISO/visualizacionLibroISO',
    name: 'VisualizacionLibroISO',
    
    component: () => import('../views/VisualizacionLibroISO.vue')
  },
  
  {
    path: '/referencias/agregarRef/estiloArtAPA/ArticuloAPA/visualizacionArtAPA',
    name: 'VisualizacionAPA',
    
    component: () => import('../views/VisualizacionArtAPA.vue')
  },
  {
    path: '/referencias/agregarRef/estiloArtAPA/ArticuloAPA/visualizacionArtISO',
    name: 'VisualizacionISO',
    
    component: () => import('../views/VisualizacionArtISO.vue')
  }
  
  
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
