import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Banner from '@/components/Banner'

Vue.use(Router)

export default new Router
({
  // mode: 'history', // 默认无刷新，取消注释则开启 h5 模式
  routes:
  [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Banner/:color',
      name: 'Banner',
      component: Banner
    }
  ]
})
