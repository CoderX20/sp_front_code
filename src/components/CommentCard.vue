<template>
  <div id="comment-card">
    <div id="container">
      <div class="row" id="top">
        <span>@{{commentInfo.name}}&nbsp;<span v-if="commentInfo.identify==='admin'">(管理员)</span></span>
      </div>
      <div class="row" style="font-size: 12px">
        {{commentInfo.comment}}
      </div>
      <div class="row" style="font-size: 12px">
        <div id="time">
          {{commentInfo.time}}
        </div>
        <div id="trump-panel">
          {{commentInfo.trump_count}}
          <span id="trump-clicker">
            <img src="@/assets/img/点赞.png" alt="trump">
          </span>
          <span style="margin-left: 15px" v-if="userInfo.identify==='admin'">
            <el-button type="text">删除</el-button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  data(){
    return{}
  },
  props:{
    commentInfo:{
      default:{
        id:-1,
        comment:"",
        name:"",
        account_id:"",
        identify:"",
        time:"",
        trump_count:0,
      }
    }
  },
  computed:{
    ...mapState({
      userInfo:state => state.gx.userInfo
    })
  },
  methods:{},
  mounted() {
  },
  watch:{}
}
</script>

<style lang="less" scoped>
#container{
  width: 400px;
  min-height: 80px;
  margin-top: 3px;
  border: 1px grey dotted;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .row{
    width: calc(100% - 10px);
    height: auto;
    margin: 3px;
    padding-left: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    #time{
      width: 70px;
      padding: 2px;
    }
    #trump-panel{
      width: 100px;
      height: 20px;
      img{
        width: 15px;
        height: 15px;
      }
      span:hover{
        cursor: pointer;
      }
    }
  }
  #top{
    color: blue;
  }
}
</style>