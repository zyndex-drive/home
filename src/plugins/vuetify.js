import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import minifyCssString from 'minify-css-string';

Vue.use(Vuetify);

let options = {
  theme: {
    themes: {
      light: {
        primary: '#F44336',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        primary: '#F44336',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
    options: {
      minifyTheme: minifyCssString,
    },
  },
};

export default new Vuetify(options);
