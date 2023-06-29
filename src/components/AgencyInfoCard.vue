<template>
  <div id="agency-info-card">
    <div id="container">
      <div id="top">
        <el-descriptions :column="1" size="small" border>
          <el-descriptions-item label="旅行社">{{agency_info.agency_name}}</el-descriptions-item>
          <el-descriptions-item label="地址">{{agency_info.address}}</el-descriptions-item>
          <el-descriptions-item label="联系方式">{{agency_info.phone?agency_info.phone:"暂无联系方式"}}</el-descriptions-item>
          <el-descriptions-item label="许可证">{{agency_info.license}}</el-descriptions-item>
          <el-descriptions-item label="评分">{{agency_info.score?agency_info.score:"暂无评分"}}
            <el-button size="mini" type="primary" @click="showRateDialog">评分</el-button>
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <div id="attractions">
        <el-collapse accordion @change="handleChange">
          <el-collapse-item v-for="(item,index) in route_list" :key="index" :name="index">
            <template slot="title">
              {{"出发地："+item.nodes[0].name}}<el-tag type="success" size="mini">价格:{{item.price}}</el-tag>
            </template>
            <div style="padding: 5px">
              <el-tag v-for="el in item.nodes" :key="el.id">{{el.name}}</el-tag>
            </div>
            <hr>
            <div style="text-align: right;padding: 5px">
              <el-button size="mini" type="primary" @click="buyTicket(item.price,item.nodes)">购票</el-button>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <el-dialog title="评分" :visible.sync="isShowRateDialog" width="200px" style="text-align: center">
      <div>
        <el-rate v-model="my_rate"></el-rate>
      </div>
      <div>
        <el-button size="mini" type="primary" @click="subRate">提交</el-button>
      </div>
    </el-dialog>
    <el-dialog title="付款" :visible.sync="isShowBuyTicket" width="30%" id="pay-dialog">
      <div id="pay-code">
        <img src="../assets/img/收款.png" alt="" width="300">
      </div>
      <div>
        <el-input v-model="pay_price" disabled>
          <template slot="prepend">应付金额</template>
        </el-input>
      </div>
      <div id="pay-op">
        <el-button type="primary" @click="subNewOrder">确定</el-button>
        <el-button type="danger" @click="isShowBuyTicket=false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import * as gx_api from "@/api/GX/index"
import {mapState} from "vuex"
export default {
  data(){
    return{
      agency_info:{},
      agency_id:Number(this.$route.query.agency_id),
      isShowRateDialog:false,
      my_rate:-1,
      isRate:false,
      route_list:{},
      isShowBuyTicket:false,
      pay_price:0,
      pay_route:"",
    }
  },
  computed:{
    ...mapState({
      userInfo:state => state.gx.userInfo,
    }),
  },
  methods:{
    getAgencyData(){
      if (this.agency_id){
        gx_api.get_agency_id({
          agency_id:this.agency_id
        }).then((response)=>{
          if (response.data.state===1){
            this.agency_info=response.data.agency_info
          }
          else {
            this.$message.error("未找到相关数据")
            setTimeout(()=>{
              this.$router.go(-1)
            },200)
          }
        }).catch((err)=>{
          console.log(err)
        })
      }
    },
    getMyRate(){
      gx_api.get_my_agency_score({
        account_id:this.userInfo.userid,
        identify:this.userInfo.identify,
        agency_id:this.agency_id,
      }).then((response)=>{
        this.my_rate=response.data.score
        this.isRate = this.my_rate >= 0;
      }).catch((err)=>{
        console.log(err)
      })
    },
    showRateDialog(){
      this.getMyRate()
      this.isShowRateDialog=true
    },
    subRate(){
      console.log(this.userInfo)
      if (!this.isRate){
        gx_api.add_agency_score({
          account_id:this.userInfo.userid,
          identify:this.userInfo.identify,
          agency_id:this.agency_id,
          score:this.my_rate
        }).then(()=>{
          this.$message.success("提交成功")
          this.isShowRateDialog=false
        }).catch((err)=>{
          console.log(err)
        })
      }
      else {
        gx_api.alter_agency_score({
          account_id:this.userInfo.userid,
          identify:this.userInfo.identify,
          agency_id:this.agency_id,
          score:this.my_rate
        }).then(()=>{
          this.$message.success("提交成功")
          this.isShowRateDialog=false
        }).catch((err)=>{
          console.log(err)
        })
      }
    },
    getAttractions(){
      gx_api.get_agency_attractions(
          {
            agency_id:this.agency_id
          }
      ).then((response)=>{
        this.route_list=response.data.route_list.routes
      }).catch((err)=>{
        console.log(err)
      })
    },
    handleChange(val){
      if (typeof val==='number'){
        this.$store.state.gx.myRouteAttractions.attractions=this.route_list[val].nodes
      }
      else {
        this.$store.state.gx.myRouteAttractions.attractions=[]
      }
    },
    buyTicket(price,route){
      this.isShowBuyTicket=true
      this.pay_price=price
      this.pay_route=route
    },
    subNewOrder(){
      var year=new Date().getFullYear()
      var month=new Date().getMonth()+1
      var day=new Date().getDate()
      var hour=new Date().getHours()
      var minutes=new Date().getMinutes()
      var time=`${year}-${month}-${day} ${hour}:${minutes}`
      gx_api.add_new_order({
        account_id:this.userInfo.userid,
        identify:this.userInfo.identify,
        route:JSON.stringify(this.pay_route),
        agency_id:this.agency_id,
        price:this.pay_price,
        add_time:time,
      }).then(()=>{
        this.$message.success("支付成功")
        this.isShowBuyTicket=false
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  mounted() {
    this.getAgencyData()
    this.getAttractions()
  },
  destroyed() {
    this.$store.state.gx.myRouteAttractions.attractions=[]
  }
}
</script>

<style lang="less" scoped>
#container{
  width: 430px;
  height: calc(100vh - 70px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  #top{
    width: 400px;
    padding: 10px;
  }
  #attractions{
    width: 430px;
    flex: 1;
    overflow: auto;
  }
}
#pay-dialog{
  text-align: center;
  overflow: auto;
  #pay-op{
    margin: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>