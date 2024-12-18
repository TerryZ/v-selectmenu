import { ComponentProps, BaseRounded, PrependSlot, AppendSlot } from './common'

declare interface InputProps {
  /**
   * @default 300
   */
  debounce?: number
  modelValue?: string
  /**
   * @default false
   */
  disabled?: boolean
  /**
   * @default false
   */
  border?: boolean
  /**
   * @default `pill`
   */
  rounded?: BaseRounded
  placeholder?: string
  /**
   * @default false
   */
  loading?: boolean
}

type EmitUpdateModelValue = (event: "update:modelValue", value: string) => void
type EmitChange = (event: "change", value: string) => void

declare interface SelectMenuInput {
  new (): {
    $props: ComponentProps & InputProps
    $emit: EmitUpdateModelValue & EmitChange
    $slots: PrependSlot & AppendSlot
  }
}

declare const SelectMenuInput: SelectMenuInput

export {
  SelectMenuInput
}
