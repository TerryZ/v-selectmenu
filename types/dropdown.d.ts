import { ComponentProps, DisabledProps, DefaultSlot, AppendSlot } from './common'
import { VNode, Ref } from 'vue'

export interface SelectMenuDropdownUtilities {
  /**
   * Dropdown opening state
   */
  readonly visible: Ref<boolean>
  /**
   * Disabled state
   */
  readonly disabled: Ref<boolean>
  /**
   * Close the dropdown menu when it is open
   */
  closeDropdown: () => void
  /**
   * Adjust the dropdown position
   */
  adjustDropdown: () => void
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
      trigger?: (data: SelectMenuDropdownUtilities) => VNode[]
      default?: (data: SelectMenuDropdownUtilities) => VNode[]
    }
  }
}

declare const SelectMenuTrigger: DropdownTrigger
declare const SelectMenuDropdown: Dropdown


export declare function useSelectMenuDropdown (): SelectMenuDropdownUtilities

export {
  SelectMenuTrigger,
  SelectMenuDropdown
}
