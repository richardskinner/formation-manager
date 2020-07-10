import { CHANGE_FORMATION } from '../constants/action-types';

const initialState = {
  formation: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORMATION:
      return Object.assign({}, state, {
        formation: state.formation.concat(action.payload),
      })
    default:
      return state;
  }
}

export default rootReducer;
