<template>
  <div id="attraction-left">
    <div id="container">
      <div id="attraction-detail">
        <router-view name="attractionShow"></router-view>
      </div>
      <div id="top" v-if="$route.path==='/attraction'">
        <div id="top-search">
          <el-input prefix-icon="el-icon-search" placeholder="请输入需要查询的景点名称" v-model="search_keyword"
                    @keyup.enter.native="searchGo('未找到相关数据')"></el-input>
        </div>
        <div id="top-select">
          <el-select placeholder="选择城市" v-model="city_filter_str">
            <el-option v-for="item in city_filter_arr" :key="item" :value="item" :label="item"></el-option>
          </el-select>
          <el-select placeholder="选择A级景点" v-model="level_filter_str">
            <el-option v-for="item in level_filter_arr" :key="item" :value="item" :label="item"></el-option>
          </el-select>
        </div>
      </div>
      <div id="attractions-show-panel" v-if="$route.path==='/attraction'">
        <div id="attractions">
          <div id="no-data" v-if="attraction_list.length<=0" style="text-align: center">
            <img src="@/assets/img/无数据.png" alt="" width="150"><br>
            <h4>目前没有数据</h4>
          </div>
          <attraction-card v-for="item in attraction_list" :key="item.id" :attractionInfo="item"></attraction-card>
        </div>
        <div id="page-control">
          <el-button icon="el-icon-d-arrow-left" @click="getPrePage" title="上一页"></el-button>
          <el-button icon="el-icon-d-arrow-right" @click="getNextPage" title="下一页"></el-button>
        </div>
      </div>
      <div id="bottom-buts">
        <el-button icon="el-icon-back" @click="back"></el-button>
        <el-button icon="el-icon-s-home" @click="home"></el-button>
        <el-button icon="el-icon-refresh-left" @click="reset"></el-button>
      </div>
    </div>
  </div>
</template>

<script>
import attractionCard from "@/components/AttractionCard.vue";
import * as gx_api from "@/api/GX/index"
export default {
  data(){
    return{
      search_keyword:"",
      city_filter_str:"",
      city_filter_arr:[],
      level_filter_str:"",
      level_filter_arr:[],
      attraction_list:[],
      page_start_index:0,
      page_max_contain:10,
    }
  },
  computed:{
    current_path(){
      return this.$route.path
    }
  },
  components:{
    attractionCard
  },
  methods:{
    back(){
      if (this.$route.path!=="/attraction"){
        this.$router.go(-1)
        gx_api.get_attractions_range({
          start:this.page_start_index,
          end:this.page_max_contain+this.page_start_index-1,
          city:this.city_filter_str,
          level:this.level_filter_str,
          keyword:this.search_keyword,
        }).then((response)=>{
          this.attraction_list=response.data.attractions
        })
      }
    },
    home(){
      this.$router.push("/attraction")
      gx_api.get_attractions_range({
        start:this.page_start_index,
        end:this.page_max_contain+this.page_start_index-1,
        city:this.city_filter_str,
        level:this.level_filter_str,
        keyword:this.search_keyword,
      }).then((response)=>{
        this.attraction_list=response.data.attractions
      })
    },
    reset(){
      this.search_keyword=""
      this.city_filter_str=""
      this.level_filter_str=""
      this.page_start_index=0
      gx_api.get_attractions_range({
        start:this.page_start_index,
        end:this.page_max_contain+this.page_start_index-1,
        city:this.city_filter_str,
        level:this.level_filter_str,
        keyword:this.search_keyword,
      }).then((response)=>{
        this.attraction_list=response.data.attractions
      })
    },
    getNextPage(){
      this.page_start_index+=this.page_max_contain
      gx_api.get_attractions_range({
        start:this.page_start_index,
        end:this.page_max_contain+this.page_start_index-1,
        city:this.city_filter_str,
        level:this.level_filter_str,
        keyword:this.search_keyword,
      }).then((response)=>{
        if(response.data.attractions.length>0){
          this.attraction_list=response.data.attractions
        }
        else {
          this.$message.warning("已经到顶了")
          this.page_start_index-=this.page_max_contain
        }
      })
    },
    getPrePage(){
      this.page_start_index-=this.page_max_contain
      gx_api.get_attractions_range({
        start:this.page_start_index,
        end:this.page_max_contain+this.page_start_index-1,
        city:this.city_filter_str,
        level:this.level_filter_str,
        keyword:this.search_keyword,
      }).then((response)=>{
        if(response.data.attractions.length>0){
          this.attraction_list=response.data.attractions
        }
        else {
          this.$message.warning("已经到底了")
          this.page_start_index+=this.page_max_contain
        }
      })
    },
    searchGo(message){
      this.page_start_index=0
      gx_api.get_attractions_range({
        start:this.page_start_index,
        end:this.page_max_contain+this.page_start_index-1,
        city:this.city_filter_str,
        level:this.level_filter_str,
        keyword:this.search_keyword,
      }).then((response)=>{
        if(response.data.attractions.length>0){
          this.attraction_list=response.data.attractions
        }
        else {
          this.$message.warning(message)
        }
      })
    }
  },
  mounted() {
    gx_api.get_attractions_city().then((response)=>{
      this.city_filter_arr=response.data.city
    })
    gx_api.get_attractions_level().then((response)=>{
      this.level_filter_arr=response.data.level.sort()
    })
    gx_api.get_attractions_range({
      start:this.page_start_index,
      end:this.page_max_contain+this.page_start_index-1,
      city:this.city_filter_str,
      level:this.level_filter_str,
      keyword:this.search_keyword,
    }).then((response)=>{
      this.attraction_list=response.data.attractions
    })
  },
  watch:{
    city_filter_str(){
      this.searchGo("未找到相关数据")
    },
    level_filter_str(){
      this.searchGo("未找到相关数据")
    },
    search_keyword(newVal){
      if (newVal.length<=0){
        this.searchGo("未找到相关数据")
      }
    },
    attraction_list(newVal){
      if (newVal.length>0){
        this.$store.state.gx.attractions_map=newVal
      }
    },
    current_path(newVal){
      if (newVal==='/attraction'){
        // 重新将景区数据导入
        gx_api.get_attractions_range({
          start:this.page_start_index,
          end:this.page_max_contain+this.page_start_index-1,
          city:this.city_filter_str,
          level:this.level_filter_str,
          keyword:this.search_keyword,
        }).then((response)=>{
          this.attraction_list=response.data.attractions
          this.$store.state.gx.attractions_map=this.attraction_list
        })
      }
      else {
        this.$store.state.gx.attractions_map=[]
      }
    }
  },
  destroyed() {
    this.$store.state.gx.attractions_map=[]
  }
}
</script>

<style lang="less" scoped>
#container{
  width: 430px;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  #top{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5px;
    #top-select{
      width: 100%;
      display: flex;
    }
  }
  #attractions-show-panel{
    width: 100%;
    height: calc(100% - 130px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    #attractions{
      height: calc(100% - 40px);
      overflow: auto;
    }
    #page-control{
      margin-bottom: 5px;
      text-align: center;
    }
  }
  #bottom-buts{
    width: 100%;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-around;
  }
}
</style>