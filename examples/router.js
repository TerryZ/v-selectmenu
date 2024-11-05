import { createRouter, createWebHashHistory } from 'vue-router'

import { routers } from './store'

const routes = [
  {
    path: '/',
    component: () => import('./ExamplesIndex.vue'),
    redirect: '/base',
    children: routers
  }, {
    path: '/:pathMatch(.*)*',
    redirect: '/base'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export { router }
