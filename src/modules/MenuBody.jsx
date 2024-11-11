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
    // const menuLastLevel = computed(() => multipleLevelBreadcrumbs.value.at(-1))
    const childContainer = ref(null)

    function menuItemTrigger (key) {
      emit('action', key)

      if (props.autoClose) {
        emit('close')
      }
    }
    function openChildMenu (data) {
      multipleLevelBreadcrumbs.value.push(data)
    }
    function backToPreviousLevel () {
      if (!multipleLevelBreadcrumbs.value.length) return
      multipleLevelBreadcrumbs.value.pop()
    }
    function MenuContainer () {
      if (multipleLevelBreadcrumbs.value.length) {
        return <MenuChildContainer />
        // return (
        //   <div>
        //     <div>{menuLastLevel.value.title}</div>
        //     <div ref={childContainer}></div>
        //   </div>
        // )
      }
      return <div class="sm-container-root">{slots?.default?.()}</div>
    }

    provide(injectMenu, {
      menuItemTrigger,
      multipleLevelBreadcrumbs,
      openChildMenu,
      backToPreviousLevel,
      childContainer
    })

    return () => (
      <div class="sm-container">
        <MenuContainer />
      </div>
    )
  }
})
