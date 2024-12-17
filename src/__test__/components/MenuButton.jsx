import {
  SelectMenuButton
} from '@/'

export function MenuButton (props, { attrs }) {
  return (
    <SelectMenuButton {...attrs} />
  )
}
export function MenuButtonWithPrepend (props, { attrs }) {
  return (
    <SelectMenuButton {...attrs} >
      {{
        prepend: () => 'abc'
      }}
    </SelectMenuButton>
  )
}
