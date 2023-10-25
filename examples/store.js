import { ref } from 'vue'

export const routers = [
  {
    name: 'regular',
    path: '/regular',
    component: () => import('./ExamplesRegular.vue')
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

export const forms = [
  { name: 'List', code: 'list' },
  { name: 'Table', code: 'table' }
]

const DEFAULT_FORM = 'list'

export const type = ref('regular')
export const form = ref(DEFAULT_FORM)

export function switchType (data, router) {
  type.value = data.code
  form.value = DEFAULT_FORM
  router.push({ name: `${data.code}-${DEFAULT_FORM}` }).catch(() => {})
}
export function switchForm (data, router) {
  form.value = data.code
  router.push({ name: `${type.value}-${data.code}` }).catch(() => {})
}
export function detectActive (route) {
  const [typeCode, formCode] = route.name.split('-')
  type.value = typeCode
  form.value = formCode
}
