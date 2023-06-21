<template>
  <div id="routes-card">
    <div id="container">
      <div id="top">
        <div>
          <strong>
            {{routeInfo.name}}
          </strong>
        </div>
        <div id="route-op">
          <el-button icon="el-icon-edit" circle size="mini" title="编辑" type="primary" @click="editRoute"></el-button>
          <el-button icon="el-icon-paperclip" circle size="mini" title="分享"></el-button>
          <el-button icon="el-icon-delete-solid" circle size="mini" title="删除" type="danger"></el-button>
        </div>
      </div>
      <div id="edit" v-if="isEditShow">
        <el-input placeholder="输入新的名称" size="mini" maxlength="100" show-word-limit v-model="new_route_name"></el-input>
        <el-button size="mini">提交</el-button>
        <el-button size="mini" @click="editStartPoint">编辑出发点</el-button>
      </div>
      <el-collapse @change="handleChange">
        <el-collapse-item title="旅游景点" name="1">
          <div class="each-attraction" v-for="item in my_route_attractions" :key="item.id" @click="attractionGo(item.id)">
            <el-tag closable @close="delAttractionsOnRoute(item.id)">{{item.name}}</el-tag>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
import * as gx_api from "@/api/GX/index"
export default {
  data(){
    return{
      isEditShow:false,
      new_route_name:this.routeInfo.name,
      my_route_attractions:JSON.parse(this.routeInfo.route).nodes,
      isEditMe_start:false,
      basicInfo:this.routeInfo,
    }
  },
  computed:{
    ...mapState({
      myRouteStart:state => state.gx.myRouteStart,
      isEditStart:state => state.gx.isEditStart,
    })
  },
  props:["routeInfo"],
  methods:{
    handleChange(val){
      if (val.length>0){
        this.$store.state.gx.myRouteAttractions.attractions=this.my_route_attractions
        this.$store.state.gx.myRouteStart=this.basicInfo.start
      }
      else {
        this.$store.state.gx.myRouteAttractions.attractions=[]
        this.$store.state.gx.myRouteStart=""
      }
    },
    editStartPoint(){
      this.$store.state.gx.isEditStart=!this.$store.state.gx.isEditStart
      this.isEditMe_start=!this.isEditMe_start
    },
    attractionGo(id){
      this.$router.push(`/attraction/attractionDetail?id=${id}`)
    },
    editRoute(){
      if (!this.isEditShow){
        this.$store.state.gx.isEditStart=false
        this.isEditMe_start=false
      }
      this.isEditShow=!this.isEditShow
    },
    delAttractionsOnRoute(id){
      this.my_route_attractions=this.my_route_attractions.filter(item=>item.id!==id)
      this.$store.state.gx.myRouteAttractions.attractions=this.my_route_attractions
      let edited_route=JSON.stringify({
        nodes:this.my_route_attractions
      })
      gx_api.update_my_routes_attractions({
        route_id:this.basicInfo.id,
        attractions:edited_route
      }).then(()=>{
        this.$message.success("路线删除成功")
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  mounted() {

  },
  destroyed() {
    this.$store.state.gx.isEditStart=false
    this.isEditMe_start=false
  },
  watch:{
    isEditShow(newVal){
      if(!newVal){
        this.new_route_name=this.routeInfo.name
      }
    },
    myRouteStart(newVal){
      if (this.isEditMe_start){
        gx_api.update_route_start({
          route_id:this.routeInfo.id,
          route_start:newVal,
        }).then(()=>{
          this.$message.success("出发点编辑成功")
          this.basicInfo.start=this.myRouteStart
        }).catch((err)=>{
          console.log(err)
        })
        this.isEditMe_start=false
      }
    },
    isEditStart(newVal){
      if (!newVal){
        this.isEditMe_start=false
      }
    }
  }
}
</script>

<style lang="less" scoped>
#container{
  margin: 10px;
  padding: 5px;
  border: 1px blue solid;
  #top{
    width: 400px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    #route-op{
    }
  }
  #edit{
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .each-attraction:hover{
    background-color: rgb(236, 245, 255);
    cursor: pointer;
  }
}
</style>
