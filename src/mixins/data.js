import { languages, REGULAR, ADVANCED } from '../constants'

export default {
  data () {
    return {
      // dropdown container display status
      show: false,
      i18n: languages[this.language] || languages.cn,
      // menu data or current group menu data
      results: [],
      tabIndex: -1,
      message: '',
      group: false,
      /**
       * advanced menu options
       */
      search: '',
      picked: [],
      highlight: -1
    }
  },
  computed: {
    btnText () {
      return this.picked.length
        ? this.picked.map(val => val[this.showField]).join(',')
        : this.i18n.advanced_default
    },
    /**
     * The text in the header bar
     *
     * @returns {string}
     *
     * @description
     * caption display rule
     *
     * close header bar
     *   set "title" prop to false
     *
     * Regular menu
     *   set some text for the "title" prop
     * Advanced menu
     *   no item selected: the "title" prop content
     *   one item selected: that item content(the data field specified by showField prop)
     *   multiple items selected: display selected items length
     */
    caption () {
      if (!this.title || typeof this.title !== 'string') return ''
      if (this.type === REGULAR) {
        return this.title
      }
      if (this.type === ADVANCED) {
        if (this.picked.length) {
          if (this.picked.length > 1) { // more than one item selected
            const template = this.i18n.items_selected
            return template.replace('selected_count', `<b>${this.picked.length}</b>`)
          } else {
            return this.getRowText(this.picked[0])
          }
        } else {
          return this.title
        }
      }
    }
  },
  watch: {
    tabIndex (val) {
      this.tabIndex = val
      this.switchGroup()
    },
    value () {
      this.init()
    },
    picked (val) {
      if (this.message && this.maxSelected && val.length < this.maxSelected) this.message = ''
      this.$emit('input', val.slice().map(value => value[this.keyField]).join(','))
      this.$emit('values', val.slice())
    },
    data (val) {
      if (Array.isArray(val) && val.length) this.populate()
    },
    message (val, oldVal) {
      if (val !== oldVal) this.adjust()
    }
  },
  provide () {
    return {
      i18n: this.i18n,
      keyField: this.keyField,
      showField: this.showField,
      inPicked: this.inPicked,
      getRowText: this.getRowText,
      close: this.close
    }
  }
}
