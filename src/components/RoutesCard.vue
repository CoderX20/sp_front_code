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
          <el-button icon="el-icon-edit" circle size="mini" title="编辑" type="primary" @click="isEditShow=!isEditShow"></el-button>
          <el-button icon="el-icon-paperclip" circle size="mini" title="分享"></el-button>
          <el-button icon="el-icon-delete-solid" circle size="mini" title="删除" type="danger"></el-button>
        </div>
      </div>
      <div id="edit" v-if="isEditShow">
        <el-input placeholder="输入新的名称" size="mini" maxlength="100" show-word-limit v-model="new_route_name"></el-input>
        <el-button size="mini">提交</el-button>
        <el-button size="mini">编辑路线起点</el-button>
      </div>
      <el-collapse>
        <el-collapse-item title="旅游景点" name="1">
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isEditShow:false,
      new_route_name:this.routeInfo.name,
      my_route_attractions:JSON.parse(this.routeInfo.route),
    }
  },
  props:["routeInfo"],
  methods:{
    handleChange(val){
      if (val.length>0){
        this.$store.state.gx.myRouteAttractions=this.my_route_attractions
      }
    }
  },
  mounted() {

  },
  watch:{
    isEditShow(newVal){
      if(!newVal){
        this.new_route_name=this.routeInfo.name
      }
    }
  }
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
  #edit{
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
