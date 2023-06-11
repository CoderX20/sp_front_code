<template>
  <div id="attraction-comment-show">
    <div id="container">
      <div id="top">
        <hr>
        <span>
          <el-button type="text" @click="show_index=0">查看评论</el-button>
        </span>
        <span>
          <el-button type="text" @click="show_index=1">查看舆情统计</el-button>
        </span>
      </div>
      <div class="mid-show"  id="comments" v-if="show_index===0">
        <div id="no-data" style="text-align: center" v-if="comments.length<=0">
          <img src="@/assets/img/没有数据.png" alt="no-data" width="150"><br>
          <p>还没人评论哟</p>
        </div>
        <comment-card v-for="item in comments" :key="item.id" :commentInfo="item"></comment-card>
      </div>
      <div class="mid-show" id="charts" v-if="show_index===1">
        <div id="pie" ref="pie"></div>
      </div>
      <div id="write-comment" v-if="show_index===0">
        <span id="input">
          <el-input placeholder="请输入评论" type="textarea" maxlength="150" show-word-limit
                    rows="1" v-model="new_comment"></el-input>
        </span>
        <span id="sub">
          <el-button size="mini" @click="addNewComment">提交</el-button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import * as gx_api from "@/api/GX/index"
import {mapState} from "vuex"
import CommentCard from "@/components/CommentCard.vue";
import * as chart from "echarts";
export default {
  data(){
    return{
      show_index:0,
      attraction_id:-1,
      new_comment:"",
    }
  },
  computed:{
    ...mapState({
      comments:state => state.gx.attraction_comments,
      userInfo:state => state.gx.userInfo,
    })
  },
  components:{
    CommentCard
  },
  methods:{
    getComments(){
      gx_api.get_attraction_comments({
        attraction_id:this.attraction_id
      }).then((response)=>{
        this.$store.state.gx.attraction_comments=response.data.comments
      }).catch((err)=>{
        console.log(err)
      })
    },
    addNewComment(){
      var year=new Date().getFullYear()
      var month=new Date().getMonth()+1
      var day=new Date().getDate()
      var time=`${year}-${month}-${day}`
      if(this.new_comment.length>0){
        gx_api.add_attraction_comment({
          comment:this.new_comment,
          time:time,
          trump_count:0,
          account_id:this.userInfo.userid,
          identify:this.userInfo.identify,
          name:this.userInfo.username,
          attraction_id:this.attraction_id,
        }).then((response)=>{
          if (response.data.state===1){
            this.$message.success("评论提交成功")
            this.new_comment=''
            this.getComments()
          }
          else {
            this.$message.error("出现了问题")
          }
        })
      }
    },
    getMyTrump_attractionCommentData(){
      gx_api.get_my_attraction_trump_comments({
        id:this.userInfo.userid,
        identify:this.userInfo.identify,
      }).then((response)=>{
        this.$store.state.gx.myTrumpAttractionComments=response.data.comments
      })
    },
    chartsShow(){
      var pie=chart.init(this.$refs.pie)
      pie.setOption({
        title:{
          text:"评论情感倾向"
        },
        legend:{
          bottom:"bottom"
        },
        tooltip: {
          trigger: 'item'
        },
        series:[
          {
            type: 'pie',
            data:[
              {
                value:this.comments.filter(item=>item.emotion===1).length,
                name:"正向评论"
              },
              {
                value:this.comments.filter(item=>item.emotion===0).length,
                name: "负面评论"
              },
            ]
          }
        ]
      })
    }
  },
  mounted() {
    this.attraction_id=this.$route.query.id
    this.getComments()
    this.getMyTrump_attractionCommentData()
  },
  watch:{
    show_index(newVal){
      if (newVal===1&&this.comments.length<10){
        this.show_index=0
        this.$message.warning("没有足够的数据")
      }
      else if (newVal===1&&this.comments.length>=10){
        // dom加载需要一定时间，延迟显示统计图表
        setTimeout(()=>{
          this.chartsShow()
        },200)
      }
    }
  },
}
</script>

<style lang="less" scoped>
#container{
  width: 430px;
  height: calc(100vh - 300px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  #top{
    width: 100%;
    height: auto;
    span{
      display: inline-block;
      width: 50%;
      text-align: center;
    }
  }
  .mid-show{
    width: 100%;
    height: calc(100% - 80px);
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #write-comment{
    width: 100%;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    #sub{
      width: auto;
    }
    #input{
      flex: 1;
    }
  }
  #pie{
    width: 90%;
    flex: 1;
  }
}
</style>