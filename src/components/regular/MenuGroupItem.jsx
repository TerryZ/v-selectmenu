import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'MenuGroup',
  props: {
    name: { type: String, default: '', required: true },
    title: { type: String, default: '', required: true }
  },
  setup (props, { slots }) {
    const switchGroup = inject('switch-group')

    function changeActiveGroup () {
      switchGroup(props.name, slots.default)
    }

    return () => {
      return (
        <div class="sm-regular-group-item">
          <div onClick={changeActiveGroup}>{props.title}</div>
          {/* {
            withDirectives(
              <div>{slots.default && slots.default()}</div>,
              [[vShow, active.value]]
            )
          } */}
        </div>
      )
    }
  }
})
