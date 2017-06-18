<template>
  <div class="user-item">
    <h2>{{username}}</h2>
    <h3>文章列表</h3>
    <ul>
      <li v-for="p in post">
        <h4>{{p.title}}</h4>
        <p>{{p.content}}</p>
        <span>{{p.createdAt}}</span>
      </li>
    </ul>
    <h3>好友列表</h3>
    <ul>
      <li v-for="f in friend">
        <h4>{{f.username}}</h4>
      </li>
    </ul>
    <h3>请求列表</h3>
  </div>
</template>

<script>
import {detail} from './user.item.api'
export default {
  name: 'user-item',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name:'',
      id:'-1',
      post:[],
      friend:[]
    }
  },
  methods:{
    fetch(){
      detail(this.id,(item)=>{
          this.username = item.username
          this.post = item.post
          this.friend = item.friend
      })
    }
  },
  mounted(){
      console.log(this.$route)
    this.id = this.$route.params.id
    this.fetch()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
