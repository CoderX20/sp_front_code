<template>
  <div id="comment-card">
    <div id="container">
      <div class="row" id="top" style="font-size: 12px">
        <span>@{{commentInfo.name}}&nbsp;<span v-if="commentInfo.identify==='admin'">(管理员)</span></span>
      </div>
      <div class="row" style="font-size: 12px">
        {{commentInfo.comment}}
      </div>
      <div class="row" style="font-size: 12px">
        <div id="time">
          {{commentInfo.time}}
        </div>
        <div id="trump-panel" style="font-size: 12px">
          {{trump_sum}}
          <span id="trump-clicker">
            <img src="@/assets/img/点赞.png" alt="trump" v-if="hasTrumped<0" @click="trumpComment">
            <img src="@/assets/img/已点赞.png" alt="trump" v-if="hasTrumped>=0" @click="trumpComment">
          </span>
          <span style="margin-left: 15px" v-if="userInfo.identify==='admin' || userInfo.userid===commentInfo.account_id">
            <el-button type="text" size="mini" @click="delComment">删除</el-button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import * as gx_api from "@/api/GX/index";

export default {
  data(){
    return{
      trump_sum:this.commentInfo.trump_count,
    }
  },
  props:{
    commentInfo:{
      default:{
        id:-1,
        comment:"",
        name:"",
        account_id:"",
        identify:"",
        time:"",
        trump_count:0,
      }
    }
  },
  computed:{
    ...mapState({
      userInfo:state => state.gx.userInfo,
      myTrumpAttractionComments:state => state.gx.myTrumpAttractionComments,
    }),
    hasTrumped(){
      return this.myTrumpAttractionComments.indexOf(this.commentInfo.id)
    }
  },
  methods:{
    delComment(){
      gx_api.remove_attraction_comment({
        comment_id:this.commentInfo.id,
      }).then(()=>{
        this.$message.success("删除成功")
        // 从DOM中删除元素
        this.$destroy()
        this.$el.parentNode.removeChild(this.$el);
        // 从仓库中删除数据
        this.$store.state.gx.attraction_comments=this.$store.state.gx.attraction_comments.filter(item=>item.id!==this.commentInfo.id)
      }).catch((err)=>{
        console.log(err)
      })
    },
    trumpComment(){
      if (this.hasTrumped<0){
        gx_api.trump_attraction_comment({
          id:this.userInfo.userid,
          identify:this.userInfo.identify,
          comment_id:this.commentInfo.id,
        }).then(()=>{
          this.trump_sum+=1
          this.getMyTrumpData()
        })
      }
      else {
        gx_api.cancel_trump_attraction_comment({
          id:this.userInfo.userid,
          identify:this.userInfo.identify,
          comment_id:this.commentInfo.id,
        }).then(()=>{
          this.trump_sum--
          this.getMyTrumpData()
        })
      }
    },
    getMyTrumpData(){
      gx_api.get_my_attraction_trump_comments({
        id:this.userInfo.userid,
        identify:this.userInfo.identify,
      }).then((response)=>{
        this.$store.state.gx.myTrumpAttractionComments=response.data.comments
      })
    }
  },
  mounted() {
  },
  watch:{}
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
  justify-content: space-around;
  align-items: center;
  .row{
    width: calc(100% - 10px);
    height: auto;
    margin: 3px;
    padding-left: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
  #top{
    color: blue;
  }
}
</style>