import { defineComponent } from 'vue'

export default defineComponent({
  setup (props, { slots }) {
    return () => (
      <div class="sm-regular-section">
        {slots?.default?.()}
      </div>
    )
  }
})
