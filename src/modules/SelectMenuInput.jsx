import '../styles/input.sass'

import { defineComponent, ref, watch, computed } from 'vue'

import { useDebounce, getInputRoundedClass } from '../core/helper'
import { ROUNDED_PILL } from '../constants'

import IconSearch from '../icons/IconSearch.vue'
import IconCloseCircle from '../icons/IconCloseCircle.vue'

export default defineComponent({
  name: 'SelectMenuInput',
  props: {
    modelValue: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    rounded: { type: String, default: ROUNDED_PILL },
    placeholder: { type: String, default: '' },
    /** debounce delay when typing, in milliseconds */
    debounce: { type: Number, default: 300 }
  },
  emits: ['update:modelValue', 'change'],
  setup (props, { emit, slots }) {
    const input = ref(props.modelValue || '')
    const inputDebounce = useDebounce(props.debounce)
    const roundedClass = getInputRoundedClass(props.rounded)

    const classes = computed(() => {
      return ['select-menu-input', roundedClass, {
        disabled: props.disabled
      }]
    })

    watch(() => props.modelValue, setInputValue)

    const responseInput = value => {
      emit('change', value)
      emit('update:modelValue', value)
    }
    function setInputValue (value) {
      if (value === input.value) return
      input.value = value
      responseInput(input.value)
    }
    function clearInput () {
      if (props.disabled) return
      if (!input.value) return
      setInputValue('')
    }
    function onInput (e) {
      if (e.target.composing) return
      inputDebounce(() => setInputValue(e.target.value.trim()))
    }
    function onKeyDown (e) {
      if (e.target.composing) return
      if (e.key === 'Escape') {
        clearInput()
      }
    }
    function onCompositionStart (e) {
      e.target.composing = true
    }
    function onCompositionEnd (e) {
      if (!e.target.composing) return
      e.target.composing = false
      e.target.dispatchEvent(new Event('input'))
    }

    function InputPrepend () {
      return (
        <div class='select-menu-input-prepend'>
          {slots.prepend ? slots.prepend() : <IconSearch />}
        </div>
      )
    }
    function InputAppend () {
      if (!slots.append) return
      return (
        <div class='select-menu-input-append'>{slots.append()}</div>
      )
    }
    function InputClear () {
      const classes = ['select-menu-input-clear', { active: input.value }]
      return (
        <div
          class={classes}
          onClick={clearInput}
        >
          <IconCloseCircle />
        </div>
      )
    }

    return () => (
      <div class={classes.value}>
        <InputPrepend />
        <div class="select-menu-input-body">
          <div>
            <input
              type="text"
              autocomplete='off'
              value={input.value}
              placeholder={props.placeholder}
              disabled={props.disabled}
              onInput={onInput}
              onKeydown={onKeyDown}
              onCompositionstart={onCompositionStart}
              onCompositionend={onCompositionEnd}
            />
          </div>
          <InputClear />
        </div>
        <InputAppend />
      </div>
    )
  }
})
