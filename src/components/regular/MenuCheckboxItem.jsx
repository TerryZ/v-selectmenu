import { defineComponent, inject, computed } from 'vue'

import { injectCheckboxGroup } from '../../constants'

export default defineComponent({
  name: 'MenuCheckboxItem',
  props: {
    value: { type: [String, Number], default: '' }
  },
  setup (props, { slots }) {
    const { checked, changeChecked } = inject(injectCheckboxGroup)

    const isChecked = computed(() => props.value === checked.value)

    function CheckedState () {
      return (
        <div>{ isChecked.value ? 'icon' : '' }</div>
      )
    }

    return () => {
      return (
        <div
          class="sm-radio-item"
          onClick={() => changeChecked(props.value)}
        >
          <CheckedState />
          <div>
            <div>{slots?.default?.()}</div>
            <div>{slots?.append?.()}</div>
          </div>
        </div>
      )
    }
  }
})
