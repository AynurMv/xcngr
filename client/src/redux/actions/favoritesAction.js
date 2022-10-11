import axios from 'axios';
import {
  ADD_FAVORITES, DELETE_FAVORITE, SET_FAVORITES,
} from '../types';

export const addFavorite = (payload) => ({ type: ADD_FAVORITES, payload });
export const setFavorites = (payload) => ({ type: SET_FAVORITES, payload });
export const deleteFavorite = (payload) => ({ type: DELETE_FAVORITE, payload });

export const setFavorite = (id, setIsFavorite) => (dispatch) => {
  axios.put(`/favorite/${id}`)
    .then((res) => dispatch(addFavorite(res.data)))
    .then(() => {
      setIsFavorite(true);
    })
    .catch(console.log);
};

export const deleteFavoriteAsync = (id, setIsFavorite) => (dispatch) => {
  axios.delete(`/favorite/${id}`)
    .then(() => dispatch(deleteFavorite(id)))
    .then(() => {
      setIsFavorite(false);
    })
    .catch(console.log);
};

export const fetchFavorites = () => (dispatch) => {
  axios('/favorite')
    .then((response) => {
      dispatch(setFavorites(response.data));
    })
    .catch(console.log);
};
