<template>
  <div id="locate-map">
<!--    小地图-->
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
import {mapState} from "vuex"

export default {
  data(){
    return {
      map:null,
      data_url:"http://localhost:8090/iserver/services/data-SiChuanLvYouZiYuan/rest/data",
      my_routes:[],
      attractions_on_route:[],
      attraction_icon:L.icon({
        iconUrl: '/img/旅游景点.png',
        iconSize: [20, 20],
      }),
      light_layer:new L.FeatureGroup(),
    }
  },
  computed:{
    ...mapState({
      userInfo:state => state.gx.userInfo,
    })
  },
  methods:{
    getMyRoutes() {
      let i
      if (this.userInfo.userid&&this.userInfo.identify){
        gx_api.get_my_routes_id({
          account_id:this.userInfo.userid,
          identify:this.userInfo.identify,
        }).then((response)=>{
          this.my_routes=response.data.routes
          for (i=0;i<this.my_routes.length;i++){
            this.attractions_on_route=this.attractions_on_route.concat(JSON.parse(this.my_routes[i].route).nodes)
          }
        }).catch((err)=>{
          console.log(err)
        })
      }
    },
    mapLoad(){
      this.map=L.map('map', {
        crs: L.CRS.EPSG4326,
        center: [30.18, 102.95],
        zoomControl: false,
        maxZoom:17,
        minZoom:3,
        zoom: 5,
        drawControl: false,
      })
      new L.supermap.TiandituTileLayer({key:"7530538c12056e45977059aa0b79f1e2",noWrap:false,layerType:"vec"}).addTo(this.map)
      this.map.addLayer(this.light_layer)
    },
    // 点亮城市与景点
    lightAttractions_map(){
      this.attractions_on_route.forEach(item=>{
        this.light_city(item.city)
        L.marker([item.lat,item.lng],{icon:this.attraction_icon})
            .bindPopup(`<h3>${item.name}</h3><p>${item.level}景区</p><img src="${item.img}" width="150">`)
            .addTo(this.light_layer)
            .on('dblclick',(e)=>{
              this.$router.push(`/attraction/attractionDetail?id=${item.id}`)
            })
      })
    },
    // 点亮城市
    light_city(city){
      var sqlParam = new L.supermap.GetFeaturesBySQLParameters({
        queryParameter: {
          name: "市@SiChuan",
          attributeFilter: `市名称 like'%${city.slice(0,2)}%' `
        },
        datasetNames: ["SiChuan:市"]
      });
      new L.supermap
          .FeatureService(this.data_url)
          .getFeaturesBySQL(sqlParam, (serviceResult) => {
            L.geoJSON(serviceResult.result.features)
                .bindPopup(`${city}`)
                .addTo(this.light_layer)
          });
    }
  },
  mounted() {
    this.mapLoad()
    this.getMyRoutes()
  },
  watch:{
    userInfo(newVal){
      if (newVal.userid&&newVal.identify){
        this.getMyRoutes()
      }
    },
    attractions_on_route(){
      this.lightAttractions_map()
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