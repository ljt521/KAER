// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false
const FastClick = require('fastclick')
FastClick.attach(document.body)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
