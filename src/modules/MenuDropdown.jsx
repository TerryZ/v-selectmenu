import { ref, defineComponent, provide } from 'vue'

import Dropdown from 'v-dropdown'

import { injectDropdown } from '../constants'

export default defineComponent({
  name: 'MenuDropdown',
  setup (props, { slots }) {
    const visible = ref(false)
    const regionModel = ref()
    const dropdownEl = ref()

    function closeDropdown () {
      dropdownEl.value && dropdownEl.value.close()
    }
    function adjustDropdown () {
      dropdownEl.value && dropdownEl.value.adjust()
    }
    function setRegionModel (model) {
      regionModel.value = model
    }

    provide(injectDropdown, {
      dropdownVisible: visible,
      regionModel,
      closeDropdown,
      adjustDropdown,
      setRegionModel
    })

    // dropdown 参数直接应用透传
    return () => (
      <Dropdown
        border
        ref={dropdownEl}
        onVisibleChange={val => { visible.value = val }}
      >{{
        trigger: () => slots.trigger?.(),
        default: () => slots.default?.()
      }}</Dropdown>
    )
  }
})
