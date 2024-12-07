import '../styles/button.sass'

import { defineComponent, ref, watch, computed } from 'vue'

import { ROUNDED_PILL } from '../constants'
import { getButtonRoundedClass } from '../core/helper'

export default defineComponent({
  name: 'SelectMenuButton',
  props: {
    block: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    rounded: { type: String, default: ROUNDED_PILL },
    size: { type: String, default: '' }
  },
  setup (props, { emit, slots }) {
    function getSizeClass () {
      if (!['small', 'mini'].includes(props.size)) return ''
      return `select-menu--btn-${props.size}`
    }
    const classes = computed(() => {
      const classProps = {
        block: props.block,
        disabled: props.disabled
      }
      return [
        'select-menu-btn', classProps,
        getSizeClass(),
        getButtonRoundedClass(props.rounded)
      ]
    })
    return () => (
      <div class={classes.value}>
        {slots?.default?.()}
      </div>
    )
  }
})
