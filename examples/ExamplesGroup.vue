<template>
  <div>
    <h5>多分组</h5>
    <div class="my-3">
      <SelectMenuDropdown>
        <template #trigger>
          <SelectMenuTrigger />
        </template>
        <SelectMenuBody>
          <SelectMenuHeader>我是菜单标题</SelectMenuHeader>
          <SelectMenuGroup
            v-model="activeGroup"
            @change="groupChange"
          >
            <SelectMenuGroupItem
              name="group1"
              title="分组1"
            >
              <SelectMenuItem>项目1-1</SelectMenuItem>
              <SelectMenuItem>项目1-2</SelectMenuItem>
              <SelectMenuItem>项目1-3</SelectMenuItem>
            </SelectMenuGroupItem>
            <SelectMenuGroupItem
              name="group2"
              title="分组2"
            >
              <SelectMenuItem>项目2-1</SelectMenuItem>
              <SelectMenuItem>项目2-2</SelectMenuItem>
              <SelectMenuItem>项目2-3</SelectMenuItem>
            </SelectMenuGroupItem>
            <SelectMenuGroupItem
              name="group3"
              title="分组3"
            >
              <SelectMenuItem>项目3-1</SelectMenuItem>
              <SelectMenuItem>项目3-2</SelectMenuItem>
              <SelectMenuItem>项目3-3</SelectMenuItem>
            </SelectMenuGroupItem>
          </SelectMenuGroup>
        </SelectMenuBody>
      </SelectMenuDropdown>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuGroup,
  SelectMenuGroupItem,
  SelectMenuItem
} from '../src'

const activeGroup = ref('group2')

function groupChange (group) {
  console.log(group)
}
</script>
