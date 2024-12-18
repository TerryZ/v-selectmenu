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

interface DropdownTriggerProps extends ComponentProps {
  /**
   * The rounded size of built-in dropdown trigger button
   * @default `small`
   */
  rounded?: string
}

declare interface DropdownTrigger {
  new (): {
    $props: DropdownTriggerProps
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
