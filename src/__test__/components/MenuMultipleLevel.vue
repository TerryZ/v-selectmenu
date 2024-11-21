<template>
  <SelectMenuBody>
    <SelectMenuItem>我是菜单项1</SelectMenuItem>
    <SelectMenuItem>我是菜单项2</SelectMenuItem>

    <SelectMenuChildLevel>
      <template #trigger>
        <SelectMenuItem action="item3">
          我是菜单项3
        </SelectMenuItem>
      </template>

      <SelectMenuItem action="item-child1">
        我是子菜单项1
      </SelectMenuItem>

      <SelectMenuChildLevel>
        <template #trigger>
          <SelectMenuItem action="item-child2">
            我是子菜单项2
          </SelectMenuItem>
        </template>

        <SelectMenuItem
          action="item-grandson1"
        >
          我是孙菜单项1
        </SelectMenuItem>
        <SelectMenuItem action="item-grandson2">
          我是孙菜单项2
        </SelectMenuItem>
        <SelectMenuItem
          action="item-grandson3"
        >
          我是孙菜单项3
        </SelectMenuItem>
      </SelectMenuChildLevel>
      <SelectMenuItem
        action="item-child3"
      >
        我是子菜单项3
      </SelectMenuItem>
      <SelectMenuItem>我是子菜单项4</SelectMenuItem>
    </SelectMenuChildLevel>

    <SelectMenuItem disabled>
      Disabled menu item
    </SelectMenuItem>
    <SelectMenuItem disabled>
      Disabled menu item
    </SelectMenuItem>
  </SelectMenuBody>
</template>

<script setup>
import {
  SelectMenuBody,
  SelectMenuChildLevel,
  SelectMenuItem
} from '@/'
</script>
