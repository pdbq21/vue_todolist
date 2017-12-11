// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
// import router from './router';
import store from './vuex/store';

Vue.use(Vuex);
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  // provide the store using the "store" option.
  // this will inject the store instance to all child components.
  store,
  template: '<App/>',
  components: { App },
  // render: h => h(App),
});
