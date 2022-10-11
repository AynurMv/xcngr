/* eslint-disable guard-for-in */
import axios from 'axios';
import {
  SET_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT,
} from '../types';

export const setProducts = (payload) => ({ type: SET_PRODUCTS, payload });
export const deleteProduct = (payload) => ({ type: DELETE_PRODUCT, payload });
export const updateProduct = (payload) => ({ type: UPDATE_PRODUCT, payload });

export const addProduct = (e, inputs, setInputs, newStat, setSlider) => () => {
  e.preventDefault();
  const formData = new FormData();
  for (const key in inputs) {
    if (typeof inputs[key] === 'object') {
      for (const file in inputs[key]) {
        formData.append('dropPhoto', inputs[key][file]);
      }
    } else {
      formData.append(key, inputs[key]);
    }
  }
  setSlider(true);
  axios.post('/product', formData)
    .then(() => {
      setInputs({
        dropPhoto: [], name: '', category: '', description: '', price: '', location: '', timing: '',
      });
      setSlider(false);
      newStat(false);
    });
};

export const productUpdater = (e, inputs, id, setUpdate) => () => {
  e.preventDefault();
  axios.post(`/product/${id}`, { inputs })
    .then(() => {
      setUpdate(false);
    });
};

// export const deleteProductAsync = (id, navigate) => (dispatch) => {
//   axios.delete(`/useritems/${id}`)
//     .then(() => {
//       navigate('/');
//       dispatch(deleteProduct(id));
//     })
//     .catch(console.log);
// };

export const deleteItemFromList = (id, navigate) => (dispatch) => {
  console.log('actions === id ----', id);
  axios.delete(`/useritems/${id}`)
    .then(() => {
      navigate('/allproducts');
      dispatch(deleteProduct(id));
    })
    .catch(console.log);
};
