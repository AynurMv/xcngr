import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/userAction';

export default function FormModalLog({ setLogActive }) {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form autoComplete="off" onSubmit={(e) => dispatch(loginUser(e, inputs, setLogActive))}>
      <div className="form-conatainer" style={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <TextField autocomplete="off" name="email" onChange={changeHandler} id="standard-basic" label="Ваш e-mail" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} />
          <TextField autocomplete="off" type="password" name="password" onChange={changeHandler} id="standard-basic" label="Ваш пароль" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} />
        </Box>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Отправить
        </Button>
      </div>
    </form>
  );
}
