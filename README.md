<br><br>

<h3 align="center">v-selectmenu</h3>

<br>

<p align="center"><img src="https://terryz.github.io/image/v-selectmenu/v-selectmenu-advance.png" alt="v-selectmenu" ></p>

<p align="center">
  <a href="https://www.npmjs.com/package/v-selectmenu"><img src="https://img.shields.io/npm/v/v-selectmenu.svg"></a>
  <a href="https://mit-license.org/"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg"></a>
  <a href="https://www.npmjs.com/package/v-selectmenu"><img src="https://img.shields.io/npm/dy/v-selectmenu.svg"></a>
  <a href="https://www.npmjs.com/package/v-selectmenu"><img src="https://img.shields.io/badge/language-javascript%20%2F%20vue-blue.svg"></a>
</p>

<p align="center">
  A simple, easier and highly customized menu solution for <strong>Vue2</strong>
</p>

<br><br><br><br><br>

## Demos and Documents
Explorer on

- [English site](https://terryz.github.io/vue/#/selectmenu)
- [国内站点](https://terryz.gitee.io/vue/#/selectmenu)

The jQuery version: [SelectMenu](https://github.com/TerryZ/SelectMenu)

**If you think this project is helpful, please star it.**

<br><br>

## Features

- i18n support, provide Chinese, English, Japanese languages
- regular menu multiple level support
- multiple group type support
- advanced menu mode with quick search
- keyboard to quick navigate in advanced menu mode
- custom row content render
- embedded to page
- mouse right click(contextmenu) or mouse move to call menu

<br><br>

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

<br><br>

## Plugin preview

*regular menu*

![regular](https://terryz.github.io/image/v-selectmenu/v-selectmenu-regular.png)

*regular menu group type*

![regular-group](https://terryz.github.io/image/v-selectmenu/v-selectmenu-regular-group.png)

*advanced menu group type*

![advanced](https://terryz.github.io/image/v-selectmenu/v-selectmenu-advance.png)

<br><br>

## Install

``` bash
npm install v-selectmenu --save
```

Include plugin in your `main.js` file.

```js
import Vue from 'vue'
import vSelectMenu from 'v-selectmenu';
Vue.use(vSelectMenu, { global config options... });
```

<a href="https://nodei.co/npm/v-selectmenu/"><img src="https://nodei.co/npm/v-selectmenu.png"></a>

## Deploy on your component(default advanced mode)


```vue
<template>
    <v-selectmenu :data="list" class="form-control" v-model="value">
    </v-selectmenu>
</template>

<script>
    export default {
        data(){
            return {
                value: '',
                list: [
                    {id:1 ,name:'Chicago Bulls',desc:'芝加哥公牛'},
                    {id:2 ,name:'Cleveland Cavaliers',desc:'克里夫兰骑士'},
                    {...}
                ]
            };
        }
    };
</script>
```
