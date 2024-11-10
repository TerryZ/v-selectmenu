import { defineComponent, inject, computed } from 'vue'

import { injectMenu } from '../constants'

import IconChevronLeft from '../icons/IconChevronLeft.vue'
import MenuDivider from './MenuDivider'
import CircleButton from '../components/CircleButton'

export default defineComponent({
  name: 'MenuChildContainer',
  setup () {
    const {
      multipleLevelBreadcrumbs,
      backToPreviousLevel
    } = inject(injectMenu)

    const menuLastLevel = computed(() => multipleLevelBreadcrumbs.value.at(-1))

    function ChildHeader () {
      return (
        <div class="sm-item sm-child-header">
          <div
            class="sm-item-prepend"
            onClick={backToPreviousLevel}
          >
            <CircleButton size="large">
              <IconChevronLeft />
            </CircleButton>
          </div>
          <div class="sm-item-body">
            {menuLastLevel.value.title}
          </div>
        </div>
      )
    }
    function ChildContent () {
      return menuLastLevel.value.render?.()
    }

    return () => {
      return (
        <div class="sm-container-child">
          <ChildHeader />
          <MenuDivider />
          <ChildContent />
        </div>
      )
    }
  }
})
