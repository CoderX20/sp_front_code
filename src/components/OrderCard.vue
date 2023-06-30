<template>
  <div id="order-card">
    <div id="container">
      <el-descriptions border size="mini" :column="2">
        <el-descriptions-item label="订单编号">{{orderInfo.id}}</el-descriptions-item>
        <el-descriptions-item label="旅行社名">{{orderInfo.agency_name}}</el-descriptions-item>
        <el-descriptions-item label="路线" :span="2">
          <el-tag v-for="(item,index) in orderInfo.route" :key="index" size="mini">{{item.name}}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="价格">{{orderInfo.price}}</el-descriptions-item>
        <el-descriptions-item label="日期">{{orderInfo.time}}</el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  props:['orderInfo'],
}
</script>

<style lang="less" scoped>
#container{
  width: 700px;
  margin: 5px;
  background-color: rgb(250, 250, 250);
}
</style>