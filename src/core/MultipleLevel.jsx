import { ref, computed, nextTick } from 'vue'

import { useSelectMenuDropdown } from './helper'

import SelectMenuDivider from '../modules/SelectMenuDivider'
import CircleButton from '../components/CircleButton'
import IconChevronLeft from '../icons/IconChevronLeft.vue'

export function useMultipleLevel (props) {
  const { adjustDropdown } = useSelectMenuDropdown()

  const levels = ref([])

  const hasLevels = computed(() => levels.value.length)
  const childBodyStyles = computed(() => ({
    maxHeight: props.maxHeight,
    overflow: 'auto'
  }))

  function addChildLevel (data) {
    levels.value.push(data)
    nextTick(() => adjustDropdown?.())
  }
  function backToPreviousLevel () {
    if (!levels.value.length) return
    levels.value.pop()
    nextTick(() => adjustDropdown?.())
  }
  function resetLevel () {
    levels.value = []
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
        <SelectMenuDivider />
        <div
          class="sm-child-body"
          style={childBodyStyles.value}
        >
          {level.render?.()}
        </div>
      </div>
    ))
  }

  return {
    hasLevels,
    addChildLevel,
    resetLevel,
    MenuLevelGroup
  }
}
