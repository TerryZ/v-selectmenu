# [v-selectmenu](https://terryz.github.io/vue/#/selectpage) [![circle ci](https://circleci.com/gh/TerryZ/v-selectmenu.svg?style=svg)](https://circleci.com/gh/TerryZ/v-selectmenu) [![code coverage](https://codecov.io/gh/TerryZ/v-selectmenu/branch/master/graph/badge.svg)](https://codecov.io/gh/TerryZ/v-selectmenu) [![npm version](https://img.shields.io/npm/v/v-selectmenu.svg)](https://www.npmjs.com/package/v-selectmenu) [![npm download](https://img.shields.io/npm/dy/v-selectmenu.svg)](https://www.npmjs.com/package/v-selectmenu) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

SelectMenu for Vuejs, A simple, easier and highly customized menu solution

## Examples and Documentation

Live Examples on [CodePen](https://codepen.io/terry05/pen/WNeEZRd), more examples and documentation please visit below

- [English site](https://terryz.github.io/vue/#/selectmenu)
- [国内站点](https://terryz.gitee.io/vue/#/selectmenu)

The jQuery version: [SelectMenu](https://github.com/TerryZ/SelectMenu)

## Features

- i18n support, provide Chinese, English, Japanese languages
- regular menu multiple level support
- multiple group type support
- advanced menu mode with quick search
- keyboard to quick navigate in advanced menu mode
- custom row content render
- embedded to page
- mouse right click(contextmenu) or mouse move to call menu

## Plugin preview

*regular menu*

![regular](https://terryz.github.io/image/v-selectmenu/v-selectmenu-regular.png)

*regular menu with group type*

![regular-group](https://terryz.github.io/image/v-selectmenu/v-selectmenu-regular-group.png)

*advanced menu with group type*

![advanced](https://terryz.github.io/image/v-selectmenu/v-selectmenu-advanced.png)


## Installation

<a href="https://nodei.co/npm/v-selectmenu/"><img src="https://nodei.co/npm/v-selectmenu.png"></a>

``` bash
npm i v-selectmenu --save
```

Include plugin in your `main.js` file.

```js
import Vue from 'vue'
import vSelectMenu from 'v-selectmenu';
Vue.use(vSelectMenu, { global config options... });
```

## Usage (advanced menu mode by default)

```vue
<template>
  <v-selectmenu :data="list" v-model="value">
  </v-selectmenu>
</template>

<script>
  export default {
    data(){
      return {
        value: '',
        list: [
          { id: 1, name: 'Chicago Bulls', desc: '芝加哥公牛' },
          { id: 2, name: 'Cleveland Cavaliers', desc: '克里夫兰骑士' },
          { ... }
        ]
      }
    }
  }
</script>
```

## License

[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://mit-license.org/)

## Dependenics

- [v-dropdown](https://github.com/TerryZ/v-dropdown) - The dropdown container layer

## Vue plugin series

| Plugin | Status | Description |
| :---------------- | :-- | :-- |
| [v-page](https://github.com/TerryZ/v-page) | [![npm version](https://img.shields.io/npm/v/v-page.svg)](https://www.npmjs.com/package/v-page) | A simple pagination bar, including length Menu, i18n support |
| [v-dialogs](https://github.com/TerryZ/v-dialogs) | [![npm version](https://img.shields.io/npm/v/v-dialogs.svg)](https://www.npmjs.com/package/v-dialogs) | A simple and powerful dialog, including Modal, Alert, Mask and Toast modes |
| [v-tablegrid](https://github.com/TerryZ/v-tablegrid) | [![npm version](https://img.shields.io/npm/v/v-tablegrid.svg)](https://www.npmjs.com/package/v-tablegrid) | A simpler to use and practical datatable |
| [v-uploader](https://github.com/TerryZ/v-uploader) | [![npm version](https://img.shields.io/npm/v/v-uploader.svg)](https://www.npmjs.com/package/v-uploader) | A Vue2 plugin to make files upload simple and easier, <br>you can drag files or select file in dialog to upload |
| [v-ztree](https://github.com/TerryZ/v-ztree) | [![npm version](https://img.shields.io/npm/v/v-ztree.svg)](https://www.npmjs.com/package/v-ztree) | A simple tree for Vue2, support single or multiple(check) select tree, <br>and support server side data |
| [v-gallery](https://github.com/TerryZ/v-gallery) | [![npm version](https://img.shields.io/npm/v/v-gallery.svg)](https://www.npmjs.com/package/v-gallery) | A Vue2 plugin make browsing images in gallery |
| [v-region](https://github.com/TerryZ/v-region) | [![npm version](https://img.shields.io/npm/v/v-region.svg)](https://www.npmjs.com/package/v-region) | A simple region selector, provide Chinese administrative division data |
| [v-selectpage](https://github.com/TerryZ/v-selectpage) | [![npm version](https://img.shields.io/npm/v/v-selectpage.svg)](https://www.npmjs.com/package/v-selectpage) | A powerful selector for Vue2, list or table view of pagination, <br>use tags for multiple selection, i18n and server side resources supports |
| [v-suggest](https://github.com/TerryZ/v-suggest) | [![npm version](https://img.shields.io/npm/v/v-suggest.svg)](https://www.npmjs.com/package/v-suggest) | A Vue2 plugin for input suggestions by autocomplete |
| [v-playback](https://github.com/TerryZ/v-playback) | [![npm version](https://img.shields.io/npm/v/v-playback.svg)](https://www.npmjs.com/package/v-playback) | A Vue2 plugin to make video play easier |
| [v-selectmenu](https://github.com/TerryZ/v-selectmenu) | [![npm version](https://img.shields.io/npm/v/v-selectmenu.svg)](https://www.npmjs.com/package/v-selectmenu) | A simple, easier and highly customized menu solution |
