import { defineComponent, ref } from 'vue'

import { useDebounce } from '@/helper'

import IconSearch from '@/icons/IconSearch.vue'
import IconCloseCircle from '@/icons/IconCloseCircle.vue'

export default defineComponent({
  props: {
    modelValue: { type: String, default: '' }
  },
  emits: ['update:modelValue', 'search'],
  setup (props, { emit }) {
    const input = ref('')
    const inputDebounce = useDebounce()

    function responseInput (value) {
      emit('update:modelValue', value)
      emit('search', value)
    }
    function handleInput (e) {
      inputDebounce(() => {
        input.value = e.target.value.trim()
        responseInput(input.value)
      })
    }
    function clearInput () {
      if (!input.value) return
      input.value = ''
      responseInput('')
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
            />
          </div>
          <SearchAppend />
        </div>
      )
    }
  }
})
