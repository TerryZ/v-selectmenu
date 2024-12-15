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

    // function BlockPrepend () {
    //   if (!slots.prepend) return null
    //   return (
    //     <div class='sm-block__prepend'>{slots.prepend()}</div>
    //   )
    // }
    // function BlockAppend () {
    //   if (!slots.append) return null
    //   return (
    //     <div class='sm-block__append'>{slots.append()}</div>
    //   )
    // }

    // return () => (
    //   <div class="sm-block" >
    //     <BlockPrepend />
    //     <div class="sm-block__body">
    //       {slots?.default?.()}
    //     </div>
    //     <BlockAppend />
    //   </div>
    // )
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
