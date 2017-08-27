import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Project from '@/components/ProJect'
import Aboutus from '@/components/AboutUs'
import Detail from '@/components/Detail'
import ProjectHome from '@/components/ProjectHome'
import News from '@/components/NewS'
import NewsDetail from '@/components/NewsDetail'
import NewsHome from  '@/components/NewsHome'
import Job from  '@/components/Job'
import siderbar from '@/components/siderbar'
import AdminSiderBar from "@/components/AdminSiderBar"
import Pictured from '@/components/Pictured'
Vue.use(Router);
// Vue.component('Home', Home)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        'content':Home,
        'sider': siderbar
      },
    },
    {
      path:'/site/project',
      name:'Project',
      component:Project,
      children:[{path:'/detail',component:Detail},{path:'/',component:ProjectHome}]
    },
    {
      path:'/site/aboutus',
      name:'Aboutus',
      component:Aboutus
    },
    {
      path:'/site/news',
      name:'News',
      component:News,
      children:[{path:'/newsdetail',component:NewsDetail},{path:'/',component:NewsHome}]
    },
    {
      path:'/site/applicationentry',
      name:'Job',
      component:Job,
    },
    {
      path:'/admin',
      name: 'Pictured',
      components:{
        'content':Pictured,
        'sider': AdminSiderBar
      },
      children:
        [{path:'/pictured',components:{
          'content':Pictured,
          'sider': AdminSiderBar
        }}],
    }
  ]
})
