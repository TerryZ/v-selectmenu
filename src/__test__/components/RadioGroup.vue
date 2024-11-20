<template>
  <!-- <SelectMenuRadioGroup
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  > -->
  <SelectMenuRadioGroup>
    <SelectMenuRadioItem value="radio1">
      radio1
    </SelectMenuRadioItem>
    <SelectMenuRadioItem value="radio2">
      radio2
    </SelectMenuRadioItem>
    <SelectMenuRadioItem value="radio3">
      radio3
    </SelectMenuRadioItem>
  </SelectMenuRadioGroup>
</template>

<script setup>
// import { ref } from 'vue'

import {
  SelectMenuRadioGroup,
  SelectMenuRadioItem
} from '@/'

// defineProps({
//   modelValue: { type: [String, Number], default: '' }
// })
// defineEmits(['update:modelValue'])
</script>
