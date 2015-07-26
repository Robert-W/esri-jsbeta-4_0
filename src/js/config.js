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
      basemap: 'osm'
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
  },

  ui: {
    basemaps: [
      { label: 'Open Street Map', value: 'osm', iconClass: 'basemap-osm' },
      { label: 'Vector Streets Night', value: 'vector-streets-night', iconClass: 'basemap-vsn' },
      { label: 'Vector Streets Mobile', value: 'vector-streets-mobile', iconClass: 'basemap-vsm' },
      { label: 'Vector Canvas Light', value: 'vector-canvas-light', iconClass: 'basemap-vcl' },
      { label: 'Vector Canvas Dark', value: 'vector-canvas-dark', iconClass: 'basemap-vcd' }
    ]
  }

};

export const appConfig = config.app;
export const mapConfig = config.map;
export const arcgisConfig = config.arcgis;
/* UI Config Exports */
export const basemaps = config.ui.basemaps;
