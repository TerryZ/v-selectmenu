import { describe, test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'

import MenuMultipleLevel from './components/MenuMultipleLevel.vue'

describe('Menu multiple level', () => {
  const actionFn = vi.fn()
  const wrapper = mount(MenuMultipleLevel, {
    props: {
      onAction: actionFn
    }
  })

  test('根菜单存在子菜单触发节点，并渲染右箭头图标作为标识', () => {
    expect(wrapper.find('.sm-child-level').exists()).toBeTruthy()

    const trigger = wrapper.find('.sm-child-level-trigger')

    expect(trigger.exists()).toBeTruthy()
    expect(trigger.find('.sm-item').text()).toBe('我是菜单项3')
    expect(trigger.find('.bi-chevron-right').exists()).toBeTruthy()
  })
  test('点击 "我是菜单项3" 项目，界面切换至子菜单', async () => {
    await wrapper.find('.sm-child-level-trigger').trigger('click')
    await nextTick()

    // console.log(wrapper.html())

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
})
