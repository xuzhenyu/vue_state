import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Count from '@/components/Count'
import RouterTest from '@/components/RouterTest'
import RouterGroup from '@/components/RouterGourp'
import RouterGroup01 from '@/components/RouterGourp01'

Vue.use(Router)

export default new Router({
  //mode:'history',
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path:'/count',
        component:Count
    },
    {
      path:'/routertest/:rtid/user/:name',
      component:RouterTest
    },
    {
      path:'/routergroup',
      component:RouterGroup,
      children:[{
        path:'routergroup01',
        component:RouterGroup01
      }]
    }
  ]
})
