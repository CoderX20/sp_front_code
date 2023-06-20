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
          <el-button icon="el-icon-edit" circle size="mini" title="编辑" type="primary" @click="isEditShow=!isEditShow"></el-button>
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
          <div v-for="item in my_route_attractions" :key="item.id">
            <el-tag closable>{{item.name}}</el-tag>
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
      isEditMe_start:false
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
      }
      else {
        this.$store.state.gx.myRouteAttractions.attractions=[]
      }
    },
    editStartPoint(){
      this.$store.state.gx.isEditStart=!this.$store.state.gx.isEditStart
      this.isEditMe_start=!this.isEditMe_start
    }
  },
  mounted() {

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
}
</style>
