import { SET_FALSE, SET_STATE, SET_TRUE } from '../types';

export default function changeFavoriteStateReducer(state = false, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_TRUE:
      return true;
    case SET_FALSE:
      return false;
    case SET_STATE:
      return payload;
    default:
      return state;
  }
}
