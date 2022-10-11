import axios from 'axios';
import { SET_COMMENTS, ADD_COMMENTS } from '../types';

export const addComment = (payload) => ({ type: ADD_COMMENTS, payload });
export const setComment = (payload) => ({ type: SET_COMMENTS, payload });

export const addComments = (e, input, setComent, uid, pid) => (dispatch) => {
  e.preventDefault();
  console.log(input, uid, pid);
  axios.post('api/v1/addcomment', { input, uid, pid })
    .then((res) => {
      setComent(false);
      dispatch(addComment(res.data));
    })
    .catch(console.log);
};

export const fetchComments = (id) => (dispatch) => {
  axios(`api/v1/comment/${id}`)
    .then((res) => {
      dispatch(setComment(res.data));
    })
    .catch(console.log);
};
