import { ComponentProps } from './common'

declare interface SearchProps {
  /**
   * @default 300
   */
  debounce?: number
}

type EmitSearch = (event: "search", value: string) => void

declare interface SelectMenuSearch {
  new (): {
    $props: ComponentProps & SearchProps
    $emit: EmitSearch
  }
}

declare const SelectMenuSearch: SelectMenuSearch

export {
  SelectMenuSearch
}
