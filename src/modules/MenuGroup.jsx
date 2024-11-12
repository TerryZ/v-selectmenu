import { defineComponent, provide, ref, onMounted, watch } from 'vue'

import { injectMenuGroup } from '../constants'

export default defineComponent({
  name: 'MenuGroup',
  props: {
    modelValue: { type: String, default: '' }
  },
  emits: ['update:modelValue', 'change'],
  setup (props, { slots, emit }) {
    const tabs = ref([])
    const active = ref(props.modelValue)

    function switchGroup (groupName) {
      if (!tabs.value.length) return
      if (!groupName) return

      if (groupName !== props.modelValue) {
        active.value = groupName
        emit('update:modelValue', groupName)
        emit('change', tabs.value.find(tab => tab.name === groupName))
      }
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

        <div class="sm-group-body" >
          {slots?.default?.()}
        </div>
      </div>
    )
  }
})
