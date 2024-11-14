<template>
  <div>
    <h5>完整形态菜单</h5>
    <div class="d-flex">
      <div class="col-md-6">
        <MenuDropdown
          :align="align"
          :disabled="disabled"
          class="me-3"
        >
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

        <MenuDropdown
          class="me-3"
          :disabled="disabled"
        >
          <template #trigger="{ visible, disabled: triggerDisabled }">
            <button
              type="button"
              class="btn btn-dark"
            >
              visible: {{ visible }}
              disabled: {{ triggerDisabled }}
            </button>
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
      <div class="col-md-6">
        <h5>Props</h5>
        <div class="d-flex align-items-center mb-3">
          Align
          <select
            class="form-select ms-3 w-auto"
            v-model="align"
          >
            <option value="left">
              Left
            </option>
            <option value="center">
              Center
            </option>
            <option value="right">
              Right
            </option>
          </select>
        </div>
        <div class="d-flex align-items-center mb-3">
          Disabled
          <div class="form-check form-switch ms-3">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="dropdown-disabled"
              v-model="disabled"
            >
            <label
              class="form-check-label"
              for="dropdown-disabled"
            >Dropdown disabled</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import {
  MenuBody,
  MenuHeader,
  MenuGroup,
  MenuGroupItem,
  MenuItem,
  MenuTrigger,
  MenuDropdown
} from '@/'

const align = ref('left')
const disabled = ref(false)
</script>
