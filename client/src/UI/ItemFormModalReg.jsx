import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { itemsignupUser } from '../redux/actions/userAction';

export default function ItemFormModalReg({ setItemreg, setRent }) {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    f_name: '', l_name: '', password: '', email: '', photo: null, telegram: '', phone: '',
  });
  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const changeHandlerPhoto = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
  };
  return (
    <form onSubmit={(e) => dispatch(itemsignupUser(e, inputs, setItemreg, setRent))}>
      <div className="form-conatainer" style={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <TextField name="f_name" onChange={changeHandler} id="standard-basic" label="Ваше имя" variant="standard" style={{ width: '100%' }} />
          {inputs.f_name.length < 3 ? (
            <TextField disabled name="l_name" onChange={changeHandler} id="standard-basic" label="Ваша фамилия" variant="standard" style={{ width: '100%' }} />
          ) : (
            <TextField name="l_name" onChange={changeHandler} id="standard-basic" label="Ваша фамилия" variant="standard" style={{ width: '100%' }} />
          )}
          {inputs.l_name.length < 1 ? (
            <TextField disabled name="email" onChange={changeHandler} id="standard-basic" label="Ваш e-mail" variant="standard" style={{ width: '100%' }} />
          ) : (
            <TextField name="email" onChange={changeHandler} id="standard-basic" label="Ваш e-mail" variant="standard" style={{ width: '100%' }} />
          )}
          {!inputs.email.includes('@') && inputs.email.length < 4 ? (
            <TextField disabled type="password" name="password" onChange={changeHandler} id="standard-basic" label="Ваш пароль" variant="standard" style={{ width: '100%' }} />
          ) : (
            <TextField type="password" name="password" onChange={changeHandler} id="standard-basic" label="Ваш пароль" variant="standard" style={{ width: '100%' }} />
          )}
          {inputs.password.length < 6 ? (
            <TextField disabled name="phone" onChange={changeHandler} id="standard-basic" label="Ваш номер телефона" variant="standard" style={{ width: '100%' }} />
          ) : (
            <TextField name="phone" onChange={changeHandler} id="standard-basic" label="Ваш номер телефона" variant="standard" style={{ width: '100%' }} />
          )}
          {inputs.phone.length < 5 ? (
            <TextField disabled name="telegram" onChange={changeHandler} id="standard-basic" label="Ваш Telegram" variant="standard" style={{ width: '100%' }} />
          ) : (
            <TextField name="telegram" onChange={changeHandler} id="standard-basic" label="Ваш Telegram" variant="standard" style={{ width: '100%' }} />
          )}
          <Button
            variant="contained"
            component="label"
          >
            Загрузите фото
            <input
              name="photo"
              type="file"
              hidden
              onChange={changeHandlerPhoto}
            />
          </Button>
        </Box>
        {inputs.telegram.length === 0 && inputs.phone.length === 0 ? (
          <Button disabled type="submit" variant="contained" endIcon={<SendIcon />}>
            Отправить
          </Button>
        ) : (
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Отправить
          </Button>
        )}
      </div>
    </form>
  );
}
