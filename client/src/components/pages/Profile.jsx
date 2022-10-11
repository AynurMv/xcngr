import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkAuth } from '../../redux/actions/userAction';
import ModalAddProd from '../../UI/ModalAddProd';
import UserAllProducts from '../../UI/UserAllProducts';
import AllActiveProducts from './AllActiveProducts';
import AllFavoriteProducts from './AllFavoritesProducts';
import './index.css';

export default function Profile({ night, setAddProdActive, addProdActive }) {
  const [btn, setBtn] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [allProducts, setAllProducts] = useState(false);
  const [isSelectedFavorite, setIsSelectedFavorite] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    dispatch(checkAuth());
  }, [user.state]);

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
      <div className="first-screen-profile">
        <div className="first-screen-profile__body">
          <div className="first-screen-profile__content">
            <div className="first-screen-profile__leftblock">
              <div className="first-screen-profile__leftblock-textarea">
                <p />
                <p style={!night === true ? ({ color: 'black' }) : ({ color: 'white' })}>{user.f_name}</p>
                <p style={!night === true ? ({ color: 'black' }) : ({ color: 'white' })}>{user.l_name}</p>
              </div>
              <div className="first-screen-profile__leftblock-form">
                <form className="first-screen-profile__form" action="form\thanks\thanks.html">
                  <a target="blank" className="first-screen-profile__link" href={`https://t.me/${user.telegram}`}>
                    <button className="first-screen-profile__btn" type="button">
                      Вы указали профиль
                      {' '}
                      {user.telegram}
                    </button>
                  </a>
                  <>
                    {btn === true ? (
                      <Link to="/myorders"><button className="first-screen-profile__btn__profile first-screen-profile__btn" type="button">Мои заказы</button></Link>
                    ) : (
                      <button className="first-screen-profile__btn" onClick={() => setBtn(true)} type="button">{user.phone}</button>
                    )}
                  </>
                </form>
              </div>
            </div>
            <div className="first-screen-profile__rightblock">
              <div className="first-screen-profile__rightblock-photo">
                <img className="first-screen-profile__photo" src={`http://localhost:3001/images/${user.photo}`} alt="" />
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
      {addProdActive === true ? (
        <ModalAddProd setAddProdActive={setAddProdActive} />
      ) : (
        <div />
      )}
      <div style={!night === true ? ({ backgroundColor: 'white', color: 'white' }) : ({ backgroundColor: '#202124', color: 'white' })}>
        {allProducts === true ? (
          <div>
            <UserAllProducts />
            <div style={{ height: '10rem' }} />
          </div>
        ) : (
          <div />
        )}
        {isSelectedFavorite == true ? (
          <div>
            <AllFavoriteProducts />
            <div style={{ height: '10rem' }} />
          </div>
        ) : (
          <></>
        )}
        {active === true ? (
          <div>
            <AllActiveProducts />
            <div style={{ height: '10rem' }} />
          </div>
        ) : (
          <div />
        )}
      </div>
    </>
  );
}
