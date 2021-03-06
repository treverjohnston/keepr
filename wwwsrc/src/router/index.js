import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HelloCard from '@/components/HelloCard'
import Zoom from '@/components/Zoom'
import Login from '@/components/Login'
import Profile from '@/components/Profile'
import KeepCheck from '@/components/KeepCheck'
import Vault from '@/components/Vault'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/profile/:userId/vaults',
      name: 'Vault',
      component: Vault
    },
    {
      path: '/keepcheck',
      name: 'KeepCheck',
      component: KeepCheck
    },
    {
      path: '/profile/:profileId',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/zoom',
      name: 'Zoom',
      component: Zoom
    },
    {
      path: '/hellocard',
      name: 'HelloCard',
      component: HelloCard
    }
  ]
})
