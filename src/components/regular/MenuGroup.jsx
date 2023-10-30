import { defineComponent, toRef, provide, ref, onBeforeMount } from 'vue'

export default defineComponent({
  props: {
    modelValue: { type: String, default: '' }
  },
  emits: ['update:modelValue'],
  setup (props, { slots, emit }) {
    const body = ref()

    function switchGroup (groupName) {
      const items = slots?.default()
      if (!items || !items.length) return

      groupName = groupName || props.modelValue

      const groupIndex = groupName
        ? items.findIndex(val => val.props?.name === groupName)
        : 0
      if (groupIndex === -1) return

      const targetGroupName = items[groupIndex].props.name

      if (targetGroupName !== props.modelValue) {
        emit('update:modelValue', targetGroupName)
      }

      body.value = items[groupIndex].children?.default()
    }

    provide('switch-group', switchGroup)
    provide('active-group', toRef(props, 'modelValue'))

    onBeforeMount(() => {
      switchGroup()
    })

    return () => {
      return (
        <div class="sm-regular-group">

          <div class="sm-regular-group-tabs">
            {slots.default && slots.default()}
          </div>

          <div class="sm-regular-group-body" >
            {body.value}
          </div>
        </div>
      )
    }
  }
})
