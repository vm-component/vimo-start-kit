import Vue from 'vue'
import AppComponent from './App'
import AttachFastClick from 'fastclick'
import Vimo from 'vimo/src/install'
import APP_CONFIGS from './config/app-configs'
import PLATFORM_CONFIGS from './config/platform-configs'
import router from './router'
import VueI18n from 'vue-i18n'
import langCN from './lang/cn'
import langEN from './lang/en'

import { App, Button, Buttons, Content, Footer, Header, Nav, Navbar, Page, Title, Toolbar } from 'vimo'

// -----------------
// 平台基础安装
Vue.use(Vimo, {
  custConf: APP_CONFIGS,
  pltConf: PLATFORM_CONFIGS,
  router: router
})

// 全局注册的组件(核心组件)
Vue.component(App.name, App)
Vue.component(Nav.name, Nav)
Vue.component(Navbar.name, Navbar)
Vue.component(Page.name, Page)
Vue.component(Header.name, Header)
Vue.component(Content.name, Content)
Vue.component(Footer.name, Footer)
Vue.component(Button.name, Button)
Vue.component(Toolbar.name, Toolbar)
Vue.component(Buttons.name, Buttons)
Vue.component(Title.name, Title)

// Create VueI18n instance with options
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'cn', // set locale
  fallbackLocale: 'cn',
  messages: {
    cn: langCN,
    en: langEN
  }
})

// fastclick init
/* eslint-disable no-new */
new AttachFastClick(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  template: '<AppComponent/>',
  mounted () {
    window.VM.platform.ready().then((data) => {
      console.log(`当前平台初始化完毕的信息: ${data}`)
    })
  },
  components: {
    AppComponent
  }
})

