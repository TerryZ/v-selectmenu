import { ref, computed } from 'vue'

export default {
  name: 'CircleButton',
  props: {
    size: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    bgColor: { type: String, default: 'transparent' },
    hoverBgColor: { type: String, default: '#f1f1f1' }
  },
  setup (props, { slots }) {
    const backgroundColor = ref('')

    const classes = computed(() => ({
      'sm-circle-btn': true,
      'sm-circle-btn--disabled': props.disabled,
      'sm-circle-btn--small': props.size === 'small',
      'sm-circle-btn--large': props.size === 'large'
    }))
    const styles = computed(() => ({
      'font-size': props.fontSize,
      'background-color': props.disabled ? 'transparent' : backgroundColor.value
    }))

    const onMouseEnter = () => {
      backgroundColor.value = props.hoverBgColor
    }
    const onMouseLeave = () => {
      backgroundColor.value = props.bgColor
    }

    return () => (
      <div
        class={classes.value}
        style={styles.value}
        onMouseenter={onMouseEnter}
        onMouseleave={onMouseLeave}
      >
        {slots?.default?.()}
      </div>
    )
  }
}
