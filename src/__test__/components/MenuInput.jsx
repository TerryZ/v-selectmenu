import {
  SelectMenuInput
} from '@/'

export function MenuSearch (props, { attrs }) {
  return (
    <SelectMenuInput {...attrs} />
  )
}
export function MenuSearchWithPrepend (props, { attrs }) {
  return (
    <SelectMenuInput {...attrs} >
      {{
        prepend: () => 'abc'
      }}
    </SelectMenuInput>
  )
}
