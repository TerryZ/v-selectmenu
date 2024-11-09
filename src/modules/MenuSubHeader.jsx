import { defineComponent } from 'vue'

import { useBaseMenuItem } from '../core/BaseItem'

export default defineComponent({
  name: 'MenuSubHeader',
  setup (props, { slots }) {
    const {
      ItemContainer,
      ItemPrepend,
      ItemBody,
      ItemAppend
    } = useBaseMenuItem(props, slots)

    return () => (
      <ItemContainer class="sm-sub-header">
        <ItemPrepend />
        <ItemBody />
        <ItemAppend />
      </ItemContainer>
    )
  }
})
