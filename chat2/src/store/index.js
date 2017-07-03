/**
 * Created by Administrator on 2017/7/2.
 */

import Vuex from 'vuex'
import vue from 'vue'

vue.use(Vuex)

import config from '../config'

var host ='http://localhost:3000/'

var get_friend =host + 'user/'+ config.id + '/friend'

var get_post =host + 'user/'+ config.id + '/post_detail'
import request from 'superagent'


var store = new Vuex.Store({
  state:{
    friends:[],
    posts:[],
    self:[],
  },
  getters:{
    friends:(state)=>state.friends,
    posts:(state)=>state.posts,
    self:(state)=>state.self
  },
  mutations:{
    set_friends:(state,list)=>state.friends=list,
    set_posts:(state,list)=>state.posts=list
  },
  actions:{
    fetch_friends({commit}){
      request
        .get(get_friend)
        .end((err,res)=>{
          commit('set_friends',res.body)
        })
    },
    fetch_post({commit}){
      request
        .get(get_post)
        .end((err,res)=>{
          console.log(res.body)
          commit('set_posts',res.body)
        })
    }
  }
})

export default store


