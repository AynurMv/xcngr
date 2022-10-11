import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { itemloginUser } from '../redux/actions/userAction';

export default function ItemFormModalLog({ setItemlog, setRent }) {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  console.log(inputs);
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form onSubmit={(e) => dispatch(itemloginUser(e, inputs, setItemlog, setRent))}>
      <div className="form-conatainer" style={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <TextField name="email" onChange={changeHandler} id="standard-basic" label="Ваш e-mail" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} />
          <TextField type="password" name="password" onChange={changeHandler} id="standard-basic" label="Ваш пароль" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} />
        </Box>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Отправить
        </Button>
      </div>
    </form>
  );
}
