import RackDetailComponent from '@/components/RackDetailComponent.vue';
import { createRouter, createWebHistory } from 'vue-router';
import RacksComponent from './components/RacksComponent.vue';
import SearchComponent from './components/SearchComponent.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: SearchComponent,
    },
    {
        path: '/bikeracks',
        name: 'bikeracks',
        component: RacksComponent,
    },
    {
        path: '/bikeracks/:id',
        name: 'bikerackdetail',
        component: RackDetailComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
