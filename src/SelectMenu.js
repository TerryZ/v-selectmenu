import './styles/selectmenu.styl'

import render from './mixins/render'
import data from './mixins/data'
import props from './mixins/props'
import methods from './mixins/methods'
import util from './mixins/util'

export default {
  name: 'v-selectmenu',
  components: {
    regular: () => import('./components/regular/Menu'),
    advanced: () => import('./components/advanced/List'),
    dropdown: () => import('v-dropdown')
  },
  mixins: [props, data, render, methods, util],
  mounted () {
    this.populate()
  }
}
