import { defineComponent, inject, computed } from 'vue'

export default defineComponent({
  props: {
    action: { type: String, default: '' },
    disabled: { type: Boolean, default: false }
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
      if (props.disabled) return

      menuItemClick(props.action)
    }

    const classes = computed(() => {
      const result = ['sm-regular-item']
      if (props.disabled) {
        result.push('disabled')
      }
      return result
    })

    return () => {
      return (
        <div class={classes.value} onClick={menuClick}>
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
