import { defineComponent, provide, toRef } from 'vue'
import '../styles/select-menu.sass'

export default defineComponent({
  name: 'MenuBody',
  props: {
    autoClose: { type: Boolean, default: true },
    modelValue: { type: String, default: '' }
  },
  emits: ['action', 'close', 'update:modelValue'],
  setup (props, { slots, emit }) {
    // const activeGroup = ref('')

    function menuItemClick (key) {
      emit('action', key)

      if (props.autoClose) {
        emit('close')
      }
    }
    function switchGroup (groupName) {
      emit('update:modelValue', groupName)
    }

    provide('item-click', menuItemClick)
    provide('switch-group', switchGroup)
    provide('active-group', toRef(props, 'modelValue'))

    return () => {
      return (
        <div class="sm-container">
          {slots?.default?.()}
        </div>
      )
    }
  }
})
