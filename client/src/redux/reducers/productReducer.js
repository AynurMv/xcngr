import {
  ADD_PRODUCT, SET_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT,
} from '../types';

export default function productReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT:
      return [...state, payload];
    case SET_PRODUCTS:
      return payload;
    case DELETE_PRODUCT:
      return state.filter((item) => item.id !== payload.id);
    case UPDATE_PRODUCT:
      return state.map((item) => (item.id === payload.id ? payload : item));
    default:
      return state;
  }
}
