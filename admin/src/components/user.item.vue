<template>
  <div class="user-item">
    <h1>{{username}}</h1>
    <h3>文章列表</h3>
    <el-form :inline="true">

        <el-form-item>
            <el-button @click="addPost.visible=true">增加文章</el-button>
        </el-form-item>
      <!--toto 编辑文章-->
        <el-form-item>
          <el-button >编辑文章</el-button>
        </el-form-item>
      <!--toto 删除文章-->
      <el-form-item>
        <el-button type="danger">删除文章</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      title="增加文章"
      :visible="addPost.visible"
    >
      <el-form>
         <el-form-item  label="标题" label-width="50px">
            <el-input v-model="addPost.title"></el-input>
         </el-form-item>
        <el-form-item  label="内容" label-width="50px">
          <el-input v-model="addPost.content"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addPost.visible=false">取 消</el-button>
        <el-button type="primary" @click="handleAddPost">确 定</el-button>
      </span>
    </el-dialog>
    <el-table :data="post" border>
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="content" label="内容"></el-table-column>
      <el-table-column prop="createdAt" label="创建时间"></el-table-column>
      <el-table-column prop="updatedAt" label="最后更新时间"></el-table-column>
    </el-table>
    <h3>好友列表</h3>
    <el-form :inline="true">

      <el-form-item  v-if="!addFriend.visible">
        <el-button @click="addFriend.visible=true">增加好友</el-button>
      </el-form-item>

      <el-form-item v-if="addFriend.visible">
        <el-select v-model="addFriend.friendId">
            <el-option
              v-for="u in allUser"
              :label="u.username"
              :value="u.id"
              :key="u.id"
              v-if="!isFriend(u.id)"
            ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item  v-if="addFriend.visible">
        <el-button >确定</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="friend" border>
      <el-table-column prop="id" label="好友id"></el-table-column>
      <el-table-column prop="username" label="好友名字"></el-table-column>
    </el-table>
  </div>
</template>
<script>
  import {detail,addPost} from './user.item.api'
  import {get_all_user} from './user.api'
  export default {
      name:'user-item',
      data(){
          return {
              addPost:{
                  visible:false,
                  title:'',
                  content:''
              },
              addFriend:{
                visible:false,
                friendId:'-1'
              },
              id:'-1',
              username:'',
              nickname:'',
              logo:'',
              createdAt:'',
              updatedAt:'',
              post:[],
              friend:[],
              allUser:[]
          }
      },
      methods:{
          fetch(){
            detail(this.id,(item)=>{
                this.username = item.username
                this.nickname = item.nickname
                this.logo = item.logo
                this.createdAt=item.createdAt
                this.updatedAt = item.updatedAt
                this.post = item.post
                this.friend = item.friend
            })
          },
          handleAddPost(){
            addPost(this.id,{title:this.addPost.title,content:this.addPost.content},(item)=>{
                this.post.push(item)
                this.addPost.visible = false
            })
          },
          isFriend(id){
              return !!this.friend.find((user)=>{
                  return user.id == id
              })
          }
      },
      mounted(){
//          console.log(this.$router,this.$router)
          this.id = this.$route.params.id
          this.fetch()

          get_all_user((list)=>{
              this.allUser = list
          })

      }
  }
</script>
<style>

</style>
