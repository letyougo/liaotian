import Vue from 'vue'
import Router from 'vue-router'
import friend from '../components/friend.vue'
import post from '../components/post.vue'
import self from '../components/self.vue'
import login from '../components/login.vue'
import logout from '../components/logout.vue'
import chat from '../components/chat.vue'
import not_found from '../components/not_found.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'friend',
      component: friend
    },
    {
      path: '/friend',
      name: 'friend',
      component: friend
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
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/*',
      name: 'not_found',
      component: not_found
    }
  ]
})
