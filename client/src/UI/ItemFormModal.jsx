import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrdering } from '../redux/actions/orderActions';
import Days from './DaysModal';

export default function ItemFormModal({ input, setRent, setSend }) {
  const user = useSelector((state) => state.user);
  const product = useSelector((state) => state.prodItemPage);
  const max = product.timing;
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    message: '',
  });
  const [timer, setTimer] = useState({ timing: input.timing });
  const priceCalculate = product.price * timer.timing;
  console.log(product);

  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const changeHandlerTiming = (e) => {
    e.preventDefault();
    setTimer((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form autoComplete="off" onSubmit={(e) => dispatch(addOrdering(e, inputs.message, user.id, product.id, timer, setRent, setSend))}>
      <div className="days" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
      <TextField autocomplete="off" type="text" onChange={changeHandler} value={inputs.message} name="message" id="standard-basic" label="Сообщение" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} />
      <TextField autocomplete="off" type="text" onChange={changeHandlerTiming} value={timer.timing} name="timing" id="standard-basic" label="Время аренды" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} />
      <p>{`Цена аренды ${priceCalculate}`}</p>
      <p>Не уверенны в сроках? Выберите новое время, с помощью бегунка ниже</p>
      <Days changeHandlerTiming={changeHandlerTiming} timer={timer} max={max} />
      <Button type="submit" variant="contained" style={{ marginTop: '5%', width: '100%' }}>Отправить</Button>
    </form>
  );
}
