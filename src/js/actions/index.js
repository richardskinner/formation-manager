import { CHANGE_FORMATION } from '../constants/action-types';

export default function changeFormation(payload) {
  return {
    type: CHANGE_FORMATION,
    payload,
  };
}
