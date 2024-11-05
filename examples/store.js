import { ref } from 'vue'

export const routers = [
  {
    name: 'base',
    path: '/base',
    component: () => import('./ExamplesBase.vue')
  }, {
    name: 'layout',
    path: '/layout',
    component: () => import('./ExamplesLayout.vue')
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
    name: 'core-table',
    path: '/core/table',
    component: () => import('./ExamplesCoreTable.vue')
  }, {
    name: 'dropdown-list',
    path: '/dropdown/list',
    component: () => import('./ExamplesDropdownList.vue')
  }, {
    name: 'dropdown-table',
    path: '/dropdown/table',
    component: () => import('./ExamplesDropdownTable.vue')
  }
]

export const types = [
  { name: 'Regular', code: 'regular' },
  { name: 'Advanced', code: 'advanced' }
]

export const list = [
  { name: 'Base', code: 'base' },
  { name: 'Group', code: 'group' },
  { name: 'Layout', code: 'layout' },
  { name: 'Radio', code: 'radio' },
  { name: 'Checkbox', code: 'checkbox' }
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
