<template>
  <div class="">
    <h5>基础菜单</h5>
    <div class="my-3">
      <SelectMenuDropdown>
        <template #trigger>
          <SelectMenuTrigger />
        </template>
        <SelectMenuBody
          @action="menuAction"
        >
          <SelectMenuHeader>
            <template #prepend>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-balloon sm-icon"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 9.984C10.403 9.506 12 7.48 12 5a4 4 0 0 0-8 0c0 2.48 1.597 4.506 4 4.984M13 5c0 2.837-1.789 5.227-4.52 5.901l.244.487a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.244-.487C4.789 10.227 3 7.837 3 5a5 5 0 0 1 10 0m-6.938-.495a2 2 0 0 1 1.443-1.443C7.773 2.994 8 2.776 8 2.5s-.226-.504-.498-.459a3 3 0 0 0-2.46 2.461c-.046.272.182.498.458.498s.494-.227.562-.495"
                />
              </svg>
            </template>
            我是菜单标题
            <template #append>
              消息
              <span class="badge rounded-pill bg-danger">20</span>
            </template>
          </SelectMenuHeader>
          <SelectMenuItem action="item11">
            我是菜单项11
          </SelectMenuItem>
          <SelectMenuItem action="item12">
            我是菜单项12
          </SelectMenuItem>
          <SelectMenuItem action="item13">
            我是菜单项13
          </SelectMenuItem>
          <SelectMenuDivider />
          <SelectMenuSubHeader>我是子标题</SelectMenuSubHeader>
          <SelectMenuItem action="item1">
            我是菜单项1
          </SelectMenuItem>
          <SelectMenuItem
            action="disabled"
            disabled
          >
            Disabled menu item
          </SelectMenuItem>
          <SelectMenuDivider />
          <SelectMenuItem
            action="item2"
            @click="itemClick"
          >
            <template #prepend>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-github sm-icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </template>
            我是菜单项2
            <template #append>
              <div class="border rounded-pill shadow-sm px-2 py-1">
                append
              </div>
            </template>
          </SelectMenuItem>
        </SelectMenuBody>
      </SelectMenuDropdown>
    </div>

    <h5>应用 section</h5>
    <div class="my-3">
      <SelectMenuDropdown>
        <template #trigger>
          <SelectMenuTrigger />
        </template>
        <SelectMenuBody>
          <SelectMenuHeader>Header</SelectMenuHeader>
          <SelectMenuItem>Item 1</SelectMenuItem>
          <SelectMenuItem>Item 1</SelectMenuItem>
          <SelectMenuDivider />
          <SelectMenuSubHeader>Section 1</SelectMenuSubHeader>
          <SelectMenuSection style="max-height: 200px;">
            <SelectMenuItem>Item 1</SelectMenuItem>
            <SelectMenuItem>Item 2</SelectMenuItem>
            <SelectMenuItem>Item 3</SelectMenuItem>
            <SelectMenuItem>Item 4</SelectMenuItem>
            <SelectMenuItem>Item 5</SelectMenuItem>
            <SelectMenuItem>Item 6</SelectMenuItem>
            <SelectMenuItem>Item 7</SelectMenuItem>
            <SelectMenuItem>Item 8</SelectMenuItem>
            <SelectMenuItem>Item 9</SelectMenuItem>
            <SelectMenuItem>Item 10</SelectMenuItem>
          </SelectMenuSection>
          <SelectMenuDivider />
          <SelectMenuSubHeader>Section 2</SelectMenuSubHeader>
          <SelectMenuSection style="max-height: 100px;">
            <SelectMenuItem>Item 11</SelectMenuItem>
            <SelectMenuItem>Item 12</SelectMenuItem>
            <SelectMenuItem>Item 13</SelectMenuItem>
            <SelectMenuItem>Item 14</SelectMenuItem>
            <SelectMenuItem>Item 15</SelectMenuItem>
            <SelectMenuItem>Item 16</SelectMenuItem>
            <SelectMenuItem>Item 17</SelectMenuItem>
            <SelectMenuItem>Item 18</SelectMenuItem>
            <SelectMenuItem>Item 19</SelectMenuItem>
            <SelectMenuItem>Item 20</SelectMenuItem>
          </SelectMenuSection>
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
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuItem,
  SelectMenuSection,
  SelectMenuSubHeader,
  SelectMenuDivider
} from '../src'

function menuAction (key) {
  console.log(key)
}
function itemClick (e) {
  console.log(e)
  alert('你点击了 "我是菜单项2" 项目')
}
</script>
