<template>
  <div id="routes-manager" style="width: 430px;height: calc(100vh - 110px)">
    <div id="container">
      <div id="top">
        <el-input prefix-icon="el-icon-search" placeholder="请输入需要查找的路线"
                  v-model="search_keyword" @keyup.enter.native="searchGo"></el-input>
      </div>
      <div id="mid-show">
        <div id="no-data" v-if="routes_data_show.length===0" style="text-align: center">
          <img src="@/assets/img/没有数据.png" alt="no-data" width="100"><br>
          <h4>没有任何路线数据</h4>
        </div>
        <routes-card v-for="item in routes_data_show" :key="item.id" :routeInfo="item"></routes-card>
      </div>
      <div id="bottom-bus">
        <el-button icon="el-icon-circle-plus-outline" circle title="新建路线" @click="isAddRouteOpen=true"></el-button>
      </div>
    </div>
    <el-dialog title="新增路线" :visible.sync="isAddRouteOpen" width="30%" style="">
      <div style="width: 100%;text-align: center">
        <el-input placeholder="输入新路径的名称" maxlength="100" show-word-limit v-model="new_route_name"></el-input>
      </div>
      <div style="text-align: center;margin: 20px">
        <el-button @click="addNewRoute">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import * as gx_api from "@/api/GX/index"
import {mapState} from "vuex"
import RoutesCard from "@/components/RoutesCard.vue";
export default {
  data(){
    return{
      routes_data_show:[],
      routes_data_origin:[],
      search_keyword:"",
      isAddRouteOpen:false,
      new_route_name:"",
    }
  },
  computed:{
    account_id(){
      return this.$route.query.account_id
    },
    ...mapState({
      userInfo:state => state.gx.userInfo
    }),
  },
  components:{
    RoutesCard
  },
  methods:{
    getMyRoutes(){
      // console.log(this.userInfo.identify)
      gx_api.get_my_routes_id({
        account_id:this.account_id,
        identify:this.userInfo.identify,
      }).then((response)=>{
        this.routes_data_show=response.data.routes
        this.routes_data_origin=this.routes_data_show
      })
    },
    searchGo(){
      if (this.search_keyword.length>0){
        this.routes_data_show=this.routes_data_origin.filter(item=>item.route.includes(this.search_keyword)
            ||item.name.includes(this.search_keyword))
        if(this.routes_data_show.length<=0){
          this.$message.warning("未找到相关数据")
          this.routes_data_show=this.routes_data_origin
        }
      }
    },
    addNewRoute(){
      if(this.new_route_name.length>0){
        gx_api.add_new_route({
          account_id:this.userInfo.userid,
          identify:this.userInfo.identify,
          route_name:this.new_route_name,
          route:"{\"nodes\":[]}",
          line:"",
          start:"",
        }).then(()=>{
          this.$message.success("新路线添加完成")
          this.getMyRoutes()
          this.isAddRouteOpen=false
        }).catch((err)=>{
          console.log(err)
        })
      }
    }
  },
  mounted() {
    this.getMyRoutes()
    setTimeout(()=>{
      this.$store.state.gx.attractions_map=[]
    },600)
  },
  watch:{
    search_keyword(newVal){
      if (newVal.length<=0){
        this.routes_data_show=this.routes_data_origin
      }
    },
    userInfo(){
      this.getMyRoutes()
    }
  },
  destroyed() {
    this.$store.state.gx.myRouteAttractions.attractions=[]
  }
}
</script>

<style lang="less" scoped>
#container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 430px;
  height: 100%;
  #top{
    width: 100%;
    margin-top: 5px;
  }
  #mid-show{
    width: 100%;
    flex-grow: 1;
    overflow: auto;
  }
  #bottom-buts{
    width: 100%;
    text-align: center;
  }
}
</style>
