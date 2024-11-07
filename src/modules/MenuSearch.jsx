import { defineComponent, ref } from 'vue'

import { useDebounce } from '@/helper'

import IconSearch from '@/icons/IconSearch.vue'
import IconCloseCircle from '@/icons/IconCloseCircle.vue'

export default defineComponent({
  name: 'MenuSearch',
  emits: ['search'],
  setup (props, { emit }) {
    const input = ref('')
    const IMETyping = ref(false)
    const inputDebounce = useDebounce()

    function responseInput (value) {
      emit('search', value)
    }
    function setInputValue (value) {
      if (value === input.value) return
      input.value = value
      responseInput(input.value)
    }
    function clearInput () {
      if (!input.value) return
      setInputValue('')
    }
    function handleInput (e) {
      if (IMETyping.value) return
      inputDebounce(() => setInputValue(e.target.value.trim()))
    }
    function handleKeyDown (e) {
      if (IMETyping.value) return
      if (e.key === 'Escape') {
        clearInput()
      }
    }
    function handleCompositionStart () {
      IMETyping.value = true
    }
    function handleCompositionEnd (e) {
      IMETyping.value = false
      setInputValue(e.target.value.trim())
    }

    function SearchPrepend () {
      return (
        <div class='sm-search-prepend'>
          <IconSearch />
        </div>
      )
    }
    function SearchAppend () {
      const classes = ['sm-search-append', { disabled: !input.value }]
      return (
        <div
          class={classes}
          onClick={clearInput}
        >
          <IconCloseCircle />
        </div>
      )
    }

    return () => {
      return (
        <div class="sm-search">
          <SearchPrepend />
          <div class="sm-search-input">
            <input
              type="text"
              value={input.value}
              onInput={handleInput}
              onKeydown={handleKeyDown}
              onCompositionstart={handleCompositionStart}
              onCompositionend={handleCompositionEnd}
            />
          </div>
          <SearchAppend />
        </div>
      )
    }
  }
})
