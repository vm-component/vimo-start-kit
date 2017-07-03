import Vue from 'vue'
import Router from 'vue-router'
const router = new Router({
  mode: 'hash', //   "hash" | "history" | "abstract";
  base: '/', // 默认值: "/",应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"。
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/pages/index.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: require('@/pages/components.vue')
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: require('@/pages/introduction.vue')
    }
  ]
})
Vue.use(Router)
export default router
