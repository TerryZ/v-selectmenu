import { defineComponent, inject } from 'vue'

import { injectCheckboxGroup } from '../constants'
import { useBaseMenuItem } from '../core/BaseItem'

import IconCheck from '../icons/IconCheck.vue'

export default defineComponent({
  name: 'MenuCheckboxItem',
  props: {
    value: { type: [String, Number], default: '', required: true }
  },
  setup (props, { slots }) {
    const { changeChecked, isItemChecked } = inject(injectCheckboxGroup)
    const {
      ItemContainer,
      ItemPrepend,
      ItemBody,
      ItemAppend
    } = useBaseMenuItem(props, slots)

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
          onClick={() => changeChecked(props.value)}
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
