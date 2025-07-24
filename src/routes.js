import { createRouter, createWebHistory } from 'vue-router';
import RackDetail from '@/components/RackDetail.vue';
import Search from '@/components/Search.vue';
import Racks from '@/components/Racks.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Search
  },
  {
    path: '/bikeracks',
    name: 'bikeracks',
    component: Racks
  },
  {
    path: '/bikeracks/:id',
    name: 'bikerackdetail',
    component: RackDetail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
