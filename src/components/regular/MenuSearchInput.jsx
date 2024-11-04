import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: { type: String, default: '' }
  },
  emits: ['update:modelValue', 'change'],
  setup (props, { slots }) {
    function handleInput (e) {
      props.emit('update:modelValue', props.modelValue)
      props.emit('change', props.modelValue)
    }
    return () => {
      return (
        <div class="">
          <input
            type="text"
            class="sm-regular-search-input"
            value={props.modelValue}
            onInput={handleInput}
          />
        </div>
      )
    }
  }
})
