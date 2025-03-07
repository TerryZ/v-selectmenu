import { computed, inject } from 'vue'

import { useDropdown } from 'v-dropdown'

import { injectMenu, injectMultipleLevel } from '../constants'

export function useBaseMenuItem (props, slots) {
  const { menuItemTrigger, hideOnItemClick } = inject(injectMenu, {})
  const { hideOnTriggerClick } = inject(injectMultipleLevel, {})
  const { close } = useDropdown()

  function ItemPrepend () {
    if (!slots.prepend) return null
    return <div class="sm-block__prepend">{slots.prepend()}</div>
  }
  function ItemAppend () {
    if (!slots.append) return null
    return <div class="sm-block__append">{slots.append()}</div>
  }
  function ItemBody () {
    return (
      <div class="sm-block__body">
        {slots?.default?.()}
      </div>
    )
  }
  function ItemContainer (
    {
      triggerAction = true,
      hover = true,
      hideOnClick = hideOnItemClick?.value
    },
    { slots: containerSlots }
  ) {
    const classes = computed(() => ({
      'sm-block': true,
      'sm-item--hover': !props.disabled && hover,
      disabled: props.disabled
    }))
    function onMenuItemTrigger () {
      if (props.disabled) return

      if (triggerAction && props.action) {
        menuItemTrigger?.(props.action)
      }

      // child level trigger click, do not close dropdown
      if (hideOnTriggerClick === false) return

      hideOnClick && close?.()
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
