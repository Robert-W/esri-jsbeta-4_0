import React from 'react';

export class ModeSwitchButton extends React.Component {

  render () {
    return (
      <div className='map-buttons mode-switcher pointer' onClick={this.props.click}>MC</div>
    );
  }

}

ModeSwitchButton.propTypes = {
  click: React.PropTypes.func.isRequired
};
