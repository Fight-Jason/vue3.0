
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './view/Home.vue';
import Doc from './view/Doc.vue';
import Switch from './components/switchDemo.vue';
import Button from './components/ButtonDemo.vue';
import Dialog from './components/DialogDemo.vue';
import Tabs from './components/TabsDemo.vue';
import Markdown from '../src/components/Markdown.vue'
import intor from './markdown/intor.md'
import install from './markdown/install.md'
import getStarted from './markdown/get-started.md'
import { h } from 'vue';
/*
    bugfix 2022-1-24
    rollup 不支持 import 拼接字符串
*/
// const md = fileName => h(Markdown, { path: `../Markdown/${fileName}`, key: fileName });
const md = String => h(Markdown, { content: String , key: String });

const history  = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home },
        {path: '/doc', component: Doc ,
            children: [
                {
                    path: '',
                    redirect: '/doc/intor'
                },
                {
                    path: 'intor',
                    component: md(intor)
                },
                {
                    path: 'install',
                    component: md(install)
                },
                {
                    path: 'get-started',
                    component: md(getStarted)
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
