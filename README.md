# [v-selectmenu](https://terryz.github.io/vue/#/selectmenu) [![circle ci](https://circleci.com/gh/TerryZ/v-selectmenu.svg?style=svg)](https://circleci.com/gh/TerryZ/v-selectmenu) [![code coverage](https://codecov.io/gh/TerryZ/v-selectmenu/branch/master/graph/badge.svg)](https://codecov.io/gh/TerryZ/v-selectmenu) [![npm version](https://img.shields.io/npm/v/v-selectmenu.svg)](https://www.npmjs.com/package/v-selectmenu) [![npm download](https://img.shields.io/npm/dy/v-selectmenu.svg)](https://www.npmjs.com/package/v-selectmenu) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
