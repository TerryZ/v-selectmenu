import { defineComponent, toRef, provide, ref } from 'vue'

export default defineComponent({
  props: {
    modelValue: { type: String, default: '' }
  },
  emits: ['update:modelValue'],
  setup (props, { slots, emit }) {
    const content = ref()

    function switchGroup (groupName, groupContent) {
      emit('update:modelValue', groupName)
      content.value = groupContent
    }

    provide('switch-group', switchGroup)
    provide('active-group', toRef(props, 'modelValue'))

    return () => {
      return (
        <div class="sm-regular-group">
          {slots.default && slots.default()}
          <div>
            {content.value && content.value()}
          </div>
        </div>
      )
    }
  }
})
