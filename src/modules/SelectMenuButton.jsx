import '../styles/button.sass'

import { defineComponent, ref, watch, computed } from 'vue'

import { ROUNDED_PILL } from '../constants'
import { getInputRoundedClass } from '../core/helper'

export default defineComponent({
  name: 'SelectMenuButton',
  props: {
    block: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    rounded: { type: String, default: ROUNDED_PILL },
    size: { type: String, default: 'md' }
  },
  setup (props, { emit, slots }) {
    const classes = computed(() => {
      const classProps = {
        block: props.block,
        disabled: props.disabled
      }
      return ['select-menu-btn', getInputRoundedClass(props.rounded), classProps]
    })
    return () => (
      <div class={classes.value}>
        button
      </div>
    )
  }
})
