<template>
  <div id="person-file">
<!--    个人中心-->
    <el-row id="container">
      <el-col :span="4">
        <div id="user-avatar">
          <img src="@/assets/img/已登陆.png">
        </div>
        <div id="basic-info">
          <div>
            <a>用户ID</a><el-input v-model="userInfo.userid" :disabled="true" size="mini"></el-input>
          </div>
          <div>
            <a>用户名</a><el-input v-model="userInfo.username" size="mini"><el-button slot="append" icon="el-icon-edit" size="mini" @click="alterAccountName"></el-button></el-input>
          </div>
          <div>
            <a>用户类型</a><el-input v-model="user_class" :disabled="true" size="mini"></el-input>
          </div>
          <div id="account-buts">
            <el-button icon="el-icon-delete" type="danger" size="mini" @click="delMyAccount">注销账户</el-button>
            <el-button icon="el-icon-edit" size="mini" @click="pwd_dialog_show=true">修改密码</el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="20" id="right">
        <el-container>
          <el-header>
            <div id="file-nav-header">
              <div class="nav-option" v-for="item in file_nav_data" :key="item.text" @click="cardGo(item.path)">
                {{item.text}}
              </div>
            </div>
          </el-header>
          <el-main>
            <router-view name="personData"></router-view>
          </el-main>
        </el-container>
      </el-col>
    </el-row>
    <el-dialog id="pwd-dialog" title="修改密码" width="30%" @close="pwdDialogClosed" :visible.sync="pwd_dialog_show">
      <div>
        <el-input v-model="pwd1" placeholder="输入新密码" show-password></el-input>
      </div>
      <div>
        <el-input v-model="pwd2" placeholder="再次输入新密码" show-password></el-input>
      </div>
      <div>
        <p style="color: red;text-align: center">{{pwd_tips}}</p>
      </div>
      <div id="buts">
        <el-button @click="subNewPassword">确认</el-button>
        <el-button @click="pwd_dialog_show=false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import * as gx_api from "@/api/GX/index"
import {mapState} from "vuex"
export default {
  data(){
    return{
      pwd1:"",
      pwd2:"",
      pwd_tips:"",
      pwd_dialog_show:false,
      file_nav_data:[
        {
          text:"我的大厅留言",
          path:"hallMessages",
        },
        {
          text:"我的景点留言",
          path:"attractionComments",
        },
        {
          text:"我的旅行社留言",
          path:"agencyComments",
        },
      ],
    }
  },
  components:{
  },
  computed:{
    ...mapState({
      userInfo:state => state.gx.userInfo
    }),
    user_class(){
      return this.userInfo.identify==="users"?"普通用户":"管理员"
    }
  },
  methods:{
    alterAccountName(){
      gx_api.alter_account_name({
        userid:this.userInfo.userid,
        newName:this.userInfo.username,
        identify:this.userInfo.identify
      }).then((response)=>{
        if(response.data.state===1){
          // this.$store.state.gx.userInfo.username=this.username
          this.$cookies.set("username",this.userInfo.username)
          this.$message.success("用户名修改成功")
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    delMyAccount(){
      this.$confirm("是否永久删除此账户","警告",{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
        gx_api.del_account({
          id:this.userInfo.userid,
          identify:this.userInfo.identify
        }).then((response)=>{
          if(response.data.state===1){
            this.$message.success("账户删除成功")
            this.$cookies.remove('username')
            this.$cookies.remove('password')
            this.$cookies.remove('identify')
            this.$cookies.remove('userid')
            this.$store.state.gx.hasLogin=false
          }
          else {
            this.$message.error("账户删除失败")
          }
        }).catch((err)=>{
          console.log(err)
        })
      }).catch(()=>{})
    },
    pwdDialogClosed(){
      this.pwd_tips=""
      this.pwd1=""
      this.pwd2=""
    },
    subNewPassword(){
      if(this.pwd_tips.length<=0){
        gx_api.alter_password({
          id:this.userInfo.userid,
          newPwd:this.pwd2,
          identify:this.userInfo.identify
        }).then((response)=>{
          if(response.data.state===1){
            this.$store.state.gx.userInfo.password=this.pwd2
            this.$cookies.set("password",this.pwd2)
            this.$message.success("修改成功")
          }
          else {
            this.$message.error("修改失败")
          }
        }).catch((err)=>{
          console.log(err)
        })
      }
      this.pwd_dialog_show=false
    },
    cardGo(path){
      path="/user/"+path
      this.$router.push(path)
    }
  },
  mounted() {
  },
  watch:{
    pwd1(newVal){
      if(newVal!==this.pwd2){
        this.pwd_tips="两次密码不同"
      }
      else
      {
        this.pwd_tips=""
      }
    },
    pwd2(newVal){
      if(newVal!==this.pwd1){
        this.pwd_tips="两次密码不同"
      }
      else {
        this.pwd_tips=""
      }
    }
  }
}
</script>

<style lang="less" scoped>
#container{
  width: 100vw;
  height: calc(100vh - 60px);
  #user-avatar{
    text-align: center;
    img{
      width: 100px;
      height: 100px;
    }
  }
  #basic-info{
    div{
      margin-top: 5px;
      a{
        display: inline-block;
        width: 70px;
      }
      .el-input{
        width: calc(100% - 70px);
      }
    }
    #account-buts{
      display: flex;
      justify-content: space-around;
      .el-button{
        margin: 3px;
      }
    }
  }
  #right{
    .el-header{
      display: flex;
      align-items: center;
    }
    #file-nav-header{
      display: flex;
      align-items: center;
      .nav-option{
        padding: 10px;
        border: 1px rgb(53, 116, 240) solid;
        font-size: 13px;
        transition: 1s;
      }
      .nav-option:hover{
        cursor: pointer;
        background: rgb(56, 96, 255);
      }
    }
  }
}
#pwd-dialog{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  div{
    margin: 10px;
  }
  #buts{
    display: flex;
    justify-content: space-around;
  }
}
</style>