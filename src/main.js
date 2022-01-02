import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import installElementPlus from '@/plugins/element'
import installMarkdownIt from '@/plugins/markdownIt'

const app = createApp(App)
installElementPlus(app)
installMarkdownIt(app)
app.use(router).mount('#app')