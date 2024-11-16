import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SelectMenuColumn',
  setup (props, { slots }) {
    return () => {
      return (
        <div class="sm-column">
          {slots?.default?.()}
        </div>
      )
    }
  }
})
