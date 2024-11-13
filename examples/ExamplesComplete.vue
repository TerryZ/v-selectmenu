<template>
  <div>
    <h5>完整形态菜单</h5>
    <div>
      <MenuDropdown>
        <template #trigger>
          <MenuTrigger />
        </template>
        <MenuBody>
          <MenuHeader>Header</MenuHeader>
          <MenuItem action="item11">
            我是菜单项11
          </MenuItem>
          <MenuItem action="item12">
            我是菜单项12
          </MenuItem>
          <MenuItem action="item13">
            我是菜单项13
          </MenuItem>
        </MenuBody>
      </MenuDropdown>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'

import {
  MenuBody,
  MenuHeader,
  MenuGroup,
  MenuGroupItem,
  MenuItem,
  MenuTrigger,
  MenuDropdown
} from '@/'
</script>
