import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import {
  SelectMenuItem,
  SelectMenuHeader,
  SelectMenuSubHeader
} from '@/'
import { ItemWithBody, MenuDivider } from './components/MenuItem'

describe('Menu item', function () {
  test('不提供任何内容，应至少包含一个空内容的主体', () => {
    const wrapper = mount(SelectMenuItem)

    expect(wrapper.find('.sm-item').findAll('div')).toHaveLength(1)
    expect(wrapper.find('.sm-item-body').exists()).toBeTruthy()
  })
  test('完整设置三个插槽，内容应显示于对应位置', () => {
    const wrapper = mount(SelectMenuItem, {
      slots: {
        prepend: 'Prepend',
        default: 'Body',
        append: 'Append'
      }
    })
    expect(wrapper.find('.sm-item').findAll('div')).toHaveLength(3)
    expect(wrapper.find('.sm-item-prepend').text()).toBe('Prepend')
    expect(wrapper.find('.sm-item-body').text()).toBe('Body')
    expect(wrapper.find('.sm-item-append').text()).toBe('Append')
  })
  describe('应用 SelectMenuBody 模块', () => {
    const wrapper = mount(ItemWithBody)

    test('应用 SelectMenuBody 模块，点击 Item 时，响应 action 事件', async () => {
      await wrapper.find('.sm-item').trigger('click')
      expect(wrapper.emitted('action').length).toBeTruthy()
      expect(wrapper.emitted('action').at(-1)).toEqual(['item'])
    })

    test('禁用状态点击项目不触发 action 事件', async () => {
      await wrapper.setProps({
        disabled: true
      })
      await wrapper.find('.sm-item').trigger('click')
      expect(wrapper.emitted('action')).toHaveLength(1)
    })
  })
})

describe('Menu header', () => {
  test('不提供任何内容，应至少包含一个空内容的主体', () => {
    const wrapper = mount(SelectMenuHeader)

    expect(wrapper.find('.sm-item').findAll('div')).toHaveLength(1)
    expect(wrapper.find('.sm-item-body').exists()).toBeTruthy()
  })
  test('完整设置三个插槽，内容应显示于对应位置', () => {
    const wrapper = mount(SelectMenuHeader, {
      slots: {
        prepend: 'Prepend',
        default: 'Body',
        append: 'Append'
      }
    })
    expect(wrapper.find('.sm-item').findAll('div')).toHaveLength(3)
    expect(wrapper.find('.sm-item-prepend').text()).toBe('Prepend')
    expect(wrapper.find('.sm-item-body').text()).toBe('Body')
    expect(wrapper.find('.sm-item-append').text()).toBe('Append')
  })
})

describe('Menu sub header', () => {
  test('不提供任何内容，应至少包含一个空内容的主体', () => {
    const wrapper = mount(SelectMenuSubHeader)

    expect(wrapper.find('.sm-item').findAll('div')).toHaveLength(1)
    expect(wrapper.find('.sm-item-body').exists()).toBeTruthy()
  })
  test('完整设置三个插槽，内容应显示于对应位置', () => {
    const wrapper = mount(SelectMenuSubHeader, {
      slots: {
        prepend: 'Prepend',
        default: 'Body',
        append: 'Append'
      }
    })
    expect(wrapper.find('.sm-item').findAll('div')).toHaveLength(3)
    expect(wrapper.find('.sm-item-prepend').text()).toBe('Prepend')
    expect(wrapper.find('.sm-item-body').text()).toBe('Body')
    expect(wrapper.find('.sm-item-append').text()).toBe('Append')
  })
})

describe('Menu divider', () => {
  test('默认渲染水平分割线', () => {
    const wrapper = mount(MenuDivider)
    expect(wrapper.find('.sm-divider').exists()).toBeTruthy()
  })
  test('设置 horizontal prop 为 false 值，应渲染垂直分割线', () => {
    const wrapper = mount(MenuDivider, {
      props: {
        horizontal: false
      }
    })
    expect(wrapper.find('.sm-divider-vertical').exists()).toBeTruthy()
  })
})
