import { computed, inject } from 'vue'

import { injectDropdown } from '../constants'

export default {
  name: 'MenuDropdownTrigger',
  props: {
  },
  setup (props, { slots }) {
    const { visible, disabled } = inject(injectDropdown)

    const buttonClasses = computed(() => ({
      'sm-default-trigger': true,
      'sm-opened': visible.value
    }))
    const containerClasses = computed(() => ({
      'sm-trigger-container': true,
      'sm-disabled': disabled.value
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
