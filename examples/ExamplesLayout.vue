<template>
  <h5>菜单布局</h5>
  <div>
    <div>
      <MenuBody class="border rounded-3 shadow-sm">
        <MenuHeader>Header</MenuHeader>
        <MenuItem>我是菜单项11</MenuItem>
        <MenuItem>我是菜单项12</MenuItem>
        <MenuItem>我是菜单项13</MenuItem>
        <MenuDivider />
        <MenuRow>
          <MenuColumn>
            <MenuItem>Item11</MenuItem>
            <MenuItem>Item12</MenuItem>
          </MenuColumn>
          <MenuDivider :horizontal="false" />
          <MenuColumn>
            <MenuItem>Item21</MenuItem>
            <MenuItem>Item22</MenuItem>
            <MenuItem>Item23</MenuItem>
          </MenuColumn>
        </MenuRow>
        <MenuDivider />
        <MenuItem>我是菜单项21</MenuItem>
        <MenuItem>我是菜单项22</MenuItem>
        <MenuItem>我是菜单项23</MenuItem>
      </MenuBody>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import {
  MenuItem,
  MenuRow,
  MenuColumn,
  MenuHeader,
  MenuBody,
  MenuDivider
} from '@/'
</script>
