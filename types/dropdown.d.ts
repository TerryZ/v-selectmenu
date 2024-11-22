import { ComponentProps, DisabledProps, DefaultSlot, AppendSlot } from './common'
import { VNode } from 'vue'

declare interface DropdownSlotData {
  visible?: boolean
  disabled?: boolean
  closeDropdown?: () => void
  adjustDropdown?: () => void
}

declare interface DropdownTrigger {
  new (): {
    $props: ComponentProps
    $slots: DefaultSlot & AppendSlot
  }
}
declare interface Dropdown {
  new (): {
    $props: ComponentProps & DisabledProps
    $slots: {
      trigger?: (data: DropdownSlotData) => VNode[]
      default?: (data: DropdownSlotData) => VNode[]
    }
  }
}

declare const SelectMenuTrigger: DropdownTrigger
declare const SelectMenuDropdown: Dropdown

export {
  SelectMenuTrigger,
  SelectMenuDropdown
}
