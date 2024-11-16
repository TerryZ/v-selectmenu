import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SelectMenuRow',
  setup (props, { slots }) {
    return () => {
      return (
        <div class="sm-row">
          {slots?.default?.()}
        </div>
      )
    }
  }
})
