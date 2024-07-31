import {createWebHashHistory,createRouter} from 'vue-router'
import App from './App.vue';
import loginComp from './components/loginComp.vue';

const routes = [
    {
        name:'app',
        path: '/',
        component:App,

    },
    {
        name: 'login',
        path: '/login',
        component:loginComp,
    }
];
const router =  createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;
export default router;
export default router;
export default router;
export default router;

// this is main code bro