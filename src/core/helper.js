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
  const {
    visible,
    disabled,
    closeDropdown,
    adjustDropdown
  } = inject(injectDropdown, {})

  return {
    visible,
    disabled,
    closeDropdown,
    adjustDropdown
  }
}
