import { AllowedComponentProps, ComponentCustomProps, VNodeProps, VNode } from 'vue'

export declare interface ComponentProps extends
  AllowedComponentProps,
  ComponentCustomProps,
  VNodeProps {}

export declare type SelectPageKey = string | number
export declare type BaseRounded = 'small' | 'medium' | 'large' | 'pill'

export declare interface ActionProps {
  action?: string
}
export declare interface ValueProps {
  value: string
}
export declare interface DisabledProps {
  /**
   * Component disabled states
   *
   * @default false
   */
  disabled?: boolean
}

export declare interface DefaultSlot {
  default?: () => VNode[]
}

export declare interface PrependSlot {
  prepend?: () => VNode[]
}
export declare interface AppendSlot {
  append?: () => VNode[]
}
export declare interface TriggerSlot {
  trigger?: () => VNode[]
}
export declare interface BaseMenuItemSlots extends PrependSlot, DefaultSlot, AppendSlot {}
