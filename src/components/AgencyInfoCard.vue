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
        <el-table :data="attraction_list">
          <el-table-column label="景点" prop="name"></el-table-column>
          <el-table-column label="票价" prop="price"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" size="mini">购票</el-button>
            </template>
          </el-table-column>
        </el-table>
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
      attraction_list:[],
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
      gx_api.get_agency_attractions().then((response)=>{
        this.attraction_list=response.data.attraction_list
        this.$store.state.gx.attractions_map=this.attraction_list
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  mounted() {
    this.getAgencyData()
    this.getAttractions()
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
</style>