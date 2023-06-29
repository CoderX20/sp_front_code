<template>
  <div id="space-message-card">
    <div id="container">
      <div id="top">
        <span>
          <strong @click="personSpaceGo">{{messageInfo.name}}</strong><br>
          <a>{{messageInfo.time}}</a>
        </span>
        <span v-if="account_id===userInfo.userid&&userInfo.identify===messageInfo.identify">
          <el-button circle size="mini" type="danger" icon="el-icon-delete" title="删除" @click="delMessage"></el-button>
        </span>
      </div>
      <hr>
      <div id="message-text">
        <p v-html="messageInfo.message"></p>
      </div>
      <div id="image">
        <img :src="item" alt="" v-for="item in img_list" width="150" :key="item">
      </div>
      <div id="visitor-op">
        <div>
          {{trump_count}}
          <img src="@/assets/img/点赞.png" alt="" v-if="hasTrumped<0" @click="trumpClick">
          <img src="@/assets/img/已点赞.png" alt="" v-if="hasTrumped>=0" @click="trumpClick">
        </div>
        <div>
          {{collect_count}}
          <img src="@/assets/img/收藏.png" alt="" v-if="hasCollected<0" @click="collectClick">
          <img src="@/assets/img/已收藏.png" alt="" v-if="hasCollected>=0" @click="collectClick">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as gx_api from "@/api/GX/index"
import {mapState} from "vuex"
export default {
  data(){
    return{
      img_list:this.messageInfo.img.split('\n'),
      trump_count:this.messageInfo.trump_count,
      collect_count:this.messageInfo.collect_count,
    }
  },
  props:['messageInfo','account_id'],
  computed:{
    ...mapState({
      userInfo:state => state.gx.userInfo,
      space_trump_data:state => state.gx.space_trump_data,
      space_collect_data:state => state.gx.space_collect_data,
    }),
    hasTrumped(){
      return this.space_trump_data.indexOf(this.messageInfo.id)
    },
    hasCollected(){
      return this.space_collect_data.indexOf(this.messageInfo.id)
    }
  },
  methods:{
    getTrumpData(){
      gx_api.get_my_space_message_trump_data({
        account_id:this.userInfo.userid,
        identify:this.userInfo.identify,
      }).then((response)=>{
        this.$store.state.gx.space_trump_data=response.data.messages
      }).catch((err)=>{
        console.log(err)
      })
    },
    getCollectData(){
      gx_api.get_my_space_message_collect_data({
        account_id:this.userInfo.userid,
        identify:this.userInfo.identify,
      }).then((response)=>{
        this.$store.state.gx.space_collect_data=response.data.messages
      }).catch((err)=>{
        console.log(err)
      })
    },
    trumpMessage(){
      gx_api.trump_space_message({
        account_id:this.userInfo.userid,
        identify:this.userInfo.identify,
        message_id:this.messageInfo.id,
      }).then(()=>{
        this.trump_count+=1
        this.getTrumpData()
      }).catch((err)=>{
        console.log(err)
      })
    },
    cancelTrumpMessage(){
      gx_api.cancel_trump_space_message({
        account_id:this.userInfo.userid,
        identify:this.userInfo.identify,
        message_id:this.messageInfo.id,
      }).then(()=>{
        this.trump_count--
        this.getTrumpData()
      }).catch((err)=>{
        console.log(err)
      })
    },
    trumpClick(){
      if (this.hasTrumped<0){
        this.trumpMessage()
      }
      else {
        this.cancelTrumpMessage()
      }
    },
    delMessage(){
      this.$confirm("是否删除动态","警告",{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
        gx_api.del_space_message({
          message_id:this.messageInfo.id
        }).then(()=>{
          this.$message.success("删除成功")
          this.$destroy()
          this.$el.parentNode.removeChild(this.$el);
        }).catch((err)=>{
          console.log(err)
        })
      }).catch(()=>{})
    },
    collectMessage(){
      gx_api.collect_space_message({
        account_id:this.userInfo.userid,
        identify:this.userInfo.identify,
        message_id:this.messageInfo.id,
      }).then(()=>{
        this.collect_count++
        this.getCollectData()
        this.$message.success("收藏成功")
      }).catch((err)=>{
        console.log(err)
      })
    },
    cancelCollectMessage(){
      gx_api.cancel_collect_space_message({
        account_id:this.userInfo.userid,
        identify:this.userInfo.identify,
        message_id:this.messageInfo.id,
      }).then(()=>{
        this.collect_count--
        this.getCollectData()
      }).catch((err)=>{
        console.log(err)
      })
    },
    collectClick(){
      if (this.account_id!==this.userInfo.userid||this.userInfo.identify!==this.messageInfo.identify){
        if (this.hasCollected<0){
          this.collectMessage()
        }
        else {
          this.cancelCollectMessage()
        }
      }
    },
    personSpaceGo(){
      this.$router.push({
        path:"/space",
        query:{
          account_id:this.messageInfo.account_id,
          identify:this.messageInfo.identify,
        }
      })
    },
  }
}
</script>

<style lang="less" scoped>
#container{
  width: 650px;
  margin: 5px;
  padding: 10px;
  background-color: rgb(241, 241, 241);
  #top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    strong:hover{
      cursor: pointer;
      color: blue;
    }
    a{
      font-size: 12px;
    }
  }
  #image{
    display: flex;
    flex-wrap: wrap;
    img{
      margin: 10px;
    }
  }
  #visitor-op{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    border-top: 1px lightblue dot-dot-dash;
    img{
      width: 20px;
      height: 20px;
    }
    img:hover{
      cursor: pointer;
    }
  }
}
</style>
