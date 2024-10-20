import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/MainView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/LoginView.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/TestView.vue'),
    },
    {
      path: '/test/login',
      name: 'test/login',
      component: () => import('@/components/LoginView.vue'),
    },
    {
      path: '/test/signup',
      name: 'test/signup',
      component: () => import('@/components/SignUpView.vue'),
    },
    {
      path: '/test/appbar',
      name: 'test/appbar',
      component: () => import('@/components/AppBarView.vue'),
    },
  ],
})

export default router
