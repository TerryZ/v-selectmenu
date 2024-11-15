import { inject } from 'vue'

import { injectDropdown } from '../constants'

export function useDebounce (time = 300) {
  let timer

  return callback => {
    clearTimeout(timer)
    timer = setTimeout(callback, time)
  }
}

export function useSelectMenuDropdown () {
  const dropdown = inject(injectDropdown)

  return {
    visible: dropdown?.visible,
    disabled: dropdown?.disabled,
    closeDropdown: dropdown?.closeDropdown,
    adjustDropdown: dropdown?.adjustDropdown
  }
}
