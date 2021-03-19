import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);
const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#3f51b5',
          secondary: '#b0bec5',
          anchor: '#8c9eff',
          dark_navigation: '#c92fd4',
          tool_bar: '#efe4f2',
          btn_grey:'#e0e0e0'
        },
      },
    },
  })
export default vuetify
// export default new Vuetify({
    
// });
