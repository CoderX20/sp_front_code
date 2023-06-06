<template>
  <div id="attractions-one">
    <div id="container">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      attraction_id:-1,
    }
  },
  components:{},
  computed:{},
  methods:{},
  mounted() {
    this.attraction_id=this.$route.params.id
  },
  watch:{},
}
</script>

<style lang="less" scoped>

</style>