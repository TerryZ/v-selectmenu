<template>
  <div>
    <h5>完整形态菜单</h5>
    <div class="d-flex">
      <div class="col-md-6">
        <h6>常规模式</h6>
        <div class="mb-3">
          <SelectMenuDropdown
            :align="align"
            :disabled="disabled"
          >
            <template #trigger>
              <SelectMenuTrigger />
            </template>
            <SelectMenuBody>
              <SelectMenuHeader>Header</SelectMenuHeader>
              <SelectMenuItem action="item11">
                我是菜单项11
              </SelectMenuItem>
              <SelectMenuItem action="item12">
                我是菜单项12
              </SelectMenuItem>
              <SelectMenuItem action="item13">
                我是菜单项13
              </SelectMenuItem>
            </SelectMenuBody>
          </SelectMenuDropdown>
        </div>

        <h6>自定义 Trigger</h6>
        <div class="mb-3">
          <SelectMenuDropdown :disabled="disabled">
            <template #trigger="{ visible, disabled: triggerDisabled }">
              <button
                type="button"
                class="btn btn-dark"
              >
                visible: {{ visible }}
                disabled: {{ triggerDisabled }}
              </button>
            </template>
            <SelectMenuBody>
              <SelectMenuHeader>Header</SelectMenuHeader>
              <SelectMenuItem action="item11">
                我是菜单项11
              </SelectMenuItem>
              <SelectMenuItem action="item12">
                我是菜单项12
              </SelectMenuItem>
              <SelectMenuItem action="item13">
                我是菜单项13
              </SelectMenuItem>
            </SelectMenuBody>
          </SelectMenuDropdown>
        </div>

        <h6>自定义内容</h6>
        <div class="mb-3">
          <SelectMenuDropdown
            :align="align"
            :disabled="disabled"
          >
            <template #trigger>
              <SelectMenuTrigger />
            </template>

            <template #default="{ visible, closeDropdown }">
              <div class="d-flex flex-column">
                <div class="d-flex flex-column p-3">
                  <h4>Component</h4>
                  <CustomDropdownContent />
                </div>

                <div class="mt-3 border-top d-flex flex-column p-3">
                  <h4>html dom</h4>
                  <div>
                    visible: {{ visible }}
                  </div>
                  <div class="mt-3">
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="closeDropdown"
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </template>
          </SelectMenuDropdown>
        </div>
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
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuItem,
  SelectMenuTrigger,
  SelectMenuDropdown
} from '@/'
import CustomDropdownContent from './CustomDropdownContent.vue'

const align = ref('left')
const disabled = ref(false)
</script>
