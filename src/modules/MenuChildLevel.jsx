import { defineComponent, ref, inject } from 'vue'

import { injectMenu } from '../constants'

import IconChevronRight from '../icons/IconChevronRight.vue'

export default defineComponent({
  name: 'MenuChildLevel',
  setup (props, { slots }) {
    const { addChildLevel } = inject(injectMenu)
    const root = ref(null)

    function openChildMenus () {
      const body = root.value.querySelector('.sm-child-level-trigger .sm-item-body')
      const title = body.innerText.trim()

      if (!title) return

      addChildLevel({
        title,
        render: slots?.default
      })
    }

    function LevelTrigger () {
      if (!slots.trigger) return null
      return (
        <div
          class="sm-child-level-trigger"
          onClick={openChildMenus}
        >
          {slots?.trigger?.()}
          <IconChevronRight />
        </div>
      )
    }

    return () => {
      return (
        <div
          class="sm-child-level"
          ref={root}
        >
          <LevelTrigger />
        </div>
      )
    }
  }
})
