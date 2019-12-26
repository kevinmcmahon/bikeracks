import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './routes';

Vue.config.productionTip = false;
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCASZt72FBQ8InaXNVvX7hR82au3WnFqm0',
    libraries: 'places' // necessary for places input
  },
  installComponents: true
});

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app');
