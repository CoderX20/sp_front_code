<template>
  <div id="locate-map">
    <div id="container">
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
import L from "leaflet"
import '@supermap/iclient-leaflet';
import "leaflet/dist/leaflet.css"
import "@supermap/iclient-leaflet/dist/iclient-leaflet.css"
import * as gx_api from "@/api/GX/index"

export default {
  data(){
    return {
      map:null,
      attractions_comments_layer:null,
      attraction_icon:L.icon({
        iconUrl: '/img/旅游景点.png',
        iconSize: [20, 20],
      }),
    }
  },
  props:["has_comments_attractions"],
  computed:{
    been_comment_attractions(){
      return this.has_comments_attractions
    }
  },
  methods:{
    loadLocateMap(){
      this.map=L.map("map",{
        crs: L.CRS.EPSG4326,
        center: [30.18, 103.95],
        zoomControl: false,
        zoom: 5,
        // attributionControl: false,
      })
      new L.supermap.TiandituTileLayer({key:"7530538c12056e45977059aa0b79f1e2",noWrap:false,layerType:"vec"}).addTo(this.map);
      this.attractions_comments_layer=new L.FeatureGroup()
      this.map.addLayer(this.attractions_comments_layer)
    },
    addCommentAttractions_toMap(){
      let i;
      // console.log(this.been_comment_attractions)
      this.attractions_comments_layer.clearLayers()
      for (i=0;i<this.been_comment_attractions.length;i++){
        gx_api.get_attraction_by_id({
          id:this.been_comment_attractions[i].attraction_id
        }).then((response)=>{
          // console.log(response)
          if (response.data.attractions){
            L.marker([response.data.attractions.lat,response.data.attractions.lng],{icon:this.attraction_icon})
                .bindPopup(`<h3>${response.data.attractions.name}</h3><p>${response.data.attractions.level}景区</p><img src="${response.data.attractions.img}" alt="" width="150">`)
                .addTo(this.attractions_comments_layer)
                .on("dblclick",()=>{
                  // console.log(response.data.attractions)
                  this.$router.push(`/attraction/attractionDetail?id=${response.data.attractions.id}`)
                })
          }
        }).catch((err)=>{
          console.log(err)
        })
      }
    }
  },
  mounted() {
    this.loadLocateMap()
    this.addCommentAttractions_toMap()
  },
  watch:{
    been_comment_attractions(){
      this.addCommentAttractions_toMap()
    }
  }
}
</script>

<style lang="less" scoped>
#container{
  width: 100%;
  height: calc(100vh - 140px);
  #map{
    width: 100%;
    height: calc(100vh - 140px);
  }
}
</style>