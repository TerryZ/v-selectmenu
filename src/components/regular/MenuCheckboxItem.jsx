import { defineComponent, inject, computed } from 'vue'

import { injectCheckboxGroup } from '../../constants'

import IconCheck from '../../icons/IconCheck.vue'

export default defineComponent({
  name: 'MenuCheckboxItem',
  props: {
    value: { type: [String, Number], default: '' }
  },
  setup (props, { slots }) {
    const { checked, changeChecked, hasItemChecked } = inject(injectCheckboxGroup)

    // const isChecked = computed(() => checked.has(props.value))

    function ItemPrepend () {
      return (
        <div class='sm-checkbox-item-prepend'>{ hasItemChecked(props.value) ? <IconCheck /> : '' }</div>
      )
    }
    function ItemAppend () {
      if (!Object.hasOwn(slots, 'append')) return null
      return (
        <div class='sm-checkbox-item-append'>{slots?.append?.()}</div>
      )
    }

    return () => {
      return (
        <div
          class="sm-checkbox-item"
          onClick={() => changeChecked(props.value)}
        >
          <ItemPrepend />
          <div class='sm-checkbox-item-body'>{slots?.default?.()}</div>
          <ItemAppend />
        </div>
      )
    }
  }
})
