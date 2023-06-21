<template>
  <div id="hall-left">
    <div id="container">
<!--      大厅-->
      <div id="hot-attractions-show">
        <el-carousel trigger="click" height="150px" :autoplay="true" :interval="1500" indicator-position="outside">
          <el-carousel-item v-for="item in hot_attractions" :key="item.id" style="text-align: center" :title="item.name">
            <img :src="item.img" alt="" height="150" v-if="item.img" @click="attractionGo(item.id)">
            <img src="@/assets/img/无图片.png" height="150" alt="" v-else @click="attractionGo(item.id)">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div id="messages-panel">
        <message-show v-for="item in message_list_show" :key="item.id" :id="item.id"
                      :userid="item.userID" :identify="item.identify" :username="item.name"
                      :message="item.message" :time="item.time" :trump_count="item.trumpCount"></message-show>
      </div>
      <div id="write-panel">
        <div id="search-panel" class="row">
            <el-input placeholder="请输入需要查询的留言" v-model="search_keyword"
                      @keyup.enter.native="searchMessage" prefix-icon="el-icon-search"></el-input>
        </div>
        <div class="row" id="input-panel">
          <el-input type="textarea" rows="1" placeholder="输入发言" v-model="message_text" maxlength="150" show-word-limit></el-input>
        </div>
        <div class="row" id="buts">
          <el-button @click="deliverNewMessage" size="mini">发布</el-button>
          <el-button @click="clearWroteMessage" size="mini">清空</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MessageShow from "@/components/HallMessageCard.vue";
import {sortByTimeAndTrumpCount} from "@/utils/ArrayFun"
import * as gx_api from "@/api/GX/index";
import {mapState} from "vuex"
export default {
  data(){
    return{
      message_list_show:[],
      messages_temp:[],
      search_keyword:"",
      message_text:"",
      myTrumpHallMessages:[],
      hot_attractions:[],
    }
  },
  computed:{
    ...mapState({
      // myTrumpHallMessages:state => state.gx.myTrumpHallMessages,
      userInfo:state => state.gx.userInfo,
    })
  },
  components:{
    MessageShow
  },
  methods:{
    searchMessage(){
      if(this.search_keyword.length>0){
        // 查询留言或用户名中含有查询关键字的留言信息
        this.message_list_show=this.messages_temp.filter(item=>item.name.includes(this.search_keyword)
            ||item.message.includes(this.search_keyword)
            ||item.time.includes(this.search_keyword))
        if (this.message_list_show.length<=0){
          this.$message.warning("未能查到相关信息")
          this.message_list_show=this.messages_temp
        }
      }
    },
    clearWroteMessage(){
      this.message_text=""
    },
    deliverNewMessage(){
      var year=new Date().getFullYear()
      var month=new Date().getMonth()+1
      var day=new Date().getDate()
      var time=`${year}-${month}-${day}`
      // console.log(time)
      // 只有输入字符串时，才提交新的留言
      if (this.message_text.length>0){
        var params={}
        if(this.$store.state.gx.userInfo.identify==="users"){
          params={
            message:this.message_text,
            time:time,
            trumpCount:0,
            userID:this.$store.state.gx.userInfo.userid,
            name:this.$store.state.gx.userInfo.username,
            identify:this.$store.state.gx.userInfo.identify
          }
        }
        else if (this.$store.state.gx.userInfo.identify==="admin"){
          params={
            message:this.message_text,
            time:time,
            trumpCount:0,
            adminID:this.$store.state.gx.userInfo.userid,
            name:this.$store.state.gx.userInfo.username,
            identify:this.$store.state.gx.userInfo.identify
          }
        }
        gx_api.add_messages(params).then((response)=>{
          if(response.data.state===1){
            this.$message.success("发布成功")
            this.message_text=""
            gx_api.get_messages().then((response)=>{
              // temp用于在前端备份原始数据
              this.messages_temp=response.data.dataset
              // show用于展示留言板
              this.message_list_show=this.messages_temp
            })
          }
          else {
            this.$message.error("发布失败")
          }
        }).catch((err)=>{
          console.log(err)
        })
      }
    },
    // 获取热门景帝
    getHotAttractions(){
      gx_api.get_hot_attractions().then((response)=>{
        this.hot_attractions=response.data.attractions
      })
    },
    attractionGo(id){
      this.$router.push(`/attraction/attractionDetail?id=${id}`)
    }
  },
  mounted() {
    gx_api.get_messages().then((response)=>{
      // temp用于在前端备份原始数据
      this.messages_temp=sortByTimeAndTrumpCount(response.data.dataset)
      // show用于展示留言板
      this.message_list_show=this.messages_temp
    })
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
    this.getHotAttractions()
  },
  watch:{
    search_keyword(newVal){
      if(newVal===""){
        this.message_list_show=this.messages_temp
      }
    },

  }
}
</script>

<style lang="less" scoped>
#container{
  width: 450px;
  height: calc(100vh - 60px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  #hot-attractions-show{
    margin: 10px;
    width: 430px;
    height: 160px;
    img:hover{
      cursor: pointer;
    }
  }
  #messages-panel{
    flex: 1;
    overflow: auto;
  }
  #write-panel{
    width: 400px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .row{
      width: 400px;
    }
    #buts{
      display: flex;
      justify-content: space-evenly;
    }
  }
}
</style>
