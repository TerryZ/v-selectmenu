import { defineComponent } from 'vue'

export default defineComponent({
  setup (props, { slots }) {
    return () => {
      return (
        <div class="sm-regular-row">
          {slots?.default?.()}
        </div>
      )
    }
  }
})
