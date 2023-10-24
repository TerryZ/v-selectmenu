import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    data: { type: Object, default: undefined }
  },
  setup (props, { slots }) {
    function generatePrepend () {
      if (slots.prepend) {
        return (
          <div class="sm-regular-item-prepend">
            {slots.prepend()}
          </div>
        )
      }
    }

    return () => {
      return (
        <div class="sm-regular-item">
          { generatePrepend() }

          <div class="sm-regular-item-content">
            {slots.default && slots.default()}
          </div>

          { slots.append && slots.append() }
        </div>
      )
    }
  }
})
