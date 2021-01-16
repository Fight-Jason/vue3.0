// @ts-nocheck
import './lib/gulu.scss';
import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import { router } from './router'
import 'github-markdown-css'
import Markdown from '../src/components/Markdown.vue'
const app = createApp(App)
app.use(router)
// global use component
app.component("Markdown", Markdown)
app.mount('#app')
