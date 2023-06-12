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
<!--            <p>评分:{{detail.score===null?"暂无评分":detail.score.toFixed(2)}}</p>-->
            <p v-if="detail.score!==null">评分:{{String(detail.score).slice(0,4)}}</p>
            <p v-else>暂无评分</p>
          </div>
        </div>
        <div id="my-op">
          <el-button type="text" @click="isRate=true">评分</el-button>
          <el-button type="text" :autofocus="show_index===1" @click="commentGo">评论</el-button>
          <el-button type="text">添加到路线</el-button>
          <el-button v-if="userInfo.identify==='admin'" type="text" @click="isOpenEditDialog=true">编辑</el-button>
        </div>
      </div>
      <div id="detail-show">
        <attraction-des :des="detail.des" v-if="show_index===0"></attraction-des>
        <attraction-comments-show v-if="show_index===1"></attraction-comments-show>
      </div>
    </div>
    <el-dialog id="rate-attraction" title="评分" width="200px" :visible.sync="isRate">
      <div id="rate">
        <el-rate v-model="my_score"></el-rate>
      </div>
      <div id="buts">
        <el-button type="text" @click="subRate">提交</el-button>
        <el-button type="text" @click="isRate=false">取消</el-button>
      </div>
    </el-dialog>
    <el-dialog id="edit-attraction-detail" title="编辑景点信息" width="40%" :visible.sync="isOpenEditDialog">
      <div class="upload-row" style="text-align: center">
        <el-upload drag :multiple="false" accept="image/*" :show-file-list="true" action=""
                   :file-list="img_list" :limit="1" :headers="img_header" :on-change="onChange"
                   list-type="picture" :auto-upload="false">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </div>
      <div id="upload-row">
        <el-input type="textarea" rows="6" placeholder="请输入景点简介" show-word-limit maxlength="400" v-model="new_des"></el-input>
      </div>
      <div class="upload-row" id="sub-buts">
        <el-button @click="subNewFile">提交</el-button>
        <el-button @click="isOpenEditDialog=false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import AttractionDes from "@/components/AttractionDes.vue";
import AttractionCommentsShow from "@/components/AttractionCommentsShow.vue";
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
      show_index:0,
      isOpenEditDialog:false,
      img_list:[],
      img_header:{
        "Content-Type":"application/json"
      },
      img_base64:null,
      new_des:"",
      origin_des:"",
    }
  },
  components:{
    AttractionDes,
    AttractionCommentsShow,
  },
  computed:{
    ...mapState({
      userInfo:state => state.gx.userInfo,
      attractions_map:state => state.gx.attractions_map,
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
        this.new_des=response.data.attractions.des
        this.origin_des=response.data.attractions.des
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
    },
    commentGo(){
      this.show_index=this.show_index===1?0:1
    },
    onChange(file){
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
          this.img_list=[]
          this.$message.warning("文件大小不能超过5M")
        }
      }
    },
    subNewFile(){
      gx_api.upload_attraction_file({
        img:this.img_base64,
        des:this.new_des,
        attraction_id:this.attraction_id
      }).then(()=>{
        this.$message.success("资料上传成功")
        this.getAttractionDetail(this.attraction_id)
        this.isOpenEditDialog=false
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  mounted() {
    this.$store.state.gx.query_city=""
    this.attraction_id=this.$route.query.id
    this.getAttractionDetail(this.attraction_id)
    this.getMyAttractionScore(this.$cookies.get('userid'),this.$cookies.get('identify'),this.attraction_id)
  },
  watch:{
    attractions_map(newVal){
      if (newVal.length!==1){
        this.$store.state.gx.attractions_map=[this.detail]
      }
    },
    isOpenEditDialog(newVal){
      if (newVal===false){
        this.img_list=[]
        this.img_base64=null
        this.new_des=this.origin_des
      }
    }
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
        padding-left: 5px;
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
  #detail-show{
    width: 100%;
    height: calc(100% - 195px);
    flex: 1;
  }
}
#rate-attraction{
  text-align: center;
}
#edit-attraction-detail{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .upload-row{
    width: 100%;
    margin-bottom: 10px;
  }
  #sub-buts{
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>