import { defineComponent, provide, ref, onMounted, watch, computed } from 'vue'

import { injectMenuGroup } from '../constants'

export default defineComponent({
  name: 'SelectMenuGroup',
  props: {
    modelValue: { type: String, default: '' },
    maxHeight: { type: String, default: '' }
  },
  emits: ['update:modelValue', 'change'],
  setup (props, { slots, emit }) {
    const tabs = ref([])
    const active = ref(props.modelValue)

    const groupBodyStyles = computed(() => ({
      maxHeight: props.maxHeight,
      overflow: 'auto'
    }))

    function switchGroup (groupName) {
      if (!tabs.value.length) return
      if (!groupName) return
      if (groupName === active.value) return

      active.value = groupName
      emit('update:modelValue', groupName)
      emit('change', tabs.value.find(tab => tab.name === groupName))
    }
    function addTab (name, title) {
      tabs.value.push({ name, title })
    }
    function GroupTabs () {
      if (!tabs.value.length) return null
      return tabs.value.map(tab => (
        <div
          key={tab.name}
          class={['sm-group-tab', { active: tab.name === active.value }]}
          onClick={() => switchGroup(tab.name)}
        >
          {tab.title}
        </div>
      ))
    }

    watch(() => props.modelValue, switchGroup)

    provide(injectMenuGroup, {
      active,
      addTab
    })

    onMounted(() => {
      if (!tabs.value.length) return
      switchGroup(props.modelValue || tabs.value.at(0).name)
    })

    return () => (
      <div class="sm-group">
        <div class="sm-group-tabs">
          <GroupTabs />
        </div>

        <div
          class="sm-group-body"
          style={groupBodyStyles.value}
        >
          {slots?.default?.()}
        </div>
      </div>
    )
  }
})
