<template>
  <div id="my-hall-messages-show">
<!--    个人在大厅上的留言数据集合-->
    <div id="container">
      <div id="left-table">
        <div id="search-panel">
          <el-input placeholder="请输入需要查询的内容" prefix-icon="el-icon-search"></el-input>
        </div>
        <div id="message-table">
          <el-table :data="hallMessages_list">
            <el-table-column prop="time" label="发表时间"></el-table-column>
            <el-table-column prop="message" label="留言"></el-table-column>
            <el-table-column prop="trumpCount" label="被点赞次数"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini">编辑</el-button>
                <el-button size="mini" type="danger">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div id="bottom-pagination"></div>
      </div>
      <div id="right">
        <div id="message-deliver-chart"></div>
        <div id="trumped-chart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  data(){
    return{

    }
  },
  components:{
  },
  computed:{
    ...mapState({
      userInfo:state => state.gx.userInfo,
      hallMessages_list:state => state.gx.myHallMessages
    })
  },
  methods:{
  },
  mounted() {

  }
}
</script>

<style lang="less" scoped>
#container{
  width: 100%;
  height: calc(100vh - 160px);
  display: flex;
  justify-content: space-around;
  #left-table{
    flex: 1;
  }
  #right{
    flex: 1;
  }
}
</style>