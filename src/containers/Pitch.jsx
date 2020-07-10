import React, { Component } from 'react';
import FormationContainer from './Formation';
import PlayerComponent from '../components/Player';

class PitchContainer extends Component {
  render() {
    return (
      <div id="pitch">
        <h1>My Team</h1>
        <FormationContainer>
          <PlayerComponent />
        </FormationContainer>
      </div>
    );
  }
}

export default PitchContainer;
