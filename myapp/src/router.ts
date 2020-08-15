
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './view/Home.vue';
import Doc from './view/Doc.vue';
import Switch from './components/switch.vue';

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
                }
            ]
        },
    ]
});
