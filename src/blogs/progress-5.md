---
title: （五）博客的Markdown展示
date: 2021-08-12 22:03:54
tags:
---

## 安装Markdown解析插件

先是装了MavonEditor，但是添加了以后似乎有bug，查了一下好像是不兼容vue3。然后又去找了能兼容的，最后装了vue3-markdown-it。

### 插件引入

plugins目录下新建一个markdownIt.js文件

```js
import Markdown from "vue3-markdown-it"
import 'highlight.js/styles/monokai.css';

export default (app) => {
    app.use(Markdown)
}
```

然后在main.js里调用

```js
import installMarkdownIt from './plugins/markdownIt'

installElementPlus(app)
```

## 小笔记

vue的标签属性里，:是v-bind:的缩写，可以在属性里连接变量的值；@是v-on:的缩写，用于触发事件（如@click点击事件）



今天摸鱼，明天再写。