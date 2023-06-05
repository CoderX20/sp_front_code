<template>
  <div id="attraction-left">
<!--    旅游景点查询与评价-->
    <div id="container">
      <div id="top">
        <div id="top-search">
          <el-input placeholder="输入需要搜索的景点名" prefix-icon="el-icon-search" v-model="search_keyword"
                    @keyup.enter.native="searchAttraction"></el-input>
        </div>
        <div id="select-panel">
          <el-select v-model="city_filter" placeholder="城市选择">
            <el-option v-for="item in city_list" :key="item" :value="item" :label="item"></el-option>
          </el-select>
          <el-select v-model="level_filter" placeholder="A级景点选择">
            <el-option v-for="item in level_list" :key="item" :value="item" :label="item"></el-option>
          </el-select>
        </div>
      </div>
      <div id="attraction-show-panel">
        <div v-if="attractions_list.length<=0">
          <img src="@/assets/img/无数据.png" alt="">
          <div style="text-align: center">
            <h3>无数据</h3>
          </div>
        </div>
        <AttractionCard v-for="item in attractions_list" :key="item.id" :attractionInfo="item"></AttractionCard>
      </div>
      <div id="bottom-buts">
        <el-button icon="el-icon-refresh-left" title="重置" @click="resetFilter"></el-button>
      </div>
    </div>
  </div>
</template>

<script>
import AttractionCard from "@/components/AttractionCard.vue";
import * as gx_api from "@/api/GX/index"
import {mapState} from "vuex"
export default {
  data(){
    return{
      search_keyword:"",
      city_list:[],
      city_filter:"",
      level_list:[],
      level_filter:"",
      attractions_list:[],
    }
  },
  components:{
    AttractionCard
  },
  computed:{
    ...mapState({
      attractions:state => state.gx.attractions,
    })
  },
  methods:{
    getAllAttractions(){
      gx_api.get_all_attractions().then((response)=>{
        this.$store.state.gx.attractions=response.data.attractions
        this.attractions_list=this.attractions
        // 城市选择数据
        this.city_list=this.attractions.map(item=>{
          return item.city
        })
        this.city_list=Array.from(new Set(this.city_list)).sort()
        // A级景点选择数据
        this.level_list=this.attractions.map(item=>{
          return item.level
        })
        this.level_list=Array.from(new Set(this.level_list)).sort()
      }).catch((err)=>{
        console.log(err)
      })
    },
    resetFilter(){
      this.city_filter=""
      this.level_filter=""
      this.search_keyword=""
    },
    searchAttraction(){
      if(this.search_keyword.length>0){
        // console.log(this.attractions[0].name)
        this.attractions_list=this.attractions.filter(item=>{
          return item.name.includes(this.search_keyword)
        })
        if(this.attractions_list.length<=0){
          this.$message.warning("没有找到相关景点")
          this.attractions_list=this.attractions
        }
      }
    },
  },
  mounted() {
    this.getAllAttractions()
  },
  watch:{
    search_keyword(newVal){
      if(newVal.length<=0){
        this.attractions_list=this.attractions
      }
    },
    city_filter(newVal){
      if(newVal.length>0){
        if (this.level_filter.length<=0){
          this.attractions_list=this.attractions.filter(item=>item.city===newVal)
        }
        else {
          this.attractions_list=this.attractions.filter(item=>item.city===newVal && item.level===this.level_filter)
        }
      }
      else {
        this.attractions_list=this.attractions
      }
    },
    level_filter(newVal){
      if(newVal.length>0){
        if(this.city_filter.length<=0){
          this.attractions_list=this.attractions.filter(item=>item.level===newVal)
        }
        else {
          this.attractions_list=this.attractions.filter(item=>item.level===newVal && item.city===this.city_filter)
        }
      }
      else {
        this.attractions_list=this.attractions
      }
    },
  },
}
</script>

<style lang="less" scoped>
#container{
  width: 430px;
  height: calc(100vh - 60px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  #top{
    height: 80px;
    margin-top: 5px;
    #top-search{
      width: 100%;
    }
    #select-panel{
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
  }
  #attraction-show-panel{
    flex: 1;
    overflow: auto;
  }
  #bottom-buts{
    height: 40px;
    margin-bottom: 5px;
  }
}
</style>