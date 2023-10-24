import { defineComponent } from 'vue'
import '../../styles/regular.sass'

export default defineComponent({
  setup (props, { slots }) {
    return () => {
      return (
        <div class="sm-regular-container">
          {slots.default && slots.default()}
        </div>
      )
    }
  }
})
