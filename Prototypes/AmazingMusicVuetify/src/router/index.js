import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import AppUpload from '@/components/AppUpload'
import AppEdit from '@/components/AppEdit'
import AppPlay from '@/components/AppPlay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/edit',
      name: 'AppEdit',
      component: AppEdit
    },
    {
      path: '/upload',
      name: 'AppUpload',
      component: AppUpload
    },
    {
      path: '/play',
      name: 'AppPlay',
      component: AppPlay
    },
  ]
})
