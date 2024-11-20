import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'

// import { RadioGroup } from './components/MenuItem'
import RadioGroup from './components/RadioGroup.vue'

describe('Menu selection', function () {
  describe('Radio', () => {
    describe('操作', () => {
      const wrapper = mount(RadioGroup)
      test('选中第 2 项，该项目应处于选中状态', async () => {
        await wrapper.findAll('.sm-radio-item').at(1).trigger('click')
        expect(wrapper.emitted('update:modelValue').at(-1)).toEqual(['radio2'])
        expect(wrapper.findAll('.sm-radio-item').at(1).find('.sm-icon').exists()).toBeTruthy()
      })
      test('', async () => {
        await wrapper.setProps({ modelValue: '' })
        console.log(wrapper.html())
        await nextTick()
        expect(wrapper.find('.sm-icon').exists()).toBeFalsy()
      })
    })
  })
})
