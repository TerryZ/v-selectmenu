import {
  SelectMenuBody,
  SelectMenuItem
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
