import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import {
  VApp,
  VAppBar,
  VMain,
  VBtn,
  VImg,
  VIcon,
  VSpacer,
  VCard,
  VCardActions,
  VForm,
  VTextField,
  VTable,
  VFooter
} from 'vuetify/components';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { mdiOpenInNew } from '@mdi/js';

export default createVuetify({
  components: {
    VApp,
    VAppBar,
    VMain,
    VBtn,
    VImg,
    VIcon,
    VSpacer,
    VCard,
    VCardActions,
    VForm,
    VTextField,
    VTable,
    VFooter
  },
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      openInNew: mdiOpenInNew,
    },
    sets: {
      mdi,
    },
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
