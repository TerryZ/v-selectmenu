import { defineComponent, provide, toRef } from 'vue'

import { injectRadioGroup } from '../../constants'

export default defineComponent({
  name: 'MenuRadioGroup',
  props: {
    modelValue: { type: [String, Number], default: '' }
  },
  emits: ['update:modelValue', 'change'],
  setup (props, { slots }) {
    function changeChecked (value) {
      props.emit('update:modelValue', value)
      props.emit('change', value)
    }

    provide(injectRadioGroup, {
      checked: toRef(props.modelValue),
      changeChecked
    })

    return () => {
      return (
        <div class="sm-radio-group">
          {slots?.default?.()}
        </div>
      )
    }
  }
})
