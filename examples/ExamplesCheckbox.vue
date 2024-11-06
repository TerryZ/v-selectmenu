<template>
  <div>
    <h5>多选模块</h5>
    <MenuBody
      class="border rounded-3 shadow-sm"
    >
      <MenuHeader>多选模块</MenuHeader>
      <MenuCheckboxGroup
        v-model="checked"
        @change="change"
      >
        <MenuCheckboxItem value="checkbox1">
          checkbox1
        </MenuCheckboxItem>
        <MenuCheckboxItem value="checkbox2">
          checkbox2
          <template #append>
            append
          </template>
        </MenuCheckboxItem>
        <MenuCheckboxItem value="checkbox3">
          checkbox3
        </MenuCheckboxItem>
      </MenuCheckboxGroup>
    </MenuBody>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import {
  MenuBody,
  MenuHeader,
  MenuGroup,
  MenuGroupItem,
  MenuItem,
  MenuDivider,
  MenuCheckboxGroup,
  MenuCheckboxItem
} from '@/'

const checked = ref(['checkbox3'])

function change (value) {
  console.log(value)
}
</script>
