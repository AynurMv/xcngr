import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Chip, ListItem } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { signupUser } from '../redux/actions/userAction';

export default function FormModalReg({ setRegActive }) {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    dropPhoto: [], f_name: '', l_name: '', password: '', email: '', photo: null, telegram: '', phone: '',
  });
  console.log(inputs);
  // console.log(dropPhoto);
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
    <form autoComplete="off" onSubmit={(e) => dispatch(signupUser(e, inputs, setRegActive))}>
      <div className="form-conatainer" style={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            '& > :not(style)': { m: 1, width: '26ch' },
          }}
          noValidate
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
          <ListItem style={{ marginTop: '1px', overflow: 'hidden', width: '100%' }}>
            {inputs.photo
            && (
            <Chip
              label={inputs.photo.name}
              variant="outlined"
              style={{ marginRight: '5px' }}
              key={uuidv4()}
            />
            )}

          </ListItem>
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
