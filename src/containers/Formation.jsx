import React, { Component } from 'react';
import FormationSelectionFormComponent from '../components/FormationSelectionForm';

class FormationContainer extends Component {
  constructor(props) {
    super(props);
    const { formation } = this.props;
    this.handleFormationChange = this.handleFormationChange.bind(this);
    this.state = {
      formation,
    };
  }

  handleFormationChange(formation) {
    this.setState({
      formation,
    });
  }

  render() {
    const { children } = this.props;
    const { formation } = this.state;

    const childrenWitProps = React.Children.map(children, (child) => {
      return React.cloneElement(
        child, { formation },
      );
    });

    return (
      <div id="formation">
        <h2>{formation}</h2>
        <FormationSelectionFormComponent
          handleFormationChange={this.handleFormationChange}
          formation={formation}
        />
        {<PlayerRow formation={formation} />}
        {childrenWitProps}
      </div>
    );
  }
}
// @TODO: Remove this styling and place into a stylesheet
const rowStyle = {
  background: 'red',
  marginBottom: '10px',
};

function PlayerRow(props) {
  const { formation } = props;
  const rows = formation.toString().split('');
  const rowsWrapper = rows.map((playersPerRow, key) => {
    return (
      <div
        key={key+1}
        style={rowStyle}
      >
        <Player playersIndex={parseInt(playersPerRow)} />
      </div>
    );
  });

  return rowsWrapper;
}

function Player(props) {
  const { playersIndex } = props;
  console.log(playersIndex);
  const players = [];

  for (let i = 0; i < playersIndex; i += 1) {
    players.push(<div key={i}>{i}</div>);
  }

  return players;
}

FormationContainer.defaultProps = {
  formation: 442,
};

export default FormationContainer;
