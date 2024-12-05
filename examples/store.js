import { ref } from 'vue'

export const routers = [
  {
    name: 'base',
    path: '/base',
    component: () => import('./ExamplesBase.vue')
  }, {
    name: 'group',
    path: '/group',
    component: () => import('./ExamplesGroup.vue')
  }, {
    name: 'radio',
    path: '/radio',
    component: () => import('./ExamplesRadio.vue')
  }, {
    name: 'checkbox',
    path: '/checkbox',
    component: () => import('./ExamplesCheckbox.vue')
  }, {
    name: 'layout',
    path: '/layout',
    component: () => import('./ExamplesLayout.vue')
  }, {
    name: 'input',
    path: '/input',
    component: () => import('./ExamplesInput.vue')
  }, {
    name: 'multiple-level',
    path: '/multiple-level',
    component: () => import('./ExamplesMultipleLevel.vue')
  }, {
    name: 'combination',
    path: '/combination',
    component: () => import('./ExamplesCombination.vue')
  }, {
    name: 'complete',
    path: '/complete',
    component: () => import('./ExamplesComplete.vue')
  }
]

export const list = [
  { name: 'Base', code: 'base' },
  { name: 'Group', code: 'group' },
  { name: 'Radio', code: 'radio' },
  { name: 'Checkbox', code: 'checkbox' },
  { name: 'Layout', code: 'layout' },
  { name: 'Input', code: 'input' },
  { name: 'Multiple level', code: 'multiple-level' },
  { name: 'Combination', code: 'combination' },
  { name: 'Complete form', code: 'complete' }
]

const DEFAULT_ACTIVE = 'base'
export const active = ref(DEFAULT_ACTIVE)

export function setActive (data, router) {
  active.value = data.code
  router.push({ name: data.code }).catch(() => {})
}
export function detectActive (route) {
  const routeName = route.name
  if (routers.some(val => val.name === routeName)) {
    active.value = routeName
    return
  }
  // 如果路由不存在，则跳转到默认路由
  active.value = DEFAULT_ACTIVE
}
