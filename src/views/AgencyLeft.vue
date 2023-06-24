<template>
  <div id="agency-left">
    <div id="container">
      <router-view id="agency-main" name="agencyView"></router-view>
      <div id="agency-bottom">
        <el-button icon="el-icon-s-home" title="旅行社主屏"></el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  computed:{},
  methods:{},
  mounted() {
  },
  beforeDestroy() {
    // 确保地图上的数据能被彻底删除
    this.$store.state.gx.shouldClearAgencyLayers=false
    setTimeout(()=>{
      this.$store.state.gx.shouldClearAgencyLayers=true
    },10)
    this.$store.state.gx.clickCityName=""
  }
}
</script>

<style lang="less" scoped>
#container{
  width: 430px;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  #agency-main{
    flex: 1;
  }
  #agency-bottom{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
  }
}
</style>