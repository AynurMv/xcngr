import axios from 'axios';
import { SET_USER, UPDATE_USER } from '../types';
import { setAuthUser } from './userAction';

export const setUser = (payload) => ({ type: SET_USER, payload });
export const userUpdate = (payload) => ({ type: UPDATE_USER, payload });

export const fetchUsers = (id) => (dispatch) => {
  axios(`/user/${id}`)
    .then((res) => dispatch(setUser(res.data)))
    .catch(console.log);
};

export const userUpdater = (e, inputs, id, navigate) => (dispatch) => {
  e.preventDefault();
  const data = new FormData();
  data.append('f_name', inputs.f_name);
  data.append('l_name', inputs.l_name);
  data.append('email', inputs.email);
  data.append('photo', inputs.photo);
  data.append('telegram', inputs.telegram);
  data.append('phone', inputs.phone);
  axios.put(`/user/${id}`, data)
    .then((res) => {
      navigate('/profile');
      dispatch(userUpdate(res.data));
      dispatch(setAuthUser(res.data));
    })
    .catch(console.log);
};
