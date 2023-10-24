import { createRouter, createWebHashHistory } from 'vue-router'

import { routers } from './store'

const routes = [
  {
    path: '/',
    component: () => import('./ExamplesIndex.vue'),
    redirect: '/regular',
    children: routers
  }, {
    path: '/:pathMatch(.*)*',
    redirect: '/regular'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export { router }
