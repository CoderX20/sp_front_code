<template>
  <div id="routes-manager">
    <div id="container">
      <div id="top">
        <el-input prefix-icon="el-icon-search" placeholder="请输入需要查找的路线"></el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  computed:{
    account_id(){
      return this.$route.query.account_id
    }
  }
}
</script>

<style lang="less" scoped>
#container{
  width: 430px;
  height: calc(100% - 45px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  #top{
    width: 100%;
    margin-top: 5px;
  }
}
</style>
