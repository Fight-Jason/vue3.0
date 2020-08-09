import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'

import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './view/Home.vue';
import Doc from './view/Doc.vue';

const history  = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home },
        {path: '/xxx', component: Home },
    ]
});


const app = createApp(App)
app.use(router)
app.mount('#app')
