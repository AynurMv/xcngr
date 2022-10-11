import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserItems } from '../../redux/actions/userItemsAction';
import CardUser from '../../UI/CardUser';

export default function AllActiveProducts() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { id } = user;
  const items = useSelector((state) => state.userItems.filter((el) => el.user_id === id).filter((item) => item.status == true));
  useEffect(() => {
    dispatch(fetchUserItems());
  }, [items.status]);
  console.log(items, id);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      {items?.map((el) => (
        <CardUser el={el} key={el.id} />
      ))}
    </div>
  );
}
