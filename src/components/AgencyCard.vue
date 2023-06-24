<template>
  <div id="agency-card">
    <div id="container">
      <p id="name"><strong>{{basic_info.agency_name}}</strong></p>
      <hr>
      <div style="font-size: 12px">
        <p>联系方式:{{basic_info.phone?basic_info.phone:"暂无联系方式"}}</p>
        <p>评分:{{basic_info.score?basic_info.score:"暂无评分"}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      basic_info:this.agencyInfo,
    }
  },
  props:['agencyInfo'],
}
</script>

<style lang="less" scoped>
#container{
  width: 400px;
  margin: 5px;
  padding: 5px;
  border: 1px blue solid;
  #name:hover{
    cursor: pointer;
    color: rgb(0, 176, 240);
  }
}
</style>