import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    data: { type: Object, default: undefined }
  },
  setup (props, { slots }) {
    return (
      <div class="sm-regular-item">
        { slots.prepend && slots.prepend() }

        <div class="sm-regular-item-content">
          {slots.default && slots.default()}
        </div>

        { slots.append && slots.append() }
      </div>
    )
  }
})
