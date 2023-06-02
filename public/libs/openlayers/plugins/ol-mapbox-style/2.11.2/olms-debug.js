/*!
 * 
 *     ol-mapbox-style
 *     Copyright 2016-present Boundless Spatial
 *     Copyright© 2000-2018 SuperMap Software Co. Ltd
 *     github: https://github.com/boundlessgeo/ol-mapbox-style
 *     github: https://github.com/SuperMap/ol-mapbox-style
 *     license: BSD 2-Clause "Simplified" License
 *     version: v3.0.0-beta.7
 * 
 */
olms =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./olms.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                              ol-mapbox-style - Use Mapbox Style objects with OpenLayers
                                                                                                                                                                                                                                                                              Copyright 2016-present Boundless Spatial, Inc.
                                                                                                                                                                                                                                                                              License: https://raw.githubusercontent.com/boundlessgeo/ol-mapbox-gl-style/master/LICENSE
                                                                                                                                                                                                                                                                              */

exports.applyStyle = applyStyle;
exports.applyBackground = applyBackground;
exports.apply = apply;
exports.getLayer = getLayer;
exports.getSource = getSource;

var _function = __webpack_require__(/*! @mapbox/mapbox-gl-style-spec/function */ "./node_modules/@mapbox/mapbox-gl-style-spec/function/index.js");

var _function2 = _interopRequireDefault(_function);

var _mapboxToCssFont = __webpack_require__(/*! mapbox-to-css-font */ "./node_modules/mapbox-to-css-font/index.js");

var _mapboxToCssFont2 = _interopRequireDefault(_mapboxToCssFont);

var _stylefunction = __webpack_require__(/*! ./stylefunction */ "./stylefunction.js");

var _stylefunction2 = _interopRequireDefault(_stylefunction);

var _google = __webpack_require__(/*! webfont-matcher/lib/fonts/google */ "./node_modules/webfont-matcher/lib/fonts/google.js");

var _google2 = _interopRequireDefault(_google);

var _proj = __webpack_require__(/*! ol/proj */ "ol/proj");

var _tilegrid = __webpack_require__(/*! ol/tilegrid */ "ol/tilegrid");

var _Map = __webpack_require__(/*! ol/Map */ "ol/Map");

var _Map2 = _interopRequireDefault(_Map);

var _GeoJSON = __webpack_require__(/*! ol/format/GeoJSON */ "ol/format/GeoJSON");

var _GeoJSON2 = _interopRequireDefault(_GeoJSON);

var _MVT = __webpack_require__(/*! ol/format/MVT */ "ol/format/MVT");

var _MVT2 = _interopRequireDefault(_MVT);

var _Observable = __webpack_require__(/*! ol/Observable */ "ol/Observable");

var _Tile = __webpack_require__(/*! ol/layer/Tile */ "ol/layer/Tile");

var _Tile2 = _interopRequireDefault(_Tile);

var _Vector = __webpack_require__(/*! ol/layer/Vector */ "ol/layer/Vector");

var _Vector2 = _interopRequireDefault(_Vector);

var _VectorTile = __webpack_require__(/*! ol/layer/VectorTile */ "ol/layer/VectorTile");

var _VectorTile2 = _interopRequireDefault(_VectorTile);

var _TileJSON = __webpack_require__(/*! ol/source/TileJSON */ "ol/source/TileJSON");

var _TileJSON2 = _interopRequireDefault(_TileJSON);

var _Vector3 = __webpack_require__(/*! ol/source/Vector */ "ol/source/Vector");

var _Vector4 = _interopRequireDefault(_Vector3);

var _VectorTile3 = __webpack_require__(/*! ol/source/VectorTile */ "ol/source/VectorTile");

var _VectorTile4 = _interopRequireDefault(_VectorTile3);

var _XYZ = __webpack_require__(/*! ol/source/XYZ */ "ol/source/XYZ");

var _XYZ2 = _interopRequireDefault(_XYZ);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var availableFonts;

function loadFont(fonts) {
  var i, ii;
  if (!Array.isArray(fonts)) {
    var stops = fonts.stops;
    if (stops) {
      for (i = 0, ii = stops.length; i < ii; ++i) {
        loadFont(stops[i][1]);
      }
    }
    return;
  }
  var googleFamilies = _google2.default.getNames();
  var families = fonts.map(function (font) {
    return (0, _mapboxToCssFont2.default)(font, 1).split(' 1px ')[1].replace(/"/g, '');
  });
  for (i = 0, ii = families.length; i < ii; ++i) {
    var family = families[i];
    var font = fonts[i];
    if (googleFamilies.indexOf(family) !== -1) {
      if (!availableFonts) {
        availableFonts = [];
      }
      if (availableFonts.indexOf(font) == -1) {
        availableFonts.push(font);
        var fontUrl = 'https://fonts.googleapis.com/css?family=' + family.replace(/ /g, '+');
        if (!document.querySelector('link[href="' + fontUrl + '"]')) {
          var markup = document.createElement('link');
          markup.href = fontUrl;
          markup.rel = 'stylesheet';
          document.getElementsByTagName('head')[0].appendChild(markup);
        }
      }
      break;
    }
  }
}

var defaultFont = ['Open Sans Regular', 'Arial Regular'];

function preprocess(layer) {
  if ('layout' in layer && 'text-field' in layer.layout) {
    loadFont(layer.layout['text-font'] || defaultFont);
  }
}

var spriteRegEx = /^(.*)(\?.*)$/;

function withPath(url, path) {
  if (path && url.indexOf('http') != 0) {
    url = path + url;
  }
  return url;
}

function toSpriteUrl(url, path, extension) {
  url = withPath(url, path);
  var parts = url.match(spriteRegEx);
  return parts ? parts[1] + extension + (parts.length > 2 ? parts[2] : '') : url + extension;
}

/**
 * Applies a style function to an `ol.layer.VectorTile` or `ol.layer.Vector`
 * with an `ol.source.VectorTile` or an `ol.source.Vector`. The style function
 * will render all layers from the `glStyle` object that use the specified
 * `source`, or a subset of layers from the same source. The source needs to be
 * a `"type": "vector"`, `"type": "geojson"` or `"type": "raster"` source.
 *
 * @param {ol.layer.VectorTile} layer OpenLayers layer.
 * @param {string|Object} glStyle Mapbox Style object.
 * @param {string} source `source` key or an array of layer `id`s from the
 * Mapbox Style object. When a `source` key is provided, all layers for the
 * specified source will be included in the style function. When layer `id`s
 * are provided, they must be from layers that use the same source.
 * @param {string} [path=undefined] Path of the style file. Only required when
 * a relative path is used with the `"sprite"` property of the style.
 * @param {Array<number>} [resolutions=undefined] Resolutions for mapping resolution to zoom level.
 * @return {Promise} Promise which will be resolved when the style can be used
 * for rendering.
 */
function applyStyle(layer, glStyle, source, path, resolutions) {
  return new Promise(function (resolve, reject) {

    if ((typeof glStyle === 'undefined' ? 'undefined' : _typeof(glStyle)) != 'object') {
      glStyle = JSON.parse(glStyle);
    }
    if (glStyle.version != 8) {
      reject(new Error('glStyle version 8 required.'));
    }
    var spriteScale, spriteData, spriteImageUrl;
    if (glStyle.sprite) {
      spriteScale = window.devicePixelRatio >= 1.5 ? 0.5 : 1;
      var sizeFactor = spriteScale == 0.5 ? '@2x' : '';
      var spriteUrl = toSpriteUrl(glStyle.sprite, path, sizeFactor + '.json');

      fetch(spriteUrl, { credentials: 'same-origin' }).then(function (response) {
        // if the response is ready return the JSON promise
        if (response.status === 200) {
          return response.json();
        } else if (sizeFactor !== '') {
          // return the JSON promise for the low-resolution sprites.
          sizeFactor = '';
          spriteUrl = toSpriteUrl(glStyle.sprite, path, '.json');
          return fetch(spriteUrl, { credentials: 'same-origin' }).then(function (r) {
            return r.json();
          });
        }
      }).then(function (spritesJson) {
        if (spritesJson === undefined) {
          throw 'No sprites found.';
        }
        spriteData = spritesJson;
        spriteImageUrl = toSpriteUrl(glStyle.sprite, path, sizeFactor + '.png');
        onChange();
      }).catch(function (err) {
        console.error(err);
        reject(new Error('Sprites cannot be loaded from ' + spriteUrl));
      });
    }

    var style;
    function onChange() {
      if (!style && (!glStyle.sprite || spriteData) && (!availableFonts || availableFonts.length > 0)) {
        style = (0, _stylefunction2.default)(layer, glStyle, source, resolutions, spriteData, spriteImageUrl, availableFonts);
        resolve();
      } else if (style) {
        layer.setStyle(style);
      }
    }

    if (layer instanceof _VectorTile2.default || layer instanceof _Vector2.default) {
      try {
        var layers = glStyle.layers;
        for (var i = 0, ii = layers.length; i < ii; ++i) {
          if (typeof source == 'string' && layers[i].source == source || source.indexOf(layers[i].id) >= 0) {
            preprocess(layers[i]);
          }
        }
        onChange();
      } catch (e) {
        setTimeout(function () {
          reject(e);
        }, 0);
      }
    }
  });
}

function setBackground(map, layer) {
  function updateStyle() {
    var element = map.getTargetElement();
    if (!element) {
      return;
    }
    var layout = layer.layout || {};
    var paint = layer.paint || {};
    var zoom = map.getView().getZoom();
    if ('background-color' in paint) {
      var bg = (0, _function2.default)(paint['background-color'], { function: 'interpolated', type: 'color' })(zoom);
      if (Array.isArray(bg)) {
        bg = 'rgba(' + Math.round(bg[0] * 255) + ',' + Math.round(bg[1] * 255) + ',' + Math.round(bg[2] * 255) + ',' + (bg[3] ? bg[3] : 1) + ')';
      }
      element.style.backgroundColor = bg;
    }
    if ('background-opacity' in paint) {
      element.style.backgroundOpacity = (0, _function2.default)(paint['background-opacity'], { function: 'interpolated', type: 'number' })(zoom);
    }
    if (layout.visibility == 'none') {
      element.style.backgroundColor = '';
      element.style.backgroundOpacity = '';
    }
  }
  if (map.getTargetElement()) {
    updateStyle();
  }
  map.on(['change:resolution', 'change:target'], updateStyle);
}

/**
 * Applies properties of the Mapbox Style's first `background` layer to the map.
 * @param {ol.Map} map OpenLayers Map.
 * @param {Object} glStyle Mapbox Style object.
 */
function applyBackground(map, glStyle) {
  glStyle.layers.some(function (l) {
    if (l.type == 'background') {
      setBackground(map, l);
      return true;
    }
  });
}

function getSourceIdByRef(layers, ref) {
  var sourceId;
  layers.some(function (layer) {
    if (layer.id == ref) {
      sourceId = layer.source;
      return true;
    }
  });
  return sourceId;
}

function processStyle(glStyle, map, baseUrl, host, path, accessToken) {
  var view = map.getView();
  if ('center' in glStyle && !view.getCenter()) {
    view.setCenter((0, _proj.fromLonLat)(glStyle.center));
  }
  if ('zoom' in glStyle && view.getZoom() === undefined) {
    view.setZoom(glStyle.zoom);
  }
  if (!view.getCenter() || view.getZoom() === undefined) {
    view.fit(view.getProjection().getExtent(), {
      nearest: true,
      size: map.getSize()
    });
  }
  if (glStyle.sprite) {
    if (glStyle.sprite.indexOf('mapbox://') == 0) {
      glStyle.sprite = baseUrl + '/sprite' + accessToken;
    } else if (glStyle.sprite.indexOf('http') != 0) {
      glStyle.sprite = (host ? host + path : '') + glStyle.sprite + accessToken;
    }
  }

  var glLayers = glStyle.layers;
  var geoJsonFormat = new _GeoJSON2.default();
  var layerIds = [];

  function finalizeLayer(layer) {
    if (layerIds.length > 0) {
      map.addLayer(layer);
      var setStyle = function setStyle() {
        applyStyle(layer, glStyle, layerIds, path).then(function () {
          layer.setVisible(true);
        }, function (e) {
          /*eslint no-console: ["error", { allow: ["error"] }] */
          console.error(e);
        });
      };
      if (layer.getSource()) {
        setStyle();
      } else {
        layer.once('change:source', setStyle);
      }
    }
  }

  var glLayer, glSource, glSourceId, id, layer, mapid, url;
  for (var i = 0, ii = glLayers.length; i < ii; ++i) {
    glLayer = glLayers[i];
    if (glLayer.type == 'background') {
      setBackground(map, glLayer);
    } else {
      id = glLayer.source || getSourceIdByRef(glLayers, glLayer.ref);
      if (id != glSourceId) {
        finalizeLayer(layer);
        layerIds = [];
        glSource = glStyle.sources[id];
        url = glSource.url;
        var tiles = glSource.tiles;
        if (url) {
          if (url.indexOf('mapbox://') == 0) {
            mapid = url.replace('mapbox://', '');
            tiles = ['a', 'b', 'c', 'd'].map(function (host) {
              return 'https://' + host + '.tiles.mapbox.com/v4/' + mapid + '/{z}/{x}/{y}.' + (glSource.type == 'vector' ? 'vector.pbf' : 'png') + accessToken;
            });
          }
        }

        if (glSource.type == 'vector') {
          layer = tiles ? function () {
            var tileGrid = (0, _tilegrid.createXYZ)({
              tileSize: 512,
              maxZoom: 'maxzoom' in glSource ? glSource.maxzoom : 22,
              minZoom: glSource.minzoom
            });
            return new _VectorTile2.default({
              declutter: true,
              maxResolution: tileGrid.getMinZoom() > 0 ? tileGrid.getResolution(tileGrid.getMinZoom()) : undefined,
              source: new _VectorTile4.default({
                attributions: glSource.attribution,
                format: new _MVT2.default(),
                tileGrid: tileGrid,
                urls: tiles
              }),
              visible: false,
              zIndex: i
            });
          }() : function () {
            var layer = new _VectorTile2.default({
              declutter: true,
              visible: false,
              zIndex: i
            });
            var tilejson = new _TileJSON2.default({
              url: url
            });
            var key = tilejson.on('change', function () {
              if (tilejson.getState() == 'ready') {
                var tileJSONDoc = tilejson.getTileJSON();
                var tiles = Array.isArray(tileJSONDoc.tiles) ? tileJSONDoc.tiles : [tileJSONDoc.tiles];
                for (var i = 0, ii = tiles.length; i < ii; ++i) {
                  var tile = tiles[i];
                  if (tile.indexOf('http') != 0) {
                    tiles[i] = glSource.url + tile;
                  }
                }
                var tileGrid = tilejson.getTileGrid();
                layer.setSource(new _VectorTile4.default({
                  attributions: tilejson.getAttributions() || tileJSONDoc.attribution,
                  format: new _MVT2.default(),
                  tileGrid: (0, _tilegrid.createXYZ)({
                    minZoom: tileGrid.getMinZoom(),
                    maxZoom: tileGrid.getMaxZoom(),
                    tileSize: 512
                  }),
                  urls: tiles
                }));
                if (tileGrid.getMinZoom() > 0) {
                  layer.setMaxResolution(tileGrid.getResolution(tileGrid.getMinZoom()));
                }
                (0, _Observable.unByKey)(key);
              }
            });
            return layer;
          }();
        } else if (glSource.type == 'raster') {
          var source;
          if (!glSource.tiles) {
            source = function () {
              return new _TileJSON2.default({
                url: url,
                crossOrigin: 'anonymous'
              });
            }();
          } else {
            source = new _XYZ2.default({
              attributions: glSource.attribution,
              minZoom: glSource.minzoom,
              maxZoom: 'maxzoom' in glSource ? glSource.maxzoom : 22,
              tileSize: glSource.tileSize || 512,
              url: url,
              urls: glSource.tiles,
              crossOrigin: 'anonymous'
            });
          }
          source.setTileLoadFunction(function (tile, src) {
            if (src.indexOf('{bbox-epsg-3857}') != -1) {
              var bbox = source.getTileGrid().getTileCoordExtent(tile.getTileCoord());
              src = src.replace('{bbox-epsg-3857}', bbox.toString());
            }
            tile.getImage().src = src;
          });
          layer = new _Tile2.default({
            source: source,
            visible: glLayer.layout ? glLayer.layout.visibility !== 'none' : true
          });
        } else if (glSource.type == 'geojson') {
          var data = glSource.data;
          var features, geoJsonUrl;
          if (typeof data == 'string') {
            geoJsonUrl = withPath(data, path);
          } else {
            features = geoJsonFormat.readFeatures(data, { featureProjection: 'EPSG:3857' });
          }
          layer = new _Vector2.default({
            source: new _Vector4.default({
              attributions: glSource.attribution,
              features: features,
              format: geoJsonFormat,
              url: geoJsonUrl
            }),
            visible: false,
            zIndex: i
          });
        }
        glSourceId = id;
      }
      layerIds.push(glLayer.id);
    }
  }
  finalizeLayer(layer);
  map.set('mapbox-style', glStyle);
}

/**
 * Loads and applies a Mapbox Style object to an OpenLayers Map. This includes
 * the map background, the layers, the center and the zoom.
 *
 * The center and zoom will only be set if present in the Mapbox Style document,
 * and if not already set on the OpenLayers map.
 *
 * Layers will be added to the OpenLayers map, without affecting any layers that
 * might already be set on the map.
 *
 * Layers added by `apply()` will have two additional properties:
 *
 *  * `mapbox-source`: The `id` of the Mapbox Style document's source that the
 *    OpenLayers layer was created from. Usually `apply()` creates one
 *    OpenLayers layer per Mapbox Style source, unless the layer stack has
 *    layers from different sources in between.
 *  * `mapbox-layers`: The `id`s of the Mapbox Style document's layers that are
 *    included in the OpenLayers layer.
 *
 * The map returned by this function will have an additional `mapbox-style`
 * property which holds the Mapbox Style object.
 *
 * @param {ol.Map|HTMLElement|string} map Either an existing OpenLayers Map
 * instance, or a HTML element, or the id of a HTML element that will be the
 * target of a new OpenLayers Map.
 * @param {string|Object} style JSON style object or style url pointing to a
 * Mapbox Style object. When using Mapbox APIs, the url must contain an access
 * token and look like
 * `https://api.mapbox.com/styles/v1/mapbox/bright-v9?access_token=[your_access_token_here]`.
 * When passed as JSON style object, all OpenLayers layers created by `apply()`
 * will be immediately available, but they may not have a source yet (i.e. when
 * they are defined by a TileJSON url in the Mapbox Style document). When passed
 * as style url, layers will be added to the map when the Mapbox Style document
 * is loaded and parsed.
 * @return {ol.Map} The OpenLayers Map instance that will be populated with the
 * contents described in the Mapbox Style object.
 */
function apply(map, style) {

  var accessToken, baseUrl, host, path;
  accessToken = baseUrl = host = path = '';

  if (!(map instanceof _Map2.default)) {
    map = new _Map2.default({
      target: map
    });
  }

  if (typeof style === 'string') {
    var parts = style.match(spriteRegEx);
    if (parts) {
      baseUrl = parts[1];
      accessToken = parts.length > 2 ? parts[2] : '';
    }

    fetch(style, {
      credentials: 'same-origin'
    }).then(function (response) {
      return response.json();
    }).then(function (glStyle) {
      var a = document.createElement('A');
      a.href = style;
      path = a.pathname.split('/').slice(0, -1).join('/') + '/';
      host = style.substr(0, style.indexOf(path));

      processStyle(glStyle, map, baseUrl, host, path, accessToken);
    }).catch(function (err) {
      console.error(err);
      throw new Error('Could not load ' + style);
    });
  } else {
    setTimeout(function () {
      processStyle(style, map);
    }, 0);
  }
  return map;
}

/**
 * Get the OpenLayers layer instance that contains the provided Mapbox Style
 * `layer`. Note that multiple Mapbox Style layers are combined in a single
 * OpenLayers layer instance when they use the same Mapbox Style `source`.
 * @param {ol.Map} map OpenLayers Map.
 * @param {string} layerId Mapbox Style layer id.
 * @return {ol.layer.Layer} layer OpenLayers layer instance.
 */
function getLayer(map, layerId) {
  var layers = map.getLayers().getArray();
  for (var i = 0, ii = layers.length; i < ii; ++i) {
    if (layers[i].get('mapbox-layers').indexOf(layerId) !== -1) {
      return layers[i];
    }
  }
}

/**
 * Get the OpenLayers source instance for the provided Mapbox Style `source`.
 * @param {ol.Map} map OpenLayers Map.
 * @param {string} sourceId Mapbox Style source id.
 * @return {ol.layer.Layer} layer OpenLayers layer instance.
 */
function getSource(map, sourceId) {
  var layers = map.getLayers().getArray();
  for (var i = 0, ii = layers.length; i < ii; ++i) {
    var source = layers[i].getSource();
    if (layers[i].get('mapbox-source').indexOf(sourceId) !== -1) {
      return source;
    }
  }
}

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-style-spec/deref.js":
/*!************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-style-spec/deref.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var refProperties = __webpack_require__(/*! ./util/ref_properties */ "./node_modules/@mapbox/mapbox-gl-style-spec/util/ref_properties.js");

function deref(layer, parent) {
    var result = {};

    for (var k in layer) {
        if (k !== 'ref') {
            result[k] = layer[k];
        }
    }

    refProperties.forEach(function (k) {
        if (k in parent) {
            result[k] = parent[k];
        }
    });

    return result;
}

module.exports = derefLayers;

/**
 * Given an array of layers, some of which may contain `ref` properties
 * whose value is the `id` of another property, return a new array where
 * such layers have been augmented with the 'type', 'source', etc. properties
 * from the parent layer, and the `ref` property has been removed.
 *
 * The input is not modified. The output may contain references to portions
 * of the input.
 *
 * @private
 * @param {Array<Layer>} layers
 * @returns {Array<Layer>}
 */
function derefLayers(layers) {
    layers = layers.slice();

    var map = Object.create(null);
    for (var i = 0; i < layers.length; i++) {
        map[layers[i].id] = layers[i];
    }

    for (var _i = 0; _i < layers.length; _i++) {
        if ('ref' in layers[_i]) {
            layers[_i] = deref(layers[_i], map[layers[_i].ref]);
        }
    }

    return layers;
}

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-style-spec/feature_filter/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-style-spec/feature_filter/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createFilter;

var types = ['Unknown', 'Point', 'LineString', 'Polygon'];

/**
 * Given a filter expressed as nested arrays, return a new function
 * that evaluates whether a given feature (with a .properties or .tags property)
 * passes its test.
 *
 * @private
 * @param {Array} filter mapbox gl filter
 * @returns {Function} filter-evaluating function
 */
function createFilter(filter) {
    return new Function('f', 'var p = (f && f.properties || {}); return ' + compile(filter));
}

function compile(filter) {
    if (!filter) return 'true';
    var op = filter[0];
    if (filter.length <= 1) return op === 'any' ? 'false' : 'true';
    var str = op === '==' ? compileComparisonOp(filter[1], filter[2], '===', false) : op === '!=' ? compileComparisonOp(filter[1], filter[2], '!==', false) : op === '<' || op === '>' || op === '<=' || op === '>=' ? compileComparisonOp(filter[1], filter[2], op, true) : op === 'any' ? compileLogicalOp(filter.slice(1), '||') : op === 'all' ? compileLogicalOp(filter.slice(1), '&&') : op === 'none' ? compileNegation(compileLogicalOp(filter.slice(1), '||')) : op === 'in' ? compileInOp(filter[1], filter.slice(2)) : op === '!in' ? compileNegation(compileInOp(filter[1], filter.slice(2))) : op === 'has' ? compileHasOp(filter[1]) : op === '!has' ? compileNegation(compileHasOp(filter[1])) : 'true';
    return '(' + str + ')';
}

function compilePropertyReference(property) {
    var ref = property === '$type' ? 'f.type' : property === '$id' ? 'f.id' : 'p[' + JSON.stringify(property) + ']';
    return ref;
}

function compileComparisonOp(property, value, op, checkType) {
    var left = compilePropertyReference(property);
    var right = property === '$type' ? types.indexOf(value) : JSON.stringify(value);
    return (checkType ? 'typeof ' + left + '=== typeof ' + right + '&&' : '') + left + op + right;
}

function compileLogicalOp(expressions, op) {
    return expressions.map(compile).join(op);
}

function compileInOp(property, values) {
    if (property === '$type') values = values.map(function (value) {
        return types.indexOf(value);
    });
    var left = JSON.stringify(values.sort(compare));
    var right = compilePropertyReference(property);

    if (values.length <= 200) return left + '.indexOf(' + right + ') !== -1';

    return '' + ('function(v, a, i, j) {' + 'while (i <= j) { var m = (i + j) >> 1;' + '    if (a[m] === v) return true; if (a[m] > v) j = m - 1; else i = m + 1;' + '}' + 'return false; }(') + right + ', ' + left + ',0,' + (values.length - 1) + ')';
}

function compileHasOp(property) {
    return property === '$id' ? '"id" in f' : JSON.stringify(property) + ' in p';
}

function compileNegation(expression) {
    return '!(' + expression + ')';
}

// Comparison function to sort numbers and strings
function compare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-style-spec/function/color_spaces.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-style-spec/function/color_spaces.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Constants
var Xn = 0.950470,
    // D65 standard referent
Yn = 1,
    Zn = 1.088830,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1,
    deg2rad = Math.PI / 180,
    rad2deg = 180 / Math.PI;

// Utilities
function xyz2lab(t) {
    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
    return t > t1 ? t * t * t : t2 * (t - t0);
}

function xyz2rgb(x) {
    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2xyz(x) {
    x /= 255;
    return x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

// LAB
function rgbToLab(rgbColor) {
    var b = rgb2xyz(rgbColor[0]),
        a = rgb2xyz(rgbColor[1]),
        l = rgb2xyz(rgbColor[2]),
        x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
        y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
        z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);

    return [116 * y - 16, 500 * (x - y), 200 * (y - z), rgbColor[3]];
}

function labToRgb(labColor) {
    var y = (labColor[0] + 16) / 116,
        x = isNaN(labColor[1]) ? y : y + labColor[1] / 500,
        z = isNaN(labColor[2]) ? y : y - labColor[2] / 200;
    y = Yn * lab2xyz(y);
    x = Xn * lab2xyz(x);
    z = Zn * lab2xyz(z);
    return [xyz2rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
    xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z), xyz2rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z), labColor[3]];
}

// HCL
function rgbToHcl(rgbColor) {
    var labColor = rgbToLab(rgbColor);
    var l = labColor[0],
        a = labColor[1],
        b = labColor[2];
    var h = Math.atan2(b, a) * rad2deg;
    return [h < 0 ? h + 360 : h, Math.sqrt(a * a + b * b), l, rgbColor[3]];
}

function hclToRgb(hclColor) {
    var h = hclColor[0] * deg2rad,
        c = hclColor[1],
        l = hclColor[2];
    return labToRgb([l, Math.cos(h) * c, Math.sin(h) * c, hclColor[3]]);
}

module.exports = {
    lab: {
        forward: rgbToLab,
        reverse: labToRgb
    },
    hcl: {
        forward: rgbToHcl,
        reverse: hclToRgb
    }
};

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-style-spec/function/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-style-spec/function/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var colorSpaces = __webpack_require__(/*! ./color_spaces */ "./node_modules/@mapbox/mapbox-gl-style-spec/function/color_spaces.js");
var parseColor = __webpack_require__(/*! ../util/parse_color */ "./node_modules/@mapbox/mapbox-gl-style-spec/util/parse_color.js");
var extend = __webpack_require__(/*! ../util/extend */ "./node_modules/@mapbox/mapbox-gl-style-spec/util/extend.js");
var getType = __webpack_require__(/*! ../util/get_type */ "./node_modules/@mapbox/mapbox-gl-style-spec/util/get_type.js");
var interpolate = __webpack_require__(/*! ../util/interpolate */ "./node_modules/@mapbox/mapbox-gl-style-spec/util/interpolate.js");

function identityFunction(x) {
    return x;
}

function createFunction(parameters, propertySpec) {
    var isColor = propertySpec.type === 'color';

    var fun = void 0;

    if (!isFunctionDefinition(parameters)) {
        if (isColor && parameters) {
            parameters = parseColor(parameters);
        }
        fun = function fun() {
            return parameters;
        };
        fun.isFeatureConstant = true;
        fun.isZoomConstant = true;
    } else {
        var zoomAndFeatureDependent = parameters.stops && _typeof(parameters.stops[0][0]) === 'object';
        var featureDependent = zoomAndFeatureDependent || parameters.property !== undefined;
        var zoomDependent = zoomAndFeatureDependent || !featureDependent;
        var type = parameters.type || (propertySpec.function === 'interpolated' ? 'exponential' : 'interval');

        if (isColor) {
            parameters = extend({}, parameters);

            if (parameters.stops) {
                parameters.stops = parameters.stops.map(function (stop) {
                    return [stop[0], parseColor(stop[1])];
                });
            }

            if (parameters.default) {
                parameters.default = parseColor(parameters.default);
            } else {
                parameters.default = parseColor(propertySpec.default);
            }
        }

        var innerFun = void 0;
        var hashedStops = void 0;
        var categoricalKeyType = void 0;
        if (type === 'exponential') {
            innerFun = evaluateExponentialFunction;
        } else if (type === 'interval') {
            innerFun = evaluateIntervalFunction;
        } else if (type === 'categorical') {
            innerFun = evaluateCategoricalFunction;

            // For categorical functions, generate an Object as a hashmap of the stops for fast searching
            hashedStops = Object.create(null);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = parameters.stops[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var stop = _step.value;

                    hashedStops[stop[0]] = stop[1];
                }

                // Infer key type based on first stop key-- used to encforce strict type checking later
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            categoricalKeyType = _typeof(parameters.stops[0][0]);
        } else if (type === 'identity') {
            innerFun = evaluateIdentityFunction;
        } else {
            throw new Error('Unknown function type "' + type + '"');
        }

        var outputFunction = void 0;

        // If we're interpolating colors in a color system other than RGBA,
        // first translate all stop values to that color system, then interpolate
        // arrays as usual. The `outputFunction` option lets us then translate
        // the result of that interpolation back into RGBA.
        if (parameters.colorSpace && parameters.colorSpace !== 'rgb') {
            if (colorSpaces[parameters.colorSpace]) {
                var colorspace = colorSpaces[parameters.colorSpace];
                // Avoid mutating the parameters value
                parameters = JSON.parse(JSON.stringify(parameters));
                for (var s = 0; s < parameters.stops.length; s++) {
                    parameters.stops[s] = [parameters.stops[s][0], colorspace.forward(parameters.stops[s][1])];
                }
                outputFunction = colorspace.reverse;
            } else {
                throw new Error('Unknown color space: ' + parameters.colorSpace);
            }
        } else {
            outputFunction = identityFunction;
        }

        if (zoomAndFeatureDependent) {
            var featureFunctions = {};
            var zoomStops = [];
            for (var _s = 0; _s < parameters.stops.length; _s++) {
                var _stop = parameters.stops[_s];
                var zoom = _stop[0].zoom;
                if (featureFunctions[zoom] === undefined) {
                    featureFunctions[zoom] = {
                        zoom: zoom,
                        type: parameters.type,
                        property: parameters.property,
                        default: parameters.default,
                        stops: []
                    };
                    zoomStops.push(zoom);
                }
                featureFunctions[zoom].stops.push([_stop[0].value, _stop[1]]);
            }

            var featureFunctionStops = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = zoomStops[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var z = _step2.value;

                    featureFunctionStops.push([featureFunctions[z].zoom, createFunction(featureFunctions[z], propertySpec)]);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            fun = function fun(zoom, feature) {
                return outputFunction(evaluateExponentialFunction({
                    stops: featureFunctionStops,
                    base: parameters.base
                }, propertySpec, zoom)(zoom, feature));
            };
            fun.isFeatureConstant = false;
            fun.isZoomConstant = false;
        } else if (zoomDependent) {
            fun = function fun(zoom) {
                return outputFunction(innerFun(parameters, propertySpec, zoom, hashedStops, categoricalKeyType));
            };
            fun.isFeatureConstant = true;
            fun.isZoomConstant = false;
        } else {
            fun = function fun(zoom, feature) {
                var value = feature[parameters.property];
                if (value === undefined) {
                    return coalesce(parameters.default, propertySpec.default);
                }
                return outputFunction(innerFun(parameters, propertySpec, value, hashedStops, categoricalKeyType));
            };
            fun.isFeatureConstant = false;
            fun.isZoomConstant = true;
        }
    }

    return fun;
}

function coalesce(a, b, c) {
    if (a !== undefined) return a;
    if (b !== undefined) return b;
    if (c !== undefined) return c;
}

function evaluateCategoricalFunction(parameters, propertySpec, input, hashedStops, keyType) {
    var evaluated = (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === keyType ? hashedStops[input] : undefined; // Enforce strict typing on input
    return coalesce(evaluated, parameters.default, propertySpec.default);
}

function evaluateIntervalFunction(parameters, propertySpec, input) {
    // Edge cases
    if (getType(input) !== 'number') return coalesce(parameters.default, propertySpec.default);
    var n = parameters.stops.length;
    if (n === 1) return parameters.stops[0][1];
    if (input <= parameters.stops[0][0]) return parameters.stops[0][1];
    if (input >= parameters.stops[n - 1][0]) return parameters.stops[n - 1][1];

    var index = findStopLessThanOrEqualTo(parameters.stops, input);

    return parameters.stops[index][1];
}

function evaluateExponentialFunction(parameters, propertySpec, input) {
    var base = parameters.base !== undefined ? parameters.base : 1;

    // Edge cases
    if (getType(input) !== 'number') return coalesce(parameters.default, propertySpec.default);
    var n = parameters.stops.length;
    if (n === 1) return parameters.stops[0][1];
    if (input <= parameters.stops[0][0]) return parameters.stops[0][1];
    if (input >= parameters.stops[n - 1][0]) return parameters.stops[n - 1][1];

    var index = findStopLessThanOrEqualTo(parameters.stops, input);
    var t = interpolationFactor(input, base, parameters.stops[index][0], parameters.stops[index + 1][0]);

    var outputLower = parameters.stops[index][1];
    var outputUpper = parameters.stops[index + 1][1];
    var interp = interpolate[propertySpec.type] || identityFunction;

    if (typeof outputLower === 'function') {
        return function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var evaluatedLower = outputLower.apply(undefined, args);
            var evaluatedUpper = outputUpper.apply(undefined, args);
            // Special case for fill-outline-color, which has no spec default.
            if (evaluatedLower === undefined || evaluatedUpper === undefined) {
                return undefined;
            }
            return interp(evaluatedLower, evaluatedUpper, t);
        };
    }

    return interp(outputLower, outputUpper, t);
}

function evaluateIdentityFunction(parameters, propertySpec, input) {
    if (propertySpec.type === 'color') {
        input = parseColor(input);
    } else if (getType(input) !== propertySpec.type && (propertySpec.type !== 'enum' || !propertySpec.values[input])) {
        input = undefined;
    }
    return coalesce(input, parameters.default, propertySpec.default);
}

/**
 * Returns the index of the last stop <= input, or 0 if it doesn't exist.
 *
 * @private
 */
function findStopLessThanOrEqualTo(stops, input) {
    var n = stops.length;
    var lowerIndex = 0;
    var upperIndex = n - 1;
    var currentIndex = 0;
    var currentValue = void 0,
        upperValue = void 0;

    while (lowerIndex <= upperIndex) {
        currentIndex = Math.floor((lowerIndex + upperIndex) / 2);
        currentValue = stops[currentIndex][0];
        upperValue = stops[currentIndex + 1][0];
        if (input === currentValue || input > currentValue && input < upperValue) {
            // Search complete
            return currentIndex;
        } else if (currentValue < input) {
            lowerIndex = currentIndex + 1;
        } else if (currentValue > input) {
            upperIndex = currentIndex - 1;
        }
    }

    return Math.max(currentIndex - 1, 0);
}

function isFunctionDefinition(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && (value.stops || value.type === 'identity');
}

/**
 * Returns a ratio that can be used to interpolate between exponential function
 * stops.
 *
 * How it works:
 * Two consecutive stop values define a (scaled and shifted) exponential
 * function `f(x) = a * base^x + b`, where `base` is the user-specified base,
 * and `a` and `b` are constants affording sufficient degrees of freedom to fit
 * the function to the given stops.
 *
 * Here's a bit of algebra that lets us compute `f(x)` directly from the stop
 * values without explicitly solving for `a` and `b`:
 *
 * First stop value: `f(x0) = y0 = a * base^x0 + b`
 * Second stop value: `f(x1) = y1 = a * base^x1 + b`
 * => `y1 - y0 = a(base^x1 - base^x0)`
 * => `a = (y1 - y0)/(base^x1 - base^x0)`
 *
 * Desired value: `f(x) = y = a * base^x + b`
 * => `f(x) = y0 + a * (base^x - base^x0)`
 *
 * From the above, we can replace the `a` in `a * (base^x - base^x0)` and do a
 * little algebra:
 * ```
 * a * (base^x - base^x0) = (y1 - y0)/(base^x1 - base^x0) * (base^x - base^x0)
 *                     = (y1 - y0) * (base^x - base^x0) / (base^x1 - base^x0)
 * ```
 *
 * If we let `(base^x - base^x0) / (base^x1 base^x0)`, then we have
 * `f(x) = y0 + (y1 - y0) * ratio`.  In other words, `ratio` may be treated as
 * an interpolation factor between the two stops' output values.
 *
 * (Note: a slightly different form for `ratio`,
 * `(base^(x-x0) - 1) / (base^(x1-x0) - 1) `, is equivalent, but requires fewer
 * expensive `Math.pow()` operations.)
 *
 * @private
*/
function interpolationFactor(input, base, lowerValue, upperValue) {
    var difference = upperValue - lowerValue;
    var progress = input - lowerValue;

    if (difference === 0) {
        return 0;
    } else if (base === 1) {
        return progress / difference;
    } else {
        return (Math.pow(base, progress) - 1) / (Math.pow(base, difference) - 1);
    }
}

module.exports = createFunction;
module.exports.isFunctionDefinition = isFunctionDefinition;
module.exports.interpolationFactor = interpolationFactor;
module.exports.findStopLessThanOrEqualTo = findStopLessThanOrEqualTo;

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-style-spec/util/extend.js":
/*!******************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-style-spec/util/extend.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (output) {
    for (var _len = arguments.length, inputs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        inputs[_key - 1] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var input = _step.value;

            for (var k in input) {
                output[k] = input[k];
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return output;
};

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-style-spec/util/get_type.js":
/*!********************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-style-spec/util/get_type.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function getType(val) {
    if (val instanceof Number) {
        return 'number';
    } else if (val instanceof String) {
        return 'string';
    } else if (val instanceof Boolean) {
        return 'boolean';
    } else if (Array.isArray(val)) {
        return 'array';
    } else if (val === null) {
        return 'null';
    } else {
        return typeof val === 'undefined' ? 'undefined' : _typeof(val);
    }
};

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-style-spec/util/interpolate.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-style-spec/util/interpolate.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = interpolate;

function interpolate(a, b, t) {
    return a * (1 - t) + b * t;
}

interpolate.number = interpolate;

interpolate.vec2 = function (from, to, t) {
    return [interpolate(from[0], to[0], t), interpolate(from[1], to[1], t)];
};

/*
 * Interpolate between two colors given as 4-element arrays.
 *
 * @param {Color} from
 * @param {Color} to
 * @param {number} t interpolation factor between 0 and 1
 * @returns {Color} interpolated color
 */
interpolate.color = function (from, to, t) {
    return [interpolate(from[0], to[0], t), interpolate(from[1], to[1], t), interpolate(from[2], to[2], t), interpolate(from[3], to[3], t)];
};

interpolate.array = function (from, to, t) {
    return from.map(function (d, i) {
        return interpolate(d, to[i], t);
    });
};

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-style-spec/util/parse_color.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-style-spec/util/parse_color.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseColorString = __webpack_require__(/*! csscolorparser */ "./node_modules/csscolorparser/csscolorparser.js").parseCSSColor;

module.exports = function parseColor(input) {
    if (typeof input === 'string') {
        var rgba = parseColorString(input);
        if (!rgba) {
            return undefined;
        }

        // GL expects all components to be in the range [0, 1] and to be
        // multipled by the alpha value.
        return [rgba[0] / 255 * rgba[3], rgba[1] / 255 * rgba[3], rgba[2] / 255 * rgba[3], rgba[3]];
    } else if (Array.isArray(input)) {
        return input;
    } else {
        return undefined;
    }
};

/***/ }),

/***/ "./node_modules/@mapbox/mapbox-gl-style-spec/util/ref_properties.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@mapbox/mapbox-gl-style-spec/util/ref_properties.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ['type', 'source', 'source-layer', 'minzoom', 'maxzoom', 'filter', 'layout'];

/***/ }),

/***/ "./node_modules/csscolorparser/csscolorparser.js":
/*!*******************************************************!*\
  !*** ./node_modules/csscolorparser/csscolorparser.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (c) Dean McNamee <dean@gmail.com>, 2012.
//
// https://github.com/deanm/css-color-parser-js
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.

// http://www.w3.org/TR/css3-color/
var kCSSColorTable = {
  "transparent": [0, 0, 0, 0], "aliceblue": [240, 248, 255, 1],
  "antiquewhite": [250, 235, 215, 1], "aqua": [0, 255, 255, 1],
  "aquamarine": [127, 255, 212, 1], "azure": [240, 255, 255, 1],
  "beige": [245, 245, 220, 1], "bisque": [255, 228, 196, 1],
  "black": [0, 0, 0, 1], "blanchedalmond": [255, 235, 205, 1],
  "blue": [0, 0, 255, 1], "blueviolet": [138, 43, 226, 1],
  "brown": [165, 42, 42, 1], "burlywood": [222, 184, 135, 1],
  "cadetblue": [95, 158, 160, 1], "chartreuse": [127, 255, 0, 1],
  "chocolate": [210, 105, 30, 1], "coral": [255, 127, 80, 1],
  "cornflowerblue": [100, 149, 237, 1], "cornsilk": [255, 248, 220, 1],
  "crimson": [220, 20, 60, 1], "cyan": [0, 255, 255, 1],
  "darkblue": [0, 0, 139, 1], "darkcyan": [0, 139, 139, 1],
  "darkgoldenrod": [184, 134, 11, 1], "darkgray": [169, 169, 169, 1],
  "darkgreen": [0, 100, 0, 1], "darkgrey": [169, 169, 169, 1],
  "darkkhaki": [189, 183, 107, 1], "darkmagenta": [139, 0, 139, 1],
  "darkolivegreen": [85, 107, 47, 1], "darkorange": [255, 140, 0, 1],
  "darkorchid": [153, 50, 204, 1], "darkred": [139, 0, 0, 1],
  "darksalmon": [233, 150, 122, 1], "darkseagreen": [143, 188, 143, 1],
  "darkslateblue": [72, 61, 139, 1], "darkslategray": [47, 79, 79, 1],
  "darkslategrey": [47, 79, 79, 1], "darkturquoise": [0, 206, 209, 1],
  "darkviolet": [148, 0, 211, 1], "deeppink": [255, 20, 147, 1],
  "deepskyblue": [0, 191, 255, 1], "dimgray": [105, 105, 105, 1],
  "dimgrey": [105, 105, 105, 1], "dodgerblue": [30, 144, 255, 1],
  "firebrick": [178, 34, 34, 1], "floralwhite": [255, 250, 240, 1],
  "forestgreen": [34, 139, 34, 1], "fuchsia": [255, 0, 255, 1],
  "gainsboro": [220, 220, 220, 1], "ghostwhite": [248, 248, 255, 1],
  "gold": [255, 215, 0, 1], "goldenrod": [218, 165, 32, 1],
  "gray": [128, 128, 128, 1], "green": [0, 128, 0, 1],
  "greenyellow": [173, 255, 47, 1], "grey": [128, 128, 128, 1],
  "honeydew": [240, 255, 240, 1], "hotpink": [255, 105, 180, 1],
  "indianred": [205, 92, 92, 1], "indigo": [75, 0, 130, 1],
  "ivory": [255, 255, 240, 1], "khaki": [240, 230, 140, 1],
  "lavender": [230, 230, 250, 1], "lavenderblush": [255, 240, 245, 1],
  "lawngreen": [124, 252, 0, 1], "lemonchiffon": [255, 250, 205, 1],
  "lightblue": [173, 216, 230, 1], "lightcoral": [240, 128, 128, 1],
  "lightcyan": [224, 255, 255, 1], "lightgoldenrodyellow": [250, 250, 210, 1],
  "lightgray": [211, 211, 211, 1], "lightgreen": [144, 238, 144, 1],
  "lightgrey": [211, 211, 211, 1], "lightpink": [255, 182, 193, 1],
  "lightsalmon": [255, 160, 122, 1], "lightseagreen": [32, 178, 170, 1],
  "lightskyblue": [135, 206, 250, 1], "lightslategray": [119, 136, 153, 1],
  "lightslategrey": [119, 136, 153, 1], "lightsteelblue": [176, 196, 222, 1],
  "lightyellow": [255, 255, 224, 1], "lime": [0, 255, 0, 1],
  "limegreen": [50, 205, 50, 1], "linen": [250, 240, 230, 1],
  "magenta": [255, 0, 255, 1], "maroon": [128, 0, 0, 1],
  "mediumaquamarine": [102, 205, 170, 1], "mediumblue": [0, 0, 205, 1],
  "mediumorchid": [186, 85, 211, 1], "mediumpurple": [147, 112, 219, 1],
  "mediumseagreen": [60, 179, 113, 1], "mediumslateblue": [123, 104, 238, 1],
  "mediumspringgreen": [0, 250, 154, 1], "mediumturquoise": [72, 209, 204, 1],
  "mediumvioletred": [199, 21, 133, 1], "midnightblue": [25, 25, 112, 1],
  "mintcream": [245, 255, 250, 1], "mistyrose": [255, 228, 225, 1],
  "moccasin": [255, 228, 181, 1], "navajowhite": [255, 222, 173, 1],
  "navy": [0, 0, 128, 1], "oldlace": [253, 245, 230, 1],
  "olive": [128, 128, 0, 1], "olivedrab": [107, 142, 35, 1],
  "orange": [255, 165, 0, 1], "orangered": [255, 69, 0, 1],
  "orchid": [218, 112, 214, 1], "palegoldenrod": [238, 232, 170, 1],
  "palegreen": [152, 251, 152, 1], "paleturquoise": [175, 238, 238, 1],
  "palevioletred": [219, 112, 147, 1], "papayawhip": [255, 239, 213, 1],
  "peachpuff": [255, 218, 185, 1], "peru": [205, 133, 63, 1],
  "pink": [255, 192, 203, 1], "plum": [221, 160, 221, 1],
  "powderblue": [176, 224, 230, 1], "purple": [128, 0, 128, 1],
  "rebeccapurple": [102, 51, 153, 1],
  "red": [255, 0, 0, 1], "rosybrown": [188, 143, 143, 1],
  "royalblue": [65, 105, 225, 1], "saddlebrown": [139, 69, 19, 1],
  "salmon": [250, 128, 114, 1], "sandybrown": [244, 164, 96, 1],
  "seagreen": [46, 139, 87, 1], "seashell": [255, 245, 238, 1],
  "sienna": [160, 82, 45, 1], "silver": [192, 192, 192, 1],
  "skyblue": [135, 206, 235, 1], "slateblue": [106, 90, 205, 1],
  "slategray": [112, 128, 144, 1], "slategrey": [112, 128, 144, 1],
  "snow": [255, 250, 250, 1], "springgreen": [0, 255, 127, 1],
  "steelblue": [70, 130, 180, 1], "tan": [210, 180, 140, 1],
  "teal": [0, 128, 128, 1], "thistle": [216, 191, 216, 1],
  "tomato": [255, 99, 71, 1], "turquoise": [64, 224, 208, 1],
  "violet": [238, 130, 238, 1], "wheat": [245, 222, 179, 1],
  "white": [255, 255, 255, 1], "whitesmoke": [245, 245, 245, 1],
  "yellow": [255, 255, 0, 1], "yellowgreen": [154, 205, 50, 1] };

function clamp_css_byte(i) {
  // Clamp to integer 0 .. 255.
  i = Math.round(i); // Seems to be what Chrome does (vs truncation).
  return i < 0 ? 0 : i > 255 ? 255 : i;
}

function clamp_css_float(f) {
  // Clamp to float 0.0 .. 1.0.
  return f < 0 ? 0 : f > 1 ? 1 : f;
}

function parse_css_int(str) {
  // int or percentage.
  if (str[str.length - 1] === '%') return clamp_css_byte(parseFloat(str) / 100 * 255);
  return clamp_css_byte(parseInt(str));
}

function parse_css_float(str) {
  // float or percentage.
  if (str[str.length - 1] === '%') return clamp_css_float(parseFloat(str) / 100);
  return clamp_css_float(parseFloat(str));
}

function css_hue_to_rgb(m1, m2, h) {
  if (h < 0) h += 1;else if (h > 1) h -= 1;

  if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
  if (h * 2 < 1) return m2;
  if (h * 3 < 2) return m1 + (m2 - m1) * (2 / 3 - h) * 6;
  return m1;
}

function parseCSSColor(css_str) {
  // Remove all whitespace, not compliant, but should just be more accepting.
  var str = css_str.replace(/ /g, '').toLowerCase();

  // Color keywords (and transparent) lookup.
  if (str in kCSSColorTable) return kCSSColorTable[str].slice(); // dup.

  // #abc and #abc123 syntax.
  if (str[0] === '#') {
    if (str.length === 4) {
      var iv = parseInt(str.substr(1), 16); // TODO(deanm): Stricter parsing.
      if (!(iv >= 0 && iv <= 0xfff)) return null; // Covers NaN.
      return [(iv & 0xf00) >> 4 | (iv & 0xf00) >> 8, iv & 0xf0 | (iv & 0xf0) >> 4, iv & 0xf | (iv & 0xf) << 4, 1];
    } else if (str.length === 7) {
      var iv = parseInt(str.substr(1), 16); // TODO(deanm): Stricter parsing.
      if (!(iv >= 0 && iv <= 0xffffff)) return null; // Covers NaN.
      return [(iv & 0xff0000) >> 16, (iv & 0xff00) >> 8, iv & 0xff, 1];
    }

    return null;
  }

  var op = str.indexOf('('),
      ep = str.indexOf(')');
  if (op !== -1 && ep + 1 === str.length) {
    var fname = str.substr(0, op);
    var params = str.substr(op + 1, ep - (op + 1)).split(',');
    var alpha = 1; // To allow case fallthrough.
    switch (fname) {
      case 'rgba':
        if (params.length !== 4) return null;
        alpha = parse_css_float(params.pop());
      // Fall through.
      case 'rgb':
        if (params.length !== 3) return null;
        return [parse_css_int(params[0]), parse_css_int(params[1]), parse_css_int(params[2]), alpha];
      case 'hsla':
        if (params.length !== 4) return null;
        alpha = parse_css_float(params.pop());
      // Fall through.
      case 'hsl':
        if (params.length !== 3) return null;
        var h = (parseFloat(params[0]) % 360 + 360) % 360 / 360; // 0 .. 1
        // NOTE(deanm): According to the CSS spec s/l should only be
        // percentages, but we don't bother and let float or percentage.
        var s = parse_css_float(params[1]);
        var l = parse_css_float(params[2]);
        var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        var m1 = l * 2 - m2;
        return [clamp_css_byte(css_hue_to_rgb(m1, m2, h + 1 / 3) * 255), clamp_css_byte(css_hue_to_rgb(m1, m2, h) * 255), clamp_css_byte(css_hue_to_rgb(m1, m2, h - 1 / 3) * 255), alpha];
      default:
        return null;
    }
  }

  return null;
}

try {
  exports.parseCSSColor = parseCSSColor;
} catch (e) {}

/***/ }),

/***/ "./node_modules/mapbox-to-css-font/index.js":
/*!**************************************************!*\
  !*** ./node_modules/mapbox-to-css-font/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fontWeights = {
  thin: 100,
  hairline: 100,
  'ultra-light': 100,
  'extra-light': 100,
  light: 200,
  book: 300,
  regular: 400,
  normal: 400,
  plain: 400,
  roman: 400,
  standard: 400,
  medium: 500,
  'semi-bold': 600,
  'demi-bold': 600,
  bold: 700,
  heavy: 800,
  black: 800,
  'extra-bold': 800,
  'ultra-black': 900,
  'extra-black': 900,
  'ultra-bold': 900,
  'heavy-black': 900,
  fat: 900,
  poster: 900
};
var sp = ' ';

var fontCache = {};

module.exports = function (font, size) {
  var cssData = fontCache[font];
  if (!cssData) {
    var parts = font.split(' ');
    var maybeWeight = parts[parts.length - 1].toLowerCase();
    var weight = 'normal';
    var style = 'normal';
    if (maybeWeight == 'normal' || maybeWeight == 'italic' || maybeWeight == 'oblique') {
      style = maybeWeight;
      parts.pop();
      maybeWeight = parts[parts.length - 1].toLowerCase();
    }
    for (var w in fontWeights) {
      if (maybeWeight == w || maybeWeight == w.replace('-', '') || maybeWeight == w.replace('-', ' ')) {
        weight = fontWeights[w];
        parts.pop();
        break;
      }
    }
    if (typeof maybeWeight == 'number') {
      weight = maybeWeight;
    }
    var fontFamily = parts.join(' ').replace('Klokantech Noto Sans', 'Noto Sans');
    if (fontFamily.indexOf(' ') !== -1) {
      fontFamily = '"' + fontFamily + '"';
    }
    // CSS font property: font-style font-weight font-size font-family
    cssData = fontCache[font] = [style, weight, fontFamily];
  }
  return cssData[0] + sp + cssData[1] + sp + size + 'px' + sp + cssData[2];
};

/***/ }),

/***/ "./node_modules/webfont-matcher/lib/fonts/google.js":
/*!**********************************************************!*\
  !*** ./node_modules/webfont-matcher/lib/fonts/google.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Generated by CoffeeScript 1.10.0
(function () {
  var families;

  module.exports = {
    icon: 'icons/google.svg',
    name: 'google',
    title: 'Google Fonts',
    link: 'google.com/fonts',
    getNames: function getNames() {
      return families;
    },
    getLink: function getLink(name) {
      return "https://fonts.google.com/specimen/" + name.replace(/( )/g, '+');
    },
    normalizeName: function normalizeName(name) {
      return name;
    }
  };

  families = ["ABeeZee", "Abel", "Abril Fatface", "Aclonica", "Acme", "Actor", "Adamina", "Advent Pro", "Aguafina Script", "Akronim", "Aladin", "Aldrich", "Alef", "Alegreya", "Alegreya SC", "Alegreya Sans", "Alegreya Sans SC", "Alex Brush", "Alfa Slab One", "Alice", "Alike", "Alike Angular", "Allan", "Allerta", "Allerta Stencil", "Allura", "Almendra", "Almendra Display", "Almendra SC", "Amarante", "Amaranth", "Amatic SC", "Amethysta", "Amiri", "Amita", "Anaheim", "Andada", "Andika", "Angkor", "Annie Use Your Telescope", "Anonymous Pro", "Antic", "Antic Didone", "Antic Slab", "Anton", "Arapey", "Arbutus", "Arbutus Slab", "Architects Daughter", "Archivo Black", "Archivo Narrow", "Arimo", "Arizonia", "Armata", "Artifika", "Arvo", "Arya", "Asap", "Asar", "Asset", "Astloch", "Asul", "Atomic Age", "Aubrey", "Audiowide", "Autour One", "Average", "Average Sans", "Averia Gruesa Libre", "Averia Libre", "Averia Sans Libre", "Averia Serif Libre", "Bad Script", "Balthazar", "Bangers", "Basic", "Battambang", "Baumans", "Bayon", "Belgrano", "Belleza", "BenchNine", "Bentham", "Berkshire Swash", "Bevan", "Bigelow Rules", "Bigshot One", "Bilbo", "Bilbo Swash Caps", "Biryani", "Bitter", "Black Ops One", "Bokor", "Bonbon", "Boogaloo", "Bowlby One", "Bowlby One SC", "Brawler", "Bree Serif", "Bubblegum Sans", "Bubbler One", "Buda", "Buenard", "Butcherman", "Butterfly Kids", "Cabin", "Cabin Condensed", "Cabin Sketch", "Caesar Dressing", "Cagliostro", "Calligraffitti", "Cambay", "Cambo", "Candal", "Cantarell", "Cantata One", "Cantora One", "Capriola", "Cardo", "Carme", "Carrois Gothic", "Carrois Gothic SC", "Carter One", "Catamaran", "Caudex", "Caveat", "Caveat Brush", "Cedarville Cursive", "Ceviche One", "Changa One", "Chango", "Chau Philomene One", "Chela One", "Chelsea Market", "Chenla", "Cherry Cream Soda", "Cherry Swash", "Chewy", "Chicle", "Chivo", "Chonburi", "Cinzel", "Cinzel Decorative", "Clicker Script", "Coda", "Coda Caption", "Codystar", "Combo", "Comfortaa", "Coming Soon", "Concert One", "Condiment", "Content", "Contrail One", "Convergence", "Cookie", "Copse", "Corben", "Courgette", "Cousine", "Coustard", "Covered By Your Grace", "Crafty Girls", "Creepster", "Crete Round", "Crimson Text", "Croissant One", "Crushed", "Cuprum", "Cutive", "Cutive Mono", "Damion", "Dancing Script", "Dangrek", "Dawning of a New Day", "Days One", "Dekko", "Delius", "Delius Swash Caps", "Delius Unicase", "Della Respira", "Denk One", "Devonshire", "Dhurjati", "Didact Gothic", "Diplomata", "Diplomata SC", "Domine", "Donegal One", "Doppio One", "Dorsa", "Dosis", "Dr Sugiyama", "Droid Sans", "Droid Sans Mono", "Droid Serif", "Duru Sans", "Dynalight", "EB Garamond", "Eagle Lake", "Eater", "Economica", "Eczar", "Ek Mukta", "Electrolize", "Elsie", "Elsie Swash Caps", "Emblema One", "Emilys Candy", "Engagement", "Englebert", "Enriqueta", "Erica One", "Esteban", "Euphoria Script", "Ewert", "Exo", "Exo 2", "Expletus Sans", "Fanwood Text", "Fascinate", "Fascinate Inline", "Faster One", "Fasthand", "Fauna One", "Federant", "Federo", "Felipa", "Fenix", "Finger Paint", "Fira Mono", "Fira Sans", "Fjalla One", "Fjord One", "Flamenco", "Flavors", "Fondamento", "Fontdiner Swanky", "Forum", "Francois One", "Freckle Face", "Fredericka the Great", "Fredoka One", "Freehand", "Fresca", "Frijole", "Fruktur", "Fugaz One", "GFS Didot", "GFS Neohellenic", "Gabriela", "Gafata", "Galdeano", "Galindo", "Gentium Basic", "Gentium Book Basic", "Geo", "Geostar", "Geostar Fill", "Germania One", "Gidugu", "Gilda Display", "Give You Glory", "Glass Antiqua", "Glegoo", "Gloria Hallelujah", "Goblin One", "Gochi Hand", "Gorditas", "Goudy Bookletter 1911", "Graduate", "Grand Hotel", "Gravitas One", "Great Vibes", "Griffy", "Gruppo", "Gudea", "Gurajada", "Habibi", "Halant", "Hammersmith One", "Hanalei", "Hanalei Fill", "Handlee", "Hanuman", "Happy Monkey", "Headland One", "Henny Penny", "Herr Von Muellerhoff", "Hind", "Hind Siliguri", "Hind Vadodara", "Holtwood One SC", "Homemade Apple", "Homenaje", "IM Fell DW Pica", "IM Fell DW Pica SC", "IM Fell Double Pica", "IM Fell Double Pica SC", "IM Fell English", "IM Fell English SC", "IM Fell French Canon", "IM Fell French Canon SC", "IM Fell Great Primer", "IM Fell Great Primer SC", "Iceberg", "Iceland", "Imprima", "Inconsolata", "Inder", "Indie Flower", "Inika", "Inknut Antiqua", "Irish Grover", "Istok Web", "Italiana", "Italianno", "Itim", "Jacques Francois", "Jacques Francois Shadow", "Jaldi", "Jim Nightshade", "Jockey One", "Jolly Lodger", "Josefin Sans", "Josefin Slab", "Joti One", "Judson", "Julee", "Julius Sans One", "Junge", "Jura", "Just Another Hand", "Just Me Again Down Here", "Kadwa", "Kalam", "Kameron", "Kantumruy", "Karla", "Karma", "Kaushan Script", "Kavoon", "Kdam Thmor", "Keania One", "Kelly Slab", "Kenia", "Khand", "Khmer", "Khula", "Kite One", "Knewave", "Kotta One", "Koulen", "Kranky", "Kreon", "Kristi", "Krona One", "Kurale", "La Belle Aurore", "Laila", "Lakki Reddy", "Lancelot", "Lateef", "Lato", "League Script", "Leckerli One", "Ledger", "Lekton", "Lemon", "Libre Baskerville", "Life Savers", "Lilita One", "Lily Script One", "Limelight", "Linden Hill", "Lobster", "Lobster Two", "Londrina Outline", "Londrina Shadow", "Londrina Sketch", "Londrina Solid", "Lora", "Love Ya Like A Sister", "Loved by the King", "Lovers Quarrel", "Luckiest Guy", "Lusitana", "Lustria", "Macondo", "Macondo Swash Caps", "Magra", "Maiden Orange", "Mako", "Mallanna", "Mandali", "Marcellus", "Marcellus SC", "Marck Script", "Margarine", "Marko One", "Marmelad", "Martel", "Martel Sans", "Marvel", "Mate", "Mate SC", "Maven Pro", "McLaren", "Meddon", "MedievalSharp", "Medula One", "Megrim", "Meie Script", "Merienda", "Merienda One", "Merriweather", "Merriweather Sans", "Metal", "Metal Mania", "Metamorphous", "Metrophobic", "Michroma", "Milonga", "Miltonian", "Miltonian Tattoo", "Miniver", "Miss Fajardose", "Modak", "Modern Antiqua", "Molengo", "Molle", "Monda", "Monofett", "Monoton", "Monsieur La Doulaise", "Montaga", "Montez", "Montserrat", "Montserrat Alternates", "Montserrat Subrayada", "Moul", "Moulpali", "Mountains of Christmas", "Mouse Memoirs", "Mr Bedfort", "Mr Dafoe", "Mr De Haviland", "Mrs Saint Delafield", "Mrs Sheppards", "Muli", "Mystery Quest", "NTR", "Neucha", "Neuton", "New Rocker", "News Cycle", "Niconne", "Nixie One", "Nobile", "Nokora", "Norican", "Nosifer", "Nothing You Could Do", "Noticia Text", "Noto Sans", "Noto Serif", "Nova Cut", "Nova Flat", "Nova Mono", "Nova Oval", "Nova Round", "Nova Script", "Nova Slim", "Nova Square", "Numans", "Nunito", "Odor Mean Chey", "Offside", "Old Standard TT", "Oldenburg", "Oleo Script", "Oleo Script Swash Caps", "Open Sans", "Open Sans Condensed", "Oranienbaum", "Orbitron", "Oregano", "Orienta", "Original Surfer", "Oswald", "Over the Rainbow", "Overlock", "Overlock SC", "Ovo", "Oxygen", "Oxygen Mono", "PT Mono", "PT Sans", "PT Sans Caption", "PT Sans Narrow", "PT Serif", "PT Serif Caption", "Pacifico", "Palanquin", "Palanquin Dark", "Paprika", "Parisienne", "Passero One", "Passion One", "Pathway Gothic One", "Patrick Hand", "Patrick Hand SC", "Patua One", "Paytone One", "Peddana", "Peralta", "Permanent Marker", "Petit Formal Script", "Petrona", "Philosopher", "Piedra", "Pinyon Script", "Pirata One", "Plaster", "Play", "Playball", "Playfair Display", "Playfair Display SC", "Podkova", "Poiret One", "Poller One", "Poly", "Pompiere", "Pontano Sans", "Poppins", "Port Lligat Sans", "Port Lligat Slab", "Pragati Narrow", "Prata", "Preahvihear", "Press Start 2P", "Princess Sofia", "Prociono", "Prosto One", "Puritan", "Purple Purse", "Quando", "Quantico", "Quattrocento", "Quattrocento Sans", "Questrial", "Quicksand", "Quintessential", "Qwigley", "Racing Sans One", "Radley", "Rajdhani", "Raleway", "Raleway Dots", "Ramabhadra", "Ramaraja", "Rambla", "Rammetto One", "Ranchers", "Rancho", "Ranga", "Rationale", "Ravi Prakash", "Redressed", "Reenie Beanie", "Revalia", "Rhodium Libre", "Ribeye", "Ribeye Marrow", "Righteous", "Risque", "Roboto", "Roboto Condensed", "Roboto Mono", "Roboto Slab", "Rochester", "Rock Salt", "Rokkitt", "Romanesco", "Ropa Sans", "Rosario", "Rosarivo", "Rouge Script", "Rozha One", "Rubik", "Rubik Mono One", "Rubik One", "Ruda", "Rufina", "Ruge Boogie", "Ruluko", "Rum Raisin", "Ruslan Display", "Russo One", "Ruthie", "Rye", "Sacramento", "Sahitya", "Sail", "Salsa", "Sanchez", "Sancreek", "Sansita One", "Sarala", "Sarina", "Sarpanch", "Satisfy", "Scada", "Scheherazade", "Schoolbell", "Seaweed Script", "Sevillana", "Seymour One", "Shadows Into Light", "Shadows Into Light Two", "Shanti", "Share", "Share Tech", "Share Tech Mono", "Shojumaru", "Short Stack", "Siemreap", "Sigmar One", "Signika", "Signika Negative", "Simonetta", "Sintony", "Sirin Stencil", "Six Caps", "Skranji", "Slabo 13px", "Slabo 27px", "Slackey", "Smokum", "Smythe", "Sniglet", "Snippet", "Snowburst One", "Sofadi One", "Sofia", "Sonsie One", "Sorts Mill Goudy", "Source Code Pro", "Source Sans Pro", "Source Serif Pro", "Special Elite", "Spicy Rice", "Spinnaker", "Spirax", "Squada One", "Sree Krushnadevaraya", "Stalemate", "Stalinist One", "Stardos Stencil", "Stint Ultra Condensed", "Stint Ultra Expanded", "Stoke", "Strait", "Sue Ellen Francisco", "Sumana", "Sunshiney", "Supermercado One", "Sura", "Suranna", "Suravaram", "Suwannaphum", "Swanky and Moo Moo", "Syncopate", "Tangerine", "Taprom", "Tauri", "Teko", "Telex", "Tenali Ramakrishna", "Tenor Sans", "Text Me One", "The Girl Next Door", "Tienne", "Tillana", "Timmana", "Tinos", "Titan One", "Titillium Web", "Trade Winds", "Trocchi", "Trochut", "Trykker", "Tulpen One", "Ubuntu", "Ubuntu Condensed", "Ubuntu Mono", "Ultra", "Uncial Antiqua", "Underdog", "Unica One", "UnifrakturCook", "UnifrakturMaguntia", "Unkempt", "Unlock", "Unna", "VT323", "Vampiro One", "Varela", "Varela Round", "Vast Shadow", "Vesper Libre", "Vibur", "Vidaloka", "Viga", "Voces", "Volkhov", "Vollkorn", "Voltaire", "Waiting for the Sunrise", "Wallpoet", "Walter Turncoat", "Warnes", "Wellfleet", "Wendy One", "Wire One", "Work Sans", "Yanone Kaffeesatz", "Yantramanav", "Yellowtail", "Yeseva One", "Yesteryear", "Zeyada"];
}).call(undefined);

/***/ }),

/***/ "./olms.js":
/*!*****************!*\
  !*** ./olms.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./index */ "./index.js");

var _stylefunction = __webpack_require__(/*! ./stylefunction */ "./stylefunction.js");

var _stylefunction2 = _interopRequireDefault(_stylefunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  apply: _index.apply,
  applyBackground: _index.applyBackground,
  applyStyle: _index.applyStyle,
  stylefunction: _stylefunction2.default
};

/***/ }),

/***/ "./stylefunction.js":
/*!**************************!*\
  !*** ./stylefunction.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                              ol-mapbox-style - Use Mapbox Style objects with OpenLayers
                                                                                                                                                                                                                                                                              Copyright 2016-present Boundless Spatial, Inc.
                                                                                                                                                                                                                                                                              License: https://raw.githubusercontent.com/boundlessgeo/ol-mapbox-gl-style/master/LICENSE
                                                                                                                                                                                                                                                                              */

exports.default = function (olLayer, glStyle, source, resolutions, spriteData, spriteImageUrl, spriteImage, fonts) {
  if (!resolutions) {
    resolutions = [];
    for (var res = 78271.51696402048; resolutions.length < 21; res /= 2) {
      resolutions.push(res);
    }
  }
  if (typeof glStyle == 'string') {
    glStyle = JSON.parse(glStyle);
  }
  if (glStyle.version != 8) {
    throw new Error('glStyle version 8 required.');
  }

  var spriteImgSize = void 0;
  if (spriteImageUrl && !spriteImage) {
    var img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function () {
      spriteImage = img;
      spriteImgSize = [img.width, img.height];
      olLayer.changed();
    };
    img.src = spriteImageUrl;
  }

  var ctx = document.createElement('CANVAS').getContext('2d');
  var measureCache = {};

  function wrapText(text, font, em) {
    var key = em + ',' + font + ',' + text;
    var wrappedText = measureCache[key];
    if (!wrappedText) {
      ctx.font = font;
      var oneEm = ctx.measureText('M').width;
      var width = oneEm * em;
      var words = text.split(' ');
      var line = '';
      var lines = [];
      for (var i = 0, ii = words.length; i < ii; ++i) {
        var word = words[i];
        if (ctx.measureText(line + word).width <= width) {
          line += (line ? ' ' : '') + word;
        } else {
          if (line) {
            lines.push(line);
          }
          line = word;
        }
      }
      if (line) {
        lines.push(line);
      }
      measureCache[key] = wrappedText = lines.join('\n');
    }
    return wrappedText;
  }

  var allLayers = (0, _deref2.default)(glStyle.layers);

  var layersBySourceLayer = {};
  var mapboxLayers = [];
  var mapboxSource = void 0;
  for (var i = 0, ii = allLayers.length; i < ii; ++i) {
    var layer = allLayers[i];
    var layerId = layer.id;
    if (typeof source == 'string' && layer.source == source || source.indexOf(layerId) !== -1) {
      var sourceLayer = layer['source-layer'];
      if (!mapboxSource) {
        mapboxSource = layer.source;
      }
      var layers = layersBySourceLayer[sourceLayer];
      if (!layers) {
        layers = layersBySourceLayer[sourceLayer] = [];
      }
      layers.push({
        layer: layer,
        index: i
      });
      mapboxLayers.push(layerId);
    }
    // // TODO revisit when diffing gets added
    delete functionCache[layerId];
    delete filterCache[layerId];
  }
  var iconImageCache = {};

  var styles = [];
  var patternCache = {};

  var styleFunction = function styleFunction(feature, resolution) {
    var properties = feature.getProperties();
    feature.styleIds = feature.styleIds || {};
    var layers = layersBySourceLayer[properties.layer];
    if (!layers) {
      return;
    }
    var zoom = resolutions.indexOf(resolution);
    if (zoom == -1) {
      zoom = Math.round((0, _util.getZoomForResolution)(resolution, resolutions));
    }
    var type = types[feature.getGeometry().getType()];
    var f = {
      properties: properties,
      type: type
    };
    var stylesLength = -1;
    for (var _i = 0, _ii = layers.length; _i < _ii; ++_i) {
      var layerData = layers[_i];
      var _layer = layerData.layer;
      var _layerId = _layer.id;

      var layout = _layer.layout || emptyObj;
      var paint = _layer.paint || emptyObj;
      if (layout.visibility === 'none' || 'minzoom' in _layer && zoom < _layer.minzoom || 'maxzoom' in _layer && zoom >= _layer.maxzoom) {
        continue;
      }
      feature.styleIds[zoom] = feature.styleIds[zoom] || [];
      var filter = _layer.filter;
      var icon = void 0,
          iconImg = void 0;
      if (!filter || evaluateFilter(_layerId, filter, f)) {
        var color = void 0,
            opacity = void 0,
            fill = void 0,
            stroke = void 0,
            strokeColor = void 0,
            style = void 0;
        var index = layerData.index;
        if (type == 3) {
          opacity = getValue(_layerId, paint, 'fill-opacity', zoom, properties);
          if ('fill-pattern' in paint) {
            var iconImage = getValue(_layerId, paint, 'fill-pattern', zoom, properties);
            if (iconImage) {
              icon = fromTemplate(iconImage, properties);
              if (spriteImage && spriteData && spriteData[icon]) {
                ++stylesLength;
                if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
                  feature.styleIds[zoom].push(_layerId);
                }
                style = styles[stylesLength];
                if (!style || !style.getFill() || style.getStroke() || style.getText()) {
                  style = styles[stylesLength] = new _Style2.default({
                    fill: new _Fill2.default()
                  });
                }
                fill = style.getFill();
                style.setZIndex(index);
                var icon_cache_key = icon + '.' + opacity;
                var pattern = patternCache[icon_cache_key];
                if (!pattern) {
                  var spriteImageData = spriteData[icon];
                  var canvas = document.createElement('canvas');
                  canvas.width = spriteImageData.width;
                  canvas.height = spriteImageData.height;
                  var _ctx = canvas.getContext('2d');
                  _ctx.globalAlpha = opacity;
                  _ctx.drawImage(spriteImage, spriteImageData.x, spriteImageData.y, spriteImageData.width, spriteImageData.height, 0, 0, spriteImageData.width, spriteImageData.height);
                  pattern = _ctx.createPattern(canvas, 'repeat');
                  patternCache[icon_cache_key] = pattern;
                }
                fill.setColor(pattern);
              }
            }
          } else if ('fill-color' in paint) {
            color = colorWithOpacity(getValue(_layerId, paint, 'fill-color', zoom, properties), opacity);
            if (color) {
              ++stylesLength;
              if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
                feature.styleIds[zoom].push(_layerId);
              }
              style = styles[stylesLength];
              if (!style || !style.getFill() || style.getStroke() || style.getText()) {
                style = styles[stylesLength] = new _Style2.default({
                  fill: new _Fill2.default()
                });
              }
              fill = style.getFill();
              fill.setColor(color);
              style.setZIndex(index);
            }
            if ('fill-outline-color' in paint) {
              strokeColor = colorWithOpacity(getValue(_layerId, paint, 'fill-outline-color', zoom, properties), opacity);
            } else if ('fill-antialias' in paint) {
              strokeColor = color;
            }
            if (strokeColor) {
              ++stylesLength;
              if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
                feature.styleIds[zoom].push(_layerId);
              }
              style = styles[stylesLength];
              if (!style || !style.getStroke() || style.getFill() || style.getText()) {
                style = styles[stylesLength] = new _Style2.default({
                  stroke: new _Stroke2.default()
                });
              }
              stroke = style.getStroke();
              stroke.setLineCap(defaults['line-cap']);
              stroke.setLineJoin(defaults['line-join']);
              stroke.setMiterLimit(defaults['line-miter-limit']);
              stroke.setColor(strokeColor);
              stroke.setWidth(1);
              stroke.setLineDash(null);
              style.setZIndex(index);
            }
          }
        }
        if (type != 1) {
          (function () {
            color = !('line-pattern' in paint) && 'line-color' in paint ? colorWithOpacity(getValue(_layerId, paint, 'line-color', zoom, properties), getValue(_layerId, paint, 'line-opacity', zoom, properties)) : undefined;
            var width = getValue(_layerId, paint, 'line-width', zoom, properties);
            if (color && width > 0) {
              ++stylesLength;
              if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
                feature.styleIds[zoom].push(_layerId);
              }
              style = styles[stylesLength];
              if (!style || !style.getStroke() || style.getFill() || style.getText()) {
                style = styles[stylesLength] = new _Style2.default({
                  stroke: new _Stroke2.default()
                });
              }
              stroke = style.getStroke();
              stroke.setLineCap(getValue(_layerId, layout, 'line-cap', zoom, properties));
              stroke.setLineJoin(getValue(_layerId, layout, 'line-join', zoom, properties));
              stroke.setMiterLimit(getValue(_layerId, layout, 'line-miter-limit', zoom, properties));
              stroke.setColor(color);
              stroke.setWidth(width);
              stroke.setLineDash(paint['line-dasharray'] ? getValue(_layerId, paint, 'line-dasharray', zoom, properties).map(function (x) {
                return x * width;
              }) : null);
              style.setZIndex(index);
            }
          })();
        }

        var hasImage = false;
        var text = null;
        var skipLabel = void 0;
        if ((type == 1 || type == 2) && 'icon-image' in layout) {
          var _iconImage = getValue(_layerId, layout, 'icon-image', zoom, properties);
          if (_iconImage) {
            icon = fromTemplate(_iconImage, properties);
            var styleGeom = undefined;
            if (spriteImage && spriteData && spriteData[icon]) {
              if (type == 2) {
                var geom = feature.getGeometry();
                // ol package and ol-debug.js only
                if (geom.getFlatMidpoint) {
                  var extent = geom.getExtent();
                  var size = Math.sqrt(Math.max(Math.pow((extent[2] - extent[0]) / resolution, 2), Math.pow((extent[3] - extent[1]) / resolution, 2)));
                  if (size > 150) {
                    //FIXME Do not hard-code a size of 150
                    styleGeom = new _Point2.default(geom.getFlatMidpoint());
                  }
                }
              }
              if (type !== 2 || styleGeom) {
                ++stylesLength;
                if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
                  feature.styleIds[zoom].push(_layerId);
                }
                style = styles[stylesLength];
                if (!style || !style.getImage() || style.getFill() || style.getStroke()) {
                  style = styles[stylesLength] = new _Style2.default();
                }
                style.setGeometry(styleGeom);
                var iconSize = getValue(_layerId, layout, 'icon-size', zoom, properties);
                var iconColor = paint['icon-color'] !== undefined ? getValue(_layerId, paint, 'icon-color', zoom, properties) : null;
                var iconTranslate = getValue(_layerId, paint, 'icon-translate', zoom, properties);
                var iconTranslateAnchor = getValue(_layerId, paint, 'icon-translate-anchor', zoom, properties);
                var iconAnchorValue = getValue(_layerId, layout, 'icon-anchor', zoom, properties);
                var iconOffset = getValue(_layerId, layout, 'icon-offset', zoom, properties);

                var _covertIconAnchor = covertIconAnchor(iconAnchorValue),
                    anchorOffset = _covertIconAnchor.anchorOffset,
                    _covertIconAnchor$ico = _covertIconAnchor.iconAnchor,
                    iconAnchor = _covertIconAnchor$ico === undefined ? iconAnchorValue : _covertIconAnchor$ico;

                var _icon_cache_key = icon + '.' + iconSize + '.' + iconTranslate + '.' + iconTranslateAnchor + '.' + iconAnchor + '.' + iconOffset + '.' + anchorOffset;
                if (iconColor !== null) {
                  _icon_cache_key += '.' + iconColor;
                }
                iconImg = iconImageCache[_icon_cache_key];
                if (!iconImg) {
                  var _spriteImageData = spriteData[icon];
                  var _canvas = document.createElement('canvas');
                  _canvas.width = _spriteImageData.width;
                  _canvas.height = _spriteImageData.height;
                  var _ctx2 = _canvas.getContext('2d');
                  _ctx2.drawImage(spriteImage, _spriteImageData.x, _spriteImageData.y, _spriteImageData.width, _spriteImageData.height, 0, 0, _spriteImageData.width, _spriteImageData.height);
                  var data = _ctx2.getImageData(0, 0, _canvas.width, _canvas.height);
                  if (iconColor !== null) {
                    // cut out the sprite and color it
                    color = colorWithOpacity(iconColor, 1);
                    for (var c = 0, cc = data.data.length; c < cc; c += 4) {
                      data.data[c] = color[0];
                      data.data[c + 1] = color[1];
                      data.data[c + 2] = color[2];
                    }
                  }
                  _ctx2.putImageData(data, 0, 0);
                  var translateOffset = [iconTranslate[0] / _spriteImageData.width, iconTranslate[1] / _spriteImageData.height];
                  iconImg = iconImageCache[_icon_cache_key] = new _Icon2.default({
                    img: _canvas,
                    anchorOrigin: iconAnchor,
                    anchor: [iconOffset[0] + anchorOffset[0] + translateOffset[0], iconOffset[1] + anchorOffset[1] - translateOffset[1]],
                    imgSize: [_canvas.width, _canvas.height],
                    scale: iconSize / _spriteImageData.pixelRatio
                  });
                }
                var rotateValue = getValue(_layerId, layout, 'icon-rotate', zoom, properties);
                if (rotateValue.indexOf && rotateValue.indexOf('{') === 0) {
                  rotateValue = 360 - fromTemplate(rotateValue, properties);
                }
                iconImg.setRotation((0, _util.deg2rad)(rotateValue));
                iconImg.setOpacity(getValue(_layerId, paint, 'icon-opacity', zoom, properties));
                style.setImage(iconImg);
                text = style.getText();
                style.setText(undefined);
                style.setZIndex(99999 - index);
                hasImage = true;
                skipLabel = false;
              } else {
                skipLabel = true;
              }
            }
          }
        }

        if (type == 1 && 'circle-radius' in paint) {
          ++stylesLength;
          if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
            feature.styleIds[zoom].push(_layerId);
          }
          style = styles[stylesLength];
          if (!style || !style.getImage() || style.getFill() || style.getStroke()) {
            style = styles[stylesLength] = new _Style2.default();
          }
          var circleRadius = getValue(_layerId, paint, 'circle-radius', zoom, properties);
          var circleStrokeColor = getValue(_layerId, paint, 'circle-stroke-color', zoom, properties);
          var circleColor = getValue(_layerId, paint, 'circle-color', zoom, properties);
          var circleOpacity = getValue(_layerId, paint, 'circle-opacity', zoom, properties);
          var circleStrokeWidth = getValue(_layerId, paint, 'circle-stroke-width', zoom, properties);
          var circleStrokeOpacity = getValue(_layerId, paint, 'circle-stroke-opacity', zoom, properties);
          var cache_key = circleRadius + '.' + circleStrokeColor + '.' + circleColor + '.' + circleOpacity + '.' + circleStrokeWidth + '.' + circleStrokeOpacity;
          iconImg = iconImageCache[cache_key];
          if (!iconImg) {
            iconImg = new _Circle2.default({
              radius: circleRadius,
              stroke: circleStrokeWidth === 0 ? undefined : new _Stroke2.default({
                width: circleStrokeWidth,
                color: colorWithOpacity(circleStrokeColor, circleStrokeOpacity)
              }),
              fill: new _Fill2.default({
                color: colorWithOpacity(circleColor, circleOpacity)
              })
            });
          }
          style.setImage(iconImg);
          text = style.getText();
          style.setText(undefined);
          style.setGeometry(undefined);
          style.setZIndex(99999 - index);
          hasImage = true;
        }

        var label = void 0;
        if ('text-field' in layout) {
          var textField = getValue(_layerId, layout, 'text-field', zoom, properties);
          label = fromTemplate(textField, properties);
        }
        if (label && !skipLabel) {
          if (!hasImage) {
            ++stylesLength;
            if (feature.styleIds[zoom].indexOf(_layerId) === -1) {
              feature.styleIds[zoom].push(_layerId);
            }
            style = styles[stylesLength];
            if (!style || !style.getText() || style.getFill() || style.getStroke()) {
              style = styles[stylesLength] = new _Style2.default();
            }
            style.setImage(undefined);
            style.setGeometry(undefined);
          }
          if (!style.getText()) {
            style.setText(text || new _Text2.default());
          }
          text = style.getText();
          var textSize = getValue(_layerId, layout, 'text-size', zoom, properties);
          var font = (0, _mapboxToCssFont2.default)(chooseFont(getValue(_layerId, layout, 'text-font', zoom, properties)), textSize);
          var textTransform = layout['text-transform'];
          if (textTransform == 'uppercase') {
            label = label.toUpperCase();
          } else if (textTransform == 'lowercase') {
            label = label.toLowerCase();
          }
          var wrappedLabel = type == 2 ? label : wrapText(label, font, getValue(_layerId, layout, 'text-max-width', zoom, properties));
          text.setText(wrappedLabel);
          text.setFont(font);
          text.setRotation((0, _util.deg2rad)(getValue(_layerId, layout, 'text-rotate', zoom, properties)));
          var textAnchor = getValue(_layerId, layout, 'text-anchor', zoom, properties);
          var placement = hasImage || type == 1 ? 'point' : getValue(_layerId, layout, 'symbol-placement', zoom, properties);
          text.setPlacement(placement);
          if (placement == 'point') {
            var textAlign = 'center';
            if (textAnchor.indexOf('left') !== -1) {
              textAlign = 'left';
            } else if (textAnchor.indexOf('right') !== -1) {
              textAlign = 'right';
            }
            text.setTextAlign(textAlign);
          } else {
            text.setTextAlign();
          }
          var textBaseline = 'middle';
          if (textAnchor.indexOf('bottom') == 0) {
            textBaseline = 'bottom';
          } else if (textAnchor.indexOf('top') == 0) {
            textBaseline = 'top';
          }
          text.setTextBaseline(textBaseline);
          var textOffset = getValue(_layerId, layout, 'text-offset', zoom, properties);
          var textTranslate = getValue(_layerId, paint, 'text-translate', zoom, properties);
          text.setOffsetX(textOffset[0] * textSize + textTranslate[0]);
          text.setOffsetY(textOffset[1] * textSize + textTranslate[1]);
          opacity = getValue(_layerId, paint, 'text-opacity', zoom, properties);
          var textColor = new _Fill2.default();

          textColor.setColor(colorWithOpacity(getValue(_layerId, paint, 'text-color', zoom, properties), opacity));
          text.setFill(textColor);
          var haloColor = colorWithOpacity(getValue(_layerId, paint, 'text-halo-color', zoom, properties), opacity);
          if (haloColor) {
            var textHalo = new _Stroke2.default();
            textHalo.setColor(haloColor);
            textHalo.setWidth(getValue(_layerId, paint, 'text-halo-width', zoom, properties));
            text.setStroke(textHalo);
          } else {
            text.setStroke(undefined);
          }
          style.setZIndex(99999 - index);
        }
      }
    }

    if (stylesLength > -1) {
      styles.length = stylesLength + 1;
      return styles;
    }
  };

  olLayer.setStyle(styleFunction);
  olLayer.set('mapbox-source', mapboxSource);
  olLayer.set('mapbox-layers', mapboxLayers);
  return styleFunction;
};

var _Style = __webpack_require__(/*! ol/style/Style */ "ol/style/Style");

var _Style2 = _interopRequireDefault(_Style);

var _Fill = __webpack_require__(/*! ol/style/Fill */ "ol/style/Fill");

var _Fill2 = _interopRequireDefault(_Fill);

var _Stroke = __webpack_require__(/*! ol/style/Stroke */ "ol/style/Stroke");

var _Stroke2 = _interopRequireDefault(_Stroke);

var _Icon = __webpack_require__(/*! ol/style/Icon */ "ol/style/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = __webpack_require__(/*! ol/style/Text */ "ol/style/Text");

var _Text2 = _interopRequireDefault(_Text);

var _Circle = __webpack_require__(/*! ol/style/Circle */ "ol/style/Circle");

var _Circle2 = _interopRequireDefault(_Circle);

var _Point = __webpack_require__(/*! ol/geom/Point */ "ol/geom/Point");

var _Point2 = _interopRequireDefault(_Point);

var _deref = __webpack_require__(/*! @mapbox/mapbox-gl-style-spec/deref */ "./node_modules/@mapbox/mapbox-gl-style-spec/deref.js");

var _deref2 = _interopRequireDefault(_deref);

var _function = __webpack_require__(/*! @mapbox/mapbox-gl-style-spec/function */ "./node_modules/@mapbox/mapbox-gl-style-spec/function/index.js");

var _function2 = _interopRequireDefault(_function);

var _feature_filter = __webpack_require__(/*! @mapbox/mapbox-gl-style-spec/feature_filter */ "./node_modules/@mapbox/mapbox-gl-style-spec/feature_filter/index.js");

var _feature_filter2 = _interopRequireDefault(_feature_filter);

var _mapboxToCssFont = __webpack_require__(/*! mapbox-to-css-font */ "./node_modules/mapbox-to-css-font/index.js");

var _mapboxToCssFont2 = _interopRequireDefault(_mapboxToCssFont);

var _util = __webpack_require__(/*! ./util */ "./util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var functionTypes = {
  'line-miter-limit': 'interpolated',
  'fill-opacity': 'interpolated',
  'line-opacity': 'interpolated',
  'line-width': 'interpolated',
  'text-halo-width': 'interpolated',
  'text-max-width': 'interpolated',
  'text-offset': 'interpolated',
  'text-opacity': 'interpolated',
  'text-rotate': 'interpolated',
  'text-size': 'interpolated',
  'icon-opacity': 'interpolated',
  'icon-rotate': 'interpolated',
  'icon-anchor': 'interpolated',
  'icon-offset': 'interpolated',
  'icon-translate': 'interpolated',
  'icon-translate-anchor': 'interpolated',
  'icon-size': 'interpolated',
  'icon-color': 'interpolated',
  'circle-radius': 'interpolated',
  'circle-opacity': 'interpolated',
  'circle-stroke-opacity': 'interpolated',
  'circle-stroke-width': 'interpolated',
  'circle-color': 'interpolated',
  'circle-stroke-color': 'interpolated',
  'text-halo-color': 'interpolated',
  'text-color': 'interpolated',
  'line-color': 'interpolated',
  'fill-outline-color': 'interpolated',
  'fill-color': 'interpolated',
  'icon-image': 'piecewise-constant',
  'line-cap': 'piecewise-constant',
  'line-join': 'piecewise-constant',
  'line-dasharray': 'piecewise-constant',
  'symbol-placement': 'piecewise-constant',
  'text-anchor': 'piecewise-constant',
  'text-field': 'piecewise-constant',
  'text-font': 'piecewise-constant'
};

var defaults = {
  'fill-opacity': 1,
  'line-cap': 'butt',
  'line-join': 'miter',
  'line-miter-limit': 2,
  'line-opacity': 1,
  'line-width': 1,
  'symbol-placement': 'point',
  'text-anchor': 'center',
  'text-color': '#000000',
  'text-font': ['Open Sans Regular', 'Arial Unicode MS Regular'],
  'text-halo-color': 'rgba(0, 0, 0, 0)',
  'text-halo-width': 0,
  'text-max-width': 10,
  'text-offset': [0, 0],
  'text-translate': [0, 0],
  'text-opacity': 1,
  'text-rotate': 0,
  'text-size': 16,
  'icon-opacity': 1,
  'icon-rotate': 0,
  'icon-offset': [0, 0],
  'icon-translate': [0, 0],
  'icon-translate-anchor': 'map',
  'icon-anchor': 'center',
  'icon-size': 1,
  'circle-color': '#000000',
  'circle-stroke-color': '#000000',
  'circle-opacity': 1,
  'circle-stroke-opacity': 1,
  'circle-stroke-width': 0
};

var types = {
  'Point': 1,
  'MultiPoint': 1,
  'LineString': 2,
  'MultiLineString': 2,
  'Polygon': 3,
  'MultiPolygon': 3
};

var functionCache = {};

function getValue(layerId, layoutOrPaint, property, zoom, properties) {
  if (!functionCache[layerId]) {
    functionCache[layerId] = {};
  }
  var functions = functionCache[layerId];
  if (!functions[property]) {
    var value = layoutOrPaint[property];
    if (value === undefined) {
      value = defaults[property];
    }
    functions[property] = (0, _function2.default)(value, {
      function: functionTypes[property],
      type: property.indexOf('color') !== -1 ? 'color' : (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' && value.stops && typeof value.stops[0][0] == 'number' ? 'number' : undefined
    });
  }
  return functions[property](zoom, properties);
}

function covertIconAnchor(iconAnchor) {
  var anchorOffset = [0.5, 0.5];
  if (['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(iconAnchor)) {
    anchorOffset = [0, 0];
  }
  if (iconAnchor === 'left') {
    iconAnchor = 'top-left';
    anchorOffset = [0, 0.5];
  }
  if (iconAnchor === 'right') {
    iconAnchor = 'top-left';
    anchorOffset = [1, 0.5];
  }
  if (iconAnchor === 'bottom') {
    iconAnchor = 'top-left';
    anchorOffset = [0.5, 1];
  }
  if (iconAnchor === 'top') {
    iconAnchor = 'top-left';
    anchorOffset = [0.5, 0];
  }
  //center
  return {
    anchorOffset: anchorOffset,
    iconAnchor: iconAnchor
  };
}

var fontMap = {};

function chooseFont(fonts, availableFonts) {
  if (fontMap[fonts]) {
    return fontMap[fonts];
  }
  if (availableFonts) {
    for (var i = 0, ii = fonts.length; i < ii; ++i) {
      var font = fonts[i];
      if (availableFonts.indexOf(font) != -1) {
        fontMap[fonts] = font;
        break;
      }
    }
    if (!fontMap[fonts]) {
      // fallback font
      fontMap[fonts] = fonts[fonts.length - 1];
    }
  } else {
    fontMap[fonts] = fonts[0];
  }
  return fontMap[fonts];
}

var filterCache = {};

function evaluateFilter(layerId, filter, feature) {
  if (!(layerId in filterCache)) {
    filterCache[layerId] = (0, _feature_filter2.default)(filter);
  }
  return filterCache[layerId](feature);
}

var colorCache = {};

function colorWithOpacity(color, opacity) {
  if (color && opacity !== undefined) {
    var colorData = colorCache[color];
    if (!colorData) {
      colorCache[color] = colorData = {
        color: [color[0] * 255 / color[3], color[1] * 255 / color[3], color[2] * 255 / color[3], color[3]],
        opacity: color[3]
      };
    }
    color = colorData.color;
    color[3] = colorData.opacity * opacity;
    if (color[3] === 0) {
      color = undefined;
    }
  }
  return color;
}

var templateRegEx = /^([^]*)\{(.*)\}([^]*)$/;

function fromTemplate(text, properties) {
  var parts = void 0;
  do {
    parts = text.match(templateRegEx);
    if (parts) {
      var value = properties[parts[2]] || '';
      text = parts[1] + value + parts[3];
    }
  } while (parts);
  return text;
}

var emptyObj = {};

/**
 * Creates a style function from the `glStyle` object for all layers that use
 * the specified `source`, which needs to be a `"type": "vector"` or
 * `"type": "geojson"` source and applies it to the specified OpenLayers layer.
 *
 * @param {ol.layer.Vector|ol.layer.VectorTile} olLayer OpenLayers layer to
 * apply the style to. In addition to the style, the layer will get two
 * properties: `mapbox-source` will be the `id` of the `glStyle`'s source used
 * for the layer, and `mapbox-layers` will be an array of the `id`s of the
 * `glStyle`'s layers.
 * @param {string|Object} glStyle Mapbox Style object.
 * @param {string|Array<string>} source `source` key or an array of layer `id`s
 * from the Mapbox Style object. When a `source` key is provided, all layers for
 * the specified source will be included in the style function. When layer `id`s
 * are provided, they must be from layers that use the same source.
 * @param {Array<number>} [resolutions=[78271.51696402048, 39135.75848201024,
 * 19567.87924100512, 9783.93962050256, 4891.96981025128, 2445.98490512564,
 * 1222.99245256282, 611.49622628141, 305.748113140705, 152.8740565703525,
 * 76.43702828517625, 38.21851414258813, 19.109257071294063, 9.554628535647032,
 * 4.777314267823516, 2.388657133911758, 1.194328566955879, 0.5971642834779395,
 * 0.29858214173896974, 0.14929107086948487, 0.07464553543474244]]
 * Resolutions for mapping resolution to zoom level.
 * @param {Object} [spriteData=undefined] Sprite data from the url specified in
 * the Mapbox Style object's `sprite` property. Only required if a `sprite`
 * property is specified in the Mapbox Style object.
 * @param {Object} [spriteImageUrl=undefined] Sprite image url for the sprite
 * specified in the Mapbox Style object's `sprite` property. Only required if a
 * `sprite` property is specified in the Mapbox Style object.
 * @param {Array<string>} [fonts=undefined] Array of available fonts, using the
 * same font names as the Mapbox Style object. If not provided, the style
 * function will always use the first font from the font array.
 * @return {ol.style.StyleFunction} Style function for use in
 * `ol.layer.Vector` or `ol.layer.VectorTile`.
 */

/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deg2rad = deg2rad;
exports.getZoomForResolution = getZoomForResolution;
function deg2rad(degrees) {
  return degrees * Math.PI / 180;
}

function getZoomForResolution(resolution, resolutions) {
  var i = 0;
  var ii = resolutions.length;
  for (; i < ii; ++i) {
    var candidate = resolutions[i];
    if (candidate < resolution && i + 1 < ii) {
      var zoomFactor = resolutions[i] / resolutions[i + 1];
      return i + Math.log(resolutions[i] / resolution) / Math.log(zoomFactor);
    }
  }
  return ii - 1;
}

/***/ }),

/***/ "ol/Map":
/*!*************************!*\
  !*** external "ol.Map" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.Map;

/***/ }),

/***/ "ol/Observable":
/*!********************************!*\
  !*** external "ol.Observable" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.Observable;

/***/ }),

/***/ "ol/format/GeoJSON":
/*!************************************!*\
  !*** external "ol.format.GeoJSON" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.format.GeoJSON;

/***/ }),

/***/ "ol/format/MVT":
/*!********************************!*\
  !*** external "ol.format.MVT" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.format.MVT;

/***/ }),

/***/ "ol/geom/Point":
/*!********************************!*\
  !*** external "ol.geom.Point" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.geom.Point;

/***/ }),

/***/ "ol/layer/Tile":
/*!********************************!*\
  !*** external "ol.layer.Tile" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.layer.Tile;

/***/ }),

/***/ "ol/layer/Vector":
/*!**********************************!*\
  !*** external "ol.layer.Vector" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.layer.Vector;

/***/ }),

/***/ "ol/layer/VectorTile":
/*!**************************************!*\
  !*** external "ol.layer.VectorTile" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.layer.VectorTile;

/***/ }),

/***/ "ol/proj":
/*!**************************!*\
  !*** external "ol.proj" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.proj;

/***/ }),

/***/ "ol/source/TileJSON":
/*!*************************************!*\
  !*** external "ol.source.TileJSON" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.source.TileJSON;

/***/ }),

/***/ "ol/source/Vector":
/*!***********************************!*\
  !*** external "ol.source.Vector" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.source.Vector;

/***/ }),

/***/ "ol/source/VectorTile":
/*!***************************************!*\
  !*** external "ol.source.VectorTile" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.source.VectorTile;

/***/ }),

/***/ "ol/source/XYZ":
/*!********************************!*\
  !*** external "ol.source.XYZ" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.source.XYZ;

/***/ }),

/***/ "ol/style/Circle":
/*!**********************************!*\
  !*** external "ol.style.Circle" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.style.Circle;

/***/ }),

/***/ "ol/style/Fill":
/*!********************************!*\
  !*** external "ol.style.Fill" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.style.Fill;

/***/ }),

/***/ "ol/style/Icon":
/*!********************************!*\
  !*** external "ol.style.Icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.style.Icon;

/***/ }),

/***/ "ol/style/Stroke":
/*!**********************************!*\
  !*** external "ol.style.Stroke" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.style.Stroke;

/***/ }),

/***/ "ol/style/Style":
/*!*********************************!*\
  !*** external "ol.style.Style" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.style.Style;

/***/ }),

/***/ "ol/style/Text":
/*!********************************!*\
  !*** external "ol.style.Text" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.style.Text;

/***/ }),

/***/ "ol/tilegrid":
/*!******************************!*\
  !*** external "ol.tilegrid" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ol.tilegrid;

/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbG1zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29sbXMvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9vbG1zLy4vbm9kZV9tb2R1bGVzL0BtYXBib3gvbWFwYm94LWdsLXN0eWxlLXNwZWMvZGVyZWYuanMiLCJ3ZWJwYWNrOi8vb2xtcy8uL25vZGVfbW9kdWxlcy9AbWFwYm94L21hcGJveC1nbC1zdHlsZS1zcGVjL2ZlYXR1cmVfZmlsdGVyL2luZGV4LmpzIiwid2VicGFjazovL29sbXMvLi9ub2RlX21vZHVsZXMvQG1hcGJveC9tYXBib3gtZ2wtc3R5bGUtc3BlYy9mdW5jdGlvbi9jb2xvcl9zcGFjZXMuanMiLCJ3ZWJwYWNrOi8vb2xtcy8uL25vZGVfbW9kdWxlcy9AbWFwYm94L21hcGJveC1nbC1zdHlsZS1zcGVjL2Z1bmN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL29sbXMvLi9ub2RlX21vZHVsZXMvQG1hcGJveC9tYXBib3gtZ2wtc3R5bGUtc3BlYy91dGlsL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly9vbG1zLy4vbm9kZV9tb2R1bGVzL0BtYXBib3gvbWFwYm94LWdsLXN0eWxlLXNwZWMvdXRpbC9nZXRfdHlwZS5qcyIsIndlYnBhY2s6Ly9vbG1zLy4vbm9kZV9tb2R1bGVzL0BtYXBib3gvbWFwYm94LWdsLXN0eWxlLXNwZWMvdXRpbC9pbnRlcnBvbGF0ZS5qcyIsIndlYnBhY2s6Ly9vbG1zLy4vbm9kZV9tb2R1bGVzL0BtYXBib3gvbWFwYm94LWdsLXN0eWxlLXNwZWMvdXRpbC9wYXJzZV9jb2xvci5qcyIsIndlYnBhY2s6Ly9vbG1zLy4vbm9kZV9tb2R1bGVzL0BtYXBib3gvbWFwYm94LWdsLXN0eWxlLXNwZWMvdXRpbC9yZWZfcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9vbG1zLy4vbm9kZV9tb2R1bGVzL2Nzc2NvbG9ycGFyc2VyL2Nzc2NvbG9ycGFyc2VyLmpzIiwid2VicGFjazovL29sbXMvLi9ub2RlX21vZHVsZXMvbWFwYm94LXRvLWNzcy1mb250L2luZGV4LmpzIiwid2VicGFjazovL29sbXMvLi9ub2RlX21vZHVsZXMvd2ViZm9udC1tYXRjaGVyL2xpYi9mb250cy9nb29nbGUuanMiLCJ3ZWJwYWNrOi8vb2xtcy8uL29sbXMuanMiLCJ3ZWJwYWNrOi8vb2xtcy8uL3N0eWxlZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vb2xtcy8uL3V0aWwuanMiLCJ3ZWJwYWNrOi8vb2xtcy9leHRlcm5hbCBcIm9sLk1hcFwiIiwid2VicGFjazovL29sbXMvZXh0ZXJuYWwgXCJvbC5PYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vb2xtcy9leHRlcm5hbCBcIm9sLmZvcm1hdC5HZW9KU09OXCIiLCJ3ZWJwYWNrOi8vb2xtcy9leHRlcm5hbCBcIm9sLmZvcm1hdC5NVlRcIiIsIndlYnBhY2s6Ly9vbG1zL2V4dGVybmFsIFwib2wuZ2VvbS5Qb2ludFwiIiwid2VicGFjazovL29sbXMvZXh0ZXJuYWwgXCJvbC5sYXllci5UaWxlXCIiLCJ3ZWJwYWNrOi8vb2xtcy9leHRlcm5hbCBcIm9sLmxheWVyLlZlY3RvclwiIiwid2VicGFjazovL29sbXMvZXh0ZXJuYWwgXCJvbC5sYXllci5WZWN0b3JUaWxlXCIiLCJ3ZWJwYWNrOi8vb2xtcy9leHRlcm5hbCBcIm9sLnByb2pcIiIsIndlYnBhY2s6Ly9vbG1zL2V4dGVybmFsIFwib2wuc291cmNlLlRpbGVKU09OXCIiLCJ3ZWJwYWNrOi8vb2xtcy9leHRlcm5hbCBcIm9sLnNvdXJjZS5WZWN0b3JcIiIsIndlYnBhY2s6Ly9vbG1zL2V4dGVybmFsIFwib2wuc291cmNlLlZlY3RvclRpbGVcIiIsIndlYnBhY2s6Ly9vbG1zL2V4dGVybmFsIFwib2wuc291cmNlLlhZWlwiIiwid2VicGFjazovL29sbXMvZXh0ZXJuYWwgXCJvbC5zdHlsZS5DaXJjbGVcIiIsIndlYnBhY2s6Ly9vbG1zL2V4dGVybmFsIFwib2wuc3R5bGUuRmlsbFwiIiwid2VicGFjazovL29sbXMvZXh0ZXJuYWwgXCJvbC5zdHlsZS5JY29uXCIiLCJ3ZWJwYWNrOi8vb2xtcy9leHRlcm5hbCBcIm9sLnN0eWxlLlN0cm9rZVwiIiwid2VicGFjazovL29sbXMvZXh0ZXJuYWwgXCJvbC5zdHlsZS5TdHlsZVwiIiwid2VicGFjazovL29sbXMvZXh0ZXJuYWwgXCJvbC5zdHlsZS5UZXh0XCIiLCJ3ZWJwYWNrOi8vb2xtcy9leHRlcm5hbCBcIm9sLnRpbGVncmlkXCIiXSwibmFtZXMiOlsiYXBwbHlTdHlsZSIsImFwcGx5QmFja2dyb3VuZCIsImFwcGx5IiwiZ2V0TGF5ZXIiLCJnZXRTb3VyY2UiLCJhdmFpbGFibGVGb250cyIsImxvYWRGb250IiwiZm9udHMiLCJpIiwiaWkiLCJBcnJheSIsImlzQXJyYXkiLCJzdG9wcyIsImxlbmd0aCIsImdvb2dsZUZhbWlsaWVzIiwiZ2V0TmFtZXMiLCJmYW1pbGllcyIsIm1hcCIsImZvbnQiLCJzcGxpdCIsInJlcGxhY2UiLCJmYW1pbHkiLCJpbmRleE9mIiwicHVzaCIsImZvbnRVcmwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtYXJrdXAiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInJlbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXBwZW5kQ2hpbGQiLCJkZWZhdWx0Rm9udCIsInByZXByb2Nlc3MiLCJsYXllciIsImxheW91dCIsInNwcml0ZVJlZ0V4Iiwid2l0aFBhdGgiLCJ1cmwiLCJwYXRoIiwidG9TcHJpdGVVcmwiLCJleHRlbnNpb24iLCJwYXJ0cyIsIm1hdGNoIiwiZ2xTdHlsZSIsInNvdXJjZSIsInJlc29sdXRpb25zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJKU09OIiwicGFyc2UiLCJ2ZXJzaW9uIiwiRXJyb3IiLCJzcHJpdGVTY2FsZSIsInNwcml0ZURhdGEiLCJzcHJpdGVJbWFnZVVybCIsInNwcml0ZSIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJzaXplRmFjdG9yIiwic3ByaXRlVXJsIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iLCJyIiwic3ByaXRlc0pzb24iLCJ1bmRlZmluZWQiLCJvbkNoYW5nZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic3R5bGUiLCJzZXRTdHlsZSIsImxheWVycyIsImlkIiwiZSIsInNldFRpbWVvdXQiLCJzZXRCYWNrZ3JvdW5kIiwidXBkYXRlU3R5bGUiLCJlbGVtZW50IiwiZ2V0VGFyZ2V0RWxlbWVudCIsInBhaW50Iiwiem9vbSIsImdldFZpZXciLCJnZXRab29tIiwiYmciLCJmdW5jdGlvbiIsInR5cGUiLCJNYXRoIiwicm91bmQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kT3BhY2l0eSIsInZpc2liaWxpdHkiLCJvbiIsInNvbWUiLCJsIiwiZ2V0U291cmNlSWRCeVJlZiIsInJlZiIsInNvdXJjZUlkIiwicHJvY2Vzc1N0eWxlIiwiYmFzZVVybCIsImhvc3QiLCJhY2Nlc3NUb2tlbiIsInZpZXciLCJnZXRDZW50ZXIiLCJzZXRDZW50ZXIiLCJjZW50ZXIiLCJzZXRab29tIiwiZml0IiwiZ2V0UHJvamVjdGlvbiIsImdldEV4dGVudCIsIm5lYXJlc3QiLCJzaXplIiwiZ2V0U2l6ZSIsImdsTGF5ZXJzIiwiZ2VvSnNvbkZvcm1hdCIsImxheWVySWRzIiwiZmluYWxpemVMYXllciIsImFkZExheWVyIiwic2V0VmlzaWJsZSIsIm9uY2UiLCJnbExheWVyIiwiZ2xTb3VyY2UiLCJnbFNvdXJjZUlkIiwibWFwaWQiLCJzb3VyY2VzIiwidGlsZXMiLCJ0aWxlR3JpZCIsInRpbGVTaXplIiwibWF4Wm9vbSIsIm1heHpvb20iLCJtaW5ab29tIiwibWluem9vbSIsImRlY2x1dHRlciIsIm1heFJlc29sdXRpb24iLCJnZXRNaW5ab29tIiwiZ2V0UmVzb2x1dGlvbiIsImF0dHJpYnV0aW9ucyIsImF0dHJpYnV0aW9uIiwiZm9ybWF0IiwidXJscyIsInZpc2libGUiLCJ6SW5kZXgiLCJ0aWxlanNvbiIsImtleSIsImdldFN0YXRlIiwidGlsZUpTT05Eb2MiLCJnZXRUaWxlSlNPTiIsInRpbGUiLCJnZXRUaWxlR3JpZCIsInNldFNvdXJjZSIsImdldEF0dHJpYnV0aW9ucyIsImdldE1heFpvb20iLCJzZXRNYXhSZXNvbHV0aW9uIiwiY3Jvc3NPcmlnaW4iLCJzZXRUaWxlTG9hZEZ1bmN0aW9uIiwic3JjIiwiYmJveCIsImdldFRpbGVDb29yZEV4dGVudCIsImdldFRpbGVDb29yZCIsInRvU3RyaW5nIiwiZ2V0SW1hZ2UiLCJkYXRhIiwiZmVhdHVyZXMiLCJnZW9Kc29uVXJsIiwicmVhZEZlYXR1cmVzIiwiZmVhdHVyZVByb2plY3Rpb24iLCJzZXQiLCJ0YXJnZXQiLCJhIiwicGF0aG5hbWUiLCJzbGljZSIsImpvaW4iLCJzdWJzdHIiLCJsYXllcklkIiwiZ2V0TGF5ZXJzIiwiZ2V0QXJyYXkiLCJnZXQiLCJyZWZQcm9wZXJ0aWVzIiwicmVxdWlyZSIsImRlcmVmIiwicGFyZW50IiwicmVzdWx0IiwiayIsImZvckVhY2giLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVyZWZMYXllcnMiLCJPYmplY3QiLCJjcmVhdGUiLCJjcmVhdGVGaWx0ZXIiLCJ0eXBlcyIsImZpbHRlciIsIkZ1bmN0aW9uIiwiY29tcGlsZSIsIm9wIiwic3RyIiwiY29tcGlsZUNvbXBhcmlzb25PcCIsImNvbXBpbGVMb2dpY2FsT3AiLCJjb21waWxlTmVnYXRpb24iLCJjb21waWxlSW5PcCIsImNvbXBpbGVIYXNPcCIsImNvbXBpbGVQcm9wZXJ0eVJlZmVyZW5jZSIsInByb3BlcnR5Iiwic3RyaW5naWZ5IiwidmFsdWUiLCJjaGVja1R5cGUiLCJsZWZ0IiwicmlnaHQiLCJleHByZXNzaW9ucyIsInZhbHVlcyIsInNvcnQiLCJjb21wYXJlIiwiZXhwcmVzc2lvbiIsImIiLCJYbiIsIlluIiwiWm4iLCJ0MCIsInQxIiwidDIiLCJ0MyIsImRlZzJyYWQiLCJQSSIsInJhZDJkZWciLCJ4eXoybGFiIiwidCIsInBvdyIsImxhYjJ4eXoiLCJ4eXoycmdiIiwieCIsInJnYjJ4eXoiLCJyZ2JUb0xhYiIsInJnYkNvbG9yIiwieSIsInoiLCJsYWJUb1JnYiIsImxhYkNvbG9yIiwiaXNOYU4iLCJyZ2JUb0hjbCIsImgiLCJhdGFuMiIsInNxcnQiLCJoY2xUb1JnYiIsImhjbENvbG9yIiwiYyIsImNvcyIsInNpbiIsImxhYiIsImZvcndhcmQiLCJyZXZlcnNlIiwiaGNsIiwiY29sb3JTcGFjZXMiLCJwYXJzZUNvbG9yIiwiZXh0ZW5kIiwiZ2V0VHlwZSIsImludGVycG9sYXRlIiwiaWRlbnRpdHlGdW5jdGlvbiIsImNyZWF0ZUZ1bmN0aW9uIiwicGFyYW1ldGVycyIsInByb3BlcnR5U3BlYyIsImlzQ29sb3IiLCJmdW4iLCJpc0Z1bmN0aW9uRGVmaW5pdGlvbiIsImlzRmVhdHVyZUNvbnN0YW50IiwiaXNab29tQ29uc3RhbnQiLCJ6b29tQW5kRmVhdHVyZURlcGVuZGVudCIsImZlYXR1cmVEZXBlbmRlbnQiLCJ6b29tRGVwZW5kZW50Iiwic3RvcCIsImRlZmF1bHQiLCJpbm5lckZ1biIsImhhc2hlZFN0b3BzIiwiY2F0ZWdvcmljYWxLZXlUeXBlIiwiZXZhbHVhdGVFeHBvbmVudGlhbEZ1bmN0aW9uIiwiZXZhbHVhdGVJbnRlcnZhbEZ1bmN0aW9uIiwiZXZhbHVhdGVDYXRlZ29yaWNhbEZ1bmN0aW9uIiwiZXZhbHVhdGVJZGVudGl0eUZ1bmN0aW9uIiwib3V0cHV0RnVuY3Rpb24iLCJjb2xvclNwYWNlIiwiY29sb3JzcGFjZSIsInMiLCJmZWF0dXJlRnVuY3Rpb25zIiwiem9vbVN0b3BzIiwiZmVhdHVyZUZ1bmN0aW9uU3RvcHMiLCJmZWF0dXJlIiwiYmFzZSIsImNvYWxlc2NlIiwiaW5wdXQiLCJrZXlUeXBlIiwiZXZhbHVhdGVkIiwibiIsImluZGV4IiwiZmluZFN0b3BMZXNzVGhhbk9yRXF1YWxUbyIsImludGVycG9sYXRpb25GYWN0b3IiLCJvdXRwdXRMb3dlciIsIm91dHB1dFVwcGVyIiwiaW50ZXJwIiwiYXJncyIsImV2YWx1YXRlZExvd2VyIiwiZXZhbHVhdGVkVXBwZXIiLCJsb3dlckluZGV4IiwidXBwZXJJbmRleCIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRWYWx1ZSIsInVwcGVyVmFsdWUiLCJmbG9vciIsIm1heCIsImxvd2VyVmFsdWUiLCJkaWZmZXJlbmNlIiwicHJvZ3Jlc3MiLCJvdXRwdXQiLCJpbnB1dHMiLCJ2YWwiLCJOdW1iZXIiLCJTdHJpbmciLCJCb29sZWFuIiwibnVtYmVyIiwidmVjMiIsImZyb20iLCJ0byIsImNvbG9yIiwiYXJyYXkiLCJkIiwicGFyc2VDb2xvclN0cmluZyIsInBhcnNlQ1NTQ29sb3IiLCJyZ2JhIiwia0NTU0NvbG9yVGFibGUiLCJjbGFtcF9jc3NfYnl0ZSIsImNsYW1wX2Nzc19mbG9hdCIsImYiLCJwYXJzZV9jc3NfaW50IiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwicGFyc2VfY3NzX2Zsb2F0IiwiY3NzX2h1ZV90b19yZ2IiLCJtMSIsIm0yIiwiY3NzX3N0ciIsInRvTG93ZXJDYXNlIiwiaXYiLCJlcCIsImZuYW1lIiwicGFyYW1zIiwiYWxwaGEiLCJwb3AiLCJmb250V2VpZ2h0cyIsInRoaW4iLCJoYWlybGluZSIsImxpZ2h0IiwiYm9vayIsInJlZ3VsYXIiLCJub3JtYWwiLCJwbGFpbiIsInJvbWFuIiwic3RhbmRhcmQiLCJtZWRpdW0iLCJib2xkIiwiaGVhdnkiLCJibGFjayIsImZhdCIsInBvc3RlciIsInNwIiwiZm9udENhY2hlIiwiY3NzRGF0YSIsIm1heWJlV2VpZ2h0Iiwid2VpZ2h0IiwidyIsImZvbnRGYW1pbHkiLCJpY29uIiwibmFtZSIsInRpdGxlIiwibGluayIsImdldExpbmsiLCJub3JtYWxpemVOYW1lIiwiY2FsbCIsInN0eWxlZnVuY3Rpb24iLCJvbExheWVyIiwic3ByaXRlSW1hZ2UiLCJyZXMiLCJzcHJpdGVJbWdTaXplIiwiaW1nIiwiSW1hZ2UiLCJvbmxvYWQiLCJ3aWR0aCIsImhlaWdodCIsImNoYW5nZWQiLCJjdHgiLCJnZXRDb250ZXh0IiwibWVhc3VyZUNhY2hlIiwid3JhcFRleHQiLCJ0ZXh0IiwiZW0iLCJ3cmFwcGVkVGV4dCIsIm9uZUVtIiwibWVhc3VyZVRleHQiLCJ3b3JkcyIsImxpbmUiLCJsaW5lcyIsIndvcmQiLCJhbGxMYXllcnMiLCJsYXllcnNCeVNvdXJjZUxheWVyIiwibWFwYm94TGF5ZXJzIiwibWFwYm94U291cmNlIiwic291cmNlTGF5ZXIiLCJmdW5jdGlvbkNhY2hlIiwiZmlsdGVyQ2FjaGUiLCJpY29uSW1hZ2VDYWNoZSIsInN0eWxlcyIsInBhdHRlcm5DYWNoZSIsInN0eWxlRnVuY3Rpb24iLCJyZXNvbHV0aW9uIiwicHJvcGVydGllcyIsImdldFByb3BlcnRpZXMiLCJzdHlsZUlkcyIsImdldEdlb21ldHJ5Iiwic3R5bGVzTGVuZ3RoIiwibGF5ZXJEYXRhIiwiZW1wdHlPYmoiLCJpY29uSW1nIiwiZXZhbHVhdGVGaWx0ZXIiLCJvcGFjaXR5IiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZUNvbG9yIiwiZ2V0VmFsdWUiLCJpY29uSW1hZ2UiLCJmcm9tVGVtcGxhdGUiLCJnZXRGaWxsIiwiZ2V0U3Ryb2tlIiwiZ2V0VGV4dCIsInNldFpJbmRleCIsImljb25fY2FjaGVfa2V5IiwicGF0dGVybiIsInNwcml0ZUltYWdlRGF0YSIsImNhbnZhcyIsImdsb2JhbEFscGhhIiwiZHJhd0ltYWdlIiwiY3JlYXRlUGF0dGVybiIsInNldENvbG9yIiwiY29sb3JXaXRoT3BhY2l0eSIsInNldExpbmVDYXAiLCJkZWZhdWx0cyIsInNldExpbmVKb2luIiwic2V0TWl0ZXJMaW1pdCIsInNldFdpZHRoIiwic2V0TGluZURhc2giLCJoYXNJbWFnZSIsInNraXBMYWJlbCIsInN0eWxlR2VvbSIsImdlb20iLCJnZXRGbGF0TWlkcG9pbnQiLCJleHRlbnQiLCJzZXRHZW9tZXRyeSIsImljb25TaXplIiwiaWNvbkNvbG9yIiwiaWNvblRyYW5zbGF0ZSIsImljb25UcmFuc2xhdGVBbmNob3IiLCJpY29uQW5jaG9yVmFsdWUiLCJpY29uT2Zmc2V0IiwiY292ZXJ0SWNvbkFuY2hvciIsImFuY2hvck9mZnNldCIsImljb25BbmNob3IiLCJnZXRJbWFnZURhdGEiLCJjYyIsInB1dEltYWdlRGF0YSIsInRyYW5zbGF0ZU9mZnNldCIsImFuY2hvck9yaWdpbiIsImFuY2hvciIsImltZ1NpemUiLCJzY2FsZSIsInBpeGVsUmF0aW8iLCJyb3RhdGVWYWx1ZSIsInNldFJvdGF0aW9uIiwic2V0T3BhY2l0eSIsInNldEltYWdlIiwic2V0VGV4dCIsImNpcmNsZVJhZGl1cyIsImNpcmNsZVN0cm9rZUNvbG9yIiwiY2lyY2xlQ29sb3IiLCJjaXJjbGVPcGFjaXR5IiwiY2lyY2xlU3Ryb2tlV2lkdGgiLCJjaXJjbGVTdHJva2VPcGFjaXR5IiwiY2FjaGVfa2V5IiwicmFkaXVzIiwibGFiZWwiLCJ0ZXh0RmllbGQiLCJ0ZXh0U2l6ZSIsImNob29zZUZvbnQiLCJ0ZXh0VHJhbnNmb3JtIiwidG9VcHBlckNhc2UiLCJ3cmFwcGVkTGFiZWwiLCJzZXRGb250IiwidGV4dEFuY2hvciIsInBsYWNlbWVudCIsInNldFBsYWNlbWVudCIsInRleHRBbGlnbiIsInNldFRleHRBbGlnbiIsInRleHRCYXNlbGluZSIsInNldFRleHRCYXNlbGluZSIsInRleHRPZmZzZXQiLCJ0ZXh0VHJhbnNsYXRlIiwic2V0T2Zmc2V0WCIsInNldE9mZnNldFkiLCJ0ZXh0Q29sb3IiLCJzZXRGaWxsIiwiaGFsb0NvbG9yIiwidGV4dEhhbG8iLCJzZXRTdHJva2UiLCJmdW5jdGlvblR5cGVzIiwibGF5b3V0T3JQYWludCIsImZ1bmN0aW9ucyIsImluY2x1ZGVzIiwiZm9udE1hcCIsImNvbG9yQ2FjaGUiLCJjb2xvckRhdGEiLCJ0ZW1wbGF0ZVJlZ0V4IiwiZ2V0Wm9vbUZvclJlc29sdXRpb24iLCJkZWdyZWVzIiwiY2FuZGlkYXRlIiwiem9vbUZhY3RvciIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHlCOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLDZCIiwiZmlsZSI6Im9sbXMtZGVidWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9vbG1zLmpzXCIpO1xuIiwiLypcclxub2wtbWFwYm94LXN0eWxlIC0gVXNlIE1hcGJveCBTdHlsZSBvYmplY3RzIHdpdGggT3BlbkxheWVyc1xyXG5Db3B5cmlnaHQgMjAxNi1wcmVzZW50IEJvdW5kbGVzcyBTcGF0aWFsLCBJbmMuXHJcbkxpY2Vuc2U6IGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ib3VuZGxlc3NnZW8vb2wtbWFwYm94LWdsLXN0eWxlL21hc3Rlci9MSUNFTlNFXHJcbiovXHJcblxyXG5pbXBvcnQgZ2xmdW4gZnJvbSAnQG1hcGJveC9tYXBib3gtZ2wtc3R5bGUtc3BlYy9mdW5jdGlvbic7XHJcbmltcG9ydCBtYjJjc3MgZnJvbSAnbWFwYm94LXRvLWNzcy1mb250JztcclxuaW1wb3J0IGFwcGx5U3R5bGVGdW5jdGlvbiBmcm9tICcuL3N0eWxlZnVuY3Rpb24nO1xyXG5pbXBvcnQgZ29vZ2xlRm9udHMgZnJvbSAnd2ViZm9udC1tYXRjaGVyL2xpYi9mb250cy9nb29nbGUnO1xyXG5pbXBvcnQge2Zyb21Mb25MYXR9IGZyb20gJ29sL3Byb2onO1xyXG5pbXBvcnQge2NyZWF0ZVhZWn0gZnJvbSAnb2wvdGlsZWdyaWQnO1xyXG5pbXBvcnQgTWFwIGZyb20gJ29sL01hcCc7XHJcbmltcG9ydCBHZW9KU09OIGZyb20gJ29sL2Zvcm1hdC9HZW9KU09OJztcclxuaW1wb3J0IE1WVCBmcm9tICdvbC9mb3JtYXQvTVZUJztcclxuaW1wb3J0IHt1bkJ5S2V5fSBmcm9tICdvbC9PYnNlcnZhYmxlJztcclxuaW1wb3J0IFRpbGVMYXllciBmcm9tICdvbC9sYXllci9UaWxlJztcclxuaW1wb3J0IFZlY3RvckxheWVyIGZyb20gJ29sL2xheWVyL1ZlY3Rvcic7XHJcbmltcG9ydCBWZWN0b3JUaWxlTGF5ZXIgZnJvbSAnb2wvbGF5ZXIvVmVjdG9yVGlsZSc7XHJcbmltcG9ydCBUaWxlSlNPTiBmcm9tICdvbC9zb3VyY2UvVGlsZUpTT04nO1xyXG5pbXBvcnQgVmVjdG9yU291cmNlIGZyb20gJ29sL3NvdXJjZS9WZWN0b3InO1xyXG5pbXBvcnQgVmVjdG9yVGlsZVNvdXJjZSBmcm9tICdvbC9zb3VyY2UvVmVjdG9yVGlsZSc7XHJcbmltcG9ydCBYWVogZnJvbSAnb2wvc291cmNlL1hZWic7XHJcblxyXG52YXIgYXZhaWxhYmxlRm9udHM7XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9udChmb250cykge1xyXG4gIHZhciBpLCBpaTtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkoZm9udHMpKSB7XHJcbiAgICB2YXIgc3RvcHMgPSBmb250cy5zdG9wcztcclxuICAgIGlmIChzdG9wcykge1xyXG4gICAgICBmb3IgKGkgPSAwLCBpaSA9IHN0b3BzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcclxuICAgICAgICBsb2FkRm9udChzdG9wc1tpXVsxXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdmFyIGdvb2dsZUZhbWlsaWVzID0gZ29vZ2xlRm9udHMuZ2V0TmFtZXMoKTtcclxuICB2YXIgZmFtaWxpZXMgPSBmb250cy5tYXAoZnVuY3Rpb24oZm9udCkge1xyXG4gICAgcmV0dXJuIG1iMmNzcyhmb250LCAxKS5zcGxpdCgnIDFweCAnKVsxXS5yZXBsYWNlKC9cIi9nLCAnJyk7XHJcbiAgfSk7XHJcbiAgZm9yIChpID0gMCwgaWkgPSBmYW1pbGllcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XHJcbiAgICB2YXIgZmFtaWx5ID0gZmFtaWxpZXNbaV07XHJcbiAgICB2YXIgZm9udCA9IGZvbnRzW2ldO1xyXG4gICAgaWYgKGdvb2dsZUZhbWlsaWVzLmluZGV4T2YoZmFtaWx5KSAhPT0gLTEpIHtcclxuICAgICAgaWYgKCFhdmFpbGFibGVGb250cykge1xyXG4gICAgICAgIGF2YWlsYWJsZUZvbnRzID0gW107XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGF2YWlsYWJsZUZvbnRzLmluZGV4T2YoZm9udCkgPT0gLTEpIHtcclxuICAgICAgICBhdmFpbGFibGVGb250cy5wdXNoKGZvbnQpO1xyXG4gICAgICAgIHZhciBmb250VXJsID0gJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT0nICsgZmFtaWx5LnJlcGxhY2UoLyAvZywgJysnKTtcclxuICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbaHJlZj1cIicgKyBmb250VXJsICsgJ1wiXScpKSB7XHJcbiAgICAgICAgICB2YXIgbWFya3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gICAgICAgICAgbWFya3VwLmhyZWYgPSBmb250VXJsO1xyXG4gICAgICAgICAgbWFya3VwLnJlbCA9ICdzdHlsZXNoZWV0JztcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobWFya3VwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG52YXIgZGVmYXVsdEZvbnQgPSBbJ09wZW4gU2FucyBSZWd1bGFyJywgJ0FyaWFsIFJlZ3VsYXInXTtcclxuXHJcbmZ1bmN0aW9uIHByZXByb2Nlc3MobGF5ZXIpIHtcclxuICBpZiAoJ2xheW91dCcgaW4gbGF5ZXIgJiYgJ3RleHQtZmllbGQnIGluIGxheWVyLmxheW91dCkge1xyXG4gICAgbG9hZEZvbnQobGF5ZXIubGF5b3V0Wyd0ZXh0LWZvbnQnXSB8fCBkZWZhdWx0Rm9udCk7XHJcbiAgfVxyXG59XHJcblxyXG52YXIgc3ByaXRlUmVnRXggPSAvXiguKikoXFw/LiopJC87XHJcblxyXG5mdW5jdGlvbiB3aXRoUGF0aCh1cmwsIHBhdGgpIHtcclxuICBpZiAocGF0aCAmJiB1cmwuaW5kZXhPZignaHR0cCcpICE9IDApIHtcclxuICAgIHVybCA9IHBhdGggKyB1cmw7XHJcbiAgfVxyXG4gIHJldHVybiB1cmw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvU3ByaXRlVXJsKHVybCwgcGF0aCwgZXh0ZW5zaW9uKSB7XHJcbiAgdXJsID0gd2l0aFBhdGgodXJsLCBwYXRoKTtcclxuICB2YXIgcGFydHMgPSB1cmwubWF0Y2goc3ByaXRlUmVnRXgpO1xyXG4gIHJldHVybiBwYXJ0cyA/XHJcbiAgICBwYXJ0c1sxXSArIGV4dGVuc2lvbiArIChwYXJ0cy5sZW5ndGggPiAyID8gcGFydHNbMl0gOiAnJykgOlxyXG4gICAgdXJsICsgZXh0ZW5zaW9uO1xyXG59XHJcblxyXG4vKipcclxuICogQXBwbGllcyBhIHN0eWxlIGZ1bmN0aW9uIHRvIGFuIGBvbC5sYXllci5WZWN0b3JUaWxlYCBvciBgb2wubGF5ZXIuVmVjdG9yYFxyXG4gKiB3aXRoIGFuIGBvbC5zb3VyY2UuVmVjdG9yVGlsZWAgb3IgYW4gYG9sLnNvdXJjZS5WZWN0b3JgLiBUaGUgc3R5bGUgZnVuY3Rpb25cclxuICogd2lsbCByZW5kZXIgYWxsIGxheWVycyBmcm9tIHRoZSBgZ2xTdHlsZWAgb2JqZWN0IHRoYXQgdXNlIHRoZSBzcGVjaWZpZWRcclxuICogYHNvdXJjZWAsIG9yIGEgc3Vic2V0IG9mIGxheWVycyBmcm9tIHRoZSBzYW1lIHNvdXJjZS4gVGhlIHNvdXJjZSBuZWVkcyB0byBiZVxyXG4gKiBhIGBcInR5cGVcIjogXCJ2ZWN0b3JcImAsIGBcInR5cGVcIjogXCJnZW9qc29uXCJgIG9yIGBcInR5cGVcIjogXCJyYXN0ZXJcImAgc291cmNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge29sLmxheWVyLlZlY3RvclRpbGV9IGxheWVyIE9wZW5MYXllcnMgbGF5ZXIuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gZ2xTdHlsZSBNYXBib3ggU3R5bGUgb2JqZWN0LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIGBzb3VyY2VgIGtleSBvciBhbiBhcnJheSBvZiBsYXllciBgaWRgcyBmcm9tIHRoZVxyXG4gKiBNYXBib3ggU3R5bGUgb2JqZWN0LiBXaGVuIGEgYHNvdXJjZWAga2V5IGlzIHByb3ZpZGVkLCBhbGwgbGF5ZXJzIGZvciB0aGVcclxuICogc3BlY2lmaWVkIHNvdXJjZSB3aWxsIGJlIGluY2x1ZGVkIGluIHRoZSBzdHlsZSBmdW5jdGlvbi4gV2hlbiBsYXllciBgaWRgc1xyXG4gKiBhcmUgcHJvdmlkZWQsIHRoZXkgbXVzdCBiZSBmcm9tIGxheWVycyB0aGF0IHVzZSB0aGUgc2FtZSBzb3VyY2UuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcGF0aD11bmRlZmluZWRdIFBhdGggb2YgdGhlIHN0eWxlIGZpbGUuIE9ubHkgcmVxdWlyZWQgd2hlblxyXG4gKiBhIHJlbGF0aXZlIHBhdGggaXMgdXNlZCB3aXRoIHRoZSBgXCJzcHJpdGVcImAgcHJvcGVydHkgb2YgdGhlIHN0eWxlLlxyXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtyZXNvbHV0aW9ucz11bmRlZmluZWRdIFJlc29sdXRpb25zIGZvciBtYXBwaW5nIHJlc29sdXRpb24gdG8gem9vbSBsZXZlbC5cclxuICogQHJldHVybiB7UHJvbWlzZX0gUHJvbWlzZSB3aGljaCB3aWxsIGJlIHJlc29sdmVkIHdoZW4gdGhlIHN0eWxlIGNhbiBiZSB1c2VkXHJcbiAqIGZvciByZW5kZXJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlTdHlsZShsYXllciwgZ2xTdHlsZSwgc291cmNlLCBwYXRoLCByZXNvbHV0aW9ucykge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICBpZiAodHlwZW9mIGdsU3R5bGUgIT0gJ29iamVjdCcpIHtcclxuICAgICAgZ2xTdHlsZSA9IEpTT04ucGFyc2UoZ2xTdHlsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2xTdHlsZS52ZXJzaW9uICE9IDgpIHtcclxuICAgICAgcmVqZWN0KG5ldyBFcnJvcignZ2xTdHlsZSB2ZXJzaW9uIDggcmVxdWlyZWQuJykpO1xyXG4gICAgfVxyXG4gICAgdmFyIHNwcml0ZVNjYWxlLCBzcHJpdGVEYXRhLCBzcHJpdGVJbWFnZVVybDtcclxuICAgIGlmIChnbFN0eWxlLnNwcml0ZSkge1xyXG4gICAgICBzcHJpdGVTY2FsZSA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID49IDEuNSA/IDAuNSA6IDE7XHJcbiAgICAgIHZhciBzaXplRmFjdG9yID0gc3ByaXRlU2NhbGUgPT0gMC41ID8gJ0AyeCcgOiAnJztcclxuICAgICAgdmFyIHNwcml0ZVVybCA9IHRvU3ByaXRlVXJsKGdsU3R5bGUuc3ByaXRlLCBwYXRoLCBzaXplRmFjdG9yICsgJy5qc29uJyk7XHJcblxyXG4gICAgICBmZXRjaChzcHJpdGVVcmwsIHtjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ30pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgIC8vIGlmIHRoZSByZXNwb25zZSBpcyByZWFkeSByZXR1cm4gdGhlIEpTT04gcHJvbWlzZVxyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHNpemVGYWN0b3IgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGUgSlNPTiBwcm9taXNlIGZvciB0aGUgbG93LXJlc29sdXRpb24gc3ByaXRlcy5cclxuICAgICAgICAgICAgc2l6ZUZhY3RvciA9ICcnO1xyXG4gICAgICAgICAgICBzcHJpdGVVcmwgPSB0b1Nwcml0ZVVybChnbFN0eWxlLnNwcml0ZSwgcGF0aCwgJy5qc29uJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmZXRjaChzcHJpdGVVcmwsIHtjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ30pLnRoZW4ociA9PiByLmpzb24oKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbihzcHJpdGVzSnNvbikge1xyXG4gICAgICAgICAgaWYgKHNwcml0ZXNKc29uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ05vIHNwcml0ZXMgZm91bmQuJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNwcml0ZURhdGEgPSBzcHJpdGVzSnNvbjtcclxuICAgICAgICAgIHNwcml0ZUltYWdlVXJsID0gdG9TcHJpdGVVcmwoZ2xTdHlsZS5zcHJpdGUsIHBhdGgsIHNpemVGYWN0b3IgKyAnLnBuZycpO1xyXG4gICAgICAgICAgb25DaGFuZ2UoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1Nwcml0ZXMgY2Fubm90IGJlIGxvYWRlZCBmcm9tICcgKyBzcHJpdGVVcmwpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc3R5bGU7XHJcbiAgICBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcclxuICAgICAgaWYgKCFzdHlsZSAmJiAoIWdsU3R5bGUuc3ByaXRlIHx8IHNwcml0ZURhdGEpICYmICghYXZhaWxhYmxlRm9udHMgfHwgYXZhaWxhYmxlRm9udHMubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICBzdHlsZSA9IGFwcGx5U3R5bGVGdW5jdGlvbihsYXllciwgZ2xTdHlsZSwgc291cmNlLCByZXNvbHV0aW9ucywgc3ByaXRlRGF0YSwgc3ByaXRlSW1hZ2VVcmwsIGF2YWlsYWJsZUZvbnRzKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3R5bGUpIHtcclxuICAgICAgICBsYXllci5zZXRTdHlsZShzdHlsZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobGF5ZXIgaW5zdGFuY2VvZiBWZWN0b3JUaWxlTGF5ZXIgfHwgbGF5ZXIgaW5zdGFuY2VvZiBWZWN0b3JMYXllcikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHZhciBsYXllcnMgPSBnbFN0eWxlLmxheWVycztcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaWkgPSBsYXllcnMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgPT0gJ3N0cmluZycgJiYgbGF5ZXJzW2ldLnNvdXJjZSA9PSBzb3VyY2UgfHwgc291cmNlLmluZGV4T2YobGF5ZXJzW2ldLmlkKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHByZXByb2Nlc3MobGF5ZXJzW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb25DaGFuZ2UoKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QmFja2dyb3VuZChtYXAsIGxheWVyKSB7XHJcbiAgZnVuY3Rpb24gdXBkYXRlU3R5bGUoKSB7XHJcbiAgICB2YXIgZWxlbWVudCA9IG1hcC5nZXRUYXJnZXRFbGVtZW50KCk7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGxheW91dCA9IGxheWVyLmxheW91dCB8fCB7fTtcclxuICAgIHZhciBwYWludCA9IGxheWVyLnBhaW50IHx8IHt9O1xyXG4gICAgdmFyIHpvb20gPSBtYXAuZ2V0VmlldygpLmdldFpvb20oKTtcclxuICAgIGlmICgnYmFja2dyb3VuZC1jb2xvcicgaW4gcGFpbnQpIHtcclxuICAgICAgdmFyIGJnID0gZ2xmdW4ocGFpbnRbJ2JhY2tncm91bmQtY29sb3InXSwge2Z1bmN0aW9uOiAnaW50ZXJwb2xhdGVkJywgdHlwZTogJ2NvbG9yJ30pKHpvb20pO1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShiZykpIHtcclxuICAgICAgICBiZyA9ICdyZ2JhKCcgK1xyXG4gICAgICAgICAgICBNYXRoLnJvdW5kKGJnWzBdICogMjU1KSArICcsJyArXHJcbiAgICAgICAgICAgIE1hdGgucm91bmQoYmdbMV0gKiAyNTUpICsgJywnICtcclxuICAgICAgICAgICAgTWF0aC5yb3VuZChiZ1syXSAqIDI1NSkgKyAnLCcgK1xyXG4gICAgICAgICAgICAoYmdbM10gPyBiZ1szXSA6IDEpICsgJyknO1xyXG4gICAgICB9XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmc7XHJcbiAgICB9XHJcbiAgICBpZiAoJ2JhY2tncm91bmQtb3BhY2l0eScgaW4gcGFpbnQpIHtcclxuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kT3BhY2l0eSA9XHJcbiAgICAgICAgICBnbGZ1bihwYWludFsnYmFja2dyb3VuZC1vcGFjaXR5J10sIHtmdW5jdGlvbjogJ2ludGVycG9sYXRlZCcsIHR5cGU6ICdudW1iZXInfSkoem9vbSk7XHJcbiAgICB9XHJcbiAgICBpZiAobGF5b3V0LnZpc2liaWxpdHkgPT0gJ25vbmUnKSB7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZE9wYWNpdHkgPSAnJztcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKG1hcC5nZXRUYXJnZXRFbGVtZW50KCkpIHtcclxuICAgIHVwZGF0ZVN0eWxlKCk7XHJcbiAgfVxyXG4gIG1hcC5vbihbJ2NoYW5nZTpyZXNvbHV0aW9uJywgJ2NoYW5nZTp0YXJnZXQnXSwgdXBkYXRlU3R5bGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQXBwbGllcyBwcm9wZXJ0aWVzIG9mIHRoZSBNYXBib3ggU3R5bGUncyBmaXJzdCBgYmFja2dyb3VuZGAgbGF5ZXIgdG8gdGhlIG1hcC5cclxuICogQHBhcmFtIHtvbC5NYXB9IG1hcCBPcGVuTGF5ZXJzIE1hcC5cclxuICogQHBhcmFtIHtPYmplY3R9IGdsU3R5bGUgTWFwYm94IFN0eWxlIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseUJhY2tncm91bmQobWFwLCBnbFN0eWxlKSB7XHJcbiAgZ2xTdHlsZS5sYXllcnMuc29tZShmdW5jdGlvbihsKSB7XHJcbiAgICBpZiAobC50eXBlID09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBzZXRCYWNrZ3JvdW5kKG1hcCwgbCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTb3VyY2VJZEJ5UmVmKGxheWVycywgcmVmKSB7XHJcbiAgdmFyIHNvdXJjZUlkO1xyXG4gIGxheWVycy5zb21lKGZ1bmN0aW9uKGxheWVyKSB7XHJcbiAgICBpZiAobGF5ZXIuaWQgPT0gcmVmKSB7XHJcbiAgICAgIHNvdXJjZUlkID0gbGF5ZXIuc291cmNlO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gc291cmNlSWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NTdHlsZShnbFN0eWxlLCBtYXAsIGJhc2VVcmwsIGhvc3QsIHBhdGgsIGFjY2Vzc1Rva2VuKSB7XHJcbiAgdmFyIHZpZXcgPSBtYXAuZ2V0VmlldygpO1xyXG4gIGlmICgnY2VudGVyJyBpbiBnbFN0eWxlICYmICF2aWV3LmdldENlbnRlcigpKSB7XHJcbiAgICB2aWV3LnNldENlbnRlcihmcm9tTG9uTGF0KGdsU3R5bGUuY2VudGVyKSk7XHJcbiAgfVxyXG4gIGlmICgnem9vbScgaW4gZ2xTdHlsZSAmJiB2aWV3LmdldFpvb20oKSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB2aWV3LnNldFpvb20oZ2xTdHlsZS56b29tKTtcclxuICB9XHJcbiAgaWYgKCF2aWV3LmdldENlbnRlcigpIHx8IHZpZXcuZ2V0Wm9vbSgpID09PSB1bmRlZmluZWQpIHtcclxuICAgIHZpZXcuZml0KHZpZXcuZ2V0UHJvamVjdGlvbigpLmdldEV4dGVudCgpLCB7XHJcbiAgICAgIG5lYXJlc3Q6IHRydWUsXHJcbiAgICAgIHNpemU6IG1hcC5nZXRTaXplKClcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoZ2xTdHlsZS5zcHJpdGUpIHtcclxuICAgIGlmIChnbFN0eWxlLnNwcml0ZS5pbmRleE9mKCdtYXBib3g6Ly8nKSA9PSAwKSB7XHJcbiAgICAgIGdsU3R5bGUuc3ByaXRlID0gYmFzZVVybCArICcvc3ByaXRlJyArIGFjY2Vzc1Rva2VuO1xyXG4gICAgfSBlbHNlIGlmIChnbFN0eWxlLnNwcml0ZS5pbmRleE9mKCdodHRwJykgIT0gMCkge1xyXG4gICAgICBnbFN0eWxlLnNwcml0ZSA9IChob3N0ID8gKGhvc3QgKyBwYXRoKSA6ICcnKSArIGdsU3R5bGUuc3ByaXRlICsgYWNjZXNzVG9rZW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgZ2xMYXllcnMgPSBnbFN0eWxlLmxheWVycztcclxuICB2YXIgZ2VvSnNvbkZvcm1hdCA9IG5ldyBHZW9KU09OKCk7XHJcbiAgdmFyIGxheWVySWRzID0gW107XHJcblxyXG4gIGZ1bmN0aW9uIGZpbmFsaXplTGF5ZXIobGF5ZXIpIHtcclxuICAgIGlmIChsYXllcklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG1hcC5hZGRMYXllcihsYXllcik7XHJcbiAgICAgIHZhciBzZXRTdHlsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGFwcGx5U3R5bGUobGF5ZXIsIGdsU3R5bGUsIGxheWVySWRzLCBwYXRoKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgbGF5ZXIuc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICB9LCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAvKmVzbGludCBuby1jb25zb2xlOiBbXCJlcnJvclwiLCB7IGFsbG93OiBbXCJlcnJvclwiXSB9XSAqL1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgaWYgKGxheWVyLmdldFNvdXJjZSgpKSB7XHJcbiAgICAgICAgc2V0U3R5bGUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsYXllci5vbmNlKCdjaGFuZ2U6c291cmNlJywgc2V0U3R5bGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgZ2xMYXllciwgZ2xTb3VyY2UsIGdsU291cmNlSWQsIGlkLCBsYXllciwgbWFwaWQsIHVybDtcclxuICBmb3IgKHZhciBpID0gMCwgaWkgPSBnbExheWVycy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XHJcbiAgICBnbExheWVyID0gZ2xMYXllcnNbaV07XHJcbiAgICBpZiAoZ2xMYXllci50eXBlID09ICdiYWNrZ3JvdW5kJykge1xyXG4gICAgICBzZXRCYWNrZ3JvdW5kKG1hcCwgZ2xMYXllcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZCA9IGdsTGF5ZXIuc291cmNlIHx8IGdldFNvdXJjZUlkQnlSZWYoZ2xMYXllcnMsIGdsTGF5ZXIucmVmKTtcclxuICAgICAgaWYgKGlkICE9IGdsU291cmNlSWQpIHtcclxuICAgICAgICBmaW5hbGl6ZUxheWVyKGxheWVyKTtcclxuICAgICAgICBsYXllcklkcyA9IFtdO1xyXG4gICAgICAgIGdsU291cmNlID0gZ2xTdHlsZS5zb3VyY2VzW2lkXTtcclxuICAgICAgICB1cmwgPSBnbFNvdXJjZS51cmw7XHJcbiAgICAgICAgdmFyIHRpbGVzID0gZ2xTb3VyY2UudGlsZXM7XHJcbiAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgaWYgKHVybC5pbmRleE9mKCdtYXBib3g6Ly8nKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIG1hcGlkID0gdXJsLnJlcGxhY2UoJ21hcGJveDovLycsICcnKTtcclxuICAgICAgICAgICAgdGlsZXMgPSBbJ2EnLCAnYicsICdjJywgJ2QnXS5tYXAoZnVuY3Rpb24oaG9zdCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAnaHR0cHM6Ly8nICsgaG9zdCArICcudGlsZXMubWFwYm94LmNvbS92NC8nICsgbWFwaWQgK1xyXG4gICAgICAgICAgICAgICAgICAnL3t6fS97eH0ve3l9LicgK1xyXG4gICAgICAgICAgICAgICAgICAoZ2xTb3VyY2UudHlwZSA9PSAndmVjdG9yJyA/ICd2ZWN0b3IucGJmJyA6ICdwbmcnKSArXHJcbiAgICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChnbFNvdXJjZS50eXBlID09ICd2ZWN0b3InKSB7XHJcbiAgICAgICAgICBsYXllciA9IHRpbGVzID8gKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgdGlsZUdyaWQgPSBjcmVhdGVYWVooe1xyXG4gICAgICAgICAgICAgIHRpbGVTaXplOiA1MTIsXHJcbiAgICAgICAgICAgICAgbWF4Wm9vbTogJ21heHpvb20nIGluIGdsU291cmNlID8gZ2xTb3VyY2UubWF4em9vbSA6IDIyLFxyXG4gICAgICAgICAgICAgIG1pblpvb206IGdsU291cmNlLm1pbnpvb21cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yVGlsZUxheWVyKHtcclxuICAgICAgICAgICAgICBkZWNsdXR0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgbWF4UmVzb2x1dGlvbjogdGlsZUdyaWQuZ2V0TWluWm9vbSgpID4gMCA/XHJcbiAgICAgICAgICAgICAgICB0aWxlR3JpZC5nZXRSZXNvbHV0aW9uKHRpbGVHcmlkLmdldE1pblpvb20oKSkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgc291cmNlOiBuZXcgVmVjdG9yVGlsZVNvdXJjZSh7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvbnM6IGdsU291cmNlLmF0dHJpYnV0aW9uLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBuZXcgTVZUKCksXHJcbiAgICAgICAgICAgICAgICB0aWxlR3JpZDogdGlsZUdyaWQsXHJcbiAgICAgICAgICAgICAgICB1cmxzOiB0aWxlc1xyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHpJbmRleDogaVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pKCkgOiAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBsYXllciA9IG5ldyBWZWN0b3JUaWxlTGF5ZXIoe1xyXG4gICAgICAgICAgICAgIGRlY2x1dHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICB6SW5kZXg6IGlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciB0aWxlanNvbiA9IG5ldyBUaWxlSlNPTih7XHJcbiAgICAgICAgICAgICAgdXJsOiB1cmxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aWxlanNvbi5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRpbGVqc29uLmdldFN0YXRlKCkgPT0gJ3JlYWR5Jykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpbGVKU09ORG9jID0gdGlsZWpzb24uZ2V0VGlsZUpTT04oKTtcclxuICAgICAgICAgICAgICAgIHZhciB0aWxlcyA9IEFycmF5LmlzQXJyYXkodGlsZUpTT05Eb2MudGlsZXMpID8gdGlsZUpTT05Eb2MudGlsZXMgOiBbdGlsZUpTT05Eb2MudGlsZXNdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gdGlsZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgdGlsZSA9IHRpbGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGlsZS5pbmRleE9mKCdodHRwJykgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGVzW2ldID0gZ2xTb3VyY2UudXJsICsgdGlsZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHRpbGVHcmlkID0gdGlsZWpzb24uZ2V0VGlsZUdyaWQoKTtcclxuICAgICAgICAgICAgICAgIGxheWVyLnNldFNvdXJjZShuZXcgVmVjdG9yVGlsZVNvdXJjZSh7XHJcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uczogdGlsZWpzb24uZ2V0QXR0cmlidXRpb25zKCkgfHwgdGlsZUpTT05Eb2MuYXR0cmlidXRpb24sXHJcbiAgICAgICAgICAgICAgICAgIGZvcm1hdDogbmV3IE1WVCgpLFxyXG4gICAgICAgICAgICAgICAgICB0aWxlR3JpZDogY3JlYXRlWFlaKHtcclxuICAgICAgICAgICAgICAgICAgICBtaW5ab29tOiB0aWxlR3JpZC5nZXRNaW5ab29tKCksXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4Wm9vbTogdGlsZUdyaWQuZ2V0TWF4Wm9vbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGVTaXplOiA1MTJcclxuICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgIHVybHM6IHRpbGVzXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGlsZUdyaWQuZ2V0TWluWm9vbSgpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICBsYXllci5zZXRNYXhSZXNvbHV0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGVHcmlkLmdldFJlc29sdXRpb24odGlsZUdyaWQuZ2V0TWluWm9vbSgpKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1bkJ5S2V5KGtleSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGxheWVyO1xyXG4gICAgICAgICAgfSkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGdsU291cmNlLnR5cGUgPT0gJ3Jhc3RlcicpIHtcclxuICAgICAgICAgIHZhciBzb3VyY2U7XHJcbiAgICAgICAgICBpZiAoIWdsU291cmNlLnRpbGVzKSB7XHJcbiAgICAgICAgICAgIHNvdXJjZSA9IChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFRpbGVKU09OKHtcclxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzb3VyY2UgPSBuZXcgWFlaKHtcclxuICAgICAgICAgICAgICBhdHRyaWJ1dGlvbnM6IGdsU291cmNlLmF0dHJpYnV0aW9uLFxyXG4gICAgICAgICAgICAgIG1pblpvb206IGdsU291cmNlLm1pbnpvb20sXHJcbiAgICAgICAgICAgICAgbWF4Wm9vbTogJ21heHpvb20nIGluIGdsU291cmNlID8gZ2xTb3VyY2UubWF4em9vbSA6IDIyLFxyXG4gICAgICAgICAgICAgIHRpbGVTaXplOiBnbFNvdXJjZS50aWxlU2l6ZSB8fCA1MTIsXHJcbiAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgdXJsczogZ2xTb3VyY2UudGlsZXMsXHJcbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc291cmNlLnNldFRpbGVMb2FkRnVuY3Rpb24oZnVuY3Rpb24odGlsZSwgc3JjKSB7XHJcbiAgICAgICAgICAgIGlmIChzcmMuaW5kZXhPZigne2Jib3gtZXBzZy0zODU3fScpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGJib3ggPSBzb3VyY2UuZ2V0VGlsZUdyaWQoKS5nZXRUaWxlQ29vcmRFeHRlbnQodGlsZS5nZXRUaWxlQ29vcmQoKSk7XHJcbiAgICAgICAgICAgICAgc3JjID0gc3JjLnJlcGxhY2UoJ3tiYm94LWVwc2ctMzg1N30nLCBiYm94LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRpbGUuZ2V0SW1hZ2UoKS5zcmMgPSBzcmM7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGxheWVyID0gbmV3IFRpbGVMYXllcih7XHJcbiAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBnbExheWVyLmxheW91dCA/IGdsTGF5ZXIubGF5b3V0LnZpc2liaWxpdHkgIT09ICdub25lJyA6IHRydWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ2xTb3VyY2UudHlwZSA9PSAnZ2VvanNvbicpIHtcclxuICAgICAgICAgIHZhciBkYXRhID0gZ2xTb3VyY2UuZGF0YTtcclxuICAgICAgICAgIHZhciBmZWF0dXJlcywgZ2VvSnNvblVybDtcclxuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBnZW9Kc29uVXJsID0gd2l0aFBhdGgoZGF0YSwgcGF0aCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmZWF0dXJlcyA9IGdlb0pzb25Gb3JtYXQucmVhZEZlYXR1cmVzKGRhdGEsIHtmZWF0dXJlUHJvamVjdGlvbjogJ0VQU0c6Mzg1Nyd9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxheWVyID0gbmV3IFZlY3RvckxheWVyKHtcclxuICAgICAgICAgICAgc291cmNlOiBuZXcgVmVjdG9yU291cmNlKHtcclxuICAgICAgICAgICAgICBhdHRyaWJ1dGlvbnM6IGdsU291cmNlLmF0dHJpYnV0aW9uLFxyXG4gICAgICAgICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcyxcclxuICAgICAgICAgICAgICBmb3JtYXQ6IGdlb0pzb25Gb3JtYXQsXHJcbiAgICAgICAgICAgICAgdXJsOiBnZW9Kc29uVXJsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgekluZGV4OiBpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2xTb3VyY2VJZCA9IGlkO1xyXG4gICAgICB9XHJcbiAgICAgIGxheWVySWRzLnB1c2goZ2xMYXllci5pZCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZpbmFsaXplTGF5ZXIobGF5ZXIpO1xyXG4gIG1hcC5zZXQoJ21hcGJveC1zdHlsZScsIGdsU3R5bGUpO1xyXG59XHJcblxyXG4vKipcclxuICogTG9hZHMgYW5kIGFwcGxpZXMgYSBNYXBib3ggU3R5bGUgb2JqZWN0IHRvIGFuIE9wZW5MYXllcnMgTWFwLiBUaGlzIGluY2x1ZGVzXHJcbiAqIHRoZSBtYXAgYmFja2dyb3VuZCwgdGhlIGxheWVycywgdGhlIGNlbnRlciBhbmQgdGhlIHpvb20uXHJcbiAqXHJcbiAqIFRoZSBjZW50ZXIgYW5kIHpvb20gd2lsbCBvbmx5IGJlIHNldCBpZiBwcmVzZW50IGluIHRoZSBNYXBib3ggU3R5bGUgZG9jdW1lbnQsXHJcbiAqIGFuZCBpZiBub3QgYWxyZWFkeSBzZXQgb24gdGhlIE9wZW5MYXllcnMgbWFwLlxyXG4gKlxyXG4gKiBMYXllcnMgd2lsbCBiZSBhZGRlZCB0byB0aGUgT3BlbkxheWVycyBtYXAsIHdpdGhvdXQgYWZmZWN0aW5nIGFueSBsYXllcnMgdGhhdFxyXG4gKiBtaWdodCBhbHJlYWR5IGJlIHNldCBvbiB0aGUgbWFwLlxyXG4gKlxyXG4gKiBMYXllcnMgYWRkZWQgYnkgYGFwcGx5KClgIHdpbGwgaGF2ZSB0d28gYWRkaXRpb25hbCBwcm9wZXJ0aWVzOlxyXG4gKlxyXG4gKiAgKiBgbWFwYm94LXNvdXJjZWA6IFRoZSBgaWRgIG9mIHRoZSBNYXBib3ggU3R5bGUgZG9jdW1lbnQncyBzb3VyY2UgdGhhdCB0aGVcclxuICogICAgT3BlbkxheWVycyBsYXllciB3YXMgY3JlYXRlZCBmcm9tLiBVc3VhbGx5IGBhcHBseSgpYCBjcmVhdGVzIG9uZVxyXG4gKiAgICBPcGVuTGF5ZXJzIGxheWVyIHBlciBNYXBib3ggU3R5bGUgc291cmNlLCB1bmxlc3MgdGhlIGxheWVyIHN0YWNrIGhhc1xyXG4gKiAgICBsYXllcnMgZnJvbSBkaWZmZXJlbnQgc291cmNlcyBpbiBiZXR3ZWVuLlxyXG4gKiAgKiBgbWFwYm94LWxheWVyc2A6IFRoZSBgaWRgcyBvZiB0aGUgTWFwYm94IFN0eWxlIGRvY3VtZW50J3MgbGF5ZXJzIHRoYXQgYXJlXHJcbiAqICAgIGluY2x1ZGVkIGluIHRoZSBPcGVuTGF5ZXJzIGxheWVyLlxyXG4gKlxyXG4gKiBUaGUgbWFwIHJldHVybmVkIGJ5IHRoaXMgZnVuY3Rpb24gd2lsbCBoYXZlIGFuIGFkZGl0aW9uYWwgYG1hcGJveC1zdHlsZWBcclxuICogcHJvcGVydHkgd2hpY2ggaG9sZHMgdGhlIE1hcGJveCBTdHlsZSBvYmplY3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2wuTWFwfEhUTUxFbGVtZW50fHN0cmluZ30gbWFwIEVpdGhlciBhbiBleGlzdGluZyBPcGVuTGF5ZXJzIE1hcFxyXG4gKiBpbnN0YW5jZSwgb3IgYSBIVE1MIGVsZW1lbnQsIG9yIHRoZSBpZCBvZiBhIEhUTUwgZWxlbWVudCB0aGF0IHdpbGwgYmUgdGhlXHJcbiAqIHRhcmdldCBvZiBhIG5ldyBPcGVuTGF5ZXJzIE1hcC5cclxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdHlsZSBKU09OIHN0eWxlIG9iamVjdCBvciBzdHlsZSB1cmwgcG9pbnRpbmcgdG8gYVxyXG4gKiBNYXBib3ggU3R5bGUgb2JqZWN0LiBXaGVuIHVzaW5nIE1hcGJveCBBUElzLCB0aGUgdXJsIG11c3QgY29udGFpbiBhbiBhY2Nlc3NcclxuICogdG9rZW4gYW5kIGxvb2sgbGlrZVxyXG4gKiBgaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9zdHlsZXMvdjEvbWFwYm94L2JyaWdodC12OT9hY2Nlc3NfdG9rZW49W3lvdXJfYWNjZXNzX3Rva2VuX2hlcmVdYC5cclxuICogV2hlbiBwYXNzZWQgYXMgSlNPTiBzdHlsZSBvYmplY3QsIGFsbCBPcGVuTGF5ZXJzIGxheWVycyBjcmVhdGVkIGJ5IGBhcHBseSgpYFxyXG4gKiB3aWxsIGJlIGltbWVkaWF0ZWx5IGF2YWlsYWJsZSwgYnV0IHRoZXkgbWF5IG5vdCBoYXZlIGEgc291cmNlIHlldCAoaS5lLiB3aGVuXHJcbiAqIHRoZXkgYXJlIGRlZmluZWQgYnkgYSBUaWxlSlNPTiB1cmwgaW4gdGhlIE1hcGJveCBTdHlsZSBkb2N1bWVudCkuIFdoZW4gcGFzc2VkXHJcbiAqIGFzIHN0eWxlIHVybCwgbGF5ZXJzIHdpbGwgYmUgYWRkZWQgdG8gdGhlIG1hcCB3aGVuIHRoZSBNYXBib3ggU3R5bGUgZG9jdW1lbnRcclxuICogaXMgbG9hZGVkIGFuZCBwYXJzZWQuXHJcbiAqIEByZXR1cm4ge29sLk1hcH0gVGhlIE9wZW5MYXllcnMgTWFwIGluc3RhbmNlIHRoYXQgd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCB0aGVcclxuICogY29udGVudHMgZGVzY3JpYmVkIGluIHRoZSBNYXBib3ggU3R5bGUgb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5KG1hcCwgc3R5bGUpIHtcclxuXHJcbiAgdmFyIGFjY2Vzc1Rva2VuLCBiYXNlVXJsLCBob3N0LCBwYXRoO1xyXG4gIGFjY2Vzc1Rva2VuID0gYmFzZVVybCA9IGhvc3QgPSBwYXRoID0gJyc7XHJcblxyXG4gIGlmICghKG1hcCBpbnN0YW5jZW9mIE1hcCkpIHtcclxuICAgIG1hcCA9IG5ldyBNYXAoe1xyXG4gICAgICB0YXJnZXQ6IG1hcFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHN0eWxlID09PSAnc3RyaW5nJykge1xyXG4gICAgdmFyIHBhcnRzID0gc3R5bGUubWF0Y2goc3ByaXRlUmVnRXgpO1xyXG4gICAgaWYgKHBhcnRzKSB7XHJcbiAgICAgIGJhc2VVcmwgPSBwYXJ0c1sxXTtcclxuICAgICAgYWNjZXNzVG9rZW4gPSBwYXJ0cy5sZW5ndGggPiAyID8gcGFydHNbMl0gOiAnJztcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaChzdHlsZSwge1xyXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbihnbFN0eWxlKSB7XHJcbiAgICAgICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdBJyk7XHJcbiAgICAgICAgYS5ocmVmID0gc3R5bGU7XHJcbiAgICAgICAgcGF0aCA9IGEucGF0aG5hbWUuc3BsaXQoJy8nKS5zbGljZSgwLCAtMSkuam9pbignLycpICsgJy8nO1xyXG4gICAgICAgIGhvc3QgPSBzdHlsZS5zdWJzdHIoMCwgc3R5bGUuaW5kZXhPZihwYXRoKSk7XHJcblxyXG4gICAgICAgIHByb2Nlc3NTdHlsZShnbFN0eWxlLCBtYXAsIGJhc2VVcmwsIGhvc3QsIHBhdGgsIGFjY2Vzc1Rva2VuKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBsb2FkICcgKyBzdHlsZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBwcm9jZXNzU3R5bGUoc3R5bGUsIG1hcCk7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgcmV0dXJuIG1hcDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgT3BlbkxheWVycyBsYXllciBpbnN0YW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBwcm92aWRlZCBNYXBib3ggU3R5bGVcclxuICogYGxheWVyYC4gTm90ZSB0aGF0IG11bHRpcGxlIE1hcGJveCBTdHlsZSBsYXllcnMgYXJlIGNvbWJpbmVkIGluIGEgc2luZ2xlXHJcbiAqIE9wZW5MYXllcnMgbGF5ZXIgaW5zdGFuY2Ugd2hlbiB0aGV5IHVzZSB0aGUgc2FtZSBNYXBib3ggU3R5bGUgYHNvdXJjZWAuXHJcbiAqIEBwYXJhbSB7b2wuTWFwfSBtYXAgT3BlbkxheWVycyBNYXAuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYXllcklkIE1hcGJveCBTdHlsZSBsYXllciBpZC5cclxuICogQHJldHVybiB7b2wubGF5ZXIuTGF5ZXJ9IGxheWVyIE9wZW5MYXllcnMgbGF5ZXIgaW5zdGFuY2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGF5ZXIobWFwLCBsYXllcklkKSB7XHJcbiAgY29uc3QgbGF5ZXJzID0gbWFwLmdldExheWVycygpLmdldEFycmF5KCk7XHJcbiAgZm9yIChsZXQgaSA9IDAsIGlpID0gbGF5ZXJzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcclxuICAgIGlmIChsYXllcnNbaV0uZ2V0KCdtYXBib3gtbGF5ZXJzJykuaW5kZXhPZihsYXllcklkKSAhPT0gLTEpIHtcclxuICAgICAgcmV0dXJuIGxheWVyc1tpXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIE9wZW5MYXllcnMgc291cmNlIGluc3RhbmNlIGZvciB0aGUgcHJvdmlkZWQgTWFwYm94IFN0eWxlIGBzb3VyY2VgLlxyXG4gKiBAcGFyYW0ge29sLk1hcH0gbWFwIE9wZW5MYXllcnMgTWFwLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlSWQgTWFwYm94IFN0eWxlIHNvdXJjZSBpZC5cclxuICogQHJldHVybiB7b2wubGF5ZXIuTGF5ZXJ9IGxheWVyIE9wZW5MYXllcnMgbGF5ZXIgaW5zdGFuY2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U291cmNlKG1hcCwgc291cmNlSWQpIHtcclxuICBjb25zdCBsYXllcnMgPSBtYXAuZ2V0TGF5ZXJzKCkuZ2V0QXJyYXkoKTtcclxuICBmb3IgKGxldCBpID0gMCwgaWkgPSBsYXllcnMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xyXG4gICAgY29uc3Qgc291cmNlID0gbGF5ZXJzW2ldLmdldFNvdXJjZSgpO1xyXG4gICAgaWYgKGxheWVyc1tpXS5nZXQoJ21hcGJveC1zb3VyY2UnKS5pbmRleE9mKHNvdXJjZUlkKSAhPT0gLTEpIHtcclxuICAgICAgcmV0dXJuIHNvdXJjZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiXG5jb25zdCByZWZQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi91dGlsL3JlZl9wcm9wZXJ0aWVzJyk7XG5cbmZ1bmN0aW9uIGRlcmVmKGxheWVyLCBwYXJlbnQpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcblxuICAgIGZvciAoY29uc3QgayBpbiBsYXllcikge1xuICAgICAgICBpZiAoayAhPT0gJ3JlZicpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrXSA9IGxheWVyW2tdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVmUHJvcGVydGllcy5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgIGlmIChrIGluIHBhcmVudCkge1xuICAgICAgICAgICAgcmVzdWx0W2tdID0gcGFyZW50W2tdO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlcmVmTGF5ZXJzO1xuXG4vKipcbiAqIEdpdmVuIGFuIGFycmF5IG9mIGxheWVycywgc29tZSBvZiB3aGljaCBtYXkgY29udGFpbiBgcmVmYCBwcm9wZXJ0aWVzXG4gKiB3aG9zZSB2YWx1ZSBpcyB0aGUgYGlkYCBvZiBhbm90aGVyIHByb3BlcnR5LCByZXR1cm4gYSBuZXcgYXJyYXkgd2hlcmVcbiAqIHN1Y2ggbGF5ZXJzIGhhdmUgYmVlbiBhdWdtZW50ZWQgd2l0aCB0aGUgJ3R5cGUnLCAnc291cmNlJywgZXRjLiBwcm9wZXJ0aWVzXG4gKiBmcm9tIHRoZSBwYXJlbnQgbGF5ZXIsIGFuZCB0aGUgYHJlZmAgcHJvcGVydHkgaGFzIGJlZW4gcmVtb3ZlZC5cbiAqXG4gKiBUaGUgaW5wdXQgaXMgbm90IG1vZGlmaWVkLiBUaGUgb3V0cHV0IG1heSBjb250YWluIHJlZmVyZW5jZXMgdG8gcG9ydGlvbnNcbiAqIG9mIHRoZSBpbnB1dC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheTxMYXllcj59IGxheWVyc1xuICogQHJldHVybnMge0FycmF5PExheWVyPn1cbiAqL1xuZnVuY3Rpb24gZGVyZWZMYXllcnMobGF5ZXJzKSB7XG4gICAgbGF5ZXJzID0gbGF5ZXJzLnNsaWNlKCk7XG5cbiAgICBjb25zdCBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1hcFtsYXllcnNbaV0uaWRdID0gbGF5ZXJzW2ldO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICgncmVmJyBpbiBsYXllcnNbaV0pIHtcbiAgICAgICAgICAgIGxheWVyc1tpXSA9IGRlcmVmKGxheWVyc1tpXSwgbWFwW2xheWVyc1tpXS5yZWZdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsYXllcnM7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUZpbHRlcjtcblxuY29uc3QgdHlwZXMgPSBbJ1Vua25vd24nLCAnUG9pbnQnLCAnTGluZVN0cmluZycsICdQb2x5Z29uJ107XG5cbi8qKlxuICogR2l2ZW4gYSBmaWx0ZXIgZXhwcmVzc2VkIGFzIG5lc3RlZCBhcnJheXMsIHJldHVybiBhIG5ldyBmdW5jdGlvblxuICogdGhhdCBldmFsdWF0ZXMgd2hldGhlciBhIGdpdmVuIGZlYXR1cmUgKHdpdGggYSAucHJvcGVydGllcyBvciAudGFncyBwcm9wZXJ0eSlcbiAqIHBhc3NlcyBpdHMgdGVzdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gZmlsdGVyIG1hcGJveCBnbCBmaWx0ZXJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gZmlsdGVyLWV2YWx1YXRpbmcgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRmlsdGVyKGZpbHRlcikge1xuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oJ2YnLCBgdmFyIHAgPSAoZiAmJiBmLnByb3BlcnRpZXMgfHwge30pOyByZXR1cm4gJHtjb21waWxlKGZpbHRlcil9YCk7XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGUoZmlsdGVyKSB7XG4gICAgaWYgKCFmaWx0ZXIpIHJldHVybiAndHJ1ZSc7XG4gICAgY29uc3Qgb3AgPSBmaWx0ZXJbMF07XG4gICAgaWYgKGZpbHRlci5sZW5ndGggPD0gMSkgcmV0dXJuIG9wID09PSAnYW55JyA/ICdmYWxzZScgOiAndHJ1ZSc7XG4gICAgY29uc3Qgc3RyID1cbiAgICAgICAgb3AgPT09ICc9PScgPyBjb21waWxlQ29tcGFyaXNvbk9wKGZpbHRlclsxXSwgZmlsdGVyWzJdLCAnPT09JywgZmFsc2UpIDpcbiAgICAgICAgb3AgPT09ICchPScgPyBjb21waWxlQ29tcGFyaXNvbk9wKGZpbHRlclsxXSwgZmlsdGVyWzJdLCAnIT09JywgZmFsc2UpIDpcbiAgICAgICAgb3AgPT09ICc8JyB8fFxuICAgICAgICBvcCA9PT0gJz4nIHx8XG4gICAgICAgIG9wID09PSAnPD0nIHx8XG4gICAgICAgIG9wID09PSAnPj0nID8gY29tcGlsZUNvbXBhcmlzb25PcChmaWx0ZXJbMV0sIGZpbHRlclsyXSwgb3AsIHRydWUpIDpcbiAgICAgICAgb3AgPT09ICdhbnknID8gY29tcGlsZUxvZ2ljYWxPcChmaWx0ZXIuc2xpY2UoMSksICd8fCcpIDpcbiAgICAgICAgb3AgPT09ICdhbGwnID8gY29tcGlsZUxvZ2ljYWxPcChmaWx0ZXIuc2xpY2UoMSksICcmJicpIDpcbiAgICAgICAgb3AgPT09ICdub25lJyA/IGNvbXBpbGVOZWdhdGlvbihjb21waWxlTG9naWNhbE9wKGZpbHRlci5zbGljZSgxKSwgJ3x8JykpIDpcbiAgICAgICAgb3AgPT09ICdpbicgPyBjb21waWxlSW5PcChmaWx0ZXJbMV0sIGZpbHRlci5zbGljZSgyKSkgOlxuICAgICAgICBvcCA9PT0gJyFpbicgPyBjb21waWxlTmVnYXRpb24oY29tcGlsZUluT3AoZmlsdGVyWzFdLCBmaWx0ZXIuc2xpY2UoMikpKSA6XG4gICAgICAgIG9wID09PSAnaGFzJyA/IGNvbXBpbGVIYXNPcChmaWx0ZXJbMV0pIDpcbiAgICAgICAgb3AgPT09ICchaGFzJyA/IGNvbXBpbGVOZWdhdGlvbihjb21waWxlSGFzT3AoZmlsdGVyWzFdKSkgOlxuICAgICAgICAndHJ1ZSc7XG4gICAgcmV0dXJuIGAoJHtzdHJ9KWA7XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVQcm9wZXJ0eVJlZmVyZW5jZShwcm9wZXJ0eSkge1xuICAgIGNvbnN0IHJlZiA9XG4gICAgICAgIHByb3BlcnR5ID09PSAnJHR5cGUnID8gJ2YudHlwZScgOlxuICAgICAgICBwcm9wZXJ0eSA9PT0gJyRpZCcgPyAnZi5pZCcgOiBgcFske0pTT04uc3RyaW5naWZ5KHByb3BlcnR5KX1dYDtcbiAgICByZXR1cm4gcmVmO1xufVxuXG5mdW5jdGlvbiBjb21waWxlQ29tcGFyaXNvbk9wKHByb3BlcnR5LCB2YWx1ZSwgb3AsIGNoZWNrVHlwZSkge1xuICAgIGNvbnN0IGxlZnQgPSBjb21waWxlUHJvcGVydHlSZWZlcmVuY2UocHJvcGVydHkpO1xuICAgIGNvbnN0IHJpZ2h0ID0gcHJvcGVydHkgPT09ICckdHlwZScgPyB0eXBlcy5pbmRleE9mKHZhbHVlKSA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICByZXR1cm4gKGNoZWNrVHlwZSA/IGB0eXBlb2YgJHtsZWZ0fT09PSB0eXBlb2YgJHtyaWdodH0mJmAgOiAnJykgKyBsZWZ0ICsgb3AgKyByaWdodDtcbn1cblxuZnVuY3Rpb24gY29tcGlsZUxvZ2ljYWxPcChleHByZXNzaW9ucywgb3ApIHtcbiAgICByZXR1cm4gZXhwcmVzc2lvbnMubWFwKGNvbXBpbGUpLmpvaW4ob3ApO1xufVxuXG5mdW5jdGlvbiBjb21waWxlSW5PcChwcm9wZXJ0eSwgdmFsdWVzKSB7XG4gICAgaWYgKHByb3BlcnR5ID09PSAnJHR5cGUnKSB2YWx1ZXMgPSB2YWx1ZXMubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgfSk7XG4gICAgY29uc3QgbGVmdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlcy5zb3J0KGNvbXBhcmUpKTtcbiAgICBjb25zdCByaWdodCA9IGNvbXBpbGVQcm9wZXJ0eVJlZmVyZW5jZShwcm9wZXJ0eSk7XG5cbiAgICBpZiAodmFsdWVzLmxlbmd0aCA8PSAyMDApIHJldHVybiBgJHtsZWZ0fS5pbmRleE9mKCR7cmlnaHR9KSAhPT0gLTFgO1xuXG4gICAgcmV0dXJuIGAkeydmdW5jdGlvbih2LCBhLCBpLCBqKSB7JyArXG4gICAgICAgICd3aGlsZSAoaSA8PSBqKSB7IHZhciBtID0gKGkgKyBqKSA+PiAxOycgK1xuICAgICAgICAnICAgIGlmIChhW21dID09PSB2KSByZXR1cm4gdHJ1ZTsgaWYgKGFbbV0gPiB2KSBqID0gbSAtIDE7IGVsc2UgaSA9IG0gKyAxOycgK1xuICAgICAgICAnfScgK1xuICAgICdyZXR1cm4gZmFsc2U7IH0oJ30ke3JpZ2h0fSwgJHtsZWZ0fSwwLCR7dmFsdWVzLmxlbmd0aCAtIDF9KWA7XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVIYXNPcChwcm9wZXJ0eSkge1xuICAgIHJldHVybiBwcm9wZXJ0eSA9PT0gJyRpZCcgPyAnXCJpZFwiIGluIGYnIDogYCR7SlNPTi5zdHJpbmdpZnkocHJvcGVydHkpfSBpbiBwYDtcbn1cblxuZnVuY3Rpb24gY29tcGlsZU5lZ2F0aW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gYCEoJHtleHByZXNzaW9ufSlgO1xufVxuXG4vLyBDb21wYXJpc29uIGZ1bmN0aW9uIHRvIHNvcnQgbnVtYmVycyBhbmQgc3RyaW5nc1xuZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gICAgcmV0dXJuIGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiAwO1xufVxuIiwiXG4vLyBDb25zdGFudHNcbmNvbnN0IFhuID0gMC45NTA0NzAsIC8vIEQ2NSBzdGFuZGFyZCByZWZlcmVudFxuICAgIFluID0gMSxcbiAgICBabiA9IDEuMDg4ODMwLFxuICAgIHQwID0gNCAvIDI5LFxuICAgIHQxID0gNiAvIDI5LFxuICAgIHQyID0gMyAqIHQxICogdDEsXG4gICAgdDMgPSB0MSAqIHQxICogdDEsXG4gICAgZGVnMnJhZCA9IE1hdGguUEkgLyAxODAsXG4gICAgcmFkMmRlZyA9IDE4MCAvIE1hdGguUEk7XG5cbi8vIFV0aWxpdGllc1xuZnVuY3Rpb24geHl6MmxhYih0KSB7XG4gICAgcmV0dXJuIHQgPiB0MyA/IE1hdGgucG93KHQsIDEgLyAzKSA6IHQgLyB0MiArIHQwO1xufVxuXG5mdW5jdGlvbiBsYWIyeHl6KHQpIHtcbiAgICByZXR1cm4gdCA+IHQxID8gdCAqIHQgKiB0IDogdDIgKiAodCAtIHQwKTtcbn1cblxuZnVuY3Rpb24geHl6MnJnYih4KSB7XG4gICAgcmV0dXJuIDI1NSAqICh4IDw9IDAuMDAzMTMwOCA/IDEyLjkyICogeCA6IDEuMDU1ICogTWF0aC5wb3coeCwgMSAvIDIuNCkgLSAwLjA1NSk7XG59XG5cbmZ1bmN0aW9uIHJnYjJ4eXooeCkge1xuICAgIHggLz0gMjU1O1xuICAgIHJldHVybiB4IDw9IDAuMDQwNDUgPyB4IC8gMTIuOTIgOiBNYXRoLnBvdygoeCArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xufVxuXG4vLyBMQUJcbmZ1bmN0aW9uIHJnYlRvTGFiKHJnYkNvbG9yKSB7XG4gICAgY29uc3QgYiA9IHJnYjJ4eXoocmdiQ29sb3JbMF0pLFxuICAgICAgICBhID0gcmdiMnh5eihyZ2JDb2xvclsxXSksXG4gICAgICAgIGwgPSByZ2IyeHl6KHJnYkNvbG9yWzJdKSxcbiAgICAgICAgeCA9IHh5ejJsYWIoKDAuNDEyNDU2NCAqIGIgKyAwLjM1NzU3NjEgKiBhICsgMC4xODA0Mzc1ICogbCkgLyBYbiksXG4gICAgICAgIHkgPSB4eXoybGFiKCgwLjIxMjY3MjkgKiBiICsgMC43MTUxNTIyICogYSArIDAuMDcyMTc1MCAqIGwpIC8gWW4pLFxuICAgICAgICB6ID0geHl6MmxhYigoMC4wMTkzMzM5ICogYiArIDAuMTE5MTkyMCAqIGEgKyAwLjk1MDMwNDEgKiBsKSAvIFpuKTtcblxuICAgIHJldHVybiBbXG4gICAgICAgIDExNiAqIHkgLSAxNixcbiAgICAgICAgNTAwICogKHggLSB5KSxcbiAgICAgICAgMjAwICogKHkgLSB6KSxcbiAgICAgICAgcmdiQ29sb3JbM11cbiAgICBdO1xufVxuXG5mdW5jdGlvbiBsYWJUb1JnYihsYWJDb2xvcikge1xuICAgIGxldCB5ID0gKGxhYkNvbG9yWzBdICsgMTYpIC8gMTE2LFxuICAgICAgICB4ID0gaXNOYU4obGFiQ29sb3JbMV0pID8geSA6IHkgKyBsYWJDb2xvclsxXSAvIDUwMCxcbiAgICAgICAgeiA9IGlzTmFOKGxhYkNvbG9yWzJdKSA/IHkgOiB5IC0gbGFiQ29sb3JbMl0gLyAyMDA7XG4gICAgeSA9IFluICogbGFiMnh5eih5KTtcbiAgICB4ID0gWG4gKiBsYWIyeHl6KHgpO1xuICAgIHogPSBabiAqIGxhYjJ4eXooeik7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgeHl6MnJnYigzLjI0MDQ1NDIgKiB4IC0gMS41MzcxMzg1ICogeSAtIDAuNDk4NTMxNCAqIHopLCAvLyBENjUgLT4gc1JHQlxuICAgICAgICB4eXoycmdiKC0wLjk2OTI2NjAgKiB4ICsgMS44NzYwMTA4ICogeSArIDAuMDQxNTU2MCAqIHopLFxuICAgICAgICB4eXoycmdiKDAuMDU1NjQzNCAqIHggLSAwLjIwNDAyNTkgKiB5ICsgMS4wNTcyMjUyICogeiksXG4gICAgICAgIGxhYkNvbG9yWzNdXG4gICAgXTtcbn1cblxuLy8gSENMXG5mdW5jdGlvbiByZ2JUb0hjbChyZ2JDb2xvcikge1xuICAgIGNvbnN0IGxhYkNvbG9yID0gcmdiVG9MYWIocmdiQ29sb3IpO1xuICAgIGNvbnN0IGwgPSBsYWJDb2xvclswXSxcbiAgICAgICAgYSA9IGxhYkNvbG9yWzFdLFxuICAgICAgICBiID0gbGFiQ29sb3JbMl07XG4gICAgY29uc3QgaCA9IE1hdGguYXRhbjIoYiwgYSkgKiByYWQyZGVnO1xuICAgIHJldHVybiBbXG4gICAgICAgIGggPCAwID8gaCArIDM2MCA6IGgsXG4gICAgICAgIE1hdGguc3FydChhICogYSArIGIgKiBiKSxcbiAgICAgICAgbCxcbiAgICAgICAgcmdiQ29sb3JbM11cbiAgICBdO1xufVxuXG5mdW5jdGlvbiBoY2xUb1JnYihoY2xDb2xvcikge1xuICAgIGNvbnN0IGggPSBoY2xDb2xvclswXSAqIGRlZzJyYWQsXG4gICAgICAgIGMgPSBoY2xDb2xvclsxXSxcbiAgICAgICAgbCA9IGhjbENvbG9yWzJdO1xuICAgIHJldHVybiBsYWJUb1JnYihbXG4gICAgICAgIGwsXG4gICAgICAgIE1hdGguY29zKGgpICogYyxcbiAgICAgICAgTWF0aC5zaW4oaCkgKiBjLFxuICAgICAgICBoY2xDb2xvclszXVxuICAgIF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBsYWI6IHtcbiAgICAgICAgZm9yd2FyZDogcmdiVG9MYWIsXG4gICAgICAgIHJldmVyc2U6IGxhYlRvUmdiXG4gICAgfSxcbiAgICBoY2w6IHtcbiAgICAgICAgZm9yd2FyZDogcmdiVG9IY2wsXG4gICAgICAgIHJldmVyc2U6IGhjbFRvUmdiXG4gICAgfVxufTtcbiIsIlxuY29uc3QgY29sb3JTcGFjZXMgPSByZXF1aXJlKCcuL2NvbG9yX3NwYWNlcycpO1xuY29uc3QgcGFyc2VDb2xvciA9IHJlcXVpcmUoJy4uL3V0aWwvcGFyc2VfY29sb3InKTtcbmNvbnN0IGV4dGVuZCA9IHJlcXVpcmUoJy4uL3V0aWwvZXh0ZW5kJyk7XG5jb25zdCBnZXRUeXBlID0gcmVxdWlyZSgnLi4vdXRpbC9nZXRfdHlwZScpO1xuY29uc3QgaW50ZXJwb2xhdGUgPSByZXF1aXJlKCcuLi91dGlsL2ludGVycG9sYXRlJyk7XG5cbmZ1bmN0aW9uIGlkZW50aXR5RnVuY3Rpb24oeCkge1xuICAgIHJldHVybiB4O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGdW5jdGlvbihwYXJhbWV0ZXJzLCBwcm9wZXJ0eVNwZWMpIHtcbiAgICBjb25zdCBpc0NvbG9yID0gcHJvcGVydHlTcGVjLnR5cGUgPT09ICdjb2xvcic7XG5cbiAgICBsZXQgZnVuO1xuXG4gICAgaWYgKCFpc0Z1bmN0aW9uRGVmaW5pdGlvbihwYXJhbWV0ZXJzKSkge1xuICAgICAgICBpZiAoaXNDb2xvciAmJiBwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyc2VDb2xvcihwYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBmdW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICAgICAgICB9O1xuICAgICAgICBmdW4uaXNGZWF0dXJlQ29uc3RhbnQgPSB0cnVlO1xuICAgICAgICBmdW4uaXNab29tQ29uc3RhbnQgPSB0cnVlO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgem9vbUFuZEZlYXR1cmVEZXBlbmRlbnQgPSBwYXJhbWV0ZXJzLnN0b3BzICYmIHR5cGVvZiBwYXJhbWV0ZXJzLnN0b3BzWzBdWzBdID09PSAnb2JqZWN0JztcbiAgICAgICAgY29uc3QgZmVhdHVyZURlcGVuZGVudCA9IHpvb21BbmRGZWF0dXJlRGVwZW5kZW50IHx8IHBhcmFtZXRlcnMucHJvcGVydHkgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3Qgem9vbURlcGVuZGVudCA9IHpvb21BbmRGZWF0dXJlRGVwZW5kZW50IHx8ICFmZWF0dXJlRGVwZW5kZW50O1xuICAgICAgICBjb25zdCB0eXBlID0gcGFyYW1ldGVycy50eXBlIHx8IChwcm9wZXJ0eVNwZWMuZnVuY3Rpb24gPT09ICdpbnRlcnBvbGF0ZWQnID8gJ2V4cG9uZW50aWFsJyA6ICdpbnRlcnZhbCcpO1xuXG4gICAgICAgIGlmIChpc0NvbG9yKSB7XG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0gZXh0ZW5kKHt9LCBwYXJhbWV0ZXJzKTtcblxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMuc3RvcHMpIHtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzLnN0b3BzID0gcGFyYW1ldGVycy5zdG9wcy5tYXAoKHN0b3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtzdG9wWzBdLCBwYXJzZUNvbG9yKHN0b3BbMV0pXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMuZGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMuZGVmYXVsdCA9IHBhcnNlQ29sb3IocGFyYW1ldGVycy5kZWZhdWx0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVycy5kZWZhdWx0ID0gcGFyc2VDb2xvcihwcm9wZXJ0eVNwZWMuZGVmYXVsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW5uZXJGdW47XG4gICAgICAgIGxldCBoYXNoZWRTdG9wcztcbiAgICAgICAgbGV0IGNhdGVnb3JpY2FsS2V5VHlwZTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdleHBvbmVudGlhbCcpIHtcbiAgICAgICAgICAgIGlubmVyRnVuID0gZXZhbHVhdGVFeHBvbmVudGlhbEZ1bmN0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdpbnRlcnZhbCcpIHtcbiAgICAgICAgICAgIGlubmVyRnVuID0gZXZhbHVhdGVJbnRlcnZhbEZ1bmN0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjYXRlZ29yaWNhbCcpIHtcbiAgICAgICAgICAgIGlubmVyRnVuID0gZXZhbHVhdGVDYXRlZ29yaWNhbEZ1bmN0aW9uO1xuXG4gICAgICAgICAgICAvLyBGb3IgY2F0ZWdvcmljYWwgZnVuY3Rpb25zLCBnZW5lcmF0ZSBhbiBPYmplY3QgYXMgYSBoYXNobWFwIG9mIHRoZSBzdG9wcyBmb3IgZmFzdCBzZWFyY2hpbmdcbiAgICAgICAgICAgIGhhc2hlZFN0b3BzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3RvcCBvZiBwYXJhbWV0ZXJzLnN0b3BzKSB7XG4gICAgICAgICAgICAgICAgaGFzaGVkU3RvcHNbc3RvcFswXV0gPSBzdG9wWzFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJbmZlciBrZXkgdHlwZSBiYXNlZCBvbiBmaXJzdCBzdG9wIGtleS0tIHVzZWQgdG8gZW5jZm9yY2Ugc3RyaWN0IHR5cGUgY2hlY2tpbmcgbGF0ZXJcbiAgICAgICAgICAgIGNhdGVnb3JpY2FsS2V5VHlwZSA9IHR5cGVvZiBwYXJhbWV0ZXJzLnN0b3BzWzBdWzBdO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2lkZW50aXR5Jykge1xuICAgICAgICAgICAgaW5uZXJGdW4gPSBldmFsdWF0ZUlkZW50aXR5RnVuY3Rpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZnVuY3Rpb24gdHlwZSBcIiR7dHlwZX1cImApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG91dHB1dEZ1bmN0aW9uO1xuXG4gICAgICAgIC8vIElmIHdlJ3JlIGludGVycG9sYXRpbmcgY29sb3JzIGluIGEgY29sb3Igc3lzdGVtIG90aGVyIHRoYW4gUkdCQSxcbiAgICAgICAgLy8gZmlyc3QgdHJhbnNsYXRlIGFsbCBzdG9wIHZhbHVlcyB0byB0aGF0IGNvbG9yIHN5c3RlbSwgdGhlbiBpbnRlcnBvbGF0ZVxuICAgICAgICAvLyBhcnJheXMgYXMgdXN1YWwuIFRoZSBgb3V0cHV0RnVuY3Rpb25gIG9wdGlvbiBsZXRzIHVzIHRoZW4gdHJhbnNsYXRlXG4gICAgICAgIC8vIHRoZSByZXN1bHQgb2YgdGhhdCBpbnRlcnBvbGF0aW9uIGJhY2sgaW50byBSR0JBLlxuICAgICAgICBpZiAocGFyYW1ldGVycy5jb2xvclNwYWNlICYmIHBhcmFtZXRlcnMuY29sb3JTcGFjZSAhPT0gJ3JnYicpIHtcbiAgICAgICAgICAgIGlmIChjb2xvclNwYWNlc1twYXJhbWV0ZXJzLmNvbG9yU3BhY2VdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JzcGFjZSA9IGNvbG9yU3BhY2VzW3BhcmFtZXRlcnMuY29sb3JTcGFjZV07XG4gICAgICAgICAgICAgICAgLy8gQXZvaWQgbXV0YXRpbmcgdGhlIHBhcmFtZXRlcnMgdmFsdWVcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwYXJhbWV0ZXJzKSk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcyA9IDA7IHMgPCBwYXJhbWV0ZXJzLnN0b3BzLmxlbmd0aDsgcysrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMuc3RvcHNbc10gPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzLnN0b3BzW3NdWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzcGFjZS5mb3J3YXJkKHBhcmFtZXRlcnMuc3RvcHNbc11bMV0pXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG91dHB1dEZ1bmN0aW9uID0gY29sb3JzcGFjZS5yZXZlcnNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gY29sb3Igc3BhY2U6ICR7cGFyYW1ldGVycy5jb2xvclNwYWNlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0cHV0RnVuY3Rpb24gPSBpZGVudGl0eUZ1bmN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHpvb21BbmRGZWF0dXJlRGVwZW5kZW50KSB7XG4gICAgICAgICAgICBjb25zdCBmZWF0dXJlRnVuY3Rpb25zID0ge307XG4gICAgICAgICAgICBjb25zdCB6b29tU3RvcHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHMgPSAwOyBzIDwgcGFyYW1ldGVycy5zdG9wcy5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3AgPSBwYXJhbWV0ZXJzLnN0b3BzW3NdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHpvb20gPSBzdG9wWzBdLnpvb207XG4gICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVGdW5jdGlvbnNbem9vbV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlRnVuY3Rpb25zW3pvb21dID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgem9vbTogem9vbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHBhcmFtZXRlcnMudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBwYXJhbWV0ZXJzLnByb3BlcnR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcGFyYW1ldGVycy5kZWZhdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHM6IFtdXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHpvb21TdG9wcy5wdXNoKHpvb20pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmZWF0dXJlRnVuY3Rpb25zW3pvb21dLnN0b3BzLnB1c2goW3N0b3BbMF0udmFsdWUsIHN0b3BbMV1dKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZmVhdHVyZUZ1bmN0aW9uU3RvcHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgeiBvZiB6b29tU3RvcHMpIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlRnVuY3Rpb25TdG9wcy5wdXNoKFtmZWF0dXJlRnVuY3Rpb25zW3pdLnpvb20sIGNyZWF0ZUZ1bmN0aW9uKGZlYXR1cmVGdW5jdGlvbnNbel0sIHByb3BlcnR5U3BlYyldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1biA9IGZ1bmN0aW9uKHpvb20sIGZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0RnVuY3Rpb24oZXZhbHVhdGVFeHBvbmVudGlhbEZ1bmN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcHM6IGZlYXR1cmVGdW5jdGlvblN0b3BzLFxuICAgICAgICAgICAgICAgICAgICBiYXNlOiBwYXJhbWV0ZXJzLmJhc2VcbiAgICAgICAgICAgICAgICB9LCBwcm9wZXJ0eVNwZWMsIHpvb20pKHpvb20sIGZlYXR1cmUpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmdW4uaXNGZWF0dXJlQ29uc3RhbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZ1bi5pc1pvb21Db25zdGFudCA9IGZhbHNlO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoem9vbURlcGVuZGVudCkge1xuICAgICAgICAgICAgZnVuID0gZnVuY3Rpb24oem9vbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXRGdW5jdGlvbihpbm5lckZ1bihwYXJhbWV0ZXJzLCBwcm9wZXJ0eVNwZWMsIHpvb20sIGhhc2hlZFN0b3BzLCBjYXRlZ29yaWNhbEtleVR5cGUpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmdW4uaXNGZWF0dXJlQ29uc3RhbnQgPSB0cnVlO1xuICAgICAgICAgICAgZnVuLmlzWm9vbUNvbnN0YW50ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmdW4gPSBmdW5jdGlvbih6b29tLCBmZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBmZWF0dXJlW3BhcmFtZXRlcnMucHJvcGVydHldO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2FsZXNjZShwYXJhbWV0ZXJzLmRlZmF1bHQsIHByb3BlcnR5U3BlYy5kZWZhdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dEZ1bmN0aW9uKGlubmVyRnVuKHBhcmFtZXRlcnMsIHByb3BlcnR5U3BlYywgdmFsdWUsIGhhc2hlZFN0b3BzLCBjYXRlZ29yaWNhbEtleVR5cGUpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmdW4uaXNGZWF0dXJlQ29uc3RhbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZ1bi5pc1pvb21Db25zdGFudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuO1xufVxuXG5mdW5jdGlvbiBjb2FsZXNjZShhLCBiLCBjKSB7XG4gICAgaWYgKGEgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGE7XG4gICAgaWYgKGIgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGI7XG4gICAgaWYgKGMgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGM7XG59XG5cbmZ1bmN0aW9uIGV2YWx1YXRlQ2F0ZWdvcmljYWxGdW5jdGlvbihwYXJhbWV0ZXJzLCBwcm9wZXJ0eVNwZWMsIGlucHV0LCBoYXNoZWRTdG9wcywga2V5VHlwZSkge1xuICAgIGNvbnN0IGV2YWx1YXRlZCA9IHR5cGVvZiBpbnB1dCA9PT0ga2V5VHlwZSA/IGhhc2hlZFN0b3BzW2lucHV0XSA6IHVuZGVmaW5lZDsgLy8gRW5mb3JjZSBzdHJpY3QgdHlwaW5nIG9uIGlucHV0XG4gICAgcmV0dXJuIGNvYWxlc2NlKGV2YWx1YXRlZCwgcGFyYW1ldGVycy5kZWZhdWx0LCBwcm9wZXJ0eVNwZWMuZGVmYXVsdCk7XG59XG5cbmZ1bmN0aW9uIGV2YWx1YXRlSW50ZXJ2YWxGdW5jdGlvbihwYXJhbWV0ZXJzLCBwcm9wZXJ0eVNwZWMsIGlucHV0KSB7XG4gICAgLy8gRWRnZSBjYXNlc1xuICAgIGlmIChnZXRUeXBlKGlucHV0KSAhPT0gJ251bWJlcicpIHJldHVybiBjb2FsZXNjZShwYXJhbWV0ZXJzLmRlZmF1bHQsIHByb3BlcnR5U3BlYy5kZWZhdWx0KTtcbiAgICBjb25zdCBuID0gcGFyYW1ldGVycy5zdG9wcy5sZW5ndGg7XG4gICAgaWYgKG4gPT09IDEpIHJldHVybiBwYXJhbWV0ZXJzLnN0b3BzWzBdWzFdO1xuICAgIGlmIChpbnB1dCA8PSBwYXJhbWV0ZXJzLnN0b3BzWzBdWzBdKSByZXR1cm4gcGFyYW1ldGVycy5zdG9wc1swXVsxXTtcbiAgICBpZiAoaW5wdXQgPj0gcGFyYW1ldGVycy5zdG9wc1tuIC0gMV1bMF0pIHJldHVybiBwYXJhbWV0ZXJzLnN0b3BzW24gLSAxXVsxXTtcblxuICAgIGNvbnN0IGluZGV4ID0gZmluZFN0b3BMZXNzVGhhbk9yRXF1YWxUbyhwYXJhbWV0ZXJzLnN0b3BzLCBpbnB1dCk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVycy5zdG9wc1tpbmRleF1bMV07XG59XG5cbmZ1bmN0aW9uIGV2YWx1YXRlRXhwb25lbnRpYWxGdW5jdGlvbihwYXJhbWV0ZXJzLCBwcm9wZXJ0eVNwZWMsIGlucHV0KSB7XG4gICAgY29uc3QgYmFzZSA9IHBhcmFtZXRlcnMuYmFzZSAhPT0gdW5kZWZpbmVkID8gcGFyYW1ldGVycy5iYXNlIDogMTtcblxuICAgIC8vIEVkZ2UgY2FzZXNcbiAgICBpZiAoZ2V0VHlwZShpbnB1dCkgIT09ICdudW1iZXInKSByZXR1cm4gY29hbGVzY2UocGFyYW1ldGVycy5kZWZhdWx0LCBwcm9wZXJ0eVNwZWMuZGVmYXVsdCk7XG4gICAgY29uc3QgbiA9IHBhcmFtZXRlcnMuc3RvcHMubGVuZ3RoO1xuICAgIGlmIChuID09PSAxKSByZXR1cm4gcGFyYW1ldGVycy5zdG9wc1swXVsxXTtcbiAgICBpZiAoaW5wdXQgPD0gcGFyYW1ldGVycy5zdG9wc1swXVswXSkgcmV0dXJuIHBhcmFtZXRlcnMuc3RvcHNbMF1bMV07XG4gICAgaWYgKGlucHV0ID49IHBhcmFtZXRlcnMuc3RvcHNbbiAtIDFdWzBdKSByZXR1cm4gcGFyYW1ldGVycy5zdG9wc1tuIC0gMV1bMV07XG5cbiAgICBjb25zdCBpbmRleCA9IGZpbmRTdG9wTGVzc1RoYW5PckVxdWFsVG8ocGFyYW1ldGVycy5zdG9wcywgaW5wdXQpO1xuICAgIGNvbnN0IHQgPSBpbnRlcnBvbGF0aW9uRmFjdG9yKFxuICAgICAgICBpbnB1dCwgYmFzZSxcbiAgICAgICAgcGFyYW1ldGVycy5zdG9wc1tpbmRleF1bMF0sXG4gICAgICAgIHBhcmFtZXRlcnMuc3RvcHNbaW5kZXggKyAxXVswXSk7XG5cbiAgICBjb25zdCBvdXRwdXRMb3dlciA9IHBhcmFtZXRlcnMuc3RvcHNbaW5kZXhdWzFdO1xuICAgIGNvbnN0IG91dHB1dFVwcGVyID0gcGFyYW1ldGVycy5zdG9wc1tpbmRleCArIDFdWzFdO1xuICAgIGNvbnN0IGludGVycCA9IGludGVycG9sYXRlW3Byb3BlcnR5U3BlYy50eXBlXSB8fCBpZGVudGl0eUZ1bmN0aW9uO1xuXG4gICAgaWYgKHR5cGVvZiBvdXRwdXRMb3dlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgICAgICAgY29uc3QgZXZhbHVhdGVkTG93ZXIgPSBvdXRwdXRMb3dlci5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgY29uc3QgZXZhbHVhdGVkVXBwZXIgPSBvdXRwdXRVcHBlci5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciBmaWxsLW91dGxpbmUtY29sb3IsIHdoaWNoIGhhcyBubyBzcGVjIGRlZmF1bHQuXG4gICAgICAgICAgICBpZiAoZXZhbHVhdGVkTG93ZXIgPT09IHVuZGVmaW5lZCB8fCBldmFsdWF0ZWRVcHBlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbnRlcnAoZXZhbHVhdGVkTG93ZXIsIGV2YWx1YXRlZFVwcGVyLCB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJwKG91dHB1dExvd2VyLCBvdXRwdXRVcHBlciwgdCk7XG59XG5cbmZ1bmN0aW9uIGV2YWx1YXRlSWRlbnRpdHlGdW5jdGlvbihwYXJhbWV0ZXJzLCBwcm9wZXJ0eVNwZWMsIGlucHV0KSB7XG4gICAgaWYgKHByb3BlcnR5U3BlYy50eXBlID09PSAnY29sb3InKSB7XG4gICAgICAgIGlucHV0ID0gcGFyc2VDb2xvcihpbnB1dCk7XG4gICAgfSBlbHNlIGlmIChnZXRUeXBlKGlucHV0KSAhPT0gcHJvcGVydHlTcGVjLnR5cGUgJiYgKHByb3BlcnR5U3BlYy50eXBlICE9PSAnZW51bScgfHwgIXByb3BlcnR5U3BlYy52YWx1ZXNbaW5wdXRdKSkge1xuICAgICAgICBpbnB1dCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGNvYWxlc2NlKGlucHV0LCBwYXJhbWV0ZXJzLmRlZmF1bHQsIHByb3BlcnR5U3BlYy5kZWZhdWx0KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBzdG9wIDw9IGlucHV0LCBvciAwIGlmIGl0IGRvZXNuJ3QgZXhpc3QuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZmluZFN0b3BMZXNzVGhhbk9yRXF1YWxUbyhzdG9wcywgaW5wdXQpIHtcbiAgICBjb25zdCBuID0gc3RvcHMubGVuZ3RoO1xuICAgIGxldCBsb3dlckluZGV4ID0gMDtcbiAgICBsZXQgdXBwZXJJbmRleCA9IG4gLSAxO1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICAgIGxldCBjdXJyZW50VmFsdWUsIHVwcGVyVmFsdWU7XG5cbiAgICB3aGlsZSAobG93ZXJJbmRleCA8PSB1cHBlckluZGV4KSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IE1hdGguZmxvb3IoKGxvd2VySW5kZXggKyB1cHBlckluZGV4KSAvIDIpO1xuICAgICAgICBjdXJyZW50VmFsdWUgPSBzdG9wc1tjdXJyZW50SW5kZXhdWzBdO1xuICAgICAgICB1cHBlclZhbHVlID0gc3RvcHNbY3VycmVudEluZGV4ICsgMV1bMF07XG4gICAgICAgIGlmIChpbnB1dCA9PT0gY3VycmVudFZhbHVlIHx8IGlucHV0ID4gY3VycmVudFZhbHVlICYmIGlucHV0IDwgdXBwZXJWYWx1ZSkgeyAvLyBTZWFyY2ggY29tcGxldGVcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50SW5kZXg7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFZhbHVlIDwgaW5wdXQpIHtcbiAgICAgICAgICAgIGxvd2VySW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRWYWx1ZSA+IGlucHV0KSB7XG4gICAgICAgICAgICB1cHBlckluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBNYXRoLm1heChjdXJyZW50SW5kZXggLSAxLCAwKTtcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbkRlZmluaXRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAodmFsdWUuc3RvcHMgfHwgdmFsdWUudHlwZSA9PT0gJ2lkZW50aXR5Jyk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJhdGlvIHRoYXQgY2FuIGJlIHVzZWQgdG8gaW50ZXJwb2xhdGUgYmV0d2VlbiBleHBvbmVudGlhbCBmdW5jdGlvblxuICogc3RvcHMuXG4gKlxuICogSG93IGl0IHdvcmtzOlxuICogVHdvIGNvbnNlY3V0aXZlIHN0b3AgdmFsdWVzIGRlZmluZSBhIChzY2FsZWQgYW5kIHNoaWZ0ZWQpIGV4cG9uZW50aWFsXG4gKiBmdW5jdGlvbiBgZih4KSA9IGEgKiBiYXNlXnggKyBiYCwgd2hlcmUgYGJhc2VgIGlzIHRoZSB1c2VyLXNwZWNpZmllZCBiYXNlLFxuICogYW5kIGBhYCBhbmQgYGJgIGFyZSBjb25zdGFudHMgYWZmb3JkaW5nIHN1ZmZpY2llbnQgZGVncmVlcyBvZiBmcmVlZG9tIHRvIGZpdFxuICogdGhlIGZ1bmN0aW9uIHRvIHRoZSBnaXZlbiBzdG9wcy5cbiAqXG4gKiBIZXJlJ3MgYSBiaXQgb2YgYWxnZWJyYSB0aGF0IGxldHMgdXMgY29tcHV0ZSBgZih4KWAgZGlyZWN0bHkgZnJvbSB0aGUgc3RvcFxuICogdmFsdWVzIHdpdGhvdXQgZXhwbGljaXRseSBzb2x2aW5nIGZvciBgYWAgYW5kIGBiYDpcbiAqXG4gKiBGaXJzdCBzdG9wIHZhbHVlOiBgZih4MCkgPSB5MCA9IGEgKiBiYXNlXngwICsgYmBcbiAqIFNlY29uZCBzdG9wIHZhbHVlOiBgZih4MSkgPSB5MSA9IGEgKiBiYXNlXngxICsgYmBcbiAqID0+IGB5MSAtIHkwID0gYShiYXNlXngxIC0gYmFzZV54MClgXG4gKiA9PiBgYSA9ICh5MSAtIHkwKS8oYmFzZV54MSAtIGJhc2VeeDApYFxuICpcbiAqIERlc2lyZWQgdmFsdWU6IGBmKHgpID0geSA9IGEgKiBiYXNlXnggKyBiYFxuICogPT4gYGYoeCkgPSB5MCArIGEgKiAoYmFzZV54IC0gYmFzZV54MClgXG4gKlxuICogRnJvbSB0aGUgYWJvdmUsIHdlIGNhbiByZXBsYWNlIHRoZSBgYWAgaW4gYGEgKiAoYmFzZV54IC0gYmFzZV54MClgIGFuZCBkbyBhXG4gKiBsaXR0bGUgYWxnZWJyYTpcbiAqIGBgYFxuICogYSAqIChiYXNlXnggLSBiYXNlXngwKSA9ICh5MSAtIHkwKS8oYmFzZV54MSAtIGJhc2VeeDApICogKGJhc2VeeCAtIGJhc2VeeDApXG4gKiAgICAgICAgICAgICAgICAgICAgID0gKHkxIC0geTApICogKGJhc2VeeCAtIGJhc2VeeDApIC8gKGJhc2VeeDEgLSBiYXNlXngwKVxuICogYGBgXG4gKlxuICogSWYgd2UgbGV0IGAoYmFzZV54IC0gYmFzZV54MCkgLyAoYmFzZV54MSBiYXNlXngwKWAsIHRoZW4gd2UgaGF2ZVxuICogYGYoeCkgPSB5MCArICh5MSAtIHkwKSAqIHJhdGlvYC4gIEluIG90aGVyIHdvcmRzLCBgcmF0aW9gIG1heSBiZSB0cmVhdGVkIGFzXG4gKiBhbiBpbnRlcnBvbGF0aW9uIGZhY3RvciBiZXR3ZWVuIHRoZSB0d28gc3RvcHMnIG91dHB1dCB2YWx1ZXMuXG4gKlxuICogKE5vdGU6IGEgc2xpZ2h0bHkgZGlmZmVyZW50IGZvcm0gZm9yIGByYXRpb2AsXG4gKiBgKGJhc2VeKHgteDApIC0gMSkgLyAoYmFzZV4oeDEteDApIC0gMSkgYCwgaXMgZXF1aXZhbGVudCwgYnV0IHJlcXVpcmVzIGZld2VyXG4gKiBleHBlbnNpdmUgYE1hdGgucG93KClgIG9wZXJhdGlvbnMuKVxuICpcbiAqIEBwcml2YXRlXG4qL1xuZnVuY3Rpb24gaW50ZXJwb2xhdGlvbkZhY3RvcihpbnB1dCwgYmFzZSwgbG93ZXJWYWx1ZSwgdXBwZXJWYWx1ZSkge1xuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSB1cHBlclZhbHVlIC0gbG93ZXJWYWx1ZTtcbiAgICBjb25zdCBwcm9ncmVzcyA9IGlucHV0IC0gbG93ZXJWYWx1ZTtcblxuICAgIGlmIChkaWZmZXJlbmNlID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSBpZiAoYmFzZSA9PT0gMSkge1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3MgLyBkaWZmZXJlbmNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoTWF0aC5wb3coYmFzZSwgcHJvZ3Jlc3MpIC0gMSkgLyAoTWF0aC5wb3coYmFzZSwgZGlmZmVyZW5jZSkgLSAxKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlRnVuY3Rpb247XG5tb2R1bGUuZXhwb3J0cy5pc0Z1bmN0aW9uRGVmaW5pdGlvbiA9IGlzRnVuY3Rpb25EZWZpbml0aW9uO1xubW9kdWxlLmV4cG9ydHMuaW50ZXJwb2xhdGlvbkZhY3RvciA9IGludGVycG9sYXRpb25GYWN0b3I7XG5tb2R1bGUuZXhwb3J0cy5maW5kU3RvcExlc3NUaGFuT3JFcXVhbFRvID0gZmluZFN0b3BMZXNzVGhhbk9yRXF1YWxUbztcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3V0cHV0LCAuLi5pbnB1dHMpIHtcbiAgICBmb3IgKGNvbnN0IGlucHV0IG9mIGlucHV0cykge1xuICAgICAgICBmb3IgKGNvbnN0IGsgaW4gaW5wdXQpIHtcbiAgICAgICAgICAgIG91dHB1dFtrXSA9IGlucHV0W2tdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59O1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFR5cGUodmFsKSB7XG4gICAgaWYgKHZhbCBpbnN0YW5jZW9mIE51bWJlcikge1xuICAgICAgICByZXR1cm4gJ251bWJlcic7XG4gICAgfSBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuICdzdHJpbmcnO1xuICAgIH0gZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgQm9vbGVhbikge1xuICAgICAgICByZXR1cm4gJ2Jvb2xlYW4nO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWw7XG4gICAgfVxufTtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBpbnRlcnBvbGF0ZTtcblxuZnVuY3Rpb24gaW50ZXJwb2xhdGUoYSwgYiwgdCkge1xuICAgIHJldHVybiAoYSAqICgxIC0gdCkpICsgKGIgKiB0KTtcbn1cblxuaW50ZXJwb2xhdGUubnVtYmVyID0gaW50ZXJwb2xhdGU7XG5cbmludGVycG9sYXRlLnZlYzIgPSBmdW5jdGlvbihmcm9tLCB0bywgdCkge1xuICAgIHJldHVybiBbXG4gICAgICAgIGludGVycG9sYXRlKGZyb21bMF0sIHRvWzBdLCB0KSxcbiAgICAgICAgaW50ZXJwb2xhdGUoZnJvbVsxXSwgdG9bMV0sIHQpXG4gICAgXTtcbn07XG5cbi8qXG4gKiBJbnRlcnBvbGF0ZSBiZXR3ZWVuIHR3byBjb2xvcnMgZ2l2ZW4gYXMgNC1lbGVtZW50IGFycmF5cy5cbiAqXG4gKiBAcGFyYW0ge0NvbG9yfSBmcm9tXG4gKiBAcGFyYW0ge0NvbG9yfSB0b1xuICogQHBhcmFtIHtudW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBmYWN0b3IgYmV0d2VlbiAwIGFuZCAxXG4gKiBAcmV0dXJucyB7Q29sb3J9IGludGVycG9sYXRlZCBjb2xvclxuICovXG5pbnRlcnBvbGF0ZS5jb2xvciA9IGZ1bmN0aW9uKGZyb20sIHRvLCB0KSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgaW50ZXJwb2xhdGUoZnJvbVswXSwgdG9bMF0sIHQpLFxuICAgICAgICBpbnRlcnBvbGF0ZShmcm9tWzFdLCB0b1sxXSwgdCksXG4gICAgICAgIGludGVycG9sYXRlKGZyb21bMl0sIHRvWzJdLCB0KSxcbiAgICAgICAgaW50ZXJwb2xhdGUoZnJvbVszXSwgdG9bM10sIHQpXG4gICAgXTtcbn07XG5cbmludGVycG9sYXRlLmFycmF5ID0gZnVuY3Rpb24oZnJvbSwgdG8sIHQpIHtcbiAgICByZXR1cm4gZnJvbS5tYXAoKGQsIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRlKGQsIHRvW2ldLCB0KTtcbiAgICB9KTtcbn07XG4iLCJcbmNvbnN0IHBhcnNlQ29sb3JTdHJpbmcgPSByZXF1aXJlKCdjc3Njb2xvcnBhcnNlcicpLnBhcnNlQ1NTQ29sb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VDb2xvcihpbnB1dCkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IHJnYmEgPSBwYXJzZUNvbG9yU3RyaW5nKGlucHV0KTtcbiAgICAgICAgaWYgKCFyZ2JhKSB7IHJldHVybiB1bmRlZmluZWQ7IH1cblxuICAgICAgICAvLyBHTCBleHBlY3RzIGFsbCBjb21wb25lbnRzIHRvIGJlIGluIHRoZSByYW5nZSBbMCwgMV0gYW5kIHRvIGJlXG4gICAgICAgIC8vIG11bHRpcGxlZCBieSB0aGUgYWxwaGEgdmFsdWUuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICByZ2JhWzBdIC8gMjU1ICogcmdiYVszXSxcbiAgICAgICAgICAgIHJnYmFbMV0gLyAyNTUgKiByZ2JhWzNdLFxuICAgICAgICAgICAgcmdiYVsyXSAvIDI1NSAqIHJnYmFbM10sXG4gICAgICAgICAgICByZ2JhWzNdXG4gICAgICAgIF07XG5cbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dDtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufTtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBbJ3R5cGUnLCAnc291cmNlJywgJ3NvdXJjZS1sYXllcicsICdtaW56b29tJywgJ21heHpvb20nLCAnZmlsdGVyJywgJ2xheW91dCddO1xuIiwiLy8gKGMpIERlYW4gTWNOYW1lZSA8ZGVhbkBnbWFpbC5jb20+LCAyMDEyLlxuLy9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kZWFubS9jc3MtY29sb3ItcGFyc2VyLWpzXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbi8vIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4vLyByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Jcbi8vIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbi8vIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1Ncbi8vIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1jb2xvci9cbnZhciBrQ1NTQ29sb3JUYWJsZSA9IHtcbiAgXCJ0cmFuc3BhcmVudFwiOiBbMCwwLDAsMF0sIFwiYWxpY2VibHVlXCI6IFsyNDAsMjQ4LDI1NSwxXSxcbiAgXCJhbnRpcXVld2hpdGVcIjogWzI1MCwyMzUsMjE1LDFdLCBcImFxdWFcIjogWzAsMjU1LDI1NSwxXSxcbiAgXCJhcXVhbWFyaW5lXCI6IFsxMjcsMjU1LDIxMiwxXSwgXCJhenVyZVwiOiBbMjQwLDI1NSwyNTUsMV0sXG4gIFwiYmVpZ2VcIjogWzI0NSwyNDUsMjIwLDFdLCBcImJpc3F1ZVwiOiBbMjU1LDIyOCwxOTYsMV0sXG4gIFwiYmxhY2tcIjogWzAsMCwwLDFdLCBcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsMjM1LDIwNSwxXSxcbiAgXCJibHVlXCI6IFswLDAsMjU1LDFdLCBcImJsdWV2aW9sZXRcIjogWzEzOCw0MywyMjYsMV0sXG4gIFwiYnJvd25cIjogWzE2NSw0Miw0MiwxXSwgXCJidXJseXdvb2RcIjogWzIyMiwxODQsMTM1LDFdLFxuICBcImNhZGV0Ymx1ZVwiOiBbOTUsMTU4LDE2MCwxXSwgXCJjaGFydHJldXNlXCI6IFsxMjcsMjU1LDAsMV0sXG4gIFwiY2hvY29sYXRlXCI6IFsyMTAsMTA1LDMwLDFdLCBcImNvcmFsXCI6IFsyNTUsMTI3LDgwLDFdLFxuICBcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsMTQ5LDIzNywxXSwgXCJjb3Juc2lsa1wiOiBbMjU1LDI0OCwyMjAsMV0sXG4gIFwiY3JpbXNvblwiOiBbMjIwLDIwLDYwLDFdLCBcImN5YW5cIjogWzAsMjU1LDI1NSwxXSxcbiAgXCJkYXJrYmx1ZVwiOiBbMCwwLDEzOSwxXSwgXCJkYXJrY3lhblwiOiBbMCwxMzksMTM5LDFdLFxuICBcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwxMzQsMTEsMV0sIFwiZGFya2dyYXlcIjogWzE2OSwxNjksMTY5LDFdLFxuICBcImRhcmtncmVlblwiOiBbMCwxMDAsMCwxXSwgXCJkYXJrZ3JleVwiOiBbMTY5LDE2OSwxNjksMV0sXG4gIFwiZGFya2toYWtpXCI6IFsxODksMTgzLDEwNywxXSwgXCJkYXJrbWFnZW50YVwiOiBbMTM5LDAsMTM5LDFdLFxuICBcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwxMDcsNDcsMV0sIFwiZGFya29yYW5nZVwiOiBbMjU1LDE0MCwwLDFdLFxuICBcImRhcmtvcmNoaWRcIjogWzE1Myw1MCwyMDQsMV0sIFwiZGFya3JlZFwiOiBbMTM5LDAsMCwxXSxcbiAgXCJkYXJrc2FsbW9uXCI6IFsyMzMsMTUwLDEyMiwxXSwgXCJkYXJrc2VhZ3JlZW5cIjogWzE0MywxODgsMTQzLDFdLFxuICBcImRhcmtzbGF0ZWJsdWVcIjogWzcyLDYxLDEzOSwxXSwgXCJkYXJrc2xhdGVncmF5XCI6IFs0Nyw3OSw3OSwxXSxcbiAgXCJkYXJrc2xhdGVncmV5XCI6IFs0Nyw3OSw3OSwxXSwgXCJkYXJrdHVycXVvaXNlXCI6IFswLDIwNiwyMDksMV0sXG4gIFwiZGFya3Zpb2xldFwiOiBbMTQ4LDAsMjExLDFdLCBcImRlZXBwaW5rXCI6IFsyNTUsMjAsMTQ3LDFdLFxuICBcImRlZXBza3libHVlXCI6IFswLDE5MSwyNTUsMV0sIFwiZGltZ3JheVwiOiBbMTA1LDEwNSwxMDUsMV0sXG4gIFwiZGltZ3JleVwiOiBbMTA1LDEwNSwxMDUsMV0sIFwiZG9kZ2VyYmx1ZVwiOiBbMzAsMTQ0LDI1NSwxXSxcbiAgXCJmaXJlYnJpY2tcIjogWzE3OCwzNCwzNCwxXSwgXCJmbG9yYWx3aGl0ZVwiOiBbMjU1LDI1MCwyNDAsMV0sXG4gIFwiZm9yZXN0Z3JlZW5cIjogWzM0LDEzOSwzNCwxXSwgXCJmdWNoc2lhXCI6IFsyNTUsMCwyNTUsMV0sXG4gIFwiZ2FpbnNib3JvXCI6IFsyMjAsMjIwLDIyMCwxXSwgXCJnaG9zdHdoaXRlXCI6IFsyNDgsMjQ4LDI1NSwxXSxcbiAgXCJnb2xkXCI6IFsyNTUsMjE1LDAsMV0sIFwiZ29sZGVucm9kXCI6IFsyMTgsMTY1LDMyLDFdLFxuICBcImdyYXlcIjogWzEyOCwxMjgsMTI4LDFdLCBcImdyZWVuXCI6IFswLDEyOCwwLDFdLFxuICBcImdyZWVueWVsbG93XCI6IFsxNzMsMjU1LDQ3LDFdLCBcImdyZXlcIjogWzEyOCwxMjgsMTI4LDFdLFxuICBcImhvbmV5ZGV3XCI6IFsyNDAsMjU1LDI0MCwxXSwgXCJob3RwaW5rXCI6IFsyNTUsMTA1LDE4MCwxXSxcbiAgXCJpbmRpYW5yZWRcIjogWzIwNSw5Miw5MiwxXSwgXCJpbmRpZ29cIjogWzc1LDAsMTMwLDFdLFxuICBcIml2b3J5XCI6IFsyNTUsMjU1LDI0MCwxXSwgXCJraGFraVwiOiBbMjQwLDIzMCwxNDAsMV0sXG4gIFwibGF2ZW5kZXJcIjogWzIzMCwyMzAsMjUwLDFdLCBcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwyNDAsMjQ1LDFdLFxuICBcImxhd25ncmVlblwiOiBbMTI0LDI1MiwwLDFdLCBcImxlbW9uY2hpZmZvblwiOiBbMjU1LDI1MCwyMDUsMV0sXG4gIFwibGlnaHRibHVlXCI6IFsxNzMsMjE2LDIzMCwxXSwgXCJsaWdodGNvcmFsXCI6IFsyNDAsMTI4LDEyOCwxXSxcbiAgXCJsaWdodGN5YW5cIjogWzIyNCwyNTUsMjU1LDFdLCBcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsMjUwLDIxMCwxXSxcbiAgXCJsaWdodGdyYXlcIjogWzIxMSwyMTEsMjExLDFdLCBcImxpZ2h0Z3JlZW5cIjogWzE0NCwyMzgsMTQ0LDFdLFxuICBcImxpZ2h0Z3JleVwiOiBbMjExLDIxMSwyMTEsMV0sIFwibGlnaHRwaW5rXCI6IFsyNTUsMTgyLDE5MywxXSxcbiAgXCJsaWdodHNhbG1vblwiOiBbMjU1LDE2MCwxMjIsMV0sIFwibGlnaHRzZWFncmVlblwiOiBbMzIsMTc4LDE3MCwxXSxcbiAgXCJsaWdodHNreWJsdWVcIjogWzEzNSwyMDYsMjUwLDFdLCBcImxpZ2h0c2xhdGVncmF5XCI6IFsxMTksMTM2LDE1MywxXSxcbiAgXCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LDEzNiwxNTMsMV0sIFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwxOTYsMjIyLDFdLFxuICBcImxpZ2h0eWVsbG93XCI6IFsyNTUsMjU1LDIyNCwxXSwgXCJsaW1lXCI6IFswLDI1NSwwLDFdLFxuICBcImxpbWVncmVlblwiOiBbNTAsMjA1LDUwLDFdLCBcImxpbmVuXCI6IFsyNTAsMjQwLDIzMCwxXSxcbiAgXCJtYWdlbnRhXCI6IFsyNTUsMCwyNTUsMV0sIFwibWFyb29uXCI6IFsxMjgsMCwwLDFdLFxuICBcIm1lZGl1bWFxdWFtYXJpbmVcIjogWzEwMiwyMDUsMTcwLDFdLCBcIm1lZGl1bWJsdWVcIjogWzAsMCwyMDUsMV0sXG4gIFwibWVkaXVtb3JjaGlkXCI6IFsxODYsODUsMjExLDFdLCBcIm1lZGl1bXB1cnBsZVwiOiBbMTQ3LDExMiwyMTksMV0sXG4gIFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLDE3OSwxMTMsMV0sIFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsMTA0LDIzOCwxXSxcbiAgXCJtZWRpdW1zcHJpbmdncmVlblwiOiBbMCwyNTAsMTU0LDFdLCBcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsMjA5LDIwNCwxXSxcbiAgXCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwyMSwxMzMsMV0sIFwibWlkbmlnaHRibHVlXCI6IFsyNSwyNSwxMTIsMV0sXG4gIFwibWludGNyZWFtXCI6IFsyNDUsMjU1LDI1MCwxXSwgXCJtaXN0eXJvc2VcIjogWzI1NSwyMjgsMjI1LDFdLFxuICBcIm1vY2Nhc2luXCI6IFsyNTUsMjI4LDE4MSwxXSwgXCJuYXZham93aGl0ZVwiOiBbMjU1LDIyMiwxNzMsMV0sXG4gIFwibmF2eVwiOiBbMCwwLDEyOCwxXSwgXCJvbGRsYWNlXCI6IFsyNTMsMjQ1LDIzMCwxXSxcbiAgXCJvbGl2ZVwiOiBbMTI4LDEyOCwwLDFdLCBcIm9saXZlZHJhYlwiOiBbMTA3LDE0MiwzNSwxXSxcbiAgXCJvcmFuZ2VcIjogWzI1NSwxNjUsMCwxXSwgXCJvcmFuZ2VyZWRcIjogWzI1NSw2OSwwLDFdLFxuICBcIm9yY2hpZFwiOiBbMjE4LDExMiwyMTQsMV0sIFwicGFsZWdvbGRlbnJvZFwiOiBbMjM4LDIzMiwxNzAsMV0sXG4gIFwicGFsZWdyZWVuXCI6IFsxNTIsMjUxLDE1MiwxXSwgXCJwYWxldHVycXVvaXNlXCI6IFsxNzUsMjM4LDIzOCwxXSxcbiAgXCJwYWxldmlvbGV0cmVkXCI6IFsyMTksMTEyLDE0NywxXSwgXCJwYXBheWF3aGlwXCI6IFsyNTUsMjM5LDIxMywxXSxcbiAgXCJwZWFjaHB1ZmZcIjogWzI1NSwyMTgsMTg1LDFdLCBcInBlcnVcIjogWzIwNSwxMzMsNjMsMV0sXG4gIFwicGlua1wiOiBbMjU1LDE5MiwyMDMsMV0sIFwicGx1bVwiOiBbMjIxLDE2MCwyMjEsMV0sXG4gIFwicG93ZGVyYmx1ZVwiOiBbMTc2LDIyNCwyMzAsMV0sIFwicHVycGxlXCI6IFsxMjgsMCwxMjgsMV0sXG4gIFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLDUxLDE1MywxXSxcbiAgXCJyZWRcIjogWzI1NSwwLDAsMV0sIFwicm9zeWJyb3duXCI6IFsxODgsMTQzLDE0MywxXSxcbiAgXCJyb3lhbGJsdWVcIjogWzY1LDEwNSwyMjUsMV0sIFwic2FkZGxlYnJvd25cIjogWzEzOSw2OSwxOSwxXSxcbiAgXCJzYWxtb25cIjogWzI1MCwxMjgsMTE0LDFdLCBcInNhbmR5YnJvd25cIjogWzI0NCwxNjQsOTYsMV0sXG4gIFwic2VhZ3JlZW5cIjogWzQ2LDEzOSw4NywxXSwgXCJzZWFzaGVsbFwiOiBbMjU1LDI0NSwyMzgsMV0sXG4gIFwic2llbm5hXCI6IFsxNjAsODIsNDUsMV0sIFwic2lsdmVyXCI6IFsxOTIsMTkyLDE5MiwxXSxcbiAgXCJza3libHVlXCI6IFsxMzUsMjA2LDIzNSwxXSwgXCJzbGF0ZWJsdWVcIjogWzEwNiw5MCwyMDUsMV0sXG4gIFwic2xhdGVncmF5XCI6IFsxMTIsMTI4LDE0NCwxXSwgXCJzbGF0ZWdyZXlcIjogWzExMiwxMjgsMTQ0LDFdLFxuICBcInNub3dcIjogWzI1NSwyNTAsMjUwLDFdLCBcInNwcmluZ2dyZWVuXCI6IFswLDI1NSwxMjcsMV0sXG4gIFwic3RlZWxibHVlXCI6IFs3MCwxMzAsMTgwLDFdLCBcInRhblwiOiBbMjEwLDE4MCwxNDAsMV0sXG4gIFwidGVhbFwiOiBbMCwxMjgsMTI4LDFdLCBcInRoaXN0bGVcIjogWzIxNiwxOTEsMjE2LDFdLFxuICBcInRvbWF0b1wiOiBbMjU1LDk5LDcxLDFdLCBcInR1cnF1b2lzZVwiOiBbNjQsMjI0LDIwOCwxXSxcbiAgXCJ2aW9sZXRcIjogWzIzOCwxMzAsMjM4LDFdLCBcIndoZWF0XCI6IFsyNDUsMjIyLDE3OSwxXSxcbiAgXCJ3aGl0ZVwiOiBbMjU1LDI1NSwyNTUsMV0sIFwid2hpdGVzbW9rZVwiOiBbMjQ1LDI0NSwyNDUsMV0sXG4gIFwieWVsbG93XCI6IFsyNTUsMjU1LDAsMV0sIFwieWVsbG93Z3JlZW5cIjogWzE1NCwyMDUsNTAsMV19XG5cbmZ1bmN0aW9uIGNsYW1wX2Nzc19ieXRlKGkpIHsgIC8vIENsYW1wIHRvIGludGVnZXIgMCAuLiAyNTUuXG4gIGkgPSBNYXRoLnJvdW5kKGkpOyAgLy8gU2VlbXMgdG8gYmUgd2hhdCBDaHJvbWUgZG9lcyAodnMgdHJ1bmNhdGlvbikuXG4gIHJldHVybiBpIDwgMCA/IDAgOiBpID4gMjU1ID8gMjU1IDogaTtcbn1cblxuZnVuY3Rpb24gY2xhbXBfY3NzX2Zsb2F0KGYpIHsgIC8vIENsYW1wIHRvIGZsb2F0IDAuMCAuLiAxLjAuXG4gIHJldHVybiBmIDwgMCA/IDAgOiBmID4gMSA/IDEgOiBmO1xufVxuXG5mdW5jdGlvbiBwYXJzZV9jc3NfaW50KHN0cikgeyAgLy8gaW50IG9yIHBlcmNlbnRhZ2UuXG4gIGlmIChzdHJbc3RyLmxlbmd0aCAtIDFdID09PSAnJScpXG4gICAgcmV0dXJuIGNsYW1wX2Nzc19ieXRlKHBhcnNlRmxvYXQoc3RyKSAvIDEwMCAqIDI1NSk7XG4gIHJldHVybiBjbGFtcF9jc3NfYnl0ZShwYXJzZUludChzdHIpKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VfY3NzX2Zsb2F0KHN0cikgeyAgLy8gZmxvYXQgb3IgcGVyY2VudGFnZS5cbiAgaWYgKHN0cltzdHIubGVuZ3RoIC0gMV0gPT09ICclJylcbiAgICByZXR1cm4gY2xhbXBfY3NzX2Zsb2F0KHBhcnNlRmxvYXQoc3RyKSAvIDEwMCk7XG4gIHJldHVybiBjbGFtcF9jc3NfZmxvYXQocGFyc2VGbG9hdChzdHIpKTtcbn1cblxuZnVuY3Rpb24gY3NzX2h1ZV90b19yZ2IobTEsIG0yLCBoKSB7XG4gIGlmIChoIDwgMCkgaCArPSAxO1xuICBlbHNlIGlmIChoID4gMSkgaCAtPSAxO1xuXG4gIGlmIChoICogNiA8IDEpIHJldHVybiBtMSArIChtMiAtIG0xKSAqIGggKiA2O1xuICBpZiAoaCAqIDIgPCAxKSByZXR1cm4gbTI7XG4gIGlmIChoICogMyA8IDIpIHJldHVybiBtMSArIChtMiAtIG0xKSAqICgyLzMgLSBoKSAqIDY7XG4gIHJldHVybiBtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VDU1NDb2xvcihjc3Nfc3RyKSB7XG4gIC8vIFJlbW92ZSBhbGwgd2hpdGVzcGFjZSwgbm90IGNvbXBsaWFudCwgYnV0IHNob3VsZCBqdXN0IGJlIG1vcmUgYWNjZXB0aW5nLlxuICB2YXIgc3RyID0gY3NzX3N0ci5yZXBsYWNlKC8gL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIENvbG9yIGtleXdvcmRzIChhbmQgdHJhbnNwYXJlbnQpIGxvb2t1cC5cbiAgaWYgKHN0ciBpbiBrQ1NTQ29sb3JUYWJsZSkgcmV0dXJuIGtDU1NDb2xvclRhYmxlW3N0cl0uc2xpY2UoKTsgIC8vIGR1cC5cblxuICAvLyAjYWJjIGFuZCAjYWJjMTIzIHN5bnRheC5cbiAgaWYgKHN0clswXSA9PT0gJyMnKSB7XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDQpIHtcbiAgICAgIHZhciBpdiA9IHBhcnNlSW50KHN0ci5zdWJzdHIoMSksIDE2KTsgIC8vIFRPRE8oZGVhbm0pOiBTdHJpY3RlciBwYXJzaW5nLlxuICAgICAgaWYgKCEoaXYgPj0gMCAmJiBpdiA8PSAweGZmZikpIHJldHVybiBudWxsOyAgLy8gQ292ZXJzIE5hTi5cbiAgICAgIHJldHVybiBbKChpdiAmIDB4ZjAwKSA+PiA0KSB8ICgoaXYgJiAweGYwMCkgPj4gOCksXG4gICAgICAgICAgICAgIChpdiAmIDB4ZjApIHwgKChpdiAmIDB4ZjApID4+IDQpLFxuICAgICAgICAgICAgICAoaXYgJiAweGYpIHwgKChpdiAmIDB4ZikgPDwgNCksXG4gICAgICAgICAgICAgIDFdO1xuICAgIH0gZWxzZSBpZiAoc3RyLmxlbmd0aCA9PT0gNykge1xuICAgICAgdmFyIGl2ID0gcGFyc2VJbnQoc3RyLnN1YnN0cigxKSwgMTYpOyAgLy8gVE9ETyhkZWFubSk6IFN0cmljdGVyIHBhcnNpbmcuXG4gICAgICBpZiAoIShpdiA+PSAwICYmIGl2IDw9IDB4ZmZmZmZmKSkgcmV0dXJuIG51bGw7ICAvLyBDb3ZlcnMgTmFOLlxuICAgICAgcmV0dXJuIFsoaXYgJiAweGZmMDAwMCkgPj4gMTYsXG4gICAgICAgICAgICAgIChpdiAmIDB4ZmYwMCkgPj4gOCxcbiAgICAgICAgICAgICAgaXYgJiAweGZmLFxuICAgICAgICAgICAgICAxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBvcCA9IHN0ci5pbmRleE9mKCcoJyksIGVwID0gc3RyLmluZGV4T2YoJyknKTtcbiAgaWYgKG9wICE9PSAtMSAmJiBlcCArIDEgPT09IHN0ci5sZW5ndGgpIHtcbiAgICB2YXIgZm5hbWUgPSBzdHIuc3Vic3RyKDAsIG9wKTtcbiAgICB2YXIgcGFyYW1zID0gc3RyLnN1YnN0cihvcCsxLCBlcC0ob3ArMSkpLnNwbGl0KCcsJyk7XG4gICAgdmFyIGFscGhhID0gMTsgIC8vIFRvIGFsbG93IGNhc2UgZmFsbHRocm91Z2guXG4gICAgc3dpdGNoIChmbmFtZSkge1xuICAgICAgY2FzZSAncmdiYSc6XG4gICAgICAgIGlmIChwYXJhbXMubGVuZ3RoICE9PSA0KSByZXR1cm4gbnVsbDtcbiAgICAgICAgYWxwaGEgPSBwYXJzZV9jc3NfZmxvYXQocGFyYW1zLnBvcCgpKTtcbiAgICAgICAgLy8gRmFsbCB0aHJvdWdoLlxuICAgICAgY2FzZSAncmdiJzpcbiAgICAgICAgaWYgKHBhcmFtcy5sZW5ndGggIT09IDMpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gW3BhcnNlX2Nzc19pbnQocGFyYW1zWzBdKSxcbiAgICAgICAgICAgICAgICBwYXJzZV9jc3NfaW50KHBhcmFtc1sxXSksXG4gICAgICAgICAgICAgICAgcGFyc2VfY3NzX2ludChwYXJhbXNbMl0pLFxuICAgICAgICAgICAgICAgIGFscGhhXTtcbiAgICAgIGNhc2UgJ2hzbGEnOlxuICAgICAgICBpZiAocGFyYW1zLmxlbmd0aCAhPT0gNCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGFscGhhID0gcGFyc2VfY3NzX2Zsb2F0KHBhcmFtcy5wb3AoKSk7XG4gICAgICAgIC8vIEZhbGwgdGhyb3VnaC5cbiAgICAgIGNhc2UgJ2hzbCc6XG4gICAgICAgIGlmIChwYXJhbXMubGVuZ3RoICE9PSAzKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIGggPSAoKChwYXJzZUZsb2F0KHBhcmFtc1swXSkgJSAzNjApICsgMzYwKSAlIDM2MCkgLyAzNjA7ICAvLyAwIC4uIDFcbiAgICAgICAgLy8gTk9URShkZWFubSk6IEFjY29yZGluZyB0byB0aGUgQ1NTIHNwZWMgcy9sIHNob3VsZCBvbmx5IGJlXG4gICAgICAgIC8vIHBlcmNlbnRhZ2VzLCBidXQgd2UgZG9uJ3QgYm90aGVyIGFuZCBsZXQgZmxvYXQgb3IgcGVyY2VudGFnZS5cbiAgICAgICAgdmFyIHMgPSBwYXJzZV9jc3NfZmxvYXQocGFyYW1zWzFdKTtcbiAgICAgICAgdmFyIGwgPSBwYXJzZV9jc3NfZmxvYXQocGFyYW1zWzJdKTtcbiAgICAgICAgdmFyIG0yID0gbCA8PSAwLjUgPyBsICogKHMgKyAxKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgICAgIHZhciBtMSA9IGwgKiAyIC0gbTI7XG4gICAgICAgIHJldHVybiBbY2xhbXBfY3NzX2J5dGUoY3NzX2h1ZV90b19yZ2IobTEsIG0yLCBoKzEvMykgKiAyNTUpLFxuICAgICAgICAgICAgICAgIGNsYW1wX2Nzc19ieXRlKGNzc19odWVfdG9fcmdiKG0xLCBtMiwgaCkgKiAyNTUpLFxuICAgICAgICAgICAgICAgIGNsYW1wX2Nzc19ieXRlKGNzc19odWVfdG9fcmdiKG0xLCBtMiwgaC0xLzMpICogMjU1KSxcbiAgICAgICAgICAgICAgICBhbHBoYV07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudHJ5IHsgZXhwb3J0cy5wYXJzZUNTU0NvbG9yID0gcGFyc2VDU1NDb2xvciB9IGNhdGNoKGUpIHsgfVxuIiwidmFyIGZvbnRXZWlnaHRzID0ge1xuICB0aGluOiAxMDAsXG4gIGhhaXJsaW5lOiAxMDAsXG4gICd1bHRyYS1saWdodCc6IDEwMCxcbiAgJ2V4dHJhLWxpZ2h0JzogMTAwLFxuICBsaWdodDogMjAwLFxuICBib29rOiAzMDAsXG4gIHJlZ3VsYXI6IDQwMCxcbiAgbm9ybWFsOiA0MDAsXG4gIHBsYWluOiA0MDAsXG4gIHJvbWFuOiA0MDAsXG4gIHN0YW5kYXJkOiA0MDAsXG4gIG1lZGl1bTogNTAwLFxuICAnc2VtaS1ib2xkJzogNjAwLFxuICAnZGVtaS1ib2xkJzogNjAwLFxuICBib2xkOiA3MDAsXG4gIGhlYXZ5OiA4MDAsXG4gIGJsYWNrOiA4MDAsXG4gICdleHRyYS1ib2xkJzogODAwLFxuICAndWx0cmEtYmxhY2snOiA5MDAsXG4gICdleHRyYS1ibGFjayc6IDkwMCxcbiAgJ3VsdHJhLWJvbGQnOiA5MDAsXG4gICdoZWF2eS1ibGFjayc6IDkwMCxcbiAgZmF0OiA5MDAsXG4gIHBvc3RlcjogOTAwXG59O1xudmFyIHNwID0gJyAnO1xuXG52YXIgZm9udENhY2hlID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm9udCwgc2l6ZSkge1xuICB2YXIgY3NzRGF0YSA9IGZvbnRDYWNoZVtmb250XTtcbiAgaWYgKCFjc3NEYXRhKSB7XG4gICAgdmFyIHBhcnRzID0gZm9udC5zcGxpdCgnICcpO1xuICAgIHZhciBtYXliZVdlaWdodCA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIHdlaWdodCA9ICdub3JtYWwnO1xuICAgIHZhciBzdHlsZSA9ICdub3JtYWwnO1xuICAgIGlmIChtYXliZVdlaWdodCA9PSAnbm9ybWFsJyB8fCBtYXliZVdlaWdodCA9PSAnaXRhbGljJyB8fCBtYXliZVdlaWdodCA9PSAnb2JsaXF1ZScpIHtcbiAgICAgIHN0eWxlID0gbWF5YmVXZWlnaHQ7XG4gICAgICBwYXJ0cy5wb3AoKTtcbiAgICAgIG1heWJlV2VpZ2h0ID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV0udG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgZm9yICh2YXIgdyBpbiBmb250V2VpZ2h0cykge1xuICAgICAgaWYgKG1heWJlV2VpZ2h0ID09IHcgfHwgbWF5YmVXZWlnaHQgPT0gdy5yZXBsYWNlKCctJywgJycpIHx8IG1heWJlV2VpZ2h0ID09IHcucmVwbGFjZSgnLScsICcgJykpIHtcbiAgICAgICAgd2VpZ2h0ID0gZm9udFdlaWdodHNbd107XG4gICAgICAgIHBhcnRzLnBvcCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtYXliZVdlaWdodCA9PSAnbnVtYmVyJykge1xuICAgICAgd2VpZ2h0ID0gbWF5YmVXZWlnaHQ7XG4gICAgfVxuICAgIHZhciBmb250RmFtaWx5ID0gcGFydHMuam9pbignICcpXG4gICAgICAgIC5yZXBsYWNlKCdLbG9rYW50ZWNoIE5vdG8gU2FucycsICdOb3RvIFNhbnMnKTtcbiAgICBpZiAoZm9udEZhbWlseS5pbmRleE9mKCcgJykgIT09IC0xKSB7XG4gICAgICBmb250RmFtaWx5ID0gJ1wiJyArIGZvbnRGYW1pbHkgKyAnXCInO1xuICAgIH1cbiAgICAvLyBDU1MgZm9udCBwcm9wZXJ0eTogZm9udC1zdHlsZSBmb250LXdlaWdodCBmb250LXNpemUgZm9udC1mYW1pbHlcbiAgICBjc3NEYXRhID0gZm9udENhY2hlW2ZvbnRdID0gW3N0eWxlLCB3ZWlnaHQsIGZvbnRGYW1pbHldO1xuICB9XG4gIHJldHVybiBjc3NEYXRhWzBdICsgc3AgKyBjc3NEYXRhWzFdICsgc3AgKyBzaXplICsgJ3B4JyArIHNwICsgY3NzRGF0YVsyXTtcbn1cbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMC4wXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBmYW1pbGllcztcblxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpY29uOiAnaWNvbnMvZ29vZ2xlLnN2ZycsXG4gICAgbmFtZTogJ2dvb2dsZScsXG4gICAgdGl0bGU6ICdHb29nbGUgRm9udHMnLFxuICAgIGxpbms6ICdnb29nbGUuY29tL2ZvbnRzJyxcbiAgICBnZXROYW1lczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZmFtaWxpZXM7XG4gICAgfSxcbiAgICBnZXRMaW5rOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICByZXR1cm4gXCJodHRwczovL2ZvbnRzLmdvb2dsZS5jb20vc3BlY2ltZW4vXCIgKyAobmFtZS5yZXBsYWNlKC8oICkvZywgJysnKSk7XG4gICAgfSxcbiAgICBub3JtYWxpemVOYW1lOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gIH07XG5cbiAgZmFtaWxpZXMgPSBbXCJBQmVlWmVlXCIsIFwiQWJlbFwiLCBcIkFicmlsIEZhdGZhY2VcIiwgXCJBY2xvbmljYVwiLCBcIkFjbWVcIiwgXCJBY3RvclwiLCBcIkFkYW1pbmFcIiwgXCJBZHZlbnQgUHJvXCIsIFwiQWd1YWZpbmEgU2NyaXB0XCIsIFwiQWtyb25pbVwiLCBcIkFsYWRpblwiLCBcIkFsZHJpY2hcIiwgXCJBbGVmXCIsIFwiQWxlZ3JleWFcIiwgXCJBbGVncmV5YSBTQ1wiLCBcIkFsZWdyZXlhIFNhbnNcIiwgXCJBbGVncmV5YSBTYW5zIFNDXCIsIFwiQWxleCBCcnVzaFwiLCBcIkFsZmEgU2xhYiBPbmVcIiwgXCJBbGljZVwiLCBcIkFsaWtlXCIsIFwiQWxpa2UgQW5ndWxhclwiLCBcIkFsbGFuXCIsIFwiQWxsZXJ0YVwiLCBcIkFsbGVydGEgU3RlbmNpbFwiLCBcIkFsbHVyYVwiLCBcIkFsbWVuZHJhXCIsIFwiQWxtZW5kcmEgRGlzcGxheVwiLCBcIkFsbWVuZHJhIFNDXCIsIFwiQW1hcmFudGVcIiwgXCJBbWFyYW50aFwiLCBcIkFtYXRpYyBTQ1wiLCBcIkFtZXRoeXN0YVwiLCBcIkFtaXJpXCIsIFwiQW1pdGFcIiwgXCJBbmFoZWltXCIsIFwiQW5kYWRhXCIsIFwiQW5kaWthXCIsIFwiQW5na29yXCIsIFwiQW5uaWUgVXNlIFlvdXIgVGVsZXNjb3BlXCIsIFwiQW5vbnltb3VzIFByb1wiLCBcIkFudGljXCIsIFwiQW50aWMgRGlkb25lXCIsIFwiQW50aWMgU2xhYlwiLCBcIkFudG9uXCIsIFwiQXJhcGV5XCIsIFwiQXJidXR1c1wiLCBcIkFyYnV0dXMgU2xhYlwiLCBcIkFyY2hpdGVjdHMgRGF1Z2h0ZXJcIiwgXCJBcmNoaXZvIEJsYWNrXCIsIFwiQXJjaGl2byBOYXJyb3dcIiwgXCJBcmltb1wiLCBcIkFyaXpvbmlhXCIsIFwiQXJtYXRhXCIsIFwiQXJ0aWZpa2FcIiwgXCJBcnZvXCIsIFwiQXJ5YVwiLCBcIkFzYXBcIiwgXCJBc2FyXCIsIFwiQXNzZXRcIiwgXCJBc3Rsb2NoXCIsIFwiQXN1bFwiLCBcIkF0b21pYyBBZ2VcIiwgXCJBdWJyZXlcIiwgXCJBdWRpb3dpZGVcIiwgXCJBdXRvdXIgT25lXCIsIFwiQXZlcmFnZVwiLCBcIkF2ZXJhZ2UgU2Fuc1wiLCBcIkF2ZXJpYSBHcnVlc2EgTGlicmVcIiwgXCJBdmVyaWEgTGlicmVcIiwgXCJBdmVyaWEgU2FucyBMaWJyZVwiLCBcIkF2ZXJpYSBTZXJpZiBMaWJyZVwiLCBcIkJhZCBTY3JpcHRcIiwgXCJCYWx0aGF6YXJcIiwgXCJCYW5nZXJzXCIsIFwiQmFzaWNcIiwgXCJCYXR0YW1iYW5nXCIsIFwiQmF1bWFuc1wiLCBcIkJheW9uXCIsIFwiQmVsZ3Jhbm9cIiwgXCJCZWxsZXphXCIsIFwiQmVuY2hOaW5lXCIsIFwiQmVudGhhbVwiLCBcIkJlcmtzaGlyZSBTd2FzaFwiLCBcIkJldmFuXCIsIFwiQmlnZWxvdyBSdWxlc1wiLCBcIkJpZ3Nob3QgT25lXCIsIFwiQmlsYm9cIiwgXCJCaWxibyBTd2FzaCBDYXBzXCIsIFwiQmlyeWFuaVwiLCBcIkJpdHRlclwiLCBcIkJsYWNrIE9wcyBPbmVcIiwgXCJCb2tvclwiLCBcIkJvbmJvblwiLCBcIkJvb2dhbG9vXCIsIFwiQm93bGJ5IE9uZVwiLCBcIkJvd2xieSBPbmUgU0NcIiwgXCJCcmF3bGVyXCIsIFwiQnJlZSBTZXJpZlwiLCBcIkJ1YmJsZWd1bSBTYW5zXCIsIFwiQnViYmxlciBPbmVcIiwgXCJCdWRhXCIsIFwiQnVlbmFyZFwiLCBcIkJ1dGNoZXJtYW5cIiwgXCJCdXR0ZXJmbHkgS2lkc1wiLCBcIkNhYmluXCIsIFwiQ2FiaW4gQ29uZGVuc2VkXCIsIFwiQ2FiaW4gU2tldGNoXCIsIFwiQ2Flc2FyIERyZXNzaW5nXCIsIFwiQ2FnbGlvc3Ryb1wiLCBcIkNhbGxpZ3JhZmZpdHRpXCIsIFwiQ2FtYmF5XCIsIFwiQ2FtYm9cIiwgXCJDYW5kYWxcIiwgXCJDYW50YXJlbGxcIiwgXCJDYW50YXRhIE9uZVwiLCBcIkNhbnRvcmEgT25lXCIsIFwiQ2FwcmlvbGFcIiwgXCJDYXJkb1wiLCBcIkNhcm1lXCIsIFwiQ2Fycm9pcyBHb3RoaWNcIiwgXCJDYXJyb2lzIEdvdGhpYyBTQ1wiLCBcIkNhcnRlciBPbmVcIiwgXCJDYXRhbWFyYW5cIiwgXCJDYXVkZXhcIiwgXCJDYXZlYXRcIiwgXCJDYXZlYXQgQnJ1c2hcIiwgXCJDZWRhcnZpbGxlIEN1cnNpdmVcIiwgXCJDZXZpY2hlIE9uZVwiLCBcIkNoYW5nYSBPbmVcIiwgXCJDaGFuZ29cIiwgXCJDaGF1IFBoaWxvbWVuZSBPbmVcIiwgXCJDaGVsYSBPbmVcIiwgXCJDaGVsc2VhIE1hcmtldFwiLCBcIkNoZW5sYVwiLCBcIkNoZXJyeSBDcmVhbSBTb2RhXCIsIFwiQ2hlcnJ5IFN3YXNoXCIsIFwiQ2hld3lcIiwgXCJDaGljbGVcIiwgXCJDaGl2b1wiLCBcIkNob25idXJpXCIsIFwiQ2luemVsXCIsIFwiQ2luemVsIERlY29yYXRpdmVcIiwgXCJDbGlja2VyIFNjcmlwdFwiLCBcIkNvZGFcIiwgXCJDb2RhIENhcHRpb25cIiwgXCJDb2R5c3RhclwiLCBcIkNvbWJvXCIsIFwiQ29tZm9ydGFhXCIsIFwiQ29taW5nIFNvb25cIiwgXCJDb25jZXJ0IE9uZVwiLCBcIkNvbmRpbWVudFwiLCBcIkNvbnRlbnRcIiwgXCJDb250cmFpbCBPbmVcIiwgXCJDb252ZXJnZW5jZVwiLCBcIkNvb2tpZVwiLCBcIkNvcHNlXCIsIFwiQ29yYmVuXCIsIFwiQ291cmdldHRlXCIsIFwiQ291c2luZVwiLCBcIkNvdXN0YXJkXCIsIFwiQ292ZXJlZCBCeSBZb3VyIEdyYWNlXCIsIFwiQ3JhZnR5IEdpcmxzXCIsIFwiQ3JlZXBzdGVyXCIsIFwiQ3JldGUgUm91bmRcIiwgXCJDcmltc29uIFRleHRcIiwgXCJDcm9pc3NhbnQgT25lXCIsIFwiQ3J1c2hlZFwiLCBcIkN1cHJ1bVwiLCBcIkN1dGl2ZVwiLCBcIkN1dGl2ZSBNb25vXCIsIFwiRGFtaW9uXCIsIFwiRGFuY2luZyBTY3JpcHRcIiwgXCJEYW5ncmVrXCIsIFwiRGF3bmluZyBvZiBhIE5ldyBEYXlcIiwgXCJEYXlzIE9uZVwiLCBcIkRla2tvXCIsIFwiRGVsaXVzXCIsIFwiRGVsaXVzIFN3YXNoIENhcHNcIiwgXCJEZWxpdXMgVW5pY2FzZVwiLCBcIkRlbGxhIFJlc3BpcmFcIiwgXCJEZW5rIE9uZVwiLCBcIkRldm9uc2hpcmVcIiwgXCJEaHVyamF0aVwiLCBcIkRpZGFjdCBHb3RoaWNcIiwgXCJEaXBsb21hdGFcIiwgXCJEaXBsb21hdGEgU0NcIiwgXCJEb21pbmVcIiwgXCJEb25lZ2FsIE9uZVwiLCBcIkRvcHBpbyBPbmVcIiwgXCJEb3JzYVwiLCBcIkRvc2lzXCIsIFwiRHIgU3VnaXlhbWFcIiwgXCJEcm9pZCBTYW5zXCIsIFwiRHJvaWQgU2FucyBNb25vXCIsIFwiRHJvaWQgU2VyaWZcIiwgXCJEdXJ1IFNhbnNcIiwgXCJEeW5hbGlnaHRcIiwgXCJFQiBHYXJhbW9uZFwiLCBcIkVhZ2xlIExha2VcIiwgXCJFYXRlclwiLCBcIkVjb25vbWljYVwiLCBcIkVjemFyXCIsIFwiRWsgTXVrdGFcIiwgXCJFbGVjdHJvbGl6ZVwiLCBcIkVsc2llXCIsIFwiRWxzaWUgU3dhc2ggQ2Fwc1wiLCBcIkVtYmxlbWEgT25lXCIsIFwiRW1pbHlzIENhbmR5XCIsIFwiRW5nYWdlbWVudFwiLCBcIkVuZ2xlYmVydFwiLCBcIkVucmlxdWV0YVwiLCBcIkVyaWNhIE9uZVwiLCBcIkVzdGViYW5cIiwgXCJFdXBob3JpYSBTY3JpcHRcIiwgXCJFd2VydFwiLCBcIkV4b1wiLCBcIkV4byAyXCIsIFwiRXhwbGV0dXMgU2Fuc1wiLCBcIkZhbndvb2QgVGV4dFwiLCBcIkZhc2NpbmF0ZVwiLCBcIkZhc2NpbmF0ZSBJbmxpbmVcIiwgXCJGYXN0ZXIgT25lXCIsIFwiRmFzdGhhbmRcIiwgXCJGYXVuYSBPbmVcIiwgXCJGZWRlcmFudFwiLCBcIkZlZGVyb1wiLCBcIkZlbGlwYVwiLCBcIkZlbml4XCIsIFwiRmluZ2VyIFBhaW50XCIsIFwiRmlyYSBNb25vXCIsIFwiRmlyYSBTYW5zXCIsIFwiRmphbGxhIE9uZVwiLCBcIkZqb3JkIE9uZVwiLCBcIkZsYW1lbmNvXCIsIFwiRmxhdm9yc1wiLCBcIkZvbmRhbWVudG9cIiwgXCJGb250ZGluZXIgU3dhbmt5XCIsIFwiRm9ydW1cIiwgXCJGcmFuY29pcyBPbmVcIiwgXCJGcmVja2xlIEZhY2VcIiwgXCJGcmVkZXJpY2thIHRoZSBHcmVhdFwiLCBcIkZyZWRva2EgT25lXCIsIFwiRnJlZWhhbmRcIiwgXCJGcmVzY2FcIiwgXCJGcmlqb2xlXCIsIFwiRnJ1a3R1clwiLCBcIkZ1Z2F6IE9uZVwiLCBcIkdGUyBEaWRvdFwiLCBcIkdGUyBOZW9oZWxsZW5pY1wiLCBcIkdhYnJpZWxhXCIsIFwiR2FmYXRhXCIsIFwiR2FsZGVhbm9cIiwgXCJHYWxpbmRvXCIsIFwiR2VudGl1bSBCYXNpY1wiLCBcIkdlbnRpdW0gQm9vayBCYXNpY1wiLCBcIkdlb1wiLCBcIkdlb3N0YXJcIiwgXCJHZW9zdGFyIEZpbGxcIiwgXCJHZXJtYW5pYSBPbmVcIiwgXCJHaWR1Z3VcIiwgXCJHaWxkYSBEaXNwbGF5XCIsIFwiR2l2ZSBZb3UgR2xvcnlcIiwgXCJHbGFzcyBBbnRpcXVhXCIsIFwiR2xlZ29vXCIsIFwiR2xvcmlhIEhhbGxlbHVqYWhcIiwgXCJHb2JsaW4gT25lXCIsIFwiR29jaGkgSGFuZFwiLCBcIkdvcmRpdGFzXCIsIFwiR291ZHkgQm9va2xldHRlciAxOTExXCIsIFwiR3JhZHVhdGVcIiwgXCJHcmFuZCBIb3RlbFwiLCBcIkdyYXZpdGFzIE9uZVwiLCBcIkdyZWF0IFZpYmVzXCIsIFwiR3JpZmZ5XCIsIFwiR3J1cHBvXCIsIFwiR3VkZWFcIiwgXCJHdXJhamFkYVwiLCBcIkhhYmliaVwiLCBcIkhhbGFudFwiLCBcIkhhbW1lcnNtaXRoIE9uZVwiLCBcIkhhbmFsZWlcIiwgXCJIYW5hbGVpIEZpbGxcIiwgXCJIYW5kbGVlXCIsIFwiSGFudW1hblwiLCBcIkhhcHB5IE1vbmtleVwiLCBcIkhlYWRsYW5kIE9uZVwiLCBcIkhlbm55IFBlbm55XCIsIFwiSGVyciBWb24gTXVlbGxlcmhvZmZcIiwgXCJIaW5kXCIsIFwiSGluZCBTaWxpZ3VyaVwiLCBcIkhpbmQgVmFkb2RhcmFcIiwgXCJIb2x0d29vZCBPbmUgU0NcIiwgXCJIb21lbWFkZSBBcHBsZVwiLCBcIkhvbWVuYWplXCIsIFwiSU0gRmVsbCBEVyBQaWNhXCIsIFwiSU0gRmVsbCBEVyBQaWNhIFNDXCIsIFwiSU0gRmVsbCBEb3VibGUgUGljYVwiLCBcIklNIEZlbGwgRG91YmxlIFBpY2EgU0NcIiwgXCJJTSBGZWxsIEVuZ2xpc2hcIiwgXCJJTSBGZWxsIEVuZ2xpc2ggU0NcIiwgXCJJTSBGZWxsIEZyZW5jaCBDYW5vblwiLCBcIklNIEZlbGwgRnJlbmNoIENhbm9uIFNDXCIsIFwiSU0gRmVsbCBHcmVhdCBQcmltZXJcIiwgXCJJTSBGZWxsIEdyZWF0IFByaW1lciBTQ1wiLCBcIkljZWJlcmdcIiwgXCJJY2VsYW5kXCIsIFwiSW1wcmltYVwiLCBcIkluY29uc29sYXRhXCIsIFwiSW5kZXJcIiwgXCJJbmRpZSBGbG93ZXJcIiwgXCJJbmlrYVwiLCBcIklua251dCBBbnRpcXVhXCIsIFwiSXJpc2ggR3JvdmVyXCIsIFwiSXN0b2sgV2ViXCIsIFwiSXRhbGlhbmFcIiwgXCJJdGFsaWFubm9cIiwgXCJJdGltXCIsIFwiSmFjcXVlcyBGcmFuY29pc1wiLCBcIkphY3F1ZXMgRnJhbmNvaXMgU2hhZG93XCIsIFwiSmFsZGlcIiwgXCJKaW0gTmlnaHRzaGFkZVwiLCBcIkpvY2tleSBPbmVcIiwgXCJKb2xseSBMb2RnZXJcIiwgXCJKb3NlZmluIFNhbnNcIiwgXCJKb3NlZmluIFNsYWJcIiwgXCJKb3RpIE9uZVwiLCBcIkp1ZHNvblwiLCBcIkp1bGVlXCIsIFwiSnVsaXVzIFNhbnMgT25lXCIsIFwiSnVuZ2VcIiwgXCJKdXJhXCIsIFwiSnVzdCBBbm90aGVyIEhhbmRcIiwgXCJKdXN0IE1lIEFnYWluIERvd24gSGVyZVwiLCBcIkthZHdhXCIsIFwiS2FsYW1cIiwgXCJLYW1lcm9uXCIsIFwiS2FudHVtcnV5XCIsIFwiS2FybGFcIiwgXCJLYXJtYVwiLCBcIkthdXNoYW4gU2NyaXB0XCIsIFwiS2F2b29uXCIsIFwiS2RhbSBUaG1vclwiLCBcIktlYW5pYSBPbmVcIiwgXCJLZWxseSBTbGFiXCIsIFwiS2VuaWFcIiwgXCJLaGFuZFwiLCBcIktobWVyXCIsIFwiS2h1bGFcIiwgXCJLaXRlIE9uZVwiLCBcIktuZXdhdmVcIiwgXCJLb3R0YSBPbmVcIiwgXCJLb3VsZW5cIiwgXCJLcmFua3lcIiwgXCJLcmVvblwiLCBcIktyaXN0aVwiLCBcIktyb25hIE9uZVwiLCBcIkt1cmFsZVwiLCBcIkxhIEJlbGxlIEF1cm9yZVwiLCBcIkxhaWxhXCIsIFwiTGFra2kgUmVkZHlcIiwgXCJMYW5jZWxvdFwiLCBcIkxhdGVlZlwiLCBcIkxhdG9cIiwgXCJMZWFndWUgU2NyaXB0XCIsIFwiTGVja2VybGkgT25lXCIsIFwiTGVkZ2VyXCIsIFwiTGVrdG9uXCIsIFwiTGVtb25cIiwgXCJMaWJyZSBCYXNrZXJ2aWxsZVwiLCBcIkxpZmUgU2F2ZXJzXCIsIFwiTGlsaXRhIE9uZVwiLCBcIkxpbHkgU2NyaXB0IE9uZVwiLCBcIkxpbWVsaWdodFwiLCBcIkxpbmRlbiBIaWxsXCIsIFwiTG9ic3RlclwiLCBcIkxvYnN0ZXIgVHdvXCIsIFwiTG9uZHJpbmEgT3V0bGluZVwiLCBcIkxvbmRyaW5hIFNoYWRvd1wiLCBcIkxvbmRyaW5hIFNrZXRjaFwiLCBcIkxvbmRyaW5hIFNvbGlkXCIsIFwiTG9yYVwiLCBcIkxvdmUgWWEgTGlrZSBBIFNpc3RlclwiLCBcIkxvdmVkIGJ5IHRoZSBLaW5nXCIsIFwiTG92ZXJzIFF1YXJyZWxcIiwgXCJMdWNraWVzdCBHdXlcIiwgXCJMdXNpdGFuYVwiLCBcIkx1c3RyaWFcIiwgXCJNYWNvbmRvXCIsIFwiTWFjb25kbyBTd2FzaCBDYXBzXCIsIFwiTWFncmFcIiwgXCJNYWlkZW4gT3JhbmdlXCIsIFwiTWFrb1wiLCBcIk1hbGxhbm5hXCIsIFwiTWFuZGFsaVwiLCBcIk1hcmNlbGx1c1wiLCBcIk1hcmNlbGx1cyBTQ1wiLCBcIk1hcmNrIFNjcmlwdFwiLCBcIk1hcmdhcmluZVwiLCBcIk1hcmtvIE9uZVwiLCBcIk1hcm1lbGFkXCIsIFwiTWFydGVsXCIsIFwiTWFydGVsIFNhbnNcIiwgXCJNYXJ2ZWxcIiwgXCJNYXRlXCIsIFwiTWF0ZSBTQ1wiLCBcIk1hdmVuIFByb1wiLCBcIk1jTGFyZW5cIiwgXCJNZWRkb25cIiwgXCJNZWRpZXZhbFNoYXJwXCIsIFwiTWVkdWxhIE9uZVwiLCBcIk1lZ3JpbVwiLCBcIk1laWUgU2NyaXB0XCIsIFwiTWVyaWVuZGFcIiwgXCJNZXJpZW5kYSBPbmVcIiwgXCJNZXJyaXdlYXRoZXJcIiwgXCJNZXJyaXdlYXRoZXIgU2Fuc1wiLCBcIk1ldGFsXCIsIFwiTWV0YWwgTWFuaWFcIiwgXCJNZXRhbW9ycGhvdXNcIiwgXCJNZXRyb3Bob2JpY1wiLCBcIk1pY2hyb21hXCIsIFwiTWlsb25nYVwiLCBcIk1pbHRvbmlhblwiLCBcIk1pbHRvbmlhbiBUYXR0b29cIiwgXCJNaW5pdmVyXCIsIFwiTWlzcyBGYWphcmRvc2VcIiwgXCJNb2Rha1wiLCBcIk1vZGVybiBBbnRpcXVhXCIsIFwiTW9sZW5nb1wiLCBcIk1vbGxlXCIsIFwiTW9uZGFcIiwgXCJNb25vZmV0dFwiLCBcIk1vbm90b25cIiwgXCJNb25zaWV1ciBMYSBEb3VsYWlzZVwiLCBcIk1vbnRhZ2FcIiwgXCJNb250ZXpcIiwgXCJNb250c2VycmF0XCIsIFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIFwiTW9udHNlcnJhdCBTdWJyYXlhZGFcIiwgXCJNb3VsXCIsIFwiTW91bHBhbGlcIiwgXCJNb3VudGFpbnMgb2YgQ2hyaXN0bWFzXCIsIFwiTW91c2UgTWVtb2lyc1wiLCBcIk1yIEJlZGZvcnRcIiwgXCJNciBEYWZvZVwiLCBcIk1yIERlIEhhdmlsYW5kXCIsIFwiTXJzIFNhaW50IERlbGFmaWVsZFwiLCBcIk1ycyBTaGVwcGFyZHNcIiwgXCJNdWxpXCIsIFwiTXlzdGVyeSBRdWVzdFwiLCBcIk5UUlwiLCBcIk5ldWNoYVwiLCBcIk5ldXRvblwiLCBcIk5ldyBSb2NrZXJcIiwgXCJOZXdzIEN5Y2xlXCIsIFwiTmljb25uZVwiLCBcIk5peGllIE9uZVwiLCBcIk5vYmlsZVwiLCBcIk5va29yYVwiLCBcIk5vcmljYW5cIiwgXCJOb3NpZmVyXCIsIFwiTm90aGluZyBZb3UgQ291bGQgRG9cIiwgXCJOb3RpY2lhIFRleHRcIiwgXCJOb3RvIFNhbnNcIiwgXCJOb3RvIFNlcmlmXCIsIFwiTm92YSBDdXRcIiwgXCJOb3ZhIEZsYXRcIiwgXCJOb3ZhIE1vbm9cIiwgXCJOb3ZhIE92YWxcIiwgXCJOb3ZhIFJvdW5kXCIsIFwiTm92YSBTY3JpcHRcIiwgXCJOb3ZhIFNsaW1cIiwgXCJOb3ZhIFNxdWFyZVwiLCBcIk51bWFuc1wiLCBcIk51bml0b1wiLCBcIk9kb3IgTWVhbiBDaGV5XCIsIFwiT2Zmc2lkZVwiLCBcIk9sZCBTdGFuZGFyZCBUVFwiLCBcIk9sZGVuYnVyZ1wiLCBcIk9sZW8gU2NyaXB0XCIsIFwiT2xlbyBTY3JpcHQgU3dhc2ggQ2Fwc1wiLCBcIk9wZW4gU2Fuc1wiLCBcIk9wZW4gU2FucyBDb25kZW5zZWRcIiwgXCJPcmFuaWVuYmF1bVwiLCBcIk9yYml0cm9uXCIsIFwiT3JlZ2Fub1wiLCBcIk9yaWVudGFcIiwgXCJPcmlnaW5hbCBTdXJmZXJcIiwgXCJPc3dhbGRcIiwgXCJPdmVyIHRoZSBSYWluYm93XCIsIFwiT3ZlcmxvY2tcIiwgXCJPdmVybG9jayBTQ1wiLCBcIk92b1wiLCBcIk94eWdlblwiLCBcIk94eWdlbiBNb25vXCIsIFwiUFQgTW9ub1wiLCBcIlBUIFNhbnNcIiwgXCJQVCBTYW5zIENhcHRpb25cIiwgXCJQVCBTYW5zIE5hcnJvd1wiLCBcIlBUIFNlcmlmXCIsIFwiUFQgU2VyaWYgQ2FwdGlvblwiLCBcIlBhY2lmaWNvXCIsIFwiUGFsYW5xdWluXCIsIFwiUGFsYW5xdWluIERhcmtcIiwgXCJQYXByaWthXCIsIFwiUGFyaXNpZW5uZVwiLCBcIlBhc3Nlcm8gT25lXCIsIFwiUGFzc2lvbiBPbmVcIiwgXCJQYXRod2F5IEdvdGhpYyBPbmVcIiwgXCJQYXRyaWNrIEhhbmRcIiwgXCJQYXRyaWNrIEhhbmQgU0NcIiwgXCJQYXR1YSBPbmVcIiwgXCJQYXl0b25lIE9uZVwiLCBcIlBlZGRhbmFcIiwgXCJQZXJhbHRhXCIsIFwiUGVybWFuZW50IE1hcmtlclwiLCBcIlBldGl0IEZvcm1hbCBTY3JpcHRcIiwgXCJQZXRyb25hXCIsIFwiUGhpbG9zb3BoZXJcIiwgXCJQaWVkcmFcIiwgXCJQaW55b24gU2NyaXB0XCIsIFwiUGlyYXRhIE9uZVwiLCBcIlBsYXN0ZXJcIiwgXCJQbGF5XCIsIFwiUGxheWJhbGxcIiwgXCJQbGF5ZmFpciBEaXNwbGF5XCIsIFwiUGxheWZhaXIgRGlzcGxheSBTQ1wiLCBcIlBvZGtvdmFcIiwgXCJQb2lyZXQgT25lXCIsIFwiUG9sbGVyIE9uZVwiLCBcIlBvbHlcIiwgXCJQb21waWVyZVwiLCBcIlBvbnRhbm8gU2Fuc1wiLCBcIlBvcHBpbnNcIiwgXCJQb3J0IExsaWdhdCBTYW5zXCIsIFwiUG9ydCBMbGlnYXQgU2xhYlwiLCBcIlByYWdhdGkgTmFycm93XCIsIFwiUHJhdGFcIiwgXCJQcmVhaHZpaGVhclwiLCBcIlByZXNzIFN0YXJ0IDJQXCIsIFwiUHJpbmNlc3MgU29maWFcIiwgXCJQcm9jaW9ub1wiLCBcIlByb3N0byBPbmVcIiwgXCJQdXJpdGFuXCIsIFwiUHVycGxlIFB1cnNlXCIsIFwiUXVhbmRvXCIsIFwiUXVhbnRpY29cIiwgXCJRdWF0dHJvY2VudG9cIiwgXCJRdWF0dHJvY2VudG8gU2Fuc1wiLCBcIlF1ZXN0cmlhbFwiLCBcIlF1aWNrc2FuZFwiLCBcIlF1aW50ZXNzZW50aWFsXCIsIFwiUXdpZ2xleVwiLCBcIlJhY2luZyBTYW5zIE9uZVwiLCBcIlJhZGxleVwiLCBcIlJhamRoYW5pXCIsIFwiUmFsZXdheVwiLCBcIlJhbGV3YXkgRG90c1wiLCBcIlJhbWFiaGFkcmFcIiwgXCJSYW1hcmFqYVwiLCBcIlJhbWJsYVwiLCBcIlJhbW1ldHRvIE9uZVwiLCBcIlJhbmNoZXJzXCIsIFwiUmFuY2hvXCIsIFwiUmFuZ2FcIiwgXCJSYXRpb25hbGVcIiwgXCJSYXZpIFByYWthc2hcIiwgXCJSZWRyZXNzZWRcIiwgXCJSZWVuaWUgQmVhbmllXCIsIFwiUmV2YWxpYVwiLCBcIlJob2RpdW0gTGlicmVcIiwgXCJSaWJleWVcIiwgXCJSaWJleWUgTWFycm93XCIsIFwiUmlnaHRlb3VzXCIsIFwiUmlzcXVlXCIsIFwiUm9ib3RvXCIsIFwiUm9ib3RvIENvbmRlbnNlZFwiLCBcIlJvYm90byBNb25vXCIsIFwiUm9ib3RvIFNsYWJcIiwgXCJSb2NoZXN0ZXJcIiwgXCJSb2NrIFNhbHRcIiwgXCJSb2traXR0XCIsIFwiUm9tYW5lc2NvXCIsIFwiUm9wYSBTYW5zXCIsIFwiUm9zYXJpb1wiLCBcIlJvc2FyaXZvXCIsIFwiUm91Z2UgU2NyaXB0XCIsIFwiUm96aGEgT25lXCIsIFwiUnViaWtcIiwgXCJSdWJpayBNb25vIE9uZVwiLCBcIlJ1YmlrIE9uZVwiLCBcIlJ1ZGFcIiwgXCJSdWZpbmFcIiwgXCJSdWdlIEJvb2dpZVwiLCBcIlJ1bHVrb1wiLCBcIlJ1bSBSYWlzaW5cIiwgXCJSdXNsYW4gRGlzcGxheVwiLCBcIlJ1c3NvIE9uZVwiLCBcIlJ1dGhpZVwiLCBcIlJ5ZVwiLCBcIlNhY3JhbWVudG9cIiwgXCJTYWhpdHlhXCIsIFwiU2FpbFwiLCBcIlNhbHNhXCIsIFwiU2FuY2hlelwiLCBcIlNhbmNyZWVrXCIsIFwiU2Fuc2l0YSBPbmVcIiwgXCJTYXJhbGFcIiwgXCJTYXJpbmFcIiwgXCJTYXJwYW5jaFwiLCBcIlNhdGlzZnlcIiwgXCJTY2FkYVwiLCBcIlNjaGVoZXJhemFkZVwiLCBcIlNjaG9vbGJlbGxcIiwgXCJTZWF3ZWVkIFNjcmlwdFwiLCBcIlNldmlsbGFuYVwiLCBcIlNleW1vdXIgT25lXCIsIFwiU2hhZG93cyBJbnRvIExpZ2h0XCIsIFwiU2hhZG93cyBJbnRvIExpZ2h0IFR3b1wiLCBcIlNoYW50aVwiLCBcIlNoYXJlXCIsIFwiU2hhcmUgVGVjaFwiLCBcIlNoYXJlIFRlY2ggTW9ub1wiLCBcIlNob2p1bWFydVwiLCBcIlNob3J0IFN0YWNrXCIsIFwiU2llbXJlYXBcIiwgXCJTaWdtYXIgT25lXCIsIFwiU2lnbmlrYVwiLCBcIlNpZ25pa2EgTmVnYXRpdmVcIiwgXCJTaW1vbmV0dGFcIiwgXCJTaW50b255XCIsIFwiU2lyaW4gU3RlbmNpbFwiLCBcIlNpeCBDYXBzXCIsIFwiU2tyYW5qaVwiLCBcIlNsYWJvIDEzcHhcIiwgXCJTbGFibyAyN3B4XCIsIFwiU2xhY2tleVwiLCBcIlNtb2t1bVwiLCBcIlNteXRoZVwiLCBcIlNuaWdsZXRcIiwgXCJTbmlwcGV0XCIsIFwiU25vd2J1cnN0IE9uZVwiLCBcIlNvZmFkaSBPbmVcIiwgXCJTb2ZpYVwiLCBcIlNvbnNpZSBPbmVcIiwgXCJTb3J0cyBNaWxsIEdvdWR5XCIsIFwiU291cmNlIENvZGUgUHJvXCIsIFwiU291cmNlIFNhbnMgUHJvXCIsIFwiU291cmNlIFNlcmlmIFByb1wiLCBcIlNwZWNpYWwgRWxpdGVcIiwgXCJTcGljeSBSaWNlXCIsIFwiU3Bpbm5ha2VyXCIsIFwiU3BpcmF4XCIsIFwiU3F1YWRhIE9uZVwiLCBcIlNyZWUgS3J1c2huYWRldmFyYXlhXCIsIFwiU3RhbGVtYXRlXCIsIFwiU3RhbGluaXN0IE9uZVwiLCBcIlN0YXJkb3MgU3RlbmNpbFwiLCBcIlN0aW50IFVsdHJhIENvbmRlbnNlZFwiLCBcIlN0aW50IFVsdHJhIEV4cGFuZGVkXCIsIFwiU3Rva2VcIiwgXCJTdHJhaXRcIiwgXCJTdWUgRWxsZW4gRnJhbmNpc2NvXCIsIFwiU3VtYW5hXCIsIFwiU3Vuc2hpbmV5XCIsIFwiU3VwZXJtZXJjYWRvIE9uZVwiLCBcIlN1cmFcIiwgXCJTdXJhbm5hXCIsIFwiU3VyYXZhcmFtXCIsIFwiU3V3YW5uYXBodW1cIiwgXCJTd2Fua3kgYW5kIE1vbyBNb29cIiwgXCJTeW5jb3BhdGVcIiwgXCJUYW5nZXJpbmVcIiwgXCJUYXByb21cIiwgXCJUYXVyaVwiLCBcIlRla29cIiwgXCJUZWxleFwiLCBcIlRlbmFsaSBSYW1ha3Jpc2huYVwiLCBcIlRlbm9yIFNhbnNcIiwgXCJUZXh0IE1lIE9uZVwiLCBcIlRoZSBHaXJsIE5leHQgRG9vclwiLCBcIlRpZW5uZVwiLCBcIlRpbGxhbmFcIiwgXCJUaW1tYW5hXCIsIFwiVGlub3NcIiwgXCJUaXRhbiBPbmVcIiwgXCJUaXRpbGxpdW0gV2ViXCIsIFwiVHJhZGUgV2luZHNcIiwgXCJUcm9jY2hpXCIsIFwiVHJvY2h1dFwiLCBcIlRyeWtrZXJcIiwgXCJUdWxwZW4gT25lXCIsIFwiVWJ1bnR1XCIsIFwiVWJ1bnR1IENvbmRlbnNlZFwiLCBcIlVidW50dSBNb25vXCIsIFwiVWx0cmFcIiwgXCJVbmNpYWwgQW50aXF1YVwiLCBcIlVuZGVyZG9nXCIsIFwiVW5pY2EgT25lXCIsIFwiVW5pZnJha3R1ckNvb2tcIiwgXCJVbmlmcmFrdHVyTWFndW50aWFcIiwgXCJVbmtlbXB0XCIsIFwiVW5sb2NrXCIsIFwiVW5uYVwiLCBcIlZUMzIzXCIsIFwiVmFtcGlybyBPbmVcIiwgXCJWYXJlbGFcIiwgXCJWYXJlbGEgUm91bmRcIiwgXCJWYXN0IFNoYWRvd1wiLCBcIlZlc3BlciBMaWJyZVwiLCBcIlZpYnVyXCIsIFwiVmlkYWxva2FcIiwgXCJWaWdhXCIsIFwiVm9jZXNcIiwgXCJWb2xraG92XCIsIFwiVm9sbGtvcm5cIiwgXCJWb2x0YWlyZVwiLCBcIldhaXRpbmcgZm9yIHRoZSBTdW5yaXNlXCIsIFwiV2FsbHBvZXRcIiwgXCJXYWx0ZXIgVHVybmNvYXRcIiwgXCJXYXJuZXNcIiwgXCJXZWxsZmxlZXRcIiwgXCJXZW5keSBPbmVcIiwgXCJXaXJlIE9uZVwiLCBcIldvcmsgU2Fuc1wiLCBcIllhbm9uZSBLYWZmZWVzYXR6XCIsIFwiWWFudHJhbWFuYXZcIiwgXCJZZWxsb3d0YWlsXCIsIFwiWWVzZXZhIE9uZVwiLCBcIlllc3RlcnllYXJcIiwgXCJaZXlhZGFcIl07XG5cbn0pLmNhbGwodGhpcyk7XG4iLCJpbXBvcnQge2FwcGx5LCBhcHBseUJhY2tncm91bmQsIGFwcGx5U3R5bGV9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgc3R5bGVmdW5jdGlvbiBmcm9tICcuL3N0eWxlZnVuY3Rpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGFwcGx5OiBhcHBseSxcclxuICBhcHBseUJhY2tncm91bmQ6IGFwcGx5QmFja2dyb3VuZCxcclxuICBhcHBseVN0eWxlOiBhcHBseVN0eWxlLFxyXG4gIHN0eWxlZnVuY3Rpb246IHN0eWxlZnVuY3Rpb25cclxufTtcclxuIiwiLypcclxub2wtbWFwYm94LXN0eWxlIC0gVXNlIE1hcGJveCBTdHlsZSBvYmplY3RzIHdpdGggT3BlbkxheWVyc1xyXG5Db3B5cmlnaHQgMjAxNi1wcmVzZW50IEJvdW5kbGVzcyBTcGF0aWFsLCBJbmMuXHJcbkxpY2Vuc2U6IGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ib3VuZGxlc3NnZW8vb2wtbWFwYm94LWdsLXN0eWxlL21hc3Rlci9MSUNFTlNFXHJcbiovXHJcblxyXG5pbXBvcnQgU3R5bGUgZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xyXG5pbXBvcnQgRmlsbCBmcm9tICdvbC9zdHlsZS9GaWxsJztcclxuaW1wb3J0IFN0cm9rZSBmcm9tICdvbC9zdHlsZS9TdHJva2UnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICdvbC9zdHlsZS9JY29uJztcclxuaW1wb3J0IFRleHQgZnJvbSAnb2wvc3R5bGUvVGV4dCc7XHJcbmltcG9ydCBDaXJjbGUgZnJvbSAnb2wvc3R5bGUvQ2lyY2xlJztcclxuaW1wb3J0IFBvaW50IGZyb20gJ29sL2dlb20vUG9pbnQnO1xyXG5pbXBvcnQgZGVyZWZMYXllcnMgZnJvbSAnQG1hcGJveC9tYXBib3gtZ2wtc3R5bGUtc3BlYy9kZXJlZic7XHJcbmltcG9ydCBnbGZ1biBmcm9tICdAbWFwYm94L21hcGJveC1nbC1zdHlsZS1zcGVjL2Z1bmN0aW9uJztcclxuaW1wb3J0IGNyZWF0ZUZpbHRlciBmcm9tICdAbWFwYm94L21hcGJveC1nbC1zdHlsZS1zcGVjL2ZlYXR1cmVfZmlsdGVyJztcclxuaW1wb3J0IG1iMmNzcyBmcm9tICdtYXBib3gtdG8tY3NzLWZvbnQnO1xyXG5pbXBvcnQge1xyXG4gIGRlZzJyYWQsXHJcbiAgZ2V0Wm9vbUZvclJlc29sdXRpb25cclxufSBmcm9tICcuL3V0aWwnO1xyXG5cclxuY29uc3QgZnVuY3Rpb25UeXBlcyA9IHtcclxuICAnbGluZS1taXRlci1saW1pdCc6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICdmaWxsLW9wYWNpdHknOiAnaW50ZXJwb2xhdGVkJyxcclxuICAnbGluZS1vcGFjaXR5JzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ2xpbmUtd2lkdGgnOiAnaW50ZXJwb2xhdGVkJyxcclxuICAndGV4dC1oYWxvLXdpZHRoJzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ3RleHQtbWF4LXdpZHRoJzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ3RleHQtb2Zmc2V0JzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ3RleHQtb3BhY2l0eSc6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICd0ZXh0LXJvdGF0ZSc6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICd0ZXh0LXNpemUnOiAnaW50ZXJwb2xhdGVkJyxcclxuICAnaWNvbi1vcGFjaXR5JzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ2ljb24tcm90YXRlJzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ2ljb24tYW5jaG9yJzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ2ljb24tb2Zmc2V0JzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ2ljb24tdHJhbnNsYXRlJzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ2ljb24tdHJhbnNsYXRlLWFuY2hvcic6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICdpY29uLXNpemUnOiAnaW50ZXJwb2xhdGVkJyxcclxuICAnaWNvbi1jb2xvcic6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICdjaXJjbGUtcmFkaXVzJzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ2NpcmNsZS1vcGFjaXR5JzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ2NpcmNsZS1zdHJva2Utb3BhY2l0eSc6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICdjaXJjbGUtc3Ryb2tlLXdpZHRoJzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ2NpcmNsZS1jb2xvcic6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICdjaXJjbGUtc3Ryb2tlLWNvbG9yJzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ3RleHQtaGFsby1jb2xvcic6ICdpbnRlcnBvbGF0ZWQnLFxyXG4gICd0ZXh0LWNvbG9yJzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ2xpbmUtY29sb3InOiAnaW50ZXJwb2xhdGVkJyxcclxuICAnZmlsbC1vdXRsaW5lLWNvbG9yJzogJ2ludGVycG9sYXRlZCcsXHJcbiAgJ2ZpbGwtY29sb3InOiAnaW50ZXJwb2xhdGVkJyxcclxuICAnaWNvbi1pbWFnZSc6ICdwaWVjZXdpc2UtY29uc3RhbnQnLFxyXG4gICdsaW5lLWNhcCc6ICdwaWVjZXdpc2UtY29uc3RhbnQnLFxyXG4gICdsaW5lLWpvaW4nOiAncGllY2V3aXNlLWNvbnN0YW50JyxcclxuICAnbGluZS1kYXNoYXJyYXknOiAncGllY2V3aXNlLWNvbnN0YW50JyxcclxuICAnc3ltYm9sLXBsYWNlbWVudCc6ICdwaWVjZXdpc2UtY29uc3RhbnQnLFxyXG4gICd0ZXh0LWFuY2hvcic6ICdwaWVjZXdpc2UtY29uc3RhbnQnLFxyXG4gICd0ZXh0LWZpZWxkJzogJ3BpZWNld2lzZS1jb25zdGFudCcsXHJcbiAgJ3RleHQtZm9udCc6ICdwaWVjZXdpc2UtY29uc3RhbnQnXHJcbn07XHJcblxyXG5jb25zdCBkZWZhdWx0cyA9IHtcclxuICAnZmlsbC1vcGFjaXR5JzogMSxcclxuICAnbGluZS1jYXAnOiAnYnV0dCcsXHJcbiAgJ2xpbmUtam9pbic6ICdtaXRlcicsXHJcbiAgJ2xpbmUtbWl0ZXItbGltaXQnOiAyLFxyXG4gICdsaW5lLW9wYWNpdHknOiAxLFxyXG4gICdsaW5lLXdpZHRoJzogMSxcclxuICAnc3ltYm9sLXBsYWNlbWVudCc6ICdwb2ludCcsXHJcbiAgJ3RleHQtYW5jaG9yJzogJ2NlbnRlcicsXHJcbiAgJ3RleHQtY29sb3InOiAnIzAwMDAwMCcsXHJcbiAgJ3RleHQtZm9udCc6IFsnT3BlbiBTYW5zIFJlZ3VsYXInLCAnQXJpYWwgVW5pY29kZSBNUyBSZWd1bGFyJ10sXHJcbiAgJ3RleHQtaGFsby1jb2xvcic6ICdyZ2JhKDAsIDAsIDAsIDApJyxcclxuICAndGV4dC1oYWxvLXdpZHRoJzogMCxcclxuICAndGV4dC1tYXgtd2lkdGgnOiAxMCxcclxuICAndGV4dC1vZmZzZXQnOiBbMCwgMF0sXHJcbiAgJ3RleHQtdHJhbnNsYXRlJzogWzAsIDBdLFxyXG4gICd0ZXh0LW9wYWNpdHknOiAxLFxyXG4gICd0ZXh0LXJvdGF0ZSc6IDAsXHJcbiAgJ3RleHQtc2l6ZSc6IDE2LFxyXG4gICdpY29uLW9wYWNpdHknOiAxLFxyXG4gICdpY29uLXJvdGF0ZSc6IDAsXHJcbiAgJ2ljb24tb2Zmc2V0JzogWzAsIDBdLFxyXG4gICdpY29uLXRyYW5zbGF0ZSc6IFswLCAwXSxcclxuICAnaWNvbi10cmFuc2xhdGUtYW5jaG9yJzogJ21hcCcsXHJcbiAgJ2ljb24tYW5jaG9yJzogJ2NlbnRlcicsXHJcbiAgJ2ljb24tc2l6ZSc6IDEsXHJcbiAgJ2NpcmNsZS1jb2xvcic6ICcjMDAwMDAwJyxcclxuICAnY2lyY2xlLXN0cm9rZS1jb2xvcic6ICcjMDAwMDAwJyxcclxuICAnY2lyY2xlLW9wYWNpdHknOiAxLFxyXG4gICdjaXJjbGUtc3Ryb2tlLW9wYWNpdHknOiAxLFxyXG4gICdjaXJjbGUtc3Ryb2tlLXdpZHRoJzogMFxyXG59O1xyXG5cclxuY29uc3QgdHlwZXMgPSB7XHJcbiAgJ1BvaW50JzogMSxcclxuICAnTXVsdGlQb2ludCc6IDEsXHJcbiAgJ0xpbmVTdHJpbmcnOiAyLFxyXG4gICdNdWx0aUxpbmVTdHJpbmcnOiAyLFxyXG4gICdQb2x5Z29uJzogMyxcclxuICAnTXVsdGlQb2x5Z29uJzogM1xyXG59O1xyXG5cclxuY29uc3QgZnVuY3Rpb25DYWNoZSA9IHt9O1xyXG5cclxuZnVuY3Rpb24gZ2V0VmFsdWUobGF5ZXJJZCwgbGF5b3V0T3JQYWludCwgcHJvcGVydHksIHpvb20sIHByb3BlcnRpZXMpIHtcclxuICBpZiAoIWZ1bmN0aW9uQ2FjaGVbbGF5ZXJJZF0pIHtcclxuICAgIGZ1bmN0aW9uQ2FjaGVbbGF5ZXJJZF0gPSB7fTtcclxuICB9XHJcbiAgY29uc3QgZnVuY3Rpb25zID0gZnVuY3Rpb25DYWNoZVtsYXllcklkXTtcclxuICBpZiAoIWZ1bmN0aW9uc1twcm9wZXJ0eV0pIHtcclxuICAgIGxldCB2YWx1ZSA9IGxheW91dE9yUGFpbnRbcHJvcGVydHldO1xyXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdmFsdWUgPSBkZWZhdWx0c1twcm9wZXJ0eV07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbnNbcHJvcGVydHldID0gZ2xmdW4odmFsdWUsIHtcclxuICAgICAgZnVuY3Rpb246IGZ1bmN0aW9uVHlwZXNbcHJvcGVydHldLFxyXG4gICAgICB0eXBlOiBwcm9wZXJ0eS5pbmRleE9mKCdjb2xvcicpICE9PSAtMSA/ICdjb2xvcicgOiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgdmFsdWUuc3RvcHMgJiYgdHlwZW9mIHZhbHVlLnN0b3BzWzBdWzBdID09ICdudW1iZXInID8gJ251bWJlcicgOiB1bmRlZmluZWRcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gZnVuY3Rpb25zW3Byb3BlcnR5XSh6b29tLCBwcm9wZXJ0aWVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY292ZXJ0SWNvbkFuY2hvcihpY29uQW5jaG9yKSB7XHJcbiAgbGV0IGFuY2hvck9mZnNldCA9IFswLjUsIDAuNV07XHJcbiAgaWYgKFsndG9wLWxlZnQnLCAndG9wLXJpZ2h0JywgJ2JvdHRvbS1sZWZ0JywgJ2JvdHRvbS1yaWdodCddLmluY2x1ZGVzKGljb25BbmNob3IpKSB7XHJcbiAgICBhbmNob3JPZmZzZXQgPSBbMCwgMF07XHJcbiAgfVxyXG4gIGlmIChpY29uQW5jaG9yID09PSAnbGVmdCcpIHtcclxuICAgIGljb25BbmNob3IgPSAndG9wLWxlZnQnO1xyXG4gICAgYW5jaG9yT2Zmc2V0ID0gWzAsIDAuNV07XHJcbiAgfVxyXG4gIGlmIChpY29uQW5jaG9yID09PSAncmlnaHQnKSB7XHJcbiAgICBpY29uQW5jaG9yID0gJ3RvcC1sZWZ0JztcclxuICAgIGFuY2hvck9mZnNldCA9IFsxLCAwLjVdO1xyXG4gIH1cclxuICBpZiAoaWNvbkFuY2hvciA9PT0gJ2JvdHRvbScpIHtcclxuICAgIGljb25BbmNob3IgPSAndG9wLWxlZnQnO1xyXG4gICAgYW5jaG9yT2Zmc2V0ID0gWzAuNSwgMV07XHJcbiAgfVxyXG4gIGlmIChpY29uQW5jaG9yID09PSAndG9wJykge1xyXG4gICAgaWNvbkFuY2hvciA9ICd0b3AtbGVmdCc7XHJcbiAgICBhbmNob3JPZmZzZXQgPSBbMC41LCAwXTtcclxuICB9XHJcbiAgLy9jZW50ZXJcclxuICByZXR1cm4ge1xyXG4gICAgYW5jaG9yT2Zmc2V0OiBhbmNob3JPZmZzZXQsXHJcbiAgICBpY29uQW5jaG9yOiBpY29uQW5jaG9yXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgZm9udE1hcCA9IHt9O1xyXG5cclxuZnVuY3Rpb24gY2hvb3NlRm9udChmb250cywgYXZhaWxhYmxlRm9udHMpIHtcclxuICBpZiAoZm9udE1hcFtmb250c10pIHtcclxuICAgIHJldHVybiBmb250TWFwW2ZvbnRzXTtcclxuICB9XHJcbiAgaWYgKGF2YWlsYWJsZUZvbnRzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBmb250cy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XHJcbiAgICAgIGNvbnN0IGZvbnQgPSBmb250c1tpXTtcclxuICAgICAgaWYgKGF2YWlsYWJsZUZvbnRzLmluZGV4T2YoZm9udCkgIT0gLTEpIHtcclxuICAgICAgICBmb250TWFwW2ZvbnRzXSA9IGZvbnQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm9udE1hcFtmb250c10pIHtcclxuICAgICAgLy8gZmFsbGJhY2sgZm9udFxyXG4gICAgICBmb250TWFwW2ZvbnRzXSA9IGZvbnRzW2ZvbnRzLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBmb250TWFwW2ZvbnRzXSA9IGZvbnRzWzBdO1xyXG4gIH1cclxuICByZXR1cm4gZm9udE1hcFtmb250c107XHJcbn1cclxuXHJcbmNvbnN0IGZpbHRlckNhY2hlID0ge307XHJcblxyXG5mdW5jdGlvbiBldmFsdWF0ZUZpbHRlcihsYXllcklkLCBmaWx0ZXIsIGZlYXR1cmUpIHtcclxuICBpZiAoIShsYXllcklkIGluIGZpbHRlckNhY2hlKSkge1xyXG4gICAgZmlsdGVyQ2FjaGVbbGF5ZXJJZF0gPSBjcmVhdGVGaWx0ZXIoZmlsdGVyKTtcclxuICB9XHJcbiAgcmV0dXJuIGZpbHRlckNhY2hlW2xheWVySWRdKGZlYXR1cmUpO1xyXG59XHJcblxyXG5jb25zdCBjb2xvckNhY2hlID0ge307XHJcblxyXG5mdW5jdGlvbiBjb2xvcldpdGhPcGFjaXR5KGNvbG9yLCBvcGFjaXR5KSB7XHJcbiAgaWYgKGNvbG9yICYmIG9wYWNpdHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgbGV0IGNvbG9yRGF0YSA9IGNvbG9yQ2FjaGVbY29sb3JdO1xyXG4gICAgaWYgKCFjb2xvckRhdGEpIHtcclxuICAgICAgY29sb3JDYWNoZVtjb2xvcl0gPSBjb2xvckRhdGEgPSB7XHJcbiAgICAgICAgY29sb3I6IFtcclxuICAgICAgICAgIGNvbG9yWzBdICogMjU1IC8gY29sb3JbM10sXHJcbiAgICAgICAgICBjb2xvclsxXSAqIDI1NSAvIGNvbG9yWzNdLFxyXG4gICAgICAgICAgY29sb3JbMl0gKiAyNTUgLyBjb2xvclszXSxcclxuICAgICAgICAgIGNvbG9yWzNdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcGFjaXR5OiBjb2xvclszXVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29sb3IgPSBjb2xvckRhdGEuY29sb3I7XHJcbiAgICBjb2xvclszXSA9IGNvbG9yRGF0YS5vcGFjaXR5ICogb3BhY2l0eTtcclxuICAgIGlmIChjb2xvclszXSA9PT0gMCkge1xyXG4gICAgICBjb2xvciA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGNvbG9yO1xyXG59XHJcblxyXG5jb25zdCB0ZW1wbGF0ZVJlZ0V4ID0gL14oW15dKilcXHsoLiopXFx9KFteXSopJC87XHJcblxyXG5mdW5jdGlvbiBmcm9tVGVtcGxhdGUodGV4dCwgcHJvcGVydGllcykge1xyXG4gIGxldCBwYXJ0cztcclxuICBkbyB7XHJcbiAgICBwYXJ0cyA9IHRleHQubWF0Y2godGVtcGxhdGVSZWdFeCk7XHJcbiAgICBpZiAocGFydHMpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0aWVzW3BhcnRzWzJdXSB8fCAnJztcclxuICAgICAgdGV4dCA9IHBhcnRzWzFdICsgdmFsdWUgKyBwYXJ0c1szXTtcclxuICAgIH1cclxuICB9IHdoaWxlIChwYXJ0cyk7XHJcbiAgcmV0dXJuIHRleHQ7XHJcbn1cclxuXHJcbmNvbnN0IGVtcHR5T2JqID0ge307XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHN0eWxlIGZ1bmN0aW9uIGZyb20gdGhlIGBnbFN0eWxlYCBvYmplY3QgZm9yIGFsbCBsYXllcnMgdGhhdCB1c2VcclxuICogdGhlIHNwZWNpZmllZCBgc291cmNlYCwgd2hpY2ggbmVlZHMgdG8gYmUgYSBgXCJ0eXBlXCI6IFwidmVjdG9yXCJgIG9yXHJcbiAqIGBcInR5cGVcIjogXCJnZW9qc29uXCJgIHNvdXJjZSBhbmQgYXBwbGllcyBpdCB0byB0aGUgc3BlY2lmaWVkIE9wZW5MYXllcnMgbGF5ZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2wubGF5ZXIuVmVjdG9yfG9sLmxheWVyLlZlY3RvclRpbGV9IG9sTGF5ZXIgT3BlbkxheWVycyBsYXllciB0b1xyXG4gKiBhcHBseSB0aGUgc3R5bGUgdG8uIEluIGFkZGl0aW9uIHRvIHRoZSBzdHlsZSwgdGhlIGxheWVyIHdpbGwgZ2V0IHR3b1xyXG4gKiBwcm9wZXJ0aWVzOiBgbWFwYm94LXNvdXJjZWAgd2lsbCBiZSB0aGUgYGlkYCBvZiB0aGUgYGdsU3R5bGVgJ3Mgc291cmNlIHVzZWRcclxuICogZm9yIHRoZSBsYXllciwgYW5kIGBtYXBib3gtbGF5ZXJzYCB3aWxsIGJlIGFuIGFycmF5IG9mIHRoZSBgaWRgcyBvZiB0aGVcclxuICogYGdsU3R5bGVgJ3MgbGF5ZXJzLlxyXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGdsU3R5bGUgTWFwYm94IFN0eWxlIG9iamVjdC5cclxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8c3RyaW5nPn0gc291cmNlIGBzb3VyY2VgIGtleSBvciBhbiBhcnJheSBvZiBsYXllciBgaWRgc1xyXG4gKiBmcm9tIHRoZSBNYXBib3ggU3R5bGUgb2JqZWN0LiBXaGVuIGEgYHNvdXJjZWAga2V5IGlzIHByb3ZpZGVkLCBhbGwgbGF5ZXJzIGZvclxyXG4gKiB0aGUgc3BlY2lmaWVkIHNvdXJjZSB3aWxsIGJlIGluY2x1ZGVkIGluIHRoZSBzdHlsZSBmdW5jdGlvbi4gV2hlbiBsYXllciBgaWRgc1xyXG4gKiBhcmUgcHJvdmlkZWQsIHRoZXkgbXVzdCBiZSBmcm9tIGxheWVycyB0aGF0IHVzZSB0aGUgc2FtZSBzb3VyY2UuXHJcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW3Jlc29sdXRpb25zPVs3ODI3MS41MTY5NjQwMjA0OCwgMzkxMzUuNzU4NDgyMDEwMjQsXHJcbiAqIDE5NTY3Ljg3OTI0MTAwNTEyLCA5NzgzLjkzOTYyMDUwMjU2LCA0ODkxLjk2OTgxMDI1MTI4LCAyNDQ1Ljk4NDkwNTEyNTY0LFxyXG4gKiAxMjIyLjk5MjQ1MjU2MjgyLCA2MTEuNDk2MjI2MjgxNDEsIDMwNS43NDgxMTMxNDA3MDUsIDE1Mi44NzQwNTY1NzAzNTI1LFxyXG4gKiA3Ni40MzcwMjgyODUxNzYyNSwgMzguMjE4NTE0MTQyNTg4MTMsIDE5LjEwOTI1NzA3MTI5NDA2MywgOS41NTQ2Mjg1MzU2NDcwMzIsXHJcbiAqIDQuNzc3MzE0MjY3ODIzNTE2LCAyLjM4ODY1NzEzMzkxMTc1OCwgMS4xOTQzMjg1NjY5NTU4NzksIDAuNTk3MTY0MjgzNDc3OTM5NSxcclxuICogMC4yOTg1ODIxNDE3Mzg5Njk3NCwgMC4xNDkyOTEwNzA4Njk0ODQ4NywgMC4wNzQ2NDU1MzU0MzQ3NDI0NF1dXHJcbiAqIFJlc29sdXRpb25zIGZvciBtYXBwaW5nIHJlc29sdXRpb24gdG8gem9vbSBsZXZlbC5cclxuICogQHBhcmFtIHtPYmplY3R9IFtzcHJpdGVEYXRhPXVuZGVmaW5lZF0gU3ByaXRlIGRhdGEgZnJvbSB0aGUgdXJsIHNwZWNpZmllZCBpblxyXG4gKiB0aGUgTWFwYm94IFN0eWxlIG9iamVjdCdzIGBzcHJpdGVgIHByb3BlcnR5LiBPbmx5IHJlcXVpcmVkIGlmIGEgYHNwcml0ZWBcclxuICogcHJvcGVydHkgaXMgc3BlY2lmaWVkIGluIHRoZSBNYXBib3ggU3R5bGUgb2JqZWN0LlxyXG4gKiBAcGFyYW0ge09iamVjdH0gW3Nwcml0ZUltYWdlVXJsPXVuZGVmaW5lZF0gU3ByaXRlIGltYWdlIHVybCBmb3IgdGhlIHNwcml0ZVxyXG4gKiBzcGVjaWZpZWQgaW4gdGhlIE1hcGJveCBTdHlsZSBvYmplY3QncyBgc3ByaXRlYCBwcm9wZXJ0eS4gT25seSByZXF1aXJlZCBpZiBhXHJcbiAqIGBzcHJpdGVgIHByb3BlcnR5IGlzIHNwZWNpZmllZCBpbiB0aGUgTWFwYm94IFN0eWxlIG9iamVjdC5cclxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBbZm9udHM9dW5kZWZpbmVkXSBBcnJheSBvZiBhdmFpbGFibGUgZm9udHMsIHVzaW5nIHRoZVxyXG4gKiBzYW1lIGZvbnQgbmFtZXMgYXMgdGhlIE1hcGJveCBTdHlsZSBvYmplY3QuIElmIG5vdCBwcm92aWRlZCwgdGhlIHN0eWxlXHJcbiAqIGZ1bmN0aW9uIHdpbGwgYWx3YXlzIHVzZSB0aGUgZmlyc3QgZm9udCBmcm9tIHRoZSBmb250IGFycmF5LlxyXG4gKiBAcmV0dXJuIHtvbC5zdHlsZS5TdHlsZUZ1bmN0aW9ufSBTdHlsZSBmdW5jdGlvbiBmb3IgdXNlIGluXHJcbiAqIGBvbC5sYXllci5WZWN0b3JgIG9yIGBvbC5sYXllci5WZWN0b3JUaWxlYC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChvbExheWVyLCBnbFN0eWxlLCBzb3VyY2UsIHJlc29sdXRpb25zLCBzcHJpdGVEYXRhLCBzcHJpdGVJbWFnZVVybCxzcHJpdGVJbWFnZSwgZm9udHMpIHtcclxuICBpZiAoIXJlc29sdXRpb25zKSB7XHJcbiAgICByZXNvbHV0aW9ucyA9IFtdO1xyXG4gICAgZm9yIChsZXQgcmVzID0gNzgyNzEuNTE2OTY0MDIwNDg7IHJlc29sdXRpb25zLmxlbmd0aCA8IDIxOyByZXMgLz0gMikge1xyXG4gICAgICByZXNvbHV0aW9ucy5wdXNoKHJlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgZ2xTdHlsZSA9PSAnc3RyaW5nJykge1xyXG4gICAgZ2xTdHlsZSA9IEpTT04ucGFyc2UoZ2xTdHlsZSk7XHJcbiAgfVxyXG4gIGlmIChnbFN0eWxlLnZlcnNpb24gIT0gOCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbFN0eWxlIHZlcnNpb24gOCByZXF1aXJlZC4nKTtcclxuICB9XHJcblxyXG4gIGxldCBzcHJpdGVJbWdTaXplO1xyXG4gIGlmIChzcHJpdGVJbWFnZVVybCAmJiAhc3ByaXRlSW1hZ2UpIHtcclxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XHJcbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBzcHJpdGVJbWFnZSA9IGltZztcclxuICAgICAgc3ByaXRlSW1nU2l6ZSA9IFtpbWcud2lkdGgsIGltZy5oZWlnaHRdO1xyXG4gICAgICBvbExheWVyLmNoYW5nZWQoKTtcclxuICAgIH07XHJcbiAgICBpbWcuc3JjID0gc3ByaXRlSW1hZ2VVcmw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjdHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdDQU5WQVMnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIGNvbnN0IG1lYXN1cmVDYWNoZSA9IHt9O1xyXG5cclxuICBmdW5jdGlvbiB3cmFwVGV4dCh0ZXh0LCBmb250LCBlbSkge1xyXG4gICAgY29uc3Qga2V5ID0gZW0gKyAnLCcgKyBmb250ICsgJywnICsgdGV4dDtcclxuICAgIGxldCB3cmFwcGVkVGV4dCA9IG1lYXN1cmVDYWNoZVtrZXldO1xyXG4gICAgaWYgKCF3cmFwcGVkVGV4dCkge1xyXG4gICAgICBjdHguZm9udCA9IGZvbnQ7XHJcbiAgICAgIGNvbnN0IG9uZUVtID0gY3R4Lm1lYXN1cmVUZXh0KCdNJykud2lkdGg7XHJcbiAgICAgIGNvbnN0IHdpZHRoID0gb25lRW0gKiBlbTtcclxuICAgICAgY29uc3Qgd29yZHMgPSB0ZXh0LnNwbGl0KCcgJyk7XHJcbiAgICAgIGxldCBsaW5lID0gJyc7XHJcbiAgICAgIGNvbnN0IGxpbmVzID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IHdvcmRzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcclxuICAgICAgICBjb25zdCB3b3JkID0gd29yZHNbaV07XHJcbiAgICAgICAgaWYgKChjdHgubWVhc3VyZVRleHQobGluZSArIHdvcmQpLndpZHRoIDw9IHdpZHRoKSkge1xyXG4gICAgICAgICAgbGluZSArPSAobGluZSA/ICcgJyA6ICcnKSArIHdvcmQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChsaW5lKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsaW5lID0gd29yZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxpbmUpIHtcclxuICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xyXG4gICAgICB9XHJcbiAgICAgIG1lYXN1cmVDYWNoZVtrZXldID0gd3JhcHBlZFRleHQgPSBsaW5lcy5qb2luKCdcXG4nKTtcclxuICAgIH1cclxuICAgIHJldHVybiB3cmFwcGVkVGV4dDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFsbExheWVycyA9IGRlcmVmTGF5ZXJzKGdsU3R5bGUubGF5ZXJzKTtcclxuXHJcbiAgY29uc3QgbGF5ZXJzQnlTb3VyY2VMYXllciA9IHt9O1xyXG4gIGNvbnN0IG1hcGJveExheWVycyA9IFtdO1xyXG4gIGxldCBtYXBib3hTb3VyY2U7XHJcbiAgZm9yIChsZXQgaSA9IDAsIGlpID0gYWxsTGF5ZXJzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcclxuICAgIGNvbnN0IGxheWVyID0gYWxsTGF5ZXJzW2ldO1xyXG4gICAgY29uc3QgbGF5ZXJJZCA9IGxheWVyLmlkO1xyXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgPT0gJ3N0cmluZycgJiYgbGF5ZXIuc291cmNlID09IHNvdXJjZSB8fFxyXG4gICAgICBzb3VyY2UuaW5kZXhPZihsYXllcklkKSAhPT0gLTEpIHtcclxuICAgICAgY29uc3Qgc291cmNlTGF5ZXIgPSBsYXllclsnc291cmNlLWxheWVyJ107XHJcbiAgICAgIGlmICghbWFwYm94U291cmNlKSB7XHJcbiAgICAgICAgbWFwYm94U291cmNlID0gbGF5ZXIuc291cmNlO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBsYXllcnMgPSBsYXllcnNCeVNvdXJjZUxheWVyW3NvdXJjZUxheWVyXTtcclxuICAgICAgaWYgKCFsYXllcnMpIHtcclxuICAgICAgICBsYXllcnMgPSBsYXllcnNCeVNvdXJjZUxheWVyW3NvdXJjZUxheWVyXSA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGxheWVycy5wdXNoKHtcclxuICAgICAgICBsYXllcjogbGF5ZXIsXHJcbiAgICAgICAgaW5kZXg6IGlcclxuICAgICAgfSk7XHJcbiAgICAgIG1hcGJveExheWVycy5wdXNoKGxheWVySWQpO1xyXG4gICAgfVxyXG4gICAgLy8gLy8gVE9ETyByZXZpc2l0IHdoZW4gZGlmZmluZyBnZXRzIGFkZGVkXHJcbiAgICBkZWxldGUgZnVuY3Rpb25DYWNoZVtsYXllcklkXTtcclxuICAgIGRlbGV0ZSBmaWx0ZXJDYWNoZVtsYXllcklkXTtcclxuICB9XHJcbiAgY29uc3QgaWNvbkltYWdlQ2FjaGUgPSB7fTtcclxuXHJcbiAgY29uc3Qgc3R5bGVzID0gW107XHJcbiAgY29uc3QgcGF0dGVybkNhY2hlID0ge307XHJcblxyXG4gIGNvbnN0IHN0eWxlRnVuY3Rpb24gPSBmdW5jdGlvbiAoZmVhdHVyZSwgcmVzb2x1dGlvbikge1xyXG4gICAgY29uc3QgcHJvcGVydGllcyA9IGZlYXR1cmUuZ2V0UHJvcGVydGllcygpO1xyXG4gICAgZmVhdHVyZS5zdHlsZUlkcyA9IGZlYXR1cmUuc3R5bGVJZHMgfHwge307XHJcbiAgICBjb25zdCBsYXllcnMgPSBsYXllcnNCeVNvdXJjZUxheWVyW3Byb3BlcnRpZXMubGF5ZXJdO1xyXG4gICAgaWYgKCFsYXllcnMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHpvb20gPSByZXNvbHV0aW9ucy5pbmRleE9mKHJlc29sdXRpb24pO1xyXG4gICAgaWYgKHpvb20gPT0gLTEpIHtcclxuICAgICAgem9vbSA9IE1hdGgucm91bmQoZ2V0Wm9vbUZvclJlc29sdXRpb24ocmVzb2x1dGlvbiwgcmVzb2x1dGlvbnMpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHR5cGUgPSB0eXBlc1tmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0VHlwZSgpXTtcclxuICAgIGNvbnN0IGYgPSB7XHJcbiAgICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXMsXHJcbiAgICAgIHR5cGU6IHR5cGVcclxuICAgIH07XHJcbiAgICBsZXQgc3R5bGVzTGVuZ3RoID0gLTE7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBsYXllcnMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xyXG4gICAgICBjb25zdCBsYXllckRhdGEgPSBsYXllcnNbaV07XHJcbiAgICAgIGNvbnN0IGxheWVyID0gbGF5ZXJEYXRhLmxheWVyO1xyXG4gICAgICBjb25zdCBsYXllcklkID0gbGF5ZXIuaWQ7XHJcblxyXG4gICAgICBjb25zdCBsYXlvdXQgPSBsYXllci5sYXlvdXQgfHwgZW1wdHlPYmo7XHJcbiAgICAgIGNvbnN0IHBhaW50ID0gbGF5ZXIucGFpbnQgfHwgZW1wdHlPYmo7XHJcbiAgICAgIGlmIChsYXlvdXQudmlzaWJpbGl0eSA9PT0gJ25vbmUnIHx8ICgnbWluem9vbScgaW4gbGF5ZXIgJiYgem9vbSA8IGxheWVyLm1pbnpvb20pIHx8XHJcbiAgICAgICAgKCdtYXh6b29tJyBpbiBsYXllciAmJiB6b29tID49IGxheWVyLm1heHpvb20pKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgZmVhdHVyZS5zdHlsZUlkc1t6b29tXSA9IGZlYXR1cmUuc3R5bGVJZHNbem9vbV0gfHwgW107XHJcbiAgICAgIGNvbnN0IGZpbHRlciA9IGxheWVyLmZpbHRlcjtcclxuICAgICAgbGV0IGljb24sIGljb25JbWc7XHJcbiAgICAgIGlmICghZmlsdGVyIHx8IGV2YWx1YXRlRmlsdGVyKGxheWVySWQsIGZpbHRlciwgZikpIHtcclxuICAgICAgICBsZXQgY29sb3IsIG9wYWNpdHksIGZpbGwsIHN0cm9rZSwgc3Ryb2tlQ29sb3IsIHN0eWxlO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbGF5ZXJEYXRhLmluZGV4O1xyXG4gICAgICAgIGlmICh0eXBlID09IDMpIHtcclxuICAgICAgICAgIG9wYWNpdHkgPSBnZXRWYWx1ZShsYXllcklkLCBwYWludCwgJ2ZpbGwtb3BhY2l0eScsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgaWYgKCdmaWxsLXBhdHRlcm4nIGluIHBhaW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGljb25JbWFnZSA9IGdldFZhbHVlKGxheWVySWQsIHBhaW50LCAnZmlsbC1wYXR0ZXJuJywgem9vbSwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgIGlmIChpY29uSW1hZ2UpIHtcclxuICAgICAgICAgICAgICBpY29uID0gZnJvbVRlbXBsYXRlKGljb25JbWFnZSwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgICAgaWYgKHNwcml0ZUltYWdlICYmIHNwcml0ZURhdGEgJiYgc3ByaXRlRGF0YVtpY29uXSkge1xyXG4gICAgICAgICAgICAgICAgKytzdHlsZXNMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZS5zdHlsZUlkc1t6b29tXS5pbmRleE9mKGxheWVySWQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICBmZWF0dXJlLnN0eWxlSWRzW3pvb21dLnB1c2gobGF5ZXJJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHN0eWxlc1tzdHlsZXNMZW5ndGhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdHlsZSB8fCAhc3R5bGUuZ2V0RmlsbCgpIHx8IHN0eWxlLmdldFN0cm9rZSgpIHx8IHN0eWxlLmdldFRleHQoKSkge1xyXG4gICAgICAgICAgICAgICAgICBzdHlsZSA9IHN0eWxlc1tzdHlsZXNMZW5ndGhdID0gbmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBuZXcgRmlsbCgpXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmlsbCA9IHN0eWxlLmdldEZpbGwoKTtcclxuICAgICAgICAgICAgICAgIHN0eWxlLnNldFpJbmRleChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uX2NhY2hlX2tleSA9IGljb24gKyAnLicgKyBvcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhdHRlcm4gPSBwYXR0ZXJuQ2FjaGVbaWNvbl9jYWNoZV9rZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZUltYWdlRGF0YSA9IHNwcml0ZURhdGFbaWNvbl07XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgICBjYW52YXMud2lkdGggPSBzcHJpdGVJbWFnZURhdGEud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzcHJpdGVJbWFnZURhdGEuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVJbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVJbWFnZURhdGEueCxcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVJbWFnZURhdGEueSxcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVJbWFnZURhdGEud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlSW1hZ2VEYXRhLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlSW1hZ2VEYXRhLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUltYWdlRGF0YS5oZWlnaHRcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgcGF0dGVybiA9IGN0eC5jcmVhdGVQYXR0ZXJuKGNhbnZhcywgJ3JlcGVhdCcpO1xyXG4gICAgICAgICAgICAgICAgICBwYXR0ZXJuQ2FjaGVbaWNvbl9jYWNoZV9rZXldID0gcGF0dGVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpbGwuc2V0Q29sb3IocGF0dGVybik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCdmaWxsLWNvbG9yJyBpbiBwYWludCkge1xyXG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yV2l0aE9wYWNpdHkoZ2V0VmFsdWUobGF5ZXJJZCwgcGFpbnQsICdmaWxsLWNvbG9yJywgem9vbSwgcHJvcGVydGllcyksIG9wYWNpdHkpO1xyXG4gICAgICAgICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICAgICAgICArK3N0eWxlc0xlbmd0aDtcclxuICAgICAgICAgICAgICBpZiAoZmVhdHVyZS5zdHlsZUlkc1t6b29tXS5pbmRleE9mKGxheWVySWQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZS5zdHlsZUlkc1t6b29tXS5wdXNoKGxheWVySWQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBzdHlsZSA9IHN0eWxlc1tzdHlsZXNMZW5ndGhdO1xyXG4gICAgICAgICAgICAgIGlmICghc3R5bGUgfHwgIXN0eWxlLmdldEZpbGwoKSB8fCBzdHlsZS5nZXRTdHJva2UoKSB8fCBzdHlsZS5nZXRUZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlID0gc3R5bGVzW3N0eWxlc0xlbmd0aF0gPSBuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICBmaWxsOiBuZXcgRmlsbCgpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZmlsbCA9IHN0eWxlLmdldEZpbGwoKTtcclxuICAgICAgICAgICAgICBmaWxsLnNldENvbG9yKGNvbG9yKTtcclxuICAgICAgICAgICAgICBzdHlsZS5zZXRaSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgnZmlsbC1vdXRsaW5lLWNvbG9yJyBpbiBwYWludCkge1xyXG4gICAgICAgICAgICAgIHN0cm9rZUNvbG9yID0gY29sb3JXaXRoT3BhY2l0eShnZXRWYWx1ZShsYXllcklkLCBwYWludCwgJ2ZpbGwtb3V0bGluZS1jb2xvcicsIHpvb20sIHByb3BlcnRpZXMpLCBvcGFjaXR5KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgnZmlsbC1hbnRpYWxpYXMnIGluIHBhaW50KSB7XHJcbiAgICAgICAgICAgICAgc3Ryb2tlQ29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3Ryb2tlQ29sb3IpIHtcclxuICAgICAgICAgICAgICArK3N0eWxlc0xlbmd0aDtcclxuICAgICAgICAgICAgICBpZiAoZmVhdHVyZS5zdHlsZUlkc1t6b29tXS5pbmRleE9mKGxheWVySWQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgZmVhdHVyZS5zdHlsZUlkc1t6b29tXS5wdXNoKGxheWVySWQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBzdHlsZSA9IHN0eWxlc1tzdHlsZXNMZW5ndGhdO1xyXG4gICAgICAgICAgICAgIGlmICghc3R5bGUgfHwgIXN0eWxlLmdldFN0cm9rZSgpIHx8IHN0eWxlLmdldEZpbGwoKSB8fCBzdHlsZS5nZXRUZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlID0gc3R5bGVzW3N0eWxlc0xlbmd0aF0gPSBuZXcgU3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICBzdHJva2U6IG5ldyBTdHJva2UoKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHN0cm9rZSA9IHN0eWxlLmdldFN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgIHN0cm9rZS5zZXRMaW5lQ2FwKGRlZmF1bHRzWydsaW5lLWNhcCddKTtcclxuICAgICAgICAgICAgICBzdHJva2Uuc2V0TGluZUpvaW4oZGVmYXVsdHNbJ2xpbmUtam9pbiddKTtcclxuICAgICAgICAgICAgICBzdHJva2Uuc2V0TWl0ZXJMaW1pdChkZWZhdWx0c1snbGluZS1taXRlci1saW1pdCddKTtcclxuICAgICAgICAgICAgICBzdHJva2Uuc2V0Q29sb3Ioc3Ryb2tlQ29sb3IpO1xyXG4gICAgICAgICAgICAgIHN0cm9rZS5zZXRXaWR0aCgxKTtcclxuICAgICAgICAgICAgICBzdHJva2Uuc2V0TGluZURhc2gobnVsbCk7XHJcbiAgICAgICAgICAgICAgc3R5bGUuc2V0WkluZGV4KGluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZSAhPSAxKSB7XHJcbiAgICAgICAgICBjb2xvciA9ICEoJ2xpbmUtcGF0dGVybicgaW4gcGFpbnQpICYmICdsaW5lLWNvbG9yJyBpbiBwYWludCA/XHJcbiAgICAgICAgICAgIGNvbG9yV2l0aE9wYWNpdHkoZ2V0VmFsdWUobGF5ZXJJZCwgcGFpbnQsICdsaW5lLWNvbG9yJywgem9vbSwgcHJvcGVydGllcyksIGdldFZhbHVlKGxheWVySWQsIHBhaW50LCAnbGluZS1vcGFjaXR5Jywgem9vbSwgcHJvcGVydGllcykpIDpcclxuICAgICAgICAgICAgdW5kZWZpbmVkO1xyXG4gICAgICAgICAgY29uc3Qgd2lkdGggPSBnZXRWYWx1ZShsYXllcklkLCBwYWludCwgJ2xpbmUtd2lkdGgnLCB6b29tLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgIGlmIChjb2xvciAmJiB3aWR0aCA+IDApIHtcclxuICAgICAgICAgICAgKytzdHlsZXNMZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChmZWF0dXJlLnN0eWxlSWRzW3pvb21dLmluZGV4T2YobGF5ZXJJZCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgZmVhdHVyZS5zdHlsZUlkc1t6b29tXS5wdXNoKGxheWVySWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0eWxlID0gc3R5bGVzW3N0eWxlc0xlbmd0aF07XHJcbiAgICAgICAgICAgIGlmICghc3R5bGUgfHwgIXN0eWxlLmdldFN0cm9rZSgpIHx8IHN0eWxlLmdldEZpbGwoKSB8fCBzdHlsZS5nZXRUZXh0KCkpIHtcclxuICAgICAgICAgICAgICBzdHlsZSA9IHN0eWxlc1tzdHlsZXNMZW5ndGhdID0gbmV3IFN0eWxlKHtcclxuICAgICAgICAgICAgICAgIHN0cm9rZTogbmV3IFN0cm9rZSgpXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3Ryb2tlID0gc3R5bGUuZ2V0U3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIHN0cm9rZS5zZXRMaW5lQ2FwKGdldFZhbHVlKGxheWVySWQsIGxheW91dCwgJ2xpbmUtY2FwJywgem9vbSwgcHJvcGVydGllcykpO1xyXG4gICAgICAgICAgICBzdHJva2Uuc2V0TGluZUpvaW4oZ2V0VmFsdWUobGF5ZXJJZCwgbGF5b3V0LCAnbGluZS1qb2luJywgem9vbSwgcHJvcGVydGllcykpO1xyXG4gICAgICAgICAgICBzdHJva2Uuc2V0TWl0ZXJMaW1pdChnZXRWYWx1ZShsYXllcklkLCBsYXlvdXQsICdsaW5lLW1pdGVyLWxpbWl0Jywgem9vbSwgcHJvcGVydGllcykpO1xyXG4gICAgICAgICAgICBzdHJva2Uuc2V0Q29sb3IoY29sb3IpO1xyXG4gICAgICAgICAgICBzdHJva2Uuc2V0V2lkdGgod2lkdGgpO1xyXG4gICAgICAgICAgICBzdHJva2Uuc2V0TGluZURhc2gocGFpbnRbJ2xpbmUtZGFzaGFycmF5J10gP1xyXG4gICAgICAgICAgICAgIGdldFZhbHVlKGxheWVySWQsIHBhaW50LCAnbGluZS1kYXNoYXJyYXknLCB6b29tLCBwcm9wZXJ0aWVzKS5tYXAoZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB4ICogd2lkdGg7XHJcbiAgICAgICAgICAgICAgfSkgOiBudWxsKTtcclxuICAgICAgICAgICAgc3R5bGUuc2V0WkluZGV4KGluZGV4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoYXNJbWFnZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCB0ZXh0ID0gbnVsbDtcclxuICAgICAgICBsZXQgc2tpcExhYmVsO1xyXG4gICAgICAgIGlmICgodHlwZSA9PSAxIHx8IHR5cGUgPT0gMikgJiYgJ2ljb24taW1hZ2UnIGluIGxheW91dCkge1xyXG4gICAgICAgICAgY29uc3QgaWNvbkltYWdlID0gZ2V0VmFsdWUobGF5ZXJJZCwgbGF5b3V0LCAnaWNvbi1pbWFnZScsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgaWYgKGljb25JbWFnZSkge1xyXG4gICAgICAgICAgICBpY29uID0gZnJvbVRlbXBsYXRlKGljb25JbWFnZSwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgIGxldCBzdHlsZUdlb20gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGlmIChzcHJpdGVJbWFnZSAmJiBzcHJpdGVEYXRhICYmIHNwcml0ZURhdGFbaWNvbl0pIHtcclxuICAgICAgICAgICAgICBpZiAodHlwZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZW9tID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gb2wgcGFja2FnZSBhbmQgb2wtZGVidWcuanMgb25seVxyXG4gICAgICAgICAgICAgICAgaWYgKGdlb20uZ2V0RmxhdE1pZHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVudCA9IGdlb20uZ2V0RXh0ZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSBNYXRoLnNxcnQoTWF0aC5tYXgoXHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5wb3coKGV4dGVudFsyXSAtIGV4dGVudFswXSkgLyByZXNvbHV0aW9uLCAyKSxcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdygoZXh0ZW50WzNdIC0gZXh0ZW50WzFdKSAvIHJlc29sdXRpb24sIDIpKSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChzaXplID4gMTUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9GSVhNRSBEbyBub3QgaGFyZC1jb2RlIGEgc2l6ZSBvZiAxNTBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZUdlb20gPSBuZXcgUG9pbnQoZ2VvbS5nZXRGbGF0TWlkcG9pbnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHR5cGUgIT09IDIgfHwgc3R5bGVHZW9tKSB7XHJcbiAgICAgICAgICAgICAgICArK3N0eWxlc0xlbmd0aDtcclxuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlLnN0eWxlSWRzW3pvb21dLmluZGV4T2YobGF5ZXJJZCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmUuc3R5bGVJZHNbem9vbV0ucHVzaChsYXllcklkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0eWxlID0gc3R5bGVzW3N0eWxlc0xlbmd0aF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0eWxlIHx8ICFzdHlsZS5nZXRJbWFnZSgpIHx8IHN0eWxlLmdldEZpbGwoKSB8fCBzdHlsZS5nZXRTdHJva2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICBzdHlsZSA9IHN0eWxlc1tzdHlsZXNMZW5ndGhdID0gbmV3IFN0eWxlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZS5zZXRHZW9tZXRyeShzdHlsZUdlb20pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWNvblNpemUgPSBnZXRWYWx1ZShsYXllcklkLCBsYXlvdXQsICdpY29uLXNpemUnLCB6b29tLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGljb25Db2xvciA9IHBhaW50WydpY29uLWNvbG9yJ10gIT09IHVuZGVmaW5lZCA/IGdldFZhbHVlKGxheWVySWQsIHBhaW50LCAnaWNvbi1jb2xvcicsIHpvb20sIHByb3BlcnRpZXMpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGljb25UcmFuc2xhdGUgPSBnZXRWYWx1ZShsYXllcklkLCBwYWludCwgJ2ljb24tdHJhbnNsYXRlJywgem9vbSwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uVHJhbnNsYXRlQW5jaG9yID0gZ2V0VmFsdWUobGF5ZXJJZCwgcGFpbnQsICdpY29uLXRyYW5zbGF0ZS1hbmNob3InLCB6b29tLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGljb25BbmNob3JWYWx1ZSA9IGdldFZhbHVlKGxheWVySWQsIGxheW91dCwgJ2ljb24tYW5jaG9yJywgem9vbSwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uT2Zmc2V0ID0gZ2V0VmFsdWUobGF5ZXJJZCwgbGF5b3V0LCAnaWNvbi1vZmZzZXQnLCB6b29tLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgICAgICAgIGFuY2hvck9mZnNldCxcclxuICAgICAgICAgICAgICAgICAgaWNvbkFuY2hvciA9IGljb25BbmNob3JWYWx1ZVxyXG4gICAgICAgICAgICAgICAgfSA9IGNvdmVydEljb25BbmNob3IoaWNvbkFuY2hvclZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGxldCBpY29uX2NhY2hlX2tleSA9IGljb24gKyAnLicgKyBpY29uU2l6ZSArICcuJyArIGljb25UcmFuc2xhdGUgKyAnLicgKyBpY29uVHJhbnNsYXRlQW5jaG9yICsgJy4nICsgaWNvbkFuY2hvciArICcuJyArIGljb25PZmZzZXQgKyAnLicgKyBhbmNob3JPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWNvbkNvbG9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGljb25fY2FjaGVfa2V5ICs9ICcuJyArIGljb25Db2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGljb25JbWcgPSBpY29uSW1hZ2VDYWNoZVtpY29uX2NhY2hlX2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWljb25JbWcpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlSW1hZ2VEYXRhID0gc3ByaXRlRGF0YVtpY29uXTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHNwcml0ZUltYWdlRGF0YS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHNwcml0ZUltYWdlRGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUltYWdlRGF0YS54LFxyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUltYWdlRGF0YS55LFxyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUltYWdlRGF0YS53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVJbWFnZURhdGEuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVJbWFnZURhdGEud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlSW1hZ2VEYXRhLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoaWNvbkNvbG9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY3V0IG91dCB0aGUgc3ByaXRlIGFuZCBjb2xvciBpdFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yID0gY29sb3JXaXRoT3BhY2l0eShpY29uQ29sb3IsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwLCBjYyA9IGRhdGEuZGF0YS5sZW5ndGg7IGMgPCBjYzsgYyArPSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLmRhdGFbY10gPSBjb2xvclswXTtcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0YVtjICsgMV0gPSBjb2xvclsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0YVtjICsgMl0gPSBjb2xvclsyXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY3R4LnB1dEltYWdlRGF0YShkYXRhLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRlT2Zmc2V0ID0gW2ljb25UcmFuc2xhdGVbMF0gLyBzcHJpdGVJbWFnZURhdGEud2lkdGgsIGljb25UcmFuc2xhdGVbMV0gLyBzcHJpdGVJbWFnZURhdGEuaGVpZ2h0XTtcclxuICAgICAgICAgICAgICAgICAgaWNvbkltZyA9IGljb25JbWFnZUNhY2hlW2ljb25fY2FjaGVfa2V5XSA9IG5ldyBJY29uKHtcclxuICAgICAgICAgICAgICAgICAgICBpbWc6IGNhbnZhcyxcclxuICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW46IGljb25BbmNob3IsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yOiBbaWNvbk9mZnNldFswXSArIGFuY2hvck9mZnNldFswXSArIHRyYW5zbGF0ZU9mZnNldFswXSwgaWNvbk9mZnNldFsxXSArIGFuY2hvck9mZnNldFsxXSAtIHRyYW5zbGF0ZU9mZnNldFsxXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nU2l6ZTogW2NhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IGljb25TaXplIC8gc3ByaXRlSW1hZ2VEYXRhLnBpeGVsUmF0aW9cclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgcm90YXRlVmFsdWUgPSBnZXRWYWx1ZShsYXllcklkLCBsYXlvdXQsICdpY29uLXJvdGF0ZScsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdGF0ZVZhbHVlLmluZGV4T2YgJiYgcm90YXRlVmFsdWUuaW5kZXhPZigneycpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJvdGF0ZVZhbHVlID0gMzYwIC0gZnJvbVRlbXBsYXRlKHJvdGF0ZVZhbHVlLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGljb25JbWcuc2V0Um90YXRpb24oZGVnMnJhZChyb3RhdGVWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgaWNvbkltZy5zZXRPcGFjaXR5KGdldFZhbHVlKGxheWVySWQsIHBhaW50LCAnaWNvbi1vcGFjaXR5Jywgem9vbSwgcHJvcGVydGllcykpO1xyXG4gICAgICAgICAgICAgICAgc3R5bGUuc2V0SW1hZ2UoaWNvbkltZyk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gc3R5bGUuZ2V0VGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgc3R5bGUuc2V0VGV4dCh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgc3R5bGUuc2V0WkluZGV4KDk5OTk5IC0gaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaGFzSW1hZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2tpcExhYmVsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNraXBMYWJlbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZSA9PSAxICYmICdjaXJjbGUtcmFkaXVzJyBpbiBwYWludCkge1xyXG4gICAgICAgICAgKytzdHlsZXNMZW5ndGg7XHJcbiAgICAgICAgICBpZiAoZmVhdHVyZS5zdHlsZUlkc1t6b29tXS5pbmRleE9mKGxheWVySWQpID09PSAtMSkge1xyXG4gICAgICAgICAgICBmZWF0dXJlLnN0eWxlSWRzW3pvb21dLnB1c2gobGF5ZXJJZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdHlsZSA9IHN0eWxlc1tzdHlsZXNMZW5ndGhdO1xyXG4gICAgICAgICAgaWYgKCFzdHlsZSB8fCAhc3R5bGUuZ2V0SW1hZ2UoKSB8fCBzdHlsZS5nZXRGaWxsKCkgfHwgc3R5bGUuZ2V0U3Ryb2tlKCkpIHtcclxuICAgICAgICAgICAgc3R5bGUgPSBzdHlsZXNbc3R5bGVzTGVuZ3RoXSA9IG5ldyBTdHlsZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgY2lyY2xlUmFkaXVzID0gZ2V0VmFsdWUobGF5ZXJJZCwgcGFpbnQsICdjaXJjbGUtcmFkaXVzJywgem9vbSwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICBjb25zdCBjaXJjbGVTdHJva2VDb2xvciA9IGdldFZhbHVlKGxheWVySWQsIHBhaW50LCAnY2lyY2xlLXN0cm9rZS1jb2xvcicsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgY29uc3QgY2lyY2xlQ29sb3IgPSBnZXRWYWx1ZShsYXllcklkLCBwYWludCwgJ2NpcmNsZS1jb2xvcicsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgY29uc3QgY2lyY2xlT3BhY2l0eSA9IGdldFZhbHVlKGxheWVySWQsIHBhaW50LCAnY2lyY2xlLW9wYWNpdHknLCB6b29tLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgIGNvbnN0IGNpcmNsZVN0cm9rZVdpZHRoID0gZ2V0VmFsdWUobGF5ZXJJZCwgcGFpbnQsICdjaXJjbGUtc3Ryb2tlLXdpZHRoJywgem9vbSwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICBjb25zdCBjaXJjbGVTdHJva2VPcGFjaXR5ID0gZ2V0VmFsdWUobGF5ZXJJZCwgcGFpbnQsICdjaXJjbGUtc3Ryb2tlLW9wYWNpdHknLCB6b29tLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgIGNvbnN0IGNhY2hlX2tleSA9IGNpcmNsZVJhZGl1cyArICcuJyArIGNpcmNsZVN0cm9rZUNvbG9yICsgJy4nICtcclxuICAgICAgICAgICAgY2lyY2xlQ29sb3IgKyAnLicgKyBjaXJjbGVPcGFjaXR5ICsgJy4nICsgY2lyY2xlU3Ryb2tlV2lkdGggKyAnLicgKyBjaXJjbGVTdHJva2VPcGFjaXR5O1xyXG4gICAgICAgICAgaWNvbkltZyA9IGljb25JbWFnZUNhY2hlW2NhY2hlX2tleV07XHJcbiAgICAgICAgICBpZiAoIWljb25JbWcpIHtcclxuICAgICAgICAgICAgaWNvbkltZyA9IG5ldyBDaXJjbGUoe1xyXG4gICAgICAgICAgICAgIHJhZGl1czogY2lyY2xlUmFkaXVzLFxyXG4gICAgICAgICAgICAgIHN0cm9rZTogY2lyY2xlU3Ryb2tlV2lkdGggPT09IDAgPyB1bmRlZmluZWQgOiBuZXcgU3Ryb2tlKHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjaXJjbGVTdHJva2VXaWR0aCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcldpdGhPcGFjaXR5KGNpcmNsZVN0cm9rZUNvbG9yLCBjaXJjbGVTdHJva2VPcGFjaXR5KVxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgIGZpbGw6IG5ldyBGaWxsKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcldpdGhPcGFjaXR5KGNpcmNsZUNvbG9yLCBjaXJjbGVPcGFjaXR5KVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3R5bGUuc2V0SW1hZ2UoaWNvbkltZyk7XHJcbiAgICAgICAgICB0ZXh0ID0gc3R5bGUuZ2V0VGV4dCgpO1xyXG4gICAgICAgICAgc3R5bGUuc2V0VGV4dCh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgc3R5bGUuc2V0R2VvbWV0cnkodW5kZWZpbmVkKTtcclxuICAgICAgICAgIHN0eWxlLnNldFpJbmRleCg5OTk5OSAtIGluZGV4KTtcclxuICAgICAgICAgIGhhc0ltYWdlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsYWJlbDtcclxuICAgICAgICBpZiAoJ3RleHQtZmllbGQnIGluIGxheW91dCkge1xyXG4gICAgICAgICAgY29uc3QgdGV4dEZpZWxkID0gZ2V0VmFsdWUobGF5ZXJJZCwgbGF5b3V0LCAndGV4dC1maWVsZCcsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgbGFiZWwgPSBmcm9tVGVtcGxhdGUodGV4dEZpZWxkLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxhYmVsICYmICFza2lwTGFiZWwpIHtcclxuICAgICAgICAgIGlmICghaGFzSW1hZ2UpIHtcclxuICAgICAgICAgICAgKytzdHlsZXNMZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChmZWF0dXJlLnN0eWxlSWRzW3pvb21dLmluZGV4T2YobGF5ZXJJZCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgZmVhdHVyZS5zdHlsZUlkc1t6b29tXS5wdXNoKGxheWVySWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0eWxlID0gc3R5bGVzW3N0eWxlc0xlbmd0aF07XHJcbiAgICAgICAgICAgIGlmICghc3R5bGUgfHwgIXN0eWxlLmdldFRleHQoKSB8fCBzdHlsZS5nZXRGaWxsKCkgfHwgc3R5bGUuZ2V0U3Ryb2tlKCkpIHtcclxuICAgICAgICAgICAgICBzdHlsZSA9IHN0eWxlc1tzdHlsZXNMZW5ndGhdID0gbmV3IFN0eWxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3R5bGUuc2V0SW1hZ2UodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgc3R5bGUuc2V0R2VvbWV0cnkodW5kZWZpbmVkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghc3R5bGUuZ2V0VGV4dCgpKSB7XHJcbiAgICAgICAgICAgIHN0eWxlLnNldFRleHQodGV4dCB8fCBuZXcgVGV4dCgpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRleHQgPSBzdHlsZS5nZXRUZXh0KCk7XHJcbiAgICAgICAgICBjb25zdCB0ZXh0U2l6ZSA9IGdldFZhbHVlKGxheWVySWQsIGxheW91dCwgJ3RleHQtc2l6ZScsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgY29uc3QgZm9udCA9IG1iMmNzcyhjaG9vc2VGb250KGdldFZhbHVlKGxheWVySWQsIGxheW91dCwgJ3RleHQtZm9udCcsIHpvb20sIHByb3BlcnRpZXMpKSwgdGV4dFNpemUpO1xyXG4gICAgICAgICAgY29uc3QgdGV4dFRyYW5zZm9ybSA9IGxheW91dFsndGV4dC10cmFuc2Zvcm0nXTtcclxuICAgICAgICAgIGlmICh0ZXh0VHJhbnNmb3JtID09ICd1cHBlcmNhc2UnKSB7XHJcbiAgICAgICAgICAgIGxhYmVsID0gbGFiZWwudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGV4dFRyYW5zZm9ybSA9PSAnbG93ZXJjYXNlJykge1xyXG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCB3cmFwcGVkTGFiZWwgPSB0eXBlID09IDIgPyBsYWJlbCA6IHdyYXBUZXh0KGxhYmVsLCBmb250LCBnZXRWYWx1ZShsYXllcklkLCBsYXlvdXQsICd0ZXh0LW1heC13aWR0aCcsIHpvb20sIHByb3BlcnRpZXMpKTtcclxuICAgICAgICAgIHRleHQuc2V0VGV4dCh3cmFwcGVkTGFiZWwpO1xyXG4gICAgICAgICAgdGV4dC5zZXRGb250KGZvbnQpO1xyXG4gICAgICAgICAgdGV4dC5zZXRSb3RhdGlvbihkZWcycmFkKGdldFZhbHVlKGxheWVySWQsIGxheW91dCwgJ3RleHQtcm90YXRlJywgem9vbSwgcHJvcGVydGllcykpKTtcclxuICAgICAgICAgIGNvbnN0IHRleHRBbmNob3IgPSBnZXRWYWx1ZShsYXllcklkLCBsYXlvdXQsICd0ZXh0LWFuY2hvcicsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gKGhhc0ltYWdlIHx8IHR5cGUgPT0gMSkgPyAncG9pbnQnIDogZ2V0VmFsdWUobGF5ZXJJZCwgbGF5b3V0LCAnc3ltYm9sLXBsYWNlbWVudCcsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgdGV4dC5zZXRQbGFjZW1lbnQocGxhY2VtZW50KTtcclxuICAgICAgICAgIGlmIChwbGFjZW1lbnQgPT0gJ3BvaW50Jykge1xyXG4gICAgICAgICAgICBsZXQgdGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0QW5jaG9yLmluZGV4T2YoJ2xlZnQnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ24gPSAnbGVmdCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGV4dEFuY2hvci5pbmRleE9mKCdyaWdodCcpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgIHRleHRBbGlnbiA9ICdyaWdodCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGV4dC5zZXRUZXh0QWxpZ24odGV4dEFsaWduKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRleHQuc2V0VGV4dEFsaWduKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgdGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcbiAgICAgICAgICBpZiAodGV4dEFuY2hvci5pbmRleE9mKCdib3R0b20nKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRleHRCYXNlbGluZSA9ICdib3R0b20nO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0ZXh0QW5jaG9yLmluZGV4T2YoJ3RvcCcpID09IDApIHtcclxuICAgICAgICAgICAgdGV4dEJhc2VsaW5lID0gJ3RvcCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0ZXh0LnNldFRleHRCYXNlbGluZSh0ZXh0QmFzZWxpbmUpO1xyXG4gICAgICAgICAgY29uc3QgdGV4dE9mZnNldCA9IGdldFZhbHVlKGxheWVySWQsIGxheW91dCwgJ3RleHQtb2Zmc2V0Jywgem9vbSwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICBjb25zdCB0ZXh0VHJhbnNsYXRlID0gZ2V0VmFsdWUobGF5ZXJJZCwgcGFpbnQsICd0ZXh0LXRyYW5zbGF0ZScsIHpvb20sIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgdGV4dC5zZXRPZmZzZXRYKHRleHRPZmZzZXRbMF0gKiB0ZXh0U2l6ZSArIHRleHRUcmFuc2xhdGVbMF0pO1xyXG4gICAgICAgICAgdGV4dC5zZXRPZmZzZXRZKHRleHRPZmZzZXRbMV0gKiB0ZXh0U2l6ZSArIHRleHRUcmFuc2xhdGVbMV0pO1xyXG4gICAgICAgICAgb3BhY2l0eSA9IGdldFZhbHVlKGxheWVySWQsIHBhaW50LCAndGV4dC1vcGFjaXR5Jywgem9vbSwgcHJvcGVydGllcyk7XHJcbiAgICAgICAgICBjb25zdCB0ZXh0Q29sb3IgPSBuZXcgRmlsbCgpO1xyXG5cclxuICAgICAgICAgIHRleHRDb2xvci5zZXRDb2xvcihjb2xvcldpdGhPcGFjaXR5KGdldFZhbHVlKGxheWVySWQsIHBhaW50LCAndGV4dC1jb2xvcicsIHpvb20sIHByb3BlcnRpZXMpLCBvcGFjaXR5KSk7XHJcbiAgICAgICAgICB0ZXh0LnNldEZpbGwodGV4dENvbG9yKTtcclxuICAgICAgICAgIGNvbnN0IGhhbG9Db2xvciA9IGNvbG9yV2l0aE9wYWNpdHkoZ2V0VmFsdWUobGF5ZXJJZCwgcGFpbnQsICd0ZXh0LWhhbG8tY29sb3InLCB6b29tLCBwcm9wZXJ0aWVzKSwgb3BhY2l0eSk7XHJcbiAgICAgICAgICBpZiAoaGFsb0NvbG9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHRIYWxvID0gbmV3IFN0cm9rZSgpO1xyXG4gICAgICAgICAgICB0ZXh0SGFsby5zZXRDb2xvcihoYWxvQ29sb3IpO1xyXG4gICAgICAgICAgICB0ZXh0SGFsby5zZXRXaWR0aChnZXRWYWx1ZShsYXllcklkLCBwYWludCwgJ3RleHQtaGFsby13aWR0aCcsIHpvb20sIHByb3BlcnRpZXMpKTtcclxuICAgICAgICAgICAgdGV4dC5zZXRTdHJva2UodGV4dEhhbG8pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGV4dC5zZXRTdHJva2UodW5kZWZpbmVkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0eWxlLnNldFpJbmRleCg5OTk5OSAtIGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3R5bGVzTGVuZ3RoID4gLTEpIHtcclxuICAgICAgc3R5bGVzLmxlbmd0aCA9IHN0eWxlc0xlbmd0aCArIDE7XHJcbiAgICAgIHJldHVybiBzdHlsZXM7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb2xMYXllci5zZXRTdHlsZShzdHlsZUZ1bmN0aW9uKTtcclxuICBvbExheWVyLnNldCgnbWFwYm94LXNvdXJjZScsIG1hcGJveFNvdXJjZSk7XHJcbiAgb2xMYXllci5zZXQoJ21hcGJveC1sYXllcnMnLCBtYXBib3hMYXllcnMpO1xyXG4gIHJldHVybiBzdHlsZUZ1bmN0aW9uO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBkZWcycmFkKGRlZ3JlZXMpIHtcclxuICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRab29tRm9yUmVzb2x1dGlvbihyZXNvbHV0aW9uLCByZXNvbHV0aW9ucykge1xyXG4gIGxldCBpID0gMDtcclxuICBjb25zdCBpaSA9IHJlc29sdXRpb25zLmxlbmd0aDtcclxuICBmb3IgKDsgaSA8IGlpOyArK2kpIHtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IHJlc29sdXRpb25zW2ldO1xyXG4gICAgaWYgKGNhbmRpZGF0ZSA8IHJlc29sdXRpb24gJiYgaSArIDEgPCBpaSkge1xyXG4gICAgICBjb25zdCB6b29tRmFjdG9yID0gcmVzb2x1dGlvbnNbaV0gLyByZXNvbHV0aW9uc1tpICsgMV07XHJcbiAgICAgIHJldHVybiBpICsgTWF0aC5sb2cocmVzb2x1dGlvbnNbaV0gLyByZXNvbHV0aW9uKSAvIE1hdGgubG9nKHpvb21GYWN0b3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gaWkgLSAxO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gb2wuTWFwOyIsIm1vZHVsZS5leHBvcnRzID0gb2wuT2JzZXJ2YWJsZTsiLCJtb2R1bGUuZXhwb3J0cyA9IG9sLmZvcm1hdC5HZW9KU09OOyIsIm1vZHVsZS5leHBvcnRzID0gb2wuZm9ybWF0Lk1WVDsiLCJtb2R1bGUuZXhwb3J0cyA9IG9sLmdlb20uUG9pbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBvbC5sYXllci5UaWxlOyIsIm1vZHVsZS5leHBvcnRzID0gb2wubGF5ZXIuVmVjdG9yOyIsIm1vZHVsZS5leHBvcnRzID0gb2wubGF5ZXIuVmVjdG9yVGlsZTsiLCJtb2R1bGUuZXhwb3J0cyA9IG9sLnByb2o7IiwibW9kdWxlLmV4cG9ydHMgPSBvbC5zb3VyY2UuVGlsZUpTT047IiwibW9kdWxlLmV4cG9ydHMgPSBvbC5zb3VyY2UuVmVjdG9yOyIsIm1vZHVsZS5leHBvcnRzID0gb2wuc291cmNlLlZlY3RvclRpbGU7IiwibW9kdWxlLmV4cG9ydHMgPSBvbC5zb3VyY2UuWFlaOyIsIm1vZHVsZS5leHBvcnRzID0gb2wuc3R5bGUuQ2lyY2xlOyIsIm1vZHVsZS5leHBvcnRzID0gb2wuc3R5bGUuRmlsbDsiLCJtb2R1bGUuZXhwb3J0cyA9IG9sLnN0eWxlLkljb247IiwibW9kdWxlLmV4cG9ydHMgPSBvbC5zdHlsZS5TdHJva2U7IiwibW9kdWxlLmV4cG9ydHMgPSBvbC5zdHlsZS5TdHlsZTsiLCJtb2R1bGUuZXhwb3J0cyA9IG9sLnN0eWxlLlRleHQ7IiwibW9kdWxlLmV4cG9ydHMgPSBvbC50aWxlZ3JpZDsiXSwic291cmNlUm9vdCI6IiJ9