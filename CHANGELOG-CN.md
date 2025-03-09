# Changelog

英文 changelog 内容请访问 [CHANGELOG](CHANGELOG.md)

## [3.1.2](https://github.com/TerryZ/v-selectmenu/compare/v3.1.1...v3.1.2) (2025-03-09)

### 新特性

- `v-dropdown` 组件升级至 `v3.3.0`
- `SelectMenuTrigger` 默认 `rounded` 为 `medium`

## [3.1.1](https://github.com/TerryZ/v-selectmenu/compare/v3.1.0...v3.1.1) (2024-12-22)

### 功能改进

- `SelectMenuInput` 的 `loading` 应用 `disabled` 控制
- `SelectMenuInput` 的 `debounce` prop 默认值修改为 0
- Container root 自适应宽度
- `SelectMenuButton` mini 模式样式优化

## [3.1.0](https://github.com/TerryZ/v-selectmenu/compare/v3.0.3...v3.1.0) (2024-12-18)

### 新特性

- 新增 `SelectMenuInput` 输入框组件
- 新增 `SelectMenuButton` 按钮组件
- 新增 `SelectMenuBlock` 组件，作为行内纯布局组件
- 移除 `SelectMenuSearch` 组件

### 功能改进

- `SelectMenuGroup` 分组切换方式优化
- `SelectMenuColumn` 自动适应并平均分配宽度

## [3.0.3](https://github.com/TerryZ/v-selectmenu/compare/v3.0.2...v3.0.3) (2024-12-02)

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
