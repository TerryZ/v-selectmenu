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
        Close
      </button>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import { useDropdown } from '../src'

const {
  visible,
  close
} = useDropdown()
</script>
