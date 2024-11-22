import {
  ComponentProps,
  DefaultSlot
} from './common'

export declare interface GroupItemData {
  name: string
  title: string
}

declare interface GroupProps {
  modelValue?: string
}

type EmitUpdateModelValue = (event: "update:modelValue", value: string) => void
type EmitChange = (event: "change", value: GroupItemData) => void

declare interface SelectMenuGroup {
  new (): {
    $props: ComponentProps & GroupProps
    $emit: EmitUpdateModelValue & EmitChange
    $slots: DefaultSlot
  }
}
declare interface SelectMenuGroupItem {
  new (): {
    $props: ComponentProps & GroupItemData
    $slots: DefaultSlot
  }
}

declare const SelectMenuGroup: SelectMenuGroup
declare const SelectMenuGroupItem: SelectMenuGroupItem

export {
  SelectMenuGroup,
  SelectMenuGroupItem
}
