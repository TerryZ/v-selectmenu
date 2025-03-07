import { ROUNDED_PILL, inputRoundedList, buttonRoundedList } from '../constants'

export function useDebounce (time = 300) {
  let timer

  return callback => {
    clearTimeout(timer)
    timer = setTimeout(callback, time)
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
  return `sm-rounded--${level}`
}
export function getButtonRoundedClass (value) {
  const level = !value || !buttonRoundedList.includes(value)
    ? ROUNDED_PILL
    : buttonRoundedList.find(val => val === value)
  return `sm-rounded--${level}`
}
