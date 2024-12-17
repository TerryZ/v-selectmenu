import { defineComponent, ref, inject } from 'vue'

import { injectMenu } from '../constants'

import SelectMenuChildTrigger from './SelectMenuChildTrigger'

export default defineComponent({
  name: 'SelectMenuChildLevel',
  setup (props, { slots }) {
    const { addChildLevel } = inject(injectMenu)

    const root = ref(null)

    function openChildMenus () {
      const body = root.value.querySelector('.sm-child-level-trigger .sm-block__body')
      const title = body.textContent?.trim()

      if (!title) return

      addChildLevel({
        title,
        render: slots?.default
      })
    }

    function LevelTrigger () {
      if (!slots.trigger) return null
      return (
        <SelectMenuChildTrigger
          onClick={openChildMenus}
        >
          {() => slots?.trigger?.()}
        </SelectMenuChildTrigger>
      )
    }

    return () => (
      <div
        class="sm-child-level"
        ref={root}
      >
        <LevelTrigger />
      </div>
    )
  }
})
