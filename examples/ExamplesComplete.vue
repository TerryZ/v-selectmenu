<template>
  <div>
    <h5>完整形态菜单</h5>
    <div class="d-flex">
      <div class="col-md-6">
        <h6>常规模式</h6>
        <div class="mb-3">
          单项选项：{{ radio }}
        </div>
        <div class="mb-3 d-flex align-items-center">
          单选选择关闭菜单：
          <div class="form-check form-switch m-0">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              v-model="hideOnRadioSelection"
            >
          </div>
        </div>
        <div class="mb-3 d-flex align-items-center">
          多选选择关闭菜单：
          <div class="form-check form-switch m-0">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              v-model="hideOnCheckboxSelection"
            >
          </div>
        </div>
        <div class="mb-3">
          <SelectMenuDropdown
            :align="align"
            :disabled="disabled"
          >
            <template #trigger>
              <SelectMenuTrigger rounded="pill">
                {{ radio || '打开' }}
              </SelectMenuTrigger>
            </template>
            <SelectMenuBody @action="handleAction">
              <SelectMenuHeader>SelectMenu</SelectMenuHeader>
              <SelectMenuSection>
                <SelectMenuItem action="item11">
                  我是菜单项11
                </SelectMenuItem>
                <SelectMenuItem action="item12">
                  我是菜单项12
                </SelectMenuItem>
                <SelectMenuItem action="item13">
                  我是菜单项13
                </SelectMenuItem>
              </SelectMenuSection>
              <SelectMenuDivider />
              <SelectMenuSection>
                <SelectMenuSubHeader>
                  单选
                  <template #append>
                    <SelectMenuButton
                      @click.stop="clearRadio"
                      size="small"
                    >
                      清除选择
                    </SelectMenuButton>
                  </template>
                </SelectMenuSubHeader>
                <SelectMenuRadioGroup
                  v-model="radio"
                  :hide-on-selection="hideOnRadioSelection"
                >
                  <SelectMenuRadioItem value="radio1">
                    单选值1
                  </SelectMenuRadioItem>
                  <SelectMenuRadioItem value="radio2">
                    单选值2
                  </SelectMenuRadioItem>
                  <SelectMenuRadioItem value="radio3">
                    单选值3
                  </SelectMenuRadioItem>
                </SelectMenuRadioGroup>
              </SelectMenuSection>
              <SelectMenuDivider />
              <SelectMenuSection>
                <SelectMenuSubHeader>
                  多选
                  <template #append>
                    <SelectMenuButton
                      @click.stop="clearCheckboxes"
                      size="mini"
                    >
                      清除选择
                    </SelectMenuButton>
                  </template>
                </SelectMenuSubHeader>
                <SelectMenuCheckboxGroup
                  v-model="checkbox"
                  :hide-on-selection="hideOnCheckboxSelection"
                >
                  <SelectMenuCheckboxItem value="checkbox1">
                    多选值1
                  </SelectMenuCheckboxItem>
                  <SelectMenuCheckboxItem value="checkbox2">
                    多选值2
                  </SelectMenuCheckboxItem>
                  <SelectMenuCheckboxItem value="checkbox3">
                    多选值3
                  </SelectMenuCheckboxItem>
                </SelectMenuCheckboxGroup>
              </SelectMenuSection>
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
  SelectMenuSection,
  SelectMenuHeader,
  SelectMenuSubHeader,
  SelectMenuItem,
  SelectMenuTrigger,
  SelectMenuDropdown,
  SelectMenuRadioGroup,
  SelectMenuRadioItem,
  SelectMenuCheckboxGroup,
  SelectMenuCheckboxItem,
  SelectMenuDivider,
  SelectMenuButton
} from '../src'
import CustomDropdownContent from './CustomDropdownContent.vue'

const align = ref('left')
const disabled = ref(false)
const radio = ref('radio3')
const checkbox = ref(['checkbox2', 'checkbox3'])
const hideOnRadioSelection = ref(true)
const hideOnCheckboxSelection = ref(false)

function handleAction (action) {
  console.log(action)
}
function clearRadio () {
  radio.value = ''
}
function clearCheckboxes () {
  checkbox.value = []
}
</script>
