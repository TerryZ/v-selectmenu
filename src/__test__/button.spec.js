import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
// import { nextTick } from 'vue'

import { MenuButton, MenuButtonWithPrepend } from './components/MenuButton'

describe('Menu button', () => {
  const wrapper = mount(MenuButton)

  test('默认样式为胶囊圆角', () => {
    expect(wrapper.find('.sm-rounded--pill').exists()).toBeTruthy()
  })
  test('设置 block 为 true 值，按钮应占满全部宽度', async () => {
    await wrapper.setProps({ block: true })
    expect(wrapper.classes('block')).toBeTruthy()
  })
  test('绑定原生点击事件，应被响应', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
  test('设置 size prop，应被添加各个对应的样式', async () => {
    await wrapper.setProps({ size: 'small' })
    expect(wrapper.find('.sm-button--small').exists()).toBeTruthy()
    await wrapper.setProps({ size: 'mini' })
    expect(wrapper.find('.sm-button--mini').exists()).toBeTruthy()
  })
  test('设置 rounded prop，应被添加各个对应的样式', async () => {
    await wrapper.setProps({ rounded: 'small' })
    expect(wrapper.find('.sm-rounded--small').exists()).toBeTruthy()
    await wrapper.setProps({ rounded: 'medium' })
    expect(wrapper.find('.sm-rounded--medium').exists()).toBeTruthy()
    await wrapper.setProps({ rounded: 'large' })
    expect(wrapper.find('.sm-rounded--large').exists()).toBeTruthy()
    await wrapper.setProps({ rounded: 'pill' })
    expect(wrapper.find('.sm-rounded--pill').exists()).toBeTruthy()
    await wrapper.setProps({ rounded: 'circle' })
    expect(wrapper.find('.sm-rounded--circle').exists()).toBeTruthy()
    await wrapper.setProps({ rounded: 'triangle' })
    expect(wrapper.find('.sm-rounded--pill').exists()).toBeTruthy()
  })
  test('设置 loading 为 true 时，在 prepend 插槽中显示加载动画图标', async () => {
    await wrapper.setProps({ loading: true })
    expect(wrapper.find('.sm-icon-loading').exists()).toBeTruthy()
  })
  test('设置 disabled prop 为真，按钮应被禁用，不响应点击事件', async () => {
    await wrapper.setProps({ disabled: true })
    expect(wrapper.classes('disabled')).toBeTruthy()
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
  test('存在 prepend 插槽内容情况下，不显示加载动画图标', async () => {
    const wrapper = mount(MenuButtonWithPrepend)
    await wrapper.setProps({ loading: true })
    expect(wrapper.find('.sm-icon-loading').exists()).toBeFalsy()
  })
})
