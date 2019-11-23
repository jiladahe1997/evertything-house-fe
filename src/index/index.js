import Vue from 'vue'
import index from './index.vue'
import './index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(index),
}).$mount('#app')
