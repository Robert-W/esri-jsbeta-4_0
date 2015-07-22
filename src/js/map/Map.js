import {MapActions as actions} from 'js/actions/MapActions';
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
    return (
      <div className='map' id={mapConfig.id} >
        {this.props.children}
      </div>
    );
  }

}
