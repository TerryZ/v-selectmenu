import { defineComponent, provide } from 'vue'
import '../styles/select-menu.sass'

import { injectMenu } from '../constants'
import { useMultipleLevel } from '../core/MultipleLevel'

export default defineComponent({
  name: 'MenuBody',
  props: {
    autoClose: { type: Boolean, default: true },
    modelValue: { type: String, default: '' }
  },
  emits: ['action', 'close', 'update:modelValue'],
  setup (props, { slots, emit }) {
    const { hasLevels, addChildLevel, MenuLevelGroup } = useMultipleLevel()

    function menuItemTrigger (key) {
      emit('action', key)

      if (props.autoClose) {
        emit('close')
      }
    }

    provide(injectMenu, {
      menuItemTrigger,
      addChildLevel
    })

    return () => (
      <div class="sm-container">
        <MenuLevelGroup v-show={hasLevels.value} />
        <div
          class="sm-container-root"
          v-show={!hasLevels.value}
        >
          {slots?.default?.()}
        </div>
      </div>
    )
  }
})
