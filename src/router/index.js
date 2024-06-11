import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入首页
import HomePage from '../views/FirstLevel/HomePage.vue'
// import { component } from 'vue/types/umd'

// 新加入的内容
// 引入自己的页面

Vue.use(VueRouter)

const routes = [
  // 主页面  /
  {
    path: '/',
    name: ' HomePage',
    component:  HomePage
  },

// 新加入的内容
// 陶瓷历史发展
  {
    path:'/DevelopmentHistory',
    name:'DevelopmentHistory',
    component:() => import('../views/FirstLevel/DevelopmentHistory.vue')
    
    
  },
  // 陶瓷名窑
  // {
  //   path:'/FamousCeramic',
  //   name:'FamousCeramic',
  //   component:() => import('../views/FirstLevel/FamousCeramic.vue'),
  //   children:[{
  //     path:'/FamousCeramic/RuView',
  //     component:()=>import('../views/FirstLevel/FamousceramicViews/RuView.vue')
  //   },]
  // },

  {
    path:'/FamousCeramic',
    name:'FamousCeramic',
    component:()=>import('../views/FirstLevel/FamousCeramic.vue')
  },

  // 陶瓷工艺
  {
    path:'/CeramicTechnology',
    name:'CeramicTechnology',
    component:() => import('../views/FirstLevel/CeramicTechnology.vue')
    
  },
  // 陶瓷展览
  {
    path:'/CeramicsExhibition',
    name:'CeramicsExhibition',
    component:() => import('../views/FirstLevel/CeramicsExhibition.vue')
    
  },
  // 首页--陶瓷色系--陶瓷色系二级界面
  {
    path:'/ColourScheme',
    name:'ColourScheme',
    component:() => import('../views/SeconedLevel/ColourScheme.vue')
    
  },
    // 首页--陶瓷色系--陶瓷色系三级界面
  {
    path:'/ColourThird',
    name:'ColourThird',
    component:() => import('../views/ThirdLevel/ColourThird.vue')
    
  },
  // 陶瓷名窑子界面
  // 下面内容为测试内容
  {
    path:'/TestView',
    name:'TestView',
    component:()=>import('../components/TestView.vue')

  },
  // 上面63-111行详情页面组件
  {  
    path: '/ceramics/:route', // 使用 :id 来捕获动态参数  
    name: 'ceramicDetail',  
    component: ()=>import('../components/CeramicDetail.vue'),  
    props: true // 这样你就可以在 CeramicDetail 组件中通过 props 访问到 id  
  }  
  


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
