import React from 'react';

export class Map extends React.Component {

  componentDidMount () {

  }

  render () {
    return (
      <div className='map' id='map'>
        {this.props.children}
      </div>
    );
  }

}
