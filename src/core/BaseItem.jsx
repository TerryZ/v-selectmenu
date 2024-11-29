import { computed, inject } from 'vue'

import { injectMenu, injectMultipleLevel } from '../constants'
import { useSelectMenuDropdown } from '../core/helper'

export function useBaseMenuItem (props, slots) {
  const { menuItemTrigger, hideOnItemClick } = inject(injectMenu, {})
  const { hideOnTriggerClick } = inject(injectMultipleLevel, {})
  const { closeDropdown } = useSelectMenuDropdown()

  const classes = computed(() => (
    ['sm-item', { disabled: props.disabled }]
  ))

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
  function ItemContainer (
    {
      triggerAction = true,
      hideOnClick = hideOnItemClick?.value
    },
    { slots: containerSlots }
  ) {
    function onMenuItemTrigger () {
      if (props.disabled) return

      if (triggerAction && props.action) {
        menuItemTrigger?.(props.action)
      }

      // child level trigger click, do not close dropdown
      if (hideOnTriggerClick === false) return

      if (hideOnClick) {
        closeDropdown?.()
      }
    }

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
