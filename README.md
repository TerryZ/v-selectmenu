# [v-selectmenu](https://terryz.github.io/vue/#/selectmenu) [![CircleCI](https://dl.circleci.com/status-badge/img/gh/TerryZ/v-selectmenu/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/TerryZ/v-selectmenu/tree/master) [![codecov](https://codecov.io/gh/TerryZ/v-selectmenu/branch/master/graph/badge.svg?token=9L4eMOTMJL)](https://codecov.io/gh/TerryZ/v-selectmenu) [![npm version](https://img.shields.io/npm/v/v-selectmenu.svg)](https://www.npmjs.com/package/v-selectmenu) [![npm download](https://img.shields.io/npm/dy/v-selectmenu.svg)](https://www.npmjs.com/package/v-selectmenu) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

SelectMenu for Vue3, A simple, easier and highly customized menu solution

## Examples and Documentation

Documentation and examples please visit below sites

- [github pages](https://terryz.github.io/docs-vue3/selectmenu/)

The jQuery version: [SelectMenu](https://github.com/TerryZ/SelectMenu)

## Features

- Provide layout management
- Provide search components
- Provide a variety of custom slots
- Support single-select or multi-select mode menu items
- Support multiple groups
- Support multiple levels
- Each functional component can be flexibly combined and applied

## Installation

<a href="https://nodei.co/npm/v-selectmenu/"><img src="https://nodei.co/npm/v-selectmenu.png"></a>

``` bash
# npm
npm i v-selectmenu
# yarn
yarn add v-selectmenu
# pnpm
pnpm add v-selectmenu
```

## Components

- **SelectMenuDropdown** The dropdown container
- **SelectMenuTrigger** Built-in dropdown trigger button
- **SelectMenuBody** The menu root container
- **SelectMenuSection** The menu section container
- **SelectMenuRow** Align content horizontally
- **SelectMenuColumn** Align content vertically
- **SelectMenuHeader** Menu main header item
- **SelectMenuSubHeader** Menu sub header item
- **SelectMenuDivider** Menu divider
- **SelectMenuGroup** Menu group container
- **SelectMenuGroupItem** Menu group item
- **SelectMenuChildLevel** Child level menu container
- **SelectMenuSearch** Menu search input component
- **SelectMenuItem** Menu item
- **SelectMenuCheckboxGroup** Menu checkbox group
- **SelectMenuCheckboxItem** Menu checkbox item
- **SelectMenuRadioGroup** Menu radio group
- **SelectMenuRadioItem** Menu radio item

## Usage

```vue
<template>
  <SelectMenuDropdown>
    <template #trigger>
      <SelectMenuTrigger />
    </template>
    <SelectMenuBody @action="handleAction">
      <SelectMenuHeader>SelectMenu</SelectMenuHeader>
      <SelectMenuItem action="item1">Menu item 1</SelectMenuItem>
      <SelectMenuItem action="item2" disabled>Menu item 2</SelectMenuItem>
      <SelectMenuItem action="item3">Menu item 3</SelectMenuItem>
    </SelectMenuBody>
  </SelectMenuDropdown>
</template>

<script setup>
import {
  SelectMenuDropdown,
  SelectMenuTrigger,
  SelectMenuBody,
  SelectMenuHeader,
  SelectMenuItem
} from 'v-selectmenu'

function handleAction (action) {
  console.log(action)
}
</script>
```

## License

[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/)

## Dependencies

- [v-dropdown](https://github.com/TerryZ/v-dropdown) - The dropdown container layer
