<template>
  <div class="px-2 pt-3 border-end">
    <div class="fs-4 fw-bold ps-3 pb-3">
      SelectMenu
    </div>
    <div
      class="text-secondary text-opacity-50 px-3 py-2 fw-bold"
      style="cursor: pointer;"
      :class="itemClasses(item)"
      :key="item.name"
      v-for="item in list"
      v-text="item.name"
      @click="setActive(item, router)"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

import { list, active, setActive } from './store'

const router = useRouter()

function itemClasses (item) {
  if (item.code !== active.value) return ''
  return 'text-black text-opacity-100 bg-body-secondary bg-opacity-50 rounded-3'
}
</script>
