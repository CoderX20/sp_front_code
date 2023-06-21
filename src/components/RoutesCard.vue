<template>
  <div id="routes-card">
    <div id="container">
      <div id="top">
        <div>
          <strong>
            {{basicInfo.name}}
          </strong>
        </div>
        <div id="route-op">
          <el-button icon="el-icon-edit" circle size="mini" title="编辑" type="primary" @click="editRoute"></el-button>
          <el-button icon="el-icon-paperclip" circle size="mini" title="分享" @click="showShareDialog"></el-button>
          <el-button icon="el-icon-delete-solid" circle size="mini" title="删除" type="danger" @click="delRoute"></el-button>
        </div>
      </div>
      <div id="edit" v-if="isEditShow">
        <el-input placeholder="输入新的名称" size="mini" maxlength="100" show-word-limit v-model="new_route_name"></el-input>
        <el-button size="mini" @click="alter_route_name">提交</el-button>
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
    <el-dialog :visible.sync="shareDialogShow" title="分享至" id="share-dialog" width="30%">
      <div class="row">
        <el-checkbox-group v-model="share_to_list">
          <el-checkbox label="大厅"></el-checkbox>
          <br>
          <el-checkbox label="我的空间"></el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="row">
        <el-input placeholder="请输入留言" type="textarea" maxlength="100" show-word-limit rows="3" v-model="share_des"></el-input>
      </div>
      <div class="row" style="text-align: center">
        <el-button @click="subRouteShare">确定</el-button>
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
      isEditShow:false,
      new_route_name:this.routeInfo.name,
      my_route_attractions:JSON.parse(this.routeInfo.route).nodes,
      isEditMe_start:false,
      basicInfo:this.routeInfo,
      shareDialogShow:false,
      share_to_list:[],
      share_des:"",
    }
  },
  computed:{
    ...mapState({
      myRouteStart:state => state.gx.myRouteStart,
      isEditStart:state => state.gx.isEditStart,
      userInfo:state => state.gx.userInfo,
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
    },
    delRoute(){
      this.$confirm("是否删除此路线","警告",{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
        gx_api.del_my_route({
          route_id:this.basicInfo.id
        }).then(()=>{
          this.$message.success("删除成功")
          this.$destroy()
          this.$el.parentNode.removeChild(this.$el);
        }).catch((err)=>{
          console.log(err)
        })
      }).catch(()=>{})
    },
    alter_route_name(){
      gx_api.alter_route_name({
        route_id:this.routeInfo.id,
        route_name:this.new_route_name,
      }).then(()=>{
        this.$message.success("修改成功")
        this.basicInfo.name=this.new_route_name
      }).catch((err)=>{
        console.log(err)
      })
    },
    showShareDialog(){
      this.share_to_list=[]
      this.share_des=""
      this.shareDialogShow=true
    },
    subRouteShare(){
      var year=new Date().getFullYear()
      var month=new Date().getMonth()+1
      var day=new Date().getDate()
      var time=`${year}-${month}-${day}`
      let params={}
      let message_text=""
      message_text=`<a href="/?route_id=${this.routeInfo.id}" target="_blank">${this.share_des.length>0?this.share_des:"分享路线"}</a>`
      if (this.share_to_list.includes("大厅")){
        if (this.userInfo.identify==='users'){
          params={
            message:message_text,
            time:time,
            trumpCount:0,
            userID:this.userInfo.userid,
            name:this.userInfo.username,
            identify:this.userInfo.identify
          }
        }
        else if (this.userInfo.identify==='admin'){
          params={
            message:message_text,
            time:time,
            trumpCount:0,
            adminID:this.userInfo.userid,
            name:this.userInfo.username,
            identify:this.userInfo.identify
          }
        }
        gx_api.add_messages(params).then((response)=>{
          console.log(response)
          if (response.data.state===1){
            this.$message.success("发布成功")
          }
          else {
            this.$message.error("发布出现了问题")
          }
        }).catch((err)=>{
          console.log(err)
        })
      }
      if (this.share_to_list.includes("我的空间")){
      //   将路线分享至个人空间中
      }
      this.shareDialogShow=false
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
#share-dialog{
  display: flex;
  flex-direction: column;
  align-items: center;
  .row{
    width: 90%;
    margin: 10px;
    .el-checkbox{
      margin: 10px;
    }
  }
}
</style>
