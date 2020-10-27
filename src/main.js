import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueThreeSixty from 'vue-360'

Vue.use(VueThreeSixty)
import 'vue-360/dist/css/style.css'
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
