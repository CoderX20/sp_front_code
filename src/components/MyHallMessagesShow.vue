<template>
  <div id="my-hall-messages-show">
    <!--    个人在大厅上的留言数据集合-->
    <div id="container">
      <div id="left-table">
        <div id="search-panel">
          <el-input placeholder="请输入需要查询的内容" prefix-icon="el-icon-search" v-model="search_keyword"
                    @keyup.enter.native="messageSearch"></el-input>
        </div>
        <div id="message-table">
          <el-table :data="hallMessages_list" stripe>
            <el-table-column prop="time" label="发表时间"></el-table-column>
            <el-table-column prop="message" label="留言"></el-table-column>
            <el-table-column prop="trump_count" label="被点赞次数"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="editMessage(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="delMessage(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div id="bottom-pagination">
          <el-pagination
              background
              layout="prev, pager, next"
              :total="hallMessages_list.length"
              :page-size="5">
          </el-pagination>
        </div>
      </div>
      <div id="right">
        <div id="message-deliver-chart" ref="messages">
<!--          大厅发言数据展示-->
        </div>
        <div id="trumped-chart" ref="trumped">
<!--          大厅发言点赞数据展示-->
        </div>
      </div>
    </div>
    <el-dialog width="30%" id="edit-dialog" title="输入新的留言" :visible.sync="edit_dialog_show">
      <div>
        <el-input v-model="new_message" type="textarea" rows="4" maxlength="150" show-word-limit></el-input>
      </div>
      <div>
        <el-button @click="deliverNewMessage">确定</el-button>
        <el-button @click="edit_dialog_show=false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapState} from "vuex"
import * as gx_api from "@/api/GX";
import * as charts from "echarts";
import {getAllDaysToNow} from "@/utils/GetAllDaysToNow"
import {ArraySum} from "@/utils/ArrayFun"

export default {
  data() {
    return {
      search_keyword: "",
      hallMessages_list:[],
      edit_dialog_show:false,
      new_message:"",
      message_id:-1,
    }
  },
  components: {},
  computed: {
    ...mapState({
      userInfo: state => state.gx.userInfo,
      myHallMessages: state => state.gx.myHallMessages,
    }),

  },
  methods: {
    messageSearch() {
      if(this.search_keyword.length>0){
        // console.log(this.search_keyword)
        this.hallMessages_list = this.myHallMessages.filter(item => item.message.includes(this.search_keyword)
            || item.time.includes(this.search_keyword))
        if (this.hallMessages_list.length <= 0) {
          this.$message.warning("未找到相关记录")
          this.hallMessages_list = this.myHallMessages
        }
      }
    },
    chartsShow(){
      var messagesChart,trumpedChart
      messagesChart=charts.init(this.$refs.messages)
      trumpedChart=charts.init(this.$refs.trumped)
      var date_axis=getAllDaysToNow()
      var trump_sum=[]
      for(var el=0 ; el<date_axis.length;el++){
        trump_sum.push(ArraySum(this.myHallMessages.filter(item=>item.time===date_axis[el]).map(item=>{
          return item.trump_count
        })))
      }
      messagesChart && messagesChart.setOption({
        title:{
          text:"今年发帖数量"
        },
        legend:{},
        tooltip: {
          trigger: 'axis'
        },
        xAxis:{
          data:date_axis
        },
        yAxis: {
          type: 'value'
        },
        dataZoom:[
          {
            type: 'inside',
            start:0
          }
        ],
        series: [
          {
            data: date_axis.map(item=>{
              return this.myHallMessages.filter(el=>el.time===item).length
            }),
            type: 'line',
          }
        ],
      })
      trumpedChart && trumpedChart.setOption({
        title:{
          text:"今年被点赞数量"
        },
        legend:{},
        tooltip: {
          trigger: 'axis',
        },
        xAxis:{
          data:date_axis
        },
        yAxis: {
          type: 'value'
        },
        dataZoom:[
          {
            type: 'inside',
            start:0
          }
        ],
        series: [
          {
            data: trump_sum,
            type: 'line',
          }
        ],
      })
    },
    delMessage(index,row){
      this.$confirm("是否删除该留言","警告",{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
        gx_api.pop_messages({
          id:row.id
        }).then((response)=>{
          if(response.data.state===1){
            this.$message.success("删除成功")
          }
          gx_api.get_my_hall_messages({
            id: this.$cookies.get('userid'),
            identify: this.$cookies.get('identify')
          }).then((response) => {
            this.$store.state.gx.myHallMessages = response.data.message_data
            this.hallMessages_list=this.myHallMessages
            this.chartsShow()
          })
        }).catch((err)=>{
          console.log(err)
        })
      }).catch(()=>{})

    },
    editMessage(index,row){
      this.edit_dialog_show=true
      this.new_message=row.message
      this.message_id=row.id
    },
    deliverNewMessage() {
      gx_api.edit_hall_message({
        userid:this.$cookies.get('userid'),
        identify:this.$cookies.get('identify'),
        message_id:this.message_id,
        new_message:this.new_message,
      }).then((response)=>{
        if(response.data.state===1){
          this.$message.success("留言修改成功")
          gx_api.get_my_hall_messages({
            id: this.$cookies.get('userid'),
            identify: this.$cookies.get('identify')
          }).then((response) => {
            this.$store.state.gx.myHallMessages = response.data.message_data
            this.hallMessages_list=this.myHallMessages
          })
        }
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  watch: {
    search_keyword(newVal) {
      if (newVal === "") {
        this.hallMessages_list = this.myHallMessages
      }
    }
  },
  mounted() {
    gx_api.get_my_hall_messages({
      id: this.$cookies.get('userid'),
      identify: this.$cookies.get('identify')
    }).then((response) => {
      this.$store.state.gx.myHallMessages = response.data.message_data
      this.hallMessages_list=this.myHallMessages
      this.chartsShow()
    })
  },
}
</script>

<style lang="less" scoped>
#container {
  width: 100%;
  height: calc(100vh - 160px);
  display: flex;
  justify-content: space-around;
  #left-table {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    #search-panel {
      height: 50px;
    }

    #bottom-pagination {
      height: 30px;
      text-align: center;
    }

    #message-table {
      flex: 1;
      overflow: auto;
    }
  }

  #right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    #message-deliver-chart{
      flex: 1;
    }
    #trumped-chart{
      flex: 1;
    }
  }
}
#edit-dialog{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  div{
    display: flex;
    justify-content: space-around;
    margin: 10px;
  }
}
</style>