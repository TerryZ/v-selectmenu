import '../../styles/animated.styl'
import mItem from './Item'
import { DIVIDER, MENU_ROOT } from '../../constants'
import { flat, namedSlotWithScoped } from '../../helper'

export default {
  name: 'v-regular-menu',
  components: {
    'menu-item': mItem
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    show: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      menus: [],
      current: -1,
      fadeInLeft: false,
      fadeInRight: false
    }
  },
  watch: {
    show (val) {
      if (!val && this.menus.length > 1) this.reset()
    },
    data () {
      this.analysis()
    }
  },
  render (h) {
    if (this.menus.length && this.current >= 0) {
      const menu = this.menus[this.current]
      const child = []
      // menu header (display by multiple level menu and switch to children menu)
      if (menu.key !== MENU_ROOT) {
        const captionChild = []
        const captionOptions = { class: 'sm-sub-caption' }
        // support named slot
        if ('row' in this.$scopedSlots) {
          captionChild.push(this.$scopedSlots.row({
            row: menu.parent
          }))
        } else {
          captionOptions.domProps = { innerHTML: menu.parent.content }
        }
        const header = h('li', { class: 'sm-sub-header' }, [
          h('span', {
            class: 'sm-sub-back',
            on: {
              click: () => this.switch(menu.parentKey, false)
            }
          }, [
            h('i', { class: 'sm-iconfont sm-icon-back' })
          ]),
          h('span', captionOptions, captionChild)
        ])
        /**
         * build children menu header bar
         */
        child.push(header)
        child.push(h('li', { class: DIVIDER }))
      }
      // menu items
      child.push(...menu.data.map((val, index) => {
        const options = {
          props: {
            data: val
          }
        }
        // switch to children menu
        if (val.children) {
          options.nativeOn = {
            click: e => {
              e.preventDefault()
              this.switch(val.children)
            }
          }
        }
        // scoped slot with named slot
        namedSlotWithScoped(this, options, 'row')
        return h('menu-item', options)
      }))
      /**
       * build children menus
       */
      return h('div', { class: 'sm-result-area' }, [
        h('ul', {
          class: {
            'sm-results sm-regular vivify': true,
            fadeInLeft: this.fadeInLeft,
            fadeInRight: this.fadeInRight
          }
        }, child)
      ])
    }
  },
  methods: {
    analysis () {
      this.menus = flat(this.data)
      this.reset()
    },
    reset () {
      this.current = this.find(MENU_ROOT)
      this.resetAnimated()
    },
    resetAnimated () {
      this.fadeInLeft = false
      this.fadeInRight = false
    },
    /**
     * switch current menu in multiple level menu mode
     *
     * @param {string} key - target menu key
     * @param {boolean} [forward=true]
     */
    switch (key, forward = true) {
      this.current = this.find(key)
      this[forward ? 'fadeInRight' : 'fadeInLeft'] = true
      window.setTimeout(() => {
        this.resetAnimated()
      }, 100)
    },
    find (key) {
      return this.menus.findIndex(val => val.key === key)
    }
  },
  beforeMount () {
    this.analysis()
  }
}
