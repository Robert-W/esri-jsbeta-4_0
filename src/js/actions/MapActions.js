import SceneView from 'esri/views/SceneView';
import MapView from 'esri/views/MapView';
import EsriMap from 'esri/Map';

export const MapActions = {
  /**
  * Simple method to create a new SceneView
  * @param {object} mapConfig - config object containing id and options
  * @return {Promise} deferred - Promise that resolves on map load event
  */
  createSceneView (mapConfig) {
    app.debug('MapActions >>> createSceneView');

    var deferred = new Promise((resolve) => {
      app.map = new EsriMap(mapConfig.options);
      app.view = new SceneView({
        camera: mapConfig.sceneView.camera,
        zoom: mapConfig.sceneView.zoom,
        container: mapConfig.id,
        map: app.map
      });

      app.map.then(function () {
        resolve();
      });
    });

    return deferred;
  },
  /**
  * Simple method to create a new MapView
  * @param {object} mapConfig - config object containing id and options
  * @return {Promise} deferred - Promise that resolves on map load event
  */
  createMapView (mapConfig) {
    app.debug('MapActions >>> createMapView');

    var deferred = new Promise((resolve) => {
      app.map = new EsriMap(mapConfig.options);
      app.view = new MapView({
        center: mapConfig.mapView.center,
        zoom: mapConfig.mapView.zoom,
        container: mapConfig.id,
        map: app.map
      });

      app.map.then(function () {
        resolve();
      });
    });

    return deferred;
  }

};
