<template>
  <div id="space-message-card">
    <div id="container">
      <div id="top">
        <span>
          <strong>{{name}}</strong><br>
          <a>{{messageInfo.time}}</a>
        </span>
        <span v-if="account_id===userInfo.userid">
          <el-button circle size="mini" type="danger" icon="el-icon-delete" title="删除"></el-button>
        </span>
      </div>
      <hr>
      <div id="message-text">
        <p v-html="messageInfo.message"></p>
      </div>
      <div id="image">
        <img :src="item" alt="" v-for="item in img_list" width="150" :key="item">
      </div>
      <div id="visitor-op">
        <div>
          {{messageInfo.trump_count}}
          <img src="@/assets/img/点赞.png" alt="" v-if="hasTrumped<0">
          <img src="@/assets/img/已点赞.png" alt="" v-if="hasTrumped>=0">
        </div>
        <div>
          {{messageInfo.collect_count}}
          <img src="@/assets/img/收藏.png" alt="" v-if="hasCollected<0">
          <img src="@/assets/img/已收藏.png" alt="" v-if="hasCollected>=0">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  data(){
    return{
      img_list:this.messageInfo.img.split('\n')
    }
  },
  props:['messageInfo','name','account_id'],
  computed:{
    ...mapState({
      userInfo:state => state.gx.userInfo,
      space_trump_data:state => state.gx.space_trump_data,
      space_collect_data:state => state.gx.space_collect_data,
    }),
    hasTrumped(){
      return this.space_trump_data.indexOf(this.messageInfo.id)
    },
    hasCollected(){
      return this.space_collect_data.indexOf(this.messageInfo.id)
    }
  },
}
</script>

<style lang="less" scoped>
#container{
  width: 650px;
  margin: 5px;
  padding: 10px;
  background-color: rgb(241, 241, 241);
  #top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
      font-size: 12px;
    }
  }
  #image{
    display: flex;
    flex-wrap: wrap;
    img{
      margin: 10px;
    }
  }
  #visitor-op{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    border-top: 1px lightblue dot-dot-dash;
    img{
      width: 20px;
      height: 20px;
    }
    img:hover{
      cursor: pointer;
    }
  }
}
</style>
