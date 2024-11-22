import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import {
  MenuDropdownWithTrigger,
  MenuDropdownWithCustomTrigger
} from './components/MenuDropdown'

describe('Menu dropdown', () => {
  describe('With trigger', () => {
    const wrapper = mount(MenuDropdownWithTrigger)
    test('内置的下拉列表触发对象应显示 "Open SelectMenu"', () => {
      expect(wrapper.find('.sm-default-trigger').text()).toBe('Open SelectMenu')
    })
    test('点击触发对象，该对象显示为打开状态', async () => {
      await wrapper.find('.sm-default-trigger').trigger('click')
      expect(wrapper.find('.sm-default-trigger').classes('sm-opened')).toBe(true)
    })
    test('设置 dropdown 的 disabled prop 为 true 值，点击触发对象应不能打开菜单', async () => {
      await wrapper.find('.sm-default-trigger').trigger('click')
      expect(wrapper.find('.sm-default-trigger').classes('sm-opened')).toBe(false)

      await wrapper.setProps({ disabled: true })

      await wrapper.find('.sm-default-trigger').trigger('click')
      expect(wrapper.find('.sm-default-trigger').classes('sm-opened')).toBe(false)
    })
  })
  describe('With custom trigger', () => {
    const wrapper = mount(MenuDropdownWithCustomTrigger)
    test('应渲染自定义的触发对象', () => {
      expect(wrapper.find('.custom-trigger').text()).toBe('Open SelectMenu with custom trigger')
    })
  })
})
