import {
  Autocomplete, Button, TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productUpdater } from '../redux/actions/productAction';

export default function UpdateFormModal({ setUpdate, argProduct }) {
  const dispatch = useDispatch();
  const categoriesArr = useSelector((state) => state.categories);
  const { id } = argProduct;
  console.log(id);
  const [inputs, setInputs] = useState({
    name: '', category: '', description: '', price: '', location: '', timing: '',
  });
  useEffect(() => {
    const newInputs = { ...argProduct };
    delete newInputs.id;
    delete newInputs.photo;
    setInputs(newInputs);
  }, [argProduct]);
  const changeHandler = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form autoComplete="off" onSubmit={(e) => dispatch(productUpdater(e, inputs, id, setUpdate))}>
      <div className="form-conatainer" style={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <TextField autocomplete="off" name="name" value={inputs.name} onChange={changeHandler} label="Название товара" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} type="text" />
          <Autocomplete
            style={{ width: '100%', backgroundColor: 'white' }}
            options={categoriesArr}
            getOptionLabel={(option) => option.name}
            id="clear-on-escape"
            onChange={(e) => setInputs((prev) => ({
              ...prev,
              category: e.target.innerHTML,
            }))}
            clearOnEscape
            renderInput={(params) => (
              <TextField
                autocomplete="off"
                {...params}
                name="category"
                label="Категория"
                value={inputs.category}
                onChange={changeHandler}
                variant="standard"
              />
            )}
          />
          <TextField autocomplete="off" name="description" value={inputs.description} onChange={changeHandler} label="Новое описание" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} type="text" />
          <TextField autocomplete="off" name="price" value={inputs.price} onChange={changeHandler} label="Новая цена за день использования" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} type="text" />
          <TextField autocomplete="off" name="location" value={inputs.location} onChange={changeHandler} label="Новый адрес" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} type="text" />
          <TextField autocomplete="off" name="timing" value={inputs.timing} onChange={changeHandler} label="Новое максимальное время аренды" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} type="text" />
        </Box>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Отправить
        </Button>
      </div>
    </form>
  );
}
