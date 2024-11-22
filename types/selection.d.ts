import {
  ComponentProps,
  ValueProps,
  DisabledProps,
  BaseMenuItemSlots,
  DefaultSlot
} from './common'

declare type SelectionValue = string | number

declare interface BaseSelectionGroupProps {
  hideOnSelection?: boolean
}
declare interface CheckboxGroupProps extends BaseSelectionGroupProps {
  /**
   * Tabular data column setting model
   */
  modelValue?: SelectionValue[]
}
declare interface RadioGroupProps extends BaseSelectionGroupProps {
  /**
   * Tabular data column setting model
   */
  modelValue?: SelectionValue
}


declare interface SelectionItem {
  new (): {
    $props: ComponentProps & ValueProps & DisabledProps
    $slots: BaseMenuItemSlots
  }
}
declare interface CheckboxGroup {
  new (): {
    $props: ComponentProps & CheckboxGroupProps
    $slots: DefaultSlot
  }
}
declare interface RadioGroup {
  new (): {
    $props: ComponentProps & RadioGroupProps
    $slots: DefaultSlot
  }
}
declare const SelectMenuCheckboxGroup: CheckboxGroup
declare const SelectMenuCheckboxItem: SelectionItem
declare const SelectMenuRadioGroup: RadioGroup
declare const SelectMenuRadioItem: SelectionItem

export {
  SelectMenuCheckboxGroup,
  SelectMenuCheckboxItem,
  SelectMenuRadioGroup,
  SelectMenuRadioItem
}
