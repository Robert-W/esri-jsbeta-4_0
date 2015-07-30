import {MapActions as actions} from 'js/actions/MapActions';
import {MAP as constants} from 'js/constants/AppConstants';
import BasemapGalleryItem from 'js/map/BasemapGalleryItem';
import MapStore from 'js/stores/MapStore';
import {basemaps} from 'js/config';
import React from 'react';

let getCurrentBasemap = () => MapStore.get(constants.basemap) || app.map.basemap.id;
let getCurrentViewType = () => {
  return MapStore.get(constants.viewType) || (app.view.globeMode ? constants.viewTypes.scene : constants.viewTypes.map);
};

export class BasemapGallery extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      open: false,
      viewType: getCurrentViewType(),
      activeBasemap: getCurrentBasemap()
    };
  }

  componentDidMount () {
    MapStore.registerCallback(this.storeDidUpdate.bind(this));
  }

  storeDidUpdate () {
    let basemap = getCurrentBasemap();
    app.map.basemap = basemap;

    this.setState({
      activeBasemap: basemap,
      viewType: getCurrentViewType()
    });
  }

  render () {
    return (
      <div className={'map-buttons basemap-gallery' + (this.state.open ? ' open' : '')} >
        <div className='basemap-gallery-icon pointer' onClick={this.toggleGallery.bind(this)}>BG</div>
        <ul className='basemap-gallery-list'>
          {this.renderBasemapItems()}
        </ul>
      </div>
    );
  }

  renderBasemapItems () {
    let availableBasemaps = basemaps[this.state.viewType];
    return availableBasemaps.map(basemap => {
      return (
        <BasemapGalleryItem
          value={basemap.value}
          label={basemap.label}
          iconClass={basemap.iconClass}
          click={this.onSelect}
          active={this.state.activeBasemap === basemap.value}
        />
      );
    });
  }

  toggleGallery () {
    this.setState({ open: !this.state.open });
  }

  onSelect (basemap) {
    actions.setBasemap(basemap);
  }

}
