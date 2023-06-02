<template>
  <div id="map-show">
    <div id="container">
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      base_url:"http://localhost:8090/iserver/services/map-SiChuanLvYouZiYuan/rest/maps/sichuan1",
      data_url:"http://localhost:8090/iserver/services/data-SiChuanLvYouZiYuan/rest/data",
      network_url:"http://localhost:8090/iserver/services/map-SiChuanLvYouZiYuan/rest/maps/trafficNetwork",
      Analyst_url : "http://localhost:8090/iserver/services/transportationAnalyst-SiChuanLvYouZiYuan/rest/networkanalyst/%E5%85%AC%E8%B7%AF%E7%BD%91@SiChuan",

    }
  },
  computed: {},
  methods: {
    // 加载地图
    mapLoad() {
      var map = L.map('map', {
        crs: L.CRS.EPSG4326,
        center: [30.18, 102.95],
        zoom: 5
      })
      var draw_layer //绘制的图层

      new L.supermap.TiandituTileLayer({key:"29e59aca0fac83aa8be876fa6e35573d",noWrap:false}).addTo(map)
      new L.supermap.TiledMapLayer(this.base_url).addTo(map);
      new L.supermap.TiledMapLayer(this.network_url).addTo(map);
      L.control.scale().addTo(map)
      var editableLayers = new L.FeatureGroup()
      map.addLayer(editableLayers)
      // map.invalidateSize(true)
      map._onResize();

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
      map.addControl(drawControl);

      this.handleMapEvent(drawControl._container, map);
      // 绘制监听事件
      map.on("draw:created", (e)=> {
        editableLayers.clearLayers()
        var type = e.layerType
        draw_layer = e.layer;
        if (type === 'marker') {
          draw_layer.bindPopup('选择点');
        }
        editableLayers.addLayer(draw_layer);
        // 创建集合查询参数
        var geometryParam = new L.supermap.GetFeaturesByGeometryParameters({
          datasetNames: ["SiChuan:A级旅游景区名录_Sheet1"],
          geometry: draw_layer,
          spatialQueryMode: "INTERSECT",
          // toIndex设置索引最大值
          toIndex: 10000,
        });
        // 几何查询
        new L.supermap.FeatureService(this.data_url).getFeaturesByGeometry(geometryParam, function (result) {
          // console.log(result.result.features.features)
          L.geoJSON(result.result.features).addTo(editableLayers) //这里需要将查询返回的结果添加到与绘制图形一个图层里面
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
  height: 100%;
  #map{
    width: 100%;
    height: calc(100vh - 60px);
  }
}
</style>