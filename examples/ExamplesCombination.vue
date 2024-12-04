<template>
  <div>
    <h5>组合应用</h5>
    <div>
      <SelectMenuBody class="border rounded-3 shadow-sm">
        <SelectMenuHeader>Header</SelectMenuHeader>
        <SelectMenuInput @search="handleSearch" />
        <SelectMenuDivider />
        <SelectMenuCheckboxGroup>
          <SelectMenuGroup max-height="300px">
            <SelectMenuGroupItem
              v-for="group in groupItems"
              :key="group.name"
              :name="group.name"
              :title="group.title"
            >
              <SelectMenuCheckboxItem
                v-for="item in filterItems(group.items)"
                :key="item.name"
                :value="item.name"
              >
                {{ item.title }}
              </SelectMenuCheckboxItem>
            </SelectMenuGroupItem>
          </SelectMenuGroup>
        </SelectMenuCheckboxGroup>
      </SelectMenuBody>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import {
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuDivider,
  SelectMenuCheckboxGroup,
  SelectMenuCheckboxItem,
  SelectMenuGroup,
  SelectMenuGroupItem,
  SelectMenuInput
} from '@/'

import { groupItems } from './data'

const search = ref('')

function handleSearch (data) {
  search.value = data
}
function filterItems (list) {
  if (!search.value.trim()) return list
  return list.filter(item => item.title.includes(search.value))
}
</script>
