import { defineComponent, provide, toRef } from 'vue'

import { injectCheckboxGroup } from '../../constants'

export default defineComponent({
  name: 'MenuCheckboxGroup',
  props: {
    modelValue: { type: Array, default: undefined }
  },
  emits: ['update:modelValue', 'change'],
  setup (props, { slots }) {
    const checked = new Set()

    function changeChecked (value, isChecked) {
      if (isChecked) {
        checked.add(value)
      } else {
        checked.delete(value)
      }
      const checkedValues = Array.from(checked)
      props.emit('update:modelValue', checkedValues)
      props.emit('change', checkedValues)
    }

    provide(injectCheckboxGroup, {
      checked: toRef(props.modelValue),
      changeChecked
    })

    return () => {
      return (
        <div class="sm-checkbox-group">
          {slots?.default?.()}
        </div>
      )
    }
  }
})
