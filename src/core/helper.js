import { inject } from 'vue'

import { injectDropdown, ROUNDED_PILL, inputRoundedList, buttonRoundedList } from '../constants'

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

export function cssValue (value, unit = 'px') {
  if (typeof value === 'number') {
    return `${value}${unit}`
  }
  return value // string value
}

export function getInputRoundedClass (value) {
  const level = !value || !inputRoundedList.includes(value)
    ? ROUNDED_PILL
    : inputRoundedList.find(val => val === value)
  return `select-menu--rounded-${level}`
}
export function getButtonRoundedClass (value) {
  const level = !value || !buttonRoundedList.includes(value)
    ? ROUNDED_PILL
    : buttonRoundedList.find(val => val === value)
  return `select-menu--rounded-${level}`
}
