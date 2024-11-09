<template>
  <div>
    <h5>多级别</h5>
    <div>
      <MenuBody
        class="border rounded-3 shadow-sm"
        @action="menuAction"
      >
        <MenuHeader>我是菜单标题</MenuHeader>
        <MenuItem action="item11">
          我是菜单项11
        </MenuItem>
        <MenuItem action="item12">
          我是菜单项12
        </MenuItem>
        <MenuItem action="item13">
          我是菜单项13
        </MenuItem>
        <MenuDivider />
        <MenuSubHeader>我是子标题</MenuSubHeader>
        <MenuItem action="item1">
          我是菜单项1
        </MenuItem>
        <MenuItem action="item2">
          我是菜单项2
        </MenuItem>
        <MenuChildLevel>
          <template #trigger>
            <MenuItem action="item3">
              我是菜单项3
            </MenuItem>
          </template>
          <MenuItem action="item-child1">
            我是子菜单项1
          </MenuItem>
          <MenuItem action="item-child2">
            我是子菜单项2
          </MenuItem>

          <MenuItem action="item-child3">
            我是子菜单项3
          </MenuItem>
        </MenuChildLevel>

        <MenuItem
          action="disabled"
          disabled
        >
          Disabled menu item
        </MenuItem>
      </MenuBody>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import {
  MenuBody,
  MenuHeader,
  MenuItem,
  MenuSubHeader,
  MenuDivider,
  MenuChildLevel
} from '@/'

function menuAction (key) {
  console.log(key)
}
</script>
