import axios from 'axios';
import { SET_GRADE_PRODUCT, ADD_GRADE_PRODUCT } from '../types';

export const addGradeProduct = (payload) => ({ type: ADD_GRADE_PRODUCT, payload });
export const setGradeProduct = (payload) => ({ type: SET_GRADE_PRODUCT, payload });

export const countGradeProd = (id) => (dispatch) => {
  axios.get(`/grade/${id}`)
    .then((res) => dispatch(setGradeProduct(res.data)))
    .catch(console.log);
};

export const submitGradeProduct = (input) => (dispatch) => {
  axios.post(`/grade/${input.id}`, input)
    .then(dispatch(countGradeProd(input.id)))
    .catch(console.log);
};

// Ниже код написал Саша
// export const submitGradeProduct = (input) => async (dispatch) => {
//   // eslint-disable-next-line no-unused-vars
//   const axiosRes1 = await axios.post(`/grade/${input.id}`, input);
//   const axiosRes2 = await axios.get(`/grade/${input.id}`);
//   dispatch(setGradeProduct(axiosRes2.data));
//   // .then(dispatch(countGradeProd(input.id)))
//   // .catch(console.log);
// };
