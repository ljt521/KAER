import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/components/Mine'
import UserInfo from '@/components/UserInfo'
import Customer from '@/components/Customer'
import Dynamic from '@/components/Dynamic'
import EssentialInfo from '@/components/EssentialInfo'
import GrowthArchives from '@/components/GrowthArchives'
import FollowDetails from '@/components/FollowDetails'
import DynamicAssembly from '@/components/DynamicAssembly'
import NewLang from '@/components/NewLang'
import AcademicTeam from '@/components/AcademicTeam'
import AllSubordinates from '@/components/AllSubordinates'

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
          component: EssentialInfo,
        },
        {
          path: 'growth-archives',
          component: GrowthArchives
        },
        {
          path: 'follow-details',
          component: FollowDetails
        },
        {
          path: 'dynamic-assembly',
          component: DynamicAssembly
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
    },
    {
      path: '/academic-team',
      component: AcademicTeam
    },
    {
      path: '/new-lang',
      component: NewLang
    },
    {
      path: '/all-subordinates',
      component: AllSubordinates
    }
  ]
})
