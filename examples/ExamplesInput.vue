<template>
  <div>
    <h5>搜索模块</h5>
    <div class="mb-3 d-flex gap-3 flex-wrap">
      <SelectMenuDropdown>
        <template #trigger>
          <SelectMenuTrigger />
        </template>
        <SelectMenuBody>
          <SelectMenuHeader>搜索</SelectMenuHeader>
          <SelectMenuDivider />
          <SelectMenuInput
            placeholder="请输入搜索内容"
            @change="change"
          />
          <SelectMenuDivider />
          <SelectMenuItem
            v-for="item in items"
            :key="item.key"
          >
            {{ item.name }}
          </SelectMenuItem>
        </SelectMenuBody>
      </SelectMenuDropdown>

      <SelectMenuDropdown>
        <template #trigger>
          <SelectMenuTrigger />
        </template>
        <SelectMenuBody>
          <SelectMenuHeader>搜索</SelectMenuHeader>
          <SelectMenuInput
            @change="change"
            :debounce="300"
            :loading="searching"
          />
          <SelectMenuItem
            v-for="item in items"
            :key="item.key"
          >
            {{ item.name }}
          </SelectMenuItem>
        </SelectMenuBody>
      </SelectMenuDropdown>

      <SelectMenuDropdown>
        <template #trigger>
          <SelectMenuTrigger />
        </template>
        <SelectMenuBody>
          <SelectMenuInput>
            <template #prepend>
              sf
            </template>
            <template #append>
              <div class="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right-circle sm-icon"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                  />
                </svg>
              </div>
            </template>
          </SelectMenuInput>
          <SelectMenuInput
            v-model="searchText"
            :disabled="disabled"
            border
          />
          <SelectMenuBlock>
            <SelectMenuButton
              block
              @click="disabled = !disabled"
            >
              Switch disabled
            </SelectMenuButton>
          </SelectMenuBlock>
        </SelectMenuBody>
      </SelectMenuDropdown>

      <SelectMenuDropdown>
        <template #trigger>
          <SelectMenuTrigger />
        </template>
        <SelectMenuBody>
          <SelectMenuHeader>圆角弧度</SelectMenuHeader>
          <SelectMenuInput rounded="small" />
          <SelectMenuInput rounded="medium" />
          <SelectMenuInput rounded="large" />
          <SelectMenuInput rounded="pill" />
        </SelectMenuBody>
      </SelectMenuDropdown>

      <SelectMenuDropdown>
        <template #trigger>
          <SelectMenuTrigger />
        </template>
        <SelectMenuBody>
          <SelectMenuSubHeader>Form</SelectMenuSubHeader>
          <SelectMenuBlock>
            <SelectMenuInput
              v-model="searchText"
              :disabled="loading"
            />
            <template #append>
              <SelectMenuButton
                rounded="circle"
                :loading="loading"
                @click="handleClick"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right-circle sm-icon"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                  />
                </svg>
              </SelectMenuButton>
            </template>
          </SelectMenuBlock>
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
  SelectMenuItem,
  SelectMenuHeader,
  SelectMenuSubHeader,
  SelectMenuBody,
  SelectMenuDivider,
  SelectMenuInput,
  SelectMenuButton,
  SelectMenuBlock
} from '../src'

const list = [
  { key: '1', name: '我是菜单项1' },
  { key: '2', name: '我是菜单项2' },
  { key: '3', name: '我是元素项3' },
  { key: '4', name: '我是元素项4' },
  { key: '5', name: '我是菜单标题项5' }
]
const items = ref(list)
const loading = ref(false)
const searching = ref(false)

const searchText = ref('some text')
const disabled = ref(true)

function change (data) {
  console.log(data)
  if (searching.value) return

  searching.value = true
  setTimeout(() => {
    items.value = list.filter(item => item.name.includes(data))
    searching.value = false
  }, 2000)
}
function handleClick () {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>
