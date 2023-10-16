import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import list from '@test/sample/nba-teams'
import sm from '@/SelectMenu'

describe('v-selectmenu basic options', () => {
  describe('"embed" option set to true', () => {
    const wrapperEmbed = mount(sm, {
      propsData: {
        data: list,
        embed: true
      }
    })
    it('The menu caller should not exist', () => {
      expect(wrapperEmbed.find('div.sm-caller-container').exists()).to.equal(false)
    })
    it('The menu should be embedded to the page/component and displayed by default', () => {
      expect(wrapperEmbed.find('div.v-dropdown-container.v-dropdown-embed').isVisible()).to.equal(true)
    })
    it('The close button should not exist', () => {
      expect(wrapperEmbed.find('span.sm-close-button').exists()).to.equal(false)
    })
  })
  it('"disabled" option set to true, the dropdown container is not allowed to be opened ', () => {
    const wrapperDisabled = mount(sm, {
      propsData: {
        data: list,
        disabled: true
      }
    })
    wrapperDisabled.find('div.sm-caller-container').trigger('click')
    expect(wrapperDisabled.find('div.v-dropdown-container').isVisible()).to.equal(false)
  })
  const wrapper = mount(sm, {
    propsData: {
      data: list,
      width: 300,
      fullWidth: true
    }
  })
  it('"align" option set to "left", the dropdown container should be aligned to the left', () => {
    wrapper.setProps({ align: 'left' })
    expect(wrapper.vm.align).to.equal('left')
  })
  it('"align" option set to "center", the dropdown container should be aligned to the center', () => {
    wrapper.setProps({ align: 'center' })
    expect(wrapper.vm.align).to.equal('center')
  })
  it('"align" option set to "right", the dropdown container should be aligned to the right', () => {
    wrapper.setProps({ align: 'right' })
    expect(wrapper.vm.align).to.equal('right')
  })
  it('"width" set to 300, the dropdown container width should be 300px', () => {
    expect(wrapper.find('div.v-dropdown-container').attributes().style).to.have.string('width: 300px')
  })
  it('When the "language" option is not specified, its default value should be "cn"', () => {
    expect(wrapper.vm.language).to.equal('cn')
  })
  it('When the "type" option is not specified, its default value should be "advanced"', () => {
    expect(wrapper.vm.type).to.equal('advanced')
  })
  it('"fullWidth" option set to true, the menu caller container should have class "v-dropdown-caller--full-width"', () => {
    expect(wrapper.find('div.v-dropdown-caller').classes('v-dropdown-caller--full-width')).to.equal(true)
  })
})
