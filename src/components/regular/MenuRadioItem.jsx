import { defineComponent, inject, computed } from 'vue'

import { injectRadioGroup } from '../../constants'

import IconDot from '../../icons/IconDot.vue'
// import IconCheck from '../../icons/IconCheck.vue'

export default defineComponent({
  name: 'MenuRadioItem',
  props: {
    value: { type: [String, Number], default: '' }
  },
  setup (props, { slots }) {
    const { checked, changeChecked } = inject(injectRadioGroup)

    const isChecked = computed(() => props.value === checked.value)

    function ItemPrepend () {
      return (
        <div class='sm-radio-item-prepend'>{ isChecked.value ? <IconDot /> : '' }</div>
      )
    }
    function ItemAppend () {
      if (!Object.hasOwn(slots, 'append')) return null
      return (
        <div class='sm-radio-item-append'>{slots?.append?.()}</div>
      )
    }

    return () => {
      return (
        <div
          class="sm-radio-item"
          onClick={() => changeChecked(props.value)}
        >
          <ItemPrepend />
          <div class='sm-radio-item-body'>{slots?.default?.()}</div>
          <ItemAppend />
        </div>
      )
    }
  }
})
