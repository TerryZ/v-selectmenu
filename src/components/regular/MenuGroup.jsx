import { defineComponent, toRef, provide } from 'vue'

export default defineComponent({
  props: {
    modelValue: { type: String, default: '' }
  },
  emits: ['update:modelValue'],
  setup (props, { slots, emit }) {
    function switchGroup (groupName) {
      const items = slots?.default()
      groupName = groupName || props.modelValue

      if (!items || !items.length) return

      const groupIndex = groupName
        ? items.findIndex(val => val.props?.name === groupName)
        : 0
      if (groupIndex === -1) return

      const targetGroupName = items[groupIndex].props.name

      if (targetGroupName !== props.modelValue) {
        // emit new group name and trigger component rerender
        emit('update:modelValue', targetGroupName)
        return
      }

      return items[groupIndex].children?.default()
    }

    provide('switch-group', switchGroup)
    provide('active-group', toRef(props, 'modelValue'))

    return () => {
      return (
        <div class="sm-regular-group">

          {slots.default && slots.default()}

          <div class="sm-regular-group-body" >
            {switchGroup()}
          </div>
        </div>
      )
    }
  }
})
