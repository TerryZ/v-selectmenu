import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import { regularBase, regularWithHeader, regularMultipleLevel, regularGroup } from '@test/sample/menu/regular'
import sm from '@/SelectMenu'

const REGULAR = 'regular'

describe('v-selectmenu regular mode', () => {
  describe('The basic regular menu', () => {
    const w = mount(sm, {
      propsData: {
        data: regularBase,
        type: REGULAR
      }
    })
    it('The number of menu items should be 9', () => {
      expect(w.findAll('ul.sm-regular li').length).to.equal(9)
    })
    it('The number of menu divider should be 2', () => {
      expect(w.findAll('ul.sm-regular .sm-divider').length).to.equal(2)
    })
    it('The number of menu disabled item should be 2', () => {
      expect(w.findAll('ul.sm-regular .sm-disabled').length).to.equal(2)
    })
    it('The text in header bar of menu should be "SelectMenu"', () => {
      expect(w.find('.sm-header h3').text()).to.equal('SelectMenu')
    })
    it('Click the callback menu item(last one), its should executed the function and created a DIV dom and its class name should be "v-selectmenu-callback"', () => {
      w.findAll('ul.sm-regular li').at(8).find('a').trigger('click')
      // console.log(document.querySelector('.v-selectmenu-callback'))
      // console.log(w.findAll('ul.sm-regular li').at(8).text())
      expect(typeof document.querySelector('.v-selectmenu-callback') !== 'undefined').to.equal(true)
    })
    it('After click, the menu should be invisable', () => {
      expect(w.find('div.v-dropdown-container').isVisible()).to.equal(false)
    })
    it('Change regular menu data source, the number of header menu item should be 3', () => {
      const wrapper = mount(sm, {
        propsData: {
          data: regularWithHeader,
          type: REGULAR
        }
      })
      expect(wrapper.findAll('ul.sm-regular .sm-caption').length).to.equal(3)
    })
  })

  describe('The multiple level regular menu', () => {
    const w = mount(sm, {
      propsData: {
        data: regularMultipleLevel,
        type: REGULAR
      }
    })
    it('The number of menu item that have child menu should be 4', () => {
      expect(w.findAll('ul.sm-regular li.sm-parent').length).to.equal(4)
    })
    it('Switch to first child menu(Sports news website)', () => {
      w.find('div.sm-caller-container').trigger('click')
      w.findAll('ul.sm-regular li.sm-parent').at(0).find('a').trigger('click')
    })
    it('The parent menu info bar should be exist', () => {
      expect(w.find('li.sm-sub-header').exists()).to.equal(true)
    })
    it('The parent menu info bar content should be "Sports news website"', () => {
      expect(w.find('li.sm-sub-header').find('.sm-sub-caption').text()).to.equal('Sports news website')
    })
    it('Have 3 item in current menu, the items should be "Fivb", "Fifa", "NBA"', () => {
      const items = w.findAll('ul.sm-regular li').filter((val, index) => index > 1)
      expect(items.length).to.equal(3)
      expect(items.at(0).text()).to.equal('Fivb')
      expect(items.at(1).text()).to.equal('Fifa')
      expect(items.at(2).text()).to.equal('NBA')
    })
    it('The "NBA" menu item should have child menu', () => {
      const nba = w.find('ul.sm-regular li.sm-parent')
      expect(nba.exists()).to.equal(true)
      expect(nba.findAll('span').at(0).text()).to.equal('NBA')
    })
    it('Click "NBA" item and menu going to next level menu', () => {
      w.find('ul.sm-regular li.sm-parent').trigger('click')
    })
    it('The parent menu info bar content should be "NBA"', () => {
      expect(w.find('li.sm-sub-header').find('.sm-sub-caption').text()).to.equal('NBA')
    })
    it('Click "Back" icon button, back to previous level menu', () => {
      w.find('li.sm-sub-header').find('span.sm-sub-back').trigger('click')
    })
    it('For now, the parent menu info bar content should be "Sports news website"', () => {
      expect(w.find('li.sm-sub-header').find('.sm-sub-caption').text()).to.equal('Sports news website')
    })
    it('Click "Back" icon button, back to root level menu', () => {
      w.find('li.sm-sub-header').find('span.sm-sub-back').trigger('click')
    })
    it('The parent menu info bar should not exist in root level', () => {
      expect(w.find('li.sm-sub-header').exists()).to.equal(false)
    })
  })

  describe('The regular menu with group type', () => {
    const w = mount(sm, {
      propsData: {
        data: regularGroup,
        type: REGULAR,
        activeGroup: 2,
        title: false
      }
    })
    it('The group tabs should be exist', () => {
      expect(w.find('.sm-tabs').exists()).to.equal(true)
    })
    it('The number of group tabs should be 4', () => {
      expect(w.findAll('.sm-tabs ul li').length).to.equal(4)
    })
    it('"activeGroup" option set to 2(index), the third group tab should be activated', () => {
      w.find('div.sm-caller-container').trigger('click')
      expect(w.findAll('.sm-tabs ul li').at(2).classes('active')).to.equal(true)
    })
    it('Switch to the fourth group tab, the number of menu item should be 2 and items content should be "Facebook" and "Twitter"', () => {
      w.findAll('.sm-tabs ul li').at(3).find('a').trigger('click')
      expect(w.findAll('ul.sm-regular li').length).to.equal(2)
      expect(w.findAll('ul.sm-regular li').at(0).text()).to.equal('Facebook')
      expect(w.findAll('ul.sm-regular li').at(1).text()).to.equal('Twitter')
    })
    it('"title" option set to false, the menu header bar should not exist', () => {
      expect(w.find('div.sm-header').exists()).to.equal(false)
    })
  })
})
