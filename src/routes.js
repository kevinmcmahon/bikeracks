import Vue from 'vue';
import Router from 'vue-router';
import RackDetail from '@/components/RackDetail';
import Search from '@/components/Search';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Search
    },
    {
      path: '/bikeracks/:id',
      name: 'Bike Rack Detail',
      component: RackDetail
    }
  ]
});
