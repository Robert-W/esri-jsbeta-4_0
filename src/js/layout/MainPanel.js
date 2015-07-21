import React from 'react';

export class MainPanel extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='app-body'>
        <div id='map' className='map'></div>
      </div>
    );
  }

}
