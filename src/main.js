import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './routes';

// Import Big Shoulders Text font with CHISTAR ligature support
import './assets/fonts/big-shoulders-text.scss';

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.mount('#app');
