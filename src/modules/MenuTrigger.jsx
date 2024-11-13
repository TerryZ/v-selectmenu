import { inject } from 'vue'

import { injectDropdown } from '../constants'

export default {
  name: 'MenuDropdownTrigger',
  props: {
    language: { type: String, default: '' }
  },
  setup (props, { slots }) {
    const { dropdownVisible } = inject(injectDropdown)

    const ButtonText = () => (
      slots.default ? slots.default() : 'Open'
    )
    const ButtonIcon = () => <span class='sm-caret-down' />
    const TriggerButton = () => (
      <button
        type='button'
        class={['sm-default-trigger', { 'sm-opened': dropdownVisible.value }]}
      >
        <ButtonText />
        <ButtonIcon />
      </button>
    )

    return () => (
      <div class='sm-trigger-container'>
        <TriggerButton />
      </div>
    )
  }
}
