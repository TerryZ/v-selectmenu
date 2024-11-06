import { defineComponent, provide, ref, watch } from 'vue'

import { injectCheckboxGroup } from '../constants'

export default defineComponent({
  name: 'MenuCheckboxGroup',
  props: {
    modelValue: { type: Array, default: undefined }
  },
  emits: ['update:modelValue', 'change'],
  setup (props, { emit, slots }) {
    const checked = ref(props.modelValue || [])

    function changeChecked (value) {
      if (checked.value.includes(value)) {
        checked.value = checked.value.filter(item => item !== value)
      } else {
        checked.value.push(value)
      }
      emit('update:modelValue', checked.value)
      emit('change', checked.value)
    }
    function isItemChecked (value) {
      return checked.value.includes(value)
    }

    watch(() => props.modelValue, val => { checked.value = val })

    provide(injectCheckboxGroup, {
      changeChecked,
      isItemChecked
    })

    return () => (
      <div class="sm-checkbox-group">
        {slots?.default?.()}
      </div>
    )
  }
})
