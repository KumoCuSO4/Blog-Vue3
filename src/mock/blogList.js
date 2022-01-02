
export const blogList = [
    {
        name: "hello-world",
        title: "Hello World",
        content:
            "Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).\n" +
            "\n" +
            "## Quick Start\n" +
            "\n" +
            "### Create a new post\n" +
            "\n" +
            "``` bash\n" +
            "$ hexo new \"My New Post\"\n" +
            "```\n" +
            "\n" +
            "More info: [Writing](https://hexo.io/docs/writing.html)\n" +
            "\n" +
            "### Run server\n" +
            "\n" +
            "``` bash\n" +
            "$ hexo server\n" +
            "```\n" +
            "\n" +
            "More info: [Server](https://hexo.io/docs/server.html)\n" +
            "\n" +
            "### Generate static files\n" +
            "\n" +
            "``` bash\n" +
            "$ hexo generate\n" +
            "```\n" +
            "\n" +
            "More info: [Generating](https://hexo.io/docs/generating.html)\n" +
            "\n" +
            "### Deploy to remote sites\n" +
            "\n" +
            "``` bash\n" +
            "$ hexo deploy\n" +
            "```\n" +
            "\n" +
            "More info: [Deployment](https://hexo.io/docs/one-command-deployment.html)"

    },
    {
        name: "progress-1",
        title: "（一）从零开始的Vue前端搭建",
        content:
            "## 前言\n" +
            "\n" +
            "首先这并不是教程，这是一个Vue前端开发的记录与心得系列，用来记录一个纯小白的学习经历和开发历程，其中可能有相当多的错误和不足之处，欢迎大家指出任何的问题。接下来准备每天更新一次博客，督促自己绝不拖延绝不摆烂。\n" +
            "\n" +
            "\n" +
            "\n" +
            "## 今日开发进度\n" +
            "\n" +
            "### 项目创建\n" +
            "\n" +
            "本项目基于vue3.x, vue-cli4.x，使用ide主要为webstorm。（vue-cli需要3.0以上的版本为了使用vue ui，至于为什么要用vue3呢...，新就是好！×）\n" +
            "\n" +
            "webstorm选择创建vue项目，创建时默认为vue2.x版本。（后来发现如果想创建vue3的项目其实不该这么做，遇到的问题如[下文](#问题)）\n" +
            "\n" +
            "package.json的包配置如下：\n" +
            "\n" +
            "```js\n" +
            "  \"dependencies\": {\n" +
            "    \"core-js\": \"^3.6.5\",\n" +
            "    \"vue\": \"^3.1.5\",\n" +
            "    \"vue-router\": \"^4.0.11\",\n" +
            "    \"vuetify\": \"^3.0.0-alpha.10\"\n" +
            "  },\n" +
            "  \"devDependencies\": {\n" +
            "    \"@vue/cli-plugin-babel\": \"~4.5.0\",\n" +
            "    \"@vue/cli-plugin-eslint\": \"~4.5.0\",\n" +
            "    \"@vue/cli-service\": \"~4.5.0\",\n" +
            "    \"@vue/compiler-sfc\": \"^3.1.5\",\n" +
            "    \"babel-eslint\": \"^10.1.0\",\n" +
            "    \"eslint\": \"^6.7.2\",\n" +
            "    \"eslint-plugin-vue\": \"^6.2.2\"\n" +
            "  },\n" +
            "```\n" +
            "\n" +
            "这里改了vue的版本到3.x。目前添加了vue-router（用于管理路由）、vuetify（提供了优秀的ui组件）【目前兼容vue3.x的vuetify3仍是alpha版本，可能会有未知的问题】。后续看情况再添加。\n" +
            "\n" +
            "添加包可以通过：\n" +
            "\n" +
            "1、在package.json中添加完后执行yarn install （用npm也是同理）\n" +
            "\n" +
            "2、执行yarn add <包名> ...（感觉不如第一种方便）\n" +
            "\n" +
            "3、使用可视化管理工具（见[下文](#可视化)，看着方便不过感觉也不如第一种来的简单直接）\n" +
            "\n" +
            "\n" +
            "\n" +
            "<h4 id=\"问题\">启动的过程中遇到的问题</h4>\n" +
            "\n" +
            "**问题一：**\n" +
            "\n" +
            "\tError: Cannot find module '@vue/compiler-sfc/package.json'\n" +
            "\n" +
            "**参考：**[upgrade - After upgrading to vue 3 : \"Cannot find module '@vue/compiler-sfc/package.json' \" - Stack Overflow](https://stackoverflow.com/questions/63863222/after-upgrading-to-vue-3-cannot-find-module-vue-compiler-sfc-package-json)\n" +
            "\n" +
            "**原因：**\n" +
            "\n" +
            "vue-template-compiler只适用于vue2，vue3应该使用@vue/compiler-sfc。\n" +
            "\n" +
            "**解决方法：**\n" +
            "\n" +
            "```\n" +
            "yarn add vue@next\n" +
            "yarn add @vue/compiler-sfc -D\n" +
            "yarn remove vue-template-compiler\n" +
            "```\n" +
            "\n" +
            "\n" +
            "\n" +
            "**问题二：**\n" +
            "\n" +
            "\t warning  in ./src/main.js\n" +
            "\t\"export 'default' (imported as 'Vue') was not found in 'vue'\n" +
            "\n" +
            "**参考：**[vue.js - \"export 'default' (imported as 'Vue') was not found in 'vue' - Stack Overflow](https://stackoverflow.com/questions/63768491/export-default-imported-as-vue-was-not-found-in-vue)\n" +
            "\n" +
            "**原因：**\n" +
            "\n" +
            "> The reason this is happening is because in Vue 2, Vue provides a default export `export default vue`, which allows BootstrapVue to use `import Vue from 'vue'`.\n" +
            ">\n" +
            "> However, in Vue 3 this has changed, and Vue does no longer provide a default export, and instead uses named exports. So when BootstrapVue uses the following line `import Vue from 'vue'`, the error occurs.\n" +
            "\n" +
            "**解决：**\n" +
            "\n" +
            "main.js里改掉：\n" +
            "\n" +
            "```js\n" +
            "import {createApp} from 'vue'\n" +
            "import App from './App.vue'\n" +
            "\n" +
            "const app = createApp(App);\n" +
            "app.mount('#app');\n" +
            "```\n" +
            "\n" +
            "也许一开始就不该贪省事webstorm里直接创建项目了，不过就将错就错吧。\n" +
            "\n" +
            "\n" +
            "\n" +
            "**问题三：**\n" +
            "\n" +
            "\t WARN  \n" +
            "\tCouldn't parse bundle asset \"...\\dist\\js\\chunk-vendors.js\".\n" +
            "\tAnalyzer will use module sizes from stats file.\n" +
            "\n" +
            "**原因：**\n" +
            "\n" +
            "未知\n" +
            "\n" +
            "\n" +
            "\n" +
            "<h4 id=\"可视化\">项目可视化管理工具 </h4>\n" +
            "\n" +
            "vue-cil3.0+的版本中加入了一个可视化的管理工具，提供了很多方便，通过命令行输入以下指令启动：\n" +
            "\n" +
            "\tvue ui\n" +
            "\n" +
            "没有此功能代表版本过低，需要更新。\n" +
            "\n" +
            "查看版本：\n" +
            "\n" +
            "\tvue -V\n" +
            "\n" +
            "更新：\n" +
            "\n" +
            "\tnpm uninstall vue-cli -g\n" +
            "\tnpm install @vue/cli -g\n" +
            "工具启动，默认使用的是本地的8000端口，若端口被占用则会开启在其他端口，程序会自动打开浏览器进入，大致页面：\n" +
            "\n" +
            "{% asset_img 2.png %}\n" +
            "\n" +
            "仪表盘界面可以自定义，能添加任务的快捷启动；插件界面和依赖界面能对插件、依赖进行管理和添加。配置界面可以管理一些基本设置；任务界面能执行vue-cli-service的任务以及package.json中定义的任务。\n" +
            "\n" +
            "vue ui对我来说非常不错的地方在于这里可以看到很多的分析数据，非常方便，有一个直接明了的ui让人神清气爽。\n" +
            "\n" +
            "{% asset_img 3.png %}\n" +
            "\n" +
            "{% asset_img 4.png %}"
    }
]