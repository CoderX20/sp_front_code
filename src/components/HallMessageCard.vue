<template>
  <div id="message-show">
    <div id="container">
      <!--      大厅留言板单个组件-->
      <div class="row" id="name-show" style="color: blue;font-size: 12px">
        <span @click="personSpaceGo">@{{username}} &nbsp; <span v-if="identify==='admin'">(管理员)</span></span>
      </div>
      <div class="row" style="font-size: 12px;" v-html="message">
<!--        {{message}}-->
      </div>
      <div class="row" style="font-size: 10px" id="last-row">
        <div id="time">{{time}}</div>
        <div id="trump-panel">
          {{trump_sum}}
          <span id="trump-clicker">
            <img src="@/assets/img/点赞.png" alt="trump-icon" v-if="hasTrumped<0" @click="trumpMessageClick">
            <img src="@/assets/img/已点赞.png" alt="has-trump" v-if="hasTrumped>=0" @click="trumpMessageClick">
          </span>
          <span style="margin-left: 15px" v-if="userInfo.identify==='admin'|| userInfo.userid===userid">
            <el-button size="mini" type="text" @click="clearMessage">清除</el-button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as gx_api from "@/api/GX/index"
import {mapState} from "vuex"
export default {
  data() {
    return {
      trump_sum:this.trump_count,
    }
  },
  computed:{
    ...mapState({
      userInfo:state => state.gx.userInfo,
      myTrumpHallMessages:state => state.gx.myTrumpHallMessages,
    }),
    hasTrumped(){
      return this.myTrumpHallMessages.findIndex((item)=>item.message_id===this.id)
    }
  },
  props: {
    id:{
      type:Number,
      default:-1,
    },
    // 用户编号

    userid: {
      type: Number,
      default: -1,
    },
    // 用户类型
    identify:{
      type:String,
      default:"users"
    },
    // 用户名
    username: {
      type: String,
      default: ""
    },
    // 留言
    message: {
      type: String,
      default: ""
    },
    // 留言时间
    time: {
      type: String,
      default: ""
    },
    trump_count: {
      type: Number,
      default: 0
    },
  },
  methods:{
    clearMessage(){
      gx_api.pop_messages({
        id:this.id
      }).then((response)=>{
        // console.log(response)
        if(response.data.state===1){
          this.$message.success("删除成功")
          this.$destroy()
          this.$el.parentNode.removeChild(this.$el);
        }
        else {
          this.$message.error("删除失败")
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    trumpMessageClick(){
      var flag=true;
      if (flag){
        flag=false
        if(this.hasTrumped<0){
          //   若未被点赞，则执行点赞操作
          gx_api.trump_hall_message({
            id:this.userInfo.userid,
            identify:this.userInfo.identify,
            message_id:this.id
          }).then((response)=>{
            if(response.data.state===1){
              //   操作成功
              this.trump_sum+=1
              this.getMyTrumpData()
            }
          })
        }
        else if (this.hasTrumped>=0){
          //   点赞，则取消点赞
          gx_api.cancel_trump_hall_message({
            id:this.userInfo.userid,
            identify:this.userInfo.identify,
            message_id:this.id
          }).then((response)=>{
            if (response.data.state===1){
              //   操作成功
              this.trump_sum-=1
              this.getMyTrumpData()
            }
          })
        }
      }
      flag=true
    },
    getMyTrumpData(){
      gx_api.get_my_trumps({
        id:this.$cookies.get('userid'),
        identify:this.$cookies.get('identify')
      }).then((response)=>{
        if(response.data.state===1){
          this.$store.state.gx.myTrumpHallMessages=response.data.trump_data
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    personSpaceGo(){
      this.$router.push({
        path:"/space",
        query:{
          account_id:this.userid,
          identify:this.identify,
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
#container{
  width: 400px;
  min-height: 80px;
  margin-top: 3px;
  border: 1px grey dotted;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  #name-show{
    span:hover{
      cursor: pointer;
      color: lightskyblue;
    }
  }
  .row{
    width: calc(100% - 10px);
    height: auto;
    margin: 3px;
    padding-left: 10px;
    align-items: center;
    #time{
      width: 70px;
      padding: 2px;
    }
    #trump-panel{
      width: 100px;
      height: 20px;
      img{
        width: 15px;
        height: 15px;
      }
      span:hover{
        cursor: pointer;
      }
    }
  }
  #last-row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>