import { defineComponent } from 'vue'

export default defineComponent({
  setup (props, { slots }) {
    return (
      <div class="sm-regular-container">
        {slots.default && slots.default()}
      </div>
    )
  }
})
