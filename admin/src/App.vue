<template>
  <div id="app">
    <el-row>
      <el-col :md="4">
        <el-menu>
          <el-menu-item
            v-for="route in $router.options.routes"
            :index="route.path"
            @click="click(route.path)"
          >
            {{route.name}}
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :md="20">
        <router-view></router-view>
      </el-col>
    </el-row>


  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
      click(path){
          this.$router.push(path)
      }
  },
  mounted(){
      console.log(this.$router.options.routes)
  }
}
</script>

<style>
#app {

}
</style>
