import { DIVIDER } from '../../constants'

/**
 * The menu item in Regular menu
 */
export default {
  name: 'v-menu-item',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  inject: ['close'],
  render (h) {
    if (this.data && Object.keys(this.data).length) {
      if (this.data.content === DIVIDER) {
        return h('li', { class: this.classes })
      } else {
        const item = []

        if ('row' in this.$scopedSlots) {
          // build scoped slot with named slot
          item.push(h('span', [
            this.$scopedSlots.row({
              row: this.data
            })
          ]))
        } else {
          item.push(h('span', { domProps: { innerHTML: this.data.content } }))
        }

        /**
         * sub menu icon
         */
        if (this.data.children) {
          item.push(h('span', { class: 'sm-caret sm-caret-right' }))
        }

        const linkOption = {
          attrs: {
            href: 'javascript:void(0);',
            target: this.data.open ? '_blank' : '_self'
          }
        }
        if (!this.data.disabled) {
          if (this.data.url) {
            linkOption.attrs.href = this.data.url
          } else {
            linkOption.on = {
              click: e => this.click(e)
            }
          }
        }

        return h('li', { class: this.classes }, [h('a', linkOption, item)])
      }
    }
  },
  computed: {
    classes () {
      return {
        'sm-divider': this.data.content === DIVIDER,
        'sm-caption': this.data.header,
        'sm-disabled': this.data.disabled,
        'sm-parent': this.data.children
      }
    }
  },
  methods: {
    click () {
      if (this.data && this.data.callback && typeof this.data.callback === 'function') {
        this.close()
        this.data.callback()
      }
    }
  }
}
