// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import Layout from '@/components/Layout'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
