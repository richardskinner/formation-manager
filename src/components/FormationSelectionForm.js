import React, { Component } from 'react';
import PropTypes from 'prop-types';

const formations = {
  442: '4-4-2',
  433: '4-3-3',
  351: '3-5-1',
};

function OptionItem(props) {
  const { value, text } = props
  return <option value={value}>{text}</option>;
}

class FormationSelectionFormComponent extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { handleFormationChange } = this.props
    handleFormationChange(event.target.value);
  }

  formationList(props) {
    const list = Object.keys(formations).map(
      (formation, i) => <OptionItem
        key={formations[formation].toString()}
        value={formation}
        text={formations[formation]}
      />
    );

    return list;
  }

  render() {
    const { formation } = this.props
    return (
      <form>
        <select
          value={formation}
          onChange={this.handleChange}
        >
          {this.formationList()}
        </select>
      </form>
    );
  }

}

OptionItem.propTypes = {
  formation: PropTypes.instanceOf(Array).isRequired,
  handleFormationChange: PropTypes.func.isRequired,
}

export default FormationSelectionFormComponent;
