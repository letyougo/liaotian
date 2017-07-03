// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'
Vue.config.productionTip = false
import store from './store/index'
console.log(store,'store')
/* eslint-disable no-new */
Vue.use(moment)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
