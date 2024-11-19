import { defineComponent, provide, computed, toRef } from 'vue'

import { injectMenu } from '../constants'
import { useMultipleLevel } from '../core/MultipleLevel'

export default defineComponent({
  name: 'SelectMenuBody',
  props: {
    hideOnItemClick: { type: Boolean, default: true },
    maxHeight: { type: String, default: '' }
  },
  emits: ['action'],
  setup (props, { slots, emit }) {
    const { hasLevels, addChildLevel, MenuLevelGroup } = useMultipleLevel(props)

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
