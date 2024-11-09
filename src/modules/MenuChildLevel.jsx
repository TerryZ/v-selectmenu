import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MenuChildLevel',
  setup (props, { slots }) {
    const visible = ref(false)

    function changeVisible () {
      visible.value = !visible.value
    }

    function LevelTrigger () {
      if (!slots.trigger) return null
      return (
        <div
          class="sm-child-level-trigger"
          onClick={changeVisible}
        >
          {slots?.trigger?.()}
          <div>ff</div>
        </div>
      )
    }
    function LevelContent () {
      return (
        <div v-show={visible.value}>
          {slots?.default?.()}
        </div>
      )
    }
    return () => {
      return (
        <div class="sm-child-level">
          <LevelTrigger />
          <LevelContent />
        </div>
      )
    }
  }
})
