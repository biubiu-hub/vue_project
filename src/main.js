import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
import './assets/css/base.css'
import './assets/js/font.js'
// 引入路由
import router from './plugins/router.js'

import './plugins/axios'
// 全局过滤器
import date from './filters/date.js';
import {fillzero} from './filters/fillzero.js';
Vue.filter('date',date)
Vue.filter('fillzero',fillzero)

let vm =new Vue({
  data:{
      bNav:true,
      bFoot:true,
      bLoading:false
  },
 
  render: h => h(App),
  router
}).$mount('#app')
export default vm;
