import { defineComponent, ref, inject, Teleport } from 'vue'

import { injectMenu } from '../constants'

import IconChevronRight from '../icons/IconChevronRight.vue'

export default defineComponent({
  name: 'MenuChildLevel',
  setup (props, { slots }) {
    const {
      multipleLevelBreadcrumbs,
      childContainer
    } = inject(injectMenu)
    const root = ref(null)

    function openChildMenus () {
      // visible.value = !visible.value
      const body = root.value.querySelector('.sm-child-level-trigger .sm-item-body')
      const title = body.innerText.trim()

      if (!title) return

      multipleLevelBreadcrumbs.value.push({
        title,
        render: slots?.default
      })
      console.log(childContainer)
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
    function LevelContent () {
      // if (!childContainer.value) return null
      return (
        <Teleport to={childContainer.value}>
          {slots?.default?.()}
        </Teleport>
      )
    }

    return () => {
      return (
        <div
          class="sm-child-level"
          ref={root}
        >
          <LevelTrigger />
          <LevelContent />
        </div>
      )
    }
  }
})
