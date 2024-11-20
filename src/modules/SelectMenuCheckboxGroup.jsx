import { defineComponent, provide, ref, toRef, watch } from 'vue'

import { injectCheckboxGroup } from '../constants'

export default defineComponent({
  name: 'SelectMenuCheckboxGroup',
  props: {
    modelValue: { type: Array, default: undefined },
    hideOnSelection: { type: Boolean, default: true }
  },
  emits: ['update:modelValue', 'change'],
  setup (props, { emit, slots }) {
    const checked = ref(removeDuplicates(props.modelValue) || [])

    function removeDuplicates (values) {
      return Array.from(new Set(values))
    }
    function responseChange () {
      emit('update:modelValue', checked.value)
      emit('change', checked.value)
    }
    function changeChecked (value) {
      if (checked.value.includes(value)) {
        checked.value = checked.value.filter(item => item !== value)
      } else {
        checked.value.push(value)
      }
      responseChange()
    }
    function modelValueChange (values) {
      const deduplicated = removeDuplicates(values)
      if (
        deduplicated.length === checked.value.length &&
        checked.value.every(val => deduplicated.includes(val))
      ) {
        return
      }
      checked.value = deduplicated
      responseChange()
    }
    function isItemChecked (value) {
      return checked.value.includes(value)
    }

    watch(() => props.modelValue, modelValueChange)

    provide(injectCheckboxGroup, {
      changeChecked,
      isItemChecked,
      hideOnSelection: toRef(props, 'hideOnSelection')
    })

    return () => <div class="sm-checkbox-group">{slots?.default?.()}</div>
  }
})
