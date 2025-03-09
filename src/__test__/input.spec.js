import { describe, test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'

import { MenuSearch, MenuSearchWithPrepend } from './components/MenuInput'

describe('Menu input', () => {
  const changeFn = vi.fn()
  const wrapper = mount(MenuSearch, {
    props: {
      placeholder: 'please input',
      onChange: changeFn
    }
  })

  test('默认样式为胶囊圆角', () => {
    expect(wrapper.find('.sm-rounded--pill').exists()).toBeTruthy()
  })
  test('显示 placeholder 文本为 `please input`', () => {
    expect(wrapper.find('input').attributes('placeholder')).toBe('please input')
  })
  test('未输入内容时，应不显示清除图标', () => {
    expect(wrapper.find('.sm-input__clear').classes('active')).toBeFalsy()
  })
  test('输入搜索内容，应显示清除图标', async () => {
    vi.useFakeTimers()

    const input = wrapper.find('input')
    await input.setValue('123')
    // await input.trigger('input')

    vi.runAllTimers()
    await nextTick()

    expect(wrapper.find('.sm-input__clear').classes()).toContain('active')
    expect(changeFn).toHaveBeenCalledWith('123')

    vi.useRealTimers()
  })
  test('点击清除图标，输出框的内容应被清空', async () => {
    await wrapper.find('.sm-input__clear').trigger('click')
    expect(wrapper.find('input').element.value).toBe('')
    expect(changeFn).toHaveBeenCalledWith('')
    expect(wrapper.find('.sm-input__clear').classes('active')).toBeFalsy()
  })
  test('输入框存在内容时，输出 esc 则可以快速清空', async () => {
    vi.useFakeTimers()

    const input = wrapper.find('input')
    await input.setValue('123')

    vi.runAllTimers()
    await nextTick()

    await input.trigger('keydown', { key: 'Escape' })
    expect(wrapper.find('input').element.value).toBe('')
    expect(changeFn).toHaveBeenCalledWith('')
  })
  test('输入搜索内容，显示清除图标后，删除输入内容，清除图标应同时消失', async () => {
    vi.useFakeTimers()

    const input = wrapper.find('input')
    await input.setValue('123')

    vi.runAllTimers()
    // await nextTick()

    expect(wrapper.find('.sm-input__clear').classes()).toContain('active')

    await input.setValue('')

    vi.runAllTimers()
    // await nextTick()

    expect(wrapper.find('.sm-input__clear').classes('active')).toBeFalsy()

    vi.useRealTimers()
  })
  test('设置 border prop 为 true 时，应被添加相应样式', async () => {
    await wrapper.setProps({ border: true })
    expect(wrapper.find('.sm-input--border').exists()).toBeTruthy()
  })
  test('设置 rounded prop，应被添加各个对应的样式', async () => {
    await wrapper.setProps({ rounded: 'small' })
    expect(wrapper.find('.sm-rounded--small').exists()).toBeTruthy()
    await wrapper.setProps({ rounded: 'medium' })
    expect(wrapper.find('.sm-rounded--medium').exists()).toBeTruthy()
    await wrapper.setProps({ rounded: 'large' })
    expect(wrapper.find('.sm-rounded--large').exists()).toBeTruthy()
    await wrapper.setProps({ rounded: 'circle' })
    expect(wrapper.find('.sm-rounded--pill').exists()).toBeTruthy()
  })
  test('设置 loading 为 true 时，在 prepend 插槽中显示加载动画图标', async () => {
    await wrapper.setProps({ loading: true })
    expect(wrapper.find('.sm-icon-loading').exists()).toBeTruthy()
  })
  test('存在 prepend 插槽内容情况下，不显示加载动画图标', async () => {
    const wrapper = mount(MenuSearchWithPrepend)
    await wrapper.setProps({ loading: true })
    expect(wrapper.find('.sm-icon-loading').exists()).toBeFalsy()
  })
})
