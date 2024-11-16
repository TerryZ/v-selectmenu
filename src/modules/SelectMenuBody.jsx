import { defineComponent, provide, computed } from 'vue'

import { injectMenu } from '../constants'
import { useMultipleLevel } from '../core/MultipleLevel'
import { useSelectMenuDropdown } from '../core/helper'

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
    const { closeDropdown } = useSelectMenuDropdown()

    const rootContainerStyles = computed(() => ({
      maxHeight: props.maxHeight,
      overflow: 'auto'
    }))

    function menuItemTrigger (key) {
      emit('action', key)

      if (props.autoClose) {
        emit('close')
        closeDropdown?.()
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
