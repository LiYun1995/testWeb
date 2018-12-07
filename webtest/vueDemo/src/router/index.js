import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FormBd from '@/components/formBd'
import Fucie from '@/components/fucIE'
import Editor from '@/components/Editor'
import PostMovie from '@/components/postMovie'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/HelloWorld'
    },
    {
      path:'/HelloWorld',
      component:HelloWorld,
      children:[
        {
          path:'/HelloWorld/FormBd',
          name:'formBd',
          component:FormBd
        },
        {
          path:'/HelloWorld/Fucie',
          component:Fucie
        },
        {
          path:'/HelloWorld/Editor',
          component:Editor
        },
        {
          path:'/HelloWorld/PostMovie',
          component:PostMovie
        }
      ]
    }
   
    
  ]
})
