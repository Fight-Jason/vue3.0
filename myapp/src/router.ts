
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './view/Home.vue';
import Doc from './view/Doc.vue';
import Switch from './components/switchDemo.vue';
import Button from './components/ButtonDemo.vue';
import Dialog from './components/DialogDemo.vue';
import Tabs from './components/Tabs.vue';

const history  = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home },
        {path: '/doc', component: Doc ,
            children: [
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
