import { defineComponent, inject, vShow, withDirectives, computed } from 'vue'

export default defineComponent({
  name: 'MenuGroup',
  props: {
    name: { type: String, default: '', required: true },
    title: { type: String, default: '', required: true }
  },
  setup (props, { slots }) {
    const activeGroup = inject('active-group')
    const switchGroup = inject('switch-group')

    const active = computed(() => activeGroup.value === props.name)

    function changeActiveGroup () {
      switchGroup(props.name)
    }

    return () => {
      return (
        <div class="sm-regular-group-item">
          <div onClick={changeActiveGroup}>{props.title}</div>
          {
            withDirectives(
              <div>{slots.default && slots.default()}</div>,
              [[vShow, active.value]]
            )
          }
        </div>
      )
    }
  }
})
