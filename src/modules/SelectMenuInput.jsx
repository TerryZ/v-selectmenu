import '../styles/input.sass'

import { defineComponent, ref, watch, computed } from 'vue'

import { useDebounce, getInputRoundedClass } from '../core/helper'
import { ROUNDED_PILL } from '../constants'

import IconCloseCircle from '../icons/IconCloseCircle.vue'
import IconLoading from '../icons/IconLoading.vue'

export default defineComponent({
  name: 'SelectMenuInput',
  props: {
    modelValue: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    border: { type: Boolean, default: false },
    rounded: { type: String, default: ROUNDED_PILL },
    placeholder: { type: String, default: '' },
    /** debounce delay when typing, in milliseconds */
    debounce: { type: Number, default: 300 },
    loading: { type: Boolean, default: false }
  },
  emits: ['update:modelValue', 'change'],
  setup (props, { emit, slots }) {
    const input = ref(props.modelValue || '')
    const inputDebounce = useDebounce(props.debounce)

    const isDisabled = computed(() => props.disabled || props.loading)
    const classes = computed(() => {
      return [
        'sm-input', getInputRoundedClass(props.rounded),
        {
          disabled: isDisabled.value,
          'sm-input--border': props.border
        }
      ]
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
      if (isDisabled.value) return
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
      if (!slots.prepend) {
        return props.loading
          ? <div class='sm-input__prepend'><IconLoading /></div>
          : null
      }
      return <div class='sm-input__prepend'>{slots.prepend()}</div>
    }
    function InputAppend () {
      if (!slots.append) return null
      return <div class='sm-input__append'>{slots.append()}</div>
    }
    function InputClear () {
      const classes = ['sm-input__clear', { active: input.value }]
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
        <div class="sm-input__body">
          <input
            type="text"
            autocomplete='off'
            value={input.value}
            placeholder={props.placeholder}
            disabled={isDisabled.value}
            onInput={onInput}
            onKeydown={onKeyDown}
            onCompositionstart={onCompositionStart}
            onCompositionend={onCompositionEnd}
          />
          <InputClear />
        </div>
        <InputAppend />
      </div>
    )
  }
})
