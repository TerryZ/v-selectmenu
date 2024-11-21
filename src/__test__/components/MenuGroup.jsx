import {
  SelectMenuGroup,
  SelectMenuGroupItem,
  SelectMenuItem
} from '@/'

export function MenuGroup (props, { attrs }) {
  return (
    <SelectMenuGroup { ...attrs }>
      <SelectMenuGroupItem
        name="group1"
        title="Group1"
      >
        <SelectMenuItem>group-item-1-1</SelectMenuItem>
      </SelectMenuGroupItem>
      <SelectMenuGroupItem
        name="group2"
        title="Group2"
      >
        <SelectMenuItem>group-item-2-1</SelectMenuItem>
        <SelectMenuItem>group-item-2-2</SelectMenuItem>
      </SelectMenuGroupItem>
      <SelectMenuGroupItem
        name="group3"
        title="Group3"
      >
        <SelectMenuItem>group-item-3-1</SelectMenuItem>
        <SelectMenuItem>group-item-3-2</SelectMenuItem>
        <SelectMenuItem>group-item-3-3</SelectMenuItem>
      </SelectMenuGroupItem>
    </SelectMenuGroup>
  )
}
