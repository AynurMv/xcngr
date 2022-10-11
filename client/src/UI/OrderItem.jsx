import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { cancelOrderAsync, setOrdering } from '../redux/actions/orderActions';

export default function OrderItem({ order }) {
  console.log(order);
  const prodId = order.RentProducts[0].product_id;
  const userRenterId = order.RentProducts[0].user_renter;
  const [response, setResponse] = useState();
  // console.log(order.id);
  const dispatch = useDispatch();
  const acceptHandler = () => {
    axios(`/application/accept/${prodId}`)
      .then((res) => setResponse(res.status));
  };
  console.log(response, '------');
  const cancelHandler = () => {
    // axios.post('/application/decline', { user_renter: userRenterId, product_id: prodId });
    console.log(order.id, userRenterId, prodId);
    dispatch(cancelOrderAsync(order.id, userRenterId, prodId, setResponse));
  };
  useEffect(() => {
    dispatch(setOrdering());
  }, [response]);
  return (
    <Card sx={{ minWidth: 275, margin: '1rem' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Номер заказа:
          {' '}
          {order.id}
        </Typography>
        <Typography variant="h5" component="div">
          {/* <Link to={`/item/${order.RentProducts[0].id}`}> */}
          Объявление:
          {' '}
          {order.name}
          {/* </Link> */}
        </Typography>
        <Typography sx={{ mt: 1.5 }} color="text.secondary">
          Сообщение от пользователя
          {' '}
          {console.log('order', order)}
          <Link to={`/user/${order?.RentProducts[0]?.user_renter}`}>
            {order.RentProducts[0].f_name}
            {' '}
            {order.RentProducts[0].l_name}
          </Link>
          :
          {' '}
        </Typography>
        <Typography variant="body2">
          {order.RentProducts[0].message}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${order.id}`}><Button size="small">Посмотреть карточку товара</Button></Link>
      </CardActions>
      <>
        {order.status
          ? (
            <>
              <Button type="button" variant="contained" onClick={acceptHandler} style={{ margin: '1rem' }}>Принять заявку</Button>
              <Button type="button" variant="contained" onClick={cancelHandler} style={{ margin: '1rem' }}>Отклонить заявку</Button>
            </>
          ) : (
            <Button type="button" variant="contained" onClick={cancelHandler}>Завершить аренду</Button>

          )}
      </>
    </Card>
  );
}
