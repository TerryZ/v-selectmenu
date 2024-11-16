import { ref, defineComponent, provide, toRef } from 'vue'

import Dropdown from 'v-dropdown'

import { injectDropdown } from '../constants'

export default defineComponent({
  name: 'SelectMenuDropdown',
  setup (props, { slots, attrs }) {
    const visible = ref(false)
    const dropdownEl = ref()

    function closeDropdown () {
      dropdownEl.value && dropdownEl.value.close()
    }
    function adjustDropdown () {
      dropdownEl.value && dropdownEl.value.adjust()
    }

    const provideData = {
      visible,
      disabled: toRef(attrs, 'disabled', false),
      closeDropdown,
      adjustDropdown
    }

    provide(injectDropdown, provideData)

    // dropdown 参数直接应用透传
    return () => (
      <Dropdown
        border
        ref={dropdownEl}
        onVisibleChange={val => { visible.value = val }}
      >{{
        trigger: () => slots.trigger?.(provideData),
        default: () => slots.default?.(provideData)
      }}</Dropdown>
    )
  }
})
