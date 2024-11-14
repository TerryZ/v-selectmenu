import { ref, computed } from 'vue'

import MenuDivider from '../modules/MenuDivider'
import CircleButton from '../components/CircleButton'
import IconChevronLeft from '../icons/IconChevronLeft.vue'

export function useMultipleLevel (props) {
  const levels = ref([])

  const hasLevels = computed(() => levels.value.length)
  const childBodyStyles = computed(() => ({
    maxHeight: props.maxHeight,
    overflow: 'auto'
  }))

  function addChildLevel (data) {
    levels.value.push(data)
  }
  function backToPreviousLevel () {
    if (!levels.value.length) return
    levels.value.pop()
  }

  function LevelHeader ({ title }) {
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
          {title}
        </div>
      </div>
    )
  }
  function MenuLevelGroup () {
    return levels.value.map((level, index) => (
      <div
        class="sm-container-child"
        v-show={index === (levels.value.length - 1)}
      >
        <LevelHeader title={level.title} />
        <MenuDivider />
        <div style={childBodyStyles.value}>
          {level.render?.()}
        </div>
      </div>
    ))
  }

  return {
    hasLevels,
    addChildLevel,
    MenuLevelGroup
  }
}