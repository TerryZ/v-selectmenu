<template>
  <div>
    <h5>组合应用</h5>
    <div class="d-flex mb-3 gap-3">
      <div class="">
        <h6>多分组查询</h6>
        <div>
          <SelectMenuDropdown>
            <template #trigger>
              <SelectMenuTrigger />
            </template>
            <SelectMenuBody>
              <SelectMenuSubHeader>Header</SelectMenuSubHeader>
              <SelectMenuInput @search="handleSearch" />
              <SelectMenuDivider />
              <SelectMenuCheckboxGroup>
                <SelectMenuGroup style="width: 250px;height: 250px;">
                  <SelectMenuGroupItem
                    v-for="group in groupItems"
                    :key="group.name"
                    :name="group.name"
                    :title="group.title"
                  >
                    <SelectMenuCheckboxItem
                      v-for="item in filterItems(group.items)"
                      :key="item.name"
                      :value="item.name"
                    >
                      {{ item.title }}
                    </SelectMenuCheckboxItem>
                  </SelectMenuGroupItem>
                </SelectMenuGroup>
              </SelectMenuCheckboxGroup>
            </SelectMenuBody>
          </SelectMenuDropdown>
        </div>
      </div>

      <div>
        <h6>表单</h6>
        <div>
          <SelectMenuDropdown>
            <template #trigger>
              <SelectMenuTrigger />
            </template>
            <SelectMenuBody>
              <!-- <SelectMenuDivider /> -->
              <SelectMenuRow>
                <SelectMenuColumn>
                  <SelectMenuSubHeader>Base</SelectMenuSubHeader>
                  <SelectMenuInput placeholder="User name" />
                  <SelectMenuInput placeholder="User age" />
                </SelectMenuColumn>
                <SelectMenuDivider :horizontal="false" />
                <SelectMenuColumn>
                  <SelectMenuSubHeader>Extend</SelectMenuSubHeader>
                  <SelectMenuInput placeholder="Mail" />
                  <SelectMenuInput placeholder="Address" />
                </SelectMenuColumn>
              </SelectMenuRow>

              <SelectMenuDivider />
              <SelectMenuBlock>
                <SelectMenuButton>
                  <template #prepend>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-floppy"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 2H9v3h2z" />
                      <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                    </svg>
                  </template>
                  保存
                </SelectMenuButton>
              </SelectMenuBlock>
            </SelectMenuBody>
          </SelectMenuDropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuSubHeader,
  SelectMenuDivider,
  SelectMenuCheckboxGroup,
  SelectMenuCheckboxItem,
  SelectMenuGroup,
  SelectMenuGroupItem,
  SelectMenuBlock,
  SelectMenuInput,
  SelectMenuButton,
  SelectMenuRow,
  SelectMenuColumn
} from '../src'

import { groupItems } from './data'

const search = ref('')

function handleSearch (data) {
  search.value = data
}
function filterItems (list) {
  if (!search.value.trim()) return list
  return list.filter(item => item.title.includes(search.value))
}
</script>
