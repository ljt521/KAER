import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
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
import SetInfo from '@/components/SetInfo'
import SeeAll from '@/components/SeeAll'
import MyConcern from '@/components/MyConcern'

Vue.use(Router)
let notFound = {
  template: '<h2>该页面找不到了。。。</h2>'
}
export default new Router({

  routes: [
    {
      path: '*',
      component: notFound,
      meta: {
        title: '未知'
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {
        title: '我的'
      }
    }, {
      path: '/userInfo/:id',
      component: UserInfo,
      meta: {
        title: '个人信息'
      },
      children: [
        {
          path: 'essential-info/:id',
          component: EssentialInfo,
          meta: {
            title: '基本资料'
          }
        },
        {
          path: 'growth-archives',
          component: GrowthArchives,
          meta: {
            title: '成长档案'
          }
        },
        {
          path: 'follow-details',
          component: FollowDetails,
          meta: {
            title: '跟进详情'
          }
        },
        {
          path: 'dynamic-assembly',
          component: DynamicAssembly,
          meta: {
            title: '动态'
          }
        }
      ]
    }, {
      path: '/customer',
      name: 'Customer',
      component: Customer,
      meta: {
        title: '客户'
      }
    }, {
      path: '/dynamic',
      name: 'Dynamic',
      component: Dynamic,
      meta: {
        title: '动态'
      }
    },
    {
      path: '/academic-team',
      component: AcademicTeam,
      name: 'AcademicTeam',
      meta: {
        title: '新建学术团队'
      }
    },
    {
      path: '/new-lang',
      component: NewLang,
      name:"NewLang",
      meta: {
        title: '新建语种'
      }
    },
    {
      path: '/new-operative',
      component: NewOperative,
      name:"NewOperative",
      meta: {
        title: '新建手术量'
      }
    },
    {
      path: '/new-consultation',
      component: NewConsultation,
      name:"NewConsultation",
      meta: {
        title: '新建会诊量'
      }
    },
    {
      path: '/new-custom',
      component: NewCustom,
      meta: {
        title: '新建客户'
      }
    },
    {
      path: '/all-subordinates',
      component: AllSubordinates,
      meta: {
        title: '全部下属'
      }
    },
    {
      path: '/new-consul-info/:id',
      component: NewConsulInfo,
      name: 'NewConsulInfo',
      meta: {
        title: '新建会诊'
      }
    },
    {
      path: '/new-oper-demo',
      component: NewOperDemo,
      name: 'NewOperDemo',
      meta: {
        title: '新建手术演示'
      }
    },
    {
      path: '/new-iecture',
      component: NewIecture,
      name: 'NewIecture',
      meta: {
        title: '新建讲课'
      }
    },
    {
      path: '/new-topic',
      component: NewTopic,
      name: 'NewTopic',
      meta: {
        title: '新建参与课题'
      }
    },
    {
      path: '/new-paper',
      component: NewPaper,
      name: 'NewPaper',
      meta: {
        title: '新建论文发表'
      }
    },
    {
      path: '/new-learning',
      component: NewLearning,
      name: 'NewLearning',
      meta: {
        title: '新建学术参与'
      }
    },
    {
      path: '/set-info',
      component: SetInfo,
      meta: {
        title: '我的设置'
      }
    },
    {
      path: '/see-all',
      component: SeeAll,
      name: 'SeeAll',
      meta: {
        title: '查看全部'
      }
    },
    {
      path: '/my-concern',
      component: MyConcern,
      name: 'MyConcern',
      meta: {
        title: '我的关注'
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
  ]
})
