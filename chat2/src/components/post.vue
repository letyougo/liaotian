<template>
  <div class="post">
    <div v-for="p in posts">

      <h4>{{p.title}}</h4>
      <div>{{p.content}}</div>
      <div>{{formatTime(p.createdAt)}}</div>
      <button>赞</button>
      <button>评论</button>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  import moment from 'moment'
export default {
  name: 'hello',
  computed:{
    ...mapGetters([
        'posts'
    ]),
    formatTime(time){
        return moment(time).format('YYYY-MM-DD')
    }
  },
  methods:{
    ...mapActions([
        'fetch_post'
    ])
  },
  mounted(){
      this.fetch_post()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
