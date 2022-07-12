import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/base/index.vue'),
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        component: () => import('@/views/welcome/index.vue')
      },
      {
        path: '/study',
        name: 'Study',
        component: () => import('@/views/study/index.vue')
      },
      {
        path: '/game',
        name: 'Game',
        component: () => import('@/views/game/index.vue')
      },
      {
        path: '/life',
        name: 'Life',
        component: () => import('@/views/life/index.vue')
      }
    ]
  },
  {
    path: '/bigBoard',
    name: 'BigBorad',
    component: () => import('@/views/bigBoard/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
