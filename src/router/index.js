import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'

Vue.use(Router)

export default new Router
({
  // mode: 'history', // 默认无刷新，取消注释则开启 h5 模式
  routes:
  [
    {
      path: '/',
      component: Index
    }
  ]
})
