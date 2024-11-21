import { describe, test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import { MenuGroup } from './components/MenuGroup'

describe('Menu group', () => {
  const changeFn = vi.fn()
  const wrapper = mount(MenuGroup, {
    props: {
      modelValue: '',
      onChange: changeFn
    }
  })

  test('应渲染三个分组', () => {
    expect(wrapper.findAll('.sm-group-tab')).toHaveLength(3)
    expect(wrapper.findAll('.sm-group-tab').at(0).text()).toBe('Group1')
    expect(wrapper.findAll('.sm-group-tab').at(1).text()).toBe('Group2')
    expect(wrapper.findAll('.sm-group-tab').at(2).text()).toBe('Group3')
  })
  test('未指定激活分组时，默认激活第一个分组', () => {
    expect(wrapper.findAll('.sm-group-tab').at(0).classes()).toContain('active')
  })
  test('内容区域应渲染该分组的一个菜单项', () => {
    expect(wrapper.find('.sm-group-body').findAll('.sm-item')).toHaveLength(1)
  })
  test('点击第二个分组选项卡，应激活该分组', async () => {
    await wrapper.findAll('.sm-group-tab').at(1).trigger('click')
    expect(wrapper.findAll('.sm-group-tab').at(1).classes()).toContain('active')
  })
  test('内容区域应渲染该第二个分组的两个菜单项', () => {
    expect(wrapper.find('.sm-group-body').findAll('.sm-item')).toHaveLength(2)
  })
  test('响应 change 事件', () => {
    expect(changeFn).toBeCalledWith({ name: 'group2', title: 'Group2' })
  })
  test('设置 group modelValue 值为 "group3"，应激活第三个分组', async () => {
    await wrapper.setProps({ modelValue: 'group3' })
    expect(wrapper.findAll('.sm-group-tab').at(2).classes()).toContain('active')
    expect(changeFn).toBeCalledWith({ name: 'group3', title: 'Group3' })
  })
  test('内容区域应渲染该第三个分组的三个菜单项', () => {
    expect(wrapper.find('.sm-group-body').findAll('.sm-item')).toHaveLength(3)
  })
})
