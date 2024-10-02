import { defineComponent } from 'vue'

export default defineComponent({
  setup (props, { slots }) {
    return () => {
      return (
        <div class="sm-regular-item-header">
          {slots?.default?.()}
        </div>
      )
    }
  }
})
