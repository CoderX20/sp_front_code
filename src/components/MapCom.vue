<template>
  <div id="map-show">
    <div id="container">
      <div id="map" ref="map"></div>
      <div id="tool">
        <el-collapse>
          <el-collapse-item title="地图可视化">
            <el-checkbox v-model="showHeatMap">显示景点热力图</el-checkbox>
          </el-collapse-item>
        </el-collapse>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import L from "leaflet"
import '@supermap/iclient-leaflet';
import "leaflet-draw"
import "@/utils/leaflet-heat"
import "leaflet/dist/leaflet.css"
import "@supermap/iclient-leaflet/dist/iclient-leaflet.css"
import "leaflet-draw/dist/leaflet.draw.css"
import * as gx_api from "@/api/GX/index"

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
        iconUrl: require("@/assets/img/旅游景点.png"),
        iconSize: [20, 20],
      }),
      walk_icon:L.icon({
        iconUrl:require("@/assets/img/walk.png"),
        iconSize: [15, 30],
      }),
      start_icon:L.icon({
        iconUrl:require("@/assets/img/出发地.png"),
        iconSize:[35,35]
      }),
      city_layer:L.geoJSON(),
      route_layer:L.geoJSON(),
      editableLayers:L.featureGroup(),
      agency_layer:new L.FeatureGroup(),
      heat_layer:new L.FeatureGroup(),
      heat_data:[],
      showHeatMap:false
    }
  },
  computed: {
    ...mapState({
      attractions_points:state => state.gx.attractions_map,
      query_city:state => state.gx.query_city,
      myRouteAttractions:state => state.gx.myRouteAttractions.attractions,
      myRouteStart: state => state.gx.myRouteStart,
      isEditStart:state => state.gx.isEditStart,
      isClickAgency:state => state.gx.isClickAgency,
      shouldClearAgencyLayers:state => state.gx.shouldClearAgencyLayers,
    }),
    current_path(){
      return this.$route.path
    },
    route_id(){
      return this.$route.query.route_id
    }
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
        maxZoom:17,
        zoom: 5,
        layers: [vec_map, base_map],
        drawControl: false,
      })
      var draw_layer //绘制的图层
      var all_base_map={
        "矢量图":vec_map,
        "影像图":img_map,
        "地形图":ter_map
      }
      var main_map={
        "四川":base_map,
      }
      // this.base_map.addTo(this.map)
      L.control.layers(all_base_map,main_map,{
        position:"bottomright"
      }).addTo(this.map)
      this.map.invalidateSize(true)
      this.map.invalidateSize(true)
      L.control.scale().addTo(this.map)
      this.map.addLayer(this.attractions_layer)
      this.map.addLayer(this.editableLayers)
      this.map.addLayer(this.city_layer)
      this.map.addLayer(this.route_layer)
      this.map.addLayer(this.agency_layer)
      this.map.addLayer(this.heat_layer)

      // 添加绘制控件
      var drawControl = new L.Control.Draw(
          {
            position: 'topleft',
            draw: {
              polyline: false,
              polygon: {},
              circle: false,
              rectangle: {},
              marker: false,
              remove: {},
              circlemarker:false,
            },
            edit: {
              featureGroup: this.editableLayers,
              edit: false,
              remove: true
            }
          }
      )
      this.map.addControl(drawControl);
      // 如果有一组显示旅游景点的信息
      if (this.attractions_points.length>0){
        this.setAttractionsCenterZoom()
      }

      this.handleMapEvent(drawControl._container, this.map);
      // 绘制监听事件
      this.map.on("draw:created", (e)=> {
        this.editableLayers.clearLayers()
        var type = e.layerType
        draw_layer = e.layer;
        if (type === 'marker') {
          draw_layer.bindPopup('选择点');
        }
        this.editableLayers.addLayer(draw_layer);
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
          result.result.features.features.forEach(item=>{
            gx_api.get_attraction_by_id({
              id:item.properties.ID
            }).then((response)=>{
              let point_data=response.data.attractions
              L.marker([point_data.lat,point_data.lng],{
                icon:this.attraction_icon
              }).bindPopup(`<h3>${point_data.name}</h3><p>${point_data.level}景区</p><img src="${point_data.img}" alt="" width="150">`)
                  .openPopup()
                  .addTo(this.editableLayers)
                  .on('dblclick',(e)=>{
                    this.$router.push(`/attraction/attractionDetail?id=${point_data.id}`)
                  })
            })
          })
          // L.geoJSON(result.result.features,{
          //   pointToLayer:(point,latLng)=>{
          //     // console.log(point)
          //     L.marker(latLng,{icon:this.attraction_icon})
          //         .bindPopup(`<h4>${point.properties.NAME}</h4><p>${point.properties.LEVEL_USER}景区</p>`)
          //         .openPopup()
          //         .addTo(this.editableLayers)
          //         .on('dblclick',(e)=>{
          //           // console.log(e)
          //           this.$router.push(`/attraction/attractionDetail?id=${Number(point.properties.ID)}`)
          //         })
          //   },
          // })//这里需要将查询返回的结果添加到与绘制图形一个图层里面
        })
      });
      this.map.on('mousemove',()=>{
        // 判断是否正在绘制起点
        if (this.isEditStart){
          this.$refs.map.style.cursor='crosshair'
        }
        else
        {
          this.$refs.map.style.cursor='pointer'
        }
        if (this.isClickAgency){
          this.$refs.map.style.cursor='crosshair'
        }
        else {
          this.$refs.map.style.cursor='pointer'
        }
      })
      this.map.on('mousedown',(e)=>{
        let lat_lng = e.latlng
        if (this.isEditStart){
          // L.marker([lat_lng.lat,lat_lng.lng]).addTo(this.route_layer).bindPopup("出发点")
          this.$store.state.gx.myRouteStart=`${lat_lng.lat},${lat_lng.lng}`
          this.$store.state.gx.isEditStart=false
        }
        if (this.isClickAgency){
          this.agency_layer.clearLayers()
          this.queryCityName_agency(lat_lng.lat,lat_lng.lng)
          this.$store.state.gx.isClickAgency=false
        }
      })
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
      this.editableLayers.clearLayers()
      if (this.attractions_points.length>0){
        this.attractions_points.forEach(item=>{
          lat_max=item.lat>lat_max?item.lat:lat_max
          lat_min=item.lat<lat_min?item.lat:lat_min
          lng_max=item.lng>lng_max?item.lng:lng_max
          lng_min=item.lng<lng_min?item.lng:lng_min
        })
        var zoom_number=6
        if (this.attractions_points.length===1){
          zoom_number=9
        }
        // console.log(this.attractions_points.length,zoom_number)
        this.map.setView(L.latLng((lat_max+lat_min)/2,(lng_max+lng_min)/2),zoom_number)
        this.attractions_points.forEach(item=>{
          L.marker([item.lat,item.lng],{
            icon:this.attraction_icon,
          }).bindPopup(`<h3>${item.name}</h3><p>${item.level}景区</p><img src="${item.img}" width="150">`)
              .openPopup()
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
    queryCityShow(){
      var sqlParam = new L.supermap.GetFeaturesBySQLParameters({
        queryParameter: {
          name: "市@SiChuan",
          attributeFilter: `市名称 like'%${this.query_city.slice(0,2)}%' `
        },
        datasetNames: ["SiChuan:市"]
      });
      new L.supermap
          .FeatureService(this.data_url)
          .getFeaturesBySQL(sqlParam, (serviceResult) => {
             L.geoJSON(serviceResult.result.features).addTo(this.city_layer)
          });
    },
    routeAttractionsShow() {
      this.route_layer.clearLayers()
      this.attractions_layer.clearLayers()
      var lat_max=-1
      var lat_min=100
      var lng_max=-1
      var lng_min=400
      // 计算景点中心点
      this.myRouteAttractions.forEach(item=>{
        lat_max=item.lat>lat_max?item.lat:lat_max
        lat_min=item.lat<lat_min?item.lat:lat_min
        lng_max=item.lng>lng_max?item.lng:lng_max
        lng_min=item.lng<lng_min?item.lng:lng_min
      })
      // 当没有出发点时，将路线上的景点的中心点设置为地图中心点
      if (this.myRouteStart.length>0){
        this.map.setView(L.latLng(this.myRouteStart.split(',')),6)
      }
      // 将地图中心点设置为出发点
      else {
        this.map.setView(L.latLng((lat_max+lat_min)/2,(lng_max+lng_min)/2),6)
      }
      if (this.myRouteAttractions.length>1){
        this.bestRouteShow()
      }
      this.myRouteAttractions.map(item=>{
        L.marker([item.lat,item.lng],{icon:this.attraction_icon})
            .addTo(this.route_layer)
            .bindPopup(`<h4>${item.name}</h4><p>${item.level}景区</p><img src="${item.img}" alt="" width="150">`)
            .addTo(this.route_layer)
            .on('dblclick',()=>{
              this.$router.push(`/attraction/attractionDetail?id=${item.id}`)
            })
      })
    },
    bestRouteShow(){
      var points_nodes=this.myRouteAttractions.map(item=>{
        return L.latLng([item.lat,item.lng])
      })
      if (this.myRouteStart.length>0){
        points_nodes.push(L.latLng(this.myRouteStart.split(',')))
        L.marker(this.myRouteStart.split(','),{icon:this.start_icon}).addTo(this.route_layer).bindPopup("出发点")
      }
      //网络分析结果参数
      var resultSetting = new L.supermap.TransportationAnalystResultSetting({
        //是否在分析结果中包含弧段要素集合
        returnEdgeFeatures: true,
        //返回的弧段要素集合中是否包含集合对象信息
        returnEdgeGeometry: true,
        //返回的结果中是否包含经过弧段ID集合
        returnEdgeIDs: true,
        //返回的分析结果总是否包含结点要素集合
        returnNodeFeatures: false,
        //返回的结点要素集合中是否包含集合对象信息
        returnNodeGeometry: false,
        //返回的分析结果中是否包含经过结点ID集合
        returnNodeIDs: false,
        //返回分析结果中是否包含行驶导引集合
        returnPathGuides: false,
        //返回结果中是否包含路由对象集合
        returnRoutes: true
      });
      //网络分析通用参数
      var analystParameter = new L.supermap.TransportationAnalystParameter({
        //分析结果返回的内容
        resultSetting: resultSetting,
        //阻力字段的名称
        weightFieldName: "SmLength"
      });
      var findPathParams = new L.supermap.FindPathParameters({
        //是否通过结点ID指定路径分析的结点
        isAnalyzeById: false,
        //最佳路径分析经过的结点或设施点数组
        nodes: points_nodes,
        //是否按照弧段数最少的进行最佳路径分析
        hasLeastEdgeCount: false,
        //交通网络分析通用参数
        parameter: analystParameter
      });
      // 创建路径分析实例
      var findPathService = new L.supermap.NetworkAnalystService(this.Analyst_url);
      findPathService.findPath(findPathParams,  (serviceResult)=> {
        var result = serviceResult.result;
        result.pathList.map( (result) =>{
          L.geoJSON(result.route).addTo(this.route_layer);
          L.geoJSON(result.pathGuideItems, {
            pointToLayer:  (geoPoints, latlng)=> {
              L.marker(latlng,{icon:this.walk_icon}).addTo(this.route_layer);
            },
            filter:  (geoJsonFeature) => {
              if (geoJsonFeature.geometry && geoJsonFeature.geometry.type === 'Point') {
                return true;
              }
              return false;
            }
          }).addTo(this.route_layer);
        })
      });
    },
    getAndShowRoute_onURL(){
      if (this.route_id){
        gx_api.get_route_id({
          route_id:this.route_id
        }).then((response)=>{
          if (response.data.state===1){
            this.$store.state.gx.myRouteAttractions.attractions=JSON.parse(response.data.route).nodes
            this.$store.state.gx.myRouteStart=response.data.start
          }
        }).catch((err)=>{
          console.log(err)
        })
      }
    },
    // 点击地图查询该市内的旅行社名称
    queryCityName_agency(lat,lng){
      let point=L.marker([lat,lng])
      var geometryParam = new L.supermap.GetFeaturesByGeometryParameters({
        datasetNames: ["SiChuan:市"],
        geometry: point,
        spatialQueryMode: "WITHIN",
        toIndex:10000,
      });
      new L.supermap
          .FeatureService(this.data_url)
          .getFeaturesByGeometry(geometryParam,  (serviceResult)=> {
            // console.log(serviceResult.result.features)
            if (serviceResult.result.features.features.length>0){
              L.geoJSON(serviceResult.result.features)
                  .bindPopup(`${serviceResult.result.features.features[0].properties.市名称}`)
                  .addTo(this.agency_layer);
              this.map.setView(L.latLng(lat,lng))
              this.$store.state.gx.clickCityName=serviceResult.result.features.features[0].properties.市名称
            }
          });
    },
    getHeatData(){
      gx_api.get_attraction_heat_map().then((response)=>{
        this.heat_data=response.data.heat_data
        if (this.heat_data.length>0){
          L.heatLayer(this.heat_data, {
            radius: 20,
            minOpacity: 0.5
          }).addTo(this.heat_layer);
        }
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  mounted() {
    if (this.current_path.includes('routes')){
      this.$store.state.gx.attractions_map=[]
    }
    this.mapLoad()
    this.getAndShowRoute_onURL()
  },
  updated() {
  },
  watch:{
    attractions_points(){
      this.setAttractionsCenterZoom()
    },
    current_path(newVal){
      setTimeout(()=>{
        this.map.invalidateSize(true)
      },40)
      // if (newVal==="/"){
      //   setTimeout(()=>{
      //     this.map.invalidateSize(true)
      //   },40)
      // }
      if (newVal.includes('routes')){
        this.$store.state.gx.attractions_map=[]
      }
    },
    query_city(newVal){
      this.city_layer.clearLayers()
      if (newVal.length>0){
        this.queryCityShow()
      }
    },
    myRouteAttractions(newVal){
      this.$store.state.gx.attractions_map=[]
      if (newVal.length>0){
        this.routeAttractionsShow()
      }
      else {
        this.route_layer.clearLayers()
      }
    },
    myRouteStart(newVal){
      if (newVal.length>0){
        this.bestRouteShow()
      }
    },
    shouldClearAgencyLayers(newVal){
      if (newVal){
        this.agency_layer.clearLayers()
        this.map.setView(L.latLng(30.18, 102.95),5)
      }
    },
    showHeatMap(newVal){
      if (newVal){
        this.getHeatData()
      }
      else {
        this.heat_layer.clearLayers()
      }
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
  #tool{
    position: absolute;
    top: 10px;
    right: 15px;
    z-index: 1000;
    border: 1px grey solid;
    background-color: white;
    opacity: 80%;
    padding: 5px;
  }
}
</style>