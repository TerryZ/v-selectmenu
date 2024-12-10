import '../styles/button.sass'

import { defineComponent, computed } from 'vue'

import { ROUNDED_PILL, ROUNDED_CIRCLE } from '../constants'
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
    const isCircle = computed(() => props.rounded === ROUNDED_CIRCLE)

    function getSizeClass () {
      if (!['small', 'mini'].includes(props.size)) return ''
      return `select-menu--btn-${props.size}`
    }
    const classes = computed(() => {
      const classProps = {
        block: props.block && !isCircle.value,
        disabled: props.disabled
      }
      return [
        'select-menu-btn', classProps,
        getSizeClass(),
        getButtonRoundedClass(props.rounded)
      ]
    })

    function ButtonPrepend () {
      if (!slots.prepend) return null
      if (isCircle.value) return null
      return (
        <div class='select-menu-btn-prepend'>{slots.prepend()}</div>
      )
    }
    function ButtonAppend () {
      if (!slots.append) return null
      if (isCircle.value) return null
      return (
        <div class='select-menu-btn-append'>{slots.append()}</div>
      )
    }

    return () => (
      <div class={classes.value}>
        <ButtonPrepend />
        <div class='select-menu-btn-body'>
          {slots?.default?.()}
        </div>
        <ButtonAppend />
      </div>
    )
  }
})
