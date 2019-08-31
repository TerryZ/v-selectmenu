import { REGULAR, ADVANCED } from '../constants'
import { namedSlotWithScoped } from '../helper'

export default {
  render (h) {
    return h('dropdown', {
      props: {
        'right-click': this.rightClick,
        'full-width': this.fullWidth,
        width: this.width,
        disabled: this.disabled,
        border: false,
        embed: this.embed,
        align: this.align
      },
      on: {
        show: this.showChange
      },
      ref: 'drop'
    }, [
      this.buildCaller(h),
      this.buildContainer(h)
    ])
  },
  methods: {
    buildCaller (h) {
      if (!this.embed) {
        let child = null
        if ('default' in this.$scopedSlots) {
          child = this.$scopedSlots.default({
            show: this.show,
            disabled: this.disabled
          })
        } else {
          child = [h('button', {
            attrs: { type: 'button' },
            class: {
              'sm-default-btn': true,
              'sm-default-btn--disabled': this.disabled,
              'sm-opened': this.show
            }
          }, [
            h('span', this.btnText),
            h('span', { class: 'sm-caret sm-caret-down' })
          ])]
        }
        return h('template', { slot: 'caller' }, [
          h('div', {
            class: {
              'sm-caller-container': true,
              'sm-caller-container--full-width': this.fullWidth
            }
          }, child)
        ])
      }
    },
    buildContainer (h) {
      return h('div', {
        class: {
          'v-selectmenu': true,
          'sm-advanced': this.type === ADVANCED
        }
      }, [
        this.buildHeader(h),
        this.buildSearch(h),
        this.buildMessage(h),
        this.buildTab(h),
        this.buildContent(h)
      ])
    },
    buildHeader (h) {
      if (!this.title) return

      const header = []
      const genBtn = (title, btnClass, iconClass, event) => {
        return h('span', {
          attrs: {
            title: title
          },
          class: btnClass,
          on: { click: () => { event() } }
        }, [
          h('i', { class: `sm-iconfont ${iconClass}` })
        ])
      }

      if (this.type === ADVANCED) {
        if (this.multiple) {
          header.push(genBtn(this.i18n.select_all_btn, 'sm-selectall-button', 'sm-icon-select-all', () => this.selectAll()))
        }
        header.push(genBtn(this.i18n.remove_all_btn, 'sm-removeall-button', 'sm-icon-remove-all', () => this.clear()))
      }

      if (!this.embed) {
        header.push(genBtn(this.i18n.close_btn, 'sm-close-button', 'sm-icon-close', () => this.close()))
      }

      return h('div', { class: 'sm-header' }, [
        h('h3', { domProps: {
          innerHTML: this.caption
        } }),
        h('div', { class: 'sm-control' }, header)
      ])
    },
    buildSearch (h) {
      if (this.type === ADVANCED && this.query) {
        return h('div', {
          class: {
            'sm-search': true,
            'sm-search--no-header': !this.title
          }
        }, [
          h('input', {
            attrs: {
              type: 'text',
              autocomplete: 'off',
              value: this.search.trim()
            },
            on: {
              keyup: e => this.processKey(e),
              keydown: e => {
                e.stopPropagation()
                this.processControl(e)
              },
              input: e => {
                this.search = e.target.value
              }
            },
            ref: 'search'
          })
        ])
      }
    },
    buildMessage (h) {
      if (this.message) {
        return h('div', { class: 'sm-message' }, [
          h('i', { class: 'sm-iconfont sm-icon-warn' }),
          h('span', {
            domProps: {
              innerHTML: this.message
            }
          })
        ])
      }
    },
    buildTab (h) {
      if (this.group && this.data.length) {
        return h('div', {
          class: {
            'sm-tabs': true,
            'sm-tabs--regular': this.type === REGULAR
          }
        }, [
          h('ul', this.data.map((val, index) => {
            return h('li', {
              key: index,
              class: {
                active: index === this.tabIndex
              }
            }, [
              h('a', {
                attrs: {
                  href: 'javascript:void(0);'
                },
                on: {
                  click: () => {
                    this.tabIndex = index
                    if (this.type === ADVANCED) this.$refs.list.reset()
                  }
                }
              }, val.title)
            ])
          }))
        ])
      }
    },
    buildContent (h) {
      let options = null
      if (this.type === REGULAR) {
        options = {
          props: {
            data: this.results,
            show: this.show
          },
          on: {
            close: () => this.close()
          }
        }
      } else {
        options = {
          props: {
            list: this.results,
            scroll: this.scroll,
            message: this.message,
            picked: this.picked,
            value: this.highlight
          },
          on: {
            select: this.selectItem,
            input: val => {
              this.highlight = val
            }
          },
          ref: 'list'
        }
      }
      // scoped slot with named slot
      namedSlotWithScoped(this, options, 'row')
      return h(this.type === REGULAR ? 'regular' : 'advanced', options)
    }
  }
}
