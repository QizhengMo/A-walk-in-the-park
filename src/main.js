import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueThreeSixty from 'vue-360'
import 'vue-360/dist/css/style.css'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueThreeSixty)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBGoP3uWTneSQHV2vNHkkp25SA8jdKg5Tg',
  },
  installComponents: true
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
