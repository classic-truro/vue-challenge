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
Vue.use(VueStripeCheckout, {
  key: 'pk_test_TYooMQauvdEDq54NiTphI7jx',
  image: 'https://cdn.meme.am/images/100x100/15882140.jpg',
  locale: 'auto',
  currency: 'PHP',
  billingAddress: true,
  panelLabel: 'Subscribe {{amount}}'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
