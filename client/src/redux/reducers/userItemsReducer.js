import {
  SET_USER_ITEMS, DELETE_USER_ITEMS, EDIT_USER_ITEMS,
} from '../types';

export default function userItemsReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_ITEMS:
      return payload;
    case DELETE_USER_ITEMS:
      return state.filter((item) => item.id !== payload);
    case EDIT_USER_ITEMS:
      return state.map((item) => (item.id === payload.id ? payload : item));
    default:
      return state;
  }
}
