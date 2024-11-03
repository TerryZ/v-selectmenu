import { defineComponent, toRef, provide, ref, onMounted } from 'vue'

import { injectMenuGroup } from '../../constants'

export default defineComponent({
  name: 'MenuGroup',
  props: {
    modelValue: { type: String, default: '' }
  },
  emits: ['update:modelValue', 'change'],
  setup (props, { slots, emit }) {
    const tabs = ref([])

    function switchGroup (groupName) {
      if (!tabs.value.length) return
      if (!groupName) return

      if (groupName !== props.modelValue) {
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
          class={['sm-regular-group-tab', { active: tab.name === props.modelValue }]}
          onClick={() => switchGroup(tab.name)}
        >
          {tab.title}
        </div>
      ))
    }

    provide(injectMenuGroup, {
      active: toRef(props, 'modelValue'),
      addTab
    })

    onMounted(() => {
      if (!tabs.value.length) return
      switchGroup(props.modelValue || tabs.value.at(0).name)
    })

    return () => (
      <div class="sm-regular-group">
        <div class="sm-regular-group-tabs">
          <GroupTabs />
        </div>

        <div class="sm-regular-group-body" >
          {slots?.default?.()}
        </div>
      </div>
    )
  }
})
