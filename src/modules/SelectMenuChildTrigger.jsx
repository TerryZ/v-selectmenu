import { defineComponent, provide } from 'vue'

import { injectMultipleLevel } from '../constants'

import IconChevronRight from '../icons/IconChevronRight.vue'

export default defineComponent({
  name: 'SelectMenuChildTrigger',
  setup (props, { slots }) {
    provide(injectMultipleLevel, {
      hideOnTriggerClick: false
    })

    return () => (
      <div class="sm-child-level-trigger">
        {slots?.default?.()}
        <IconChevronRight />
      </div>
    )
  }
})
