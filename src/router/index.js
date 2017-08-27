import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import orderList from '@/pages/orderList'
import detail from '@/pages/detail/detail'
import count from '@/pages/detail/count'
import forecast from '@/pages/detail/forecast'
import analysis from '@/pages/detail/analysis'
import publish from '@/pages/detail/publish'

Vue.use(Router)

export default new Router
({
  // mode: 'history', // 默认无刷新，取消注释则开启 h5 模式
  routes:
  [
    {
      path: '/',
      component: index
    },
    {
      path: '/detail',
      component: detail,
      redirect: '/detail/count',  //重定向
      children:
      [
        {
          path: 'count',
          component: count
        },
        {
          path: 'forecast',
          component: forecast
        },
        {
          path: 'analysis',
          component: analysis
        },
        {
          path: 'publish',
          component: publish
        }
      ]
    },
    {
      path: '/orderList',
      component: orderList
    }
  ]
})
