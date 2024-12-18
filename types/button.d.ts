import { ComponentProps, BaseRounded, BaseMenuItemSlots } from './common'

declare interface ButtonProps {
  /**
   * @default false
   */
  block?: boolean
  /**
   * @default false
   */
  disabled?: boolean
  /**
   * @default `pill`
   */
  rounded?: BaseRounded | 'circle'
  /**
   * @default `medium`
   */
  size?: 'medium' | 'small' | 'mini'
  /**
   * @default false
   */
  loading?: boolean
}

declare interface SelectMenuButton {
  new (): {
    $props: ComponentProps & ButtonProps
    $slots: BaseMenuItemSlots
  }
}

declare const SelectMenuButton: SelectMenuButton

export {
  SelectMenuButton
}
