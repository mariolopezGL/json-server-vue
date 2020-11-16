import Vue from 'vue'
import App from './App.vue'
import store from './store/index';
import router from './router';
import './assets/tailwind.css';

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');