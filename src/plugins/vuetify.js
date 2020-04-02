import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#41B6E6',
        secondary: '#E4002B',
        accent: '#E4002B'
      }
    }
  }
});
