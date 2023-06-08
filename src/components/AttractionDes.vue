<template>
  <div id="attraction-des">
    <div id="container">
      <section>
        {{des}}
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
  props:['des'],
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
}
</style>
