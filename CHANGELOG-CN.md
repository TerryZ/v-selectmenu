# Changelog

英文 changelog 内容请访问 [CHANGELOG](CHANGELOG.md)

## [3.0.2](https://github.com/TerryZ/v-selectmenu/compare/v3.0.2...v3.0.3) (2024-12-02)

### 功能改进

- `SelectMenuSection` 滚动条适应改进
- 多级菜单重新打开时，总是打开根菜单
- 多级菜单切换时，对 dropdown 内容容器进行重定位
- dropdown 内容容器样式调整

## [3.0.2](https://github.com/TerryZ/v-selectmenu/compare/v3.0.1...v3.0.2) (2024-11-29)

### 问题修复

- `SelectMenuDropdown` 下拉菜单相关的数据类型与工具函数的类型声明补充

## [3.0.1](https://github.com/TerryZ/v-selectmenu/compare/v3.0.0...v3.0.1) (2024-11-29)

### 问题修复

- 修复多级别菜单触发对象选择时，菜单会自动关闭
- 修复标题系列组件点击时，菜单会自动关闭

## [3.0.0](https://github.com/TerryZ/v-selectmenu) (2024-11-24)

### 新特性

- 使用 vue3 **composition api** 重构 `v-selectmenu`
- 工具链从 `webpack` 更换为 `vite`
- 单元测试库从 `mocha` 更换为 `vitest`
- 完全重构菜单的组织形式
