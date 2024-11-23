import { describe, test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import { RadioGroup, CheckboxGroup } from './components/MenuItem'

describe('Menu selection', function () {
  describe('Radio', () => {
    const vModelFn = vi.fn()
    const changeFn = vi.fn()
    const wrapper = mount(RadioGroup, {
      props: {
        modelValue: 'radio1',
        onChange: changeFn,
        'onUpdate:modelValue': vModelFn
      }
    })
    test('使用 "radio1" 值初始化 modelValue 字段，第一项应被选中', () => {
      expect(wrapper.findAll('.sm-radio-item').at(0).find('.sm-icon').exists()).toBeTruthy()
    })
    test('点击第 3 项，该项目应处于选中状态', async () => {
      await wrapper.findAll('.sm-radio-item').at(2).trigger('click')
      expect(vModelFn).toHaveBeenCalledWith('radio3')
      expect(changeFn).toHaveBeenCalledWith('radio3')
      expect(wrapper.findAll('.sm-radio-item').at(2).find('.sm-icon').exists()).toBeTruthy()
    })
    test('设置 group 的 modelValue 值为 "radio2"，第 2 项应被选中', async () => {
      await wrapper.setProps({ modelValue: 'radio2' })
      expect(vModelFn).toHaveBeenCalledWith('radio2')
      expect(changeFn).toHaveBeenCalledWith('radio2')
      expect(wrapper.findAll('.sm-radio-item').at(1).find('.sm-icon').exists()).toBeTruthy()
    })
    test('设置禁用状态的第 1 项点击后，应不会被选中', async () => {
      await wrapper.findAll('.sm-radio-item').at(0).trigger('click')
      expect(wrapper.findAll('.sm-radio-item').at(0).find('.sm-icon').exists()).toBeFalsy()
    })
    test('设置 group 的 modelValue 值为空，应清除选中项', async () => {
      await wrapper.setProps({ modelValue: '' })
      expect(vModelFn).toHaveBeenCalledWith('')
      expect(changeFn).toHaveBeenCalledWith('')
      expect(wrapper.find('.sm-icon').exists()).toBeFalsy()
    })
  })
  describe('Checkbox', () => {
    const vModelFn = vi.fn()
    const changeFn = vi.fn()
    const wrapper = mount(CheckboxGroup, {
      props: {
        modelValue: ['checkbox1'],
        onChange: changeFn,
        'onUpdate:modelValue': vModelFn
      }
    })
    test('使用 "checkbox1" 值初始化 modelValue 字段，第一项应被选中', () => {
      expect(wrapper.findAll('.sm-icon')).toHaveLength(1)
      expect(wrapper.findAll('.sm-checkbox-item').at(0).find('.sm-icon').exists()).toBeTruthy()
    })
    test('设置 group 的 modelValue 为重复的值，内容应被过滤', async () => {
      await wrapper.setProps({ modelValue: ['checkbox1', 'checkbox1'] })
      expect(wrapper.findAll('.sm-icon')).toHaveLength(1)
    })
    test('点击第 3 项，该项目应处于选中状态', async () => {
      await wrapper.findAll('.sm-checkbox-item').at(2).trigger('click')
      expect(vModelFn).toHaveBeenCalledWith(['checkbox1', 'checkbox3'])
      expect(changeFn).toHaveBeenCalledWith(['checkbox1', 'checkbox3'])
      expect(wrapper.findAll('.sm-icon')).toHaveLength(2)
      expect(wrapper.findAll('.sm-checkbox-item').at(0).find('.sm-icon').exists()).toBeTruthy()
      expect(wrapper.findAll('.sm-checkbox-item').at(2).find('.sm-icon').exists()).toBeTruthy()
    })
    test('设置 group 的 modelValue 为所有项目的值数组，所有项应被选中', async () => {
      await wrapper.setProps({ modelValue: ['checkbox1', 'checkbox2', 'checkbox3'] })
      expect(vModelFn).toHaveBeenCalledWith(['checkbox1', 'checkbox2', 'checkbox3'])
      expect(changeFn).toHaveBeenCalledWith(['checkbox1', 'checkbox2', 'checkbox3'])
      expect(wrapper.findAll('.sm-icon')).toHaveLength(3)
    })
    test('点击第 2 项，该项目应取消选中状态', async () => {
      await wrapper.findAll('.sm-checkbox-item').at(1).trigger('click')
      expect(vModelFn).toHaveBeenCalledWith(['checkbox1', 'checkbox3'])
      expect(changeFn).toHaveBeenCalledWith(['checkbox1', 'checkbox3'])
      expect(wrapper.findAll('.sm-icon')).toHaveLength(2)
      expect(wrapper.findAll('.sm-checkbox-item').at(0).find('.sm-icon').exists()).toBeTruthy()
      expect(wrapper.findAll('.sm-checkbox-item').at(2).find('.sm-icon').exists()).toBeTruthy()
    })
    test('设置禁用状态的第 1 项点击后，应不会取消选中状态', async () => {
      await wrapper.findAll('.sm-checkbox-item').at(0).trigger('click')
      expect(wrapper.findAll('.sm-checkbox-item').at(0).find('.sm-icon').exists()).toBeTruthy()
    })
    test('设置 group 的 modelValue 值为空，应清除选中项', async () => {
      await wrapper.setProps({ modelValue: [] })
      expect(vModelFn).toHaveBeenCalledWith([])
      expect(changeFn).toHaveBeenCalledWith([])
      expect(wrapper.find('.sm-icon').exists()).toBeFalsy()
    })
  })
})
