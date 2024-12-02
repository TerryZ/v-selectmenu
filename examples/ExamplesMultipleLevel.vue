<template>
  <div>
    <h5>多级别</h5>
    <div class="mb-3">
      <SelectMenuBody
        class="border rounded-3 shadow-sm"
        max-height="300px"
        @action="menuAction"
      >
        <SelectMenuHeader>我是菜单标题</SelectMenuHeader>
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
        <SelectMenuItem action="item2">
          我是菜单项2
        </SelectMenuItem>
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
              v-if="visibleGrandson1"
            >
              我是孙菜单项1
            </SelectMenuItem>
            <SelectMenuItem action="item-grandson2">
              我是孙菜单项2
            </SelectMenuItem>
            <SelectMenuItem
              action="item-grandson3"
              @click="visibleGrandson1 = !visibleGrandson1"
            >
              我是孙菜单项3
            </SelectMenuItem>
          </SelectMenuChildLevel>
          <SelectMenuItem
            action="item-child3"
            v-if="visibleChild3"
          >
            我是子菜单项3
          </SelectMenuItem>
          <SelectMenuItem
            action="item-child4"
            @click="visibleChild3 = !visibleChild3"
          >
            我是子菜单项4
          </SelectMenuItem>
          <SelectMenuItem>我是子菜单项5</SelectMenuItem>
          <SelectMenuItem>我是子菜单项6</SelectMenuItem>
          <SelectMenuItem>我是子菜单项7</SelectMenuItem>
          <SelectMenuItem>我是子菜单项8</SelectMenuItem>
          <SelectMenuItem>我是子菜单项9</SelectMenuItem>
          <SelectMenuItem>我是子菜单项10</SelectMenuItem>
          <SelectMenuItem>我是子菜单项11</SelectMenuItem>
          <SelectMenuItem>我是子菜单项12</SelectMenuItem>
          <SelectMenuItem>我是子菜单项13</SelectMenuItem>
          <SelectMenuItem>我是子菜单项14</SelectMenuItem>
          <SelectMenuItem>我是子菜单项15</SelectMenuItem>
        </SelectMenuChildLevel>

        <SelectMenuItem
          action="disabled"
          disabled
        >
          Disabled menu item
        </SelectMenuItem>
      </SelectMenuBody>
    </div>

    <h5>应用下拉层</h5>
    <div>
      <SelectMenuDropdown>
        <template #trigger>
          <SelectMenuTrigger />
        </template>

        <SelectMenuBody
          class="border rounded-3 shadow-sm"
          max-height="300px"
          @action="menuAction"
        >
          <SelectMenuHeader>我是菜单标题</SelectMenuHeader>
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
          <SelectMenuItem action="item2">
            我是菜单项2
          </SelectMenuItem>
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
                v-if="visibleGrandson1"
              >
                我是孙菜单项1
              </SelectMenuItem>
              <SelectMenuItem action="item-grandson2">
                我是孙菜单项2
              </SelectMenuItem>
              <SelectMenuItem
                action="item-grandson3"
                @click="visibleGrandson1 = !visibleGrandson1"
              >
                我是孙菜单项3
              </SelectMenuItem>
            </SelectMenuChildLevel>
            <SelectMenuItem
              action="item-child3"
              v-if="visibleChild3"
            >
              我是子菜单项3
            </SelectMenuItem>
            <SelectMenuItem
              action="item-child4"
              @click="visibleChild3 = !visibleChild3"
            >
              我是子菜单项4
            </SelectMenuItem>
            <SelectMenuItem>我是子菜单项5</SelectMenuItem>
            <SelectMenuItem>我是子菜单项6</SelectMenuItem>
            <SelectMenuItem>我是子菜单项7</SelectMenuItem>
            <SelectMenuItem>我是子菜单项8</SelectMenuItem>
            <SelectMenuItem>我是子菜单项9</SelectMenuItem>
            <SelectMenuItem>我是子菜单项10</SelectMenuItem>
            <SelectMenuItem>我是子菜单项11</SelectMenuItem>
            <SelectMenuItem>我是子菜单项12</SelectMenuItem>
            <SelectMenuItem>我是子菜单项13</SelectMenuItem>
            <SelectMenuItem>我是子菜单项14</SelectMenuItem>
            <SelectMenuItem>我是子菜单项15</SelectMenuItem>
          </SelectMenuChildLevel>

          <SelectMenuItem
            action="disabled"
            disabled
          >
            Disabled menu item
          </SelectMenuItem>
        </SelectMenuBody>
      </SelectMenuDropdown>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import {
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuItem,
  SelectMenuSubHeader,
  SelectMenuDivider,
  SelectMenuChildLevel,
  SelectMenuDropdown,
  SelectMenuTrigger
} from '@/'

const visibleChild3 = ref(true)
const visibleGrandson1 = ref(true)

function menuAction (key) {
  console.log(key)
}

</script>
