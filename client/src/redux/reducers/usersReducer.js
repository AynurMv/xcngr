import { SET_USER, UPDATE_USER } from '../types';

export default function userReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return payload;
    case UPDATE_USER:
      return state.map((item) => (item.id === payload.id ? payload : item));
    default:
      return state;
  }
}
