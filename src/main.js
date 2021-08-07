import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'




Vue.prototype.$http = axios;
Vue.use(router);
Vue.use(Element);


new Vue({
  el:'#app',
  router,
  render: h => h(App),
}).$mount('#app')
