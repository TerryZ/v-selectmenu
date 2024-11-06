import { defineComponent, inject, computed } from 'vue'

export default defineComponent({
  props: {
    action: { type: String, default: '' },
    disabled: { type: Boolean, default: false }
  },
  setup (props, { slots }) {
    const menuItemClick = inject('item-click')

    function ItemPrepend () {
      if (!slots.prepend) return null
      return (
        <div class="sm-item-prepend">
          {slots.prepend()}
        </div>
      )
    }
    function ItemAppend () {
      if (!slots.append) return null
      return slots.append()
    }
    function menuClick () {
      if (props.disabled) return

      menuItemClick(props.action)
    }

    const classes = computed(() => (
      ['sm-item', { disabled: props.disabled }]
    ))

    return () => {
      return (
        <div class={classes.value} onClick={menuClick}>
          <ItemPrepend />

          <div class="sm-item-body">
            {slots?.default?.()}
          </div>

          <ItemAppend />
        </div>
      )
    }
  }
})
