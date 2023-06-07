<template>
  <div id="attractions-one">
    <div id="container">
      <div id="top">
        <div id="basic-detail">
          <div id="left-img">
            <img src="@/assets/img/无图片.png" alt="" v-if="detail.img===null">
            <img :src="image" alt="" v-if="detail.img!==null">
          </div>
          <div id="right-detail">
            <h4>{{detail.name}}</h4>
            <p>{{detail.address}}</p>
            <p>{{detail.level}}</p>
            <p>评分:{{detail.score===null?"暂无评分":detail.score.toFixed(2)}}</p>
          </div>
        </div>
        <div id="my-op">
          <el-button type="text" @click="isRate=true">评分</el-button>
          <el-button type="text">评论</el-button>
          <el-button type="text">添加到路线</el-button>
          <el-button v-if="userInfo.identify==='admin'" type="text">编辑</el-button>
        </div>
      </div>
    </div>
    <el-dialog id="rate-attraction" title="评分" width="200px" :visible="isRate">
      <div id="rate">
        <el-rate v-model="my_score"></el-rate>
      </div>
      <div id="buts">
        <el-button type="text" @click="subRate">提交</el-button>
        <el-button type="text" @click="isRate=false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapState} from "vuex"
import * as gx_api from "@/api/GX/index"
export default {
  data(){
    return{
      attraction_id:-1,
      detail:{},
      image:"",
      my_score:-1,
      has_score:false,
      isRate:false,
    }
  },
  components:{},
  computed:{
    ...mapState({
      userInfo:state => state.gx.userInfo,
    }),
  },
  methods:{
    getAttractionDetail(id){
      gx_api.get_attraction_by_id({
        id:id,
      }).then((response)=>{
        this.detail=response.data.attractions
        if(this.detail.img!==null){
          this.image=this.detail.img
        }
        this.$store.state.gx.attractions_map=[this.detail]
        // console.log(this.$store.state.gx.attractions_map)
      }).catch((err)=>{
        console.log(err)
      })
    },
    addAttractionScore(account_id,identify,attraction_id,score){
      gx_api.add_attraction_score({
        account_id,
        identify,
        attraction_id,
        score
      }).then(()=>{
        this.$message.success("评分提交成功")
      }).catch((err)=>{
        console.log(err)
      })
    },
    alterAttractionScore(account_id,identify,attraction_id,score){
      gx_api.alter_attraction_score({
        account_id,
        identify,
        attraction_id,
        score
      }).then(()=>{
        this.$message.success("评分提交成功")
      }).catch((err)=>{
        console.log(err)
      })
    },
    getMyAttractionScore(account_id,identify,attraction_id){
      gx_api.get_my_attraction_score({
        account_id,
        identify,
        attraction_id
      }).then((response)=>{
        this.my_score= response.data.score
        if(this.my_score<0){
          this.has_score=false
        }
        else {
          this.has_score=true
        }
      })
    },
    subRate(){
      if(this.has_score===false){
        this.addAttractionScore(this.userInfo.userid,this.userInfo.identify,this.attraction_id,this.my_score)
      }
      else{
        this.alterAttractionScore(this.userInfo.userid,this.userInfo.identify,this.attraction_id,this.my_score)
      }
      this.isRate=false
      this.getAttractionDetail(this.attraction_id)
    }
  },
  mounted() {
    this.attraction_id=this.$route.query.id
    this.getAttractionDetail(this.attraction_id)
    this.getMyAttractionScore(this.$cookies.get('userid'),this.$cookies.get('identify'),this.attraction_id)
  },
  watch:{

  },
}
</script>

<style lang="less" scoped>
#container{
  width: 430px;
  height: calc(100% - 45px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  #top{
    width: 100%;
    #basic-detail{
      display: flex;
      justify-content: space-between;
      align-items: center;
      #left-img{
        img{
          width: 150px;
          height: 150px;
        }
      }
      #right-detail{
        flex: 1;
        p{
          margin-top: 5px;
        }
      }
    }
    #my-op{
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
}
#rate-attraction{
  text-align: center;
}
</style>