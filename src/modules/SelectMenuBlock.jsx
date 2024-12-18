import { defineComponent } from 'vue'

import { useBaseMenuItem } from '../core/BaseItem'

/**
 * Pure container for menu item
 */
export default defineComponent({
  name: 'SelectMenuBlock',
  props: {
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
        triggerAction={false}
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
