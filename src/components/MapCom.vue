<template>
  <div id="map-show">
    <div id="container">
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  data() {
    return {
      base_url:"http://localhost:8090/iserver/services/map-SiChuanLvYouZiYuan/rest/maps/sichuan1",
      data_url:"http://localhost:8090/iserver/services/data-SiChuanLvYouZiYuan/rest/data",
      Analyst_url : "http://localhost:8090/iserver/services/transportationAnalyst-SiChuanLvYouZiYuan/rest/networkanalyst/%E5%85%AC%E8%B7%AF%E7%BD%91@SiChuan",
      attractions_layer:L.geoJSON(),
      map:null,
      attraction_icon:L.icon({
        iconUrl: '/img/旅游景点.png',
        iconSize: [20, 20],
      }),
    }
  },
  computed: {
    ...mapState({
      attractions_points:state => state.gx.attractions_map,
    })
  },
  methods: {
    // 加载地图
    mapLoad() {
      var vec_map=new L.supermap.TiandituTileLayer({key:"7530538c12056e45977059aa0b79f1e2",noWrap:false,layerType:"vec"});
      var img_map=new L.supermap.TiandituTileLayer({key:"7530538c12056e45977059aa0b79f1e2",noWrap:false,layerType:"img"});
      var ter_map=new L.supermap.TiandituTileLayer({key:"7530538c12056e45977059aa0b79f1e2",noWrap:false,layerType:"ter"});
      var base_map=new L.supermap.TiledMapLayer(this.base_url);
      this.map=L.map('map', {
        crs: L.CRS.EPSG4326,
        center: [30.18, 102.95],
        zoomControl: false,
        zoom: 5,
        layers: [vec_map, base_map]
      })
      var draw_layer //绘制的图层
      var all_base_map={
        "矢量图":vec_map,
        "影像图":img_map,
        "地形图":ter_map
      }
      var main_map={
        "四川":base_map
      }
      // this.base_map.addTo(this.map)
      L.control.layers(all_base_map,main_map).addTo(this.map)
      L.control.scale().addTo(this.map)
      this.map.addLayer(this.attractions_layer)
      var editableLayers = new L.FeatureGroup()
      this.map.addLayer(editableLayers)

      // 添加绘制控件
      var options = {
        position: 'topleft',
        draw: {
          polyline: false,
          polygon: {},
          circle: false,
          rectangle: {},
          marker: false,
          remove: {},
        },
        edit: {
          featureGroup: editableLayers,
          edit: false,
          remove: true
        }
      };
      var drawControl = new L.Control.Draw(options);
      this.map.addControl(drawControl);
      // 如果有一组显示旅游景点的信息
      if (this.attractions_points.length>0){
        this.setAttractionsCenterZoom()
      }

      this.handleMapEvent(drawControl._container, this.map);
      // 绘制监听事件
      this.map.on("draw:created", (e)=> {
        editableLayers.clearLayers()
        var type = e.layerType
        draw_layer = e.layer;
        if (type === 'marker') {
          draw_layer.bindPopup('选择点');
        }
        editableLayers.addLayer(draw_layer);
        // 创建集合查询参数
        var geometryParam = new L.supermap.GetFeaturesByGeometryParameters({
          datasetNames: ["SiChuan:A级旅游景点"],
          geometry: draw_layer,
          spatialQueryMode: "INTERSECT",
          // toIndex设置索引最大值
          toIndex: 10000,
        });
        // 几何查询
        new L.supermap.FeatureService(this.data_url).getFeaturesByGeometry(geometryParam, (result)=> {
          // console.log(result.result.features.features)
          L.geoJSON(result.result.features,{
            pointToLayer:(point,latLng)=>{
              // console.log(point)
              L.marker(latLng,{icon:this.attraction_icon})
                  .bindPopup(`<h4>${point.properties.NAME}</h4><p>${point.properties.LEVEL_USER}景区</p>`)
                  .openPopup(latLng)
                  .addTo(editableLayers)
                  .on('dblclick',(e)=>{
                    // console.log(e)
                    this.$router.push(`/attraction/attractionDetail?id=${point.id+1}`)
                  })
            },
          }).addTo(editableLayers) //这里需要将查询返回的结果添加到与绘制图形一个图层里面
        })
      });
    },
    handleMapEvent(div, map) {
      if (!div || !map) {
        return;
      }
      div.addEventListener('mouseover', function () {
        map.scrollWheelZoom.disable();
        map.doubleClickZoom.disable();
      });
      div.addEventListener('mouseout', function () {
        map.scrollWheelZoom.enable();
        map.doubleClickZoom.enable();
      });
    },
    setAttractionsCenterZoom(){
      var lat_max=-1
      var lat_min=100
      var lng_max=-1
      var lng_min=400
      this.attractions_layer.clearLayers()
      if (this.attractions_points.length>0){
        this.attractions_points.forEach(item=>{
          lat_max=item.lat>lat_max?item.lat:lat_max
          lat_min=item.lat<lat_min?item.lat:lat_min
          lng_max=item.lng>lng_max?item.lng:lng_max
          lng_min=item.lng<lng_min?item.lng:lng_min
        })
        var zoom_number=6
        if (this.attractions_points.length===1){
          zoom_number=8
        }
        // console.log(this.attractions_points.length,zoom_number)
        this.map.setView(L.latLng((lat_max+lat_min)/2,(lng_max+lng_min)/2),zoom_number)
        this.attractions_points.forEach(item=>{
          L.marker([item.lat,item.lng],{
            icon:this.attraction_icon,
          }).bindPopup(`<h4>${item.name}</h4><p>${item.level}景区</p>`)
              .openPopup(L.latLng([item.lat,item.lng]))
              .addTo(this.attractions_layer)
              .on('dblclick',(e)=>{
                this.$router.push(`/attraction/attractionDetail?id=${item.id}`)
              })
        })
      }
      else {
        this.map.setView(L.latLng([30.18, 102.95]),5)
      }
    },
  },
  mounted() {

    this.mapLoad()
  },
  updated() {
    this.map.invalidateSize(true)
  },
  watch:{
    attractions_points(){
      this.setAttractionsCenterZoom()
    }
  },
}
</script>

<style lang="less" scoped>
#container{
  width: 100%;
  height: 100%;
  #map{
    width: 100%;
    height: calc(100vh - 60px);
  }
}
</style>