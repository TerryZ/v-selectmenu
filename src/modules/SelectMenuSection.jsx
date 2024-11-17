import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SelectMenuSection',
  setup (props, { slots }) {
    return () => <div class="sm-section">{slots?.default?.()}</div>
  }
})
