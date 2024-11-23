import { defineComponent, inject } from 'vue'

import { injectCheckboxGroup } from '../constants'
import { useBaseMenuItem } from '../core/BaseItem'

import IconCheck from '../icons/IconCheck.vue'

export default defineComponent({
  name: 'SelectMenuCheckboxItem',
  props: {
    value: { type: [String, Number], default: '', required: true },
    disabled: { type: Boolean, default: false }
  },
  setup (props, { slots }) {
    const {
      changeChecked,
      isItemChecked,
      hideOnSelection
    } = inject(injectCheckboxGroup)
    const {
      ItemContainer,
      ItemPrepend,
      ItemBody,
      ItemAppend
    } = useBaseMenuItem(props, slots)

    function selectItem () {
      if (props.disabled) return
      changeChecked(props.value)
    }
    function CheckboxSelection () {
      return (
        <div class='sm-checkbox-item-checked'>
          { isItemChecked(props.value) ? <IconCheck /> : '' }
        </div>
      )
    }

    return () => {
      return (
        <ItemContainer
          class="sm-checkbox-item"
          hideOnClick={hideOnSelection.value}
          triggerAction={false}
          onClick={selectItem}
        >
          <CheckboxSelection />
          <ItemPrepend />
          <ItemBody />
          <ItemAppend />
        </ItemContainer>
      )
    }
  }
})
