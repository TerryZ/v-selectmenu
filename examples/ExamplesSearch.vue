<template>
  <div>
    <h5>搜索模块</h5>
    <div>
      <MenuBody class="border rounded-3 shadow-sm">
        <MenuHeader>搜索</MenuHeader>
        <MenuSearch @search="search" />
        <MenuItem
          v-for="item in items"
          :key="item.key"
        >
          {{ item.name }}
        </MenuItem>
      </MenuBody>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  MenuItem,
  MenuRow,
  MenuColumn,
  MenuHeader,
  MenuBody,
  MenuDivider,
  MenuSearch
} from '@/'
const list = [
  { key: '1', name: '我是菜单项1' },
  { key: '2', name: '我是菜单项2' },
  { key: '3', name: '我是元素项3' },
  { key: '4', name: '我是元素项4' },
  { key: '5', name: '我是菜单标题项5' }
]
const items = ref(list)

function search (data) {
  console.log(data)
  items.value = list.filter(item => item.name.includes(data))
}
</script>
