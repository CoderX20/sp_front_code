<template>
  <div id="my-order-show">
    <div id="container">
      <div id="order-cards">
        <div style="text-align: center" v-if="order_list.length<=0">
          <img src="@/assets/img/没有数据.png" width="150" alt=""><br>
          <h5>还没有订单数据哟</h5>
        </div>
        <order-card v-for="(item,index) in order_list" :key="index" :order-info="item"></order-card>
      </div>
    </div>
  </div>
</template>

<script>
import * as gx_api from "@/api/GX/index"
import {mapState} from "vuex"
import {sortByTime} from "@/utils/ArrayFun"
import OrderCard from "@/components/OrderCard.vue";
export default {
  data(){
    return{
      order_list:[],
    }
  },
  computed:{
    ...mapState({
      userInfo:state => state.gx.userInfo,
    })
  },
  components:{
    OrderCard
  },
  methods:{
    getMyOrder(){
      gx_api.get_my_order({
        account_id:this.userInfo.userid,
        identify:this.userInfo.identify,
      }).then((response)=>{
        this.order_list=sortByTime(response.data.order_list)
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  mounted() {
    this.getMyOrder()
  }
}
</script>

<style lang="less" scoped>
#container{
  width: 100%;
  height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  #order-cards{
    width: 750px;
    flex: 1;
    overflow: auto;
  }
}
</style>