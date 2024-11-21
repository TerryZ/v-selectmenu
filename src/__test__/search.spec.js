import { describe, test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'

import { MenuSearch } from './components/MenuSearch'

describe('Menu search', () => {
  const searchFn = vi.fn()
  const wrapper = mount(MenuSearch, {
    props: {
      onSearch: searchFn
    }
  })

  test('未输入内容时，应不显示清除图标', () => {
    expect(wrapper.find('.sm-search-append').classes('active')).toBeFalsy()
  })
  test('输入搜索内容，应显示清除图标', async () => {
    vi.useFakeTimers()

    const input = wrapper.find('input')
    await input.setValue('123')
    // await input.trigger('input')

    vi.runAllTimers()
    await nextTick()

    expect(wrapper.find('.sm-search-append').classes()).toContain('active')
    expect(searchFn).toHaveBeenCalledWith('123')

    vi.useRealTimers()
  })
  test('点击清除图标，输出框的内容应被清空', async () => {
    await wrapper.find('.sm-search-append').trigger('click')
    expect(wrapper.find('input').element.value).toBe('')
    expect(searchFn).toHaveBeenCalledWith('')
    expect(wrapper.find('.sm-search-append').classes('active')).toBeFalsy()
  })
  test('输入搜索内容，显示清除图标后，删除输入内容，清除图标应同时消失', async () => {
    vi.useFakeTimers()

    const input = wrapper.find('input')
    await input.setValue('123')

    vi.runAllTimers()
    await nextTick()

    expect(wrapper.find('.sm-search-append').classes()).toContain('active')

    await input.setValue('')

    vi.runAllTimers()
    await nextTick()

    expect(wrapper.find('.sm-search-append').classes('active')).toBeFalsy()

    vi.useRealTimers()
  })
})
