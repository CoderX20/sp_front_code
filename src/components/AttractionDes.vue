<template>
  <div id="attraction-des">
    <div id="container" v-if="des!==null">
      <section v-for="item in des.split('\n')" :key="item">
        {{item}}
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  props:{
    des:{
      type:String,
      default:""
    }
  },
  computed:{
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
#container{
  width: 400px;
  padding: 15px;
  overflow: auto;
  section{
    margin-top: 5px;
    line-height: 20px;
    text-indent: 30px;
  }
}
</style>
