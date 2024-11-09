import { defineComponent, provide } from 'vue'
import '../styles/select-menu.sass'

import { injectMenu } from '../constants'

export default defineComponent({
  name: 'MenuBody',
  props: {
    autoClose: { type: Boolean, default: true },
    modelValue: { type: String, default: '' }
  },
  emits: ['action', 'close', 'update:modelValue'],
  setup (props, { slots, emit }) {
    // const activeGroup = ref('')

    function menuItemTrigger (key) {
      emit('action', key)

      if (props.autoClose) {
        emit('close')
      }
    }

    provide(injectMenu, {
      menuItemTrigger
    })

    return () => {
      return (
        <div class="sm-container">
          {slots?.default?.()}
        </div>
      )
    }
  }
})
