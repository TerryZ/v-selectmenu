import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    horizontal: { type: Boolean, default: true }
  },
  setup (props) {
    return () => {
      const direction = props.horizontal ? '' : '-vertical'
      const className = `sm-regular-divider${direction}`
      return (
        <div class={className} />
      )
    }
  }
})
