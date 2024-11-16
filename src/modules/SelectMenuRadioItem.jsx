import { defineComponent, inject } from 'vue'

import { injectRadioGroup } from '../constants'
import { useBaseMenuItem } from '../core/BaseItem'

import IconDot from '../icons/IconDot.vue'

export default defineComponent({
  name: 'SelectMenuRadioItem',
  props: {
    value: { type: [String, Number], default: '' }
  },
  setup (props, { slots }) {
    const { changeChecked, isItemChecked } = inject(injectRadioGroup)
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
    // function ItemAppend () {
    //   if (!Object.hasOwn(slots, 'append')) return null
    //   return (
    //     <div class='sm-radio-item-append'>{slots?.append?.()}</div>
    //   )
    // }

    return () => {
      return (
        <ItemContainer
          class="sm-radio-item"
          onClick={() => changeChecked(props.value)}
        >
          <RadioSelection />
          <ItemPrepend />
          <ItemBody />
          <ItemAppend />
        </ItemContainer>
      )
    }
  }
})
