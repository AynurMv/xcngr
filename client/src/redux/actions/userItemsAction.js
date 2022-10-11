import axios from 'axios';
import {
  SET_USER_ITEMS, DELETE_USER_ITEMS, EDIT_USER_ITEMS,
} from '../types';

export const setUserItems = (payload) => ({ type: SET_USER_ITEMS, payload });
export const deletesUserItems = (payload) => ({ type: DELETE_USER_ITEMS, payload });
export const updateUserItems = (payload) => ({ type: EDIT_USER_ITEMS, payload });

export const fetchUserItems = () => (dispatch) => {
  axios.get('/useritems/all')
    .then((response) => {
      dispatch(setUserItems(response.data));
    })
    .catch(console.log);
};

export const deleteItem = (id) => (dispatch) => {
  axios.delete(`/useritems/${id}`)
    .then(() => dispatch(deletesUserItems(id)))
    .catch(console.log);
};
