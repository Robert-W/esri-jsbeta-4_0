export const config = {
  app: {
    'title': 'Esri 4.0 Beta',
    'subtitle': 'Testing out ArcGIS JavaScript 4.0 Beta API with React.'
  },

  arcgis: {
    css: 'http://js.arcgis.com/4.0beta1/esri/css/esri.css'
  },

  map: {
    id: 'map',
    options: {
      basemap: 'terrain'
    },
    sceneView: {
      camera: {
        position: [-102, 39, 600]
      },
      zoom: 4
    },
    mapView: {
      center: [-102, 39],
      zoom: 4
    }
  }

};

export const appConfig = config.app;
export const mapConfig = config.map;
export const arcgisConfig = config.arcgis;
