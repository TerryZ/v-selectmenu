import { defineComponent, provide } from 'vue'
import '../../styles/regular.sass'

export default defineComponent({
  props: {
    autoClose: { type: Boolean, default: true }
  },
  emits: ['action', 'close'],
  setup (props, { slots, emit }) {
    function menuItemClick (key) {
      emit('action', key)

      if (props.autoClose) {
        emit('close')
      }
    }

    provide('item-click', menuItemClick)

    return () => {
      return (
        <div class="sm-regular-container">
          {slots.default && slots.default()}
        </div>
      )
    }
  }
})
