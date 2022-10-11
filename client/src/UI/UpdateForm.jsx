import * as React from 'react';
// import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { userUpdater } from '../redux/actions/usersAction';
// import SliderMylter from './SliderMylter';
import './index.css';

export default function UpdateForm({ night }) {
  // const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    f_name: '', l_name: '', email: '', photo: '', telegram: '', phone: '',
  });
  useEffect(() => {
    const newInputs = { ...user };
    delete newInputs.id;
    setInputs(newInputs);
  }, [user]);
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
  console.log(inputs);
  return (
    <form className="updateForm" onSubmit={(e) => dispatch(userUpdater(e, inputs, user.id, navigate))}>
      <div
        className="form-conatainer"
        style={!night === true ? ({
          display: 'flex', flexDirection: 'column', borderRadius: '1rem', padding: '15px',
        }) : ({
          display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: '1rem', padding: '15px',
        })}
      >
        <Box
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <TextField name="f_name" onChange={changeHandler} id="standard-basic" value={inputs.f_name} label="Новое имя" variant="standard" style={{ width: '100%' }} />
          <TextField name="l_name" onChange={changeHandler} id="standard-basic" value={inputs.l_name} label="Новая фамилия" variant="standard" style={{ width: '100%' }} />
          <TextField name="email" onChange={changeHandler} id="standard-basic" value={inputs.email} label="Новая почта" variant="standard" style={{ width: '100%' }} />
          <TextField name="phone" onChange={changeHandler} id="standard-basic" value={inputs.phone} label="Новый телефон" variant="standard" style={{ width: '100%' }} />
          <TextField name="telegram" onChange={changeHandler} id="standard-basic" value={inputs.telegram} label="Новый телеграм" variant="standard" style={{ width: '100%' }} />
          Загрузите новое фото
          <input
            name="photo"
            type="file"
            onChange={changeHandlerPhoto}
          />
        </Box>
        <Button className="updateForm__btn" type="submit" variant="contained" endIcon={<SendIcon />}>
          Отправить
        </Button>
        {/* <SliderMylter /> */}
      </div>
    </form>
  );
}
