import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrdering } from '../../redux/actions/orderActions';
import OrderItem from '../../UI/OrderItem';

export default function RentPage() {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(setOrdering());
  }, []);
  console.log(order);
  return (
    <>
      {/* <div>{user.f_name}</div> */}
      {order.length === 0 ? (
        <div>Нет заявок</div>
      ) : (
        <div>
          { order?.map((el) => (
            <OrderItem order={el} key={el.id} />
          ))}
        </div>
      ) }
    </>
  );
}
