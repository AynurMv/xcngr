import {
  ADD_FAVORITES,
  DELETE_FAVORITE,
  SET_FAVORITES,
} from '../types';

export default function favoritesReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_FAVORITES:
      return payload;
    case ADD_FAVORITES:
      return [...state, payload];
    case DELETE_FAVORITE:
      return state.filter((fav) => fav.product_id !== payload);
    default:
      return state;
  }
}
