import selectMenu from './SelectMenu'

const Plugin = {
  install (Vue, options = {}) {
    const props = selectMenu.mixins[0].props
    if (Object.keys(options).length) {
      if (typeof options.title !== 'undefined') props.title.default = options.title
      if (typeof options.language === 'string') props.language.default = options.language
      if (typeof options.query === 'boolean') props.query.default = options.query
      if (typeof options.scroll === 'boolean') props.scroll.default = options.scroll
    }
    Vue.component(selectMenu.name, selectMenu)
  }
}

export { selectMenu as SelectMenu }
export default Plugin
