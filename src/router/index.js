import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/components/Mine'
import UserInfo from '@/components/UserInfo'
import Customer from '@/components/Customer'
import Dynamic from '@/components/Dynamic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Mine
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      children: [{
        path: '/userInfo',
        component: UserInfo
      }]
    }, {
      path: '/customer',
      name: 'Customer',
      component: Customer
    }, {
      path: '/dynamic',
      name: 'Dynamic',
      component: Dynamic
    }
  ]
})
