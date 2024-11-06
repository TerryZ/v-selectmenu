import { defineComponent, provide, ref, watch } from 'vue'

import { injectRadioGroup } from '../constants'

export default defineComponent({
  name: 'MenuRadioGroup',
  props: {
    modelValue: { type: [String, Number], default: '' }
  },
  emits: ['update:modelValue', 'change'],
  setup (props, { slots, emit }) {
    const checked = ref(props.modelValue)

    function changeChecked (value) {
      if (value === checked.value) return
      checked.value = value
      emit('update:modelValue', value)
      emit('change', value)
    }
    function isItemChecked (value) {
      return value === checked.value
    }

    watch(() => props.modelValue, val => { checked.value = val })

    provide(injectRadioGroup, {
      changeChecked,
      isItemChecked
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
