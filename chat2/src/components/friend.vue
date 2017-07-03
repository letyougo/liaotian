<template>
  <div class="friend">
    <h3>好友列表</h3>
    <div v-for="f in friends" @click="openDialog(f)" class="friend-item">
      <img :src="f.logo" width="100" height="100">{{f.username}}
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: 'hello',

  computed:{
    ...mapGetters([
        'friends',
        'posts',
        'self'
    ])
  },

  methods:{
    ...mapActions([
        'fetch_friends'
    ]),
    openDialog(obj){
        this.$router.push('/dialog?to='+obj.username)
    }
  },
  mounted(){
    this.fetch_friends()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.friend-item:hover{
  background: #dddddd;
}
</style>
