import { defineComponent, ref, inject } from 'vue'

import { injectMenu } from '../constants'

import IconChevronRight from '../icons/IconChevronRight.vue'

export default defineComponent({
  name: 'MenuChildLevel',
  setup (props, { slots }) {
    const {
      openChildMenu
    } = inject(injectMenu)
    const root = ref(null)

    function openChildMenus () {
      console.dir(root.value.__vnode.ctx.uid)
      const body = root.value.querySelector('.sm-child-level-trigger .sm-item-body')
      const title = body.innerText.trim()

      if (!title) return

      openChildMenu({
        uid: root.value.__vnode.ctx.uid,
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
