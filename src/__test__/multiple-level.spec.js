import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
// import { nextTick } from 'vue'

import MenuMultipleLevel from './components/MenuMultipleLevel.vue'

describe('Menu multiple level', () => {
  const wrapper = mount(MenuMultipleLevel)

  test('根菜单存在子菜单触发节点，并渲染右箭头图标作为标识', () => {
    expect(wrapper.find('.sm-child-level').exists()).toBeTruthy()

    const trigger = wrapper.find('.sm-child-level-trigger')

    expect(trigger.exists()).toBeTruthy()
    expect(trigger.find('.sm-item').text()).toBe('我是菜单项3')
    expect(trigger.find('.bi-chevron-right').exists()).toBeTruthy()
    expect(wrapper.findAll('.sm-item')).toHaveLength(5)
  })
  test('点击 "我是菜单项3" 项目，界面切换至子菜单', async () => {
    await wrapper.find('.sm-child-level-trigger .sm-item').trigger('click')
    // await nextTick()

    // console.log(wrapper.find('.sm-container-root').element.computedStyleMap)
    expect(wrapper.find('.sm-container-root').element.style.display).toBe('none')
    expect(wrapper.find('.sm-container-child').exists()).toBeTruthy()

    // expect(wrapper.find('.sm-container-root').exists()).toBeFalsy()
  })
  test('子菜单界面中，应存在标题栏，并以上级菜单的触发元素内容作为标题内容("我是菜单项3")', () => {
    const header = wrapper.find('.sm-child-header')
    expect(header.exists()).toBeTruthy()
    expect(header.find('.sm-item-body').text()).toBe('我是菜单项3')
  })
  test('标题栏中存在返回按钮', () => {
    expect(wrapper.find('.bi-chevron-left').exists()).toBeTruthy()
  })
  test('子菜单中存在四个菜单项', () => {
    expect(wrapper.findAll('.sm-child-body .sm-item')).toHaveLength(4)
  })
  test('点击 "我是子菜单项2" 项目，界面切换至孙菜单', async () => {
    await wrapper.findAll('.sm-child-body .sm-item').at(1).trigger('click')
    expect(wrapper.find('.sm-container-root').element.style.display).toBe('none')
    expect(wrapper.findAll('.sm-container-child')).toHaveLength(2)
    expect(wrapper.findAll('.sm-container-child').at(0).element.style.display).toBe('none')
  })
  test('孙菜单界面中，应存在标题栏，并以上级菜单的触发元素内容作为标题内容("我是子菜单项2")', () => {
    const grandson = wrapper.findAll('.sm-container-child').at(1)
    const header = grandson.find('.sm-child-header')
    expect(header.exists()).toBeTruthy()
    expect(header.find('.sm-item-body').text()).toBe('我是子菜单项2')
  })
  test('孙菜单标题栏中存在返回按钮', () => {
    const grandson = wrapper.findAll('.sm-container-child').at(1)
    expect(grandson.find('.sm-child-header .bi-chevron-left').exists()).toBeTruthy()
  })
  test('孙菜单中存在三个菜单项', () => {
    const grandson = wrapper.findAll('.sm-container-child').at(1)
    expect(grandson.findAll('.sm-child-body .sm-item')).toHaveLength(3)
  })
  test('点击孙菜单的返回按钮，界面切换回子菜单', async () => {
    const grandson = wrapper.findAll('.sm-container-child').at(1)
    await grandson.find('.sm-child-header .sm-item-prepend').trigger('click')
    expect(wrapper.find('.sm-container-root').element.style.display).toBe('none')
    expect(wrapper.findAll('.sm-container-child')).toHaveLength(1)
    expect(wrapper.findAll('.sm-child-body .sm-item')).toHaveLength(4)
  })
  test('子菜单标题栏应显示 "我是菜单项3"', () => {
    expect(wrapper.find('.sm-child-header .sm-item-body').text()).toBe('我是菜单项3')
  })
  test('点击子菜单的返回按钮，界面切换回主菜单', async () => {
    await wrapper.find('.sm-child-header .sm-item-prepend').trigger('click')
    expect(wrapper.find('.sm-container-root').element.style.display).toBe('')
    expect(wrapper.find('.sm-container-child').exists()).toBeFalsy()
  })
  test('主界面中应存在五个菜单项', () => {
    expect(wrapper.findAll('.sm-item')).toHaveLength(5)
  })
})
