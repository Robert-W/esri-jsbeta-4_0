import {MapActions as actions} from 'js/actions/MapActions';
import {MAP as constants} from 'js/constants/AppConstants';
import {ModeSwitchButton} from 'js/map/ModeSwitchButton';
import {BasemapGallery} from 'js/map/BasemapGallery';
import MapStore from 'js/stores/MapStore';
import {Loader} from 'js/map/Loader';
import {mapConfig} from 'js/config';
import React from 'react';

export class Map extends React.Component {

  constructor (props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount () {
    actions.createMapView(mapConfig).then(() => {
      this.setState({ loaded: true });
    });
  }

  render () {
    var widgets = [<ModeSwitchButton click={this.modeChange.bind(this)}/>, <BasemapGallery />];

    return (
      <div className='map' id={mapConfig.id} >
        <Loader text='loading...' visible={!this.state.loaded} />
        {!this.state.loaded ? null : widgets }
      </div>
    );
  }

  modeChange () {
    var currentMode = MapStore.get(constants.viewType);
    this.setState({ loaded: false });

    if (currentMode === constants.viewTypes.map) {
      actions.createSceneView(mapConfig).then(() => {
        this.setState({ loaded: true });
      });
    } else {
      actions.createMapView(mapConfig).then(() => {
        this.setState({ loaded: true });
      });
    }

  }

}
