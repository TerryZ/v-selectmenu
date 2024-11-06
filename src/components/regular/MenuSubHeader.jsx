import { defineComponent } from 'vue'

export default defineComponent({
  setup (props, { slots }) {
    return () => {
      return (
        <div class="sm-sub-header">
          {slots?.default?.()}
        </div>
      )
    }
  }
})
