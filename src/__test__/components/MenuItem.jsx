import {
  SelectMenuBody,
  SelectMenuItem,
  SelectMenuRadioGroup,
  SelectMenuRadioItem,
  SelectMenuCheckboxGroup,
  SelectMenuCheckboxItem,
  SelectMenuDivider
} from '@/'

export function ItemWithBody (props, { emit }) {
  const handleAction = action => emit('action', action)
  return (
    <SelectMenuBody onAction={handleAction}>
      <SelectMenuItem
        action="item"
        disabled={props.disabled}
      >item</SelectMenuItem>
    </SelectMenuBody>
  )
}
export function RadioGroup (props, { attrs }) {
  return (
    <SelectMenuRadioGroup {...attrs}>
      <SelectMenuRadioItem value="radio1">radio1</SelectMenuRadioItem>
      <SelectMenuRadioItem value="radio2">radio2</SelectMenuRadioItem>
      <SelectMenuRadioItem value="radio3">radio3</SelectMenuRadioItem>
    </SelectMenuRadioGroup>
  )
}
export function CheckboxGroup (props, { attrs }) {
  return (
    <SelectMenuCheckboxGroup {...attrs}>
      <SelectMenuCheckboxItem value="checkbox1">checkbox1</SelectMenuCheckboxItem>
      <SelectMenuCheckboxItem value="checkbox2">checkbox2</SelectMenuCheckboxItem>
      <SelectMenuCheckboxItem value="checkbox3">checkbox3</SelectMenuCheckboxItem>
    </SelectMenuCheckboxGroup>
  )
}
export function MenuDivider (props, { attrs }) {
  return (
    <SelectMenuDivider {...attrs}/>
  )
}
