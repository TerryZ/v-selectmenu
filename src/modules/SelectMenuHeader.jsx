import { defineComponent } from 'vue'

import { useBaseMenuItem } from '../core/BaseItem'

export default defineComponent({
  name: 'SelectMenuSubHeader',
  props: {
    action: { type: String, default: '' }
  },
  setup (props, { slots }) {
    const {
      ItemContainer,
      ItemPrepend,
      ItemBody,
      ItemAppend
    } = useBaseMenuItem(props, slots)

    return () => (
      <ItemContainer
        class="sm-header"
        hover={false}
        hideOnClick={false}
      >
        <ItemPrepend />
        <ItemBody />
        <ItemAppend />
      </ItemContainer>
    )
  }
})
