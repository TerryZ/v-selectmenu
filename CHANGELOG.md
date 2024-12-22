# Changelog

Please refer to [CHANGELOG-CN](CHANGELOG-CN.md) for Chinese changelog

## [3.1.1](https://github.com/TerryZ/v-selectmenu/compare/v3.1.0...v3.1.1) (2024-12-22)

### Improvements

- `SelectMenuInput`'s `loading` uses `disabled` control
- `SelectMenuInput`'s `debounce` prop default value changed to 0
- Container root adaptive width
- `SelectMenuButton` mini mode style optimization

## [3.1.0](https://github.com/TerryZ/v-selectmenu/compare/v3.0.3...v3.1.0) (2024-12-18)

### Features

- Added `SelectMenuInput` input box component
- Added `SelectMenuButton` button component
- Added `SelectMenuBlock` component as an inline pure layout component
- Removed `SelectMenuSearch` component

### Improvements

- `SelectMenuGroup` group switching method optimization
- `SelectMenuColumn` automatically adapts and evenly distributes width

## [3.0.3](https://github.com/TerryZ/v-selectmenu/compare/v3.0.2...v3.0.3) (2024-12-02)

### Improvements

- `SelectMenuSection` scrollbar adaptation improvement
- When reopening a multilevel menu, always open the root menu
- When switching multilevel menus, reposition the dropdown content container
- Adjust the style of the dropdown content container

## [3.0.2](https://github.com/TerryZ/v-selectmenu/compare/v3.0.1...v3.0.2) (2024-11-29)

### Bug Fixes

- Supplementary data type declarations for `SelectMenuDropdown` and utility functions

## [3.0.1](https://github.com/TerryZ/v-selectmenu/compare/v3.0.0...v3.0.1) (2024-11-29)

### Bug Fixes

- Fixed the issue that the menu will automatically close when the multi-level menu triggers object selection
- Fixed the issue that the menu will automatically close when the title series component is clicked

## [3.0.0](https://github.com/TerryZ/v-selectmenu) (2024-11-24)

### Features

- The `v-selectmenu` component has been refactored using Vue 3 **composition API**
- The build tool has been switched from `Webpack` to `Vite`
- The unit testing library has been switched from `Mocha` to `Vitest`
- Completely redesigned the menu organization
