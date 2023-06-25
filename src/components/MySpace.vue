<template>
  <div id="my-space">
    <div id="tool">
      <el-button size="small" icon="el-icon-back" title="返回"></el-button>
      <br>
      <el-button size="small" icon="el-icon-plus" title="新建动态" type="primary"
                 v-if="account_id===userInfo.userid&&identify===userInfo.identify"></el-button>
    </div>
    <div id="container">
      <div id="top" class="space-row">
        <div id="user-avatar">
          <img src="@/assets/img/已登陆.png" alt="" width="150" v-if="user_info.avatar===''">
          <img :src="user_info.avatar" alt="" width="100" v-else>
        </div>
        <div id="basic-info">
          <div>
            <h4>{{user_info.name}}</h4>
          </div>
          <hr>
          <div style="font: italic 0.9em 'Fira Sans', serif;">
            <p>{{user_info.signature}}</p>
          </div>
        </div>
      </div>
      <div id="space-show-place" class="space-row"></div>
    </div>
  </div>
</template>

<script>
import * as gx_api from "@/api/GX/index"
import {mapState} from "vuex"
export default {
  data(){
    return{
      account_id:Number(this.$route.query.account_id),
      identify:this.$route.query.identify,
      user_info:{},
    }
  },
  computed:{
    ...mapState({
      userInfo:state => state.gx.userInfo,
    })
  },
  methods:{
    getBasicInfo(){
      if (this.account_id&&this.identify){
        gx_api.get_user_info({
          account_id:this.account_id,
          identify:this.identify
        }).then((response)=>{
          if (response.data.state===1){
            this.user_info=response.data.user
          }
          else {
            this.$message.warning("未能找到相关数据")
            setTimeout(()=>{
              this.$router.go(-1)
            },1000)
          }
        }).catch((err)=>{
          console.log(err)
        })
      }
      else {
        this.$message.warning("未能找到相关数据")
        setTimeout(()=>{
          this.$router.go(-1)
        },1000)
      }
    }
  },
  mounted() {
    this.getBasicInfo()
  }
}
</script>

<style lang="less" scoped>
#tool{
  position: fixed;
  top: 70px;
  left: 10px;
  .el-button{
    margin: 5px;
  }
}
#container{
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .space-row{
    width: 700px;
    border-left: 2px lightskyblue solid;
    border-right: 2px lightskyblue solid;
  }
  #top{
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px lightskyblue solid;
    img{
      border-radius: 50%;
      margin: 5px;
    }
    #basic-info{
      flex: 1;
      div{
        padding: 10px;
      }
    }
  }
  #space-show-place{
    flex: 1;
    overflow: auto;
  }
}
</style>
