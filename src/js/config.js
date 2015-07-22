export const config = {
  app: {
    'title': 'Esri React Prerender Test',
    'subtitle': 'Testing React.renderToString from node script for an app using Esri\'s JavaScript API.'
  },

  arcgis: {
    css: 'http://js.arcgis.com/4.0beta1/esri/css/esri.css'
  },

  map: {
    id: 'map',
    options: {
      basemap: 'national-geographic'
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
