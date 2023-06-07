<template>
  <div id="attraction-card">
    <div id="container" @click="detailGo">
      <div id="image-left">
        <img src="@/assets/img/无图片.png" v-if="attractionInfo.img===null" alt="">
        <img :src="image" v-if="attractionInfo.img!==null" alt="">
      </div>
      <div id="dis-right">
        <div id="title">
          <h4>{{attractionInfo.name}}</h4>
        </div>
        <div id="rate">
          评分:<span v-if="attractionInfo.score!==null">{{attractionInfo.score.toFixed(2)}}</span><span v-if="attractionInfo.score===null">无</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      image:"",
    }
  },
  props:{
    attractionInfo:{
      default:{
        id:-1,
        name:"",
        city:"",
        county:"",
        level:"",
        address:"",
        lng:0,
        lat:0,
        score:0,
        img:"",
      }
    }
  },
  components:{},
  computed:{},
  methods:{
    detailGo(){
      this.$router.push('/attraction/attractionDetail?id='+this.attractionInfo.id)
    },
  },
  mounted() {
    if(this.attractionInfo.img===null){
      this.image=this.attractionInfo.img
    }
    // window.addEventListener('scroll',checkInParent(this),true)
  },
  watch:{},
}
</script>

<style lang="less" scoped>
#container{
  width: 400px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  #image-left{
    img{
      width: 50px;
      height: 50px;
    }
  }
  #image-left:hover{
    cursor: pointer;
  }
  #dis-right{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div{
      flex: 1;
      text-align: left;
    }
  }
}
#container:hover{
  cursor: pointer;
  background-color: rgb(159, 194, 255)
}
</style>