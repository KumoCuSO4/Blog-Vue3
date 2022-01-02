---
title: （四）界面及跳转
date: 2021-08-10 20:10:28
tags:
---

## 界面与路由

更新了一下路由，目前的界面跳转逻辑是先进入/主界面，然后点击按钮跳转到/blog，重定向到/blog/list加载博客列表，点击博客标题进入/blog/list/:blogName即该博客的页面，传递参数blogName来找到对应的博客。

### 路由

```js
{
    path: '/blog',
    name: '博客',
    redirect: '/blog/list',
    component: () => import('@/layouts/blogLayout.vue'),
    children: [
      {
        path: '/blog/list',
        name: '博客列表',
        component: () => import('@/views/blog/index.vue')
      },
      {
        path: '/blog/list/:blogName',
        name: '博客页面',
        component: () => import('@/views/blog/singleBlog.vue'),
        props: true
      }
    ]
  }
```

### 界面逻辑

**主界面：**

```vue
<template>
  <div>
    Hello world
    <router-link :to="{name: '博客'}">
      前往博客
    </router-link>
  </div>
</template>

<script>
export default {
name: "index"
}
</script>
```

**博客列表界面：**

```vue
<template>
  <div>
    这是博客页面
    <div v-for="blog in blogList" :key="blog.name">
      <h1 @click="direct('/blog/list/' + blog.name)">
        {{blog.title}}
      </h1>
      <div>
        {{blog.content}}
      </div>
    </div>
  </div>
</template>

<script>
import {getBlogListByPage} from "@/api/blog";

export default {
  name: "blog",
  data() {
    return {
      blogList: []
    }
  },
  methods: {
    direct(link) {
      if (this.$route.path !== link) {
        this.$router.push(link);
      }
    }
  },
  mounted() {
    this.blogList = getBlogListByPage(1)
  }
}
</script>
```

**博客界面：**

```vue
<template>
  <div>
    <h1>
      {{blog.title}}
    </h1>
    <p>
      {{blog.content}}
    </p>

  </div>
</template>

<script>
import {getBlog} from "@/api/blog";

export default {
  name: "singleBlog",
  props:['blogName'],
  data() {
    return {
      blog: {}
    }
  },
  mounted() {
    this.blog = getBlog(this.blogName)
  }
}
</script>
```

新增api接口getBlog, getBlogListByPage，并加了mock用来模拟后端进行测试。在博客列表页面准备做分页，会调用getBlogByPage获取该页的列表进行展示，以后会试试懒加载之类的。在博客页面调用getBlog得到博客的标题和内容并显示出来。

## 需要解决的

博客暂时打算以md文件进行存储，现在需要一个markdown的解析器来正常显示博客内容。

在博客列表界面中将光标放在标题上没有正确切换到一个手指的图标，也就是看不出这是可以点击的。