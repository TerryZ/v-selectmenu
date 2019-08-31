/**
 * The data row in Advanced menu list
 */
export default {
  name: 'AdvancedMenuRow',
  props: {
    row: Object,
    hover: {
      type: Boolean,
      default: false
    }
  },
  inject: ['inPicked', 'getRowText'],
  render (h) {
    const child = []
    const selected = 'sm-iconfont sm-icon-selected'
    child.push(h('div', { class: 'sm-selected-icon' }, [h('i', { class: selected })]))

    const options = { class: 'sm-item-text' }
    const children = []
    if ('row' in this.$scopedSlots) {
      // build scoped slot with named slot
      children.push(this.$scopedSlots.row({
        row: this.row
      }))
    } else {
      options.domProps = {
        innerHTML: this.getRowText(this.row)
      }
    }
    child.push(h('div', options, children))

    return h('li', {
      class: {
        'sm-selected': this.inPicked(this.row),
        'sm-over': this.hover
      },
      on: {
        click: e => {
          e.stopPropagation()
          this.$emit('select')
        },
        mouseenter: () => this.$emit('highlight', true),
        mouseleave: () => this.$emit('highlight', false)
      }
    }, child)
  }
}
