import Vue from 'vue';
import Router from 'vue-router';
import RackDetail from '@/components/RackDetail';
import Search from '@/components/Search';
import Racks from '@/components/Racks';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
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
  ]
});
