import {
  SelectMenuBody,
  SelectMenuItem,
  SelectMenuDropdown,
  SelectMenuTrigger
} from '@/'

export function MenuDropdownWithTrigger (props, { attrs }) {
  return (
    <SelectMenuDropdown {...attrs}>{{
      trigger: () => <SelectMenuTrigger>Open SelectMenu</SelectMenuTrigger>,
      default: () => (
        <SelectMenuBody>
          <SelectMenuItem action="item">item</SelectMenuItem>
        </SelectMenuBody>
      )
    }}</SelectMenuDropdown>
  )
}
export function MenuDropdownWithCustomTrigger (props, { attrs }) {
  return (
    <SelectMenuDropdown {...attrs}>{{
      trigger: () => (
        <div class="custom-trigger">
          Open SelectMenu with custom trigger
        </div>
      ),
      default: () => (
        <SelectMenuBody>
          <SelectMenuItem action="item">item</SelectMenuItem>
        </SelectMenuBody>
      )
    }}</SelectMenuDropdown>
  )
}
