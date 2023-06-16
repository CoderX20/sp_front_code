<template>
  <div id="app">
    <!--    主界面-->
    <el-container>
      <el-header>
        <page-header></page-header>
      </el-header>
      <el-main>
        <router-view name="left" class="main"></router-view>
        <router-view name="person" class="person"></router-view>
        <router-view name="map" id="map"></router-view>
<!--        <map-com id="map" v-if="!this.$route.path.includes('user')"></map-com>-->
      </el-main>
<!--      <el-footer>底部信息栏</el-footer>-->
    </el-container>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import MapCom from "@/components/MapCom.vue";
import * as gx_api from '@/api/GX/index';


export default {
  name: "appMain",
  components: {
    PageHeader,
    MapCom
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {
    // console.log("282999827727")
    gx_api.check_login({
      username: this.$cookies.get('username'),
      password: this.$cookies.get('password'),
      identify: this.$cookies.get('identify'),
    }).then((response) => {
      if (response.data.state === 1) {
        this.$store.state.gx.hasLogin = true
        this.$cookies.set('userid',response.data.user.id)
        this.$cookies.set('username',response.data.user.username)
        this.$cookies.set('password',response.data.user.password)
        this.$cookies.set('identify',response.data.user.identify)
        this.$store.state.gx.userInfo={
          userid:response.data.user.id,
          username:response.data.user.username,
          password:response.data.user.password,
          identify:response.data.user.identify,
          avatar:response.data.user.avatar,
          signature:response.data.user.signature
        }
        // 获取点赞数据
        // setTimeout(()=>{
        //   gx_api.get_my_trumps({
        //     id:this.$cookies.get("userid"),
        //     identify:this.$cookies.get("identify"),
        //   }).then((response)=>{
        //     if(response.data.state===1){
        //       this.$store.state.gx.myTrumpHallMessages=response.data.trump_data
        //     }
        //   }).catch((err)=>{
        //     console.log(err)
        //   },300)
        // })
        // // 获取大厅发言数据
        // gx_api.get_my_hall_messages({
        //   id:this.$cookies.get('userid'),
        //   identify:this.$cookies.get('identify')
        // }).then((response)=>{
        //   // console.log(response)
        //   this.$store.state.gx.myHallMessages=response.data.message_data
        // })
      } else {
        this.$store.state.gx.hasLogin = false
      }
    }).catch((err) => {
      console.log(err)
      this.$store.state.gx.hasLogin = false
    })
  }
}
</script>

<style lang="less" scoped>
.el-container {
  margin: 0px;
  padding: 0px;
  width: 100vw;
  height: 100vh;

  .el-header {
    margin: 0;
    padding: 0;
  }

  .el-main {
    margin: 0;
    padding: 0;
    overflow: auto;
    display: flex;
    .main {
      width: 450px;
      height: calc(100vh - 60px);
      overflow: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .person{
      width: 100vw;
      height: calc(100vh - 60px);
    }
    #map{
      flex: 1;
    }
  }

  .el-footer {
    margin: 0;
    padding: 0;
  }
}
</style>