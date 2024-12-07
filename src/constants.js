/**
 * injection keys
 */
export const injectDropdown = Symbol('dropdown')
export const injectMenu = Symbol('menu')
export const injectMenuItem = Symbol('menu-item')
export const injectMenuGroup = Symbol('menu-group')
export const injectCheckboxGroup = Symbol('checkbox-group')
export const injectRadioGroup = Symbol('radio-group')
export const injectMultipleLevel = Symbol('multiple-level')

export const ROUNDED_SMALL = 'small'
export const ROUNDED_MEDIUM = 'medium'
export const ROUNDED_LARGE = 'large'
export const ROUNDED_PILL = 'pill'
export const ROUNDED_CIRCLE = 'circle'

export const inputRoundedList = [
  ROUNDED_SMALL,
  ROUNDED_MEDIUM,
  ROUNDED_LARGE,
  ROUNDED_PILL
]
export const buttonRoundedList = [...inputRoundedList, ROUNDED_CIRCLE]
