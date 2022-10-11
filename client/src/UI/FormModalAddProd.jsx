import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Autocomplete, Chip, ListItem } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addProduct } from '../redux/actions/productAction';

export default function FormModalAddProd({ setSlider, setAddProdActive }) {
  const dispatch = useDispatch();
  const categoriesArr = useSelector((state) => state.categories);
  const [inputs, setInputs] = useState({
    dropPhoto: [], name: '', category: '', description: '', price: '', location: '', timing: '',
  });
  const changeHandler = (e) => {
    if (e.target.files) {
      setInputs((prev) => ({
        ...prev,
        dropPhoto: e.target.files,
      }));
    } else {
      setInputs((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };
  const submitHendler = (e) => (
    dispatch(addProduct(e, inputs, setInputs, setAddProdActive, setSlider))
  );
  return (
    <form autoComplete="off" onSubmit={submitHendler}>
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
          <TextField autocomplete="off" name="description" value={inputs.description} onChange={changeHandler} label="Описание" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} type="text" />
          <TextField autocomplete="off" name="price" value={inputs.price} onChange={changeHandler} label="Цена за день использования" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} type="text" />
          <TextField autocomplete="off" name="location" value={inputs.location} onChange={changeHandler} label="Адрес" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} type="text" />
          <TextField autocomplete="off" name="timing" value={inputs.timing} onChange={changeHandler} label="Максимальное время аренды" variant="standard" style={{ width: '100%', backgroundColor: 'white' }} type="text" />
          <Button
            variant="contained"
            component="label"
          >
            Добавить фото
            <input
              id="foto"
              name="dropPhoto"
              type="file"
              hidden
              multiple
              value={inputs?.dropPhoto?.name}
              onChange={changeHandler}
            />
          </Button>
          <ListItem style={{ marginTop: '1px', overflow: 'hidden', width: '100%' }}>
            {Object.values(inputs.dropPhoto).map((el) => (
              <Chip
                label={Object.values(el.name)}
                variant="outlined"
                style={{ marginRight: '5px' }}
                key={uuidv4()}
              />
            ))}

          </ListItem>
        </Box>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Отправить
        </Button>
      </div>
    </form>
  );
}
