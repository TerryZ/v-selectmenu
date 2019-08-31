import { REGULAR, ADVANCED } from '../constants'
const UP = 38
const DOWN = 40
const ESC = 27
const TAB = 9
const ENTER = 13

export default {
  methods: {
    showChange (val) {
      this.show = val
      if (val) {
        // swith to target group
        if (this.activeGroup > -1 && this.group && this.data.length) {
          this.tabIndex = this.activeGroup
        }
        this.$emit('show')
        if (this.type === ADVANCED) this.inputFocus()
      } else {
        this.reset()
        this.$emit('hide')
      }
    },
    selectAll () {
      if (this.results.length && !this.message) {
        if (this.maxSelected) {
          const left = this.maxSelected - this.picked.length
          const available = this.results
            .filter(val => !this.picked.includes(val))
            .filter((val, idx) => idx < left)
          this.picked = [...this.picked, ...available]
        } else {
          this.picked = this.results
        }
      }
    },
    processKey () {
      this.results = this.filter()
    },
    processControl (e) {
      if (this.show && [UP, DOWN, ESC, ENTER, TAB].includes(e.keyCode)) {
        switch (e.keyCode) {
          case UP:// up
            this.$refs.list.prev()
            break
          case DOWN:// down
            this.$refs.list.next()
            break
          case TAB: // tab
          case ENTER:// return
            if (this.highlight !== -1) this.selectItem(this.results[this.highlight])
            break
          case ESC:// escape
            this.close()
            break
        }
      }
    },
    selectItem (item) {
      if (this.multiple) {
        const idx = this.inPickedIndex(item)
        if (idx === -1) {
          if (this.maxSelected && this.picked.length === this.maxSelected) {
            if (!this.message) {
              this.notice()
              // auto clear message in 3 seconds
              setTimeout(() => {
                this.notice(true)
              }, 3000)
            }
          } else {
            this.picked.push(item)
          }
        } else {
          // remove item when it has been selected
          this.picked.splice(idx, 1)
        }
      } else { // single selection
        this.picked = this.inPicked(item) ? [] : [item]
        this.close()
      }
    },
    filter () {
      const list = this.group ? this.data[this.tabIndex].list.slice() : this.data.slice()
      return list.filter(val => new RegExp(this.search.toLowerCase()).test(this.getRowText(val).toLowerCase()))
    },
    switchGroup () {
      this.results = this.type === REGULAR
        ? this.data[this.tabIndex].list
        : this.search
          ? this.filter()
          : this.data[this.tabIndex].list
    },
    /**
     * check if it is a group type
     */
    checkDataType () {
      if (this.data && Array.isArray(this.data) && this.data.length) {
        this.group = this.data.every(val => 'title' in val && 'list' in val)
      }
    },
    getRowText (row) {
      switch (typeof this.showField) {
        case 'string': return row[this.showField]
        case 'function': return this.showField(row)
      }
    },
    notice (clear = false) {
      if (clear) {
        this.message = ''
      } else {
        const maximum = this.i18n.max_selected
        this.message = maximum.replace('max_selected_limit', `<b>${this.maxSelected}</b>`)
      }
    },
    init () {
      if (!this.value || this.type !== ADVANCED) return
      let vals = this.value.split(',')
      if (!this.multiple) vals = [vals[0]]
      if (this.group) {
        const arr = []
        this.data.forEach(value => {
          arr.push(...value.list.filter(val => {
            return vals.includes(String(val[this.keyField]))
          }))
        })
        this.picked = arr
      } else {
        this.picked = this.data.filter(val => vals.includes(String(val[this.keyField])))
      }
    },
    populate () {
      this.checkDataType()

      if (this.data.length) {
        if (this.group) {
          this.tabIndex = 0
        } else {
          this.results = this.data.slice()
        }
      }

      this.init()
    }
  }
}
