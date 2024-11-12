<template>
  <div>
    <h5>组合应用</h5>
    <div>
      <MenuBody class="border rounded-3 shadow-sm">
        <MenuHeader>Header</MenuHeader>
        <MenuSearch @search="search" />
        <MenuDivider />
        <MenuCheckboxGroup>
          <MenuGroup max-height="300px">
            <MenuGroupItem
              v-for="group in groupItems"
              :key="group.name"
              :name="group.name"
              :title="group.title"
            >
              <MenuCheckboxItem
                v-for="item in group.items"
                :key="item.name"
                :value="item.name"
              >
                {{ item.title }}
              </MenuCheckboxItem>
            </MenuGroupItem>
          </MenuGroup>
        </MenuCheckboxGroup>
      </MenuBody>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import {
  MenuBody,
  MenuHeader,
  MenuItem,
  MenuSubHeader,
  MenuDivider,
  MenuChildLevel,
  MenuCheckboxGroup,
  MenuCheckboxItem,
  MenuGroup,
  MenuGroupItem,
  MenuSearch
} from '@/'

import { groupItems } from './data'

function search (data) {

}
</script>
