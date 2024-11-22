import { defineComponent, inject } from 'vue'

import { injectRadioGroup } from '../constants'
import { useBaseMenuItem } from '../core/BaseItem'

import IconDot from '../icons/IconDot.vue'

export default defineComponent({
  name: 'SelectMenuRadioItem',
  props: {
    value: { type: [String, Number], default: '', required: true },
    disabled: { type: Boolean, default: false }
  },
  setup (props, { slots }) {
    const {
      changeChecked,
      isItemChecked,
      hideOnSelection
    } = inject(injectRadioGroup)
    const {
      ItemContainer,
      ItemPrepend,
      ItemBody,
      ItemAppend
    } = useBaseMenuItem(props, slots)

    function RadioSelection () {
      return (
        <div class='sm-radio-item-checked'>
          { isItemChecked(props.value) ? <IconDot /> : '' }
        </div>
      )
    }

    return () => (
      <ItemContainer
        class="sm-radio-item"
        hideOnClick={hideOnSelection.value}
        triggerAction={false}
        onClick={() => changeChecked(props.value)}
      >
        <RadioSelection />
        <ItemPrepend />
        <ItemBody />
        <ItemAppend />
      </ItemContainer>
    )
  }
})
