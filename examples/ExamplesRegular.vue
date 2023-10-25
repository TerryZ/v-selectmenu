<template>
  <div class="p-3">
    <h4>常规菜单</h4>
    <div class="mb-5">
      <MenuBody
        class="border rounded-3 shadow-sm"
        @action="menuAction"
      >
        <MenuHeader>我是菜单标题</MenuHeader>
        <ItemElement action="item11">
          我是菜单项11
        </ItemElement>
        <ItemHeader>我是子标题</ItemHeader>
        <ItemElement action="item1">
          我是菜单项1
        </ItemElement>
        <ItemElement
          action="disabled"
          disabled
        >
          Disabled menu item
        </ItemElement>
        <ItemDivider />
        <ItemElement
          action="item2"
          @click="itemClick"
        >
          <template #prepend>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </template>
          我是菜单项2
        </ItemElement>
      </MenuBody>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'

import MenuBody from '@/components/regular/MenuBody'
import MenuHeader from '@/components/regular/MenuHeader'
import ItemHeader from '@/components/regular/ItemHeader'
import ItemElement from '@/components/regular/ItemElement'
import ItemDivider from '@/components/regular/ItemDivider'

function menuAction (key) {
  console.log(key)
}
function itemClick (e) {
  console.log(e)
}
</script>
