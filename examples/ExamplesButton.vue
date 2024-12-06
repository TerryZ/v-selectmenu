<template>
  <div>
    <h5>Button</h5>
    <div>
      <SelectMenuBody class="border rounded-3 shadow-sm">
        <SelectMenuItem>
          <SelectMenuButton rounded="small">
            button
          </SelectMenuButton>
        </SelectMenuItem>
        <SelectMenuItem>
          <SelectMenuButton rounded="medium">
            button
          </SelectMenuButton>
        </SelectMenuItem>

        <SelectMenuItem>
          <SelectMenuButton rounded="large">
            button
          </SelectMenuButton>
        </SelectMenuItem>

        <SelectMenuItem>
          <SelectMenuButton rounded="pill">
            button
          </SelectMenuButton>
        </SelectMenuItem>
      </SelectMenuBody>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  SelectMenuItem,
  SelectMenuHeader,
  SelectMenuBody,
  SelectMenuDivider,
  SelectMenuButton
} from '@/'
</script>
