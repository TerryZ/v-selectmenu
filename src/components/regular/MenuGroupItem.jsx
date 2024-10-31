import { defineComponent, inject, computed } from 'vue'

export default defineComponent({
  name: 'MenuGroup',
  props: {
    name: { type: String, default: '', required: true },
    title: { type: String, default: '', required: true }
  },
  setup (props, { slots }) {
    const switchGroup = inject('switch-group')
    const activeGroup = inject('active-group')

    const classes = computed(() => ({
      'sm-regular-group-item': true,
      active: props.name === activeGroup.value
    }))

    function changeActiveGroup () {
      switchGroup(props.name)
    }

    // withDirectives(
    //   <div>{slots.default && slots.default()}</div>,
    //   [[vShow, active.value]]
    // )

    return () => {
      return (
        <div class={classes.value} onClick={changeActiveGroup}>
          {props.title}
        </div>
      )
    }
  }
})
