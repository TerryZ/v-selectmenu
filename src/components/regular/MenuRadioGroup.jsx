import { defineComponent, provide, ref, watch } from 'vue'

import { injectRadioGroup } from '../../constants'

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

    watch(() => props.modelValue, val => { checked.value = val })

    provide(injectRadioGroup, {
      checked,
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
