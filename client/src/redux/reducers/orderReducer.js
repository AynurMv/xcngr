import { SET_ORDER, NEW_ORDER, DECLINE_ORDER } from '../types';

export default function userReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case NEW_ORDER:
      return [...state, payload];
    case SET_ORDER:
      return payload;
    case DECLINE_ORDER:
      return state.filter((ord) => ord.id !== payload);
    default:
      return state;
  }
}
