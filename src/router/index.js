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
import NewOperative from '@/components/NewOperative'
import NewConsultation from '@/components/NewConsultation'
import AllSubordinates from '@/components/AllSubordinates'
import NewConsulInfo from '@/components/NewConsulInfo'
import NewOperDemo from '@/components/NewOperDemo'
import NewIecture from '@/components/NewIecture'
import NewTopic from '@/components/NewTopic'
import NewPaper from '@/components/NewPaper'
import NewLearning from '@/components/NewLearning'
import NewCustom from '@/components/NewCustom'

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
      path: '/new-operative',
      component: NewOperative
    },
    {
      path: '/new-consultation',
      component: NewConsultation
    },
    {
      path: '/new-custom',
      component: NewCustom
    },
    {
      path: '/all-subordinates',
      component: AllSubordinates
    },
    {
      path: '/new-consul-info',
      component: NewConsulInfo
    },
    {
      path: '/new-oper-demo',
      component: NewOperDemo
    },
    {
      path: '/new-iecture',
      component: NewIecture
    },
    {
      path: '/new-topic',
      component: NewTopic
    },
    {
      path: '/new-paper',
      component: NewPaper
    },
    {
      path: '/new-learning',
      component: NewLearning
    }
  ]
})
