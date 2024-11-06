<template>
  <div>
    <h5>搜索模块</h5>
    <div>
      <MenuBody class="border rounded-3 shadow-sm">
        <MenuHeader>搜索</MenuHeader>
        <MenuSearchInput @search="search" />
        <MenuItem>我是菜单项11</MenuItem>
        <MenuItem>我是菜单项12</MenuItem>
        <MenuItem>我是菜单项13</MenuItem>
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
  MenuSearchInput
} from '@/'

function search (data) {
  console.log(data)
}
</script>
