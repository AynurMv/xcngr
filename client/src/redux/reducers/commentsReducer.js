import { ADD_COMMENTS, SET_COMMENTS } from '../types';

export default function userReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_COMMENTS:
      return [...state, payload];
    case SET_COMMENTS:
      return payload;
    default:
      return state;
  }
}
