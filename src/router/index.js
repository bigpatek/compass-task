import { createRouter, createWebHistory } from 'vue-router'
import NewsPage from '@/pages/NewsPage'
import CreatePage from '@/pages/CreatePage'

const routes = [
  {
    path: '/',
    component: NewsPage
  },
  {
    path: '/create',
    component: CreatePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
