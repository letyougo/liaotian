<template>
  <div class="hello">
    <el-table :data="list">
      <el-table-column
        prop="id"
        label="id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容"
        width="180">
      </el-table-column>
      <el-table-column
        prop="userId"
        label="作者id"
        width="180">
      </el-table-column>


    </el-table>
  </div>
</template>

<script>
  import {get_all_post} from './post.api'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        list:[]
      }
    },
    methods:{

      fetch(){
        get_all_post(list=>this.list=list)
      }
    },
    mounted(){
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
