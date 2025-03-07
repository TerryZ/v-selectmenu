<template>
  <h5>菜单布局</h5>
  <div>
    <h5>行列组合应用</h5>
    <div class="mb-3">
      <SelectMenuDropdown>
        <template #trigger>
          <SelectMenuTrigger />
        </template>
        <SelectMenuBody>
          <SelectMenuHeader>Header</SelectMenuHeader>
          <SelectMenuItem>我是菜单项11</SelectMenuItem>
          <SelectMenuItem>我是菜单项12</SelectMenuItem>
          <SelectMenuItem>我是菜单项13</SelectMenuItem>
          <SelectMenuDivider />
          <SelectMenuRow>
            <SelectMenuColumn style="width: 10rem;">
              <SelectMenuSubHeader>单选</SelectMenuSubHeader>
              <SelectMenuRadioGroup>
                <SelectMenuRadioItem value="radio1">
                  选项1
                </SelectMenuRadioItem>
                <SelectMenuRadioItem value="radio2">
                  选项2
                </SelectMenuRadioItem>
                <SelectMenuRadioItem value="radio3">
                  选项3
                </SelectMenuRadioItem>
              </SelectMenuRadioGroup>
            </SelectMenuColumn>
            <SelectMenuDivider :horizontal="false" />
            <SelectMenuColumn style="width: 10rem;">
              <SelectMenuSubHeader>多选</SelectMenuSubHeader>
              <SelectMenuCheckboxGroup>
                <SelectMenuCheckboxItem value="checkbox1">
                  选项1
                </SelectMenuCheckboxItem>
                <SelectMenuCheckboxItem value="checkbox2">
                  选项2
                </SelectMenuCheckboxItem>
                <SelectMenuCheckboxItem value="checkbox3">
                  选项3
                </SelectMenuCheckboxItem>
                <SelectMenuCheckboxItem value="checkbox4">
                  选项4
                </SelectMenuCheckboxItem>
              </SelectMenuCheckboxGroup>
            </SelectMenuColumn>
          </SelectMenuRow>
          <SelectMenuDivider />
          <SelectMenuItem>我是菜单项21</SelectMenuItem>
          <SelectMenuItem>我是菜单项22</SelectMenuItem>
          <SelectMenuItem>我是菜单项23</SelectMenuItem>
        </SelectMenuBody>
      </SelectMenuDropdown>
    </div>

    <h5>多列布局</h5>
    <div>
      <SelectMenuDropdown>
        <template #trigger>
          <SelectMenuTrigger />
        </template>
        <SelectMenuBody>
          <SelectMenuRow>
            <SelectMenuColumn style="width: 10rem;">
              <SelectMenuSubHeader>单选</SelectMenuSubHeader>
              <SelectMenuRadioGroup>
                <SelectMenuRadioItem value="radio1">
                  选项1
                </SelectMenuRadioItem>
                <SelectMenuRadioItem value="radio2">
                  选项2
                </SelectMenuRadioItem>
                <SelectMenuRadioItem value="radio3">
                  选项3
                </SelectMenuRadioItem>
              </SelectMenuRadioGroup>
            </SelectMenuColumn>
            <SelectMenuDivider :horizontal="false" />
            <SelectMenuColumn style="width: 10rem;">
              <SelectMenuSubHeader>多选</SelectMenuSubHeader>
              <SelectMenuCheckboxGroup>
                <SelectMenuCheckboxItem value="checkbox1">
                  选项1
                </SelectMenuCheckboxItem>
                <SelectMenuCheckboxItem value="checkbox2">
                  选项2
                </SelectMenuCheckboxItem>
                <SelectMenuCheckboxItem value="checkbox3">
                  选项3
                </SelectMenuCheckboxItem>
                <SelectMenuCheckboxItem value="checkbox4">
                  选项4
                </SelectMenuCheckboxItem>
              </SelectMenuCheckboxGroup>
            </SelectMenuColumn>
            <SelectMenuDivider :horizontal="false" />
            <SelectMenuColumn style="width: 10rem;">
              <SelectMenuSubHeader>菜单项</SelectMenuSubHeader>
              <SelectMenuItem>我是菜单项11</SelectMenuItem>
              <SelectMenuItem>我是菜单项12</SelectMenuItem>
              <SelectMenuItem>我是菜单项13</SelectMenuItem>
            </SelectMenuColumn>
          </SelectMenuRow>
        </SelectMenuBody>
      </SelectMenuDropdown>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuItem,
  SelectMenuRow,
  SelectMenuColumn,
  SelectMenuHeader,
  SelectMenuBody,
  SelectMenuDivider,
  SelectMenuSubHeader,
  SelectMenuCheckboxGroup,
  SelectMenuCheckboxItem,
  SelectMenuRadioGroup,
  SelectMenuRadioItem
} from '../src'
</script>
