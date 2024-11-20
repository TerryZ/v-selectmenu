import {
  SelectMenuBody,
  SelectMenuItem,
  SelectMenuRadioGroup,
  SelectMenuRadioItem
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
export function RadioGroup (props, { emit }) {
  const emitModelValue = val => emit('update:modelValue', val)
  return (
    <SelectMenuRadioGroup
      modelValue={props.modelValue}
      {...{ 'onUpdate:modelValue': emitModelValue }}
    >
      <SelectMenuRadioItem value="radio1">radio1</SelectMenuRadioItem>
      <SelectMenuRadioItem value="radio2">radio2</SelectMenuRadioItem>
      <SelectMenuRadioItem value="radio3">radio3</SelectMenuRadioItem>
    </SelectMenuRadioGroup>
  )
}
