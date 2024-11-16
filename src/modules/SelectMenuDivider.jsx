import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SelectMenuDivider',
  props: {
    horizontal: { type: Boolean, default: true }
  },
  setup (props) {
    return () => {
      const direction = props.horizontal ? '' : '-vertical'
      const className = `sm-divider${direction}`
      return (
        <div class={className} />
      )
    }
  }
})
