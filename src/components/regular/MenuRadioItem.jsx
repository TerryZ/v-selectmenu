import { defineComponent, inject, computed } from 'vue'

import { injectRadioGroup } from '../../constants'

export default defineComponent({
  name: 'MenuRadioItem',
  props: {
    value: { type: [String, Number], default: '' }
  },
  setup (props, { slots }) {
    const { checked, changeChecked } = inject(injectRadioGroup)

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
