<template>
  <div id="page-header">
    <div id="container">
      <div id="left-logo" @click="goHome">
        <h3>四川省旅游资源服务平台</h3>
      </div>
      <div id="center-button-panel">
<!--        导航栏-->
        <div class="nav-guide-button" v-for="item in nav_data" :key="item.id" @click="navClick(item.path)">{{item.text}}</div>
      </div>
      <div id="account-info-logo">
<!--        登陆与注册选项-->
        <el-dropdown @command="optionClick">
                <span class="el-dropdown-link">
                  <img class="user" src="../assets/img/未登录.png" alt="" v-if="!hasLogin">
                  <img class="user" src="../assets/img/已登陆.png" alt="" v-if="hasLogin&&userInfo.avatar===''">
                  <img class="user" :src="userInfo.avatar" alt="" v-if="hasLogin&&userInfo.avatar!==''">
                </span>
          <el-dropdown-menu>
            <el-dropdown-item v-if="!hasLogin" command="0">登陆</el-dropdown-item>
            <el-dropdown-item v-if="!hasLogin" command="1">注册</el-dropdown-item>
            <el-dropdown-item v-if="hasLogin" style="font-size: 12px;text-align: center">{{userInfo.username}}</el-dropdown-item>
            <el-dropdown-item v-if="hasLogin" command="2">个人中心</el-dropdown-item>
            <el-dropdown-item v-if="hasLogin" style="color: red" command="3">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span v-if="hasLogin" style="color: white">{{userInfo.username}}</span>
      </div>
      <el-dialog id="login-dialog" title="登陆" :visible="!hasLogin" center width="30%">
<!--        登陆弹窗-->
        <el-input class="input" v-model="username" placeholder="请输入用户名"></el-input>
        <el-input class="input" v-model="password" placeholder="请输入密码" type="password"></el-input>
        <el-select class="input" v-model="identify">
          <el-option value="users" label="普通用户"></el-option>
          <el-option value="admin" label="管理员"></el-option>
        </el-select>
        <div class="input">
          <el-button @click="loginGo" size="medium">登陆</el-button>
          <el-button @click="optionClick('1')" size="medium">注册</el-button>
        </div>
      </el-dialog>
      <el-dialog id="register-dialog" title="注册" :visible="registerShow" center width="30%">
        <el-input class="input" v-model="username" placeholder="请输入用户名"></el-input>
        <el-input class="input" v-model="pwd1" placeholder="请输入密码" type="password"></el-input>
        <el-input class="input" v-model="pwd2" placeholder="请再次输入密码" type="password"></el-input>
        <div class="input" style="color: red">
          {{registerTip}}
        </div>
        <div class="input">
          <el-button @click="optionClick('0')" size="medium">登陆</el-button>
          <el-button size="medium" @click="registerGo" ref="register">注册</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
import * as gx_api from "@/api/GX/index"

