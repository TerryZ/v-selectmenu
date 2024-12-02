import { defineComponent, provide, computed, toRef, watch } from 'vue'

import { injectMenu } from '../constants'
import { useMultipleLevel } from '../core/MultipleLevel'
import { useSelectMenuDropdown } from '../core/helper'

export default defineComponent({
  name: 'SelectMenuBody',
  props: {
    hideOnItemClick: { type: Boolean, default: true },
    maxHeight: { type: String, default: '' }
  },
  emits: ['action'],
  setup (props, { slots, emit }) {
    const {
      hasLevels,
      addChildLevel,
      resetLevel,
      MenuLevelGroup
    } = useMultipleLevel(props)
    const { visible } = useSelectMenuDropdown()

    const rootContainerStyles = computed(() => ({
      maxHeight: props.maxHeight,
      overflow: 'auto'
    }))

    function menuItemTrigger (key) {
      emit('action', key)
    }

    provide(injectMenu, {
      menuItemTrigger,
      addChildLevel,
      hideOnItemClick: toRef(props, 'hideOnItemClick')
    })

    // reset menu level when dropdown close
    if (typeof visible !== 'undefined') {
      watch(visible, val => {
        if (val) return
        // TODO: v-dropdown 添加了关闭下拉层并完成动画的回调后，应用回调而不是使用 setTimeout
        setTimeout(resetLevel, 500)
      })
    }

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
