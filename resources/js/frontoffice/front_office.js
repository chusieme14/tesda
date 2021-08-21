require('../bootstrap');
window.Vue = require('vue');

import './src/assets/scss/main.scss'
import router from './src/router/index'
import vuetify from '@front/plugin/vuetify/index'
// import VueToast from 'vue-toast-notification';
// import VeeValidate from 'vee-validate';

// import 'vue-toast-notification/dist/index.css';
// Vue.use(VeeValidate);
// Vue.use(VueToast);
const axios = require('axios');

Vue.component('main-app', require('@front/layout/App.vue').default);

const app = new Vue({
    el:'#front_office',
    vuetify,
    router
});