import { SET_PRODUCT_ARG } from '../types';

export default function prodItemPageReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_PRODUCT_ARG:
      return payload;
    default:
      return state;
  }
}
