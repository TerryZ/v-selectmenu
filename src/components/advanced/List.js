import row from './Row'
import { namedSlotWithScoped } from '../../helper'

/**
 * The menu list/current group menu list in Advanced menu
 */
export default {
  name: 'AdvancedMenu',
  components: {
    'menu-row': row
  },
  props: {
    list: Array,
    picked: Array,
    scroll: Boolean,
    value: Number
  },
  inject: ['i18n'],
  render (h) {
    const child = []
    if (this.list.length) {
      child.push(...this.list.map((val, index) => {
        const options = {
          key: index,
          props: {
            row: val,
            hover: index === this.value
          },
          on: {
            select: () => this.$emit('select', val),
            highlight: enter => this.highlight(index, enter)
          }
        }
        // scoped slot with named slot
        namedSlotWithScoped(this, options, 'row')
        return h('menu-row', options)
      }))
    } else {
      child.push(this.getMessage(h, this.i18n.not_found))
    }
    return h('div', { class: this.classes, ref: 'list' }, [
      h('ul', { class: 'sm-results' }, child)
    ])
  },
  computed: {
    classes () {
      return {
        'sm-result-area': true,
        'sm-scroll-limit': this.scroll
      }
    }
  },
  methods: {
    highlight (index, enter) {
      this.$emit('input', enter ? index : -1)
    },
    getMessage (h, msg) {
      return h('li', { class: 'sm-message-box' }, [
        h('i', { class: 'sm-iconfont sm-icon-warn' }),
        h('span', {
          domProps: {
            innerHTML: msg
          }
        })
      ])
    },
    /**
     * reset list scroll top and highlight
     */
    reset () {
      this.$refs.list.scrollTop = 0
      this.$emit('input', -1)
    },
    /**
     * keyboard navigate to next line
     */
    next () {
      const before = this.value
      if (this.value < this.list.length - 1) this.$emit('input', this.value + 1)
      if (!this.scroll) return

      this.$nextTick(() => {
        if (this.value === before) return
        const list = this.$refs.list
        const cur = list.querySelector('.sm-over').getBoundingClientRect()
        const listPos = list.getBoundingClientRect()
        const dist = (list.scrollTop + cur.bottom) - listPos.bottom
        if (dist > 0) {
          // when current row is the last row, the scroll bar moves directly to the bottom
          if (this.value === this.list.length - 1) {
            list.scrollTop = dist + Number.parseInt(window.getComputedStyle(list).paddingBottom)
          } else {
            list.scrollTop = dist
          }
        }
      })
    },
    /**
     * keyboard navigate to previous line
     */
    prev () {
      const before = this.value
      if (this.value > 0) this.$emit('input', this.value - 1)
      if (!this.scroll) return

      this.$nextTick(() => {
        if (this.value === before) return
        const list = this.$refs.list
        const cur = list.querySelector('.sm-over').getBoundingClientRect()
        const listPos = list.getBoundingClientRect()
        const dist = cur.top - listPos.top
        if (dist < 0) {
          list.scrollTop = this.value === 0 ? 0 : list.scrollTop + dist
        }
      })
    }
  }
}
