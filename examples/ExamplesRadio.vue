<template>
  <div>
    <h5>单选模块</h5>
    <MenuBody
      class="border rounded-3 shadow-sm"
    >
      <MenuHeader>单选模块</MenuHeader>
      <MenuRadioGroup
        v-model="checked"
        @change="change"
      >
        <MenuRadioItem value="radio1">
          radio1
        </MenuRadioItem>
        <MenuRadioItem value="radio2">
          radio2
          <template #append>
            append
          </template>
        </MenuRadioItem>
        <MenuRadioItem value="radio3">
          radio3
        </MenuRadioItem>
      </MenuRadioGroup>
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
  MenuItemHeader,
  MenuDivider,
  MenuRadioGroup,
  MenuRadioItem
} from '@/'

const checked = ref('radio3')

function change (value) {
  console.log(value)
}
</script>
