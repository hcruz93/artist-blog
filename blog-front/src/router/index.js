import { createRouter, createWebHistory } from 'vue-router'
import Biografia from '@/components/layout/Biografia.vue'
import Inicio from '@/components/layout/Inicio.vue'
import Galeria from '@/components/layout/Galeria.vue'
import Contacto from '@/components/layout/Contacto.vue'


const routes = [
  {
    path: '/',
    component: Inicio
  },
  {
    path: '/biografia',
    name: 'biografia',
    component: Biografia
  },
  {
    path: '/galeria',
    name: 'galeria',
    component: Galeria
  },
    {
    path: '/contacto',
    name: 'contacto',
    component: Contacto
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
