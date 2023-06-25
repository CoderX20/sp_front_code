<template>
  <div id="all-my-messages">
    <div id="container">
      <div id="left-chart">
        <div id="top-chart" ref="deliver_count"></div>
        <div id="nearby">
          <div id="nearby-title">
            <h3>为您推荐的景点</h3>
            <el-switch v-model="$store.state.gx.isShowNearbyAttractions" active-text="在地图上显示"></el-switch>
          </div>
          <div id="attractions">
            <el-tag v-for="(item,index) in nearby_attractions" :key="index" disable-transitions
                    @click="nearbyAttractionGo(Number(item.properties.ID))">{{item.properties.NAME}}</el-tag>
          </div>
        </div>
      </div>
      <div id="right">
        <HeatMap></HeatMap>
      </div>
    </div>
  </div>
</template>

<script>
import HeatMap from "@/components/HeatMap.vue";
import {mapState} from "vuex"
import * as gx_api from "@/api/GX/index"
import * as echarts from "echarts"
import {getRandomElementsInArr,sortByTime} from "@/utils/ArrayFun"
import {getAllDaysToNow} from "@/utils/GetAllDaysToNow"
export default {
  data(){
    return{
      my_hall_messages:[],
      my_attractions_comments:[],
      x_data:getAllDaysToNow(),
      deliver_charts:null,
      trumped_charts:null,
    }
  },
  components:{
    HeatMap
  },
  computed:{
    ...mapState({
      userInfo:state => state.gx.userInfo,
      myNearbyAttractions:state => state.gx.myNearbyAttractions,
    }),
    nearby_attractions(){
      return getRandomElementsInArr(this.myNearbyAttractions,10)
    },
  },
  methods:{
    getMyHallMessages(){
      gx_api.get_my_hall_messages({
        id:this.userInfo.userid,
        identify:this.userInfo.identify
      }).then((response)=>{
        this.my_hall_messages=sortByTime(response.data.message_data)
      }).catch((err)=>{
        console.log(err)
      })
    },
    getAllMyAttractionsComments(){
      gx_api.get_all_my_attractions_comments({
        account_id:this.userInfo.userid,
        identify:this.userInfo.identify,
      }).then((response)=>{
        this.my_attractions_comments=sortByTime(response.data.comments)
      })
    },
    showMyMessagesAndComments(){
      this.deliver_charts.setOption({
        title: {
          text: '今年留言统计'
        },
        xAxis:{
          type: 'category',
          boundaryGap: false,
          data:this.x_data
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend:{
        },
        dataZoom:[
          {
            type: 'inside',
            start:this.x_data.length-10,
            end:this.x_data.length
          },
          {
            start: this.x_data.length-10,
            end:this.x_data.length
          }
        ],
        series:[
          {
            name:"大厅发言",
            data:this.x_data.map(item=>{
              return this.my_hall_messages.filter(el=>el.time===item).length
            }),
            type: 'line',
          },
          {
            name:"景点发言",
            data:this.x_data.map(item=>{
              return this.my_attractions_comments.filter(el=>el.time===item).length
            }),
            type: 'line',
          },
        ]
      })
    },
    nearbyAttractionGo(id){
      this.$router.push(`/attraction/attractionDetail?id=${id}`)
    },
  },
  mounted() {
    setTimeout(()=>{
      this.getMyHallMessages()
      this.getAllMyAttractionsComments()
    },400)
    this.deliver_charts=echarts.init(this.$refs.deliver_count)
  },
  watch:{
    my_hall_messages(){
      this.showMyMessagesAndComments()
    },
    my_attractions_comments(){
      this.showMyMessagesAndComments()
    },
  },
  destroyed() {
    this.$store.state.gx.isShowNearbyAttractions=false
    this.$store.state.gx.myNearbyAttractions=[]
  }
}
</script>

<style lang="less" scoped>
#container{
  width: 100%;
  height: calc(100vh - 160px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  #left-chart{
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    #top-chart{
      flex: 1;
    }
    #nearby{
      flex: 1;
      overflow: auto;
      #nearby-title{
        margin: 10px;
      }
      .el-tag{
        margin: 5px;
      }
      .el-tag:hover{
        cursor: pointer;
        background-color: rgb(150, 190, 246);
      }
    }
  }
  #right{
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>