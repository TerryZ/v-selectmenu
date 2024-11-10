import { defineComponent, provide, ref } from 'vue'
import '../styles/select-menu.sass'

import { injectMenu } from '../constants'

import MenuChildContainer from './MenuChildContainer'

export default defineComponent({
  name: 'MenuBody',
  props: {
    autoClose: { type: Boolean, default: true },
    modelValue: { type: String, default: '' }
  },
  emits: ['action', 'close', 'update:modelValue'],
  setup (props, { slots, emit }) {
    const multipleLevelBreadcrumbs = ref([])

    function menuItemTrigger (key) {
      emit('action', key)

      if (props.autoClose) {
        emit('close')
      }
    }
    function backToPreviousLevel () {
      if (!multipleLevelBreadcrumbs.value.length) return
      multipleLevelBreadcrumbs.value.pop()
    }
    function MenuContainer () {
      if (multipleLevelBreadcrumbs.value.length) {
        return <MenuChildContainer />
      }
      return <div class="sm-container-root">{slots?.default?.()}</div>
    }

    provide(injectMenu, {
      menuItemTrigger,
      multipleLevelBreadcrumbs,
      backToPreviousLevel
    })

    return () => (
      <div class="sm-container">
        <MenuContainer />
      </div>
    )
  }
})
