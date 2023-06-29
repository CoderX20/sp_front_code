<template>
  <div id="my-collect-message">
    <div id="container">
      <div id="message-cards">
        <div style="text-align: center" v-if="message_list.length<=0">
          <img src="@/assets/img/没有数据.png" width="150" alt=""><br>
          <h5>还没有收藏记录哟</h5>
        </div>
        <space-message-card v-for="(item,index) in message_list" :key="index"
                            :message-info="item" :account_id="item.account_id"></space-message-card>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
import * as gx_api from "@/api/GX/index"
import SpaceMessageCard from "@/components/SpaceMessageCard.vue";
import {sortByTime} from "@/utils/ArrayFun"
export default {
  data(){
    return{
      message_list:[],
    }
  },
  computed:{
    ...mapState({
      userInfo:state => state.gx.userInfo,
    })
  },
  components:{
    SpaceMessageCard
  },
  methods:{
    getMessages(){
      gx_api.get_my_collect_message({
        account_id:this.userInfo.userid,
        identify:this.userInfo.identify,
      }).then((response)=>{
        this.message_list=sortByTime(response.data.collect_list)
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  mounted() {
    this.getMessages()
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
  #message-cards{
    width: 700px;
    flex: 1;
    overflow: auto;

  }
}
</style>