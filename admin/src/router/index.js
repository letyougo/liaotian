import Vue from 'vue'
import Router from 'vue-router'
import user from '../components/user.vue'
import post from '../components/post.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user',
      name: '用户',
      component: user
    },
    {
      path: '/post',
      name: '说说',
      component: post
    }
  ]
})
