import { defineComponent, ref } from 'vue'

import { useDebounce } from '@/helper'

import IconSearch from '@/icons/IconSearch.vue'
import IconCloseCircle from '@/icons/IconCloseCircle.vue'

export default defineComponent({
  name: 'MenuSearch',
  emits: ['search'],
  setup (props, { emit }) {
    const input = ref('')
    const inputEl = ref(null)
    const inputDebounce = useDebounce()

    const setInputFocus = () => inputEl.value.focus()
    const responseInput = value => emit('search', value)
    function setInputValue (value) {
      if (value === input.value) return
      input.value = value
      responseInput(input.value)
    }
    function clearInput () {
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

    function SearchPrepend () {
      return (
        <div
          class='sm-search-prepend'
          onClick={setInputFocus}
        >
          <IconSearch />
        </div>
      )
    }
    function SearchAppend () {
      const classes = ['sm-search-append', { active: input.value }]
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
      <div class="sm-search">
        <SearchPrepend />
        <div class="sm-search-input">
          <input
            type="text"
            ref={inputEl}
            value={input.value}
            onInput={onInput}
            onKeydown={onKeyDown}
            onCompositionstart={onCompositionStart}
            onCompositionend={onCompositionEnd}
          />
        </div>
        <SearchAppend />
      </div>
    )
  }
})
