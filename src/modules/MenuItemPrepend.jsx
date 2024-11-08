import { defineComponent, inject } from 'vue'

// import { injectMenuItem } from '../constants'

export default defineComponent({
  name: 'MenuItemPrepend',
  setup (props, { slots }) {
    // const { slots } = inject(injectMenuItem)

    return () => {
      // console.log(slots)
      if (!slots.default) return null
      return (
        <div class="sm-item-prepend">
          {slots.default()}
        </div>
      )
    }
  }
})
