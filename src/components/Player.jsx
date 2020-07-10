import React, { Component } from 'react';

class PlayerComponent extends Component {
  render() {
    const { playerNo } = this.props;
    return (<div className="player">{playerNo}</div>);
  }
}

export default PlayerComponent;
