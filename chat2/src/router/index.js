import Vue from 'vue'
import Router from 'vue-router'
import friend from '../components/friend.vue'
import post from '../components/post.vue'
import self from '../components/self.vue'
import dialog from '../components/dialog.vue'
import login from '../components/login.vue'
import logout from '../components/logout.vue'
import not_found from '../components/not-found.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'friend',
      component: friend
    },
    {
      path: '/',
      name: 'friend',
      component: friend
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: dialog
    },
    {
      path: '/post',
      name: 'post',
      component: post
    },
    {
      path: '/self',
      name: 'self',
      component: self
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/logout',
      name: 'logout',
      component: logout
    },
    {
      path: '*',
      name: '404-not-found',
      component: not_found
    },
  ]
})
