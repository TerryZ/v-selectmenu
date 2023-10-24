import { defineComponent, inject } from 'vue'

export default defineComponent({
  props: {
    action: { type: String, default: '' }
  },
  setup (props, { slots }) {
    const menuItemClick = inject('item-click')

    function generatePrepend () {
      if (slots.prepend) {
        return (
          <div class="sm-regular-item-prepend">
            {slots.prepend()}
          </div>
        )
      }
    }
    function menuClick () {
      menuItemClick(props.action)
    }

    return () => {
      return (
        <div class="sm-regular-item" onClick={menuClick}>
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
