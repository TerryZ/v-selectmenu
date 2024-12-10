import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SelectMenuBlock',
  props: {
  },
  setup (props, { slots }) {
    function BlockPrepend () {
      if (!slots.prepend) return null
      return (
        <div class='select-menu-block-prepend'>{slots.prepend()}</div>
      )
    }
    function BlockAppend () {
      if (!slots.append) return null
      return (
        <div class='select-menu-block-append'>{slots.append()}</div>
      )
    }

    return () => (
      <div class="sm-block" >
        <BlockPrepend />
        <div class="sm-block-body">
          {slots?.default?.()}
        </div>
        <BlockAppend />
      </div>
    )
  }
})
