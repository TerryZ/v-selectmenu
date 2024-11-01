import { defineComponent, inject, computed } from 'vue'

import { injectMenuGroup } from '../../constants'

export default defineComponent({
  name: 'MenuGroup',
  props: {
    name: { type: String, default: '', required: true },
    title: { type: String, default: '', required: true }
  },
  setup (props, { slots }) {
    const { active, switchGroup } = inject(injectMenuGroup)

    const classes = computed(() => ({
      'sm-regular-group-item': true,
      active: props.name === active.value
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
