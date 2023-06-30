<template>
  <div id="person-file">
<!--    个人中心-->
    <div id="container">
      <div id="page-left">
        <div id="user-avatar">
          <img src="@/assets/img/已登陆.png" alt="" v-if="userInfo.avatar===''">
          <img :src="userInfo.avatar" alt="" v-else>
        </div>
        <div style="text-align: center">
          <el-button size="mini" @click="avatar_dialog_show=true">修改头像</el-button>
        </div>
        <div style="text-align: center;margin-top: 5px" title="个性签名">
          <el-input type="textarea" maxlength="50" show-word-limit
                    v-model="$store.state.gx.userInfo.signature"
                    rows="2" @keyup.enter.native="editMySignature"></el-input>
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
          <div v-if="userInfo.identify==='admin'" style="text-align: center">
            <el-button @click="add_admin_show=true">添加管理员用户</el-button>
          </div>
        </div>
      </div>
      <div id="right">
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
      </div>
    </div>
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
      </div>
    </el-dialog>
    <el-dialog id="avatar-edit" title="修改头像" width="30%" :visible.sync="avatar_dialog_show">
      <div id="upload" style="text-align: center">
        <el-upload drag :multiple="false" accept="image/*" :show-file-list="true" action=""
                   list-type="picture" :auto-upload="false" :file-list="avatar_file_list" :on-change="fileChange">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </div>
      <div style="text-align: center;margin: 20px">
        <el-button @click="alterUserAvatar">确认</el-button>
      </div>
    </el-dialog>
    <el-dialog id="add-admin" title="添加管理员账户" width="30%" :visible.sync="add_admin_show">
      <div class="row">
        <el-input placeholder="输入管理员账户名" v-model="admin_name"></el-input>
      </div>
      <div class="row">
        <el-input placeholder="输入密码" show-password v-model="admin_pwd1"></el-input>
      </div>
      <div class="row">
        <el-input placeholder="请再次输入密码" show-password v-model="admin_pwd2"></el-input>
      </div>
      <div class="row" style="text-align: center;color: red">
        {{pwd_tips}}
      </div>
      <div class="row" style="text-align: center">
        <el-button @click="addAdmin">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import HeatMap from "@/components/HeatMap.vue";
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
          text:"我的发言",
          path:"myMessages",
        },
        {
          text:"我的收藏",
          path:"myCollect",
        },
        {
          text:"我的订单",
          path:"myOrder",
        },
        {
          text:"我的空间",
          path: `/space`
        },
      ],
      avatar_dialog_show:false,
      avatar_file_list:[],
      img_base64:"",
      add_admin_show:false,
      admin_name:"",
      admin_pwd1:"",
      admin_pwd2:"",
    }
  },
  components:{
    HeatMap
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
      if (this.pwd2===this.userInfo.password){
        this.$message.warning("不能和以前的密码相同")
        return
      }
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
      if (path.includes("space")){
        this.$router.push({
          path:path,
          query:{
            account_id:this.userInfo.userid,
            identify:this.userInfo.identify,
          }
        })
      }
      else {
        path="/user/"+path
        this.$router.push(path)
      }
    },
    fileChange(file){
      let reader=new FileReader()
      reader.addEventListener('load',()=>{
        this.img_base64=reader.result
      },false)
      // console.log(file)
      if (file){
        if (file.size / 1024 / 1024 < 5){
          reader.readAsDataURL(file.raw)
        }
        else {
          this.avatar_file_list=[]
          this.$message.warning("文件大小不能超过5M")
        }
      }
    },
    alterUserAvatar(){
      if(this.img_base64.length>0){
        gx_api.alter_user_avatar({
          account_id:this.userInfo.userid,
          identify:this.userInfo.identify,
          avatar_data:this.img_base64,
        }).then((response)=>{
          this.$message.success("头像修改成功")
          this.avatar_dialog_show=false
          this.$store.state.gx.userInfo.avatar=response.data.avatar
        }).catch((err)=>{
          this.$message.error("头像修改失败了")
          console.log(err)
        })
      }
    },
    addAdmin(){
      if (this.pwd_tips.length<=0&&this.admin_name.length>0){
        gx_api.register_admin({
          name:this.admin_name,
          password:this.admin_pwd2,
        }).then(()=>{
          this.$message.success("管理员账户注册成功")
          this.add_admin_show=false
        }).catch((err)=>{
          console.log(err)
          this.$message.error("注册出错了")
        })
      }
    },
    editMySignature(){
      this.userInfo.signature=this.userInfo.signature.replace('\n','')
      gx_api.edit_my_signature({
        account_id:this.userInfo.userid,
        identify:this.userInfo.identify,
        signature:this.userInfo.signature,
      }).then(()=>{
        this.$message.success("编辑成功")
      }).catch((err)=>{
        console.log(err)
      })
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
    },
    avatar_dialog_show(newVal){
      if (!newVal){
        this.avatar_file_list=[]
        this.img_base64=""
      }
    },
    admin_pwd1(newVal){
      if (newVal!==this.admin_pwd2){
        this.pwd_tips="两次密码不同"
      }
      else {
        this.pwd_tips=""
      }
    },
    admin_pwd2(newVal){
      if (newVal!==this.admin_pwd1){
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
  display: flex;
  flex-direction: row;
  #page-left{
    flex: 1;
    padding: 10px;
    #user-avatar{
      text-align: center;
      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid grey;
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
  }
  #right{
    flex: 5;
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
#add-admin{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .row{
    width: 90%;
    margin: 10px;
  }
}
</style>