import { computed } from 'vue'

import { useSelectMenuDropdown } from '../core/helper'

export default {
  name: 'MenuDropdownTrigger',
  props: {
  },
  setup (props, { slots }) {
    const dropdown = useSelectMenuDropdown()

    const buttonClasses = computed(() => ({
      'sm-default-trigger': true,
      'sm-opened': dropdown?.visible?.value
    }))
    const containerClasses = computed(() => ({
      'sm-trigger-container': true,
      'sm-disabled': dropdown?.disabled?.value
    }))

    const ButtonText = () => (
      slots.default ? slots.default() : 'Open'
    )
    const ButtonIcon = () => (
      slots.append ? slots.append() : <span class='sm-caret-down' />
    )
    const TriggerButton = () => (
      <button
        type='button'
        class={buttonClasses.value}
      >
        <ButtonText />
        <ButtonIcon />
      </button>
    )

    return () => (
      <div class={containerClasses.value}>
        <TriggerButton />
      </div>
    )
  }
}
