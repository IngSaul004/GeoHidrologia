import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/inicio.vue' // Creamos esta vista después

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  // Aquí puedes agregar más rutas como Nosotros, Servicios, Contacto
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
