import { defineComponent, provide, ref, watch, toRef } from 'vue'

import { injectRadioGroup } from '../constants'

export default defineComponent({
  name: 'SelectMenuRadioGroup',
  props: {
    modelValue: { type: [String, Number], default: '' },
    hideOnSelection: { type: Boolean, default: true }
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

    watch(() => props.modelValue, changeChecked)

    provide(injectRadioGroup, {
      changeChecked,
      isItemChecked,
      hideOnSelection: toRef(props, 'hideOnSelection')
    })

    return () => <div class="sm-radio-group">{slots?.default?.()}</div>
  }
})
