import { AllowedComponentProps, ComponentCustomProps, VNodeProps, VNode } from 'vue'

export declare interface ComponentProps extends
  AllowedComponentProps,
  ComponentCustomProps,
  VNodeProps {}

export declare type SelectPageKey = string | number

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
export declare interface AppendSlot {
  append?: () => VNode[]
}
export declare interface TriggerSlot {
  trigger?: () => VNode[]
}
export declare interface BaseMenuItemSlots extends DefaultSlot, AppendSlot {
  prepend?: () => VNode[]
}
