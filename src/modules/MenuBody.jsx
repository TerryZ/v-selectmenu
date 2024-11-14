import { defineComponent, provide, computed, inject } from 'vue'

import { injectMenu, injectDropdown } from '../constants'
import { useMultipleLevel } from '../core/MultipleLevel'

export default defineComponent({
  name: 'MenuBody',
  props: {
    autoClose: { type: Boolean, default: true },
    modelValue: { type: String, default: '' },
    maxHeight: { type: String, default: '' }
  },
  emits: ['action', 'close', 'update:modelValue'],
  setup (props, { slots, emit }) {
    const { hasLevels, addChildLevel, MenuLevelGroup } = useMultipleLevel(props)
    const dropdown = inject(injectDropdown, undefined)

    const rootContainerStyles = computed(() => ({
      maxHeight: props.maxHeight,
      overflow: 'auto'
    }))

    function menuItemTrigger (key) {
      emit('action', key)

      if (props.autoClose) {
        emit('close')
        dropdown?.closeDropdown?.()
      }
    }

    provide(injectMenu, {
      menuItemTrigger,
      addChildLevel
    })

    return () => (
      <div class="sm-container">
        <MenuLevelGroup />
        <div
          class="sm-container-root"
          style={rootContainerStyles.value}
          v-show={!hasLevels.value}
        >
          {slots?.default?.()}
        </div>
      </div>
    )
  }
})
