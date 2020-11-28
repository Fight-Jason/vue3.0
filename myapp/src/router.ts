
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './view/Home.vue';
import Doc from './view/Doc.vue';
import Intro from './view/Intro.vue';
import Install from './view/Install.vue';
import GetStarted from './view/get-started.vue';
import Switch from './components/switchDemo.vue';
import Button from './components/ButtonDemo.vue';
import Dialog from './components/DialogDemo.vue';
import Tabs from './components/TabsDemo.vue';

const history  = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home },
        {path: '/doc', component: Doc ,
            children: [
                {
                    path: 'intro',
                    component: Intro,
                },
                {
                    path: 'install',
                    component: Install,
                },
                {
                    path: 'get-started',
                    component: GetStarted,
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
