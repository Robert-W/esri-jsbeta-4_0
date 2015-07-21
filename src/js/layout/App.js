import {MainPanel} from 'js/layout/MainPanel';
import {Header} from 'js/layout/Header';
import React from 'react';

export class App extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='react-root'>
        <Header />
        <MainPanel />
      </div>
    );
  }

}
