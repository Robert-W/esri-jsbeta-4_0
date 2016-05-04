export const config = {
  app: {
    'title': 'Esri 4.0',
    'subtitle': 'Testing out ArcGIS JavaScript 4.0 API with React.'
  },

  arcgis: {
    css: 'https://js.arcgis.com/4.0/esri/css/main.css'
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
      zoom: 1
    },
    mapView: {
      center: [-102, 39],
      zoom: 4
    }
  },

  ui: {
    basemaps: {
      'map': [
        { label: 'Open Street Map', value: 'osm', iconClass: 'basemap-osm' },
        { label: 'Vector Streets Night', value: 'vector-streets-night', iconClass: 'basemap-vsn' },
        { label: 'Vector Streets Mobile', value: 'vector-streets-mobile', iconClass: 'basemap-vsm' },
        { label: 'Vector Canvas Light', value: 'vector-canvas-light', iconClass: 'basemap-vcl' },
        { label: 'Vector Canvas Dark', value: 'vector-canvas-dark', iconClass: 'basemap-vcd' }
      ],
      'scene': [
        { label: 'Open Street Map', value: 'osm', iconClass: 'basemap-osm' },
        { label: 'National Geographic', value: 'national-geographic', iconClass: 'basemap-nat-geo' },
        { label: 'Dark Gray Canvas', value: 'dark-gray', iconClass: 'basemap-cd' },
        { label: 'Light Gray Canvas', value: 'gray', iconClass: 'basemap-cl' },
        { label: 'Oceans', value: 'oceans', iconClass: 'basemap-oceans' }
      ]
    }

  }

};

export const appConfig = config.app;
export const mapConfig = config.map;
export const arcgisConfig = config.arcgis;
/* UI Config Exports */
export const basemaps = config.ui.basemaps;
