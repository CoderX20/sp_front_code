<template>
  <div id="locate-map">
    <div id="container">
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  components:{
  },
  computed:{},
  methods:{
    mapLoad(){
      if ("geolocation" in navigator) {
        // 支持地理位置的浏览器
        navigator.geolocation.getCurrentPosition(function (position) {
          var latitude = position.coords.latitude;  // 纬度
          var longitude = position.coords.longitude;  // 经度
          var locate_map = L.map("map", {
            crs: L.CRS.EPSG4326,
            center: [latitude,longitude],
            // maxZoom: 30,
            zoom: 10
          })
          new L.supermap.TiandituTileLayer({key: "29e59aca0fac83aa8be876fa6e35573d", noWrap: false}).addTo(locate_map)
          L.marker([latitude,longitude]).addTo(locate_map);
        });
      } else {
        // 不支持地理位置的浏览器
        this.$message.error("该浏览器不支持地理位置获取。");
      }
    }
  },
  mounted() {
    this.mapLoad()
  }
}
</script>

<style lang="less" scoped>
#container{
  width: 100%;
  height: 200px;
  #map{
    width: 100%;
    height: 200px;
  }
}
</style>