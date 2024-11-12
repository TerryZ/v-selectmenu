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
          <MenuColumn style="width: 10rem;">
            <MenuSubHeader>单选</MenuSubHeader>
            <MenuRadioGroup>
              <MenuRadioItem value="radio1">
                选项1
              </MenuRadioItem>
              <MenuRadioItem value="radio2">
                选项2
              </MenuRadioItem>
              <MenuRadioItem value="radio3">
                选项3
              </MenuRadioItem>
            </MenuRadioGroup>
          </MenuColumn>
          <MenuDivider :horizontal="false" />
          <MenuColumn style="width: 10rem;">
            <MenuSubHeader>多选</MenuSubHeader>
            <MenuCheckboxGroup>
              <MenuCheckboxItem value="checkbox1">
                选项1
              </MenuCheckboxItem>
              <MenuCheckboxItem value="checkbox2">
                选项2
              </MenuCheckboxItem>
              <MenuCheckboxItem value="checkbox3">
                选项3
              </MenuCheckboxItem>
              <MenuCheckboxItem value="checkbox4">
                选项4
              </MenuCheckboxItem>
            </MenuCheckboxGroup>
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
  MenuDivider,
  MenuSubHeader,
  MenuCheckboxGroup,
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem
} from '@/'
</script>
