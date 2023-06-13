<template>
  <div id="routes-card">
    <div id="container">
      <div id="top">
        <div>
          <strong>
            {{routeInfo.name}}
          </strong>
        </div>
        <div id="route-op">
          <el-button icon="el-icon-edit" circle size="mini" title="编辑" type="primary"></el-button>
          <el-button icon="el-icon-paperclip" circle size="mini" title="分享"></el-button>
          <el-button icon="el-icon-delete-solid" circle size="mini" title="删除" type="danger"></el-button>
        </div>
      </div>
      <div id="edit" v-if="isEditShow">
        <el-input size="mini"></el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isEditShow:false
    }
  },
  props:["routeInfo"]
}
</script>

<style lang="less" scoped>
#container{
  margin: 10px;
  #top{
    width: 400px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    #route-op{
    }
  }
}
</style>
