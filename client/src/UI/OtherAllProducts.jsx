import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserItems } from '../redux/actions/userItemsAction';
import CardUser from './CardUser';

export default function OtherAllProducts({ id }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.userItems.filter((el) => el.user_id == id));
  useEffect(() => {
    dispatch(fetchUserItems());
  }, [items]);
  return (
    <div style={{ backgroundColor: 'red' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap',
      }}
      >
        {items?.map((el) => (
          <CardUser el={el} key={el.id} />
        ))}
      </div>
    </div>

  );
}
