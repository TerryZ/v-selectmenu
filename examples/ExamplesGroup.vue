<template>
  <div>
    <h5>多分组</h5>
    <MenuBody class="border rounded-3 shadow-sm">
      <MenuHeader>我是菜单标题</MenuHeader>
      <MenuGroup
        v-model="activeGroup"
        @change="groupChange"
      >
        <MenuGroupItem
          name="group1"
          title="分组1"
        >
          <MenuItem>项目1-1</MenuItem>
          <MenuItem>项目1-2</MenuItem>
          <MenuItem>项目1-3</MenuItem>
        </MenuGroupItem>
        <MenuGroupItem
          name="group2"
          title="分组2"
        >
          <MenuItem>项目2-1</MenuItem>
          <MenuItem>项目2-2</MenuItem>
          <MenuItem>项目2-3</MenuItem>
        </MenuGroupItem>
        <MenuGroupItem
          name="group3"
          title="分组3"
        >
          <MenuItem>项目3-1</MenuItem>
          <MenuItem>项目3-2</MenuItem>
          <MenuItem>项目3-3</MenuItem>
        </MenuGroupItem>
      </MenuGroup>
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
  MenuItem
} from '@/'

const activeGroup = ref('group2')

function groupChange (group) {
  console.log(group)
}
</script>
