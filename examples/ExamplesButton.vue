<template>
  <div>
    <h5>Button</h5>
    <div class="d-flex gap-3 flex-wrap">
      <SelectMenuDropdown>
        <template #trigger>
          <SelectMenuTrigger />
        </template>
        <SelectMenuBody>
          <SelectMenuHeader>Rounded</SelectMenuHeader>
          <SelectMenuButton
            rounded="small"
            block
          >
            button
          </SelectMenuButton>
          <SelectMenuBlock>
            <SelectMenuButton
              rounded="medium"
              :loading="loading"
              @click="handleClick"
            >
              button
              <template #append>
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
              </template>
            </SelectMenuButton>
          </SelectMenuBlock>

          <SelectMenuButton rounded="large">
            <template #prepend>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-left-circle sm-icon"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                />
              </svg>
            </template>
            button
          </SelectMenuButton>

          <SelectMenuButton
            rounded="pill"
          >
            <template #prepend>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-left-circle sm-icon"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                />
              </svg>
            </template>
            button
            <template #append>
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
            </template>
          </SelectMenuButton>

          <SelectMenuBlock>
            <SelectMenuButton
              rounded="pill"
              block
            >
              <template #prepend>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-left-circle sm-icon"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                  />
                </svg>
              </template>
              button
              <template #append>
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
              </template>
            </SelectMenuButton>
          </SelectMenuBlock>

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
        </SelectMenuBody>
      </SelectMenuDropdown>

      <SelectMenuDropdown>
        <template #trigger>
          <SelectMenuTrigger />
        </template>
        <SelectMenuBody>
          <SelectMenuHeader>Size</SelectMenuHeader>
          <SelectMenuButton
            :loading="true"
            @click="showClickLog"
          >
            button
          </SelectMenuButton>
          <SelectMenuButton size="small">
            small button
          </SelectMenuButton>

          <SelectMenuButton size="mini">
            mini button
          </SelectMenuButton>
          <SelectMenuBlock>
            <SelectMenuButton
              :loading="true"
              @click="showClickLog"
            >
              button
            </SelectMenuButton>
          </SelectMenuBlock>
          <SelectMenuBlock>
            <SelectMenuButton size="small">
              small button
            </SelectMenuButton>
          </SelectMenuBlock>
          <SelectMenuBlock>
            <SelectMenuButton size="mini">
              mini button
            </SelectMenuButton>
          </SelectMenuBlock>
        </SelectMenuBody>
      </SelectMenuDropdown>

      <SelectMenuDropdown>
        <template #trigger>
          <SelectMenuTrigger />
        </template>
        <SelectMenuBody>
          <SelectMenuHeader>
            Header
            <template #append>
              <SelectMenuButton
                size="mini"
              >
                12
              </SelectMenuButton>
            </template>
          </SelectMenuHeader>
          <SelectMenuItem>
            Menu item
            <template #append>
              <SelectMenuButton
                size="mini"
              >
                disabled
              </SelectMenuButton>
            </template>
          </SelectMenuItem>
          <SelectMenuSubHeader>
            Header
            <template #append>
              <SelectMenuButton
                size="mini"
                style="background-color: red;color: white;"
              >
                3
              </SelectMenuButton>
            </template>
          </SelectMenuSubHeader>
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
  SelectMenuBlock,
  SelectMenuHeader,
  SelectMenuSubHeader,
  SelectMenuBody,
  SelectMenuButton
} from '../src'

const loading = ref(false)

function handleClick () {
  if (loading.value) return

  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 3000)
}
function showClickLog () {
  console.log('clicked')
}
</script>
