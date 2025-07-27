import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#41B6E6',
          secondary: '#E4002B',
          accent: '#E4002B'
        }
      },
      dark: {
        colors: {
          primary: '#41B6E6',
          secondary: '#E4002B',
          accent: '#E4002B'
        }
      }
    }
  }
});
