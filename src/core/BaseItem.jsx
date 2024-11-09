import { computed, inject } from 'vue'

import { injectMenu } from '../constants'

export function useBaseMenuItem (props, slots) {
  const { menuItemTrigger } = inject(injectMenu)

  const classes = computed(() => (
    ['sm-item', { disabled: props.disabled }]
  ))

  function onMenuItemTrigger () {
    if (props.disabled) return

    menuItemTrigger(props.action)
  }

  function ItemPrepend () {
    if (!slots.prepend) return null
    return <div class="sm-item-prepend">{slots.prepend()}</div>
  }
  function ItemAppend () {
    if (!slots.append) return null
    return <div class="sm-item-append">{slots.append()}</div>
  }
  function ItemBody () {
    return (
      <div class="sm-item-body">
        {slots?.default?.()}
      </div>
    )
  }
  function ItemContainer (props, { slots: containerSlots }) {
    return (
      <div
        class={classes.value}
        onClick={onMenuItemTrigger}
      >
        {containerSlots?.default?.()}
      </div>
    )
  }

  return {
    ItemContainer,
    ItemPrepend,
    ItemBody,
    ItemAppend
  }
}
