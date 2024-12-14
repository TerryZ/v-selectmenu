import '../styles/button.sass'

import { defineComponent, computed } from 'vue'

import { ROUNDED_PILL, ROUNDED_CIRCLE } from '../constants'
import { getButtonRoundedClass } from '../core/helper'

import IconLoading from '../icons/IconLoading.vue'

export default defineComponent({
  name: 'SelectMenuButton',
  props: {
    block: { type: Boolean, default: false },
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
        disabled: props.disabled || props.loading
      }
      return [
        'select-menu-btn', classProps,
        getSizeClass(),
        getButtonRoundedClass(props.rounded)
      ]
    })
    function handleClick (e) {
      if (props.disabled || props.loading) {
        // e.preventDefault()
        // e.stopPropagation()
        e.stopImmediatePropagation()
      }
    }

    function ButtonPrepend () {
      if (isCircle.value) return null
      if (!slots.prepend) {
        return props.loading
          ? <div class='select-menu-btn-prepend'><IconLoading /></div>
          : null
      }
      return (
        <div class='select-menu-btn-prepend'>{slots.prepend()}</div>
      )
    }
    function ButtonBody () {
      function BodyContent () {
        if (isCircle.value && props.loading) {
          return <IconLoading />
        }
        return slots?.default?.()
      }
      return (
        <div class='select-menu-btn-body'>
          <BodyContent />
        </div>
      )
    }
    function ButtonAppend () {
      if (!slots.append || isCircle.value) return null
      return (
        <div class='select-menu-btn-append'>{slots.append()}</div>
      )
    }

    return () => (
      <div
        class={classes.value}
        onClick={handleClick}
      >
        <ButtonPrepend />
        <ButtonBody />
        <ButtonAppend />
      </div>
    )
  }
})
