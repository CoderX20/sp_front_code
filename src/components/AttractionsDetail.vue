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
            <p>{{detail.name}}</p>
            <p>{{detail.address}}</p>
            <p>{{detail.level}}</p>
            <p>评分:{{detail.score===null?"暂无评分":detail.score}}</p>
            <p v-if="userInfo.identify==='admin'"><el-button type="text">编辑</el-button></p>
          </div>
        </div>
        <div id="my-op"></div>
      </div>
    </div>
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
    }
  },
  components:{},
  computed:{
    ...mapState({
      userInfo:state => state.gx.userInfo,
    })
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
    }
  },
  mounted() {
    this.attraction_id=this.$route.query.id
    this.getAttractionDetail(this.attraction_id)
  },
  watch:{},
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
      }
    }
  }
}
</style>