import { createRouter, createWebHistory } from 'vue-router'
import Biografia from '@/components/layout/Biografia.vue'
import Inicio from '@/components/layout/Inicio.vue'

const routes = [
  {
    path: '/',
    component: Inicio
  },
  {
    path: '/biografia',
    name: 'biografia',
    component: Biografia
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
