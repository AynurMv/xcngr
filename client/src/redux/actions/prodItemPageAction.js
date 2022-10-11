import axios from 'axios';
import { SET_PRODUCT_ARG } from '../types';

export const setProdArg = (payload) => ({ type: SET_PRODUCT_ARG, payload });

export const productArg = (id) => (dispatch) => {
  console.log(id);
  axios(`/item-product/${id}`)
    .then((res) => {
      dispatch(setProdArg(res.data));
    })
    .catch(console.log);
};
