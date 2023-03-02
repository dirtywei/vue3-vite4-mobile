import { createRouter, createWebHistory } from 'vue-router'
import { moduleRoutes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...moduleRoutes,
    {
      name: 'Login',
      path: '/login',
      component: () => import('@/views/login/index.vue'),
      isHidden: true,
      meta: {
        title: '登录页'
      }
    },
    {
      name: '404',
      path: '/404',
      component: () => import('@/views/error-page/404.vue'),
      isHidden: true
    },
    {
      name: 'NotFound',
      path: '/:pathMatch(.*)*',
      redirect: '/404',
      isHidden: true
    }
  ]
})

export default router
