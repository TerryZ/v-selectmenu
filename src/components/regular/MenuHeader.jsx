import { defineComponent } from 'vue'

export default defineComponent({
  setup (props, { slots }) {
    return () => {
      return (
        <div class="sm-regular-header">
          {slots.default && slots.default()}
        </div>
      )
    }
  }
})
