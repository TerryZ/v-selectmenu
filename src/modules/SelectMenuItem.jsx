import { defineComponent } from 'vue'

import { useBaseMenuItem } from '../core/BaseItem'

export default defineComponent({
  name: 'SelectMenuItem',
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
      <ItemContainer class="sm-item">
        <ItemPrepend />
        <ItemBody />
        <ItemAppend />
      </ItemContainer>
    )
  }
})
