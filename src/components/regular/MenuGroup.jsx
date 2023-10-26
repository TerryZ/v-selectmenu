import { defineComponent } from 'vue'

export default defineComponent({
  setup (props, { slots }) {
    return () => {
      return (
        <div class="sm-regular-group">
          {slots.default && slots.default()}
        </div>
      )
    }
  }
})
