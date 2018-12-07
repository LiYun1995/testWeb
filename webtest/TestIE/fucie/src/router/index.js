import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about'
import lazyLoading from './lazyLoading'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:Home
    },
    {
      path:'/Home',
      component:Home
    },
    {
      path:'/About',
      component:About
    },
    {
      path:'/Lazy',
      component:lazyLoading('components/lazy')
    }
  ]
})
