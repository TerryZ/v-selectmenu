import { ref, defineComponent, provide } from 'vue'

import { Dropdown, DropdownContent } from 'v-dropdown'

import { injectDropdown } from '../constants'

export default defineComponent({
  name: 'SelectMenuDropdown',
  setup (props, { slots }) {
    const dropdownClosed = ref()

    const registerDropdownClosed = fn => { dropdownClosed.value = fn }
    const onClosed = () => dropdownClosed.value?.()

    provide(injectDropdown, {
      registerDropdownClosed
    })

    return () => {
      const dropdownSlots = {
        trigger: data => slots.trigger?.(data),
        default: data => (
          <DropdownContent rounded="medium">
            {slots.default?.(data)}
          </DropdownContent>
        )
      }
      return <Dropdown onClosed={onClosed} v-slots={dropdownSlots} />
    }
  }
})
