// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import PLATFORM_CONFIGS from './config/platform-configs'
import APP_CONFIGS from './config/app-configs'
import attachFastClick from 'fastclick'
import vimo from 'vimo'

new attachFastClick(document.body)
// 平台基础安装
Vue.use(vimo, {
  custConf: APP_CONFIGS,
  pltConf: PLATFORM_CONFIGS,
  router: router,
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
