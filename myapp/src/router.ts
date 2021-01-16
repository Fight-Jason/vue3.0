
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './view/Home.vue';
import Doc from './view/Doc.vue';
import Switch from './components/switchDemo.vue';
import Button from './components/ButtonDemo.vue';
import Dialog from './components/DialogDemo.vue';
import Tabs from './components/TabsDemo.vue';
import Markdown from '../src/components/Markdown.vue'
import { h } from 'vue';
const md = fileName => h(Markdown, { path: `../Markdown/${fileName}`, key: fileName });

const history  = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home },
        {path: '/doc', component: Doc ,
            children: [
                {
                    path: 'intro',
                    component: md('intor.md')
                },
                {
                    path: 'install',
                    component: md('install.md')
                },
                {
                    path: 'get-started',
                    component: md('get-started.md')
                },
                {
                    path: 'switch', 
                    component: Switch,
                },
                {
                    path: 'button', 
                    component: Button,
                },
                {
                    path: 'dialog', 
                    component: Dialog,
                },
                {
                    path: 'tabs', 
                    component: Tabs,
                },
            ]
        },
    ]
});
