import "./sat.css"
import Vue from 'vue'
import sat from './sat.vue'
const axios = require('axios')

Vue.prototype.axios = axios


Vue.config.productionTip = false

new Vue({
  render: h => h(sat),
}).$mount('#app')
