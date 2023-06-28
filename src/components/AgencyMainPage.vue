<template>
  <div id="agency-main-page">
    <div id="container">
      <div id="top">
        <el-button type="primary" size="small" circle icon="el-icon-refresh-right" title="重置搜索"
                   @click="resetSearch"></el-button>
        <el-input placeholder="输入您需要查询的旅行社" v-model="search_keyword" prefix-icon="el-icon-search"
                  @keyup.enter.native="searchAgency('未找到相关数据')"></el-input>
        <el-button type="primary" size="small" circle icon="el-icon-map-location" title="在地图上选择查询"
                   @click="clickQueryCity"></el-button>
      </div>
      <div id="cards-show">
        <AgencyCard v-for="item in agency_list" :key="item.id" :agency-info="item"></AgencyCard>
      </div>
      <div id="pagination" v-if="isShowPagination">
        <el-pagination layout="prev, pager, next" :page-size="page_max_contain" :total="total"
                       @current-change="paginationIndexChange"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import * as gx_api from "@/api/GX/index"
import AgencyCard from "@/components/AgencyCard.vue";
import {mapState} from "vuex"
export default {
  data(){
    return{
      agency_list:[],
      search_keyword:"",
      isShowPagination:false,
      page_start_index:1,
      page_max_contain:10,
      total:0,
    }
  },
  computed:{
    ...mapState({
      clickCityName:state => state.gx.clickCityName
    })
  },
  components:{
    AgencyCard
  },
  methods:{
    getHotAgency(){
      gx_api.get_hot_agency().then((response)=>{
        this.agency_list=response.data.hot_agency
      })
    },
    clickQueryCity(){
      this.$store.state.gx.isClickAgency=!this.$store.state.gx.isClickAgency
    },
    // 重置搜索选项
    resetSearch(){
      // 确保地图上的数据能被彻底删除
      this.$store.state.gx.shouldClearAgencyLayers=false
      setTimeout(()=>{
        this.$store.state.gx.shouldClearAgencyLayers=true
      },10)
      this.$store.state.gx.clickCityName=""
      this.search_keyword=""
      this.page_start_index=1
      this.getHotAgency()
      this.isShowPagination=false
    },
    // 搜索，包括搜索框、地图点击搜索、分页等
    searchAgency(warn_text,start=1){
      if (this.search_keyword.length<=0&&this.clickCityName.length<=0){
        return
      }
      this.page_start_index=start
      this.isShowPagination=true
      gx_api.get_agency_search({
        city:this.clickCityName.slice(0,2),
        keyword:this.search_keyword,
        start:this.page_start_index,
        end:this.page_start_index+this.page_max_contain-1
      }).then((response)=>{
        this.total=response.data.total
        if (response.data.agency.length>0){
          this.agency_list=response.data.agency
          this.isShowPagination=true
        }
        else {
          this.$message.warning(warn_text)
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    paginationIndexChange(val){
      // console.log(val)
      this.searchAgency("未找到相关数据",val)
    }
  },
  mounted() {
    this.resetSearch()
    this.getHotAgency()
  },
  watch:{
    clickCityName(newVal){
      if (newVal.length>0){
        this.search_keyword=""
        this.isShowPagination=true
        this.searchAgency("未能找到相关数据")
      }
      else{
        this.isShowPagination=false
      }
    },
  }
}
</script>

<style lang="less" scoped>
#container{
  width: 430px;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  #top{
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  #cards-show{
    flex: 1;
    overflow: auto;
  }
  #pagination{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>