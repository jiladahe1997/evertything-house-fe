import Vue from 'vue'
import index from './index.vue'
import './index.css'

const axios = require('axios')

Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  render: h => h(index),
}).$mount('#app')
