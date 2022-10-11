import axios from 'axios';
import { SET_CATEGORIES } from '../types';

export const setCategories = (payload) => ({ type: SET_CATEGORIES, payload });

export const allCategories = () => (dispatch) => {
  axios('/categories')
    .then((res) => dispatch(setCategories(res.data)))
    .catch(console.log);
};
