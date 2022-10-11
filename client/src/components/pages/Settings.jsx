import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/actions/usersAction';
import ModalAddProd from '../../UI/ModalAddProd';
import UpdateForm from '../../UI/UpdateForm';

export default function Settings({ night, setAddProdActive, addProdActive }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  useEffect(() => {
    dispatch(fetchUsers(user.id));
    dispatch(fetchUsers(user.id));
  }, []);
  return (
    <>
      <div className="first-screen-profile" style={{ height: '100vh' }}>
        <div className="first-screen-profile__body">
          <div className="first-screen-profile__content">
            <UpdateForm night={night} />
            <div className="first-screen-profile__rightblock">
              <div className="first-screen-profile__rightblock-photo">
                <img className="first-screen-profile__photo__redact" src={`http://localhost:3001/images/${user.photo}`} alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      {addProdActive === true ? (
        <ModalAddProd setAddProdActive={setAddProdActive} />
      ) : (
        <></>
      )}
    </>
  );
}
