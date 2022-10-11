import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComments } from '../redux/actions/CommentsAction';

export default function CommentsModalka({ setComent }) {
  const user = useSelector((state) => state.user);
  const argProduct = useSelector((state) => state.prodItemPage);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    text: '',
  });

  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={(e) => dispatch(addComments(e, inputs.text, setComent, user.id, argProduct.id))}>
      <div className="days" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
      <TextField type="text" onChange={changeHandler} value={inputs.text} name="text" id="standard-basic" label="оставить комент " variant="standard" style={{ width: '100%', backgroundColor: 'white' }} />
      <Button type="submit" variant="contained" style={{ marginTop: '5%', width: '100%' }}>Отправить комментарий</Button>
    </form>
  );
}
