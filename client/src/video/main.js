import Vue from 'vue'
import App from './App.vue'
import router from './router'

import vueAxios from 'vue-axios'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(vueAxios, axios)

Vue.config.productionTip = false


new Vue({
  router,
  render:h =>h(App)
}).$mount("#app")