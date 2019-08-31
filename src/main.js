import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueStripeCheckout from 'vue-stripe-checkout';
import StarRating from 'vue-star-rating'

import '@/assets/app.scss';

Vue.config.productionTip = false
Vue.use(BootstrapVue, axios);
Vue.component('star-rating', StarRating);
Vue.use(VueStripeCheckout, 'pk_test_TYooMQauvdEDq54NiTphI7jx');


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
