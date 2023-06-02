/* Copyright© 2000 - 2022 SuperMap Software Co.Ltd. All rights reserved.
 * This program are made available under the terms of the Apache License, Version 2.0
 * which accompanies this distribution and is available at http://www.apache.org/licenses/LICENSE-2.0.html.*/
(function () {
    var r = new RegExp("(^|(.*?\\/))(include-mapboxgl\.js)(\\?|$)"),
        s = document.getElementsByTagName('script'), targetScript;
    for (var i = 0; i < s.length; i++) {
        var src = s[i].getAttribute('src');
        if (src) {
            var m = src.match(r);
            if (m) {
                targetScript = s[i];
                break;
            }
        }
    }

    function inputScript(url) {
        var script = '<script type="text/javascript" src="' + url + '"><' + '/script>';
        document.writeln(script);
    }

    function inputCSS(url) {
        var css = '<link rel="stylesheet" href="' + url + '">';
        document.writeln(css);
    }

    function inArray(arr, item) {
        for (i in arr) {
            if (arr[i] == item) {
                return true;
            }
        }
        return false;
    }

    function supportES6() {
        var code = "'use strict'; class Foo {}; class Bar extends Foo {};";
        try {
            (new Function(code))();
        } catch (err) {
            return false;
        }
        if (!Array.from) {
            return false;
        }
        return true;
    }

    //加载类库资源文件
    function load() {
        var includes = (targetScript.getAttribute('include') || "").split(",");
        var excludes = (targetScript.getAttribute('exclude') || "").split(",");
        if (!inArray(includes, 'mapbox-gl-enhance') && !inArray(excludes, 'mapbox-gl')) {
            inputCSS('../../web/libs/mapbox-gl-js/1.13.2/mapbox-gl.css');
            inputScript('../../web/libs/mapbox-gl-js/1.13.2/mapbox-gl.js');
        }
        if (inArray(includes, 'mapbox-gl-enhance')) {
            inputCSS("../../web/libs/mapbox-gl-js-enhance/1.12.0/mapbox-gl-enhance.css");
            inputScript("../../web/libs/mapbox-gl-js-enhance/1.12.0/mapbox-gl-enhance.js");
        }
        if (inArray(includes, 'draw')) {
            inputCSS("../../web/libs/mapbox-gl-js/plugins/mapbox-gl-draw/1.3.0/mapbox-gl-draw.css");
            inputScript("../../web/libs/mapbox-gl-js/plugins/mapbox-gl-draw/1.3.0/mapbox-gl-draw.js");
        }
        if (inArray(includes, 'turf')) {
          inputScript('../../web/libs/turf/6.5.0/turf.min.js');
        }
        if (inArray(includes, 'mapboxgl-draw-rectangle-drag')) {
          inputScript('../../web/libs/mapboxgl-draw-rectangle-drag/1.0.1/mapboxgl-draw-rectangle-drag.browser.js');
        }
        if (inArray(includes, 'compare')) {
            inputCSS('../../web/libs/mapbox-gl-js/plugins/mapbox-gl-compare/0.4.0/mapbox-gl-compare.css');
            inputScript('../../web/libs/mapbox-gl-js/plugins/mapbox-gl-compare/0.4.0/mapbox-gl-compare.js');
        }
        if (inArray(includes, 'mapv')) {
            inputScript('../../web/libs/mapv/2.0.62/mapv.min.js');
        }
        if (inArray(includes, 'echarts')) {
            inputScript('../../web/libs/echarts/4.9.0/echarts.min.js');
            inputScript("../../web/libs/echarts-liquidfill/2.0.6/echarts-liquidfill.min.js");
            inputScript("../../web/libs/echartsLayer/EchartsLayer.min.js");
        }
        if (inArray(includes, 'echarts-vue')) {
            inputScript('../../web/libs/echarts/4.9.0/echarts.min.js');
            inputScript("../../web/libs/vue-echarts/4.1.0/vue-echarts.min.js");
            inputScript("../../web/libs/echarts-liquidfill/2.0.6/echarts-liquidfill.min.js");
            inputScript("../../web/libs/echartsLayer/EchartsLayer.min.js");
        }
        if (inArray(includes, 'three')) {
            inputScript("../../web/libs/three/0.129.0/build/three.min.js");
        }
        if (inArray(includes, 'three@0.121.1')) {
          inputScript("../../web/libs/three/0.121.1/build/three.min.js");
        }
        if (inArray(includes, 'antd')) {
            inputCSS("../../web/libs/antd/3.25.3/antd.min.css");
            inputScript("../../web/libs/moment/2.29.3/moment.min.js");
            inputScript("../../web/libs/antd/3.25.3/antd.min.js");
        }
        if (inArray(includes, 'deck')) {
            inputScript("../../web/libs/deck.gl/5.1.3/deck.gl.min.js");
        }
        if (inArray(includes, 'mapbox-print-pdf')) {
            inputScript("../../web/libs/mapbox-print-pdf/0.4.4/mapbox-print-pdf.min.js");
        }
        if (!inArray(excludes, 'iclient-mapboxgl')) {
            if (supportES6()) {
                inputScript("../../dist/mapboxgl/iclient-mapboxgl-es6.min.js");
            } else {
                inputScript("../../dist/mapboxgl/iclient-mapboxgl.min.js");
            }
        }
        if (!inArray(excludes, 'iclient-mapboxgl-css')) {
            inputCSS("../../dist/mapboxgl/iclient-mapboxgl.min.css");
        }
        if (inArray(includes, 'LegacyJSONLoader')) {
            inputScript('../../web/libs/three/0.110.0/examples/js/loaders/deprecated/LegacyJSONLoader.js');
        }
        if (inArray(includes, 'OBJLoader')) {
            inputScript("../../web/libs/three/0.129.0/examples/js/loaders/OBJLoader.js");
        }
        if (inArray(includes, 'MTLLoader')) {
            inputScript("../../web/libs/three/0.129.0/examples/js/loaders/MTLLoader.js");
        }
        if (inArray(includes, 'GLTFLoader')) {
            inputScript("../../web/libs/three/0.129.0/examples/js/loaders/GLTFLoader.js");
        }
        if (inArray(includes, 'OBJLoader2')) {
            inputScript('../../web/libs/three-wtm/1.0.0/three-wtm.js');
            inputScript('../../web/libs/wwobjloader2/4.0.0/wwobjloader2.js');
        }
        if (inArray(includes, 'proj4')) {
            inputScript('../../web/libs/proj4/2.8.0/proj4.js');
        }
        if (inArray(includes, 'echarts-gl')) {
            inputScript("../../web/libs/echarts-gl/1.1.2/echarts-gl.min.js");
        }
        if (inArray(includes, 'shapefile')) {
            inputScript("../../web/libs/shapefile/shapefile.js");
        }
        if (inArray(includes, 'jsonsql')) {
            inputScript("../../web/libs/jsonsql/jsonsql.js");
        }
        if (inArray(includes, 'geostats')) {
            inputScript("../../web/libs/geostats/geostats.js");
        }
        if (inArray(includes, 'canvg')) {
            inputScript('../../web/libs/canvg/canvg.min.js');
        }
        if (inArray(includes, 'convert')) {
            inputScript("../../web/libs/xml-js/1.6.8/xml-js.min.js");
        }
        if (inArray(includes, 'ant-design-vue')) {
            inputCSS("../../web/libs/ant-design-vue/1.7.8/antd.min.css");
            inputScript("../../web/libs/ant-design-vue/1.7.8/antd.min.js");
        }
        if (inArray(includes, 'xlsx')) {
            inputScript('../../web/libs/xlsx/0.18.5/xlsx.core.min.js');
        }
        if (inArray(includes, 'iclient-mapboxgl-vue')) {
            inputCSS("../../dist/mapboxgl/iclient-mapboxgl-vue.css");
            inputScript("../../dist/mapboxgl/iclient-mapboxgl-vue.min.js");
        }
        if (inArray(includes, 'iclient-mapboxgl-react')) {
            inputCSS("../../dist/mapboxgl/iclient-mapboxgl-react.css");
            inputScript("../../dist/mapboxgl/iclient-mapboxgl-react.min.js");
        }
        if (inArray(includes, 'vue-cesium')) {
            inputScript('../../web/libs/vue-cesium/2.1.4/index.umd.min.js');
        }
        if (inArray(includes, 'moment')) {
          inputScript("../../web/libs/moment/2.29.3/moment.min.js");
        }
        if (inArray(includes, 'lodash')) {
            inputScript('../../web/libs/lodash/4.17.21/lodash.min.js');
        }
        if (inArray(includes, 'tensorflow')) {
            inputScript('../../web/libs/tensorflow/3.9.0/tf.min.js');
        }
    }

    load();
    window.isLocal = true;
    window.server = document.location.toString().match(/file:\/\//) ? "http://localhost:8090" : document.location.protocol + "//" + document.location.host;
})();
