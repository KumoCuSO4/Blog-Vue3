---
title: (三)/remake
date: 2021-08-10 20:10:28
tags:
---

创建和安装包依赖这方面算是摸清楚了，重新进行一个项目的创建。

## 重建项目

首先确保vue-cli版本为4.0+。运行：

```
vue create <项目名称>
```

选择vue3。然后等他创建完毕就行了。

接下来打开vue ui，导入这个项目，然后添加插件：vue-router, vue-cli-plugin-element-plus

添加好插件他会自动生成文件夹router、plugins、views，有一些演示的内容，并且对main.js和App.vue进行了修改，自动帮你把包引入了，确实方便。

## 组件

换成element-plus之后组件得重新搞一搞了，参考了[官方文档](https://element-plus.gitee.io/#/zh-CN/)。

### 顶栏(header)

