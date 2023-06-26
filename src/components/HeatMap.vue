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
        iconUrl: require("@/assets/img/旅游景点.png"),
        iconSize: [20, 20],
      }),
      attraction_nearby_icon:L.icon({
        iconUrl:require("@/assets/img/旅游景点-附近.png"),
        iconSize:[30,30]
      }),
      light_layer:new L.FeatureGroup(),
      nearby_attractions:[],
      nearby_layer:new L.FeatureGroup(),
    }
  },
  computed:{
    ...mapState({
      userInfo:state => state.gx.userInfo,
      isShowNearbyAttractions:state => state.gx.isShowNearbyAttractions,
      myNearbyAttractions:state => state.gx.myNearbyAttractions,
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
          if (this.attractions_on_route.length<=0){
            this.queryNearbyAttractions(30.18,102.95,10)
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
      this.map.addLayer(this.nearby_layer)
    },
    // 点亮城市与景点
    lightAttractions_map(){
      this.nearby_attractions=[]
      this.attractions_on_route.forEach(item=>{
        this.light_city(item.city)
        L.marker([item.lat,item.lng],{icon:this.attraction_icon})
            .bindPopup(`<h3>${item.name}</h3><p>${item.level}景区</p><img src="${item.img}" width="150">`)
            .addTo(this.light_layer)
            .on('dblclick',(e)=>{
              this.$router.push(`/attraction/attractionDetail?id=${item.id}`)
            })
        this.queryNearbyAttractions(item.lat,item.lng)
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
    },
    // 缓冲区查询点亮的路线景点到附近的景点
    queryNearbyAttractions(lat,lng,dis=1){
      let attraction_now=L.marker([lat,lng])
      var bufferParam = new L.supermap.GetFeaturesByBufferParameters({
        datasetNames: ["SiChuan:A级旅游景点"],
        bufferDistance: dis,
        geometry: attraction_now,
        toIndex:1000,
      });
      new L.supermap
          .FeatureService(this.data_url)
          .getFeaturesByBuffer(bufferParam, (serviceResult)=> {
            // console.log(serviceResult.result.features.features)
            this.nearby_attractions=this.nearby_attractions.concat(serviceResult.result.features.features)
            this.$store.state.gx.myNearbyAttractions=this.nearby_attractions
            // 数组去重
            this.$store.state.gx.myNearbyAttractions=Array.from(new Set(this.$store.state.gx.myNearbyAttractions))
          });
    },
    showNearbyAttractions_map(){
      this.myNearbyAttractions.forEach(item=>{
        L.marker([item.properties.LAT,item.properties.LNG],{icon:this.attraction_nearby_icon})
            .bindPopup(`<h4>${item.properties.NAME}</h4><p>${item.properties.LEVEL_USER}景区</p>`)
            .addTo(this.nearby_layer)
            .on('dblclick',(e)=>{
              // console.log(e)
              this.$router.push(`/attraction/attractionDetail?id=${Number(item.properties.ID)}`)
            })
      })
    }
  },
  mounted() {
    this.mapLoad()
    this.getMyRoutes()
    if (this.isShowNearbyAttractions){
      this.showNearbyAttractions_map()
    }
  },
  watch:{
    userInfo(newVal){
      if (newVal.userid&&newVal.identify){
        this.getMyRoutes()
      }
    },
    attractions_on_route(){
      this.lightAttractions_map()
    },
    isShowNearbyAttractions(newVal){
      if (newVal){
        this.showNearbyAttractions_map()
      }
      else {
        this.nearby_layer.clearLayers()
      }
    },
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