import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchUsers } from '../../redux/actions/usersAction';
import ModalAddProd from '../../UI/ModalAddProd';
import ModalLog from '../../UI/ModalLog';
import ModalRegistration from '../../UI/ModalRegistration';
import Telega from '../../UI/Telega';
import UserProfileFavorites from '../../UI/UserProfileFavorites';
import UserProfileProducts from '../../UI/UserProfileProducts';

export default function UserProfile({
  modal, setModal, night,
  setAddProdActive, addProdActive, regActive, setRegActive, logActive, setLogActive,
}) {
  const [btn, setBtn] = useState(false);
  const [num, setNum] = useState(true);
  const [allProducts, setAllProducts] = useState(false);
  const [isSelectedFavorite, setIsSelectedFavorite] = useState(false);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers(id));
  }, []);
  useEffect(() => {
    if (user && Number(id) === Number(user.id)) {
      navigate('/profile');
    }
  }, [user]);

  const allprod = () => {
    setAllProducts(true);
    setIsSelectedFavorite(false);
    setActive(false);
  };

  const favsprod = () => {
    setAllProducts(false);
    setIsSelectedFavorite(true);
    setActive(false);
  };

  const activesprod = () => {
    setAllProducts(false);
    setIsSelectedFavorite(false);
    setActive(true);
  };

  return (
    <>
      <>
        <div className="first-screen-profile">
          <div className="first-screen-profile__body">
            <div className="first-screen-profile__content">
              <div className="first-screen-profile__leftblock">
                <div className="first-screen-profile__leftblock-textarea">
                  <p />
                  <p style={!night === true ? ({ color: 'black' }) : ({ color: 'white' })}>{users.f_name}</p>
                  <p style={!night === true ? ({ color: 'black' }) : ({ color: 'white' })}>{users.l_name}</p>
                </div>
                <div className="first-screen-profile__leftblock-skils">
                  <p>Свяжитесь с пользователем</p>
                </div>
                <div className="first-screen-profile__leftblock-form">
                  <button onClick={() => setBtn(true)} type="button">Напишите мне в Telegram</button>
                  <>
                    {num === true ? (
                      <button onClick={() => setNum(false)} type="button">Показать номер</button>
                    ) : (
                      <button onClick={() => setNum(true)} type="button">{users.phone}</button>
                    )}
                  </>
                </div>
              </div>
              <div className="first-screen-profile__rightblock">
                <div className="first-screen-profile__rightblock-photo">
                  <img src={`http://localhost:3001/images/${users.photo}`} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stats" id="career">
          <div className="stats__body">
            <div className="stats__content">
              <div className="stats__block">
                {allProducts === false ? (
                  <div className="stats__block-one" onClick={allprod} style={{ cursor: 'pointer' }}>
                    <p>Все товары</p>
                  </div>
                ) : (
                  <div className="stats__block-one" onClick={() => setAllProducts(false)} style={{ cursor: 'pointer' }}>
                    <p>Все товары</p>
                  </div>
                )}
                {active === false ? (
                  <div className="stats__block-two" onClick={activesprod}>
                    <p>Активные товары</p>
                  </div>
                ) : (
                  <div className="stats__block-two" onClick={() => setActive(false)}>
                    <p>Активные товары</p>
                  </div>
                )}
                {isSelectedFavorite === false ? (
                  <div className="stats__block-three" onClick={favsprod} style={{ cursor: 'pointer' }}>
                    <p>Избранное</p>
                  </div>
                ) : (
                  <div className="stats__block-three" onClick={() => setIsSelectedFavorite(false)} style={{ cursor: 'pointer' }}>
                    <p>Избранное</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Telega btn={btn} setBtn={setBtn} name={users.f_name} telega={users.telegram} />
        {addProdActive === true ? (
          <ModalAddProd setAddProdActive={setAddProdActive} />
        ) : (
          <></>
        )}
        {regActive === true ? (
          <ModalRegistration setRegActive={setRegActive} />
        ) : (
          <></>
        )}
        {logActive === true ? (
          <ModalLog modal={modal} setModal={setModal} setLogActive={setLogActive} />
        ) : (
          <></>
        )}
      </>
      {allProducts === true ? (
        <div>
          <UserProfileProducts id={id} />
        </div>
      ) : (
        <div />
      )}
      {isSelectedFavorite === true ? (
        <div>
          <UserProfileFavorites id={id} />
        </div>
      ) : (
        <div />
      )}
    </>
  );
}
