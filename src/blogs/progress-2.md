---
title: （二）基础创建：路由、布局和视图
date: 2021-08-09 20:50:12
tags:
---

## 心得记录

vuetify3的安装需要vue cli4，然后可以用指令直接安装它和它的依赖：

	vue add vuetify

然后在main.js里创建app之后添加插件，详情见[官方文档](https://next.vuetifyjs.com/zh-Hans/getting-started/installation/)

在开发的过程中发现vuetify3alpha确实比起2有很多地方不完善，接下来会考虑使用element-plus来代替。

另外关于昨天添加包依赖的几个方法，我要对vue ui安装插件的优先级提升一下，这个东西还是蛮方便的。

接下来可能会重新搞一个项目，有些地方的配置当初没怎么注意，现在就容易出问题，还是稍微花点时间从头来过比较好。

## 今日进度

今天主要是创建一些基本的东西，路径及文件进行了以下的增减：

	[+]新增
	└─src
	    │
	    ├─components
	    │      header.vue
	    │
	    ├─layouts
	    │      blogLayout.vue
	    │      mainLayout.vue
	    │
	    ├─router
	    │      index.js
	    │
	    └─views
	        │  index.vue
	        │
	        └─blog
	                index.vue
	[-]删除
	└─src
	    │
	    └─components
	           HelloWorld.vue

### 路由(router)

路由的使用参考vue router的[官方文档](https://router.vuejs.org/zh)。这里我在@/router/index.js中定义了路由地址。建立了这个文件之后可以在main.js里import然后用app.add()方法添加插件，在vue组件里就能使用<router-view/>标签来展示路由返回的页面。

```js
import {createRouter, createWebHashHistory} from "vue-router";
const routes = [
    {
        path: '/',
        name: '主界面',
        component: () => import('@/layouts/mainLayout.vue')
    },
    {
        path: '/blog',
        name: '博客',
        component: () => import('@/layouts/blogLayout.vue'),
        children: [
            {
                path: '/',
                name: '博客列表',
                component: () => import('@/views/blog/index.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;
```

### 布局(layouts)

网页的布局。mainLayout对应主界面的布局，blogLayout对应博客界面的布局。在components里添加了一个header组件作为页首的菜单栏。布局目前由header和<router-view>标签组成，也就是有一个页眉，主体部分展示路由所管理的页面视图。vuetify的使用需要在最外面用<v-app>标签包裹里面的内容，这样设置他的组件的一个大小范围。

### 视图(views)

网页的主要视图。先创建了后面再完善。
