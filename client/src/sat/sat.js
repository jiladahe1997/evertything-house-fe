import "./sat.css"
import Vue from 'vue'
import sat from './sat.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(sat),
}).$mount('#app')
