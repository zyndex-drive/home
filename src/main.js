import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store, { mutations, getters } from './plugins/state';
import moment from 'vue-moment';
import lodash from 'lodash';
import axios from 'axios';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import { gsap } from 'gsap';
import EventBus from './EventBus';
import vuetify from './plugins/vuetify';
import '@/styles/register.scss';
import 'swiper/swiper-bundle.css';

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(moment);
Vue.prototype.$axios = axios;
Vue.prototype.$gsap = gsap;
Vue.prototype.$Eventbus = EventBus;
Vue.prototype.$lodash = lodash;

Vue.prototype.$state = {
  store: store,
  mutate: mutations,
  get: getters,
};

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
