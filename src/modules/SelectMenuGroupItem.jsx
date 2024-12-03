import { defineComponent, inject, computed } from 'vue'

import { injectMenuGroup } from '../constants'

export default defineComponent({
  name: 'SelectMenuGroupItem',
  props: {
    name: { type: String, default: '', required: true },
    title: { type: String, default: '', required: true }
  },
  setup (props, { slots }) {
    const { active, addTab } = inject(injectMenuGroup)

    const isActive = computed(() => props.name === active.value)

    function GroupItemBody () {
      // if (!isActive.value) return null
      return (
        <div
          class="sm-group-content"
          v-show={isActive.value}
        >
          {slots?.default?.()}
        </div>
      )
    }

    addTab(props.name, props.title)

    return () => <GroupItemBody />
  }
})
