import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/SearchComponent.vue'),
    },
    {
        path: '/bikeracks',
        name: 'bikeracks',
        component: () => import('@/components/RacksComponent.vue'),
    },
    {
        path: '/bikeracks/:id',
        name: 'bikerackdetail',
        component: () => import('@/components/RackDetailComponent.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
