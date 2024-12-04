import { ComponentProps } from './common'

declare interface InputProps {
  /**
   * @default 300
   */
  debounce?: number
}

type EmitChange = (event: "change", value: string) => void

declare interface SelectMenuInput {
  new (): {
    $props: ComponentProps & InputProps
    $emit: EmitChange
  }
}

declare const SelectMenuInput: SelectMenuInput

export {
  SelectMenuInput
}
