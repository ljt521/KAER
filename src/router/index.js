import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/components/Mine'
import UserInfo from '@/components/UserInfo'
import Customer from '@/components/Customer'
import Dynamic from '@/components/Dynamic'
import EssentialInfo from '@/components/EssentialInfo'

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
      component: Mine
    }, {
      path: '/userInfo',
      component: UserInfo,
      children: [
        {
          path: 'essential-info',
          component: EssentialInfo
        }
      ]
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
