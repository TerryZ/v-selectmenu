<template>
  <div class="">
    Custom Content

    <div class="mt-3">
      dropdown visible: {{ visible }}
    </div>

    <div class="mt-3">
      <button
        type="button"
        class="btn btn-primary"
        @click="close"
      >
        OK
      </button>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import { useSelectMenuDropdown } from '@/'

const {
  visible,
  closeDropdown
} = useSelectMenuDropdown()

function close () {
  console.log(visible.value)
  closeDropdown()
}
</script>