export default {
  name:"pageHeader",
  data(){
    return{
      nav_data:[
        {
          id:1,
          name: "hall",
          path:"/hall",
          text:"大厅",
        },
        {
          id:2,
          name:"attraction",
          path:"/attraction",
          text:"旅游景点",
        },
        {
          id:3,
          name:"agency",
          path:"/agency",
          text:"旅行社信息"
        },
      ],
      account_choice:"",
      loginShow:false,
      registerShow:false,
      username:"",
      password:"",
      pwd1:"",
      pwd2:"",
      identify:"",
      registerTip:"",
    }
  },
  methods:{
    optionClick(command){
      // console.log(typeof command)
      if(command==="0"){
      //   登陆
        this.loginShow=true
        this.registerShow=false
      }
      else if (command==="1"){
      //   注册
        this.registerShow=true
        this.loginShow=false
      }
      else if (command==="2"){
      //   个人中心
        this.$router.push('/user')
      }
      else if (command==="3"){
      //   退出登录
        this.$cookies.remove('username')
        this.$cookies.remove('password')
        this.$cookies.remove('identify')
        this.$cookies.remove('userid')
        this.$store.state.gx.hasLogin=false
      }
    },
    loginGo(){
    //   登陆提交
      if(this.username===''||this.password===''||this.identify===''){
        return
      }
      gx_api.check_login({
        username:this.username,
        password:this.password,
        identify:this.identify,
      }).then((response)=>{
        if(response.data.state===1){
          this.$message.success("登陆成功")
          this.loginShow=false
          this.$store.state.gx.hasLogin=true
          this.$cookies.set('userid',response.data.user.id)
          this.$cookies.set('username',response.data.user.username)
          this.$cookies.set('password',response.data.user.password)
          this.$cookies.set('identify',response.data.user.identify)
          this.$store.state.gx.userInfo={
            userid:response.data.user.id,
            username:response.data.user.username,
            password:response.data.user.password,
            identify:response.data.user.identify,
            avatar:response.data.user.avatar,
          }
          // this.getMyBasicData()
          // var now_path=this.$route.path
          // this.$router.replace('/')
          // this.$router.replace(now_path)
          this.$router.go(0)

        }
        else if (response.data.state===0){
          this.$message.error("密码错误")
        }
        else if (response.data.state===-1){
          this.$message.warning("请注册账户")
        }
        this.username=""
        this.password=""
        this.identify=""
      }).catch((err)=>{
        console.log(err)
        this.username=""
        this.password=""
        this.identify=""
      })
    },
    registerGo(){
    // 注册新用户
      if (this.username===''||this.pwd1===''||this.pwd2===''){
        return
      }
      gx_api.register_users({
        username:this.username,
        password:this.pwd1,
        identify:'users',
      }).then((response)=>{
        if(response.data.state===1){
          this.$message({
            message: '注册成功',
            type: 'success'
          })
          this.registerShow=false
          this.$store.state.gx.hasLogin=true
          this.$cookies.set('userid',response.data.user.id)
          this.$cookies.set('username',response.data.user.username)
          this.$cookies.set('password',response.data.user.password)
          this.$cookies.set('identify',response.data.user.identify)
          this.$store.state.gx.userInfo={
            userid:response.data.user.id,
            username:response.data.user.username,
            password:response.data.user.password,
            identify:response.data.user.identify,
            avatar:response.data.user.avatar,
            signature:response.data.signature
          }
          // this.getMyBasicData()
          this.$router.go(0)
        }
        else {
          this.$message.error('注册失败')
        }
        this.username=""
        this.pwd1=""
        this.pwd2=''
      }).catch((err)=>{
        this.$message.error('注册失败')
        console.log(err)
      })
    },
    navClick(path){
      this.$router.push(path)
    },
    goHome(){
      this.$router.push('/')
    },
    getMyBasicData(){
      // 获取点赞数据
      gx_api.get_my_trumps({
        id:this.$cookies.get("userid"),
        identify:this.$cookies.get("identify"),
      }).then((response)=>{
        if(response.data.state===1){
          this.$store.state.gx.myTrumpHallMessages=response.data.trump_data
        }
      }).catch((err)=>{
        console.log(err)
      })
      // 获取大厅留言数据
      gx_api.get_my_hall_messages({
        id:this.$cookies.get('userid'),
        identify:this.$cookies.get('identify')
      }).then((response)=>{
        this.$store.state.gx.myHallMessages=response.data.message_data
      })
    },
  },
  computed:{
    ...mapState({
      hasLogin:state => state.gx.hasLogin,
      userInfo:state => state.gx.userInfo
    })
  },
  watch:{
    pwd1(newVal,oldVal){
      if(newVal!==this.pwd2){
        this.registerTip="两次密码不同"
      }
      else {
        this.registerTip=''
      }
    },
    pwd2(newVal,oldVal){
      if(newVal!==this.pwd1){
        this.registerTip='两次密码不同'
      }
      else {
        this.registerTip=''
      }
    }
  },
  mounted() {
    // this.hasLogin=false
  },
}
</script>

<style lang="less" scoped>
#container{
  width: 100%;
  height: 60px;
  background-color: rgb(84, 92, 100);
  display: flex;
  justify-content: space-between;
  align-items: center;
  #left-logo{
    color: whitesmoke;
    flex: 1;
    h3{
      margin-left: 10px;
    }
  }
  #left-logo:hover{
    cursor: pointer;
  }
  #center-button-panel{
    flex: 1;
    display: flex;
    justify-content: space-around;
    .nav-guide-button{
      background: rgb(151, 191, 242);
      text-align: center;
      width: 100px;
      height: 30px;
      line-height: 30px;
      margin: 10px;
      border: 2px black solid;
      border-radius: 6px;
    }
    .nav-guide-button:hover{
      cursor: pointer;
      background-color: rgb(18, 110, 178);
    }
  }
  #account-info-logo{
    flex: 1;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    .el-dropdown{
      margin: 10px;
    }
    .user{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .user:hover{
      cursor: pointer;
    }
  }
  #login-dialog{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .input{
      margin: 10px;
    }
    div{
      display: flex;
      justify-content: space-around;
    }
  }
  #register-dialog{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .input{
      margin: 10px;
    }
    div{
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>