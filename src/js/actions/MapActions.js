import {MAP as constants} from 'js/constants/AppConstants';
import {Dispatcher as dispatcher} from 'js/dispatcher';
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

      app.map.then(() => {
        this.setViewType(constants.viewTypes.scene);
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

      app.map.then(() => {
        this.setViewType(constants.viewTypes.map);
        resolve();
      });
    });

    return deferred;
  },

  /**
  * Method to update the basemap
  * @param {string} basemap - the value of the basemap to be updated, should come from config.js basemaps
  */
  setBasemap (basemap) {
    app.debug('MapActions >>> setBasemap');

    dispatcher.dispatch({
      actionType: constants.basemap,
      data: basemap
    });
  },

  /**
  * Update the store with the current view type on th map, scene or map
  * @param {string} viewType - current map view type
  */
  setViewType (viewType) {
    app.debug('MapActions >>> setViewType');
    // We need to reset the basemap back to default
    this.setBasemap();
    dispatcher.dispatch({
      actionType: constants.viewType,
      data: viewType
    });
  }

};
