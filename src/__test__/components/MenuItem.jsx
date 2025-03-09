import {
  SelectMenuBody,
  SelectMenuBlock,
  SelectMenuSection,
  SelectMenuItem,
  SelectMenuRadioGroup,
  SelectMenuRadioItem,
  SelectMenuCheckboxGroup,
  SelectMenuCheckboxItem,
  SelectMenuDivider,
  SelectMenuRow,
  SelectMenuColumn
} from '@/'

export function ItemWithBody (props, { emit }) {
  const handleAction = action => emit('action', action)
  return (
    <SelectMenuBody onAction={handleAction}>
      <SelectMenuSection>
        <SelectMenuItem
          action="item"
          disabled={props.disabled}
        >item</SelectMenuItem>
      </SelectMenuSection>
    </SelectMenuBody>
  )
}
export function RadioGroup (props, { attrs }) {
  return (
    <SelectMenuRadioGroup {...attrs}>
      <SelectMenuBlock>
        <SelectMenuRadioItem value="radio1" disabled>radio1</SelectMenuRadioItem>
        <SelectMenuRadioItem value="radio2">radio2</SelectMenuRadioItem>
        <SelectMenuRadioItem value="radio3">radio3</SelectMenuRadioItem>
      </SelectMenuBlock>
    </SelectMenuRadioGroup>
  )
}
export function CheckboxGroup (props, { attrs }) {
  return (
    <SelectMenuCheckboxGroup {...attrs}>
      <SelectMenuColumn>
        <SelectMenuRow>
          <SelectMenuCheckboxItem value="checkbox1" disabled>checkbox1</SelectMenuCheckboxItem>
          <SelectMenuCheckboxItem value="checkbox2">checkbox2</SelectMenuCheckboxItem>
          <SelectMenuCheckboxItem value="checkbox3">checkbox3</SelectMenuCheckboxItem>
        </SelectMenuRow>
      </SelectMenuColumn>

    </SelectMenuCheckboxGroup>
  )
}
export function MenuDivider (props, { attrs }) {
  return (
    <SelectMenuDivider {...attrs}/>
  )
}
