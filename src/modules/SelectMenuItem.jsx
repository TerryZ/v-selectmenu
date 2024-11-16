import { defineComponent } from 'vue'

import { useBaseMenuItem } from '../core/BaseItem'

export default defineComponent({
  name: 'MenuItem',
  props: {
    action: { type: String, default: '' },
    disabled: { type: Boolean, default: false }
  },
  setup (props, { slots }) {
    const {
      ItemContainer,
      ItemPrepend,
      ItemBody,
      ItemAppend
    } = useBaseMenuItem(props, slots)

    return () => (
      <ItemContainer>
        <ItemPrepend />
        <ItemBody />
        <ItemAppend />
      </ItemContainer>
    )
  }
})
