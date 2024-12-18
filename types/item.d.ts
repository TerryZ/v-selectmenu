import {
  ComponentProps,
  ActionProps,
  DisabledProps,
  BaseMenuItemSlots,
  DefaultSlot,
  TriggerSlot
} from './common'

declare interface MenuContainer {
  new (): {
    $props: ComponentProps
    $slots: DefaultSlot
  }
}

declare const SelectMenuSection: MenuContainer
declare const SelectMenuRow: MenuContainer
declare const SelectMenuColumn: MenuContainer

declare interface DividerProps {
  /**
   * @default true
   */
  horizontal?: boolean
}

declare interface SelectMenuItem {
  new (): {
    $props: ComponentProps & ActionProps & DisabledProps
    $slots: BaseMenuItemSlots
  }
}
declare interface SelectMenuBlock {
  new (): {
    $props: ComponentProps
    $slots: BaseMenuItemSlots
  }
}
declare interface BodyProps {
  /**
   * Whether to hide the menu when clicking on the menu item
   * @default true
   */
  hideOnItemClick?: boolean
}
type EmitAction = (event: "action", value: string) => void

declare interface SelectMenuBody {
  new (): {
    $props: ComponentProps & BodyProps
    $emit: EmitAction
    $slots: DefaultSlot
  }
}
declare interface ChildLevelItem {
  new (): {
    $props: ComponentProps
    $slots: DefaultSlot & TriggerSlot
  }
}
declare interface Divider {
  new (): {
    $props: ComponentProps & DividerProps
  }
}
declare interface Header {
  new (): {
    $props: ComponentProps & ActionProps
    $slots: BaseMenuItemSlots
  }
}

declare const SelectMenuItem: SelectMenuItem
declare const SelectMenuBlock: SelectMenuBlock
declare const SelectMenuBody: SelectMenuBody
declare const SelectMenuChildLevel: ChildLevelItem
declare const SelectMenuDivider: Divider
declare const SelectMenuHeader: Header
declare const SelectMenuSubHeader: Header

export {
  SelectMenuSection,
  SelectMenuRow,
  SelectMenuColumn,
  SelectMenuItem,
  SelectMenuBlock,
  SelectMenuBody,
  SelectMenuChildLevel,
  SelectMenuDivider,
  SelectMenuHeader,
  SelectMenuSubHeader
}
