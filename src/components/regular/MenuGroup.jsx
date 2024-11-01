import { defineComponent, toRef, provide, ref, onBeforeMount } from 'vue'

import { injectMenuGroup } from '../../constants'

export default defineComponent({
  props: {
    modelValue: { type: String, default: '' }
  },
  emits: ['update:modelValue', 'change'],
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

    provide(injectMenuGroup, {
      active: toRef(props, 'modelValue'),
      switchGroup
    })

    onBeforeMount(switchGroup)

    return () => {
      return (
        <div class="sm-regular-group">

          <div class="sm-regular-group-tabs">
            {slots?.default?.()}
          </div>

          <div class="sm-regular-group-body" >
            {body.value}
          </div>
        </div>
      )
    }
  }
})
