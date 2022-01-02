import Markdown from "vue3-markdown-it"
import 'highlight.js/styles/github.css';

export default (app) => {
    app.use(Markdown)
}
